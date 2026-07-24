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
        const response = await fetch(`/exercise/mongodb/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'queries.js': `// MongoDB Exercise Workspace
// Write your MongoDB queries here

// Welcome to MongoDB Programming!
// Use MongoDB shell syntax or Node.js with MongoDB driver

// Example: Connect to database
// const { MongoClient } = require('mongodb');
// const client = new MongoClient('mongodb://localhost:27017');

// Example: Basic operations
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30
});

db.users.find({ age: { $gte: 18 } });

// Complete the exercise requirements below:

`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'queries.js': '// Write your MongoDB queries here\ndb.collection.find({});',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. MongoDB Basics and Connection",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn MongoDB basics and establish database connections.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. CRUD Operations",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Perform Create, Read, Update, Delete operations.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Query Operators",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Use MongoDB query operators for filtering data.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Sorting and Limiting",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Sort query results and limit the number of documents.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Indexing Basics",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Create and use indexes to improve query performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Data Modeling",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Design document schemas and relationships.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Aggregation Framework",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Use aggregation pipelines for data processing.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Text Search",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement text search functionality in MongoDB.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Geospatial Queries",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Work with geospatial data and location-based queries.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Transactions",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Use MongoDB transactions for data consistency.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced Aggregation",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master complex aggregation pipelines and operators.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Performance Optimization",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Optimize MongoDB queries and database performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Replica Sets",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Configure and manage MongoDB replica sets.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Sharding",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement horizontal scaling with sharding.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Security and Authentication",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Secure MongoDB with authentication and authorization.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Backup and Restore",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Implement backup and restore strategies for MongoDB.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Monitoring and Profiling",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Monitor MongoDB performance and profile slow queries.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Schema Validation",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement schema validation rules and data integrity.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. MapReduce Operations",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Use MapReduce for complex data processing tasks.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Time Series Collections",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Work with time series data and specialized collections.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced Schema Design",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Design complex schemas for enterprise applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. MongoDB Atlas and Cloud",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Deploy and manage MongoDB in cloud environments.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Change Streams",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement real-time data processing with change streams.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. GridFS and File Storage",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Store and manage large files using GridFS.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. MongoDB Operations",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Master MongoDB administration and operations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Custom Storage Engines",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Work with custom storage engines and configurations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Multi-Document Transactions",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement complex multi-document ACID transactions.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Global Clusters",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Configure global clusters for worldwide data distribution.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Advanced Security",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement enterprise-grade security and compliance.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Performance Tuning",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Advanced performance tuning and optimization techniques.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'queries.js': `// MongoDB Exercise Workspace
// Write your MongoDB queries here

// Welcome to MongoDB Programming!
// Use MongoDB shell syntax or Node.js with MongoDB driver

// Example: Connect to database
// const { MongoClient } = require('mongodb');
// const client = new MongoClient('mongodb://localhost:27017');

// Example: Basic operations
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30
});

db.users.find({ age: { $gte: 18 } });

// Complete the exercise requirements below:

`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function MongodbExerciseMonacoPlatform() {
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
            filesOpened="queries.js"
            setSidebarContent={setSidebarContent}
            title="MongoDB"
            language="mongodb"
            task={task}
        />
    );
}