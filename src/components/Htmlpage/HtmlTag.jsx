"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const HtmlTag = () => {
  useReadingTracker("htmltag");

  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">HTML Tags</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML (HyperText Markup Language) is built using "tags". Tags are
            instructions used to define the structure, content, and formatting
            of a webpage. Each tag has a specific meaning and behavior.
          </p>

          {/* Basic Syntax */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              HTML Tag Syntax
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most HTML tags have an opening tag and a closing tag. The content
              goes between these tags:
            </p>
            <pre className="p-4 bg-gray-100 text-[#4c696a] rounded-lg">
              {`
<tagname>Content goes here</tagname>
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              Some tags are self-closing and do not require a closing tag (e.g.,{" "}
              <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>).
            </p>
          </div>

          {/* Common HTML Tags */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common HTML Tags
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>&lt;html&gt;</code> - Root element of an HTML document.
              </li>
              <li>
                <code>&lt;head&gt;</code> - Contains meta information, styles,
                and links.
              </li>
              <li>
                <code>&lt;title&gt;</code> - Sets the title of the document
                (shown in browser tab).
              </li>
              <li>
                <code>&lt;body&gt;</code> - Holds all the visible content of a
                web page.
              </li>
              <li>
                <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Heading
                tags, with <code>&lt;h1&gt;</code> being the most important.
              </li>
              <li>
                <code>&lt;p&gt;</code> - Paragraph tag used to define text
                blocks.
              </li>
              <li>
                <code>&lt;a&gt;</code> - Anchor tag used to create hyperlinks.
              </li>
              <li>
                <code>&lt;img&gt;</code> - Embeds images in the document.
              </li>
              <li>
                <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>,{" "}
                <code>&lt;li&gt;</code> - Lists (unordered, ordered, list
                items).
              </li>
              <li>
                <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> - Generic
                containers for layout and styling.
              </li>
            </ul>
          </div>

          {/* Example Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example of HTML Tags in Action
            </h2>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg">
              {`
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://example.com">Visit Example</a>
    <img src="image.jpg" alt="A sample image" />
  </body>
</html>
              `}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices for Using HTML Tags
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Use semantic tags (like <code>&lt;header&gt;</code>,{" "}
                <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) for
                better accessibility.
              </li>
              <li>Always close your tags properly.</li>
              <li>Organize your HTML with indentation for readability.</li>
              <li>Use alt attributes for images to improve accessibility.</li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default HtmlTag;
