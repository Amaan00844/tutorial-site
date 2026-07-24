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
import { PHPSandbox } from "@/components/MonacoSandboxes";

const basicMenu = [
    {
        label: "1. PHP Basics and Syntax",
        icon: <FaCode className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "1",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Basic PHP syntax\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "2. Variables and Data Types",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "2",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Work with variables and data types\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "3. Control Structures",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "3",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Use if, else, switch statements\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "4. Functions and Scope",
        icon: <FaBars className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "4",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Create and use functions\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "5. Arrays and Associative Arrays",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "5",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Work with arrays\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "6. String Manipulation",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "6",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Manipulate strings\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "7. Form Handling",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "7",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Handle form data\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "8. File Operations",
        icon: <FaList className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "8",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Read and write files\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "9. Include and Require",
        icon: <FaImage className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "9",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Use include and require\n\n?>\n',
            'tests.js': null
        }
    },
    {
        label: "10. Error Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "10",
        files: {
            'index.php': '<?php\n// Write your PHP code here\n// Example: Handle errors\n\n?>\n',
            'tests.js': null
        }
    },
];

export default function PHPExercisePlatform() {
    const [currentMenu, setCurrentMenu] = useState(basicMenu);
    const [selectedExercise, setSelectedExercise] = useState(basicMenu[0]);
    const [currentFiles, setCurrentFiles] = useState(basicMenu[0].files);

    const setSidebarContent = (event) => {
        const value = event.target.value.toLowerCase();
        let newMenu = basicMenu; // Only basic for now
        setCurrentMenu(newMenu);
        setSelectedExercise(newMenu[0]);
        loadExerciseFiles(newMenu[0]);
    };

    const loadExerciseFiles = async (exercise) => {
        try {
            // Load test file from public directory
            const testResponse = await fetch(`/exercise/php/${exercise.level}/${exercise.exercise}/tests.js`);
            const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
            
            const files = {
                ...exercise.files,
                'tests.js': testContent
            };
            
            setCurrentFiles(files);
        } catch (error) {
            console.error('Error loading exercise files:', error);
            setCurrentFiles(exercise.files);
        }
    };

    const handleExerciseSelect = (exercise) => {
        setSelectedExercise(exercise);
        loadExerciseFiles(exercise);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-100 border-r overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">🐘 PHP Exercises</h2>
                    
                    {/* Level Selector */}
                    <select 
                        onChange={setSidebarContent}
                        className="w-full mb-4 p-2 border rounded"
                    >
                        <option value="basic">Basic</option>
                    </select>

                    {/* Exercise List */}
                    <div className="space-y-2">
                        {currentMenu.map((exercise, index) => (
                            <button
                                key={index}
                                onClick={() => handleExerciseSelect(exercise)}
                                className={`w-full text-left p-3 rounded transition-colors ${
                                    selectedExercise === exercise 
                                        ? 'bg-blue-500 text-white' 
                                        : 'bg-white hover:bg-gray-50'
                                }`}
                            >
                                {exercise.icon}
                                <span className="text-sm">{exercise.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <PHPSandbox
                    filesObj={currentFiles}
                    fileToOpen="index.php"
                    hideExplorer={false}
                />
            </div>
        </div>
    );
}