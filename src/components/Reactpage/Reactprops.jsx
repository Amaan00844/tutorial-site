"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React, { useState } from "react";

export default function Reactprops() {
  // Custom hook used to track reading progress for the 'reactprops' page
  useReadingTracker("reactprops");

 

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Understanding React Props and State
      </h1>


 

      {/* Introduction to React props */}
      <p className="text-lg text-gray-800 mt-6">
        Props (short for "properties") are an essential part of React, enabling
        communication between components...
      </p>

      {/* Section explaining Props */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          What are Props?
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            In React, <strong>props</strong> are the inputs to a component. They
            are passed from the parent component to the child component and are
            used to configure the child. Props are read-only, meaning they
            cannot be changed by the child component, but the child can use them
            to render UI or even pass them down further to other child
            components.
          </p>

          {/* Explaining how props work in React */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            How Props Work
          </h3>
          <p>
            When you create a React component, you can define props that it can
            accept. These props are passed from the parent component and are
            available in the child component as an object. The child component
            can access and display or manipulate these props, but it cannot
            modify them.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`function ParentComponent() {
  return <ChildComponent message="Hello from parent!" />;
}

function ChildComponent(props) {
  return <p>{props.message}</p>;
}`}
            </code>
          </pre>

          {/* Explaining how to access props in child components */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Accessing Props in Child Components
          </h3>
          <p>
            Inside a child component, props are accessed through the{" "}
            <code>props</code> object. This object contains all the props that
            were passed down from the parent. You can access individual props
            using <code>props.propName</code>, where <code>propName</code> is
            the name of the prop.
          </p>

          {/* Example of using state */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            State Example
          </h3>
          <p>
            Here's an example where we use state to store and change the value
            of the count when the button is clicked:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}
            </code>
          </pre>

          <p>
            In this example, the component has state that tracks the count. The
            state is updated when the user clicks the button.
          </p>

          {/* Destructuring props for simplicity */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Destructuring Props for Simplicity
          </h3>
          <p>
            Instead of accessing props through <code>props.propName</code>, you
            can use JavaScript destructuring to extract individual props
            directly in the function parameters. This makes your code cleaner
            and easier to read.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}`}
            </code>
          </pre>

          <p>
            In this example, instead of accessing props using{" "}
            <code>props.name</code> and <code>props.age</code>, we destructure
            the props directly in the function parameters, which simplifies the
            syntax.
          </p>

          {/* Default Props */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Default Props
          </h3>
          <p>
            Sometimes, you may want to provide default values for props if they
            are not passed from the parent. React allows you to define default
            values for props using the <code>defaultProps</code> property.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

ChildComponent.defaultProps = {
  name: 'Anonymous',
  age: 30
};`}
            </code>
          </pre>

          <p>
            In this example, if the <code>name</code> and <code>age</code> props
            are not passed by the parent, the component will use the default
            values specified in <code>defaultProps</code>.
          </p>

          {/* Prop Types */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Prop Types: Validating Props
          </h3>
          <p>
            React allows you to validate the props that are passed to a
            component using the <code>PropTypes</code> library. This helps
            ensure that the correct type of data is passed, and it can be useful
            for debugging.
          </p>

          <p>
            To use <code>PropTypes</code>, you need to install the{" "}
            <code>prop-types</code> package, then define the expected types for
            each prop.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`import PropTypes from 'prop-types';

function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};`}
            </code>
          </pre>

          <p>
            In this example, we use <code>PropTypes.string</code> to validate
            that the <code>name</code> prop is a string and{" "}
            <code>PropTypes.number</code> to validate that the <code>age</code>{" "}
            prop is a number. The <code>isRequired</code> modifier makes the
            prop mandatory.
          </p>

          {/* Passing functions as props */}
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            Passing Functions as Props
          </h3>
          <p>
            In React, you can also pass functions as props. This allows the
            parent component to pass down behavior that the child component can
            invoke. This is useful for handling events or modifying the parent
            component's state from a child.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-700">
              {`function ParentComponent() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}`}
            </code>
          </pre>

          <p>
            In this example, the <code>ParentComponent</code> passes a function{" "}
            <code>handleClick</code> as a prop called <code>onClick</code> to
            the <code>ChildComponent</code>. The child component then calls this
            function when the button is clicked, triggering the alert.
          </p>
        </div>
      </div>
    </div>
  );
}
