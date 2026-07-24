"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const UpdateOperator = () => {
  useReadingTracker("mongoUpdateoperator");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Update Operators
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            MongoDB update operators are used to modify the fields of documents
            in a collection. They allow you to update values, add or remove
            fields, manipulate arrays, and more. These operators are primarily
            used with the <code>updateOne()</code>, <code>updateMany()</code>,
            and <code>findOneAndUpdate()</code> methods.
          </p>

          {/* Categories of Update Operators */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Types of Update Operators
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Field Update Operators</li>
              <li>Arithmetic Operators</li>
              <li>Array Update Operators</li>
              <li>Date Operators</li>
              <li>Bitwise Operators</li>
            </ul>
          </div>

          {/* Field Update Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              1. Field Update Operators
            </h3>
            <p className="text-lg text-gray-600">
              These operators modify specific fields of a document:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ $set: { status: "active" } }        // Set a new value
{ $unset: { age: "" } }               // Remove a field
{ $rename: { username: "user_name" } } // Rename a field
              `}
            </pre>
          </div>

          {/* Arithmetic Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              2. Arithmetic Operators
            </h3>
            <p className="text-lg text-gray-600">
              Used to increment or multiply numerical fields:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ $inc: { views: 1 } }         // Increment 'views' by 1
{ $mul: { price: 1.1 } }       // Multiply 'price' by 1.1
              `}
            </pre>
          </div>

          {/* Array Update Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              3. Array Update Operators
            </h3>
            <p className="text-lg text-gray-600">Manipulate array fields:</p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ $push: { tags: "mongodb" } }               // Add an item
{ $addToSet: { tags: "database" } }          // Add only if not present
{ $pop: { tags: -1 } }                       // Remove first element
{ $pull: { tags: "obsolete" } }              // Remove matching elements
              `}
            </pre>
          </div>

          {/* Date Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              4. Date Operator
            </h3>
            <p className="text-lg text-gray-600">
              Set the value of a field to the current date:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ $currentDate: { lastModified: true } }
              `}
            </pre>
          </div>

          {/* Bitwise Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              5. Bitwise Operators
            </h3>
            <p className="text-lg text-gray-600">
              Perform bit-level operations on integer fields:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ $bit: { flags: { and: 5 } } }
{ $bit: { flags: { or: 2 } } }
              `}
            </pre>
          </div>

          {/* Example Usage */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Example</h2>
            <p className="text-lg text-gray-600">
              Here’s an example that uses multiple update operators together:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.users.updateOne(
  { username: "john_doe" },
  {
    $set: { status: "active" },
    $inc: { loginCount: 1 },
    $currentDate: { lastLogin: true }
  }
);
              `}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Always use filters carefully to avoid unintentional updates.
              </li>
              <li>
                Use <code>$set</code> instead of overwriting whole documents.
              </li>
              <li>
                Use <code>$addToSet</code> instead of <code>$push</code> when
                dealing with unique array values.
              </li>
              <li>
                Use indexes on fields involved in the query part for
                performance.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default UpdateOperator;
