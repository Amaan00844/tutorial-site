"use client";

import useReadingTracker from "@/components/useReadingTracker";
import React, { useState, useRef, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

function ExpressRouteParameters() {
  useReadingTracker("expressparams");
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://study-portal-backend-9zpf.onrender.com/";
  const [showGemini, setShowGemini] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/ask-gemini`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.text || "No response from SkillBridge.");
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to get response from SkillBridge.");
    } finally {
      setLoading(false);
    }
  };

  const toggleGemini = () => {
    setShowGemini(!showGemini);
    if (showGemini) {
      setPrompt("");
      setResponse("");
    }
  };

  const formatResponse = (text) => {
    if (!text) return null;

    return text.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-bold text-black my-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("* ")) {
        return (
          <li key={i} className="list-disc ml-5 my-1 text-black">
            {line.substring(2)}
          </li>
        );
      }
      if (line.match(/^#+\s/)) {
        const level = line.match(/^#+/)[0].length;
        const HeadingTag = `h${Math.min(6, level)}`;
        return (
          <HeadingTag
            key={i}
            className={`font-bold text-black my-3 text-${7 - level}xl`}
          >
            {line.replace(/^#+\s/, "")}
          </HeadingTag>
        );
      }
      if (line.trim() === "") {
        return <br key={i} />;
      }
      if (line.includes("`")) {
        const parts = line.split("`");
        return (
          <p key={i} className="my-2">
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <code
                  key={j}
                  className="bg-gray-600 px-1.5 py-0.5 rounded text-sm font-mono text-white"
                >
                  {part}
                </code>
              ) : (
                <span key={j} className="text-black">
                  {part}
                </span>
              ),
            )}
          </p>
        );
      }
      return (
        <p key={i} className="my-2 text-black">
          {line}
        </p>
      );
    });
  };

  // Clear response when prompt changes (i.e., user types a new question)
  useEffect(() => {
    setResponse("");
  }, [prompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  // Floating button when chat is closed
  if (!showGemini) {
    return (
      <div className="p-6 ml-72 relative min-h-screen">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">
          Express Route Parameters: A Beginner's Guide
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            What Are Route Parameters?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Route parameters are like special placeholders in website addresses
            that help your application understand what specific information to
            show.
            <strong> They're a bit like filling in the blanks!</strong>
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="mb-2">
              <strong>Real-world example:</strong> Imagine a library website
              where:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <code>/books/123</code> shows book with ID 123
              </li>
              <li>
                <code>/books/456</code> shows book with ID 456
              </li>
            </ul>
            <p className="mt-2">
              Instead of creating separate pages for each book, we use one route
              that adapts based on the parameter!
            </p>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Your First Route Parameter
          </h2>
          <div className="mb-4">
            <p>Here's how to create a simple user profile route:</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2">
              <code className="text-yellow-600">
                {`app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(\`User ID is: \${userId}\`);
});`}
              </code>
            </pre>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">How It Works:</h3>
              <ol className="list-decimal pl-5">
                <li>
                  <code>:userId</code> is our parameter placeholder
                </li>
                <li>
                  Express captures whatever comes after <code>/users/</code>
                </li>
                <li>
                  We access it with <code>req.params.userId</code>
                </li>
              </ol>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Try It Out:</h3>
              <p>If you visit:</p>
              <ul className="list-disc pl-5">
                <li>
                  <code>/users/42</code> → Shows "User ID is: 42"
                </li>
                <li>
                  <code>/users/alice</code> → Shows "User ID is: alice"
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Multiple Parameters
          </h2>
          <p className="mb-4">You can have multiple parameters in one route:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params;
  res.send(\`User ID: \${userId}, Book ID: \${bookId}\`);
});`}
            </code>
          </pre>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">How This Works:</h3>
            <ul className="list-disc pl-5">
              <li>
                <code>:userId</code> captures the user ID
              </li>
              <li>
                <code>:bookId</code> captures the book ID
              </li>
              <li>We use object destructuring to get both values at once</li>
            </ul>
            <p className="mt-2">
              <strong>Example:</strong> <code>/users/10/books/5</code> shows
              "User ID: 10, Book ID: 5"
            </p>
          </div>
        </section>

        <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Optional Parameters
          </h2>
          <p className="mb-4">
            Sometimes you want parameters to be optional (not required):
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`app.get('/items/:itemId?', (req, res) => {
  const itemId = req.params.itemId;
  if (itemId) {
    res.send(\`Item ID: \${itemId}\`);
  } else {
    res.send('No Item ID provided.');
  }
});`}
            </code>
          </pre>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">With Parameter:</h3>
              <p>
                <code>/items/15</code>
              </p>
              <p>Shows: "Item ID: 15"</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Without Parameter:</h3>
              <p>
                <code>/items</code>
              </p>
              <p>Shows: "No Item ID provided."</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Why Use Route Parameters?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">1. Clean URLs</h3>
              <p>
                Makes web addresses easy to read and remember compared to query
                parameters like <code>?id=123</code>
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">2. Dynamic Content</h3>
              <p>
                Lets one route handle many different cases without repeating
                code
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">3. Better Organization</h3>
              <p>Helps structure your application in a logical way</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Practice Exercise:</h3>
            <p>Try creating these routes:</p>
            <ol className="list-decimal pl-5 mt-2">
              <li>
                A product page route that shows different products (
                <code>/products/:productId</code>)
              </li>
              <li>
                A blog route with optional category (
                <code>/blog/:category?</code>)
              </li>
              <li>
                A user dashboard with multiple parameters (
                <code>/users/:userId/dashboard/:tab</code>)
              </li>
            </ol>
          </div>
        </section>

        <motion.div
          className="fixed bottom-6 right-6 w-30 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:from-gray-800 hover:to-black transition-all duration-300 z-50"
          onClick={toggleGemini}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <BsChatDots className="text-white text-lg mr-2" />
          <span className="text-white text-sm font-medium">Ask Me</span>
        </motion.div>
      </div>
    );
  }

  // Expanded chat window
  return (
    <div className="p-6 ml-72 relative min-h-screen">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Express Route Parameters: A Beginner's Guide
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          What Are Route Parameters?
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          Route parameters are like special placeholders in website addresses
          that help your application understand what specific information to
          show.
          <strong> They're a bit like filling in the blanks!</strong>
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="mb-2">
            <strong>Real-world example:</strong> Imagine a library website
            where:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <code>/books/123</code> shows book with ID 123
            </li>
            <li>
              <code>/books/456</code> shows book with ID 456
            </li>
          </ul>
          <p className="mt-2">
            Instead of creating separate pages for each book, we use one route
            that adapts based on the parameter!
          </p>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Your First Route Parameter
        </h2>
        <div className="mb-4">
          <p>Here's how to create a simple user profile route:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2">
            <code className="text-yellow-600">
              {`app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(\`User ID is: \${userId}\`);
});`}
            </code>
          </pre>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">How It Works:</h3>
            <ol className="list-decimal pl-5">
              <li>
                <code>:userId</code> is our parameter placeholder
              </li>
              <li>
                Express captures whatever comes after <code>/users/</code>
              </li>
              <li>
                We access it with <code>req.params.userId</code>
              </li>
            </ol>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Try It Out:</h3>
            <p>If you visit:</p>
            <ul className="list-disc pl-5">
              <li>
                <code>/users/42</code> → Shows "User ID is: 42"
              </li>
              <li>
                <code>/users/alice</code> → Shows "User ID is: alice"
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Multiple Parameters
        </h2>
        <p className="mb-4">You can have multiple parameters in one route:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-yellow-600">
            {`app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params;
  res.send(\`User ID: \${userId}, Book ID: \${bookId}\`);
});`}
          </code>
        </pre>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">How This Works:</h3>
          <ul className="list-disc pl-5">
            <li>
              <code>:userId</code> captures the user ID
            </li>
            <li>
              <code>:bookId</code> captures the book ID
            </li>
            <li>We use object destructuring to get both values at once</li>
          </ul>
          <p className="mt-2">
            <strong>Example:</strong> <code>/users/10/books/5</code> shows "User
            ID: 10, Book ID: 5"
          </p>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Optional Parameters
        </h2>
        <p className="mb-4">
          Sometimes you want parameters to be optional (not required):
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-yellow-600">
            {`app.get('/items/:itemId?', (req, res) => {
  const itemId = req.params.itemId;
  if (itemId) {
    res.send(\`Item ID: \${itemId}\`);
  } else {
    res.send('No Item ID provided.');
  }
});`}
            MEN
          </code>
        </pre>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">With Parameter:</h3>
            <p>
              <code>/items/15</code>
            </p>
            <p>Shows: "Item ID: 15"</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Without Parameter:</h3>
            <p>
              <code>/items</code>
            </p>
            <p>Shows: "No Item ID provided."</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Why Use Route Parameters?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">1. Clean URLs</h3>
            <p>
              Makes web addresses easy to read and remember compared to query
              parameters like <code>?id=123</code>
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">2. Dynamic Content</h3>
            <p>
              Lets one route handle many different cases without repeating code
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">3. Better Organization</h3>
            <p>Helps structure your application in a logical way</p>
          </div>
        </div>
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Practice Exercise:</h3>
          <p>Try creating these routes:</p>
          <ol className="list-decimal pl-5 mt-2">
            <li>
              A product page route that shows different products (
              <code>/products/:productId</code>)
            </li>
            <li>
              A blog route with optional category (<code>/blog/:category?</code>
              )
            </li>
            <li>
              A user dashboard with multiple parameters (
              <code>/users/:userId/dashboard/:tab</code>)
            </li>
          </ol>
        </div>
      </section>

      {/* Chat Window with black and white theme and animation */}
      <motion.div
        className="fixed bottom-6 right-6 w-96 h-[400px] bg-black rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="p-4 bg-black text-white flex justify-between items-center">
          <div className="flex items-center">
            <PiFlowerLotusDuotone className="text-blue-400 w-6 h-6 mr-2" />
            <strong className="text-lg">SkillBridge AI Assistant</strong>
          </div>
          <button
            onClick={toggleGemini}
            className="text-white hover:bg-gray-800 rounded-full p-1 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 bg-white border border-2 overflow-y-auto">
          {!prompt && !response && !loading && (
            <div className="mb-4">
              <div className="font-bold text-black mb-2">SkillBridge</div>
              <div className="text-black text-sm">How could I help you?</div>
            </div>
          )}
          {prompt && (
            <div className="mb-4">
              <div className="font-bold text-black mb-2">You</div>
              <div className="text-black text-sm">{prompt}</div>
            </div>
          )}
          {response && (
            <div className="mb-4">
              <div className="font-bold text-black mb-2">SkillBridge</div>
              <div className="text-black text-sm">
                {formatResponse(response)}
              </div>
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-700 bg-black">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 p-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none h-12 text-sm focus:outline-none text-black bg-white placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className={`bg-gradient-to-r from-gray-700 to-gray-900 text-white p-2 rounded-lg hover:from-gray-800 hover:to-black focus:outline-none transition duration-200 ${
                loading || !prompt.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ExpressRouteParameters;
