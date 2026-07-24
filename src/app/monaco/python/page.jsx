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
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

const loadExerciseFiles = async (level) => {
  try {
    const response = await fetch(`/exercise/python/${level}/tests.py`);
    const testContent = response.ok
      ? await response.text()
      : "# Test file not found";

    return {
      "script.py":
        '# Write your Python code here\nprint("Hello, Python!")\n\n# Complete the exercise requirements below\n',
      "tests.py": testContent,
    };
  } catch (error) {
    console.error("Error loading exercise files:", error);
    return {
      "script.py": '# Write your Python code here\nprint("Hello, Python!")',
      "tests.py": "# Test file not available",
    };
  }
};

const basicMenu = [
  {
    label: "1. Variables and Data Types",
    icon: <FaCode className="inline mr-2 text-xl" />,
    task: "Create variables of different data types (string, integer, float, boolean) and display them using print()",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/1");
      return { files };
    },
  },
  {
    label: "2. Basic Arithmetic Operations",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    task: "Perform basic arithmetic operations and display results using print statements",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/2");
      return { files };
    },
  },
  {
    label: "3. Functions and Parameters",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    task: "Create functions with parameters and return values to solve given problems",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/3");
      return { files };
    },
  },
  {
    label: "4. Conditional Statements",
    icon: <FaBars className="inline mr-2 text-xl" />,
    task: "Use if, elif, and else statements to create conditional logic",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/4");
      return { files };
    },
  },
  {
    label: "5. Loops and Iteration",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    task: "Use for loops, while loops, and list comprehensions",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/5");
      return { files };
    },
  },
  {
    label: "6. Lists and Basic Methods",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    task: "Work with lists using append, remove, slice, and other basic list methods",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/6");
      return { files };
    },
  },
  {
    label: "7. Dictionaries and Sets",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    task: "Create and manipulate dictionaries and sets for data storage",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/7");
      return { files };
    },
  },
  {
    label: "8. String Manipulation",
    icon: <FaList className="inline mr-2 text-xl" />,
    task: "Use string methods like split, join, replace, and formatting",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/8");
      return { files };
    },
  },
  {
    label: "9. File Input/Output",
    icon: <FaImage className="inline mr-2 text-xl" />,
    task: "Read from and write to files using Python file operations",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/9");
      return { files };
    },
  },
  {
    label: "10. Basic Error Handling",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    task: "Implement try-except blocks to handle errors gracefully",
    onClick: async () => {
      const files = await loadExerciseFiles("basic/10");
      return { files };
    },
  },
];

const intermediateMenu = [
  {
    label: "1. Object-Oriented Programming",
    icon: <FaCode className="inline mr-2 text-xl" />,
    task: "Create classes, objects, and implement inheritance in Python",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/1");
      return { files };
    },
  },
  {
    label: "2. List Comprehensions",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    task: "Master list comprehensions and generator expressions",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/2");
      return { files };
    },
  },
  {
    label: "3. Decorators and Generators",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    task: "Create and use decorators and generator functions",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/3");
      return { files };
    },
  },
  {
    label: "4. Lambda Functions and Map/Filter",
    icon: <FaBars className="inline mr-2 text-xl" />,
    task: "Use lambda functions with map, filter, and reduce",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/4");
      return { files };
    },
  },
  {
    label: "5. Regular Expressions",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    task: "Use the re module for pattern matching and text processing",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/5");
      return { files };
    },
  },
  {
    label: "6. Working with APIs",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    task: "Make HTTP requests and work with JSON data using requests library",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/6");
      return { files };
    },
  },
  {
    label: "7. Database Operations",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    task: "Connect to databases and perform CRUD operations",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/7");
      return { files };
    },
  },
  {
    label: "8. Threading and Multiprocessing",
    icon: <FaList className="inline mr-2 text-xl" />,
    task: "Implement concurrent programming with threading and multiprocessing",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/8");
      return { files };
    },
  },
  {
    label: "9. Data Analysis with Pandas",
    icon: <FaImage className="inline mr-2 text-xl" />,
    task: "Analyze and manipulate data using pandas DataFrames",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/9");
      return { files };
    },
  },
  {
    label: "10. Web Scraping",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    task: "Extract data from websites using BeautifulSoup and requests",
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/10");
      return { files };
    },
  },
];

const hardMenu = [
  {
    label: "1. Advanced OOP Patterns",
    icon: <FaCode className="inline mr-2 text-xl" />,
    task: "Implement advanced object-oriented design patterns",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/1");
      return { files };
    },
  },
  {
    label: "2. Metaclasses and Descriptors",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    task: "Master metaclasses and descriptor protocols",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/2");
      return { files };
    },
  },
  {
    label: "3. Async Programming with asyncio",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    task: "Implement asynchronous programming using asyncio",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/3");
      return { files };
    },
  },
  {
    label: "4. Performance Optimization",
    icon: <FaBars className="inline mr-2 text-xl" />,
    task: "Optimize Python code performance using profiling and optimization techniques",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/4");
      return { files };
    },
  },
  {
    label: "5. Machine Learning Basics",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    task: "Implement basic machine learning algorithms using scikit-learn",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/5");
      return { files };
    },
  },
  {
    label: "6. Web Framework Development",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    task: "Build web applications using Flask or Django",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/6");
      return { files };
    },
  },
  {
    label: "7. Data Structures and Algorithms",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    task: "Implement advanced data structures and algorithms",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/7");
      return { files };
    },
  },
  {
    label: "8. Testing and Test-Driven Development",
    icon: <FaList className="inline mr-2 text-xl" />,
    task: "Write comprehensive tests using unittest and pytest",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/8");
      return { files };
    },
  },
  {
    label: "9. Package Development",
    icon: <FaImage className="inline mr-2 text-xl" />,
    task: "Create and distribute Python packages",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/9");
      return { files };
    },
  },
  {
    label: "10. Advanced Data Science",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    task: "Perform advanced data science tasks with NumPy, Pandas, and Matplotlib",
    onClick: async () => {
      const files = await loadExerciseFiles("hard/10");
      return { files };
    },
  },
];

const sandboxFiles = {
  "script.py":
    '# Write your Python code here\nprint("Hello, Python!")\n\n# Complete the exercise requirements below\n',
  "tests.py": "# Test file will be loaded based on selected exercise",
};

export default function PythonMonacoExercisePlatform() {
  const [menu, setMenu] = useState(basicMenu);
  const [task, setTask] = useState(basicMenu[0].task);

  const setSidebarContent = (event) => {
    const value = event.target.value.toLowerCase();
    switch (value) {
      case "basic":
        setMenu(basicMenu);
        setTask(basicMenu[0].task);
        break;
      case "intermediate":
        setMenu(intermediateMenu);
        setTask(intermediateMenu[0].task);
        break;
      case "hard":
        setMenu(hardMenu);
        setTask(hardMenu[0].task);
        break;
    }
  };

  return (
    <MonacoTestPlatform
      menuItems={menu}
      files={sandboxFiles}
      filesOpened="script.py"
      setSidebarContent={setSidebarContent}
      title="Python"
      language="python"
      task={task}
    />
  );
}
