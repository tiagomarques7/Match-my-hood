exports.handler = async function (event) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  // Basic rate limiting check via headers (Netlify adds these)
  const ip = event.headers["x-forwarded-for"] || "unknown";

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  const { homeCity, homeHood, destCity } = body;

  // Input validation
  if (!homeCity || !homeHood || !destCity) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  if (homeCity === destCity) {
    return { statusCode: 400, body: JSON.stringify({ error: "Home city and destination must be different" }) };
  }

  // Sanitise inputs — strip any prompt injection attempts
  const sanitise = (str) => str.replace(/[<>{}]/g, "").slice(0, 80);
  const safehomeCity = sanitise(homeCity);
  const safehomeHood = sanitise(homeHood);
  const safedestCity  = sanitise(destCity);

  const prompt = `You are MatchMyHood, an AI-powered neighbourhood matching tool for travellers.

A traveller loves "${safehomeHood}" in ${safehomeCity}. They are travelling to ${safedestCity} and want to find the most similar neighbourhoods there.

Analyse what makes ${safehomeHood} special (vibe, walkability, food scene, wine bars, nightlife, safety, cost level, community feel, architecture) and find the top 3 matching neighbourhoods in ${safedestCity}.

Respond ONLY with a valid JSON array (no markdown, no extra text, no code fences) with exactly this structure:
[
  {
    "name": "Neighbourhood Name",
    "city": "${safedestCity}",
    "matchScore": 92,
    "tagline": "One evocative sentence describing this neighbourhood",
    "whyItMatches": "2-3 sentences explaining exactly why this matches ${safehomeHood} in ${safehomeCity}. Be specific about shared qualities.",
    "vibes": ["tag1", "tag2", "tag3", "tag4"],
    "foodPick": "One specific real restaurant or food market name",
    "winePick": "One specific real wine bar or bar name",
    "walkScore": "High",
    "costLevel": "Mid-range",
    "bestFor": "Who this neighbourhood suits best in one short sentence"
  }
]

Rules:
- Return ONLY the JSON array, nothing else
- Be accurate — only use real neighbourhoods that actually exist in ${safedestCity}
- Match scores: top match 88-96%, second 82-91%, third 78-88%
- All three scores must be different and descending
- Vibes: 3-5 short punchy tags max
- foodPick and winePick must be real named establishments if possible`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1200,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Claude API error:", response.status, err);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Matching service unavailable. Please try again." }),
      };
    }

    const data = await response.json();
    const text = data.content[0].text.trim();

    // Parse and validate JSON
    let matches;
    try {
      const cleaned = text.replace(/```json|```/g, "").trim();
      matches = JSON.parse(cleaned);
      if (!Array.isArray(matches) || matches.length === 0) throw new Error("Invalid format");
    } catch {
      console.error("Parse error, raw text:", text);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Could not parse match results. Please try again." }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ matches }),
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong. Please try again in a moment." }),
    };
  }
};
