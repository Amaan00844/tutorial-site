'use client';
import { FaJava } from "react-icons/fa";
import { FileCode, Braces, Server, CheckCircle } from "lucide-react";

const checklist = {
  "Java Best Practices": [
    {
      title: "Code Structure",
      items: [
        "Follow proper naming conventions (CamelCase for classes, camelCase for variables/methods)",
        "Keep classes focused on a single responsibility (SRP)",
        "Group related classes into packages"
      ],
    },
    {
      title: "OOP Principles",
      items: [
        "Encapsulate fields with private access and provide getters/setters",
        "Use inheritance and interfaces appropriately",
        "Favor composition over inheritance"
      ],
    },
    {
      title: "Exception Handling",
      items: [
        "Catch specific exceptions, not generic ones",
        "Avoid swallowing exceptions silently",
        "Use custom exceptions where necessary",
        "Log exceptions meaningfully"
      ],
    },
    {
      title: "Memory Management",
      items: [
        "Avoid memory leaks by releasing resources (e.g., streams, connections)",
        "Use try-with-resources for auto-closing",
        "Monitor memory usage with profiling tools"
      ],
    },
    {
      title: "Code Quality",
      items: [
        "Write unit tests using JUnit or TestNG",
        "Use static analysis tools like SonarLint",
        "Avoid code duplication",
        "Keep methods short and focused"
      ],
    },
    {
      title: "Performance",
      items: [
        "Use StringBuilder for string concatenation in loops",
        "Prefer ArrayList over LinkedList for faster random access",
        "Optimize database access (use connection pools, prepared statements)"
      ],
    },
    {
      title: "Concurrency",
      items: [
        "Avoid shared mutable state",
        "Use synchronization or concurrent collections when needed",
        "Prefer ExecutorService over manual thread management"
      ],
    },
    {
      title: "Security",
      items: [
        "Validate all user inputs",
        "Hash and salt passwords using secure algorithms",
        "Avoid exposing sensitive information in logs or error messages",
        "Keep dependencies and libraries up to date"
      ],
    }
  ],
};

export default function JavaBestPractice() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-24 left-10">
          <FaJava size={70} className="text-red-300" />
        </div>
        <div className="absolute top-10 left-32">
          <FileCode size={100} className="text-blue-100 rotate-12 z-34" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <Braces size={100} className="text-green-200 -rotate-6 z-34" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Server size={100} className="text-yellow-100 rotate-6 z-34" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            Java Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist["Java Best Practices"].map((section, index) => (
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
