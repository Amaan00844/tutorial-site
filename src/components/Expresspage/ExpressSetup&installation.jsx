"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function ExpressSetupInstallation() {
  useReadingTracker("expresssetup");
  return (
    <div className="p-6 ml-72">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Express Setup & Installation
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Setting up Express.js is quick and easy. In this section, you'll learn
        how to create a new Node.js project, install Express, and write your
        first server.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Step 1: Initialize a Node.js Project
        </h2>
        <p className="text-gray-800">
          First, make sure you have Node.js and npm installed. You can check by
          running:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`node -v
npm -v`}
          </code>
        </pre>

        <p className="text-gray-800">
          Then, create a new directory for your project and initialize it:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`mkdir my-express-app
cd my-express-app
npm init -y`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Step 2: Install Express
        </h2>
        <p className="text-gray-800">
          Use npm to install Express as a dependency:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">npm install express</code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Step 3: Create Your First Server
        </h2>
        <p className="text-gray-800">
          Now, create a file called <code>server.js</code> and add the following
          code:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">
            {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
          </code>
        </pre>

        <p className="text-gray-800">Run the server using the command:</p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-yellow-600">node server.js</code>
        </pre>

        <p className="text-gray-800">
          Visit <code>https://skill2future.code4bharat.com</code> in your
          browser to see your Express server in action!
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          What's Next?
        </h2>
        <p className="text-gray-800  ">
          Now that your setup is complete, you're ready to explore routing,
          middleware, and building real APIs with Express. Let's move on and
          create more powerful applications!
        </p>

        <button className="mt-8 bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export default ExpressSetupInstallation;
