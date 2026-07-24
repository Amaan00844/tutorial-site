"use client";
import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { useRouter } from 'next/navigation';

export default function Exercises() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const exercises = [
    {
      title: "HTML",
      description: "Build responsive web layouts and master semantic HTML5 elements through hands-on exercises.",
      url: "/exercises/html",
      icon: "🌐",
    },
    {
      title: "CSS",
      description: "Style web pages with modern CSS techniques, including Flexbox, Grid, and animations.",
      url: "/exercises/css",
      icon: "🎨",
    },
    {
      title: "JavaScript",
      description: "Create interactive features using vanilla JavaScript, DOM manipulation, and ES6+ syntax.",
      url: "/exercises/javascript",
      icon: "⚡",
    },
    {
      title: "React",
      description: "Develop dynamic user interfaces with React components, hooks, and state management.",
      url: "/exercises/react",
      icon: "⚛️",
    },
    {
      title: "Node.js",
      description: "Build RESTful APIs and server-side applications using Node.js and Express framework.",
      url: "/exercises/nodejs",
      icon: "🖥️",
    },
    {
      title: "MongoDB",
      description: "Design and query NoSQL databases with MongoDB for scalable data storage.",
      url: "/exercises/mongodb",
      icon: "🍃",
    },
    {
      title: "Next.js",
      description: "Create server-rendered React apps with Next.js, focusing on routing and optimization.",
      url: "/exercises/nextjs",
      icon: "🚀",
    },
    {
      title: "MySQL",
      description: "Master relational database management with MySQL, including schema design and queries.",
      url: "/exercises/mysql",
      icon: "🗄️",
    },
    {
      title: "SQL",
      description: "Write complex SQL queries for data manipulation and analysis in relational databases.",
      url: "/exercises/sql",
      icon: "📊",
    },
  ];

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <div className={`relative min-h-screen p-4 sm:p-8 overflow-hidden transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900'
    }`}>
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-5xl sm:text-6xl">📚</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold animate-fade-in">
              Practical Exercises
            </h1>
          </div>
          
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } text-white shadow-md`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </header>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {exercises.map((exercise, index) => (
            <Tilt
              key={exercise.title}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              scale={1.02}
              transitionSpeed={1500}
            >
              <div
                className={`h-full p-6 rounded-2xl shadow-lg border transition-all backdrop-blur-lg cursor-pointer hover:shadow-xl ${
                  isDarkMode
                    ? index % 2 === 0
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                      : 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70'
                    : index % 2 === 0
                      ? 'bg-white/70 border-blue-200 hover:bg-white/90'
                      : 'bg-blue-50/50 border-blue-100 hover:bg-blue-50/70'
                }`}
                role="button"
                tabIndex={0}
                onClick={() => handleRedirect(exercise.url)}
                onKeyDown={(e) => e.key === 'Enter' && handleRedirect(exercise.url)}
                aria-label={`Start ${exercise.title} exercise`}
                style={{ '--index': index }}
              >
                <div className="flex flex-col h-full gap-4">
                  <div className={`text-4xl sm:text-5xl ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {exercise.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-xl sm:text-2xl font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {exercise.title}
                    </h2>
                    <p className={`text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exercise.description}
                    </p>
                  </div>
                  <button
                    className={`w-full mt-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      isDarkMode 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    } shadow-md`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRedirect(exercise.url);
                    }}
                  >
                    Start Exercise
                  </button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        html, body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 0.3;
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(-20px, 20px);
            opacity: 0.3;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
          animation-delay: calc(0.1s * var(--index));
        }
      `}</style>
    </div>
  );
}