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
        const response = await fetch(`/exercise/express/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'app.js': `// Express.js Exercise Workspace
// Write your Express.js code here

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Express.js!' });
});

// Complete the exercise requirements below:

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});

module.exports = app;`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'app.js': '// Write your Express.js code here\nconst express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n    res.send("Hello Express!");\n});\n\napp.listen(3000);',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. Express Setup and Basic Routes",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Set up Express server with basic GET routes and middleware.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Route Parameters and Query Strings",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Handle route parameters and query strings in Express routes.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Middleware Functions",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create and use custom middleware functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. POST Requests and Body Parsing",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Handle POST requests and parse request bodies.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Error Handling",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Implement error handling middleware and error responses.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Static Files and Templates",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Serve static files and render templates.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Sessions and Cookies",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Manage user sessions and cookies in Express.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Database Integration",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Connect Express to databases and perform CRUD operations.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Authentication and Authorization",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement user authentication and authorization.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. RESTful API Design",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Build RESTful APIs following best practices.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced Middleware Patterns",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create complex middleware chains and patterns.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. API Validation and Sanitization",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Validate and sanitize API inputs using middleware.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Rate Limiting and Security",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement rate limiting and security best practices.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. WebSocket Integration",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Add real-time communication with WebSockets.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Testing Express Applications",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Write comprehensive tests for Express applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. File Upload Handling",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Handle file uploads with multer and storage options.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Caching Strategies",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement caching with Redis and memory caching.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. GraphQL Integration",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Integrate GraphQL with Express using Apollo Server.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Logging and Monitoring",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement comprehensive logging and application monitoring.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. API Documentation",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Generate API documentation with Swagger/OpenAPI.",
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
        task: "Design and implement microservices with Express.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Performance Optimization",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Optimize Express applications for high performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Advanced Security Implementation",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement advanced security measures and OWASP guidelines.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Scalability and Load Balancing",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Design scalable Express applications with load balancing.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Production Deployment",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Deploy Express applications to production environments.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Custom Framework Development",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Build custom middleware frameworks on top of Express.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Advanced Database Patterns",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement complex database patterns and ORM optimization.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Event-Driven Architecture",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Build event-driven systems with message queues.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Container Orchestration",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Deploy Express apps with Docker and Kubernetes.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Advanced Testing Strategies",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement comprehensive testing with load and integration tests.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'app.js': `// Express.js Exercise Workspace
// Write your Express.js code here

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Express.js!' });
});

// Complete the exercise requirements below:

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});

module.exports = app;`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function ExpressExerciseMonacoPlatform() {
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
            title="Express.js"
            language="express"
            task={task}
        />
    );
}