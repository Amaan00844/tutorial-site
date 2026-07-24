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
        const response = await fetch(`/exercise/javascript/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'script.js': '// Write your JavaScript code here\nconsole.log("Hello, JavaScript!");\n\n// Complete the exercise requirements below\n',
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'script.js': '// Write your JavaScript code here\nconsole.log("Hello, JavaScript!");',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. Variables and Data Types",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create variables using let, const, and var. Work with strings, numbers, booleans, and arrays.",
        onClick: async (e) => {
            const files = await loadExerciseFiles("basic/1");
            return files;
        },
        files: null
    },
    {
        label: "2. Functions and Scope",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create functions using function declarations, expressions, and arrow functions. Understand scope.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Conditional Statements",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Use if, else if, else statements and switch cases for conditional logic.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Loops and Iteration",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Master for loops, while loops, and array iteration methods like forEach.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Arrays and Methods",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Work with arrays using push, pop, slice, splice, map, filter, and reduce methods.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Objects and Properties",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Create and manipulate objects, access properties, and use object methods.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. String Manipulation",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Use string methods like split, join, substring, replace, and template literals.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. DOM Manipulation",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Select and manipulate DOM elements using getElementById, querySelector, and event listeners.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Error Handling",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement try-catch blocks and handle errors gracefully in JavaScript.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Basic Async Programming",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Work with setTimeout, setInterval, and basic Promise concepts.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced Functions",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master closures, higher-order functions, and function composition.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Promises and Async/Await",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Handle asynchronous operations with Promises, async/await, and error handling.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. ES6+ Features",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Use destructuring, spread operator, template literals, and modern JavaScript features.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Classes and Prototypes",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create classes, understand prototypal inheritance, and implement OOP concepts.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Modules and Imports",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Work with ES6 modules, import/export statements, and module bundling concepts.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Fetch API and AJAX",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Make HTTP requests using fetch API and handle JSON data.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Local Storage and Session",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Store and retrieve data using localStorage, sessionStorage, and cookies.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Regular Expressions",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use regular expressions for pattern matching and text validation.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Event Handling Advanced",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Master event delegation, custom events, and advanced DOM manipulation.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Performance Optimization",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Optimize JavaScript performance with debouncing, throttling, and efficient algorithms.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced Async Patterns",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Implement complex async patterns with Promise.all, Promise.race, and async generators.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Design Patterns",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Implement JavaScript design patterns like Singleton, Observer, and Factory.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Memory Management",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Understand memory leaks, garbage collection, and performance profiling.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Web Workers and Threading",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement multi-threading with Web Workers and SharedArrayBuffer.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Advanced DOM APIs",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Use Intersection Observer, Mutation Observer, and other advanced DOM APIs.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Canvas and WebGL",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Create graphics and animations using Canvas API and WebGL.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Service Workers and PWA",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement Service Workers for offline functionality and Progressive Web Apps.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. WebSockets and Real-time",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Build real-time applications using WebSockets and Server-Sent Events.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Testing and Debugging",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Write unit tests, integration tests, and master debugging techniques.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Framework Architecture",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Build a mini JavaScript framework understanding virtual DOM and state management.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'script.js': '// Write your JavaScript code here\nconsole.log("Hello, JavaScript!");\n\n// Complete the exercise requirements below\n',
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function JavaScriptMonacoExercisePlatform() {
    const [menu, setMenu] = useState(basicMenu);
    const [task, setTask] = useState(basicMenu[0].task);

    const setSidebarContent = (event) => {
        const value = event.target.value.toLowerCase();
        switch (value) {
            case 'basic':
                setMenu(basicMenu);
                setTask(basicMenu[0].task);
                break;
            case 'intermediate':
                setMenu(intermediateMenu);
                setTask(intermediateMenu[0].task);
                break;
            case 'hard':
                setMenu(hardMenu);
                setTask(hardMenu[0].task);
                break;
        }
    };

    return (
        <MonacoTestPlatform
            menuItems={menu}
            files={sandboxFiles}
            filesOpened="script.js"
            setSidebarContent={setSidebarContent}
            title="JavaScript"
            language="javascript"
            task={task}
        />
    );
}