"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Basichtml = () => {
  useReadingTracker("htmlBasic");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Basic HTML</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML (HyperText Markup Language) is the standard language used to
            create and structure content on the web. It uses a series of
            elements (or "tags") to define different parts of a webpage, such as
            text, images, links, and layout.
          </p>

          {/* Why Learn HTML */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Learn HTML?
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>It is the foundation of all websites.</li>
              <li>It is easy to learn and essential for web development.</li>
              <li>It works hand-in-hand with CSS and JavaScript.</li>
              <li>
                It enables structure and accessibility for content on the web.
              </li>
            </ul>
          </div>

          {/* Basic Structure */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Basic HTML Document Structure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every HTML document starts with a specific structure. Here’s a
              minimal example:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">This includes:</p>
            <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>&lt;!DOCTYPE html&gt;:</strong> Declares the document
                type.
              </li>
              <li>
                <strong>&lt;html&gt;:</strong> Root element of the document.
              </li>
              <li>
                <strong>&lt;head&gt;:</strong> Contains metadata and title.
              </li>
              <li>
                <strong>&lt;body&gt;:</strong> Contains the visible content of
                the page.
              </li>
            </ul>
          </div>

          {/* Common HTML Tags */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common HTML Tags
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Headings of different
                levels.
              </li>
              <li>
                <strong>&lt;p&gt;:</strong> Paragraphs of text.
              </li>
              <li>
                <strong>&lt;a href="#"&gt;:</strong> Links to other pages or
                websites.
              </li>
              <li>
                <strong>&lt;img src="..."&gt;:</strong> Embeds images.
              </li>
              <li>
                <strong>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;:</strong> Lists
                (unordered/ordered).
              </li>
              <li>
                <strong>&lt;div&gt; and &lt;span&gt;:</strong> Group and style
                content.
              </li>
              <li>
                <strong>&lt;input&gt;, &lt;form&gt;, &lt;button&gt;:</strong>{" "}
                User inputs and forms.
              </li>
            </ul>
          </div>

          {/* Attributes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Attributes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Attributes provide additional information about HTML elements.
              They usually come in name/value pairs:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>href:</strong> Specifies the URL in an anchor tag.
              </li>
              <li>
                <strong>src:</strong> Specifies the path to an image.
              </li>
              <li>
                <strong>alt:</strong> Alternative text for images.
              </li>
              <li>
                <strong>class:</strong> Assigns a class name for CSS styling.
              </li>
              <li>
                <strong>id:</strong> Assigns a unique identifier.
              </li>
            </ul>
          </div>

          {/* Nesting and Semantics */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Nesting and Semantic HTML
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tags can be nested, and semantic elements like{" "}
              <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
              <code>&lt;article&gt;</code>, and <code>&lt;nav&gt;</code> help
              convey meaning to browsers and assistive technologies.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Always use proper indentation for readability.</li>
              <li>Use semantic tags for better structure and accessibility.</li>
              <li>Close all tags properly.</li>
              <li>Validate your code using online tools like W3C Validator.</li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Basichtml;
