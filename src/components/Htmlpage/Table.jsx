"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Table = () => {
  useReadingTracker("htmlTable");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">HTML Tables</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            The <code>&lt;table&gt;</code> tag in HTML is used to create tabular
            data on a webpage. Tables are useful for organizing data into rows
            and columns.
          </p>

          {/* Syntax */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Table Syntax
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A basic HTML table consists of a combination of several tags:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>&lt;table&gt;</code> - Defines the table.
              </li>
              <li>
                <code>&lt;tr&gt;</code> - Table row.
              </li>
              <li>
                <code>&lt;th&gt;</code> - Table header cell.
              </li>
              <li>
                <code>&lt;td&gt;</code> - Table data cell.
              </li>
            </ul>
            <p className="mt-4 text-lg text-gray-600">
              Here is a simple structure:
            </p>
            <pre className="p-4 bg-gray-100 text-[#4c696a] rounded-lg">
              {`
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
              `}
            </pre>
          </div>

          {/* Example Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example of an HTML Table
            </h2>
            <pre className="p-4 bg-gray-100 text-[#496566] rounded-lg">
              {`
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Table</title>
  </head>
  <body>
    <h2>Student Grades</h2>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Grade</th>
      </tr>
      <tr>
        <td>Alice</td>
        <td>Math</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>Science</td>
        <td>B+</td>
      </tr>
    </table>
  </body>
</html>
              `}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices for Tables
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Always use <code>&lt;th&gt;</code> for headers to improve
                accessibility.
              </li>
              <li>
                Use <code>scope</code> attributes in headers for better screen
                reader support.
              </li>
              <li>
                Keep table layout simple and avoid overuse for page layout
                purposes.
              </li>
              <li>
                Use CSS for styling tables instead of inline HTML attributes.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default Table;
