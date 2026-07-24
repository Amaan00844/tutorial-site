"use client";

import { useEffect, useState } from "react";
import { BookOpen, Clock,  Award, TrendingUp } from "react-feather";

const Activity = () => {
  const [readingData, setReadingData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem("readingStats");
      setReadingData(storedData ? JSON.parse(storedData) : {});
      setIsLoading(false);
    };

    fetchData();

    const handleStorageChange = () => {
      fetchData();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const formatTime = (seconds) => {
    if (seconds < 60) return `${seconds} sec`;
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
      return remainingSeconds > 0 
        ? `${minutes}m ${remainingSeconds}s` 
        : `${minutes}m`;
    }
    return `${seconds}s`;
  };

  const calculateStats = () => {
    const entries = Object.entries(readingData);
    const totalTime = entries.reduce((sum, [_, time]) => sum + time, 0);
    const mostReadTopic = entries.reduce((max, [topic, time]) => 
      time > max.time ? { topic, time } : max, 
      { topic: "", time: 0 }
    );
    const totalTopics = entries.length;

    return { totalTime, mostReadTopic, totalTopics };
  };

  const { totalTime, mostReadTopic, totalTopics } = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
            <BookOpen className="text-blue-600" size={32} />
            Reading History
          </h1>
          <p className="text-gray-600 mt-2">
            Track your learning progress and reading habits
          </p>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : Object.keys(readingData).length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <Clock className="mx-auto text-gray-400" size={48} />
            <h3 className="text-xl font-medium text-gray-600 mt-4">
              No reading history yet
            </h3>
            <p className="text-gray-500 mt-2">
              Your reading activity will appear here once you start learning
            </p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-500" size={24} />
                  <h3 className="text-gray-500 font-medium">Total Time</h3>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">
                  {formatTime(totalTime)}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <Award className="text-green-500" size={24} />
                  <h3 className="text-gray-500 font-medium">Most Read</h3>
                </div>
                <p className="text-xl font-bold mt-2 text-gray-800 truncate">
                  {mostReadTopic.topic || "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  {formatTime(mostReadTopic.time)}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-purple-500" size={24} />
                  <h3 className="text-gray-500 font-medium">Topics Covered</h3>
                </div>
                <p className="text-2xl font-bold mt-2 text-gray-800">
                  {totalTopics}
                </p>
              </div>
            </div>

            {/* Reading History Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Topic
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time Spent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(readingData)
                      .sort((a, b) => b[1] - a[1])
                      .map(([topic, time]) => (
                        <tr key={topic} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">
                              {topic}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-semibold">
                            {formatTime(time)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{
                                  width: `${Math.min(
                                    100,
                                    (time / (mostReadTopic.time || 1)) * 100
                                  )}%`,
                                }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Activity;