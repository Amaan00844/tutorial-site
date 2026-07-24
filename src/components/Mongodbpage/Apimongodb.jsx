"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Apimongodb = () => {
  useReadingTracker("apimongodb");

  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">MongoDB API</h1>

          {/* Introduction Section */}
          <p className="mt-4 text-lg text-gray-600">
            MongoDB provides a rich set of APIs for interacting with your
            database. You can use these APIs to manage data, perform CRUD
            operations, and more. The MongoDB API is typically used with the
            MongoDB Atlas service or a locally deployed MongoDB server.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            MongoDB allows for the use of various drivers in different
            programming languages like Node.js, Python, Java, Go, etc. Here,
            we'll focus on using the MongoDB API with Node.js and JavaScript.
          </p>

          {/* MongoDB API Basics Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              MongoDB API Basics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The MongoDB API follows a client-server model where the client
              sends requests, and the server performs the necessary operations
              on the database. The server responds with the results, which are
              typically in JSON format.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Common operations include:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Create</strong> - Insert documents into a collection.
              </li>
              <li>
                <strong>Read</strong> - Query documents from a collection.
              </li>
              <li>
                <strong>Update</strong> - Modify existing documents.
              </li>
              <li>
                <strong>Delete</strong> - Remove documents from a collection.
              </li>
            </ul>
          </div>

          {/* MongoDB CRUD Operations Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              CRUD Operations with MongoDB API
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The core functionality in MongoDB revolves around CRUD operations.
              Let’s break down each of these operations:
            </p>

            {/* Create Operation */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                1. Create (Insert Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                The <code>insertOne()</code> and <code>insertMany()</code>{" "}
                methods are used to add documents to MongoDB collections. Here’s
                an example of inserting a single document:
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").insertOne({
  title: "MongoDB and Node.js",
  body: "How to use MongoDB with Node.js",
  date: new Date(),
});
                `}
              </pre>
            </div>

            {/* Read Operation */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                2. Read (Query Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                MongoDB allows you to query for documents using the{" "}
                <code>find()</code> method. You can also use filtering and
                projections to retrieve specific data:
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").find({ category: "News" }).toArray();
                `}
              </pre>
              <p className="mt-4 text-lg text-gray-600">
                This query returns all documents in the "posts" collection where
                the category is "News".
              </p>
            </div>

            {/* Update Operation */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                3. Update (Modify Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                To update an existing document, you can use the{" "}
                <code>updateOne()</code> or <code>updateMany()</code>
                methods:
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").updateOne(
  { title: "MongoDB and Node.js" },
  { $set: { body: "Updated content for MongoDB with Node.js tutorial." } }
);
                `}
              </pre>
            </div>

            {/* Delete Operation */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                4. Delete (Remove Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                To delete a document, use the <code>deleteOne()</code> or{" "}
                <code>deleteMany()</code> methods:
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").deleteOne({ title: "MongoDB and Node.js" });
                `}
              </pre>
            </div>
          </div>

          {/* MongoDB API Authentication Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              MongoDB API Authentication
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB supports several authentication mechanisms to secure
              database access. Some common methods include:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Username and Password:</strong> You can authenticate
                using a combination of username and password.
              </li>
              <li>
                <strong>SCRAM-SHA-1 and SCRAM-SHA-256:</strong> MongoDB’s
                default authentication mechanism based on the SCRAM protocol.
              </li>
              <li>
                <strong>X.509 Certificates:</strong> Used for SSL/TLS
                authentication in MongoDB clusters.
              </li>
            </ul>
          </div>

          {/* MongoDB API Security Best Practices Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              MongoDB API Security Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              When using the MongoDB API, it's important to follow security best
              practices to ensure the safety and integrity of your data:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Enable Authentication:</strong> Always ensure
                authentication is enabled for your MongoDB instance.
              </li>
              <li>
                <strong>Use Role-Based Access Control (RBAC):</strong> Limit
                user privileges based on their role.
              </li>
              <li>
                <strong>Use SSL/TLS:</strong> Secure the communication between
                clients and servers using SSL/TLS encryption.
              </li>
              <li>
                <strong>Restrict IP Access:</strong> Only allow trusted IP
                addresses to access your MongoDB server.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default Apimongodb;
