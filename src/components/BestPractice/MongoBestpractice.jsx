'use client';
import { Database } from "lucide-react"; // Correctly import the Database icon
import { FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { useState } from "react";

export default function MongoDbBestPractices() {
  const checklist = {
    "MongoDB Best Practices": [
      {
        title: "Schema Design",
        items: [
          "Design your schema based on how the data will be queried, not just how it's structured.",
          "Use embedded documents for data that is accessed together (denormalization).",
          "Use references for large or separate data that is updated independently (normalization).",
          "Avoid deeply nested documents; keep nesting shallow for easier querying and updates.",
          "Use schema validation (e.g., via Mongoose or MongoDB's native JSON schema validation)."
        ],
      },
      {
        title: "Indexing",
        items: [
          "Create indexes on fields used frequently in queries, sorting, or filtering.",
          "Use compound indexes when multiple fields are queried together.",
          "Avoid over-indexing; unnecessary indexes slow down writes and use more memory.",
          "Monitor index usage with db.collection.getIndexes() and explain()."
        ],
      },
      {
        title: "Performance",
        items: [
          "Use projection to retrieve only necessary fields (find({}, { field1: 1, field2: 1 })).",
          "Use pagination techniques like limit/skip or cursor-based pagination (for large datasets).",
          "Avoid using $where or JavaScript in queries—they are slow and a security risk.",
          "Use aggregation pipelines efficiently; break them into stages and use $match early."
        ],
      },
      {
        title: "Data Integrity & Validation",
        items: [
          "Use Mongoose or similar ODMs for schema enforcement and validation in application code.",
          "Use MongoDB's built-in schema validation ($jsonSchema) for server-side data protection.",
          "Avoid storing inconsistent or polymorphic data unless necessary."
        ],
      },
      {
        title: "Security",
        items: [
          "Enable authentication and authorization with Role-Based Access Control (RBAC).",
          "Limit access using the principle of least privilege (only required permissions).",
          "Use encrypted connections (TLS/SSL) for all communication.",
          "Do not expose the database to the internet directly.",
          "Regularly update MongoDB to patch security vulnerabilities."
        ],
      },
      {
        title: "Deployment & Operations",
        items: [
          "Use replica sets for high availability and automatic failover.",
          "Use sharding for horizontal scalability with large datasets.",
          "Backup data regularly using mongodump, mongorestore, or cloud-based backups.",
          "Monitor with MongoDB Atlas or tools like mongotop, mongostat, or Prometheus."
        ],
      },
      {
        title: "Transactions",
        items: [
          "Use transactions for multi-document operations in ACID-compliant needs.",
          "Keep transactions short to avoid blocking resources.",
          "Prefer single-document operations where possible, as they are atomic by default."
        ],
      },
      {
        title: "Logging & Auditing",
        items: [
          "Enable MongoDB's audit log for sensitive environments.",
          "Monitor slow queries using the slowOpThresholdMs setting.",
          "Analyze performance with the system.profile collection or Atlas performance advisor."
        ],
      },
      {
        title: "Coding Best Practices",
        items: [
          "Always handle connection errors and retry logic in application code.",
          "Reuse MongoDB client connections instead of creating new ones per request.",
          "Use async/await or Promises for all DB operations to avoid callback hell.",
          "Close connections gracefully during app shutdown."
        ],
      },
    ]
  };

  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <div className="absolute top-10 left-10">
          <Database size={100} className="text-purple-200 rotate-12 z-50" />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <FaPython size={69} className="text-yellow-100 " />
        </div>

        <div className="absolute top-60 left-10">
          <FaJs size={70} className="text-yellow-100" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            MongoDB Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist["MongoDB Best Practices"].map((section, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b pb-1">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
