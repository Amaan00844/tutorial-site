'use client';

import {
  FaPython,
  FaDatabase,
  FaCode,
  FaBug,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";
import { CheckCircle, Server, Braces } from "lucide-react";

const pythonChecklist = {
  "Python Best Practices": [
    {
      title: "Code Structure",
      items: [
        "Use meaningful names for variables, functions, and classes",
        "Keep functions small and focused",
        "Organize code using modules and packages",
      ],
    },
    {
      title: "Readability & Style",
      items: [
        "Follow PEP 8 styling guidelines",
        "Use consistent indentation (preferably 4 spaces)",
        "Avoid deep nesting for better readability",
      ],
    },
    {
      title: "Error Handling",
      items: [
        "Use try/except blocks to handle exceptions",
        "Catch specific exceptions rather than using a bare except",
        "Log errors for debugging and monitoring",
      ],
    },
    {
      title: "Performance",
      items: [
        "Use list comprehensions instead of loops where appropriate",
        "Avoid unnecessary computations in loops",
        "Use generators for large datasets",
      ],
    },
    {
      title: "Testing",
      items: [
        "Write unit tests using `unittest` or `pytest`",
        "Use mocks to test code in isolation",
        "Automate tests with CI tools",
      ],
    },
    {
      title: "Security",
      items: [
        "Sanitize user inputs to prevent injection attacks",
        "Keep dependencies updated",
        "Avoid hardcoding sensitive credentials",
      ],
    },
    {
      title: "Environment Management",
      items: [
        "Use virtual environments (`venv` or `virtualenv`)",
        "Manage dependencies with `requirements.txt` or `Pipfile`",
        "Isolate project environments to avoid version conflicts",
      ],
    },
    {
      title: "Documentation",
      items: [
        "Use docstrings for functions and classes",
        "Write README files for projects",
        "Comment on complex logic to help future developers",
      ],
    },
  ],
};

export default function PythonBestPractice() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-24 left-8">
          <FaPython size={70} className="text-blue-300" />
        </div>
        <div className="absolute bottom-1/3 right-14">
          <FaDatabase size={80} className="text-purple-200 rotate-12" />
        </div>
        <div className="absolute top-12 right-12">
          <FaCode size={70} className="text-blue-100 rotate-6" />
        </div>
        <div className="absolute bottom-20 left-16">
          <FaBug size={60} className="text-red-200 -rotate-12" />
        </div>
        <div className="absolute top-32 right-40">
          <FaShieldAlt size={65} className="text-green-200" />
        </div>
        <div className="absolute bottom-32 right-32">
          <FaFileAlt size={60} className="text-pink-200" />
        </div>
        <div className="absolute bottom-10 left-40">
          <Braces size={80} className="text-blue-200 rotate-6" />
        </div>
        <div className="absolute top-10 left-1/2">
          <Server size={70} className="text-orange-200 -rotate-12" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            Python Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pythonChecklist["Python Best Practices"].map((section, index) => (
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
