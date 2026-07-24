"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpIntro() {
  useReadingTracker("php-intro");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">PHP Introduction</h1>

      <div className="bg-white p-6 max-w-8xl mx-auto">

        <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-4">What is PHP?</h2>
        <p className="text-gray-800 text-md leading-relaxed mb-6">
          PHP (Hypertext Preprocessor) is a server-side scripting language used to create dynamic websites. It is free, open-source, and works on the backend of websites.
        </p>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mb-2">Why Use PHP?</h3>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 mb-6">
          <li>PHP makes websites dynamic and interactive.</li>
          <li>PHP code runs on the server and appears as HTML in the browser.</li>
          <li>PHP is easy to learn and perfect for beginners.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mb-2">PHP Features</h3>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 mb-6">
          <li>Open-source and free of cost.</li>
          <li>Fast execution speed.</li>
          <li>Can connect to databases (like MySQL).</li>
          <li>Cross-platform support (Windows, Linux, macOS).</li>
          <li>Supports Object-Oriented Programming (OOP).</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mb-2">What Can PHP Do?</h3>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 mb-6">
          <li>Collect form data</li>
          <li>Dynamically generate website content</li>
          <li>Handle cookies (set and get)</li>
          <li>Work with the file system (create, read, write, delete files)</li>
          <li>Create user login/logout systems</li>
          <li>Add, delete, or update data in databases</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mb-2">Basic PHP Syntax</h3>
        <p className="text-sm text-gray-800 leading-relaxed mb-4">
          PHP code is written inside <code>&lt;?php ... ?&gt;</code> tags. It runs on the server and returns HTML output to the browser.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm mb-6">
          <code className="text-[#DDA0DD]">
{`<!DOCTYPE html>
<html>
  <body>
    <h1>My first PHP page</h1>
    <?php
      /bin/echo "Hello World!";
    ?>
  </body>
</html>`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mb-2">PHP File Extension</h3>
        <p className="text-sm text-gray-800 mb-6">
          PHP files use the <code>.php</code> extension.<br/>
          Examples: <code>index.php</code>, <code>contact.php</code>, etc.
        </p>

        <h3 className="text-xl font-semibold text-[#e992e9] mb-2">How PHP Works?</h3>
        <ol className="list-decimal list-inside text-sm text-gray-800 space-y-2 mb-6">
          <li>The client (user) sends a request through the browser.</li>
          <li>The PHP file runs on the server.</li>
          <li>PHP generates HTML on the server side.</li>
          <li>The browser displays the HTML output (the PHP code is not visible).</li>
        </ol>

      </div>
    </div>
  );
}
