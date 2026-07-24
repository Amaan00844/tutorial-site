'use client';

const NodeModulesPage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white p-8 max-w-4xl rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js Modules</h1>
        <p className="text-lg">
          In Node.js, modules are reusable blocks of code whose existence does not accidentally impact other code. They allow developers to organize their code into separate files and keep things modular, making it easier to manage and maintain larger applications.
        </p>

        <h2 className="text-2xl font-semibold">Types of Modules</h2>
        <p>
          Node.js provides three types of modules: Core, Local, and Third-Party. Understanding the differences and when to use each type is essential for developing efficient applications.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Core Modules:</strong> These are built-in modules provided by Node.js itself, such as <code>fs</code> (file system), <code>http</code> (for creating HTTP servers), and <code>path</code> (for handling and transforming file paths). These modules come with Node.js, so no installation is required.</li>
          <li><strong>Local Modules:</strong> These are custom modules that you create within your own files. For example, you might create a <code>math.js</code> file that contains math-related functions, and then import it into other files for use.</li>
          <li><strong>Third-Party Modules:</strong> These modules are not built into Node.js but are created by others. They are typically installed via npm (Node Package Manager). Examples include <code>express</code> (for web servers), <code>mongoose</code> (for MongoDB interaction), and <code>chalk</code> (for colored terminal output).</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Using a Core Module (<code>fs</code>)</h2>
        <p>
          Core modules are extremely useful for common tasks like working with files, handling HTTP requests, and more. Here’s an example of using the <code>fs</code> (File System) core module to create a new file and write some content into it.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const fs = require('fs');

// Create a new file with some text
fs.writeFileSync('example.txt', 'Hello from Node.js!');
console.log('File created successfully.');`}
          </code>
        </pre>
        <p>
          In this example, we used the <code>writeFileSync</code> method of the <code>fs</code> module to synchronously write text to a file named <code>example.txt</code>. After running this, a new file will be created with the specified content.
        </p>

        <h2 className="text-2xl font-semibold">Creating Your Own Module</h2>
        <p>
          Node.js allows you to create your own custom modules to organize your code. This way, you can keep your application neat and modular by breaking it down into smaller pieces.
        </p>
        <p className="font-medium">Step 1: Create a file <code>math.js</code></p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`// math.js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;`}
          </code>
        </pre>
        <p>
          In the <code>math.js</code> file, we’re using <code>exports</code> to expose two functions, <code>add</code> and <code>sub</code>, which perform addition and subtraction, respectively.
        </p>
        <p className="font-medium">Step 2: Use it in another file</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`// app.js
const math = require('./math');

console.log('Sum:', math.add(5, 3)); // Output: 8
console.log('Difference:', math.sub(10, 4)); // Output: 6`}
          </code>
        </pre>
        <p>
          In <code>app.js</code>, we use the <code>require()</code> function to import the custom <code>math.js</code> module. Then, we call the <code>add</code> and <code>sub</code> functions and log their results to the console.
        </p>

        <h2 className="text-2xl font-semibold">Installing Third-Party Modules</h2>
        <p>
          You can use npm (Node Package Manager) to install third-party modules from the vast Node.js ecosystem. Here's how to install the <code>chalk</code> module, which allows you to output colored text to the terminal.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install chalk</code>
        </pre>
        <p>
          After installing <code>chalk</code>, you can use it in your code as follows:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const chalk = require('chalk');
console.log(chalk.green('Success!'));`}
          </code>
        </pre>
        <p>
          In this example, <code>chalk.green()</code> is used to output the word "Success!" in green color to the console.
        </p>

        <h2 className="text-2xl font-semibold">📦 Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Modules help organize your code into smaller, reusable blocks, making it easier to manage and maintain.</li>
          <li>Core modules come built-in with Node.js and can be used without installation.</li>
          <li>Local modules are custom modules you create for your own use within your project.</li>
          <li>Third-party modules are external packages that you install via npm. They provide additional functionality for your project.</li>
          <li>You use <code>require()</code> to load a module and <code>exports</code> or <code>module.exports</code> to expose functions or variables from a module.</li>
        </ul>
      </div>
    </div>
  );
};

export default NodeModulesPage;
