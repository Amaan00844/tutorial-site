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
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside the browser, typically used for backend development."
  },
  {
    question: "What are the core modules in Node.js?",
    answer: "Node.js has several core modules like 'http' (to create a server), 'fs' (for file system operations), 'path' (for working with file and directory paths), and more."
  },
  {
    question: "What is the Event Loop in Node.js?",
    answer: "The Event Loop in Node.js allows non-blocking, asynchronous operations. It enables Node.js to handle multiple operations concurrently without blocking the main thread."
  },
  {
    question: "What is the difference between synchronous and asynchronous code in Node.js?",
    answer: "Synchronous code blocks the execution, while asynchronous code allows the execution of other tasks while waiting for one operation to complete."
  },
  {
    question: "What is Express.js?",
    answer: "Express.js is a web framework for Node.js, used to simplify the process of creating server-side applications and APIs."
  },
  {
    question: "How do you handle errors in Node.js?",
    answer: "Errors in Node.js are typically handled through callbacks with error-first convention or using 'try-catch' in async functions, or by using middleware in Express."
  },
  {
    question: "What is a callback function in Node.js?",
    answer: "A callback function is a function that is passed as an argument to another function, which is executed once the operation completes."
  },
  {
    question: "What is a promise in Node.js?",
    answer: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
  },
  {
    question: "What is the purpose of 'require' in Node.js?",
    answer: "'require' is used to import modules, files, or libraries into a Node.js application, enabling the use of reusable code."
  },
  {
    question: "What is middleware in Express?",
    answer: "Middleware in Express is a function that receives request and response objects and processes them before passing control to the next middleware or route handler."
  },
  {
    question: "What are streams in Node.js?",
    answer: "Streams in Node.js are objects that enable reading and writing of data in a continuous fashion. Types of streams include readable, writable, and duplex streams."
  },
  {
    question: "What is the role of npm in Node.js?",
    answer: "npm (Node Package Manager) is used to manage dependencies in Node.js projects. It helps in installing, updating, and managing libraries and modules."
  },
  {
    question: "What is the purpose of the 'package.json' file in Node.js?",
    answer: "'package.json' is a file that contains metadata about a Node.js project, including dependencies, scripts, and project information."
  },
  {
    question: "How do you create a server in Node.js?",
    answer: "A server in Node.js is created using the 'http' module, where you define a request listener and the server listens on a specific port."
  },
  {
    question: "What is clustering in Node.js?",
    answer: "Clustering in Node.js allows the use of multiple CPU cores by creating child processes, enabling more efficient handling of large applications."
  },
  {
    question: "What is the difference between 'process.nextTick()' and 'setImmediate()'?",
    answer: "'process.nextTick()' schedules a callback to be invoked in the next iteration of the event loop, while 'setImmediate()' schedules a callback to be invoked in the following event loop cycle."
  },
  {
    question: "What is the 'fs' module in Node.js?",
    answer: "The 'fs' module in Node.js provides an API for interacting with the file system, allowing for reading, writing, and manipulating files."
  },
  {
    question: "What is a REPL in Node.js?",
    answer: "REPL (Read-Eval-Print Loop) is an interactive shell in Node.js that allows you to execute JavaScript code directly from the command line."
  },
  {
    question: "What is the 'path' module in Node.js?",
    answer: "The 'path' module in Node.js provides utilities for working with file and directory paths, such as resolving absolute paths and joining paths."
  },
  {
    question: "How does Node.js handle asynchronous operations?",
    answer: "Node.js handles asynchronous operations using event-driven architecture, callbacks, promises, and async/await, ensuring non-blocking execution."
  },
  {
    question: "What is the use of 'Buffer' in Node.js?",
    answer: "'Buffer' is used to handle binary data in Node.js. It allows you to work with raw data, especially when dealing with streams and I/O operations."
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

const QuestionNodeJS = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-center">Node.js Interview Questions</h1>
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

export default QuestionNodeJS;
