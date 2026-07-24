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
        const response = await fetch(`/exercise/php/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'index.php': `<?php
// PHP Exercise Workspace
// Write your PHP code here

echo "<h1>Welcome to PHP Programming!</h1>";

// Complete the exercise requirements below:

?>`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'index.php': '<?php\n// Write your PHP code here\necho "Hello, PHP!";\n?>',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. PHP Basics and Syntax",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn PHP syntax, variables, and basic program structure.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Variables and Data Types",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Work with PHP variables and different data types.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Control Structures",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement if-else statements, loops, and switch cases in PHP.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Functions and Scope",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create and use functions with parameters and return values.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Arrays and Associative Arrays",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Work with indexed and associative arrays in PHP.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. String Manipulation",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use PHP string functions for text processing.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Form Handling",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Handle HTML forms using GET and POST methods.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. File Operations",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Read from and write to files using PHP file functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Include and Require",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Organize code using include, require, and their variants.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Error Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Handle errors and exceptions in PHP applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Object-Oriented PHP",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create classes, objects, and implement OOP concepts in PHP.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Database Connectivity",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Connect to databases using PDO and MySQLi.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Session Management",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Manage user sessions and cookies in PHP.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Regular Expressions",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Use regular expressions for pattern matching and validation.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. JSON and API Development",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Work with JSON data and create RESTful APIs.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Templating Engines",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use templating engines like Twig or Blade for view rendering.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Authentication Systems",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement user authentication with password hashing.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. File Upload Security",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Handle file uploads securely with validation and storage.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Caching Mechanisms",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement caching with Memcached or Redis for performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Email Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Send emails using PHPMailer or similar libraries.",
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
        task: "Implement design patterns and advanced OOP concepts.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Framework Development",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Build applications using PHP frameworks like Laravel or Symfony.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Performance Optimization",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Optimize PHP applications for performance and scalability.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Security Best Practices",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement security measures and prevent common vulnerabilities.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Testing and Deployment",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Write tests and deploy PHP applications to production.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Microservices with PHP",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Design and implement microservices using PHP.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Advanced Database Queries",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Write complex SQL queries and optimize database interactions.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. API Rate Limiting",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement rate limiting for APIs to ensure scalability.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Websockets in PHP",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Build real-time applications using PHP WebSocket libraries.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Monitoring and Logging",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Set up monitoring and logging for PHP applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'index.php': `<?php
// PHP Exercise Workspace
// Write your PHP code here

echo "<h1>Welcome to PHP Programming!</h1>";

// Complete the exercise requirements below:

?>`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function PhpExerciseMonacoPlatform() {
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
            filesOpened="index.php"
            setSidebarContent={setSidebarContent}
            title="PHP"
            language="php"
            task={task}
        />
    );
}