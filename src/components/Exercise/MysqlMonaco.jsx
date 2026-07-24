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
        const response = await fetch(`/exercise/mysql/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'query.sql': `-- MySQL Exercise Workspace
-- Write your MySQL queries here

-- Welcome to MySQL Programming!
SELECT 'Hello, MySQL!' AS message;

-- Example: Create database and table
-- CREATE DATABASE IF NOT EXISTS exercise_db;
-- USE exercise_db;

-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     age INT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Complete the exercise requirements below:

`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'query.sql': '-- Write your MySQL queries here\nSELECT "Hello, MySQL!" AS message;',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. MySQL Basics and Connection",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn MySQL basics and establish database connections.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Database and Table Creation",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create databases and tables with proper data types.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. INSERT and Data Entry",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Insert data into MySQL tables using INSERT statements.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. SELECT and Data Retrieval",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Retrieve data using SELECT with various conditions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. UPDATE and DELETE Operations",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Modify and delete data using UPDATE and DELETE.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. WHERE Clause and Filtering",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Filter data using WHERE clause with various operators.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. ORDER BY and LIMIT",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Sort results and limit the number of returned rows.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Aggregate Functions",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use COUNT, SUM, AVG, MIN, MAX functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. GROUP BY and HAVING",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Group data and filter groups using HAVING clause.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Basic JOINs",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Combine data from multiple tables using INNER JOIN.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced JOINs",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master LEFT, RIGHT, FULL OUTER JOINs and self-joins.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Subqueries and Views",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Use subqueries and create views for complex queries.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Stored Procedures",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create and use stored procedures and functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Triggers and Events",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create triggers for automated database operations.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Indexes and Performance",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Create indexes and optimize query performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Transactions and ACID",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use transactions to ensure data consistency and integrity.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Common Table Expressions (CTEs)",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Use CTEs for recursive and complex queries.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Window Functions",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use window functions for advanced data analysis.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Full-Text Search",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement full-text search capabilities in MySQL.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. JSON Data Types",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Work with JSON data types and functions in MySQL.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced Query Optimization",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master query execution plans and optimization techniques.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Replication and Clustering",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Set up MySQL replication and clustering.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Security and User Management",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Implement MySQL security and manage user privileges.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Backup and Recovery",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement backup strategies and disaster recovery.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Performance Tuning",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Advanced MySQL performance tuning and monitoring.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Partitioning Strategies",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Implement table partitioning for large datasets.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. High Availability Setup",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Configure MySQL for high availability and failover.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Custom Storage Engines",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Work with different storage engines and their optimizations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Database Migration",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Plan and execute large-scale database migrations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Advanced Administration",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Master MySQL administration for enterprise environments.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'query.sql': `-- MySQL Exercise Workspace
-- Write your MySQL queries here

-- Welcome to MySQL Programming!
SELECT 'Hello, MySQL!' AS message;

-- Complete the exercise requirements below:

`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function MysqlExerciseMonacoPlatform() {
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
            filesOpened="query.sql"
            setSidebarContent={setSidebarContent}
            title="MySQL"
            language="mysql"
            task={task}
        />
    );
}