"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React, { useState, useEffect } from "react";

function useWindowWidth() {
  useReadingTracker("reacthooks");

  // Initialize with a default value
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth); // Set initial width on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function React_custom_hooks() {
  const windowWidth = useWindowWidth();

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Understanding Custom Hooks in React
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Custom Hooks let you extract and reuse stateful logic between
        components. They start with <code>use</code> and follow the same rules
        as built-in hooks.
      </p>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Why Create Custom Hooks?
        </h2>
        <p className="text-gray-800 mb-4">
          When you find yourself repeating logic across multiple components
          (e.g., fetching data, handling window size, form validation), a custom
          hook helps you abstract that logic cleanly and reuse it efficiently.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Creating Your First Custom Hook
        </h2>
        <p className="text-gray-800 mb-2">
          Here's a simple example: tracking window width.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(0);  // Initialize with default value

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);  // Update width on resize
    setWidth(window.innerWidth);  // Set initial width on mount
    window.addTPPListener('resize', handleResize);  // Add event listener

    return () => window.removeEventListener('resize', handleResize);  // Cleanup on unmount
  }, []);  // Empty dependency array: runs only once (on mount)

  return width;  // Return current window width
}`}
          </code>
        </pre>

        <p className="text-gray-800 mb-6">
          Now, you can use <code>useWindowWidth</code> in any component to get
          the window width:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`const width = useWindowWidth();  // Use the custom hook to get the window width
return <p>Window width: {width}px</p>;`}
          </code>
        </pre>

        <div className="bg-pink-50 p-4 rounded-md mb-6">
          <p className="mb-2 font-medium">Current Window Width:</p>
          <p className="text-lg text-pink-700 font-bold">{windowWidth}px</p>
        </div>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Custom Hook for Fetching Data
        </h2>
        <p className="text-gray-800 mb-4">
          Another common use case is fetching data from an API.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`function useFetch(url) {
  const [data, setData] = useState(null);  // State for storing fetched data
  const [loading, setLoading] = useState(true);  // State to track loading status

  useEffect(() => {
    fetch(url)  // Fetch data from the given URL
      .then(res => res.json()) 44 Parse the response as JSON
      .then(data => {
        setData(data);  // Set the fetched data to the state
        setLoading(false);  // Mark loading as false
      });
  }, [url]);  // Re-run this effect when the URL changes

  return { data, loading };  // Return the data and loading state
}`}
          </code>
        </pre>

        <p className="text-gray-800 mb-4">Usage of the custom fetch hook:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`const { data, loading } = useFetch('https://api.example.com/posts');`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Rules of Custom Hooks
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>
            Always start hook names with <code>use</code>
          </li>
          <li>
            Use other hooks inside them (like <code>useState</code>,{" "}
            <code>useEffect</code>)
          </li>
          <li>Don't use hooks inside conditionals or loops</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>Keep hooks focused on a single concern</li>
          <li>
            Use meaningful names (e.g., <code>useAuth</code>,{" "}
            <code>useDarkMode</code>)
          </li>
          <li>Test hooks logic separately</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-800 mb-6">
          Custom hooks help you write clean, reusable, and modular React code.
          They reduce duplication and make complex logic easier to manage across
          your app.
        </p>

    
      </div>
    </div>
  );
}

export default React_custom_hooks;