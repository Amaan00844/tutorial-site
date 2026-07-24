'use client';
import { CheckCircle } from "lucide-react"; // Removed ArrowRightCircle
import { useState } from "react";
import { FaDatabase, FaServer, FaShieldAlt, FaSearch, FaCodeBranch, FaCogs } from "react-icons/fa";

export default function SqlbestPractice() {
  const sections = [
    {
      title: "Schema Design",
      items: [
        "Normalize your database to eliminate redundancy (up to 3NF is usually sufficient).",
        "Use appropriate data types (e.g., INT vs VARCHAR).",
        "Define primary keys on every table.",
        "Use foreign keys to enforce referential integrity.",
        "Avoid excessive use of NULLs; prefer default values where applicable."
      ],
      icon: <FaDatabase size={30} className="text-blue-500" />
    },
    {
      title: "Indexing",
      items: [
        "Create indexes on columns used in WHERE, JOIN, ORDER BY, and GROUP BY.",
        "Use composite indexes when filtering by multiple columns together.",
        "Avoid indexing columns with low cardinality (e.g., boolean).",
        "Monitor and remove unused or duplicate indexes."
      ],
      icon: <FaSearch size={30} className="text-green-500" />
    },
    {
      title: "Query Writing",
      items: [
        "Use explicit JOINs (INNER JOIN, LEFT JOIN, etc.) instead of implicit joins.",
        "Avoid SELECT *; specify only the required columns.",
        "Use aliases (AS) to improve readability.",
        "Use parameterized queries to prevent SQL injection.",
        "Be mindful of subqueries—use JOINs or CTEs (WITH) if more efficient."
      ],
      icon: <FaCodeBranch size={30} className="text-orange-500" />
    },
    {
      title: "Performance Optimization",
      items: [
        "Use EXPLAIN or EXPLAIN ANALYZE to understand query plans.",
        "Avoid functions on indexed columns in WHERE clauses (e.g., WHERE LOWER(name) = 'john').",
        "Use LIMIT with pagination and avoid loading large data sets unnecessarily.",
        "Avoid correlated subqueries in large datasets; they can be very slow.",
        "Batch large inserts/updates instead of one massive query."
      ],
      icon: <FaCogs size={30} className="text-purple-500" />
    },
    {
      title: "Security",
      items: [
        "Always use parameterized queries or prepared statements.",
        "Grant users the minimum necessary privileges.",
        "Avoid storing sensitive data (like passwords) in plain text; use hashing and encryption.",
        "Log and monitor query activity, especially DML/DDL commands in production."
      ],
      icon: <FaShieldAlt size={30} className="text-red-500" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10">
          <FaDatabase size={100} className="text-purple-300 rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10">
          <FaServer size={80} className="text-yellow-300 rotate-12" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            Best Practices for SQL
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="flex items-center mb-3">
                <div className="mr-4">{section.icon}</div>
                <h2 className="text-lg font-semibold text-blue-600">{section.title}</h2>
              </div>
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
