"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaSignOutAlt,
  FaTrophy,
  FaChartLine,
  FaInfoCircle,
  FaCrown,
  FaStar,
} from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import Confetti from "react-confetti";

export default function MongoDBQuizPage() {
  const router = useRouter();
  const quizType = "mongodb";
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState("basic");
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("quizUser") || "{}");
    const email = user.email || "";
    if (!token || !email) {
      router.push("/quizz");
      return;
    }

    // Determine difficulty based on login count
    const loginCount = parseInt(
      localStorage.getItem(`loginCount_${email}`) || "0",
      10,
    );
    let difficultyLevel = "basic";
    if (loginCount >= 6 && loginCount <= 10) {
      difficultyLevel = "intermediate";
    } else if (loginCount > 10) {
      difficultyLevel = "hard";
    }
    setDifficulty(difficultyLevel);

    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://study-portal-backend-9zpf.onrender.com//api/questions/${quizType}?difficulty=${difficultyLevel}`,
          {
            headers: {
              "x-auth-token": token,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [router, quizType]);

  useEffect(() => {
    if (
      !quizCompleted &&
      !selectedOption &&
      !isTimeUp &&
      questions.length > 0
    ) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsTimeUp(true);

            const correctAnswerIndex = Number(
              questions[currentQuestion].correctAnswer,
            );
            const options = questions[currentQuestion].options;
            if (
              correctAnswerIndex < 0 ||
              correctAnswerIndex >= options.length
            ) {
              console.error(
                "Time-up: Correct answer index is out of bounds:",
                correctAnswerIndex,
              );
              setFeedback({
                isCorrect: false,
                correctAnswer: "Error: Invalid correct answer index",
              });
            } else {
              setFeedback({
                isCorrect: false,
                correctAnswer: options[correctAnswerIndex],
              });
            }

            setTimeout(() => {
              if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
                setFeedback(null);
                setTimeLeft(30);
                setIsTimeUp(false);
                setStreak(0);
                setShowExplanation(false);
              } else {
                setQuizCompleted(true);
                const user = JSON.parse(
                  localStorage.getItem("quizUser") || "{}",
                );
                const scores = JSON.parse(
                  localStorage.getItem("quizScores") || "{}",
                );
                scores[user.email] = scores[user.email] || {};
                scores[user.email][quizType] = {
                  score,
                  difficulty,
                  completedAt: new Date().toISOString(),
                  maxStreak,
                };
                localStorage.setItem("quizScores", JSON.stringify(scores));
              }
            }, 2000);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [
    currentQuestion,
    selectedOption,
    quizCompleted,
    isTimeUp,
    questions,
    score,
    difficulty,
    maxStreak,
  ]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    const selectedIndex = questions[currentQuestion].options.indexOf(option);

    if (selectedIndex === -1) {
      console.error("Selected option not found in options array:", option);
      setFeedback({
        isCorrect: false,
        correctAnswer:
          questions[currentQuestion].options[
            questions[currentQuestion].correctAnswer
          ],
      });
      new Audio("/incorrect.mp3").play().catch(() => {});
      return;
    }

    const correctAnswerIndex = Number(questions[currentQuestion].correctAnswer);
    if (
      correctAnswerIndex < 0 ||
      correctAnswerIndex >= questions[currentQuestion].options.length
    ) {
      console.error(
        "Correct answer index is out of bounds:",
        correctAnswerIndex,
      );
      setFeedback({
        isCorrect: false,
        correctAnswer: "Error: Invalid correct answer index",
      });
      new Audio("/incorrect.mp3").playiall(() => {});
      return;
    }

    const isCorrect = selectedIndex === correctAnswerIndex;

    setFeedback({
      isCorrect,
      correctAnswer: questions[currentQuestion].options[correctAnswerIndex],
      explanation: questions[currentQuestion].explanation,
    });

    if (isCorrect) {
      setScore(score + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
      new Audio("/correct.mp3").play().catch(() => {});
    } else {
      setStreak(0);
      new Audio("/incorrect.mp3").play().catch(() => {});
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setFeedback(null);
        setTimeLeft(30);
        setShowExplanation(false);
      } else {
        setQuizCompleted(true);
        const user = JSON.parse(localStorage.getItem("quizUser") || "{}");
        const scores = JSON.parse(localStorage.getItem("quizScores") || "{}");
        scores[user.email] = scores[user.email] || {};
        scores[user.email][quizType] = {
          score: score + (isCorrect ? 1 : 0),
          difficulty,
          completedAt: new Date().toISOString(),
          maxStreak: Math.max(maxStreak, isCorrect ? streak + 1 : streak),
        };
        localStorage.setItem("quizScores", JSON.stringify(scores));
      }
    }, 2000);
  };

  const handleContinue = () => router.push("/quizz/quizzes");
  const handleStop = () => router.push("/quizz/results");

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case "basic":
        return "text-green-600";
      case "intermediate":
        return "text-yellow-600";
      case "hard":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  };

  const getDifficultyBg = (diff) => {
    switch (diff) {
      case "basic":
        return "bg-green-100";
      case "intermediate":
        return "bg-yellow-100";
      case "hard":
        return "bg-red-100";
      default:
        return "bg-blue-100";
    }
  };

  const getCompletionCard = () => {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const user = JSON.parse(localStorage.getItem("quizUser") || "{}");
    const scores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    const userScores = scores[user.email] || {};
    const previousScore = userScores[quizType]?.score || 0;
    const scoreImprovement = score - previousScore;

    // Calculate star rating (1-5)
    const starRating = Math.min(5, Math.max(1, Math.ceil(percentage / 20)));

    let title, message, badge;
    if (percentage >= 90) {
      title = "MongoDB Master!";
      message =
        "You absolutely crushed it! Your MongoDB knowledge is exceptional.";
      badge = "Expert";
    } else if (percentage >= 75) {
      title = "Great Job!";
      message = "Solid performance! You clearly understand MongoDB well.";
      badge = "Proficient";
    } else if (percentage >= 50) {
      title = "Good Effort!";
      message =
        "You're getting there! Review the questions you missed to improve.";
      badge = "Intermediate";
    } else {
      title = "Keep Practicing!";
      message = "Don't worry! MongoDB takes time to master. Try again!";
      badge = "Beginner";
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-blue-400 rounded-2xl shadow-lg p-6 max-w-lg w-full text-center text-white relative"
      >
        {/* Confetti for high scores */}
        {percentage >= 75 && (
          <Confetti
            width={typeof window !== "undefined" ? window.innerWidth : 0}
            height={typeof window !== "undefined" ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={percentage >= 90 ? 600 : 300}
            colors={["#3B82F6", "#60A5FA", "#DBEAFE", "#BFDBFE"]}
          />
        )}

        {/* Header Section */}
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <GiTrophyCup className="text-5xl text-white mx-auto" />
          </motion.div>
          <h1 className="text-3xl font-bold mt-4">{title}</h1>
          <p className="text-blue-100 mt-2">{message}</p>
          <div className="mt-3 inline-block px-3 py-1 bg-blue-300 text-white rounded-full text-sm font-semibold">
            {badge}
          </div>
        </div>

        {/* Score Section */}
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-4xl font-bold"
          >
            {score}
            <span className="text-xl">/{totalQuestions}</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="h-2 bg-white rounded-full mx-auto mt-2 max-w-xs"
          />
          <div className="text-xl font-semibold mt-2">{percentage}%</div>
          <motion.div
            className="flex justify-center gap-1 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xl ${
                  i < starRating ? "text-white fill-white" : "text-blue-300/50"
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-300/30 p-3 rounded-lg"
          >
            <div className="text-sm text-blue-100">Best Streak</div>
            <div className="text-lg font-semibold flex items-center justify-center gap-1">
              <FaCrown className="text-white" /> {maxStreak}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-blue-300/30 p-3 rounded-lg"
          >
            <div className="text-sm text-blue-100">Difficulty</div>
            <div className="text-lg font-semibold capitalize">{difficulty}</div>
          </motion.div>
          {previousScore > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-blue-300/30 p-3 rounded-lg"
              >
                <div className="text-sm text-blue-100">Previous Score</div>
                <div className="text-lg font-semibold">{previousScore}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-blue-300/30 p-3 rounded-lg"
              >
                <div className="text-sm text-blue-100">Improvement</div>
                <div
                  className={`text-lg font-semibold ${
                    scoreImprovement > 0
                      ? "text-green-200"
                      : scoreImprovement < 0
                        ? "text-red-200"
                        : ""
                  }`}
                >
                  {scoreImprovement > 0 ? "+" : ""}
                  {scoreImprovement}
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStop}
            className="bg-white text-blue-400 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-50 transition-colors flex-1"
          >
            <span className="flex items-center justify-center gap-2">
              <FaChartLine /> View Results
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinue}
            className="bg-white text-blue-400 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-50 transition-colors flex-1"
          >
            <span className="flex items-center justify-center gap-2">
              <FaTrophy /> Try Another Quiz
            </span>
          </motion.button>
        </div>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 text-blue-100 text-sm font-medium hover:text-white transition-colors"
          onClick={() => {
            navigator.clipboard.writeText(
              `I scored ${score}/${totalQuestions} (${percentage}%) on the MongoDB ${difficulty} quiz! Try it yourself at [YourWebsiteURL]`,
            );
            alert("Results copied to clipboard!");
          }}
        >
          Share your results
        </motion.button>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/quizz/quizzes")}
            className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Quizzes
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-6 bg-[url('/pattern.svg')] bg-opacity-10">
        {getCompletionCard()}
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center">
        <div className="text-2xl font-semibold text-gray-600">
          No questions available. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 bg-[url('/pattern.svg')] bg-opacity-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto backdrop-blur-xl bg-white/80 rounded-3xl shadow-xl p-8 border border-white/20 tilt-card"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease",
        }}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 50;
          const rotateY = (centerX - x) / 50;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <motion.img
              src="/mongodb.png"
              alt="MongoDB Logo"
              className="h-14 w-auto mr-4"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <h1 className="text-4xl font-extrabold text-indigo-700">
                MongoDB Quiz
              </h1>
              <div
                className={`inline-flex items-center mt-1 px-3 py-1 rounded-full text-sm font-medium ${getDifficultyBg(
                  difficulty,
                )} ${getDifficultyColor(difficulty)}`}
              >
                <FaChartLine className="mr-1" />
                <span className="capitalize">{difficulty} Difficulty</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {streak > 1 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                <FaCrown className="mr-1" /> Streak: {streak}
              </motion.div>
            )}
            <motion.div
              className="text-gray-700 font-semibold"
              initial={{ scale: 1 }}
              animate={{ scale: score > 0 ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              Score: {score}/{questions.length}
            </motion.div>
            <span className="text-gray-700 font-semibold">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleStop}
              className="text-red-500 hover:text-red-600 transition-colors"
              title="Quit Quiz"
            >
              <FaSignOutAlt className="text-xl" />
            </motion.button>
          </div>
        </div>

        <div className="w-full bg-gray-200/50 rounded-full h-3 mb-8">
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="text-center mb-8 relative">
          <svg className="w-20 h-20 mx-auto" viewBox="0 0 36 36">
            <path
              className="fill-none stroke-gray-200 stroke-2"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="fill-none stroke-indigo-600 stroke-2"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              strokeDasharray="100"
              strokeDashoffset={100 - (timeLeft / 30) * 100}
              transition={{ duration: 1, ease: "linear" }}
            />
          </svg>
          <motion.span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold ${
              timeLeft <= 10 ? "text-red-500" : "text-indigo-700"
            }`}
            animate={{ scale: timeLeft <= 10 ? [1, 1.2, 1] : 1 }}
            transition={{
              repeat: timeLeft <= 10 ? Infinity : 0,
              duration: 0.5,
            }}
          >
            {timeLeft}s
          </motion.span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {questions[currentQuestion].category}
              </span>
              <h2 className="text-3xl font-semibold text-gray-900">
                {questions[currentQuestion].question}
              </h2>
            </div>
            <div className="grid gap-5">
              {questions[currentQuestion].options.map((option, i) => (
                <motion.button
                  key={i}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null || isTimeUp}
                  className={`relative overflow-hidden w-full px-6 py-5 text-left rounded-2xl border-2 transition-all duration-300 text-lg font-medium ${
                    selectedOption === option
                      ? feedback?.isCorrect
                        ? "bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800"
                        : "bg-gradient-to-r from-red-100 to-red-200 border-red-500 text-red-800"
                      : "bg-white/50 border-indigo-200 text-gray-800 hover:bg-indigo-100/50 hover:border-indigo-300"
                  } shadow-md backdrop-blur-sm`}
                >
                  <span className="relative z-10 flex items-center">
                    {selectedOption === option && (
                      <motion.span
                        className="mr-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {feedback?.isCorrect ? "✅" : "❌"}
                      </motion.span>
                    )}
                    {option}
                  </span>
                  <span className="absolute inset-0 bg-indigo-700 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {feedback && feedback.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                className={`mt-4 p-4 rounded-lg ${
                  showExplanation
                    ? "bg-indigo-50 border border-indigo-200"
                    : "bg-gray-50 border border-gray-200 cursor-pointer"
                }`}
                onClick={() => !showExplanation && setShowExplanation(true)}
              >
                <div className="flex items-center text-indigo-700 font-medium">
                  <FaInfoCircle className="mr-2" />
                  {showExplanation ? "Explanation" : "Show Explanation"}
                </div>
                {showExplanation && (
                  <motion.p
                    className="mt-2 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {feedback.explanation}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          )}

          {isTimeUp && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="mt-6 px-6 py-4 rounded-xl font-semibold text-center shadow-md bg-red-100/80 text-red-800 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <FaClock className="text-xl" />
              Time's Up! Correct answer: {feedback?.correctAnswer || "Unknown"}
            </motion.div>
          )}
          {!isTimeUp && feedback && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className={`mt-6 px-6 py-4 rounded-xl font-semibold text-center shadow-md ${
                feedback.isCorrect
                  ? "bg-green-100/80 text-green-800"
                  : "bg-red-100/80 text-red-800"
              } backdrop-blur-sm`}
            >
              {feedback.isCorrect ? (
                <div className="flex items-center justify-center gap-2">
                  ✅ Correct!{" "}
                  {streak > 1 && (
                    <span className="text-yellow-600">🔥 Streak: {streak}</span>
                  )}
                </div>
              ) : (
                `❌ Incorrect. Correct answer: ${feedback.correctAnswer}`
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
