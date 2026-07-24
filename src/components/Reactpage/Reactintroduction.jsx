"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Reactintroduction() {
  useReadingTracker("reactintroduction");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Introduction to React
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        React is a powerful JavaScript library for building user interfaces,
        developed and maintained by Facebook (now Meta). It focuses on creating
        fast, interactive, and scalable front-end applications by breaking down
        the UI into reusable pieces called components. React is the core
        technology behind many popular apps such as Instagram, Facebook, and
        WhatsApp Web.
      </p>

      <div className="bg-white p-6  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          What is React?
        </h2>
        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            React is a JavaScript library used to build the view layer of web
            applications. In a traditional website, each interaction often
            causes the entire page to reload. React changes that by enabling
            Single Page Applications (SPAs), where only parts of the page update
            when something changes — without a full reload.
          </p>

          <p>
            The entire UI in React is built using components. These components
            are like small building blocks. For example, a "Button", "Header",
            or "Card" in a UI can each be a separate component. Components can
            be reused and nested inside one another.
          </p>

          <p>
            React tracks changes using something called the Virtual DOM, a
            lightweight copy of the real DOM. When a change occurs (like a user
            typing in a form), React calculates the difference between the old
            and new Virtual DOMs and updates only the changed parts of the real
            DOM. This efficient update process makes React faster than direct
            DOM manipulation.
          </p>

          <h3 className="text-xl text-pink-400 mb-3">Why Use React?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Reusable Components:</strong> Once you build a component
              (e.g., a custom Button), you can reuse it anywhere, saving time
              and keeping your code clean and DRY (Don’t Repeat Yourself).
            </li>
            <li>
              <strong>Declarative Syntax:</strong> Instead of writing
              step-by-step instructions for what the UI should do, you describe
              how it should look in a specific state, and React handles the
              rest.
            </li>
            <li>
              <strong>Virtual DOM:</strong> React minimizes expensive DOM
              operations by only updating the parts of the page that have
              changed, leading to better performance.
            </li>
            <li>
              <strong>Strong Ecosystem:</strong> Libraries like Redux (state
              management), React Router (navigation), and Next.js (server-side
              rendering) make React highly extendable.
            </li>
            <li>
              <strong>Vibrant Community:</strong> With tons of tutorials,
              documentation, open-source tools, and Stack Overflow support,
              learning and solving problems becomes much easier.
            </li>
          </ul>

          <h3 className="text-xl text-pink-400 mb-3">How Does React Work?</h3>
          <p>
            React apps are made up of components. Each component can accept
            input (called <code>props</code>) and manage its own internal{" "}
            <code>state</code>. When the state changes, React re-renders the
            affected part of the UI.
          </p>

          <p>
            For example, in a to-do list app, each task might be a component.
            When you check a task off the list, only that task's component is
            updated — not the entire page.
          </p>

          <p>
            React also uses <strong>JSX</strong>, a syntax extension that lets
            you write HTML-like code in your JavaScript files. This makes
            components easier to read and write:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-400">
              {`const Welcome = () => {
  return <h1>Hello, React!</h1>;
};`}
            </code>
          </pre>

          <p>
            Behind the scenes, JSX is converted into standard JavaScript using
            tools like Babel, which compiles it to{" "}
            <code>React.createElement</code> calls.
          </p>

          <h3 className="text-xl text-pink-400 mb-3">Key Concepts in React</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Components:</strong> Think of them as custom HTML
              elements. They can be functional or class-based, and help break
              the UI into manageable parts.
            </li>
            <li>
              <strong>JSX:</strong> A syntax that blends HTML and JavaScript,
              making your code easier to visualize and write.
            </li>
            <li>
              <strong>Props:</strong> Props (short for properties) are inputs
              passed to components. They are read-only and help share data
              between components.
            </li>
            <li>
              <strong>State:</strong> Unlike props, state is internal and
              mutable. Components use state to track and respond to user actions
              or data changes.
            </li>
            <li>
              <strong>Hooks:</strong> Hooks are special functions that let you
              use state and lifecycle features in functional components. Common
              ones include <code>useState</code>, <code>useEffect</code>, and{" "}
              <code>useRef</code>.
            </li>
            <li>
              <strong>Events:</strong> React has built-in support for handling
              events like clicks, key presses, and form submissions using
              camelCase syntax (e.g., <code>onClick</code>).
            </li>
          </ul>

          <h3 className="text-xl text-pink-400 mb-3">
            Creating Your First React Component
          </h3>
          <p>
            Below is a simple functional component that displays a greeting
            message. It uses JSX syntax and returns a heading element:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-400">
              {`function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}`}
            </code>
          </pre>

          <p>
            You can render this component inside another component or in your
            app’s main file by writing <code>&lt;Greeting /&gt;</code>.
          </p>

          <h3 className="text-xl text-pink-400 mb-3">
            Next Steps in Your React Journey
          </h3>
          <p>
            Now that you understand the basics, it's time to build! Start with
            small projects like:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>To-Do List:</strong> Practice with components, state, and
              event handling.
            </li>
            <li>
              <strong>Weather App:</strong> Learn how to fetch data from APIs
              using <code>useEffect</code>.
            </li>
            <li>
              <strong>Counter App:</strong> A great way to understand how state
              changes re-render the UI.
            </li>
          </ul>

          <p>
            As you get more confident, move on to advanced concepts like routing
            with React Router, global state management with Redux or Context
            API, and performance optimizations with memoization and lazy
            loading.
          </p>

          <p>
            The more projects you build, the more fluent you'll become in React.
            Always experiment, read documentation, and don't hesitate to explore
            new patterns or tools!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reactintroduction;
