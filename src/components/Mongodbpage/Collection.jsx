"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Collection = () => {
  useReadingTracker("collectionmongo");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Collections
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            In MongoDB, a <strong>collection</strong> is a grouping of MongoDB
            documents, similar to a table in relational databases. Collections
            are schema-less, which means documents within a collection can have
            different fields and structures.
          </p>

          {/* Key Characteristics */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Key Characteristics
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Documents in a collection share a common purpose or domain.
              </li>
              <li>
                Collections do not enforce document structure (schema-less).
              </li>
              <li>
                Collections are created automatically when the first document is
                inserted.
              </li>
            </ul>
          </div>

          {/* Creating a Collection */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Creating a Collection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Collections can be created explicitly or implicitly. To explicitly
              create a collection:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.createCollection("users");
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              Alternatively, simply inserting a document will auto-create the
              collection:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.products.insertOne({ name: "Phone", price: 299 });
              `}
            </pre>
          </div>

          {/* Listing and Dropping Collections */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Managing Collections
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>List all collections:</strong>
              </li>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`db.getCollectionNames();`}
              </pre>
              <li>
                <strong>Drop a collection:</strong>
              </li>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`db.users.drop();`}
              </pre>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common Use Cases
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Collections are commonly used to store data for specific
              application features. Examples:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>users</code> - user account information
              </li>
              <li>
                <code>orders</code> - purchase orders for e-commerce apps
              </li>
              <li>
                <code>products</code> - product catalog
              </li>
              <li>
                <code>logs</code> - application logs for monitoring
              </li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use meaningful and descriptive collection names.</li>
              <li>Group related data into the same collection.</li>
              <li>
                Avoid excessive numbers of collections unless needed (like for
                sharding or separation).
              </li>
              <li>
                Use indexes to improve query performance on large collections.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Collection;
