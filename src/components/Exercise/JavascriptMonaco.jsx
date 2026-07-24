"use client"

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
            'script.js': `// JavaScript Exercise Workspace
// Write your JavaScript code here

console.log('Welcome to JavaScript Programming!');

// Complete the exercise requirements below:

`,
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
        task: "Create variables using let, const, and var. Work with string, number, boolean, null, and undefined data types.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Basic Arithmetic Operations",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Perform arithmetic operations (+, -, *, /, %, **) and understand operator precedence and type coercion.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Functions and Parameters",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create function declarations, expressions, and arrow functions with parameters, default values, and return statements.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Conditional Statements",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Use if, else if, else statements, ternary operator, and switch cases for conditional logic.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Loops and Iteration",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Implement for loops, while loops, do-while loops, for...in, and for...of loops for iteration.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Arrays and Basic Methods",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Work with arrays using push, pop, shift, unshift, slice, splice, and basic array manipulation.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Objects and Properties",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create objects, access properties with dot and bracket notation, and understand object methods.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. String Methods and Manipulation",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use string methods like split, join, substring, slice, replace, and string template literals.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. DOM Manipulation Basics",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Select DOM elements with getElementById, querySelector, modify content with innerHTML and textContent.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Event Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Add event listeners for click, submit, change events and understand event object and preventDefault.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Closures and Scope",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Understand lexical scope, closures, and how they work with function scope and block scope.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Higher-Order Functions",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create functions that accept other functions as arguments or return functions (callbacks, function composition).",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Array Methods (Map, Filter, Reduce)",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Master functional array methods like map, filter, reduce, forEach, find, and some/every.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Promises and Async/Await",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Handle asynchronous operations with Promises, async/await, and understand Promise.all and Promise.race.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Object-Oriented Programming",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Create classes, constructors, inheritance with extends, and understand prototypes and this binding.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Destructuring and Spread",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use array and object destructuring, spread operator, and rest parameters for cleaner code.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Modules and Imports",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Use ES6 modules with import/export statements, default exports, and named exports.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Regular Expressions",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Create and use regular expressions for pattern matching, validation, and string manipulation.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Error Handling and Debugging",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement try-catch-finally blocks, create custom Error objects, and use debugging techniques.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Event Delegation and Advanced DOM",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement event delegation, work with event bubbling/capturing, and manipulate DOM efficiently.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced Closures and IIFEs",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master complex closure patterns, module patterns, and Immediately Invoked Function Expressions (IIFEs).",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Functional Programming Patterns",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Implement functional programming concepts like currying, composition, pure functions, and immutability.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Advanced Async Patterns",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Handle complex asynchronous patterns with generators, async iterators, and concurrent operations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Metaprogramming and Proxies",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Use Proxy objects, Reflect API, and symbols for metaprogramming and dynamic behavior.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Design Patterns in JavaScript",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Implement design patterns like Observer, Factory, Singleton, Module, and Decorator patterns.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Performance Optimization",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Optimize JavaScript performance with debouncing, throttling, memoization, and memory management.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Web APIs and Browser Features",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Use modern Web APIs like Fetch, Web Workers, Service Workers, and Intersection Observer.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Advanced Regular Expressions",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Master complex regex patterns with lookaheads, lookbehinds, capturing groups, and advanced flags.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Memory Management and Debugging",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Understand memory leaks, garbage collection, and advanced debugging with DevTools profiling.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Build Tools and Testing",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Set up build processes with Webpack/Vite and implement testing with Jest/Vitest.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'script.js': `// JavaScript Exercise Workspace
// Write your JavaScript code here

console.log('Welcome to JavaScript Programming!');

// Complete the exercise requirements below:

`,
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