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
        const response = await fetch(`/exercise/sql/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'query.sql': `-- SQL Exercise Workspace
-- Write your SQL queries here

-- Welcome to SQL Programming!
SELECT 'Hello, SQL!' AS message;

-- Complete the exercise requirements below:

`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'query.sql': '-- Write your SQL queries here\nSELECT "Hello, SQL!" AS message;',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. Basic SELECT Statements",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn basic SELECT syntax and retrieve data from tables.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. WHERE Clause and Filtering",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Filter data using WHERE clause with various conditions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. ORDER BY and LIMIT",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Sort results and limit the number of returned rows.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Aggregate Functions",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Use COUNT, SUM, AVG, MIN, MAX functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. GROUP BY and HAVING",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Group data and filter groups using HAVING clause.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. INSERT, UPDATE, DELETE",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Modify data using INSERT, UPDATE, and DELETE statements.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Basic JOINs",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Combine data from multiple tables using INNER JOIN.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. String Functions",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use string manipulation functions like CONCAT, SUBSTRING.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Date and Time Functions",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Work with date and time data types and functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. CREATE TABLE and Constraints",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Create tables with various constraints and data types.",
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
        label: "2. Subqueries and CTEs",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Use subqueries and Common Table Expressions (CTEs).",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Window Functions",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Use ROW_NUMBER, RANK, DENSE_RANK, and other window functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Indexes and Performance",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create indexes and optimize query performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Stored Procedures and Functions",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Create and use stored procedures and user-defined functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Views and Materialized Views",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Create and manage views and materialized views.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Partitioning Tables",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement table partitioning for large datasets.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. JSON Data Handling",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Work with JSON data types and functions in SQL.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Full-Text Search",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement full-text search capabilities in SQL.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Temporary Tables",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Use temporary tables for intermediate data processing.",
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
        label: "2. Triggers and Events",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create triggers for automated database operations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Database Design and Normalization",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Design normalized databases and understand normal forms.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Transactions and Concurrency",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Handle transactions, locks, and concurrency control.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Advanced Data Analysis",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Perform complex data analysis and reporting queries.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Database Replication",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Set up and manage database replication for high availability.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Sharding and Scalability",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement database sharding for scalability.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Advanced Indexing Strategies",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use composite and covering indexes for performance.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Dynamic SQL",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Write dynamic SQL queries for flexible applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Database Security",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement role-based access control and encryption.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'query.sql': `-- SQL Exercise Workspace
-- Write your SQL queries here

-- Welcome to SQL Programming!
SELECT 'Hello, SQL!' AS message;

-- Complete the exercise requirements below:

`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function SqlExerciseMonacoPlatform() {
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
            title="SQL"
            language="sql"
            task={task}
        />
    );
}