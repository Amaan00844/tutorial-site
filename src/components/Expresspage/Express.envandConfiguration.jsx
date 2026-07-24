"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function ExpressEnvAndConfiguration() {
  useReadingTracker("expressenv");

  return (
    <div className="p-6 ml-72">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Environment Variables Made Simple
      </h1>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          What Are Environment Variables?
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="mb-2">
            <strong>Think of them like secret notes for your app:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>
              They store important settings (like passwords or server locations)
            </li>
            <li>
              They change based on where your app is running (your computer vs a
              real server)
            </li>
            <li>They keep sensitive information out of your code</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold mb-2">Why Use Them?</h3>
            <ul className="list-disc pl-5">
              <li>Security: Don't share secrets in your code</li>
              <li>Flexibility: Different settings for different places</li>
              <li>Organization: Keep all settings in one place</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Common Uses</h3>
            <ul className="list-disc pl-5">
              <li>Database passwords</li>
              <li>API keys</li>
              <li>Server locations</li>
              <li>Special settings for testing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Getting Started
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            1. Create Your Secret Note File
          </h3>
          <p>
            Make a new file called <code>.env</code> in your project folder:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2">
            <code className="text-yellow-600">
              {`# .env file - like a settings notebook
PORT=3000                           # What door to listen at
DB_URI=mongodb://localhost:27017    # Where your data lives
SECRET_KEY=mysupersecretkey         # Your app's secret password`}
            </code>
          </pre>
          <p className="mt-2 text-sm text-gray-600">
            Note: Never share this file or commit it to GitHub!
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            2. Install the Note Reader
          </h3>
          <p>
            Install the <code>dotenv</code> package to read your settings:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">npm install dotenv</code>
          </pre>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            3. Tell Your App to Read the Notes
          </h3>
          <p>Add this at the very top of your main app file:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">require('dotenv').config();</code>
          </pre>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Using Your Settings
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Accessing Variables</h3>
          <p>
            Use <code>process.env</code> to get your settings:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">
              {`const port = process.env.PORT;       // Gets 3000 from our .env
const dbUri = process.env.DB_URI;   // Gets the database location

console.log(\`I'm using port \${port}\`);
console.log(\`Connecting to database at \${dbUri}\`);`}
            </code>
          </pre>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Safety Tips</h3>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Always have backup plans:</h4>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-yellow-600">
                {`// If PORT isn't set, use 3000 instead
const port = process.env.PORT || 3000;`}
              </code>
            </pre>

            <h4 className="font-bold mt-4 mb-2">
              Check for must-have settings:
            </h4>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-yellow-600">
                {`if (!process.env.DB_URI) {
  throw new Error("Missing database connection string!");
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Different Places, Different Settings
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            Multiple Environment Files
          </h3>
          <p>
            Create different <code>.env</code> files for different situations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">.env.development</h4>
              <pre className="text-sm mt-2">
                <code>DB_URI=localhost/testdb</code>
              </pre>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">.env.production</h4>
              <pre className="text-sm mt-2">
                <code>DB_URI=real-database-server.com</code>
              </pre>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold">.env.test</h4>
              <pre className="text-sm mt-2">
                <code>DB_URI=localhost/testdb-test</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Loading the Right File</h3>
          <p>Tell your app which settings to use:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">
              {`// At the start of your app
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: '.env.production' });
} else {
  require('dotenv').config({ path: '.env.development' });
}`}
            </code>
          </pre>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            Running in Different Modes
          </h3>
          <p>Start your app with the right settings:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold">Development</h4>
              <pre className="mt-2">
                <code>npm run dev</code>
              </pre>
              <p className="text-sm mt-1">(Uses .env.development)</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold">Production</h4>
              <pre className="mt-2">
                <code>NODE_ENV=production node app.js</code>
              </pre>
              <p className="text-sm mt-1">(Uses .env.production)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Advanced Organization
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            The Config File Approach
          </h3>
          <p>
            For bigger apps, create a <code>config.js</code> file to organize
            all settings:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">
              {`// config.js - Your settings control center
module.exports = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
  },
  database: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME || 'myapp'
  },
  secrets: {
    jwt: process.env.JWT_SECRET
  }
};`}
            </code>
          </pre>

          <p className="mt-4">Then use it anywhere in your app:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-yellow-600">
              {`const config = require('./config');

app.listen(config.server.port, () => {
  console.log(\`Running in \${config.server.env} mode on port \${config.server.port}\`);
});`}
            </code>
          </pre>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Practice Time!</h3>
          <p>Try these exercises:</p>
          <ol className="list-decimal pl-5 mt-2">
            <li>
              Create a <code>.env</code> file with your favorite color and
              display it
            </li>
            <li>
              Make your app use port 4000 in development and 80 in production
            </li>
            <li>Create a config file that organizes database settings</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default ExpressEnvAndConfiguration;
