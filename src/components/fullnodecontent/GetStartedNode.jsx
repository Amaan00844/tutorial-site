'use client';

const NodeGetStartedPage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        {/* Updated to shadow-xl for a more pronounced shadow */}
        <h1 className="text-4xl font-bold">Get Started with Node.js</h1>
        <p className="text-lg">Setting up your first Node.js project.</p>

        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Install Node.js:</strong> First, download and install Node.js from the official website: <a href="https://nodejs.org" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://nodejs.org</a>. Make sure to choose the LTS version for stability.</li>
          <li><strong>Text Editor:</strong> Use a text editor like VSCode, Sublime Text, or Atom for writing your Node.js code.</li>
          <li><strong>Terminal:</strong> You should be comfortable using the command line/terminal for running commands.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Creating a Node.js Project</h2>
        <p>Once you’ve installed Node.js, you’re ready to start your first project.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Create a Project Folder:</strong> Create a new folder for your project and navigate into it.</li>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>
{`mkdir my-node-project
cd my-node-project`}
            </code>
          </pre>
          <li><strong>Initialize Your Project:</strong> Run the following command to create a new package.json file.</li>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>
{`npm init -y`}
            </code>
          </pre>
          <li><strong>Create Your First JavaScript File:</strong> Create a file called <code>app.js</code> in your project folder. This file will contain your Node.js code.</li>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>
{`touch app.js`}
            </code>
          </pre>
        </ol>

        <h2 className="text-2xl font-semibold">First Node.js Script</h2>
        <p>Now, let’s write a simple Node.js script that outputs "Hello, World!" to the console.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`// app.js

console.log('Hello, World!');`}
          </code>
        </pre>
        <p className="italic text-blue-300">Run this script using <code>node app.js</code> in your terminal.</p>

        <h2 className="text-2xl font-semibold">Running Your First Script</h2>
        <p>To run your script, open your terminal in the project folder and type:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`node app.js`}
          </code>
        </pre>
        <p>Once executed, you should see "Hello, World!" printed in the terminal.</p>

        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p>Now that you’ve successfully created your first Node.js project, here’s what you can do next:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Learn about Node.js modules and how to use them (e.g., <code>http</code>, <code>fs</code>, etc.).</li>
          <li>Experiment with creating a simple HTTP server to handle requests.</li>
          <li>Explore npm to install external packages for your project (e.g., Express.js, a popular web framework).</li>
        </ul>

        {/* Optional Section for Troubleshooting */}
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <p>If you encounter any issues during setup, here are some tips:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Make sure Node.js is installed correctly by running <code>node -v</code> to check the version.</li>
          <li>If you get an error when running the script, double-check the file path and ensure you're in the correct directory.</li>
          <li>Ensure your terminal/command prompt is running with the correct permissions.</li>
        </ul>
      </div>
    </div>
  );
};

export default NodeGetStartedPage;
