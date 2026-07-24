"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Driver = () => {
  useReadingTracker("mongoDriver");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Drivers
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            MongoDB drivers are libraries that enable applications to interact
            with MongoDB databases using familiar programming languages. They
            abstract low-level networking details and provide convenient APIs
            for performing database operations such as insert, update, query,
            and delete.
          </p>

          {/* Why Use a Driver */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Use a MongoDB Driver?
            </h2>
            <ul className="mt-4 list-disc text-lg text-gray-600 pl-6">
              <li>
                Simplifies communication between your app and the MongoDB
                server.
              </li>
              <li>Provides language-specific syntax and functions.</li>
              <li>Handles BSON encoding/decoding automatically.</li>
              <li>
                Manages connections, cursors, authentication, and error
                handling.
              </li>
            </ul>
          </div>

          {/* Popular MongoDB Drivers */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Popular MongoDB Drivers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB provides official drivers for several languages:
            </p>
            <ul className="mt-4 list-disc text-lg text-gray-600 pl-6">
              <li>
                <strong>Node.js</strong> – <code>mongodb</code> package
              </li>
              <li>
                <strong>Python</strong> – <code>pymongo</code>
              </li>
              <li>
                <strong>Java</strong> – MongoDB Java Driver
              </li>
              <li>
                <strong>C#/.NET</strong> – MongoDB .NET Driver
              </li>
              <li>
                <strong>Go</strong> – MongoDB Go Driver
              </li>
              <li>
                <strong>PHP</strong> – MongoDB PHP Extension and Library
              </li>
              <li>
                <strong>Ruby</strong> – MongoDB Ruby Driver
              </li>
            </ul>
          </div>

          {/* Example: Node.js MongoDB Driver */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example: Using the Node.js Driver
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Install the driver using npm:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              npm install mongodb
            </pre>
            <p className="mt-4 text-lg text-gray-600">Sample usage:</p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('users');
    const result = await collection.insertOne({ name: "Alice", age: 25 });
    console.log("Inserted ID:", result.insertedId);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
              `}
            </pre>
          </div>

          {/* Choosing the Right Driver */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              How to Choose the Right Driver
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose a driver based on the language you're using. Always prefer
              the official drivers provided by MongoDB Inc., as they are
              maintained, documented, and frequently updated to support new
              features.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 list-disc text-lg text-gray-600 pl-6">
              <li>Reuse MongoDB client connections to improve performance.</li>
              <li>Use connection pooling in production environments.</li>
              <li>
                Handle errors gracefully and include retry logic where
                appropriate.
              </li>
              <li>Validate input data before sending it to MongoDB.</li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default Driver;
