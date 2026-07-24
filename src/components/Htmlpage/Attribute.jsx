"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Attribute = () => {
  useReadingTracker("htmlAttribute");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Attributes
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML attributes provide additional information about HTML elements.
            They are always specified in the start tag and usually come in
            name/value pairs like <code>name="value"</code>.
          </p>

          {/* Syntax */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Syntax of Attributes
            </h2>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<tagname attribute="value">Content</tagname>`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              For example, the <code>href</code> attribute in an anchor tag
              specifies the URL the link goes to:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<a href="https://example.com">Visit Example</a>`}
            </pre>
          </div>

          {/* Common Attributes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common HTML Attributes
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>href</strong> – Specifies the URL in anchor tags.
              </li>
              <li>
                <strong>src</strong> – Defines the source of an image, script,
                or iframe.
              </li>
              <li>
                <strong>alt</strong> – Provides alternative text for images.
              </li>
              <li>
                <strong>class</strong> – Assigns one or more class names for CSS
                styling.
              </li>
              <li>
                <strong>id</strong> – Defines a unique identifier for an
                element.
              </li>
              <li>
                <strong>style</strong> – Adds inline CSS styling to an element.
              </li>
              <li>
                <strong>title</strong> – Sets a tooltip that appears when you
                hover over an element.
              </li>
              <li>
                <strong>target</strong> – Specifies where to open the linked
                document (e.g., <code>_blank</code> for a new tab).
              </li>
              <li>
                <strong>disabled</strong> – Disables form elements like buttons
                or inputs.
              </li>
              <li>
                <strong>value</strong> – Defines the initial value of form
                elements.
              </li>
            </ul>
          </div>

          {/* Example */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example Using Multiple Attributes
            </h2>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`
<input 
  type="text" 
  name="username" 
  placeholder="Enter your username" 
  required 
  class="input-box"
/>
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              This example demonstrates multiple attributes on a single{" "}
              <code>&lt;input&gt;</code> tag.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices for Attributes
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Use descriptive values for <code>alt</code> and{" "}
                <code>title</code> for accessibility.
              </li>
              <li>
                Use <code>id</code> only when necessary and avoid duplicates on
                a page.
              </li>
              <li>
                Prefer <code>class</code> over <code>id</code> for styling
                multiple elements.
              </li>
              <li>Always enclose attribute values in double quotes.</li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default Attribute;
