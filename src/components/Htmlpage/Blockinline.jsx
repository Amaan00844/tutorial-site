"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Blockinline = () => {
  useReadingTracker("htmlBlock");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            Block vs Inline Elements in HTML
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML elements are categorized into two main types based on their
            default display behavior: <strong>block-level elements</strong> and{" "}
            <strong>inline elements</strong>. Understanding the difference is
            essential for structuring and styling web content effectively.
          </p>

          {/* Block-level Elements */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Block-level Elements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Block-level elements occupy the full width of their parent
              container and always start on a new line. They are used to
              structure major parts of a page.
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>&lt;div&gt;</code> – A generic container for flow content.
              </li>
              <li>
                <code>&lt;p&gt;</code> – Represents a paragraph.
              </li>
              <li>
                <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> – Define
                headings.
              </li>
              <li>
                <code>&lt;section&gt;</code> – Represents a standalone section.
              </li>
              <li>
                <code>&lt;article&gt;</code> – Represents a self-contained
                composition.
              </li>
              <li>
                <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>,{" "}
                <code>&lt;footer&gt;</code> – Semantic containers.
              </li>
            </ul>
          </div>

          {/* Inline Elements */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Inline Elements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Inline elements do not start on a new line and only take up as
              much width as necessary. They are generally used inside
              block-level elements.
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>&lt;span&gt;</code> – A generic inline container.
              </li>
              <li>
                <code>&lt;a&gt;</code> – Defines a hyperlink.
              </li>
              <li>
                <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code> – For bold
                and italic text.
              </li>
              <li>
                <code>&lt;img&gt;</code> – Embeds an image.
              </li>
              <li>
                <code>&lt;br&gt;</code> – Inserts a line break.
              </li>
              <li>
                <code>&lt;label&gt;</code> – Describes form inputs.
              </li>
            </ul>
          </div>

          {/* Example Code */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example: Block vs Inline
            </h2>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg">
              {`
<!-- Block-level elements -->
<div>
  <h2>This is a heading</h2>
  <p>This is a paragraph inside a div.</p>
</div>

<!-- Inline elements -->
<p>This is a <span>span element</span> inside a paragraph. <a href="#">This is a link</a>.</p>
              `}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use block elements for layout and structure.</li>
              <li>
                Use inline elements for small content pieces inside blocks
                (e.g., links, styled text).
              </li>
              <li>
                Avoid nesting block elements inside inline elements—it’s not
                valid HTML.
              </li>
              <li>
                Use semantic elements where possible for accessibility and SEO.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Blockinline;
