import React, { useState, useRef, useEffect } from "react";
import { BsChatDots, BsArrowUp, BsTrash, BsCopy } from "react-icons/bs";
import { PiFlowerLotusDuotone, PiSpinnerGap } from "react-icons/pi";

export default function InvidiaChat() {
  const [showChat, setShowChat] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || loading) return;

    const userMessage = {
      type: "user",
      content: prompt,
      timestamp: Date.now(),
    };

    // Unique timestamp for the bot reply we're about to stream into
    const botTimestamp = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      userMessage,
      { type: "bot", content: "", timestamp: botTimestamp, isStreaming: true },
    ]);

    const currentPrompt = prompt;
    setPrompt("");
    setLoading(true);
    setError("");

    try {
      // Build history for conversation memory (exclude streaming/error states)
      const history = messages
        .filter((m) => !m.isStreaming && !m.isError && m.content)
        .map((m) => ({ type: m.type, content: m.content }));

      const res = await fetch("/api/ask-nvidia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentPrompt, history }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Server error: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Accumulate chunks — a single read() may have partial SSE lines
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");

        // Keep the last (possibly incomplete) line in the buffer
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;

          const data = trimmed.slice(6);
          if (data === "[DONE]") break;

          try {
            // LangChain SSE format: { token: "..." }
            const json = JSON.parse(data);
            const token = json.token ?? "";
            if (token) {
              fullContent += token;
              // Update the bot message in place — no flicker
              setMessages((prev) =>
                prev.map((m) =>
                  m.timestamp === botTimestamp
                    ? { ...m, content: fullContent }
                    : m
                )
              );
            }
          } catch {
            // Skip malformed SSE chunks
          }
        }
      }

      // Mark streaming complete (removes blinking cursor)
      setMessages((prev) =>
        prev.map((m) =>
          m.timestamp === botTimestamp ? { ...m, isStreaming: false } : m
        )
      );
    } catch (err) {
      console.error("Stream error:", err);
      setError("Failed to connect to SkillBridge. Please try again.");
      setMessages((prev) =>
        prev.map((m) =>
          m.timestamp === botTimestamp
            ? {
                ...m,
                content:
                  "Sorry, I'm having trouble connecting right now. Please try again.",
                isError: true,
                isStreaming: false,
              }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setShowChat((v) => !v);
    if (!showChat) setError("");
  };

  const clearChat = () => {
    setMessages([]);
    setPrompt("");
    setError("");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(console.error);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Blinking cursor component shown while streaming
  const BlinkingCursor = () => (
    <span
      className="inline-block w-[2px] h-4 bg-blue-500 ml-[1px] align-middle"
      style={{ animation: "blink 0.8s step-end infinite" }}
    />
  );

  const formatResponse = (text, isStreaming) => {
    if (!text && isStreaming) return <BlinkingCursor />;
    if (!text) return null;

    const elements = text.split("\n").map((line, i) => {
      // Bold **text**
      if (line.includes("**")) {
        const parts = line.split("**");
        return (
          <p key={i} className="my-2 leading-relaxed">
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <strong
                  key={j}
                  className="font-semibold bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent"
                >
                  {part}
                </strong>
              ) : (
                <span
                  key={j}
                  className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent"
                >
                  {part}
                </span>
              )
            )}
          </p>
        );
      }

      // List items
      if (line.startsWith("* ") || line.startsWith("- ")) {
        return (
          <li
            key={i}
            className="list-disc ml-6 my-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent leading-relaxed"
          >
            {line.substring(2)}
          </li>
        );
      }

      // Numbered list
      if (line.match(/^\d+\.\s/)) {
        return (
          <li
            key={i}
            className="list-decimal ml-6 my-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent leading-relaxed"
          >
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }

      // Headings
      if (line.match(/^#+\s/)) {
        const level = line.match(/^#+/)[0].length;
        const HeadingTag = `h${Math.min(6, level)}`;
        const sizeClass =
          level === 1 ? "text-xl" : level === 2 ? "text-lg" : "text-base";
        return React.createElement(
          HeadingTag,
          {
            key: i,
            className: `font-bold my-3 ${sizeClass} bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent`,
          },
          line.replace(/^#+\s/, "")
        );
      }

      // Empty line
      if (line.trim() === "") return <div key={i} className="h-2" />;

      // Inline code
      if (line.includes("`")) {
        const parts = line.split("`");
        return (
          <p key={i} className="my-2 leading-relaxed">
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <code
                  key={j}
                  className="bg-gray-600 px-2 py-1 rounded text-sm font-mono text-white"
                >
                  {part}
                </code>
              ) : (
                <span
                  key={j}
                  className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent"
                >
                  {part}
                </span>
              )
            )}
          </p>
        );
      }

      // Default paragraph
      return (
        <p
          key={i}
          className="my-2 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent leading-relaxed"
        >
          {line}
        </p>
      );
    });

    return (
      <>
        {elements}
        {isStreaming && <BlinkingCursor />}
      </>
    );
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (showChat && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showChat]);

  return (
    <>
      {/* Blink keyframe injected once */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Floating Button */}
      {!showChat && (
        <div
          className="fixed bottom-6 right-6 w-40 h-16 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:from-gray-800 hover:to-black hover:scale-105 transition-all duration-300 z-50 group"
          onClick={toggleChat}
        >
          <BsChatDots className="text-white text-lg mr-2 group-hover:animate-pulse" />
          <span className="text-white text-sm font-medium">Ask me</span>
        </div>
      )}

      {/* Chatbox */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-black rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-700">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex justify-between items-center">
            <div className="flex items-center">
              <PiFlowerLotusDuotone className="text-blue-400 w-6 h-6 mr-2" />
              <strong className="text-lg">SkillBridge AI</strong>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all duration-200"
                title="Clear chat"
              >
                <BsTrash className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all duration-200"
                title="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mx-4 mt-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            {messages.length === 0 && !loading && (
              <div className="text-center py-8">
                <PiFlowerLotusDuotone className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <p className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] bg-clip-text text-transparent font-medium mb-2">
                  Welcome to SkillBridge AI!
                </p>
                <p className="text-gray-500 text-sm">How can I help you today?</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.timestamp}
                className={`mb-4 ${
                  message.type === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
                      : message.isError
                        ? "bg-red-900/10 border border-red-500/30"
                        : "bg-gray-50 border border-gray-200 shadow-sm"
                  }`}
                >
                  {message.type === "user" ? (
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  ) : (
                    <div className="text-sm">
                      {formatResponse(message.content, message.isStreaming)}
                      {!message.isError && !message.isStreaming && message.content && (
                        <button
                          onClick={() => copyToClipboard(message.content)}
                          className="mt-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="Copy response"
                        >
                          <BsCopy className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
            <div className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 rounded-xl border border-gray-600 focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none max-h-32 text-sm focus:outline-none text-black bg-white placeholder-gray-400 transition-all duration-200"
                  rows="1"
                  style={{
                    minHeight: "44px",
                    height: "auto",
                    overflowY:
                      prompt.split("\n").length > 3 ? "scroll" : "hidden",
                  }}
                />
                <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                  {prompt.length}/1000
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={loading || !prompt.trim() || prompt.length > 1000}
                className={`bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-3 rounded-xl hover:from-gray-800 hover:to-black focus:outline-none transition-all duration-200 transform ${
                  loading || !prompt.trim() || prompt.length > 1000
                    ? "opacity-50 cursor-not-allowed scale-95"
                    : "hover:scale-105 shadow-lg"
                }`}
              >
                {loading ? (
                  <PiSpinnerGap className="h-5 w-5 animate-spin" />
                ) : (
                  <BsArrowUp className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-300 mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  );
}
