"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Queryoperator = () => {
  useReadingTracker("mongoqueryoperator");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Query Operators
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            Query operators in MongoDB are special expressions used to filter
            documents based on specific conditions. These operators enhance the
            flexibility of queries and allow complex search criteria.
          </p>

          {/* Categories */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Types of Query Operators
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB provides various categories of query operators:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Comparison Operators</li>
              <li>Logical Operators</li>
              <li>Element Operators</li>
              <li>Evaluation Operators</li>
              <li>Array Operators</li>
            </ul>
          </div>

          {/* Comparison Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              1. Comparison Operators
            </h3>
            <p className="text-lg text-gray-600">Used to compare values:</p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ age: { $gt: 18 } }     // Greater than
{ age: { $lt: 60 } }     // Less than
{ age: { $gte: 18 } }    // Greater than or equal
{ age: { $lte: 60 } }    // Less than or equal
{ age: { $ne: 30 } }     // Not equal
{ name: { $eq: "John" } } // Equal
              `}
            </pre>
          </div>

          {/* Logical Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              2. Logical Operators
            </h3>
            <p className="text-lg text-gray-600">
              Used to combine query conditions:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ $and: [ { age: { $gt: 25 } }, { status: "active" } ] }
{ $or: [ { age: { $lt: 18 } }, { status: "inactive" } ] }
{ $not: { age: { $gt: 65 } } }
{ $nor: [ { age: 30 }, { status: "active" } ] }
              `}
            </pre>
          </div>

          {/* Element Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              3. Element Operators
            </h3>
            <p className="text-lg text-gray-600">
              Used to check presence and data types of fields:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ email: { $exists: true } }         // Field exists
{ age: { $type: "int" } }            // Field is of integer type
              `}
            </pre>
          </div>

          {/* Evaluation Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              4. Evaluation Operators
            </h3>
            <p className="text-lg text-gray-600">
              Used for matching based on expressions or patterns:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ name: { $regex: /^A/ } }           // Names starting with 'A'
{ score: { $mod: [5, 0] } }          // Score divisible by 5
{ $expr: { $gt: ["$spent", "$budget"] } } // Field comparison
              `}
            </pre>
          </div>

          {/* Array Operators */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              5. Array Operators
            </h3>
            <p className="text-lg text-gray-600">Used to query array fields:</p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
{ tags: { $all: ["tech", "mongodb"] } }      // Contains all values
{ scores: { $elemMatch: { $gt: 80 } } }      // At least one element > 80
{ tags: { $size: 3 } }                       // Array has 3 elements
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
                Use indexes on fields frequently used in query operators to
                improve performance.
              </li>
              <li>Avoid using `$regex` on large datasets without indexes.</li>
              <li>
                Combine `$and`, `$or`, and `$in` effectively to write flexible
                queries.
              </li>
              <li>
                Always test your queries in MongoDB Compass or shell before
                deploying to production.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Queryoperator;
