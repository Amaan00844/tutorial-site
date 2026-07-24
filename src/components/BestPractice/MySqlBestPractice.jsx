'use client';
import { FiDatabase, FiServer, FiSettings, FiShield } from "react-icons/fi";
import { FaDatabase, FaCog, FaServer, FaLock } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

const mysqlChecklist = [
  {
    title: "Schema & Table Design",
    icon: <FaDatabase className="text-blue-500" size={20} />,
    points: [
      "Use the InnoDB storage engine for most use cases.",
      "Always define a PRIMARY KEY; prefer an AUTO_INCREMENT integer.",
      "Choose appropriate data types (e.g., INT vs BIGINT).",
      "Avoid using ENUM; prefer a lookup/reference table.",
      "Use UNSIGNED for numeric values that can't be negative.",
    ],
  },
  {
    title: "Indexing",
    icon: <FaCog className="text-green-600" size={20} />,
    points: [
      "Create indexes on columns used in WHERE, JOIN, ORDER BY.",
      "Use composite indexes for queries that filter on multiple columns.",
      "Monitor index usage and remove unused indexes.",
    ],
  },
  {
    title: "Query Optimization",
    icon: <FaDatabase className="text-yellow-500" size={20} />,
    points: [
      "Use EXPLAIN to examine query performance.",
      "Avoid SELECT *—query only needed columns.",
      "Use LIMIT and OFFSET for pagination, avoid large offsets.",
    ],
  },
  {
    title: "Transactions & Concurrency",
    icon: <FaServer className="text-purple-600" size={20} />,
    points: [
      "Use transactions for atomic operations.",
      "Use row-level locking (InnoDB) to reduce contention.",
      "Avoid long-running transactions.",
    ],
  },
  {
    title: "Security",
    icon: <FaLock className="text-red-600" size={20} />,
    points: [
      "Never use root for application connections.",
      "Use strong passwords and TLS/SSL for encrypted connections.",
      "Escape or parameterize user inputs to prevent SQL injection.",
    ],
  },
  {
    title: "Backup & Recovery",
    icon: <FaDatabase className="text-blue-500" size={20} />,
    points: [
      "Automate regular backups and test restores regularly.",
      "Use incremental or binary log-based backups for large databases.",
    ],
  },
];

export default function MysqlBestPractices() {
  return (
    <div className="relative bg-white min-h-screen px-4 py-16 sm:px-8 lg:px-20 overflow-hidden">

      {/* ✅ Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FiDatabase className="absolute top-12 left-10 text-blue-100 opacity-20" size={120} />
        <FiServer className="absolute top-1/3 right-12 text-yellow-100 opacity-20 rotate-12" size={120} />
        <FiSettings className="absolute bottom-16 left-1/4 text-purple-100 opacity-20 -rotate-6" size={120} />
        <FiShield className="absolute bottom-24 right-24 text-red-100 opacity-20" size={120} />
      </div>

      {/* ✅ Page Title */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-600 pb-1">
          MySQL Best Practices
        </h1>
      </div>

      {/* ✅ Cards Grid */}
      <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mysqlChecklist.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gray-100">
                {section.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-blue-500 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
