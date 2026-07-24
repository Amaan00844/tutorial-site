"use client";
import React, { useState } from "react";
import {
  Database,
  Server,
  Atom,
  Code,
  Cpu,
  Layers,
  FileText,
  Terminal,
  GitBranch,
  Monitor,
  Layout,
} from "lucide-react"; // import icons

const questionsWithAnswers = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows for building reusable UI components."
  },
  {
    question: "What are the key features of React?",
    answer: "React's key features include virtual DOM, component-based architecture, one-way data flow, and hooks."
  },
  {
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript. It is then transpiled into JavaScript code."
  },
  {
    question: "What are components in React?",
    answer: "Components are the building blocks of a React application. They can be functional or class-based, and they return JSX to render the UI."
  },
  {
    question: "What is the virtual DOM in React?",
    answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize performance by making minimal updates to the real DOM."
  },
  {
    question: "What is state in React?",
    answer: "State in React refers to a component's internal data. It is mutable and can be changed over time, triggering re-renders of the component."
  },
  {
    question: "What are props in React?",
    answer: "Props (short for properties) are inputs to a component. They are immutable and passed from a parent component to a child component."
  },
  {
    question: "What are React hooks?",
    answer: "React hooks are functions that allow you to use state and lifecycle features in functional components. Examples include `useState`, `useEffect`, and `useContext`."
  },
  {
    question: "What is `useState` in React?",
    answer: "`useState` is a React hook used to manage state in functional components. It returns an array with the current state and a function to update it."
  },
  {
    question: "What is `useEffect` in React?",
    answer: "`useEffect` is a React hook that allows you to perform side effects in functional components. It is similar to lifecycle methods in class components."
  },
  {
    question: "What is JSX syntax?",
    answer: "JSX syntax is a combination of HTML and JavaScript. It allows you to write HTML-like code inside JavaScript and get it transpiled to JavaScript."
  },
  {
    question: "What is the difference between `componentDidMount` and `useEffect`?",
    answer: "`componentDidMount` is a class component lifecycle method, while `useEffect` is a hook used in functional components. Both are used for side effects, but `useEffect` runs after the render."
  },
  {
    question: "What is `React Router`?",
    answer: "React Router is a library for routing in React. It allows you to create navigation between different views or components in your application."
  },
  {
    question: "What is the `useContext` hook in React?",
    answer: "`useContext` is a React hook used to access values from a context provider, allowing you to pass data through the component tree without using props."
  },
  {
    question: "What are controlled components in React?",
    answer: "Controlled components are form elements whose value is controlled by the React state. They receive the value via props and handle changes through event handlers."
  },
  {
    question: "What is the `key` prop in React?",
    answer: "The `key` prop is used to identify elements in a list, helping React efficiently update and re-render only the changed elements."
  },
  {
    question: "What is the `useRef` hook in React?",
    answer: "`useRef` is a React hook that allows you to persist values across renders without triggering a re-render. It can also be used to reference DOM elements."
  },
  {
    question: "How does React's reconciliation algorithm work?",
    answer: "React's reconciliation algorithm compares the virtual DOM with the real DOM and updates only the parts of the real DOM that have changed, improving performance."
  },
  {
    question: "What is Redux?",
    answer: "Redux is a state management library for JavaScript applications. It provides a global state that can be accessed by all components and uses actions and reducers to update the state."
  },
];

const randomIcons = Array.from({ length: 50 }, () => {
  const Icon = [Database, Server, Atom, Code, Cpu, Layers, FileText, Terminal, GitBranch, Monitor, Layout][Math.floor(Math.random() * 11)];
  const top = Math.floor(Math.random() * 100);
  const left = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 40) + 20;
  const opacity = Math.random() * 0.5 + 0.2;
  const rotate = Math.floor(Math.random() * 360);
  return { Icon, top, left, size, opacity, rotate };
});

const QuestionReact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-white">
      {/* Background Icons */}
      {randomIcons.map(({ Icon, top, left, size, opacity, rotate }, index) => (
        <div
          key={index}
          className="absolute z-0 text-indigo-500"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${rotate}deg)`,
            opacity: opacity,
            fontSize: `${size}px`,
          }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Content Box */}
      <div >
        <h1 className="text-3xl font-bold mb-6 text-center">React Interview Questions</h1>
        <div className="space-y-4">
          {questionsWithAnswers.map((item, index) => (
            <div key={index} className="border rounded-2xl shadow p-4 transition-all w-[970px]">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left flex justify-between items-center font-medium text-lg"
              >
                {item.question}
                <span className="text-gray-500 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default QuestionReact;
