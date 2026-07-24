"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const IndexCreating = () => {
  useReadingTracker("indexcreatingmongo");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            Creating Indexes in MongoDB
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            Indexes in MongoDB are special data structures that improve the
            speed and efficiency of read operations by allowing quick lookups of
            documents. You can create indexes on one or more fields in a
            collection.
          </p>

          {/* Why Create Indexes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Create Indexes?
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 mt-4">
              <li>To optimize query performance.</li>
              <li>To support sorting operations.</li>
              <li>To enforce uniqueness of fields.</li>
              <li>
                To improve performance for aggregation pipelines and joins.
              </li>
            </ul>
          </div>

          {/* Basic Index Creation */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Basic Syntax
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB uses the <code>createIndex()</code> method to create
              indexes:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ fieldName: 1 }) // 1 for ascending, -1 for descending
              `}
            </pre>
          </div>

          {/* Examples of Index Creation */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Examples</h2>

            {/* Single Field Index */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                1. Single Field Index
              </h3>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.users.createIndex({ name: 1 });
                `}
              </pre>
              <p className="text-lg text-gray-600">
                Indexes the "name" field in ascending order.
              </p>
            </div>

            {/* Compound Index */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                2. Compound Index
              </h3>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.orders.createIndex({ customerId: 1, date: -1 });
                `}
              </pre>
              <p className="text-lg text-gray-600">
                Indexes both "customerId" and "date" fields together.
              </p>
            </div>

            {/* Unique Index */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                3. Unique Index
              </h3>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.users.createIndex({ email: 1 }, { unique: true });
                `}
              </pre>
              <p className="text-lg text-gray-600">
                Ensures no two documents have the same email value.
              </p>
            </div>

            {/* TTL Index */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                4. TTL (Time-To-Live) Index
              </h3>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
                `}
              </pre>
              <p className="text-lg text-gray-600">
                Automatically deletes documents after 1 hour.
              </p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices for Index Creation
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 mt-4">
              <li>
                Only create indexes on fields used in queries, sorting, or
                filtering.
              </li>
              <li>
                Use compound indexes instead of multiple single-field indexes
                where possible.
              </li>
              <li>
                Don't over-index; each index increases storage and slows down
                writes.
              </li>
              <li>
                Use <code>db.collection.explain()</code> to analyze index
                efficiency.
              </li>
            </ul>
          </div>

          {/* List and Drop Indexes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Managing Indexes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              You can list or drop indexes with the following commands:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
// List indexes
db.collection.getIndexes();

// Drop specific index
db.collection.dropIndex("index_name");

// Drop all indexes
db.collection.dropIndexes();
              `}
            </pre>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default IndexCreating;
