'use client';
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  FileCode,
  Braces,
  Database,
  Globe,
  Server,
  Code,
} from "lucide-react";

const checklist = {
  "React Best Practices": [
    {
      title: "Component Design",
      items: [
        "Keep components small and focused (Single Responsibility Principle)",
        "Use functional components and hooks instead of class components",
        "Break complex UI into reusable components"
      ]
    },
    {
      title: "Hooks Usage",
      items: [
        "Use built-in hooks like useState, useEffect, useMemo appropriately",
        "Avoid unnecessary re-renders by using useCallback and useMemo",
        "Follow rules of hooks (only call hooks at the top level)"
      ]
    },
    {
      title: "State Management",
      items: [
        "Lift state up when necessary",
        "Use context for global/shared state (or use libraries like Redux, Zustand)",
        "Keep local component state minimal and manageable"
      ]
    },
    {
      title: "Performance Optimization",
      items: [
        "Use React.memo to prevent unnecessary renders",
        "Lazy load components using React.lazy and Suspense",
        "Paginate or virtualize long lists to improve performance"
      ]
    },
    {
      title: "File & Folder Structure",
      items: [
        "Organize by feature or domain, not type",
        "Use clear and consistent naming conventions",
        "Keep styles, tests, and components close together"
      ]
    },
    {
      title: "Code Quality",
      items: [
        "Use TypeScript or PropTypes for type checking",
        "Write unit and integration tests (Jest, React Testing Library)",
        "Lint your code (ESLint, Prettier)",
        "Avoid deeply nested JSX and inline styles"
      ]
    },
    {
      title: "API & Data Fetching",
      items: [
        "Use SWR/React Query for data fetching & caching",
        "Handle loading and error states gracefully",
        "Avoid excessive API calls in useEffect"
      ]
    },
    {
      title: "Security & Accessibility",
      items: [
        "Avoid direct DOM manipulation (use refs if necessary)",
        "Use semantic HTML and ARIA attributes for accessibility",
        "Escape user input to prevent XSS attacks",
        "Use HTTPS and environment variables for secrets"
      ]
    }
  ]
};

export default function ReactBestPractice() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-60 left-10">
          <FaReact size={70} className="text-blue-200" />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <FaJs size={69} className="text-yellow-300" />
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            React Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist["React Best Practices"].map((section, index) => (
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

