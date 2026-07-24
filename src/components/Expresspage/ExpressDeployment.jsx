"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function ExpressDeployment() {
  useReadingTracker("expressdeployment");
  return (
    <div className="p-6 ml-72">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Deploying Express Applications
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Once your Express application is ready for production, the next step is
        deployment. This involves preparing your app to run on a remote server,
        setting up environment variables, and ensuring scalability and security.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          1. Preparing for Deployment
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Use a process manager like <code>PM2</code> to keep your app
            running.
          </li>
          <li>
            Ensure all environment variables (like API keys) are securely
            stored.
          </li>
          <li>
            Remove unnecessary dev dependencies with{" "}
            <code>npm prune --production</code>.
          </li>
          <li>Use logging for monitoring and debugging in production.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          2. Hosting Options
        </h2>
        <p className="mb-4">You can host your Express app on platforms like:</p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>Render:</strong> Simple and free to start, supports
            automatic deployments from GitHub.
          </li>
          <li>
            <strong>Vercel/Netlify:</strong> Great for frontend, but use for
            backend only via serverless functions.
          </li>
          <li>
            <strong>Railway:</strong> Easy deployment for Node.js apps with
            database support.
          </li>
          <li>
            <strong>Heroku:</strong> Popular, beginner-friendly platform with
            simple CLI tools.
          </li>
          <li>
            <strong>VPS (e.g., DigitalOcean):</strong> Full control over your
            environment (requires Linux setup).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          3. Example: Deploy to Render
        </h2>
        <p>Follow these steps to deploy your app on Render:</p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-yellow-600">
            {`1. Push your project to GitHub
2. Go to render.com and create a new Web Service
3. Connect your GitHub repo and select the branch
4. Set build command: npm install
5. Set start command: node index.js (or your entry file)
6. Define environment variables in Render dashboard
7. Click "Create Web Service"`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          4. Keeping Your App Alive with PM2
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-yellow-600">
            {`npm install pm2 -g
pm2 start index.js
pm2 save
pm2 startup`}
          </code>
        </pre>

        <p className="mb-6">
          PM2 ensures your app restarts if the server crashes. It also provides
          logs and monitoring.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          5. Setting Environment Variables
        </h2>
        <p className="mb-4">
          Use a `.env` file and the `dotenv` package to manage environment
          variables:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-yellow-600">
            {`// .env
PORT=4000
DATABASE_URL=mongodb://localhost:27017/myapp`}
          </code>
        </pre>

        <p className="mb-6">And load them in your app:</p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-yellow-600">
            {`require('dotenv').config();
const port = process.env.PORT || 3000;`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          6. Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Always hide sensitive data using environment variables.</li>
          <li>Use HTTPS in production.</li>
          <li>
            Use reverse proxies like Nginx for better security and performance.
          </li>
          <li>Enable CORS and Helmet for securing your Express server.</li>
        </ul>

        <p className="mb-6">
          Deploying your Express app is the final step in sharing your work with
          the world. Choose a hosting platform that suits your needs, follow
          best practices, and keep your app updated and secure.
        </p>

        <button className="mt-8 bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
          Go to Final Concepts
        </button>
      </div>
    </div>
  );
}

export default ExpressDeployment;
