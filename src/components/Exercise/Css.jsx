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
import { CSSSandbox } from "@/components/MonacoSandboxes";

const basicMenu = [
    {
        label: "1. CSS Selectors and Properties",
        icon: <FaCode className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "1",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Use selectors and properties */\n\n',
            'tests.js': null
        }
    },
    {
        label: "2. Colors and Typography",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "2",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Style colors and typography */\n\n',
            'tests.js': null
        }
    },
    {
        label: "3. Box Model",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "3",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Work with the box model */\n\n',
            'tests.js': null
        }
    },
    {
        label: "4. Layout with Display",
        icon: <FaBars className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "4",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Use display properties */\n\n',
            'tests.js': null
        }
    },
    {
        label: "5. Positioning Elements",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "5",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Position elements */\n\n',
            'tests.js': null
        }
    },
    {
        label: "6. Backgrounds and Borders",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "6",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Style backgrounds and borders */\n\n',
            'tests.js': null
        }
    },
    {
        label: "7. Basic Responsive Design",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "7",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Create responsive designs */\n\n',
            'tests.js': null
        }
    },
    {
        label: "8. CSS Pseudo-classes",
        icon: <FaList className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "8",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Use pseudo-classes */\n\n',
            'tests.js': null
        }
    },
    {
        label: "9. CSS Units and Values",
        icon: <FaImage className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "9",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Work with units and values */\n\n',
            'tests.js': null
        }
    },
    {
        label: "10. CSS Inheritance",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        level: "basic",
        exercise: "10",
        files: {
            'style.css': '/* Write your CSS code here */\n/* Example: Understand inheritance */\n\n',
            'tests.js': null
        }
    },
];

export default function CSSExercisePlatform() {
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
            const testResponse = await fetch(`/exercise/css/${exercise.level}/${exercise.exercise}/tests.js`);
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
                    <h2 className="text-xl font-bold mb-4">🎨 CSS Exercises</h2>
                    
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
                <CSSSandbox
                    filesObj={currentFiles}
                    fileToOpen="style.css"
                    hideExplorer={false}
                />
            </div>
        </div>
    );
}