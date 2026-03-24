const https = require("https");

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

  const prompt = `You are MatchMyHood, an expert neighbourhood matching tool.

A person loves "${safehomeHood}" in ${safehomeCity}. They are ${safeIntent} to ${safedestCity}.${vibeContext}${intentContext}

Find the TOP 3 matching neighbourhoods in ${safedestCity} based on character, energy, food scene, nightlife, and price point.

CRITICAL RULES:
- Neighbourhoods must genuinely exist in ${safedestCity}
- Every restaurant and bar MUST be physically inside that neighbourhood — not elsewhere in the city. If unsure, omit it.
- Match character genuinely — gritty creative = gritty creative, not polished riverside
- lat/lng must be the neighbourhood centre coordinates, not the city centre

Respond ONLY with a valid JSON array, no markdown:
[
  {
    "name": "Neighbourhood Name",
    "city": "${safedestCity}",
    "matchScore": 92,
    "tagline": "One sentence",
    "whyItMatches": "2 sentences explaining why this matches ${safehomeHood}.",
    "vibes": ["tag1", "tag2", "tag3"],
    "top3Restaurants": [
      {"name": "Name", "description": "Short line", "googleMapsQuery": "Name ${safedestCity}"},
      {"name": "Name", "description": "Short line", "googleMapsQuery": "Name ${safedestCity}"},
      {"name": "Name", "description": "Short line", "googleMapsQuery": "Name ${safedestCity}"}
    ],
    "top3WineBars": [
      {"name": "Name", "description": "Short line", "googleMapsQuery": "Name ${safedestCity}"},
      {"name": "Name", "description": "Short line", "googleMapsQuery": "Name ${safedestCity}"},
      {"name": "Name", "description": "Short line", "googleMapsQuery": "Name ${safedestCity}"}
    ],
    "top3ThingsToDo": [
      {"name": "Name", "description": "Short line", "gygQuery": "experience ${safedestCity}", "isPaid": false},
      {"name": "Name", "description": "Short line", "gygQuery": "experience ${safedestCity}", "isPaid": true},
      {"name": "Name", "description": "Short line", "gygQuery": "experience ${safedestCity}", "isPaid": false}
    ],
    "mustTry": "One iconic food or drink and where to get it",
    "walkScore": "High",
    "costLevel": "Mid-range",
    "bestFor": "One short sentence",
    "unsplashQuery": "3-4 word photo query",
    "lat": 41.1234,
    "lng": -8.6789
  }
]

Rules: 3 results only, descending match scores (88-96%, 82-91%, 78-88%), JSON only, real venues inside the neighbourhood, lat/lng = neighbourhood centre.`;

  try {
    const requestBody = JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 2500,
      messages: [{ role: "user", content: prompt }],
    });

    const claudeResponse = await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
          "Content-Length": Buffer.byteLength(requestBody),
        },
      }, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => resolve({ status: res.statusCode, body: data }));
      });
      req.on("error", reject);
      req.write(requestBody);
      req.end();
    });

    if (claudeResponse.status !== 200) {
      console.error("Claude API error:", claudeResponse.status, claudeResponse.body);
      return { statusCode: 502, body: JSON.stringify({ error: "Claude API error: " + claudeResponse.status + " — " + claudeResponse.body }) };
    }

    const data = JSON.parse(claudeResponse.body);
    const text = data.content[0].text.trim();

    let matches;
    try {
      const cleaned = text.replace(/```json|```/g, "").trim();
      matches = JSON.parse(cleaned);
      if (!Array.isArray(matches) || matches.length === 0) throw new Error("Invalid format");
    } catch {
      console.error("Parse error:", text);
      return { statusCode: 502, body: JSON.stringify({ error: "Could not parse results. Raw: " + text.slice(0, 200) }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ matches }),
    };

  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Something went wrong. Please try again." }) };
  }
};
