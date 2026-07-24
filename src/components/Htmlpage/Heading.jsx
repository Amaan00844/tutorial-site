"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Heading = () => {
  useReadingTracker("htmlHeading");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Headings
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML provides six levels of headings, from <code>&lt;h1&gt;</code>{" "}
            to <code>&lt;h6&gt;</code>. These headings are used to define
            titles, sections, and structure in a webpage. They play an important
            role in both user readability and search engine optimization (SEO).
          </p>

          {/* Heading Tags */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Heading Tag Levels
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Each heading tag represents a level of importance, where{" "}
              <code>&lt;h1&gt;</code> is the most important and{" "}
              <code>&lt;h6&gt;</code> is the least:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>&lt;h1&gt;</code> – Main page heading, used once per page.
              </li>
              <li>
                <code>&lt;h2&gt;</code> – Section heading, like subsections
                under <code>&lt;h1&gt;</code>.
              </li>
              <li>
                <code>&lt;h3&gt;</code> to <code>&lt;h6&gt;</code> – Nested or
                less important headings.
              </li>
            </ul>
          </div>

          {/* Visual Example */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example: Heading Tags
            </h2>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg">
              {`
<h1>This is an H1 Heading</h1>
<h2>This is an H2 Heading</h2>
<h3>This is an H3 Heading</h3>
<h4>This is an H4 Heading</h4>
<h5>This is an H5 Heading</h5>
<h6>This is an H6 Heading</h6>
              `}
            </pre>
          </div>

          {/* Output Preview */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Rendered Output
            </h2>
            <div className="bg-gray-50 p-4 rounded border mt-4 text-gray-700">
              <h1 className="text-4xl font-bold">This is an H1 Heading</h1>
              <h2 className="text-3xl font-semibold mt-2">
                This is an H2 Heading
              </h2>
              <h3 className="text-2xl mt-2">This is an H3 Heading</h3>
              <h4 className="text-xl mt-2">This is an H4 Heading</h4>
              <h5 className="text-lg mt-2">This is an H5 Heading</h5>
              <h6 className="text-base mt-2">This is an H6 Heading</h6>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Use only one <code>&lt;h1&gt;</code> per page for the main
                title.
              </li>
              <li>
                Use headings in order (e.g., don't skip from{" "}
                <code>&lt;h1&gt;</code> to <code>&lt;h4&gt;</code>).
              </li>
              <li>Keep headings concise and descriptive.</li>
              <li>Use headings to break content into logical sections.</li>
              <li>Headings improve accessibility and SEO.</li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Heading;
