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
        const response = await fetch(`/exercise/nodejs/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'app.js': `// Node.js Exercise Workspace
// Write your Node.js code here

console.log('Welcome to Node.js Programming!');

// Complete the exercise requirements below:

`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'app.js': '// Write your Node.js code here\nconsole.log("Hello, Node.js!");',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. Node.js Basics and Modules",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn Node.js basics and understand the module system.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. File System Operations",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Read and write files using the fs module.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. HTTP Server Creation",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create HTTP servers using the built-in http module.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. NPM and Package Management",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Manage packages and dependencies using NPM.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Asynchronous Programming",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Handle asynchronous operations with callbacks, promises, and async/await.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Event Emitters",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Create and use event emitters for event-driven programming.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Streams and Buffers",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Work with streams and buffers for efficient data processing.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Path and URL Modules",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Manipulate file paths and URLs using built-in modules.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Environment Variables",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Manage configuration using environment variables.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Error Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement proper error handling in Node.js applications.",
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
        task: "Build web applications using the Express.js framework.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Database Integration",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Connect to databases using MongoDB, MySQL, or PostgreSQL.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Authentication and Security",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement authentication and security best practices.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. RESTful API Development",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create RESTful APIs with proper HTTP methods and status codes.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Testing Node.js Applications",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Write tests using Jest, Mocha, or other testing frameworks.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Middleware Development",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Create custom middleware for Express.js applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. API Documentation",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Document APIs using tools like Swagger or OpenAPI.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. File Upload Handling",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement file upload functionality with libraries like Multer.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Caching Strategies",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement caching using Redis or in-memory solutions.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Task Scheduling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Schedule tasks using libraries like node-cron.",
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
        task: "Design and implement microservices with Node.js.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Performance Optimization",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Optimize Node.js applications for high performance and scalability.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Clustering and Load Balancing",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement clustering and load balancing for scalable applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Real-time Applications",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Build real-time applications using WebSockets and Socket.io.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Production Deployment",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Deploy Node.js applications to production environments.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Serverless Architecture",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Build serverless applications using AWS Lambda or similar platforms.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Advanced Security Practices",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement advanced security measures like JWT and OAuth.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. GraphQL Implementation",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Create GraphQL APIs with Apollo or similar libraries.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Message Queues",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement message queues using RabbitMQ or similar systems.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Monitoring and Logging",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Set up monitoring and logging for Node.js applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'app.js': `// Node.js Exercise Workspace
// Write your Node.js code here

console.log('Welcome to Node.js Programming!');

// Complete the exercise requirements below:

`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function NodejsExerciseMonacoPlatform() {
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
            filesOpened="app.js"
            setSidebarContent={setSidebarContent}
            title="Node.js"
            language="nodejs"
            task={task}
        />
    );
}