"use client";
import React, { useState } from "react";
import {
  Database,
  Server,
  Atom,
  Code,
  Cpu,
  Layers,
  FileText,
  Terminal,
  GitBranch,
  Monitor,
  Layout,
} from "lucide-react"; // import icons

const questionsWithAnswers = [
  {
    question: "What is MongoDB?",
    answer: "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents, allowing for dynamic schema design."
  },
  {
    question: "What is the difference between MongoDB and SQL databases?",
    answer: "MongoDB is a NoSQL database that uses collections and documents, whereas SQL databases are relational and use tables and rows."
  },
  {
    question: "How do you connect to a MongoDB database?",
    answer: "You can connect to MongoDB using the `mongoose.connect()` method with the MongoDB URI."
  },
  {
    question: "What is a MongoDB document?",
    answer: "A MongoDB document is a set of key-value pairs stored in BSON format (binary JSON) within a collection."
  },
  {
    question: "What are collections in MongoDB?",
    answer: "A collection in MongoDB is a group of MongoDB documents. It's equivalent to a table in relational databases."
  },
  {
    question: "How do you perform CRUD operations in MongoDB?",
    answer: "You use methods like `find()`, `insertOne()`, `updateOne()`, and `deleteOne()` to perform CRUD operations."
  },
  {
    question: "What is an ObjectId in MongoDB?",
    answer: "An ObjectId is a unique identifier automatically assigned to documents when they are inserted into a collection."
  },
  {
    question: "How do you index data in MongoDB?",
    answer: "You use `db.collection.createIndex()` to create indexes on fields to improve query performance."
  },
  {
    question: "What is a replica set in MongoDB?",
    answer: "A replica set is a group of MongoDB servers that maintain the same data set, ensuring high availability and redundancy."
  },
  {
    question: "What is sharding in MongoDB?",
    answer: "Sharding is a method used to distribute data across multiple machines, helping scale large databases."
  },
  {
    question: "What is aggregation in MongoDB?",
    answer: "Aggregation in MongoDB is the process of transforming and combining data from multiple documents using aggregation pipelines."
  },
  {
    question: "What is the use of `find()` in MongoDB?",
    answer: "`find()` is used to retrieve documents from a collection that match a specified query."
  },
  {
    question: "How do you update documents in MongoDB?",
    answer: "You use `updateOne()`, `updateMany()`, or `replaceOne()` to update documents in MongoDB."
  },
  {
    question: "What is the `$set` operator in MongoDB?",
    answer: "The `$set` operator is used to update the value of a field in a document."
  },
  {
    question: "How do you delete documents in MongoDB?",
    answer: "You use `deleteOne()` or `deleteMany()` to remove documents from a collection."
  },
  {
    question: "What is the aggregation pipeline in MongoDB?",
    answer: "The aggregation pipeline allows you to process data records and return computed results by using operators like `$match`, `$group`, `$sort`, etc."
  },
  {
    question: "What are MongoDB's data types?",
    answer: "MongoDB supports various data types, including string, integer, Boolean, array, object, and special types like `ObjectId` and `Date`."
  },
  {
    question: "What is a `MongoClient` in MongoDB?",
    answer: "The `MongoClient` is used to establish a connection to a MongoDB server or cluster, allowing you to interact with the database."
  },
  {
    question: "How do you handle transactions in MongoDB?",
    answer: "MongoDB supports multi-document transactions, allowing you to ensure atomicity across multiple operations within a session."
  },
];

const randomIcons = Array.from({ length: 50 }, () => {
  const Icon = [Database, Server, Atom, Code, Cpu, Layers, FileText, Terminal, GitBranch, Monitor, Layout][Math.floor(Math.random() * 11)];
  const top = Math.floor(Math.random() * 100);
  const left = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 40) + 20;
  const opacity = Math.random() * 0.5 + 0.2;
  const rotate = Math.floor(Math.random() * 360);
  return { Icon, top, left, size, opacity, rotate };
});

const QuestionMongo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-white">
      {/* Background Icons */}
      {randomIcons.map(({ Icon, top, left, size, opacity, rotate }, index) => (
        <div
          key={index}
          className="absolute z-0 text-indigo-500"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${rotate}deg)`,
            opacity: opacity,
            fontSize: `${size}px`,
          }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Content Box */}
      <div >
        <h1 className="text-3xl font-bold mb-6 text-center">MongoDB Interview Questions</h1>
        <div className="space-y-4">
          {questionsWithAnswers.map((item, index) => (
            <div key={index} className="border rounded-2xl shadow p-4 transition-all w-[970px]">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left flex justify-between items-center font-medium text-lg"
              >
                {item.question}
                <span className="text-gray-500 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default QuestionMongo;

