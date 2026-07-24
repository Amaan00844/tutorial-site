"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const HtmlCss = () => {
  useReadingTracker("htmlCss");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            Introduction to HTML & CSS
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML and CSS are the fundamental building blocks of web development.
            HTML (HyperText Markup Language) is used to structure content on the
            web, while CSS (Cascading Style Sheets) is used to style and layout
            that content.
          </p>

          {/* HTML Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is HTML?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HTML provides the structure of a webpage using elements or "tags."
              These elements define headings, paragraphs, links, images, lists,
              tables, and more.
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>&lt;html&gt;</code> – Root of the document
              </li>
              <li>
                <code>&lt;head&gt;</code> – Metadata, title, links, and scripts
              </li>
              <li>
                <code>&lt;body&gt;</code> – All visible page content
              </li>
              <li>
                <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> – Headings
              </li>
              <li>
                <code>&lt;p&gt;</code> – Paragraphs
              </li>
              <li>
                <code>&lt;a&gt;</code> – Hyperlinks
              </li>
              <li>
                <code>&lt;img&gt;</code> – Images
              </li>
              <li>
                <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> – Generic
                containers
              </li>
            </ul>
          </div>

          {/* CSS Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is CSS?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              CSS describes how HTML elements are to be displayed on screen,
              paper, or in other media. It allows for the separation of content
              (HTML) from presentation (CSS).
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Selectors</strong> – Target HTML elements (e.g.,{" "}
                <code>p</code>, <code>.class</code>, <code>#id</code>)
              </li>
              <li>
                <strong>Properties</strong> – Define the styles (e.g.,{" "}
                <code>color</code>, <code>margin</code>, <code>font-size</code>)
              </li>
              <li>
                <strong>Values</strong> – Set the property (e.g.,{" "}
                <code>red</code>, <code>16px</code>)
              </li>
              <li>
                Supports responsive design with <code>@media</code> queries
              </li>
            </ul>
          </div>

          {/* Example Code */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML & CSS Example
            </h2>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg">
              {`
<!-- HTML -->
<!DOCTYPE html>
<html>
  <head>
    <title>My Styled Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1 class="main-heading">Welcome!</h1>
    <p>This is a styled paragraph.</p>
  </body>
</html>

/* CSS (styles.css) */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

.main-heading {
  color: #3366cc;
  font-size: 36px;
}
              `}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Keep HTML semantic and well-structured.</li>
              <li>Use external CSS for clean separation of concerns.</li>
              <li>Use class names consistently and meaningfully.</li>
              <li>
                Use responsive units (%, rem, em) for better accessibility.
              </li>
              <li>Test styles across different devices and browsers.</li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default HtmlCss;
