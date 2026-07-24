'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartLine, FaArrowLeft } from 'react-icons/fa';
import { PiFlowerLotusDuotone } from 'react-icons/pi';

export default function ResultsPage() {
  const [scores, setScores] = useState({});
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('quizUser') || '{}');
    const storedScores = JSON.parse(localStorage.getItem('quizScores') || '{}')[user.email] || {};
    setScores(storedScores);
  }, []);

  const quizTypes = ['react', 'express', 'mongodb', 'nodejs'];

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'basic': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  const getDifficultyBg = (diff) => {
    switch (diff) {
      case 'basic': return 'bg-green-100';
      case 'intermediate': return 'bg-yellow-100';
      case 'hard': return 'bg-red-100';
      default: return 'bg-blue-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-8 relative overflow-hidden">
      {/* Animated background elements */}
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
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PiFlowerLotusDuotone className="text-blue-600 w-8 h-8 animate-glow" />
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Your Quiz Results
          </motion.h1>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quizTypes.map((quizType, index) => (
            <motion.div
              key={quizType}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)'
              }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 p-6"
            >
              <div className="flex items-center mb-4">
                <FaTrophy className="text-yellow-500 text-3xl mr-4" />
                <h2 className="text-xl font-bold text-gray-800 capitalize">{quizType} Quiz</h2>
              </div>
              
              {scores[quizType] ? (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className={`${getDifficultyBg(scores[quizType].difficulty)} px-3 py-1 rounded-full`}>
                        <span className={`text-sm font-medium capitalize ${getDifficultyColor(scores[quizType].difficulty)}`}>
                          {scores[quizType].difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Score:</span>
                      <span className="font-bold text-gray-800">
                        {scores[quizType].score} / 10
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full ${getDifficultyColor(scores[quizType].difficulty).replace('text', 'bg')}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(scores[quizType].score / 10) * 100}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Percentage:</span>
                      <span className="font-bold text-gray-800">
                        {Math.round((scores[quizType].score / 10) * 100)}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Completed:</span>
                      <span className="text-gray-800">
                        {new Date(scores[quizType].completedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-blue-50/50 p-4 rounded-xl text-center">
                  <p className="text-gray-600">Not attempted yet</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 24px -6px rgba(59, 130, 246, 0.3)',
              backgroundColor: '#2563eb'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/quizz/quizzes')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 mx-auto"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Quizzes
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}