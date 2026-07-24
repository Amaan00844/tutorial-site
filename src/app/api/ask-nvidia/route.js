import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";

const NVIDIA_MODEL = process.env.NVIDIA_MODEL || "meta/llama-3.1-8b-instruct";

const SYSTEM_PROMPT = `You are SkillBridge AI, an expert coding tutor and mentor built into the SkillBridge learning platform.

Your expertise covers: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, SQL, PHP, Python, Java, and Next.js.

Guidelines:
- Give clear, concise, beginner-friendly explanations
- Always include practical code examples with proper formatting using backticks
- Break complex concepts into simple steps
- If the user makes a mistake, gently correct them and explain why
- Encourage learners and keep responses motivating
- For coding questions, explain the "why" not just the "how"
- Keep responses focused and avoid unnecessary filler text
- Use bullet points and numbered lists for step-by-step instructions`;

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

  const { prompt, history = [] } = body;

  if (!prompt || typeof prompt !== "string") {
    return Response.json({ error: "Invalid or missing prompt." }, { status: 400 });
  }

  try {
    // LangChain ChatOpenAI → pointed at NVIDIA's OpenAI-compatible API
    const model = new ChatOpenAI({
      model: NVIDIA_MODEL,
      apiKey: NVIDIA_API_KEY,
      streaming: true,
      temperature: 0.7,
      maxTokens: 1024,
      configuration: {
        baseURL: "https://integrate.api.nvidia.com/v1",
      },
    });

    // Build message history for conversation memory
    const messages = [
      new SystemMessage(SYSTEM_PROMPT),
      // Replay previous conversation turns
      ...history.map((m) =>
        m.type === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      ),
      new HumanMessage(prompt),
    ];

    // Stream response from NVIDIA via LangChain
    const stream = await model.stream(messages);

    // Convert LangChain async iterable → SSE ReadableStream
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const token = chunk.content;
            if (token) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ token })}\n\n`
                )
              );
            }
          }
        } catch (err) {
          console.error("LangChain stream error:", err);
        } finally {
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("LangChain NVIDIA error:", error);
    return Response.json(
      { error: "AI service error. Please try again." },
      { status: 500 }
    );
  }
}
