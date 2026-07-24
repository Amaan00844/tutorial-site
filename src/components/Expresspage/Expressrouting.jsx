"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Expressrouting() {
  useReadingTracker("expressrouting");
  return (
    <div className="p-6 ml-72 ">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">Express Routing</h1>
      <p className="text-lg text-gray-800 mb-6">
        Routing is a fundamental part of any web application. Express provides a
        simple and flexible way to define routes that determine how your
        application responds to client requests.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Basic Routing
        </h2>
        <p>
          A route in Express is made up of an HTTP method, a path, and a handler
          function. Here's a simple example:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});`}
          </code>
        </pre>

        <p>
          This route responds to a GET request on the root path <code>'/'</code>
          . When the route is matched, the callback function sends a response.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Route Methods
        </h2>
        <p>Express supports multiple HTTP methods, including:</p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>
            <code>app.get()</code> – handles GET requests
          </li>
          <li>
            <code>app.post()</code> – handles POST requests
          </li>
          <li>
            <code>app.put()</code> – handles PUT requests
          </li>
          <li>
            <code>app.delete()</code> – handles DELETE requests
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Route Parameters
        </h2>
        <p>
          You can use route parameters to capture values in the URL. These are
          defined with a colon <code>:</code>.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.get('/users/:id', (req, res) => {
  res.send(\`User ID is \${req.params.id}\`);
});`}
          </code>
        </pre>

        <p>
          If you access <code>/users/42</code>, the response will be{" "}
          <code>User ID is 42</code>.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Multiple Routes
        </h2>
        <p>
          You can define as many routes as needed to handle different parts of
          your application.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Organizing Routes
        </h2>
        <p>
          As your app grows, you can use the Express Router to organize routes
          in separate files:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/about', (req, res) => {
  res.send('About');
});

module.exports = router;`}
          </code>
        </pre>

        <p>Then use it in your main app file:</p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`const routes = require('./routes');
app.use('/', routes);`}
          </code>
        </pre>

        <button className="mt-8 bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
          Learn About Middleware
        </button>
      </div>
    </div>
  );
}

export default Expressrouting;
