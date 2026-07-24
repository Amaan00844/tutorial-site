"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Comment = () => {
  useReadingTracker("htmlComment");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Comments
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML comments are used to add notes, explanations, or reminders in
            the HTML code that are not visible in the browser. They are very
            useful during development and collaboration.
          </p>

          {/* Syntax */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Comment Syntax
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HTML comments begin with <code>&lt;!--</code> and end with{" "}
              <code>--&gt;</code>. Any text inside will be treated as a comment
              and ignored by the browser.
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`
<!-- This is a single-line comment -->

<!--
  This is a multi-line comment.
  It can span multiple lines.
-->
              `}
            </pre>
          </div>

          {/* Use Cases */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Use HTML Comments?
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>To describe or explain parts of your code.</li>
              <li>To temporarily disable parts of HTML during testing.</li>
              <li>
                To leave reminders or to-do notes for yourself or other
                developers.
              </li>
              <li>To separate code blocks visually.</li>
            </ul>
          </div>

          {/* Comment Example in a Webpage */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example in an HTML Page
            </h2>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`
<!DOCTYPE html>
<html>
  <head>
    <title>Comment Example</title>
  </head>
  <body>
    <h1>Welcome to My Page</h1>

    <!-- This is a comment. The line below shows a paragraph. -->
    <p>This paragraph is visible on the page.</p>

    <!-- <p>This paragraph is hidden and commented out.</p> -->
  </body>
</html>
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In this example, the first comment explains the code, and the
              second comment disables a line of HTML.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Don’t overuse comments—write clean, self-explanatory code first.
              </li>
              <li>Avoid placing sensitive information in comments.</li>
              <li>
                Use comments to improve collaboration and maintainability.
              </li>
              <li>Make comments clear and concise.</li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Comment;
