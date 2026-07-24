"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const IndexTypemongo = () => {
  useReadingTracker("indextypemongo");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Index Types
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            Indexes in MongoDB improve the performance of read operations by
            allowing queries to efficiently locate and access the data. Without
            indexes, MongoDB must perform a collection scan, which is
            inefficient for large datasets.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            MongoDB supports a variety of index types tailored for different use
            cases. Let’s explore each type and when to use them.
          </p>

          {/* 1. Single Field Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Single Field Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The most basic index type. It is created on a single field in the
              document.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ name: 1 }); // Ascending
db.collection.createIndex({ name: -1 }); // Descending
              `}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Used for sorting and filtering based on one field.
            </p>
          </div>

          {/* 2. Compound Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Compound Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              An index on multiple fields. The order of fields in the index
              matters.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ firstName: 1, lastName: 1 });
              `}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Use compound indexes when queries filter or sort on multiple
              fields.
            </p>
          </div>

          {/* 3. Multikey Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Multikey Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Automatically created when you index a field that holds an array.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ tags: 1 });
              `}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Each value in the array is indexed individually. Useful for fields
              that store multiple values.
            </p>
          </div>

          {/* 4. Text Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Text Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Supports text search for string content in fields.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ description: "text" });
              `}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Use <code>$text</code> queries to search indexed text fields.
            </p>
          </div>

          {/* 5. Hashed Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Hashed Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Indexes the hash of the value, used mainly for sharding.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ userId: "hashed" });
              `}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Useful for evenly distributing data across shards.
            </p>
          </div>

          {/* 6. Geospatial Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Geospatial Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Enables querying of location-based data. There are two types:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                <strong>2dsphere:</strong> For Earth-like geometry (latitude and
                longitude).
              </li>
              <li>
                <strong>2d:</strong> For flat, Cartesian plane data.
              </li>
            </ul>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg mt-2">
              {`
db.places.createIndex({ location: "2dsphere" });
              `}
            </pre>
          </div>

          {/* 7. Wildcard Index */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              7. Wildcard Index
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Indexes all fields or fields matching a pattern. Useful for
              dynamic or unknown fields.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.collection.createIndex({ "$**": 1 });
              `}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Allows queries on any field without creating separate indexes.
            </p>
          </div>

          {/* Performance Tips */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Indexing Best Practices
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Create indexes for fields that are frequently used in queries,
                sorting, or filtering.
              </li>
              <li>
                Use compound indexes instead of multiple single-field indexes
                when possible.
              </li>
              <li>
                Be cautious with too many indexes — they impact write
                performance.
              </li>
              <li>
                Use the <code>explain()</code> method to analyze query
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

export default IndexTypemongo;
