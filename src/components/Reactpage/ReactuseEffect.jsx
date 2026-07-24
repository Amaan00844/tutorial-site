"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React, { useEffect, useState } from "react";

function ReactuseEffect() {
  // Track this page view for reading tracker
  useReadingTracker("reactuseeffect");

  // States to store count and text input
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Understanding useEffect in React
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The <code>useEffect</code> hook in React is one of the most powerful and
        commonly used hooks. It lets you perform side effects in your
        components, such as fetching data, manipulating the DOM, setting up
        subscriptions, and more.
      </p>

      <div className="bg-white p-6  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          What is a Side Effect?
        </h2>
        <p className="text-gray-800 mb-6">
          Side effects are operations that can affect other components and can't
          be done during rendering. Examples include:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
          <li>Data fetching from an API</li>
          <li>Manual DOM manipulation</li>
          <li>Setting up subscriptions or timers</li>
          <li>Logging values</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Basic Syntax
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`useEffect(() => {
  // Code for side effect
}, [dependencies]);`}
            // useEffect accepts a callback function and an optional array of
            dependencies.
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Example: Updating the Document Title
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`; // Updates the document title whenever count changes
  }, [count]); // Dependency array to run the effect when 'count' changes

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
            // In this example, document title updates based on the 'count'
            state.
          </code>
        </pre>

        <p className="text-gray-800 mb-6">
          In this example, the document title updates every time{" "}
          <code>count</code> changes. The dependency array <code>[count]</code>{" "}
          ensures that the effect only runs when <code>count</code> changes.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Cleaning Up Effects
        </h2>
        <p className="text-gray-800 mb-6">
          Some side effects like subscriptions or timers need to be cleaned up
          to avoid memory leaks. You can return a cleanup function from{" "}
          <code>useEffect</code>.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Running timer...');
  }, 1000);

  return () => clearInterval(timer); // Cleanup the timer when the component unmounts or effect is re-run
}, []);`}
            // This example sets a timer, and the cleanup function clears the
            timer when the effect is cleaned up.
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          When Does useEffect Run?
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
          <li>After every render (if no dependency array is provided)</li>
          <li>
            Only on first render (if an empty array <code>[]</code> is provided)
          </li>
          <li>When specific dependencies change (if specified in the array)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Example in Action
        </h2>
        <div className="bg-pink-50 p-4 rounded-md mb-6">
          <p className="mb-2">Try typing below to see useEffect in action:</p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-pink-700 rounded-md p-2 mb-2"
            placeholder="Type something..."
          />
          <p className="text-sm">You typed: {text}</p>
        </div>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`useEffect(() => {
  console.log('Text changed:', text); // Logs text change every time 'text' state changes
}, [text]);`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Always specify dependencies to avoid unnecessary re-renders or bugs.
          </li>
          <li>
            Use multiple <code>useEffect</code> hooks for unrelated effects.
          </li>
          <li>Clean up subscriptions or timeouts to prevent memory leaks.</li>
          <li>
            Avoid async functions directly inside useEffect—use a nested
            function instead.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Common Mistakes
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Forgetting to include dependencies</li>
          <li>Using stale state inside the effect</li>
          <li>
            Triggering infinite loops by updating state inside useEffect without
            proper dependencies
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-800 mb-6">
          The <code>useEffect</code> hook is vital for performing side effects
          in your React applications. By understanding how and when it runs, and
          how to use dependencies and cleanups properly, you can build more
          dynamic and efficient components.
        </p>

     
      </div>
    </div>
  );
}

export default ReactuseEffect;
