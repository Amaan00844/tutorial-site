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

const handleOnChange = async (level) => {
    try {
        // Monaco sandbox integration
        if (window.monacoSandbox && window.monacoSandbox.applyFsDiff) {
            const response = await fetch(`/exercise/java/${level}/tests.js`);
            if (!response.ok) throw new Error("Failed to fetch test file");

            const testContent = await response.text();

            await window.monacoSandbox.applyFsDiff({
                destroy: ['tests.js'],
                create: {
                    'tests.js': testContent,
                },
            });

            console.log("Monaco sandbox updated with new test file");
        } else {
            console.warn("Monaco sandbox not available");
        }

    } catch (error) {
        console.error("Error during Monaco sandbox setup:", error);
    }
};

// Basic Java structure for exercises
const sandboxFiles = {
    'Main.java': `// Java Exercise Workspace
// Write your Java code here

public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Java Programming!");
        
        // Complete the exercise requirements below:
        
    }
}`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

const sandboxFilesOpened = "Main.java";

const basicMenu = [
    {
        label: "1. Java Basics and Syntax",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/1"),
        task: "Learn Java syntax, variables, and basic program structure.",
    },
    {
        label: "2. Data Types and Variables",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/2"),
        task: "Work with Java primitive and reference data types.",
    },
    {
        label: "3. Control Structures",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/3"),
        task: "Implement if-else statements, loops, and switch cases.",
    },
    {
        label: "4. Methods and Functions",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/4"),
        task: "Create and use methods with parameters and return values.",
    },
    {
        label: "5. Arrays and Collections",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/5"),
        task: "Work with arrays and basic collection classes.",
    },
    {
        label: "6. Object-Oriented Programming",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/6"),
        task: "Create classes, objects, and understand encapsulation.",
    },
    {
        label: "7. Inheritance and Polymorphism",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/7"),
        task: "Implement inheritance and polymorphism concepts.",
    },
    {
        label: "8. Exception Handling",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/8"),
        task: "Handle exceptions using try-catch-finally blocks.",
    },
    {
        label: "9. String Manipulation",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/9"),
        task: "Work with String class and string manipulation methods.",
    },
    {
        label: "10. File I/O Operations",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/10"),
        task: "Read from and write to files using Java I/O classes.",
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced OOP Concepts",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/1"),
        task: "Master abstract classes, interfaces, and design patterns.",
    },
    {
        label: "2. Collections Framework",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/2"),
        task: "Use advanced collections like HashMap, TreeSet, and LinkedList.",
    },
    {
        label: "3. Generics and Type Safety",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/3"),
        task: "Implement generics for type-safe programming.",
    },
    {
        label: "4. Multithreading",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/4"),
        task: "Create and manage threads for concurrent programming.",
    },
    {
        label: "5. Lambda Expressions",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/5"),
        task: "Use lambda expressions and functional programming concepts.",
    },
    {
        label: "6. Stream API",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/6"),
        task: "Process data with Java 8 Stream API and functional operations.",
    },
    {
        label: "7. Annotations and Reflection",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/7"),
        task: "Create custom annotations and use reflection API.",
    },
    {
        label: "8. Database Connectivity (JDBC)",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/8"),
        task: "Connect to databases using JDBC and perform operations.",
    },
    {
        label: "9. Unit Testing with JUnit",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/9"),
        task: "Write comprehensive unit tests using JUnit framework.",
    },
    {
        label: "10. Networking and Sockets",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/10"),
        task: "Implement network communication using sockets and HTTP.",
    },
];

const hardMenu = [
    {
        label: "1. Advanced Concurrency",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/1"),
        task: "Master advanced concurrency patterns and thread pools.",
    },
    {
        label: "2. JVM and Memory Management",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/2"),
        task: "Understand JVM internals and memory optimization.",
    },
    {
        label: "3. Design Patterns",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/3"),
        task: "Implement common design patterns in Java.",
    },
    {
        label: "4. Reflection and Annotations",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/4"),
        task: "Use advanced reflection API and create custom annotations.",
    },
    {
        label: "5. Performance Optimization",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/5"),
        task: "Optimize Java applications for performance and scalability.",
    },
    {
        label: "6. Spring Framework Integration",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/6"),
        task: "Build enterprise applications with Spring Framework.",
    },
    {
        label: "7. Reactive Programming",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/7"),
        task: "Implement reactive programming patterns with RxJava.",
    },
    {
        label: "8. Security Implementation",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/8"),
        task: "Implement security measures and cryptographic operations.",
    },
    {
        label: "9. Build Tools and Maven",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/9"),
        task: "Manage projects with Maven and implement build automation.",
    },
    {
        label: "10. Microservices with Java",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/10"),
        task: "Design and implement microservices architecture in Java.",
    },
];

export default function JavaExerciseMonacoPlatform() {
    const [menu, setMenu] = useState(basicMenu);
    const [task, setTask] = useState(basicMenu[0].task);

    const setSidebarContent = (event) => {
        const value = event.target.value.toLowerCase();
        switch (value) {
            case 'basic':
                setMenu(basicMenu);
                setTask(basicMenu[0].task);
                handleOnChange("basic/1");
                break;
            case 'intermediate':
                setMenu(intermediateMenu);
                setTask(intermediateMenu[0].task);
                handleOnChange("intermediate/1");
                break;
            case 'hard':
                setMenu(hardMenu);
                setTask(hardMenu[0].task);
                handleOnChange("hard/1");
                break;
        }
    };

    return (
        <MonacoTestPlatform
            menuItems={menu}
            files={sandboxFiles}
            filesOpened={sandboxFilesOpened}
            setSidebarContent={setSidebarContent}
            title="Java"
            language="java"
            task={task}
            hideExplorer={false}
        />
    );
}