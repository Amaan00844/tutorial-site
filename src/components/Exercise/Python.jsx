"use client";

import {
  FaCode,
  FaCheckSquare,
  FaVolumeUp,
  FaBars,
  FaSearch,
  FaUniversalAccess,
  FaWindowMaximize,
  FaList,
  FaImage,
  FaShieldAlt,
} from "react-icons/fa";

import { useState } from "react";
import { PythonSandbox } from "@/components/MonacoSandboxes";

const basicMenu = [
  {
    label: "1. Variables and Data Types",
    icon: <FaCode className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "1",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Create variables of different data types\n\n",
      "tests.py": null, // Will be loaded from public/exercise/python/basic/1/tests.py
    },
  },
  {
    label: "2. Basic Arithmetic Operations",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "2",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Perform arithmetic operations\n\n",
      "tests.py": null,
    },
  },
  {
    label: "3. Functions and Parameters",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "3",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Create functions with parameters\n\n",
      "tests.py": null,
    },
  },
  {
    label: "4. Conditional Statements",
    icon: <FaBars className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "4",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use if, elif, else statements\n\n",
      "tests.py": null,
    },
  },
  {
    label: "5. Loops and Iteration",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "5",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use for and while loops\n\n",
      "tests.py": null,
    },
  },
  {
    label: "6. Lists and Basic Methods",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "6",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Work with lists and list methods\n\n",
      "tests.py": null,
    },
  },
  {
    label: "7. Dictionaries and Sets",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "7",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Work with dictionaries and sets\n\n",
      "tests.py": null,
    },
  },
  {
    label: "8. String Manipulation",
    icon: <FaList className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "8",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Manipulate strings\n\n",
      "tests.py": null,
    },
  },
  {
    label: "9. File Input/Output",
    icon: <FaImage className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "9",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Read and write files\n\n",
      "tests.py": null,
    },
  },
  {
    label: "10. Basic Error Handling",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    level: "basic",
    exercise: "10",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use try, except, finally\n\n",
      "tests.py": null,
    },
  },
];

const intermediateMenu = [
  {
    label: "1. Object-Oriented Programming",
    icon: <FaCode className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "1",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Create classes and objects\n\n",
      "tests.py": null,
    },
  },
  {
    label: "2. List Comprehensions",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "2",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use list comprehensions\n\n",
      "tests.py": null,
    },
  },
  {
    label: "3. Decorators and Generators",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "3",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Create decorators and generators\n\n",
      "tests.py": null,
    },
  },
  {
    label: "4. Lambda Functions and Map/Filter",
    icon: <FaBars className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "4",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use lambda, map, filter\n\n",
      "tests.py": null,
    },
  },
  {
    label: "5. Regular Expressions",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "5",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use regex patterns\n\n",
      "tests.py": null,
    },
  },
  {
    label: "6. Working with APIs",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "6",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Make API requests\n\n",
      "tests.py": null,
    },
  },
  {
    label: "7. Database Operations",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "7",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Work with databases\n\n",
      "tests.py": null,
    },
  },
  {
    label: "8. Threading and Multiprocessing",
    icon: <FaList className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "8",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use threading\n\n",
      "tests.py": null,
    },
  },
  {
    label: "9. Data Analysis with Pandas",
    icon: <FaImage className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "9",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Analyze data with pandas\n\n",
      "tests.py": null,
    },
  },
  {
    label: "10. Web Scraping",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    level: "intermediate",
    exercise: "10",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Scrape web data\n\n",
      "tests.py": null,
    },
  },
];

const hardMenu = [
  {
    label: "1. Advanced OOP Patterns",
    icon: <FaCode className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "1",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Advanced OOP patterns\n\n",
      "tests.py": null,
    },
  },
  {
    label: "2. Metaclasses and Descriptors",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "2",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Use metaclasses\n\n",
      "tests.py": null,
    },
  },
  {
    label: "3. Async Programming with asyncio",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "3",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Async programming\n\n",
      "tests.py": null,
    },
  },
  {
    label: "4. Performance Optimization",
    icon: <FaBars className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "4",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Optimize performance\n\n",
      "tests.py": null,
    },
  },
  {
    label: "5. Machine Learning Basics",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "5",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Basic ML algorithms\n\n",
      "tests.py": null,
    },
  },
  {
    label: "6. Web Framework Development",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "6",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Build web frameworks\n\n",
      "tests.py": null,
    },
  },
  {
    label: "7. Data Structures and Algorithms",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "7",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Advanced data structures\n\n",
      "tests.py": null,
    },
  },
  {
    label: "8. Testing and Test-Driven Development",
    icon: <FaList className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "8",
    files: {
      "script.py": "# Write your Python code here\n# Example: Write tests\n\n",
      "tests.py": null,
    },
  },
  {
    label: "9. Package Development",
    icon: <FaImage className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "9",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Create packages\n\n",
      "tests.py": null,
    },
  },
  {
    label: "10. Advanced Data Science",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    level: "hard",
    exercise: "10",
    files: {
      "script.py":
        "# Write your Python code here\n# Example: Advanced data science\n\n",
      "tests.py": null,
    },
  },
];

export default function PythonExercisePlatform() {
  const [currentMenu, setCurrentMenu] = useState(basicMenu);
  const [selectedExercise, setSelectedExercise] = useState(basicMenu[0]);
  const [currentFiles, setCurrentFiles] = useState(basicMenu[0].files);

  const setSidebarContent = (event) => {
    const value = event.target.value.toLowerCase();
    let newMenu;
    switch (value) {
      case "basic":
        newMenu = basicMenu;
        break;
      case "intermediate":
        newMenu = intermediateMenu;
        break;
      case "hard":
        newMenu = hardMenu;
        break;
      default:
        newMenu = basicMenu;
    }
    setCurrentMenu(newMenu);
    setSelectedExercise(newMenu[0]);
    loadExerciseFiles(newMenu[0]);
  };

  const loadExerciseFiles = async (exercise) => {
    try {
      // Load test file from public directory
      const testResponse = await fetch(
        `/exercise/python/${exercise.level}/${exercise.exercise}/tests.py`
      );
      const testContent = testResponse.ok
        ? await testResponse.text()
        : "# Test file not found";

      const files = {
        ...exercise.files,
        "tests.py": testContent,
      };

      setCurrentFiles(files);
    } catch (error) {
      console.error("Error loading exercise files:", error);
      setCurrentFiles(exercise.files);
    }
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    loadExerciseFiles(exercise);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">🐍 Python Exercises</h2>

          {/* Level Selector */}
          <select
            onChange={setSidebarContent}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>

          {/* Exercise List */}
          <div className="space-y-2">
            {currentMenu.map((exercise, index) => (
              <button
                key={index}
                onClick={() => handleExerciseSelect(exercise)}
                className={`w-full text-left p-3 rounded transition-colors ${
                  selectedExercise === exercise
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {exercise.icon}
                <span className="text-sm">{exercise.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <PythonSandbox
          filesObj={currentFiles}
          fileToOpen="script.py"
          hideExplorer={false}
        />
      </div>
    </div>
  );
}
