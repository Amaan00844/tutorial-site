"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const IdClass = () => {
  useReadingTracker("htmlID");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML <code>id</code> and <code>class</code> Attributes
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            In HTML, the <code>id</code> and <code>class</code> attributes are
            used to uniquely identify elements and to apply styling or
            scripting. They are especially important when working with CSS and
            JavaScript.
          </p>

          {/* ID Attribute */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is an <code>id</code>?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>id</code> attribute uniquely identifies a single HTML
              element on a page. No two elements should share the same{" "}
              <code>id</code>. It's often used with JavaScript or when linking
              to a specific section of a page.
            </p>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg mt-4">
              {`
<!-- HTML -->
<p id="intro">Welcome to my website!</p>

/* CSS */
#intro {
  color: green;
}
              `}
            </pre>
          </div>

          {/* Class Attribute */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is a <code>class</code>?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>class</code> attribute is used to assign one or more
              class names to an element. Unlike <code>id</code>, you can use the
              same class on multiple elements. This is especially useful for
              applying shared CSS styles.
            </p>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg mt-4">
              {`
<!-- HTML -->
<p class="highlight">This is important text.</p>
<p class="highlight">This is also important.</p>

/* CSS */
.highlight {
  background-color: yellow;
}
              `}
            </pre>
          </div>

          {/* Differences Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Difference Between <code>id</code> and <code>class</code>
            </h2>
            <table className="table-auto w-full text-left mt-4 border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border-b">Feature</th>
                  <th className="p-2 border-b">id</th>
                  <th className="p-2 border-b">class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">Uniqueness</td>
                  <td className="p-2 border-b">Must be unique</td>
                  <td className="p-2 border-b">Can be reused</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">CSS Selector</td>
                  <td className="p-2 border-b">
                    <code>#idname</code>
                  </td>
                  <td className="p-2 border-b">
                    <code>.classname</code>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Use Case</td>
                  <td className="p-2 border-b">
                    Targeting one specific element
                  </td>
                  <td className="p-2 border-b">Styling multiple elements</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">JavaScript</td>
                  <td className="p-2 border-b">
                    <code>document.getElementById()</code>
                  </td>
                  <td className="p-2 border-b">
                    <code>document.getElementsByClassName()</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Use <code>id</code> only when you need to uniquely identify an
                element.
              </li>
              <li>
                Prefer <code>class</code> when styling multiple elements with
                the same rules.
              </li>
              <li>
                Never use the same <code>id</code> on more than one element.
              </li>
              <li>
                Give meaningful names to both <code>id</code> and{" "}
                <code>class</code> attributes.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default IdClass;
