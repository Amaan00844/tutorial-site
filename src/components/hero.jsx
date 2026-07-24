'use client';
import { useState } from "react";
import { FaSearch, FaReact, FaServer, FaCode } from 'react-icons/fa';
import { useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [query, setQuery] = useState("");
  const [suggestions] = useState([
    { name: "HTML", link: "/firstHtml" },
    { name: "CSS", link: "/Csscard" },
    { name: "JavaScript", link: "/javascript" },
    { name: "React", link: "/react" },
    { name: "Node.js", link: "/CardNode" },
    { name: "PHP", link: "/php" },
    { name: "Python", link: "/firstPython" },
    { name: "Express", link: "/express" },
    { name: "Mongodb", link: "/firstmongo" },
    { name: "Java", link: "/firstJava" }
  ]);

  const filteredSuggestions = suggestions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const [text] = useTypewriter({
    words: ['HTML,CSS,JavaScript,React,Node.js,Python,PHP'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <section className="relative text-center py-30 px-4 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
          src="/home-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Text & Search */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-200">
            Learn to Code
          </h1>
          <p className="text-lg md:text-xl text-yellow-500 mb-8">
            With the world's largest web developer site.
          </p>

          {/* Search Box */}
          <div className="mt-8 flex justify-center max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder={`Search our tutorials, e.g. ${text}`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-l-md text-gray-200 text-sm border-2 border-gray-300 pl-10 focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <FaSearch />
            </span>

            {/* Dropdown */}
            {query && filteredSuggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-13 bg-white border-2 border-gray-300 rounded-md shadow-lg z-50">
                {filteredSuggestions.map((suggestion, index) => (
                  <li key={index} className="px-6 py-2 text-gray-800">
                    <a
                      href={suggestion.link}
                      className="block cursor-pointer hover:bg-gray-200 px-4 py-2"
                    >
                      {suggestion.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* 💡 Card Section OUTSIDE the section tag */}
      <div className="w-full flex justify-center px-4 mt-10 min-h-[200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-6 text-left hover:scale-105 transition transform duration-300">
            <div className="flex items-center mb-4">
              <FaReact className="w-6 h-6 text-gray-800 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Frontend Basics</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Learn HTML, CSS, and JavaScript to build interactive websites from scratch.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-6 text-left hover:scale-105 transition transform duration-300">
            <div className="flex items-center mb-4">
              <FaServer className="w-6 h-6 text-gray-800 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Backend Development</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Dive into Node.js, Express, and databases to handle server-side logic.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 rounded-xl shadow-lg p-6 text-left hover:scale-105 transition transform duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="w-6 h-6 text-gray-800 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Full Stack Projects</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Combine frontend and backend skills to create real-world applications.
            </p>
          </div>
        </div>
      </div>


    </>
  );
}
