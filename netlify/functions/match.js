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

A person loves "${safehomeHood}" in ${safehomeCity}. They are ${safeIntent} to ${safedestCity}.${vibeContext}${intentContext}

Analyse what makes ${safehomeHood} special — its character, energy, demographics, architecture, food scene, nightlife, and price point — then find the top 3 genuinely matching neighbourhoods in ${safedestCity}.

CRITICAL GEOGRAPHIC ACCURACY RULES — violating these will make the product unusable:
- Every neighbourhood you return MUST genuinely exist and be commonly known by that name in ${safedestCity}.
- Every restaurant and bar MUST be physically located INSIDE or directly on the border of that specific neighbourhood — NOT elsewhere in the city. If a venue is famous but located in a different neighbourhood, exclude it entirely and pick one you ARE confident about.
- If you are not certain a venue is inside the neighbourhood, omit it. Accuracy matters more than completeness.
- The neighbourhood match must reflect genuine character similarity — a gritty creative district should match another gritty creative district, not a polished riverside development.
- lat and lng must be the actual coordinates of that neighbourhood centre, not the city centre.

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "name": "Neighbourhood Name",
    "city": "${safedestCity}",
    "matchScore": 92,
    "tagline": "One evocative sentence describing this neighbourhood",
    "whyItMatches": "2-3 sentences explaining exactly why this matches ${safehomeHood}. Be specific.",
    "vibes": ["tag1", "tag2", "tag3", "tag4"],
    "top3Restaurants": [
      {"name": "Real Restaurant Name", "description": "One line — must be inside this neighbourhood", "googleMapsQuery": "Restaurant Name ${safedestCity}"},
      {"name": "Real Restaurant Name", "description": "One line — must be inside this neighbourhood", "googleMapsQuery": "Restaurant Name ${safedestCity}"},
      {"name": "Real Restaurant Name", "description": "One line — must be inside this neighbourhood", "googleMapsQuery": "Restaurant Name ${safedestCity}"}
    ],
    "top3WineBars": [
      {"name": "Real Bar Name", "description": "One line — must be inside this neighbourhood", "googleMapsQuery": "Bar Name ${safedestCity}"},
      {"name": "Real Bar Name", "description": "One line — must be inside this neighbourhood", "googleMapsQuery": "Bar Name ${safedestCity}"},
      {"name": "Real Bar Name", "description": "One line — must be inside this neighbourhood", "googleMapsQuery": "Bar Name ${safedestCity}"}
    ],
    "top3ThingsToDo": [
      {"name": "Experience or Attraction", "description": "One line", "gygQuery": "experience name ${safedestCity}", "isPaid": false},
      {"name": "Experience or Attraction", "description": "One line", "gygQuery": "experience name ${safedestCity}", "isPaid": true},
      {"name": "Experience or Attraction", "description": "One line", "gygQuery": "experience name ${safedestCity}", "isPaid": false}
    ],
    "mustTry": "The one iconic food or drink specific to this neighbourhood and where to get it — e.g. ginjinha at A Ginjinha, pastel de nata at Pasteis de Belem",
    "walkScore": "High",
    "costLevel": "Mid-range",
    "bestFor": "Who this neighbourhood suits best",
    "unsplashQuery": "3-5 word search query for great street photos",
    "lat": 41.1234,
    "lng": -8.6789
  }
]

Rules:
- ONLY valid JSON array, nothing else
- Only real neighbourhoods in ${safedestCity}
- Match scores descending: 88-96%, 82-91%, 78-88%
- All restaurant/bar names must be real and located inside the matched neighbourhood
- googleMapsQuery should find the venue on Google Maps
- gygQuery should find the experience on GetYourGuide
- isPaid: true for ticketed experiences, false for free
- lat/lng: actual coordinates of neighbourhood centre`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2800,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Claude API error:", response.status, err);
      return { statusCode: 502, body: JSON.stringify({ error: "Matching service unavailable. Please try again." }) };
    }

    const data = await response.json();
    const text = data.content[0].text.trim();

    let matches;
    try {
      const cleaned = text.replace(/```json|```/g, "").trim();
      matches = JSON.parse(cleaned);
      if (!Array.isArray(matches) || matches.length === 0) throw new Error("Invalid format");
    } catch {
      console.error("Parse error:", text);
      return { statusCode: 502, body: JSON.stringify({ error: "Could not parse results. Please try again." }) };
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
