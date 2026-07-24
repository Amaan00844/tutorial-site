"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Database,
  Server,
  Atom,
  Code,
  Cpu,
  Layers,
  FileText,
  Terminal,
  GitBranch,
  Monitor,
  Layout,
} from "lucide-react";

// Feature data
const features = [
  {
    id: "01",
    title: "Mongodb",
    description: "Master NoSQL database concepts and document-based storage with MongoDB.",
    icon: Database,
    comingSoon: false,
  },
  {
    id: "02",
    title: "Express",
    description: "Build robust backend applications using Express.js framework.",
    icon: Server,
    comingSoon: false,
  },
  {
    id: "03",
    title: "React",
    description: "Create interactive user interfaces with React component architecture.",
    icon: Atom,
    comingSoon: false,
  },
  {
    id: "04",
    title: "Node js",
    description: "Develop scalable server-side applications with Node.js runtime.",
    icon: Code,
    comingSoon: false,
  },
  {
    id: "05",
    title: "Python",
    description: "Learn versatile Python programming for various applications.",
    icon: Cpu,  // Using Cpu as Python icon alternative
    comingSoon: true,
  },
  {
    id: "06",
    title: "Java",
    description: "Build enterprise-level applications with Java programming.",
    icon: Layers,  // Using Layers as Java icon alternative
    comingSoon: true,
  },
  {
    id: "07",
    title: "Sql",
    description: "Master relational database management with SQL queries.",
    icon: FileText,  // Using FileText as SQL icon alternative
    comingSoon: true,
  },
  {
    id: "08",
    title: "C++",
    description: "Develop high-performance applications with C++ programming.",
    icon: Terminal,  // Using Terminal as C++ icon alternative
    comingSoon: true,
  },
];

// Random background icons generation
const randomIcons = Array.from({ length: 60 }, () => {
  let top, left;
  do {
    top = Math.floor(Math.random() * 100);
    left = Math.floor(Math.random() * 100);
  } while (top > 30 && top < 70 && left > 25 && left < 75);

  const Icon = [
    Database,
    Server,
    Atom,
    Code,
    Cpu,
    Layers,
    FileText,
    Terminal,
    GitBranch,
    Monitor,
    Layout,
  ][Math.floor(Math.random() * 11)];

  const size = Math.floor(Math.random() * 40) + 20;
  const opacity = Math.random() * 0.5 + 0.3;
  const rotate = Math.floor(Math.random() * 360);
  return { Icon, top, left, size, opacity, rotate };
});

const Exercise = () => {
  const router = useRouter();

  const handleCardClick = (title, comingSoon) => {
    if (comingSoon) return;
    const cleanedTitle = title.toLowerCase().replace(/\s+/g, "");
    router.push(`/question${cleanedTitle}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-white">
      {/* Background Icons */}
      {randomIcons.map(({ Icon, top, left, size, opacity, rotate }, index) => (
        <div
          key={index}
          className="absolute z-0 text-gray-300"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${rotate}deg)`,
            opacity: opacity,
            fontSize: `${size}px`,
          }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Cards */}
      <div className="relative z-10 flex flex-row flex-wrap gap-6 justify-center">
        {features.map((feature) => {
          const { id, title, description, icon: Icon, comingSoon } = feature;
          return (
            <div
              key={id}
              onClick={() => handleCardClick(title, comingSoon)}
              className="relative w-64 h-72 bg-white bg-opacity-80 p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 shadow-lg group hover:bg-blue-600"
            >
              {/* Card Content */}
              <div className="flex flex-col items-center justify-center text-center h-full z-10 relative pt-2">
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mb-2 mt-[-8px] group-hover:bg-blue-500">
                  <Icon className="text-indigo-600 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">{title}</h3>
                <p className="text-gray-700 text-sm mt-2 px-2 group-hover:text-white">{description}</p>
                {comingSoon ? (
                  <button className="mt-4 text-sm font-semibold text-indigo-600 group-hover:text-white cursor-default">
                    Coming Soon....
                  </button>
                ) : (
                  <button className="mt-4 text-sm font-semibold text-indigo-600 group-hover:text-white hover:underline">
                    Learn more →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise;