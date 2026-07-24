"use client";

import { useRouter } from "next/navigation";
import {
  Bookmark,
  Code2,
  Server,
  Database,
  Braces,
  Globe,
  CircleUser,
  Cpu,
  CodeSquare,
  FileCode,
  Cloud,
  Terminal,
  LayoutTemplate,
} from "lucide-react";

const topicRoutes = {
  Html: "/bestpracticeHtml",
  Css: "/bestpracticeCss",
  Javascript: "/bestpracticeJavascript",
  React: "/bestpracticeReact",
  Nodejs: "/bestpracticeNodejs",
  PHP: "/bestpracticePhp",
  Python: "/bestpracticePython",
  Express: "/bestpracticeExpress",
  MongoDB: "/bestpracticeMongo",
  Java: "/bestpracticeJava",
  Sql: "/bestpracticeSql",
  MySql: "/bestpracticeMySql",
  Nextjs: "/bestpracticeNextjs",
};

const topicIcons = {
  Html: Globe,
  Css: LayoutTemplate,
  Javascript: Code2,
  React: Braces,
  Nodejs: Server,
  PHP: CodeSquare,
  Python: Cpu,
  Express: Cloud,
  MongoDB: Database,
  Java: FileCode,
  Sql: Database,
  MySql: Database,
  Nextjs: Terminal,
};

export default function BestPractices() {
  const router = useRouter();

  const handleClick = (topic) => {
    const route = topicRoutes[topic];
    if (route) {
      router.push(route);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f9ff] to-[#e0f2fe] text-black">
      {/* Header Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md border border-blue-200 rounded-xl p-6 shadow-md text-center">
          <h1 className="text-3xl font-bold text-blue-700">Best Practices </h1>
          <p className="text-gray-600 mt-2">Explore tips & patterns for each technology stack</p>
        </div>
      </div>

      {/* Grid Section */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(topicRoutes).map(([topic, route], index) => {
            const Icon = topicIcons[topic] || Bookmark;
            return (
              <div
                key={index}
                onClick={() => handleClick(topic)}
                className="group cursor-pointer p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md shadow hover:shadow-xl hover:border-blue-500 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">{topic}</h2>
                  <Bookmark className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
                </div>
                <Icon className="w-10 h-10 text-blue-500 mb-3" />
                <p className="text-sm text-gray-500 group-hover:text-blue-600">
                  Master performance, readability & scalability in {topic}.
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}