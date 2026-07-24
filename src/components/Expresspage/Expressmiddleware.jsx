"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Expressmiddleware() {
  useReadingTracker("expressmiddleware");
  return (
    <div className="ml-72 p-6 text-black">
      <h1 className="text-3xl font-bold mb-4 text-yellow-600">
        Express Middleware
      </h1>

      <p className="mb-4">
        Middleware functions are functions that have access to the request
        object (<code className="bg-yellow-200 px-1 rounded">req</code>), the
        response object (<code className="bg-yellow-200 px-1 rounded">res</code>
        ), and the next middleware function in the application’s
        request-response cycle.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
        Why Use Middleware?
      </h2>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>To execute any code.</li>
        <li>To modify the request and response objects.</li>
        <li>To end the request-response cycle.</li>
        <li>To call the next middleware function in the stack.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
        Basic Middleware Example
      </h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-auto">
        {`const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // move to the next middleware
};

app.use(logger); // Registering middleware globally

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000);`}
      </pre>

      <p className="mb-4">
        Every request to your app will log the HTTP method and URL using this
        middleware.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
        Types of Middleware
      </h2>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>
          <strong>Application-level</strong> – bound to an instance of{" "}
          <code className="bg-yellow-200 px-1 rounded">express()</code>.
        </li>
        <li>
          <strong>Router-level</strong> – bound to an instance of{" "}
          <code className="bg-yellow-200 px-1 rounded">express.Router()</code>.
        </li>
        <li>
          <strong>Built-in</strong> – like{" "}
          <code className="bg-yellow-200 px-1 rounded">express.json()</code>,{" "}
          <code className="bg-yellow-200 px-1 rounded">express.static()</code>.
        </li>
        <li>
          <strong>Third-party</strong> – like{" "}
          <code className="bg-yellow-200 px-1 rounded">morgan</code>,{" "}
          <code className="bg-yellow-200 px-1 rounded">body-parser</code>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
        Router-Level Middleware
      </h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-auto">
        {`const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Router Home');
});`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
        Built-in Middleware
      </h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-auto">
        {`app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files from "public" folder`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
        Third-party Middleware
      </h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-auto">
        {`const morgan = require('morgan');
app.use(morgan('dev'));`}
      </pre>

      <p>
        This logs requests using the{" "}
        <code className="bg-yellow-200 px-1 rounded">morgan</code> logger.
      </p>
    </div>
  );
}

export default Expressmiddleware;
