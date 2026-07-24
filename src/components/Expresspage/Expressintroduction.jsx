"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function ExpressIntroduction() {
  useReadingTracker("expressintro");
  return (
    <div className="p-6 ml-72 ">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Introduction to Express.js
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Express.js is a fast, unopinionated, and minimalist web framework for
        Node.js. It allows you to build robust APIs and web servers with ease.
        Whether you're creating a simple website or a complex RESTful API,
        Express provides the tools and structure you need to succeed.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          What is Express.js?
        </h2>

        <div className="text-gray-800 space-y-6 text-sm leading-relaxed">
          <p>
            Express.js, or simply Express, is a web application framework for
            Node.js designed for building web applications and APIs. It is part
            of the Node.js ecosystem and is often used with MongoDB and other
            technologies to build full-stack JavaScript applications.
          </p>

          <p>
            It simplifies the process of handling HTTP requests, routing,
            middleware integration, and much more. Express is widely adopted in
            the industry due to its speed, flexibility, and robust feature set.
          </p>

          <h3 className="text-xl font-semibold text-yellow-500">
            Why Use Express?
          </h3>

          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Simplicity:</strong> Easy to set up and start building
              with.
            </li>
            <li>
              <strong>Routing:</strong> Powerful routing system to manage
              different endpoints.
            </li>
            <li>
              <strong>Middleware:</strong> Middleware functions to handle
              requests, responses, and errors.
            </li>
            <li>
              <strong>Flexibility:</strong> Unopinionated structure allows you
              to design your app your way.
            </li>
            <li>
              <strong>Performance:</strong> Built on Node.js, it's fast and
              scalable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-yellow-500">
            Setting Up Express
          </h3>
          <p>To get started, install Express via npm:</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">
              {`npm init -y
npm install express`}
            </code>
          </pre>

          <p>Then create your basic server:</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">
              {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});`}
            </code>
          </pre>

          <p>
            This will start a local server on port 3000 and respond with
            "Welcome to Express!" when you visit{" "}
            <code>https://skill2future.code4bharat.com</code>.
          </p>

          <h3 className="text-xl font-semibold text-yellow-500">
            Common Features of Express
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Routing and route parameters</li>
            <li>Middleware and request/response lifecycle</li>
            <li>Error handling</li>
            <li>Templating engines (e.g., EJS, Pug)</li>
            <li>Serving static files</li>
            <li>Handling forms and JSON data</li>
          </ul>

          <p>
            Express is designed to give you complete control over how your app
            behaves. Whether you're building a simple page or a full API, it
            lets you architect your solution with minimal boilerplate.
          </p>

          <h3 className="text-xl font-semibold text-yellow-500">Next Steps</h3>
          <p>
            In the upcoming lessons, you'll learn about creating routes, using
            middleware, connecting databases like MongoDB, and deploying your
            Express app to platforms like Vercel or Render. Let's continue and
            build awesome backend projects with Express!
          </p>
        </div>

        <button className="mt-8 bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
          Start Learning Express
        </button>
      </div>
    </div>
  );
}

export default ExpressIntroduction;
