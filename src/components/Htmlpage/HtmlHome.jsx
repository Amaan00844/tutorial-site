"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const HtmlHome = () => {
  useReadingTracker("htmlHome");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">HTML Home</h1>

          {/* Introduction Section */}
          <p className="mt-4 text-lg text-gray-600">
            HTML (HyperText Markup Language) is the standard markup language for
            creating web pages. It structures the web content by defining
            elements like headings, paragraphs, images, links, and more.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            HTML is the foundation of web development, and it is used alongside
            CSS for styling and JavaScript for interactivity to create dynamic
            web pages.
          </p>

          {/* HTML Structure Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Document Structure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              An HTML document consists of different elements, each serving a
              unique purpose. The basic structure of an HTML page is as follows:
            </p>

            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is an example of a basic HTML document.</p>
  </body>
</html>`}
            </pre>
          </div>

          {/* HTML Elements Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Elements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HTML elements are the building blocks of a webpage. Here are some
              commonly used elements:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Heading elements used
                for titles and subtitles.
              </li>
              <li>
                <strong>&lt;p&gt;:</strong> Paragraph element for text content.
              </li>
              <li>
                <strong>&lt;a&gt;:</strong> Anchor element for hyperlinks.
              </li>
              <li>
                <strong>&lt;img&gt;:</strong> Image element to display images on
                the webpage.
              </li>
              <li>
                <strong>&lt;ul&gt; &amp; &lt;ol&gt;:</strong> List elements for
                unordered and ordered lists.
              </li>
            </ul>
          </div>

          {/* HTML Forms Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">HTML Forms</h2>
            <p className="mt-4 text-lg text-gray-600">
              Forms allow users to input data, such as text, selections, or
              buttons. Here's a simple form example:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>`}
            </pre>
          </div>

          {/* HTML Attributes Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Attributes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HTML elements can have attributes that provide additional
              information. For example:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>href:</strong> Used in the <code>&lt;a&gt;</code>{" "}
                element to define the link destination.
              </li>
              <li>
                <strong>src:</strong> Used in the <code>&lt;img&gt;</code>{" "}
                element to define the image source.
              </li>
              <li>
                <strong>alt:</strong> Provides alternative text for images in
                case they are not displayed.
              </li>
            </ul>
          </div>

          {/* HTML Best Practices Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here are some best practices to follow while writing HTML:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Use semantic tags:</strong> Use proper HTML tags like{" "}
                <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>,{" "}
                <code>&lt;footer&gt;</code> for better accessibility.
              </li>
              <li>
                <strong>Ensure accessibility:</strong> Always include{" "}
                <code>alt</code> text for images and ensure form labels are
                properly associated with their inputs.
              </li>
              <li>
                <strong>Validate your code:</strong> Use tools like the W3C
                Validator to check for syntax errors and ensure your HTML is
                correctly structured.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default HtmlHome;
