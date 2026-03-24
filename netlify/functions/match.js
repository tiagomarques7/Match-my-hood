exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  const { homeCity, homeHood, destCity, vibes, intent } = body;

  if (!homeCity || !homeHood || !destCity) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  if (homeCity === destCity) {
    return { statusCode: 400, body: JSON.stringify({ error: "Home city and destination must be different" }) };
  }

  const sanitise = (str) => str.replace(/[<>{}]/g, "").slice(0, 80);
  const safehomeCity = sanitise(homeCity);
  const safehomeHood = sanitise(homeHood);
  const safedestCity = sanitise(destCity);
  const safeVibes = Array.isArray(vibes) ? vibes.map(v => sanitise(v)).join(", ") : "";
  const safeIntent = intent === "move" ? "relocating long-term" : "visiting as a traveller";

  const vibeContext = safeVibes
    ? `\nThe traveller especially values: ${safeVibes}. Weight these dimensions more heavily in your matching.`
    : "";

  const intentContext = intent === "move"
    ? "\nThis person is RELOCATING — emphasise cost, community feel, daily life amenities, and long-term liveability."
    : "\nThis person is VISITING — emphasise walkability, food scene, nightlife, and things to do.";

  const prompt = `You are MatchMyHood, an expert AI neighbourhood matching tool for travellers and relocators.

A person loves "${safehomeHood}" in ${safehomeCity}. They are ${safeIntent} to ${safedestCity} and want to find the most similar neighbourhoods.${vibeContext}${intentContext}

Analyse what makes ${safehomeHood} special and find the top 3 matching neighbourhoods in ${safedestCity}.

Respond ONLY with a valid JSON array (no markdown, no extra text, no code fences):
[
  {
    "name": "Neighbourhood Name",
    "city": "${safedestCity}",
    "matchScore": 92,
    "tagline": "One evocative sentence describing this neighbourhood",
    "whyItMatches": "2-3 sentences explaining exactly why this matches ${safehomeHood}. Be specific about shared qualities.",
    "vibes": ["tag1", "tag2", "tag3", "tag4"],
    "top3Restaurants": [
      {"name": "Restaurant Name", "description": "One line description"},
      {"name": "Restaurant Name", "description": "One line description"},
      {"name": "Restaurant Name", "description": "One line description"}
    ],
    "top3WineBars": [
      {"name": "Bar Name", "description": "One line description"},
      {"name": "Bar Name", "description": "One line description"},
      {"name": "Bar Name", "description": "One line description"}
    ],
    "top3ThingsToDo": [
      {"name": "Thing to do", "description": "One line description"},
      {"name": "Thing to do", "description": "One line description"},
      {"name": "Thing to do", "description": "One line description"}
    ],
    "mustTry": "The one iconic food or drink you MUST try here e.g. croissant at X, ginjinha at Y",
    "walkScore": "High",
    "costLevel": "Mid-range",
    "bestFor": "Who this neighbourhood suits best in one short sentence",
    "unsplashQuery": "neighbourhood city street photography search query",
    "lat": 41.1234,
    "lng": -8.6789
  }
]

Rules:
- Return ONLY the JSON array, nothing else
- Only use real neighbourhoods that actually exist in ${safedestCity}
- Match scores: top match 88-96%, second 82-91%, third 78-88% all different and descending
- Vibes: 3-5 short punchy tags
- All restaurant and bar names must be real establishments if possible
- lat and lng must be the actual approximate coordinates of the neighbourhood centre
- unsplashQuery should be 3-5 words that would find great street photos of this neighbourhood`;

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
        max_tokens: 2500,
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
