"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Reactdeployment() {
  useReadingTracker("reactdeployment");
  return (
    <div className="p-6 max-w-4xl ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-6">
        React App Deployment
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          Introduction to Deployment
        </h2>
        <p className="text-gray-800 mb-6">
          After building your amazing React application, the final step is
          deploying it online so that users can access it. Deployment involves
          optimizing your app and putting it on a web server. It ensures your
          app is fast, accessible, and ready to be used by real users across
          different devices. The deployment process also includes setting up
          environment variables, managing routing, and choosing the right
          hosting platform.
        </p>

        {/* Building the App */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          1. Building Your React App
        </h2>
        <p className="text-gray-800 mb-4">
          Before you deploy, you need a production-ready version of your app.
          React provides a built-in command to bundle your application with all
          optimizations:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-500">npm run build</code>
        </pre>
        <p className="text-gray-800 mb-6">
          This creates a <code>build/</code> directory with static files like
          HTML, CSS, and JavaScript that are minified and optimized for
          performance. This folder is what you’ll upload to your hosting
          platform.
        </p>

        {/* Popular Deployment Options */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          2. Popular Deployment Platforms
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <span className="font-semibold text-pink-500">Vercel</span> -
            Optimized for frontend frameworks, automatic builds, custom domains,
            and instant rollbacks.
          </li>
          <li>
            <span className="font-semibold text-pink-500">Netlify</span> -
            Supports Git-based deployment with features like form handling,
            serverless functions, and deployment previews.
          </li>
          <li>
            <span className="font-semibold text-pink-500">GitHub Pages</span> -
            Free static site hosting ideal for portfolio or documentation sites
            with direct GitHub integration.
          </li>
          <li>
            <span className="font-semibold text-pink-500">
              Firebase Hosting
            </span>{" "}
            - Great for apps with backend on Firebase. Offers fast global CDN,
            SSL, and easy CLI-based deployments.
          </li>
          <li>
            <span className="font-semibold text-pink-500">Render</span> - Offers
            static and dynamic hosting with automatic deployment from Git and
            Docker support.
          </li>
        </ul>

        {/* Deploy to Vercel */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          3. Deploying to Vercel (Recommended)
        </h2>
        <ol className="list-decimal list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Go to{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              className="text-pink-500 underline"
            >
              vercel.com
            </a>{" "}
            and create an account using GitHub.
          </li>
          <li>Click "New Project" and import your GitHub repo.</li>
          <li>
            Vercel auto-detects it's a React app and sets defaults accordingly.
          </li>
          <li>Click "Deploy" — it builds and hosts your app within minutes.</li>
        </ol>
        <p className="text-gray-800 mb-6">
          Vercel also provides a custom domain and live preview links for each
          commit. It's beginner-friendly and perfect for React developers.
        </p>

        {/* Deploy to Netlify */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          4. Deploying to Netlify
        </h2>
        <p className="text-gray-800 mb-4">
          Netlify is another great option with seamless Git integration and
          powerful features.
        </p>
        <ol className="list-decimal list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Sign in at{" "}
            <a
              href="https://netlify.com"
              target="_blank"
              className="text-pink-500 underline"
            >
              netlify.com
            </a>
            .
          </li>
          <li>Choose “Add new site” → “Import an existing project”.</li>
          <li>Connect your GitHub and select your repo.</li>
          <li>
            Set "Build Command" as <code>npm run build</code> and "Publish
            Directory" as <code>build/</code>.
          </li>
          <li>Click "Deploy Site". Done!</li>
        </ol>
        <p className="text-gray-800 mb-6">
          Netlify also supports redirects, environment variables, and form
          submissions without backend code.
        </p>

        {/* Deploying on GitHub Pages */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          5. Deploying on GitHub Pages
        </h2>
        <p className="text-gray-800 mb-4">
          Ideal for simple or portfolio projects. Here’s how:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-500">npm install --save gh-pages</code>
        </pre>
        <p className="text-gray-800 mb-4">
          Then, modify <code>package.json</code> like this:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-500">
            {`"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">Finally, run:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-500">npm run deploy</code>
        </pre>
        <p className="text-gray-800 mb-6">
          Your app will be live at your GitHub Pages URL. Be sure to push your
          repo to GitHub before deploying.
        </p>

        {/* Environment Variables */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          6. Handling Environment Variables
        </h2>
        <p className="text-gray-800 mb-4">
          Use a <code>.env</code> file for API URLs and secrets. In React, all
          variables must start with <code>REACT_APP_</code> to be accessible in
          your code.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-500">
            REACT_APP_API_URL=https://yourapi.com
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          Then access them via <code>process.env.REACT_APP_API_URL</code> inside
          your components or services.
        </p>

        {/* Common Deployment Issues */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          7. Common Issues during Deployment
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <strong>Wrong build path:</strong> Ensure <code>build/</code> is
            selected as output directory.
          </li>
          <li>
            <strong>Hardcoded localhost APIs:</strong> Use environment variables
            to avoid this.
          </li>
          <li>
            <strong>Client-side routing not working:</strong> Use{" "}
            <code>HashRouter</code> or set up proper rewrites.
          </li>
          <li>
            <strong>Permissions errors:</strong> Check GitHub token permissions
            if using GitHub Pages.
          </li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-800 mb-6">
          Deployment is the bridge between development and real-world usage.
          Platforms like Vercel and Netlify simplify this process to a few
          clicks. Whether you're building a portfolio, blog, or large-scale app,
          understanding deployment ensures your work reaches the users
          effectively.
        </p>

        <button className="mt-8 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600">
          Next: React App Optimization →
        </button>
      </div>
    </div>
  );
}

export default Reactdeployment;
