'use client';

const NpmModulePage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white p-8 max-w-4xl rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js NPM (Node Package Manager)</h1>
        <p className="text-lg">
          NPM (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage dependencies (libraries and tools) in their projects. NPM comes bundled with Node.js, and it's an essential tool for any Node.js developer.
        </p>

        <h2 className="text-2xl font-semibold"> Initializing a Project</h2>
        <p>To start using npm in your project, initialize it with the following command:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm init</code>
        </pre>
        <p>
          This command will prompt you with a series of questions about your project (e.g., project name, version, description, etc.). Once you complete the prompts, it generates a <code>package.json</code> file in your project directory.
        </p>
        <p>Alternatively, you can use <code>npm init -y</code> to skip the questions and generate a default <code>package.json</code> file automatically.</p>

        <h2 className="text-2xl font-semibold">Installing a Package</h2>
        <p>To install a package, such as <code>lodash</code> (a utility library), use the following command:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install lodash</code>
        </pre>
        <p>
          This command will install the package and add it to your <code>node_modules</code> directory. It will also update the <code>dependencies</code> section of your <code>package.json</code> file, like this:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}`}
          </code>
        </pre>
        <p>This makes it easy to share and install the same dependencies in another environment or project setup.</p>

        <h2 className="text-2xl font-semibold">Installing Dev Dependencies</h2>
        <p>Dev dependencies are used only during development (e.g., testing tools, build tools, etc.). These are not included in production builds of your application.</p>
        <p>To install a package as a dev dependency, use the <code>--save-dev</code> flag. For example, to install <code>nodemon</code> (a tool for automatically restarting your Node.js server during development), use the following command:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install nodemon --save-dev</code>
        </pre>
        <p>This will add <code>nodemon</code> to the <code>devDependencies</code> section of your <code>package.json</code>:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`{
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">package.json File</h2>
        <p>The <code>package.json</code> file contains essential metadata about your project, including the project name, version, description, main entry file, and dependencies. Here's an example of a <code>package.json</code> file:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`}
          </code>
        </pre>
        <p>In this file:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>dependencies</code> section lists the packages required for production.</li>
          <li><code>devDependencies</code> section lists the packages required for development.</li>
          <li><code>scripts</code> section defines custom commands you can run using <code>npm run</code> (e.g., <code>npm run start</code> to start the server).</li>
        </ul>

        <h2 className="text-2xl font-semibold"> Useful NPM Commands</h2>
        <p>Here are some useful commands you can use with npm:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>npm install</code> – Installs all dependencies listed in <code>package.json</code>.</li>
          <li><code>npm uninstall &lt;package&gt;</code> – Removes a package from the <code>node_modules</code> directory and <code>package.json</code>.</li>
          <li><code>npm update</code> – Updates all packages to the latest allowed versions based on the version ranges defined in <code>package.json</code>.</li>
          <li><code>npm list</code> – Shows installed packages in the current project, including their versions.</li>
          <li><code>npm run &lt;script&gt;</code> – Runs a custom script defined in <code>package.json</code>. For example, <code>npm run dev</code> will run the script defined under the "dev" key in <code>scripts</code>.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>NPM is a package manager for Node.js that allows you to manage project dependencies and scripts.</li>
          <li><code>package.json</code> contains metadata about the project and its dependencies.</li>
          <li>Use <code>npm install</code> to install packages and <code>npm install --save-dev</code> for development-only packages.</li>
          <li>You can create custom scripts in <code>package.json</code> to automate tasks and run commands more easily.</li>
        </ul>

        <h2 className="text-2xl font-semibold"> Additional Resources</h2>
        <p>If you want to learn more about NPM and how to use it effectively in your projects, check out the following resources:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://docs.npmjs.com/" target="_blank" className="text-blue-500">Official NPM Documentation</a></li>
          <li><a href="https://www.npmjs.com/" target="_blank" className="text-blue-500">NPM Website</a></li>
          <li><a href="https://www.freecodecamp.org/news/a-complete-guide-to-npm-versioning-7a01e22e5f63/" target="_blank" className="text-blue-500">Complete Guide to NPM Versioning</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NpmModulePage;
