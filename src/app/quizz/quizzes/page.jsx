"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaTrophy,
  FaUser,
  FaHistory,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { ArrowRight } from "lucide-react";

const quizData = [
  {
    title: "MongoDB Quiz",
    description: "Test your knowledge of MongoDB concepts and NoSQL databases.",
    icon: <FaDatabase className="w-12 h-12" />,
    path: "/quizz/mongodb",
    bgColor: "bg-green-100/80",
    iconColor: "text-green-500",
    btnColor:
      "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
  },
  {
    title: "Express Quiz",
    description: "Challenge yourself with questions on Express.js and backend development.",
    icon: <SiExpress className="w-12 h-12" />,
    path: "/quizz/express",
    bgColor: "bg-gray-100/80",
    iconColor: "text-gray-500",
    btnColor:
      "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700",
  },
  {
    title: "React Quiz",
    description: "Assess your skills in React and front-end development.",
    icon: <FaReact className="w-12 h-12" />,
    path: "/quizz/react",
    bgColor: "bg-blue-100/80",
    iconColor: "text-blue-500",
    btnColor:
      "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  },
  {
    title: "Node.js Quiz",
    description: "Explore your expertise in Node.js and server-side JavaScript.",
    icon: <FaNodeJs className="w-12 h-12" />,
    path: "/quizz/nodejs",
    bgColor: "bg-green-100/80",
    iconColor: "text-green-600",
    btnColor:
      "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
  },
];

const Quizzes = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userScores, setUserScores] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const scores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    setUserScores(scores);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const getUserBestScore = (quizPath) => {
    if (!user?.email) return null;
    const quizType = quizPath.split("/").pop();
    return userScores[user.email]?.[quizType] || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex flex-col items-center py-12 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl relative z-10"
      >
        <motion.div
          className="w-full flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <PiFlowerLotusDuotone className="text-blue-600 w-8 h-8 animate-glow" />
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Quiz Adventure
              </motion.h1>
            </motion.div>
            <motion.p
              className="text-gray-500 max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Test your knowledge across different technologies
            </motion.p>
          </div>

          {user && (
            <motion.div
              className="flex items-center gap-3 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100/50"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <FaUser className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">Ready to learn!</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100/50"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaTrophy className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Quizzes Taken</p>
                <p className="text-xl font-bold text-gray-800">
                  {isLoading
                    ? "..."
                    : Object.keys(userScores[user?.email] || {}).length}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100/50"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <FaHistory className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Last Attempt</p>
                <p className="text-xl font-bold text-gray-800">
                  {isLoading
                    ? "..."
                    : user?.email && userScores[user.email]
                    ? Object.keys(userScores[user.email])[0] || "None"
                    : "None"}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100/50"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaTrophy className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Highest Score</p>
                <p className="text-xl font-bold text-gray-800">
                  {isLoading
                    ? "..."
                    : user?.email && userScores[user.email]
                    ? Math.max(...Object.values(userScores[user.email])) + "%"
                    : "0%"}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {quizData.map((quiz, index) => {
            const bestScore = getUserBestScore(quiz.path);

            return (
              <motion.div
                key={quiz.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                }}
                className={`${quiz.bgColor} backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 transition-all duration-300`}
              >
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div className={`mb-4 ${quiz.iconColor}`}>
                    {quiz.icon}
                  </motion.div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {quiz.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">{quiz.description}</p>

                  {bestScore !== null && (
                    <div className="w-full bg-white bg-opacity-70 rounded-full mb-4">
                      <div
                        className={`h-2 rounded-full ${quiz.btnColor.split(" ")[0]}`}
                        style={{ width: `${bestScore}%` }}
                      ></div>
                      <p className="text-xs mt-1 text-gray-600">
                        Your best: {bestScore}%
                      </p>
                    </div>
                  )}

                  <Link href={quiz.path} className="w-full">
                    <motion.button
                      className={`${quiz.btnColor} text-white px-6 py-2.5 rounded-xl font-medium w-full transition-all flex items-center justify-center gap-2`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Quiz <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.footer
          className="mt-16 text-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="border-t border-gray-200/50 pt-8">
            <p className="text-sm text-blue-600">
              Powered by <span className="font-bold">Skill Bridge</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Quizzes;
