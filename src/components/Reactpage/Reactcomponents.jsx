"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Reactcomponents() {
  // Track user interaction for this component
  useReadingTracker("reactcomponents");

  return (
    <div className="p-6 max-w-4xl ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Understanding React Components
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        In React, components are the building blocks of the user interface. A
        component is a piece of reusable code that controls a part of the UI.
        React promotes the development of small, isolated components, which can
        then be combined to build larger and more complex interfaces. In this
        section, we’ll dive deep into the different types of React components,
        how they work, and why they are so important.
      </p>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Types of React Components
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            React components come in two main types:{" "}
            <strong>Functional Components</strong>
            and <strong>Class Components</strong>. Each type has its own
            features, but functional components are more commonly used in modern
            React development due to their simplicity and ease of use,
            especially with the introduction of hooks in React 16.8.
          </p>

          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            1. Functional Components
          </h3>
          <p>
            Functional components are simple JavaScript functions that accept
            props (inputs) as arguments and return JSX to render UI. They are
            often referred to as stateless components when they do not have
            their own internal state.
          </p>

          <p>Here's an example of a basic functional component:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`function WelcomeMessage() {
  return <h1>Welcome to React!</h1>;
}`}
            </code>
          </pre>

          <p>
            This component renders a simple "Welcome to React!" message. Notice
            how the function takes no parameters and directly returns JSX.
          </p>

          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            2. Class Components
          </h3>
          <p>
            Class components are ES6 classes that extend from{" "}
            <code>React.Component</code>. They can hold and manage local state
            using the <code>this.state</code> object and have lifecycle methods
            like <code>componentDidMount()</code> and <code>render()</code>
            for handling updates and rendering.
          </p>

          <p>Here's an example of a basic class component:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`class WelcomeMessage extends React.Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}`}
            </code>
          </pre>

          <p>
            This class component does the same thing as the functional
            component, but it uses a class definition. Class components are a
            bit more complex, especially when working with state and lifecycle
            methods.
          </p>

          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Functional vs. Class Components
          </h3>
          <p>
            While both functional and class components are still widely used,
            functional components have become the preferred choice due to their
            simplicity and the power of React hooks. The introduction of hooks
            like <code>useState</code> and <code>useEffect</code>
            allows functional components to manage state and side effects,
            making them just as powerful as class components.
          </p>

          <p className="text-lg font-semibold text-pink-700 mt-6">
            When to Use Functional Components?
          </p>
          <p>You should prefer functional components when:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>If you don't need to use lifecycle methods.</li>
            <li>
              If you're working with hooks like <code>useState</code>,{" "}
              <code>useEffect</code>, or <code>useContext</code>.
            </li>
            <li>
              If you want simpler, cleaner code that is easier to read and
              maintain.
            </li>
          </ul>

          <p className="text-lg font-semibold text-pink-700 mt-6">
            When to Use Class Components?
          </p>
          <p>Class components should still be used when:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              If you're working with older codebases or need to use lifecycle
              methods that haven't been replaced by hooks.
            </li>
            <li>
              If you're writing React code that relies on legacy patterns or
              libraries.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Components with State: Using the useState Hook
          </h3>
          <p>
            Functional components can now manage local state using the{" "}
            <code>useState</code>
            hook, which was introduced in React 16.8. The <code>
              useState
            </code>{" "}
            hook allows you to add state to functional components, making them
            more powerful and dynamic.
          </p>

          <p>
            Here's an example of a functional component that uses the{" "}
            <code>useState</code>
            hook to manage the state of a counter:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
}`}
            </code>
          </pre>

          <p>
            In this example, the component uses the <code>useState</code> hook
            to initialize a counter at 0. Each time the "Increase" button is
            clicked, the count is updated, and the component is re-rendered to
            reflect the new count.
          </p>

          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Components with Props
          </h3>
          <p>
            Props (short for "properties") are a way to pass data from a parent
            component to a child component. Props allow components to be more
            flexible and reusable. When a parent component renders a child
            component, it can pass data to the child through props.
          </p>

          <p>Here's an example of passing props to a child component:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`function ParentComponent() {
  return <ChildComponent name="John" />;
}

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}`}
            </code>
          </pre>

          <p>
            In this example, the <code>ParentComponent</code> passes the{" "}
            <code>name</code>
            prop to the <code>ChildComponent</code>, which then renders the
            value of the prop. Props are read-only, meaning the child component
            cannot modify them directly.
          </p>

          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Component Lifecycle
          </h3>
          <p>
            Class components have lifecycle methods that are triggered at
            different points in a component’s life. Some common lifecycle
            methods include:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>componentDidMount</strong>: Called after the component is
              first rendered.
            </li>
            <li>
              <strong>componentDidUpdate</strong>: Called after the component
              updates due to state or props changes.
            </li>
            <li>
              <strong>componentWillUnmount</strong>: Called just before the
              component is removed from the DOM.
            </li>
          </ul>

          <p>
            With functional components, these lifecycle methods are replaced by
            the
            <code>useEffect</code> hook, which can handle side effects such as
            data fetching, subscriptions, or manual DOM updates.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    
    return () => clearInterval(interval);  // Cleanup when component unmounts
  }, []);

  return <h1>Timer is running...</h1>;
}`}
            </code>
          </pre>

          <p>
            In this example, the <code>useEffect</code> hook mimics the behavior
            of
            <code>componentDidMount</code> and <code>componentWillUnmount</code>{" "}
            in class components by setting up a timer and cleaning it up when
            the component is removed from the DOM.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reactcomponents;
