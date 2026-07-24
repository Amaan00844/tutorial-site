

'use client';
import { Code, FileCode, Braces, Database, Globe, Server } from "lucide-react"; // You can choose any relevant icons
import { FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";

const checklist = {
  "JavaScript Best Practices": [
    {
      title: "JS: Code Quality & Style",
      items: [
        "Use `let` and `const` instead of `var` (prefer `const` for variables that don't change)",
        "Follow consistent naming conventions (camelCase for variables/functions, PascalCase for classes)",
        "Use meaningful variable and function names"
      ]
    },
    {
      title: "JS: Maintainability",
      items: [
        "Keep functions small and focused — each should do one thing",
        "Write DRY code (Don't Repeat Yourself) — extract and reuse common logic",
        "Use comments wisely — explain 'why' not 'what' when unclear",
        "Use ESLint or Prettier to enforce style and automatically catch issues",
        "Avoid deep nesting — refactor with early returns or separate functions"
      ]
    },
    {
      title: "JS: Performance",
      items: [
        "Debounce or throttle heavy DOM/event listeners",
        "Prefer async/await over callbacks or `.then()` chains for clarity",
        "Minimize reflows and repaints in the DOM",
        "Cache DOM queries and reused values"
      ]
    },
    {
      title: "JS: Security",
      items: [
        "Never trust user input — always sanitize and validate",
        "Avoid using `eval()` or `Function()` as they can execute malicious code",
        "Deploy with HTTPS and secure HTTP headers",
        "Escape user-generated content to prevent XSS",
        "Use Content Security Policy (CSP) headers"
      ]
    },
    {
      title: "JS: Testing",
      items: [
        "Write unit tests using tools like Jest, Mocha, or Vitest",
        "Test edge cases and ensure robust error handling",
        "Write integration and end-to-end tests if possible",
        "Use mocking and spies to isolate unit logic"
      ]
    },
    {
      title: "JS: Modern Features & Tooling",
      items: [
        "Use ES6+ features like arrow functions, destructuring, and template literals",
        "Modularize code with `import`/`export` to keep it maintainable",
        "Use a bundler/build tool like Webpack, Vite, or Rollup for production readiness",
        "Take advantage of tools like Babel or TypeScript for compatibility and type safety"
      ]
    },
    {
      title: "JS: Error Handling",
      items: [
        "Use `try...catch` blocks to handle unexpected runtime errors",
        "Gracefully handle rejected promises with `.catch()` or `try/catch` in async functions",
        "Log useful error messages for debugging",
        "Fail fast — check for invalid data early"
      ]
    },
    {
      title: "JS: Readability",
      items: [
        "Use consistent indentation (2 or 4 spaces)",
        "Keep lines of code reasonably short (ideally under 80-100 characters)",
        "Separate code blocks with blank lines for clarity",
        "Avoid magic numbers — use named constants instead"
      ]
    },
    {
      title: "JS: Accessibility (for frontend JS)",
      items: [
        "Ensure interactive elements (buttons, links) are keyboard accessible",
        "Use ARIA roles when appropriate to enhance screen reader support",
        "Avoid setting `tabindex` > 0 unless necessary",
        "Use semantic HTML whenever possible"
      ]
    }
  ]
};

export default function JavaScriptBestPractices() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-60 left-10">
          <FaJs size={70} className="text-yellow-400" />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <FaPython size={69} className="text-yellow-300" />
        </div>
        <div className="absolute top-10 left-10">
          <FileCode size={100} className="text-blue-100 rotate-12 z-34" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <Braces size={100} className="text-green-200 -rotate-6 z-34" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Database size={100} className="text-purple-200 rotate-12 z-34" />
        </div>
        <div className="absolute top-20 right-43 z-54">
          <Globe size={100} className="text-pink-200 -rotate-12 z-34" />
        </div>
        <div className="absolute bottom-23 left-34">
          <Server size={100} className="text-yellow-100 rotate-6 z-34" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            JavaScript Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist["JavaScript Best Practices"].map((section, index) => (
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
