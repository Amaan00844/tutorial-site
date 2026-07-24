"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Basicmongo = () => {
  useReadingTracker("basicmongo");

  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">
          Basic MongoDB Operations
        </h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          <strong>MongoDB</strong> ek <strong>NoSQL (non-relational)</strong>{" "}
          database hai jo data ko JSON-like <strong>documents</strong> ke form
          mein store karta hai. Yeh flexible aur scalable database system hota
          hai, jisme aapko table aur row ka concept nahi milta — balki{" "}
          <strong>collections</strong> aur <strong>documents</strong> ka use
          hota hai.
        </p>

        {/* What is a Document? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is a Document?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            MongoDB mein data <strong>document</strong> ke form mein store hota
            hai. Document ek <strong>key-value pair</strong> hota hai, jo JSON
            format jaise dikhta hai, lekin internally yeh BSON (Binary JSON)
            format mein hota hai.
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`{
  name: "Alice",
  age: 25,
  email: "alice@example.com"
}`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            Upar diya gaya example ek single document ka hai jisme teen fields
            (name, age, email) store hain.
          </p>
        </div>

        {/* What is a Collection? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is a Collection?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Collection MongoDB ka ek logical grouping hota hai documents ka. Ye
            ek <strong>table</strong> jaise kaam karta hai (relational database
            ke comparison mein).
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Example: Agar aapke paas 100 users hain, toh sabhi users ke
            documents ko aap <strong>users</strong> collection mein store
            karenge.
          </p>
        </div>

        {/* What is a Database? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is a Database?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Database multiple collections ka set hota hai. MongoDB mein aap har
            application ke liye alag database bana sakte hain.
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`use myDatabase`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            Agar <strong>myDatabase</strong> naam ka database exist nahi karta,
            toh MongoDB ise create kar lega.
          </p>
        </div>

        {/* Connecting to MongoDB */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Connecting to MongoDB
          </h2>
          <p className="mt-4 text-lg text-gray-600">Terminal mein likhe:</p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">mongo</pre>
          <p className="mt-4 text-lg text-gray-600">
            Is command se aap MongoDB server (localhost:27017) se connect ho
            jaoge.
          </p>
        </div>

        {/* CRUD Operations in MongoDB */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            CRUD Operations in MongoDB
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            MongoDB mein aap CRUD operations perform kar sakte ho —{" "}
            <strong>Create</strong>, <strong>Read</strong>,{" "}
            <strong>Update</strong>, <strong>Delete</strong>.
          </p>
        </div>

        {/* CREATE */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">1. Create</h3>
          <p className="mt-2 text-lg text-gray-600">
            Single document insert karne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.insertOne({ name: "Aman", age: 22 })`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Multiple documents insert karne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.insertMany([
  { name: "Raj", age: 30 },
  { name: "Neha", age: 27 }
])`}
          </pre>
        </div>

        {/* READ */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">2. Read</h3>
          <p className="mt-2 text-lg text-gray-600">
            Sabhi documents dekhne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.find()`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">Filter ke sath:</p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.find({ age: { $gt: 25 } })`}
          </pre>
        </div>

        {/* UPDATE */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">3. Update</h3>
          <p className="mt-2 text-lg text-gray-600">
            Single document update karne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.updateOne(
  { name: "Aman" },
  { $set: { age: 24 } }
)`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Multiple documents update karne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "active" } }
)`}
          </pre>
        </div>

        {/* DELETE */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">4. Delete</h3>
          <p className="mt-2 text-lg text-gray-600">
            Single document delete karne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.deleteOne({ name: "Raj" })`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Multiple documents delete karne ke liye:
          </p>
          <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
            {`db.users.deleteMany({ age: { $gt: 30 } })`}
          </pre>
        </div>

        {/* Conclusion */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
          <p className="mt-4 text-lg text-gray-600">
            MongoDB ek document-based NoSQL database hai jo JSON jaise structure
            mein data ko store karta hai. Aap
            <strong> CRUD </strong> operations se data insert, read, update aur
            delete kar sakte ho. Collection aur document ke concept ko samajhna
            MongoDB ke liye sabse zaroori hota hai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basicmongo;
