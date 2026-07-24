'use client';
import { CheckCircle } from "lucide-react";
import { FaNodeJs, FaDatabase, FaLock, FaBug, FaChartLine, FaNetworkWired } from "react-icons/fa";
export default function PhpBestPractice() {
  const sections = [
    {
      title: "Code Organization",
      items: [
        "Follow PSR standards (e.g., PSR-1, PSR-4)",
        "Use namespaces and autoloading (Composer-based)",
        "Separate logic, views, and configuration"
      ]
    },
    {
      title: "Security",
      items: [
        "Always validate and sanitize user inputs",
        "Use prepared statements to prevent SQL injection",
        "Hash passwords securely using `password_hash()`",
        "Disable `display_errors` in production",
        "Use HTTPS and secure cookies"
      ]
    },
    {
      title: "Performance Optimization",
      items: [
        "Use OPcache to cache compiled bytecode",
        "Avoid using `include`/`require` in loops",
        "Use output buffering when appropriate",
        "Profile code using tools like Xdebug or Blackfire"
      ]
    },
    {
      title: "Error Handling",
      items: [
        "Use try-catch blocks for exception handling",
        "Set custom error and exception handlers",
        "Log errors instead of displaying them to users"
      ]
    },
    {
      title: "Database Interaction",
      items: [
        "Use PDO or ORM (like Eloquent) for DB access",
        "Avoid raw SQL queries when possible",
        "Use transactions where applicable",
        "Handle connection errors gracefully"
      ]
    },
    {
      title: "Testing",
      items: [
        "Write unit tests using PHPUnit",
        "Test core business logic separately",
        "Use mocks/stubs to isolate components"
      ]
    },
    {
      title: "Dependency Management",
      items: [
        "Use Composer for managing libraries",
        "Avoid committing `vendor` directory to version control",
        "Specify exact versions for stability"
      ]
    },
    {
      title: "Documentation & Comments",
      items: [
        "Document functions and classes using PHPDoc",
        "Keep code self-explanatory and clean",
        "Write meaningful commit messages and changelogs"
      ]
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
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
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Best Practices for PHP
      </h1>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-blue-600" size={20} />
              <h3 className="text-lg font-semibold text-blue-700">{section.title}</h3>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
