"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Mongocurd = () => {
  useReadingTracker("curdmongo");
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          MongoDB CRUD Operations Tutorial
        </h1>

        {/* Introduction Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            What are CRUD Operations?
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            CRUD stands for Create, Read, Update, and Delete, which are the four
            basic functions of persistent storage. These operations allow you to
            interact with a database, like MongoDB, to manage your data. Let's
            go over each operation with examples.
          </p>
        </section>

        {/* Create Operation */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            1. Create (Insert)
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            The Create operation allows you to add new documents into a MongoDB
            collection. To perform this, we use the
            <code>insertOne()</code> or <code>insertMany()</code> method.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6">
            Example of Insert One:
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-green-800 text-md font-mono mt-4">
            <pre>{`const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'tutorial';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('users');

  // Insert one document
  collection.insertOne({ name: 'John Doe', age: 29, email: 'john@example.com' }, (err, res) => {
    if (err) throw err;
    console.log('Document inserted:', res.insertedId);
    client.close();
  });
});`}</pre>
          </div>
        </section>

        {/* Read Operation */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            2. Read (Find)
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            The Read operation allows you to retrieve documents from a MongoDB
            collection. You can use the <code>find()</code> method to fetch all
            or specific documents.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6">
            Example of Find:
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-green-800 text-md font-mono mt-4">
            <pre>{`// Find all documents in the users collection
collection.find({}).toArray((err, result) => {
  if (err) throw err;
  console.log('All users:', result);
  client.close();
});

// Find a specific document by name
collection.find({ name: 'John Doe' }).toArray((err, result) => {
  if (err) throw err;
  console.log('Found user:', result);
  client.close();
});`}</pre>
          </div>
        </section>

        {/* Update Operation */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            3. Update
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            The Update operation allows you to modify an existing document in a
            collection. MongoDB provides two methods for updating:
            <code>updateOne()</code> and <code>updateMany()</code>.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6">
            Example of Update One:
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-green-800 text-md font-mono mt-4">
            <pre>{`// Update one document in the users collection
collection.updateOne(
  { name: 'John Doe' },
  { $set: { age: 30 } },
  (err, res) => {
    if (err) throw err;
    console.log('Document updated:', res.modifiedCount);
    client.close();
  }
);`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6">
            Example of Update Many:
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-green-800 text-md font-mono mt-4">
            <pre>{`// Update multiple documents
collection.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: 'Minor' } },
  (err, res) => {
    if (err) throw err;
    console.log('Documents updated:', res.modifiedCount);
    client.close();
  }
);`}</pre>
          </div>
        </section>

        {/* Delete Operation */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            4. Delete
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            The Delete operation allows you to remove documents from a MongoDB
            collection. MongoDB provides two methods for deleting:
            <code>deleteOne()</code> and <code>deleteMany()</code>.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6">
            Example of Delete One:
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-green-800 text-md font-mono mt-4">
            <pre>{`// Delete one document
collection.deleteOne({ name: 'John Doe' }, (err, res) => {
  if (err) throw err;
  console.log('Document deleted:', res.deletedCount);
  client.close();
});`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6">
            Example of Delete Many:
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner text-green-800 text-md font-mono mt-4">
            <pre>{`// Delete multiple documents
collection.deleteMany({ status: 'Minor' }, (err, res) => {
  if (err) throw err;
  console.log('Documents deleted:', res.deletedCount);
  client.close();
});`}</pre>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Conclusion
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            In this tutorial, you’ve learned how to perform CRUD operations with
            MongoDB using Node.js. MongoDB is a powerful NoSQL database, and
            understanding these basic operations is essential for managing your
            data effectively.
          </p>
          <p className="text-lg text-gray-600 leading-8 mt-4">
            For more advanced operations, you can explore aggregation, indexing,
            and other powerful features of MongoDB!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Mongocurd;
