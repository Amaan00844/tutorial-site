'use client';
import {
  Code,
  FileCode,
  Braces,
  Database,
  Globe,
  Server,
} from "lucide-react";
import { FaNodeJs, FaDatabase, FaLock, FaBug, FaChartLine, FaNetworkWired } from "react-icons/fa";

const checklist = {
  "Node.js Best Practices": [
    {
      title: "Code Structure",
      items: [
        "Organize code into modules with clear separation of concerns",
        "Use MVC (Model-View-Controller) pattern where applicable",
        "Avoid deeply nested callbacks (prefer async/await over callback hell)",
      ],
    },
    {
      title: "Error Handling",
      items: [
        "Use try-catch blocks to handle errors in async code",
        "Centralize error handling with middleware (e.g., Express error handler)",
        "Return proper HTTP status codes and messages for errors",
      ],
    },
    {
      title: "Performance Optimization",
      items: [
        "Use clustering to make full use of multi-core systems",
        "Leverage caching (e.g., Redis) to store frequently accessed data",
        "Minimize synchronous code execution in the event loop",
      ],
    },
    {
      title: "Security Best Practices",
      items: [
        "Use environment variables to store sensitive information",
        "Implement HTTPS, secure cookies, and JWT for authentication",
        "Regularly update dependencies and run security audits (e.g., `npm audit`)",
      ],
    },
    {
      title: "Logging & Monitoring",
      items: [
        "Implement structured logging (e.g., using Winston or Bunyan)",
        "Use monitoring tools like Prometheus or New Relic for real-time performance tracking",
        "Set up log rotation to avoid disk space issues",
      ],
    },
    {
      title: "API Design",
      items: [
        "Follow RESTful principles for APIs",
        "Use proper status codes and messages for API responses",
        "Version your API endpoints to ensure backward compatibility",
      ],
    },
    {
      title: "Database Interaction",
      items: [
        "Use an ORM (e.g., Sequelize) or query builder (e.g., Knex.js) for DB interaction",
        "Avoid SQL injection by using parameterized queries or ORM methods",
        "Ensure proper database connection pooling",
      ],
    },
    {
      title: "Testing",
      items: [
        "Write unit and integration tests (Jest, Mocha)",
        "Test asynchronous code with mock/stub and promises",
        "Use a test coverage tool (e.g., Istanbul) to ensure full test coverage",
      ],
    },
  ],
};

export default function NodeJsBestPractice() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10">
          <FaNodeJs size={80} className="text-green-300 rotate-12" />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <FaDatabase size={70} className="text-purple-200" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <FaChartLine size={80} className="text-blue-200 -rotate-6" />
        </div>
        <div className="absolute bottom-10 right-10">
          <FaBug size={70} className="text-red-200 rotate-12" />
        </div>
        <div className="absolute top-20 right-36">
          <FaLock size={80} className="text-yellow-200 -rotate-12" />
        </div>
        <div className="absolute bottom-24 left-28">
          <FaNetworkWired size={75} className="text-teal-200 rotate-6" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-green-500 pb-1">
            Node.js Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist["Node.js Best Practices"].map((section, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <h2 className="text-lg font-semibold text-green-600 mb-3 border-b pb-1">
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
