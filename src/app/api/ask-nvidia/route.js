const NVIDIA_MODEL =
  process.env.NVIDIA_MODEL || "meta/llama-3.2-3b-instruct";
const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

export async function POST(request) {
  const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;

  if (!NVIDIA_API_KEY) {
    return Response.json(
      { error: "NVIDIA API key is not configured." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { prompt } = body;

  if (!prompt || typeof prompt !== "string") {
    return Response.json(
      { error: "Invalid or missing prompt." },
      { status: 400 }
    );
  }

  try {
    const nvidiaRes = await fetch(NVIDIA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: NVIDIA_MODEL,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    const data = await nvidiaRes.json();

    if (!nvidiaRes.ok) {
      console.error("NVIDIA API error:", data);
      return Response.json(
        {
          error:
            data?.error?.message || "NVIDIA API error or quota limit reached.",
        },
        { status: 500 }
      );
    }

    const text = data?.choices?.[0]?.message?.content || "";
    return Response.json({ text }, { status: 200 });
  } catch (error) {
    console.error("NVIDIA API error:", error);
    return Response.json(
      { error: "NVIDIA API error or quota limit reached." },
      { status: 500 }
    );
  }
}
