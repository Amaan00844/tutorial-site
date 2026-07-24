"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function ExpressError() {
  useReadingTracker("expresserror");
  return (
    <div className="p-6 ml-72">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Express Error Handling
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Error handling is a critical part of building robust Express
        applications. Express provides flexible tools to catch and handle errors
        gracefully so that your app doesn’t crash unexpectedly.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Basic Error Handling Middleware
        </h2>
        <p>
          Express allows you to define special middleware to handle errors. This
          middleware has four parameters: <code>err</code>, <code>req</code>,{" "}
          <code>res</code>, and <code>next</code>.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}
          </code>
        </pre>

        <p>
          This middleware will catch errors thrown in your route handlers or
          other middleware and send a response with a 500 status code.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Throwing Errors in Routes
        </h2>
        <p>
          You can throw errors manually or pass them to the next function.
          Here's an example:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

// or use next
app.get('/next-error', (req, res, next) => {
  const err = new Error('This is passed to next');
  next(err);
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          404 Not Found Handler
        </h2>
        <p>
          You can also catch routes that don’t exist using a 404 handler placed
          at the end of all route definitions.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found!');
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Custom Error Messages
        </h2>
        <p>
          You can customize error responses based on the error type or message.
          This is useful for providing meaningful feedback to the client.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`app.use((err, req, res, next) => {
  if (err.message === 'Not Found') {
    res.status(404).send('Resource not found!');
  } else {
    res.status(500).send('Server error!');
  }
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Always log errors to help with debugging and monitoring.</li>
          <li>Use consistent error messages and status codes.</li>
          <li>
            Never expose stack traces or sensitive details to users in
            production.
          </li>
          <li>Group all error handling middleware after route definitions.</li>
        </ul>

        <p className="mt-4">
          Proper error handling ensures that your Express app behaves
          predictably and provides a better user experience. It also helps in
          debugging and maintaining code quality.
        </p>

        <button className="mt-8 bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
          Learn About Express Middleware
        </button>
      </div>
    </div>
  );
}

export default ExpressError;
