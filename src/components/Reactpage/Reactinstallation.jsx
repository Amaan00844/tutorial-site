"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Reactinstallation() {
  useReadingTracker("reactinstallation");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Installing React
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        In this section, we'll guide you through the process of installing React
        and setting up your first React project. React is a powerful JavaScript
        library for building user interfaces, developed and maintained by
        Facebook. It's known for its component-based architecture and efficient
        rendering using a virtual DOM.
      </p>

      <div className="bg-white p-6  max-w-8xl mx-auto">
        {/* STEP 1 */}
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          Step 1: Installing Node.js and npm
        </h2>
        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            Before working with React, it's essential to install{" "}
            <strong>Node.js</strong> and <strong>npm</strong>. Node.js allows
            JavaScript to run outside the browser (on your computer), and npm is
            the tool used to install libraries like React.
          </p>
          <p>Steps to install Node.js:</p>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>
              Visit the{" "}
              <a
                href="https://nodejs.org"
                className="text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js official website
              </a>
              .
            </li>
            <li>
              Download the **LTS (Long-Term Support)** version — it's stable and
              recommended for most users.
            </li>
            <li>
              Install it following instructions based on your operating system
              (Windows/macOS/Linux).
            </li>
          </ol>
          <p>
            Once installed, verify the installation by opening a terminal or
            command prompt and running:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-300">
              {`node -v
npm -v`}
            </code>
          </pre>
          <p>
            If the versions show up, Node.js and npm are successfully installed!
          </p>
        </div>

        {/* STEP 2 */}
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          Step 2: Creating a React Application with Create React App
        </h2>
        <div className="text-gray-800 space-y-6 text-sm leading-relaxed">
          <p>
            <strong>Create React App (CRA)</strong> is a command-line tool that
            sets up a new React project with everything configured: Webpack,
            Babel, ESLint, and more — so you can start coding right away!
          </p>
          <p>Follow these steps to create your first React app:</p>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>Open your terminal.</li>
            <li>
              Install Create React App globally on your system (only once):
            </li>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-pink-300">
                npm install -g create-react-app
              </code>
            </pre>
            <li>
              Create your React project (replace <code>my-app</code> with any
              name):
            </li>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-pink-300">npx create-react-app my-app</code>
            </pre>
            <li>Navigate into your project folder:</li>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-pink-300">cd my-app</code>
            </pre>
            <li>Start the development server:</li>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-pink-300">npm start</code>
            </pre>
          </ol>
          <p>
            Your browser will open automatically at{" "}
            <code>https://skill2future.code4bharat.com</code> displaying a basic
            React app.
          </p>
        </div>

        {/* STEP 3 */}
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          Step 3: Understanding the Project Structure
        </h2>
        <div className="text-gray-800 space-y-6 text-sm leading-relaxed">
          <p>
            Once the app is created, here's what the folder structure looks
            like:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-300">
              {`my-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md`}
            </code>
          </pre>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>public/index.html:</strong> Template HTML file, the root
              of your web page.
            </li>
            <li>
              <strong>src/App.js:</strong> Main React component where UI is
              defined.
            </li>
            <li>
              <strong>src/index.js:</strong> Entry point that renders App
              component into the HTML DOM.
            </li>
            <li>
              <strong>package.json:</strong> Metadata file that tracks project
              dependencies and scripts.
            </li>
          </ul>
        </div>

        {/* STEP 4 */}
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          Step 4: Installing Additional Dependencies
        </h2>
        <div className="text-gray-800 space-y-6 text-sm leading-relaxed">
          <p>
            React apps often require extra functionality — for example, routing
            (navigating between pages). To do this, you can use libraries like{" "}
            <strong>React Router</strong>.
          </p>
          <p>To install it, run:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-pink-300">npm install react-router-dom</code>
          </pre>
          <p>
            This adds routing capability to your app. You can now define routes
            like `/home`, `/about`, etc., and switch between them without
            reloading the page.
          </p>
        </div>

        {/* CTA Button */}
      </div>
    </div>
  );
}

export default Reactinstallation;
