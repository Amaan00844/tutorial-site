'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaSignOutAlt, FaTrophy } from 'react-icons/fa';
import Confetti from 'react-confetti';

export default function ReactQuizPage() {
  const router = useRouter();
  const quizType = 'react';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [questions, setQuestions] = useState([]);

  const allQuestions = {
    basic: [
      {
        question: 'What is React primarily used for?',
        options: ['Building user interfaces', 'Managing databases', 'Server-side routing', 'Creating REST APIs'],
        correctAnswer: 'Building user interfaces',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What is a React component?',
        options: ['A reusable piece of UI', 'A database model', 'A server endpoint', 'A CSS stylesheet'],
        correctAnswer: 'A reusable piece of UI',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'How do you create a functional component in React?',
        options: [
          'function MyComponent() { return <div>Hello</div>; }',
          'class MyComponent extends React.Component { render() { return <div>Hello</div>; } }',
          'const MyComponent = () => { console.log("Hello"); };',
          'function MyComponent() { return "Hello"; }'
        ],
        correctAnswer: 'function MyComponent() { return <div>Hello</div>; }',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What is JSX in React?',
        options: ['A syntax extension for JavaScript', 'A database query language', 'A CSS preprocessor', 'A server-side framework'],
        correctAnswer: 'A syntax extension for JavaScript',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What does the useState hook do in React?',
        options: ['Manages state in functional components', 'Fetches data from an API', 'Handles routing', 'Styles components'],
        correctAnswer: 'Manages state in functional components',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What is the purpose of props in React?',
        options: ['To pass data to components', 'To manage state', 'To style components', 'To handle events'],
        correctAnswer: 'To pass data to components',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'How do you render a React component?',
        options: ['Using ReactDOM.render()', 'Using component.render()', 'Using app.render()', 'Using React.renderComponent()'],
        correctAnswer: 'Using ReactDOM.render()',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What is the default export in a React component file?',
        options: ['The main component', 'A CSS file', 'A database connection', 'A server route'],
        correctAnswer: 'The main component',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What does the React.Fragment component do?',
        options: ['Groups children without adding extra nodes', 'Renders a single child', 'Handles state', 'Fetches data'],
        correctAnswer: 'Groups children without adding extra nodes',
        category: 'react',
        difficulty: 'basic'
      },
      {
        question: 'What is the virtual DOM in React?',
        options: ['A lightweight copy of the real DOM', 'A database schema', 'A server-side model', 'A CSS framework'],
        correctAnswer: 'A lightweight copy of the real DOM',
        category: 'react',
        difficulty: 'basic'
      }
    ],
    intermediate: [
      {
        question: 'How do you pass data from a parent to a child component in React?',
        options: ['Using props', 'Using state', 'Using context', 'Using Redux'],
        correctAnswer: 'Using props',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'What is the purpose of the useEffect hook?',
        options: ['To perform side effects in functional components', 'To manage component state', 'To create new components', 'To handle routing'],
        correctAnswer: 'To perform side effects in functional components',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'What is a controlled component in React?',
        options: ['A component whose form data is handled by state', 'A component that uses Redux', 'A component with no props', 'A component that renders conditionally'],
        correctAnswer: 'A component whose form data is handled by state',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'How can you optimize a React application’s performance?',
        options: ['Using React.memo for components', 'Increasing component state', 'Adding more event listeners', 'Using inline styles'],
        correctAnswer: 'Using React.memo for components',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'What is the React Context API used for?',
        options: ['Sharing data across components without prop drilling', 'Managing component lifecycle', 'Creating animations', 'Handling HTTP requests'],
        correctAnswer: 'Sharing data across components without prop drilling',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'What does the useCallback hook do?',
        options: ['Memoizes functions to prevent unnecessary renders', 'Manages state', 'Fetches data', 'Handles events'],
        correctAnswer: 'Memoizes functions to prevent unnecessary renders',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'How do you conditionally render a component in React?',
        options: ['Using ternary operators or &&', 'Using switch statements', 'Using try-catch', 'Using for loops'],
        correctAnswer: 'Using ternary operators or &&',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'What is the purpose of the useRef hook?',
        options: ['To persist values across renders', 'To manage state', 'To fetch data', 'To handle routing'],
        correctAnswer: 'To persist values across renders',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'How do you handle events in React?',
        options: ['Using event handlers like onClick', 'Using addEventListener', 'Using event.preventDefault', 'Using Redux actions'],
        correctAnswer: 'Using event handlers like onClick',
        category: 'react',
        difficulty: 'intermediate'
      },
      {
        question: 'What is a key prop used for in React lists?',
        options: ['To uniquely identify elements', 'To style list items', 'To sort lists', 'To filter lists'],
        correctAnswer: 'To uniquely identify elements',
        category: 'react',
        difficulty: 'intermediate'
      }
    ],
    hard: [
      {
        question: 'What is the significance of the key prop in React lists?',
        options: ['It helps React efficiently update the DOM', 'It styles list items', 'It triggers lifecycle methods', 'It handles form submissions'],
        correctAnswer: 'It helps React efficiently update the DOM',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'How does React’s reconciliation process work?',
        options: ['It compares the virtual DOM with the real DOM to apply minimal updates', 'It reloads the entire page', 'It fetches new data from the server', 'It re-renders all components'],
        correctAnswer: 'It compares the virtual DOM with the real DOM to apply minimal updates',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'What is a higher-order component (HOC) in React?',
        options: ['A function that takes a component and returns a new component', 'A component that renders other components', 'A component with multiple states', 'A component that uses hooks'],
        correctAnswer: 'A function that takes a component and returns a new component',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'How do you handle errors in React components?',
        options: ['Using Error Boundaries', 'Using try-catch in render', 'Using useEffect', 'Using Redux middleware'],
        correctAnswer: 'Using Error Boundaries',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'What is the purpose of React Suspense?',
        options: ['To handle asynchronous rendering and data fetching', 'To manage component state', 'To create animations', 'To handle routing'],
        correctAnswer: 'To handle asynchronous rendering and data fetching',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'What is the Concurrent Rendering feature in React 18?',
        options: ['Allows rendering tasks to be interrupted for better performance', 'Renders all components at once', 'Disables hooks', 'Manages server-side rendering'],
        correctAnswer: 'Allows rendering tasks to be interrupted for better performance',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'How does the useReducer hook differ from useState?',
        options: ['It’s better for complex state logic', 'It’s used for styling', 'It handles routing', 'It fetches data'],
        correctAnswer: 'It’s better for complex state logic',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'What is the purpose of React Portals?',
        options: ['To render children into a different DOM node', 'To manage state', 'To handle events', 'To optimize performance'],
        correctAnswer: 'To render children into a different DOM node',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'How do you implement code-splitting in React?',
        options: ['Using React.lazy and Suspense', 'Using useEffect', 'Using Redux', 'Using CSS modules'],
        correctAnswer: 'Using React.lazy and Suspense',
        category: 'react',
        difficulty: 'hard'
      },
      {
        question: 'What is the purpose of the useTransition hook in React 18?',
        options: ['To manage non-urgent UI updates', 'To handle form submissions', 'To fetch data', 'To style components'],
        correctAnswer: 'To manage non-urgent UI updates',
        category: 'react',
        difficulty: 'hard'
      }
    ]
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/quizz');
      return;
    }

    const loginCount = parseInt(localStorage.getItem('loginCount') || '1', 10);
    let selectedDifficulty = 'basic';
    if (loginCount >= 6 && loginCount <= 10) {
      selectedDifficulty = 'intermediate';
    } else if (loginCount > 10) {
      selectedDifficulty = 'hard';
    }

    setQuestions(allQuestions[selectedDifficulty]);
  }, [router]);

  useEffect(() => {
    if (!quizCompleted && !selectedOption && !isTimeUp && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsTimeUp(true);
            setFeedback({ isCorrect: false, correctAnswer: questions[currentQuestion].correctAnswer });
            setTimeout(() => {
              if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
                setFeedback(null);
                setTimeLeft(30);
                setIsTimeUp(false);
              } else {
                setQuizCompleted(true);
                const user = JSON.parse(localStorage.getItem('quizUser') || '{}');
                const scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
                scores[user.email] = scores[user.email] || {};
                scores[user.email][quizType] = score;
                localStorage.setItem('quizScores', JSON.stringify(scores));
              }
            }, 1500);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQuestion, selectedOption, quizCompleted, isTimeUp, questions, score]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    setFeedback({ isCorrect, correctAnswer: questions[currentQuestion].correctAnswer });
    if (isCorrect) {
      setScore(score + 1);
      new Audio('/correct.mp3').play().catch(() => {});
    } else {
      new Audio('/incorrect.mp3').play().catch(() => {});
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setFeedback(null);
        setTimeLeft(30);
      } else {
        setQuizCompleted(true);
        const user = JSON.parse(localStorage.getItem('quizUser') || '{}');
        const scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
        scores[user.email] = scores[user.email] || {};
        scores[user.email][quizType] = score + (isCorrect ? 1 : 0);
        localStorage.setItem('quizScores', JSON.stringify(scores));
      }
    }, 1500);
  };

  const handleContinue = () => router.push('/quizz/quizzes');
  const handleStop = () => router.push('/quizz/results');

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-6 bg-[url('/pattern.svg')] bg-opacity-10">
        <Confetti width={typeof window !== 'undefined' ? window.innerWidth : 0} height={typeof window !== 'undefined' ? window.innerHeight : 0} recycle={false} numberOfPieces={200} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-xl bg-blue-100 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-white/20"
        >
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4 drop-shadow-md flex items-center justify-center gap-2">
            <FaTrophy className="text-yellow-400" /> Quiz Completed!
          </h1>
          <p className="text-2xl font-medium text-gray-600 mb-6 drop-shadow-md">
            Your Score: <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="font-bold text-yellow-300"
            >{score}</motion.span> / {questions.length}
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStop}
              className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              <span className="relative z-10">View Results</span>
              <span className="absolute inset-0 bg-red-700 opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              <span className="relative z-10">Try Another Quiz</span>
              <span className="absolute inset-0 bg-indigo-700 opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Loading questions...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 bg-[url('/pattern.svg')] bg-opacity-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto backdrop-blur-xl bg-white/80 rounded-3xl shadow-xl p-8 border border-white/20 tilt-card"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease',
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
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="/react.png" alt="React Logo" className="h-14 w-auto mr-4" />
            <h1 className="text-4xl font-extrabold text-indigo-700">React Quiz</h1>
          </div>
          <div className="flex items-center gap-6">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
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
              transition={{ duration: 1, ease: 'linear' }}
            />
          </svg>
          <motion.span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold ${timeLeft <= 10 ? 'text-red-500' : 'text-indigo-700'}`}
            animate={{ scale: timeLeft <= 10 ? [1, 1.1, 1] : 1 }}
            transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
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
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null || isTimeUp}
                  className={`relative overflow-hidden w-full px-6 py-5 text-left rounded-2xl border-2 transition-all duration-300 text-lg font-medium ${
                    selectedOption === option
                      ? feedback?.isCorrect
                        ? 'bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800'
                        : 'bg-gradient-to-r from-red-100 to-red-200 border-red-500 text-red-800'
                      : 'bg-white/50 border-indigo-200 text-gray-800 hover:bg-indigo-100/50 hover:border-indigo-300'
                  } shadow-md backdrop-blur-sm`}
                >
                  <span className="relative z-10">{option}</span>
                  <span className="absolute inset-0 bg-indigo-700 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isTimeUp && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
              className="mt-6 px-6 py-4 rounded-xl font-semibold text-center shadow-md bg-red-100/80 text-red-800 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <FaClock className="text-xl" />
              Time's Up! Correct answer: {questions[currentQuestion].correctAnswer}
            </motion.div>
          )}
          {!isTimeUp && feedback && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
              className={`mt-6 px-6 py-4 rounded-xl font-semibold text-center shadow-md ${
                feedback.isCorrect
                  ? 'bg-green-100/80 text-green-800'
                  : 'bg-red-100/80 text-red-800'
              } backdrop-blur-sm`}
            >
              {feedback.isCorrect ? '✅ Correct!' : `❌ Incorrect. Correct answer: ${feedback.correctAnswer}`}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}