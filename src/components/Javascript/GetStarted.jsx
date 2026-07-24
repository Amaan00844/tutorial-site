"use client";

export default function GetStarted() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">Get Started with JavaScript</h1>
        <p className="text-lg">Setting up your first JavaScript project in the browser.</p>

        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Use a Text Editor:</strong> Open any text editor like VS
            Code, Sublime Text, or Notepad.
          </li>
          <li>
            <strong>Create an HTML File:</strong> Write a basic HTML structure
            and save it with a <code>.html</code> extension.
          </li>
          <li>
            <strong>Add JavaScript:</strong> Use the <code>&lt;script&gt;</code>{" "}
            tag inside the HTML to write or link JavaScript code.
          </li>
          <li>
            <strong>Run in Browser:</strong> Open the HTML file in any browser
            to see the result.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Writing Your First Script</h2>
        <p>Here's a simple example of JavaScript inside an HTML file:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello JavaScript</h1>

    <script>
      alert('Hello, world!');
    </script>
  </body>
</html>`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The <code>&lt;script&gt;</code> tag allows you to write JavaScript directly inside the HTML file.
          </li>
          <li>
            When the page loads, the JavaScript runs and shows a popup alert with your message.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Learn how to use variables and data types in JavaScript.</li>
          <li>Understand how to write conditional statements and loops.</li>
          <li>Experiment with handling user interactions using events (e.g., button clicks).</li>
          <li>Explore how to manipulate HTML and CSS using JavaScript (DOM manipulation).</li>
        </ul>
      </div>
    </div>
  );
};
