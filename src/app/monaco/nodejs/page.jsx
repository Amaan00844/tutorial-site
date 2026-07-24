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
        const response = await fetch(`/exercise/nodejs/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'server.js': '// Write your Node.js code here\nconsole.log("Hello, Node.js!");\n\n// Complete the exercise requirements below\n',
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'server.js': '// Write your Node.js code here\nconsole.log("Hello, Node.js!");',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. Node.js Basics and Modules",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn Node.js fundamentals, require/import modules, and understand the module system",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. File System Operations",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Read, write, and manipulate files using the fs module",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. HTTP Server Creation",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create basic HTTP servers using the http module",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. URL and Query Parameters",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Parse URLs and handle query parameters in Node.js applications",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Working with JSON",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Parse and stringify JSON data in Node.js applications",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Environment Variables",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use environment variables and process.env for configuration",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. NPM and Package Management",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Understand NPM, package.json, and dependency management",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Event Emitters",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Create and use EventEmitter for handling custom events",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Streams and Buffers",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Work with streams and buffers for efficient data handling",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Basic Error Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement error handling patterns in Node.js applications",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Express.js Framework",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Build web applications using the Express.js framework",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Middleware and Routing",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create custom middleware and implement advanced routing",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Database Integration",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Connect to databases using MongoDB, MySQL, or PostgreSQL",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Authentication and JWT",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement user authentication using JWT tokens",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. RESTful API Development",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Build RESTful APIs with proper HTTP methods and status codes",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. File Upload and Processing",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Handle file uploads and process different file types",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. WebSocket Implementation",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create real-time applications using WebSockets",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Caching Strategies",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement caching using Redis and in-memory caching",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Testing with Jest",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Write unit and integration tests for Node.js applications",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Email and Notifications",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Send emails and implement notification systems",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Microservices Architecture",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Design and implement microservices using Node.js",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. GraphQL Implementation",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Build GraphQL APIs with resolvers and schema design",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Performance Optimization",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Optimize Node.js applications for high performance and scalability",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Cluster and Worker Threads",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement clustering and worker threads for CPU-intensive tasks",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Security Best Practices",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Implement security measures including HTTPS, CORS, and input validation",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Docker and Containerization",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Containerize Node.js applications using Docker",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. CI/CD Pipeline",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Set up continuous integration and deployment for Node.js apps",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Monitoring and Logging",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement comprehensive monitoring and logging systems",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Message Queues",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement message queues using RabbitMQ or Apache Kafka",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Serverless Functions",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Deploy Node.js applications as serverless functions",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'server.js': '// Write your Node.js code here\nconsole.log("Hello, Node.js!");\n\n// Complete the exercise requirements below\n',
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function NodeJSMonacoExercisePlatform() {
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
            filesOpened="server.js"
            setSidebarContent={setSidebarContent}
            title="Node.js"
            language="nodejs"
            task={task}
        />
    );
}