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

import sdk from "@stackblitz/sdk"

import QuestionPlatform from "@/components/TestPlatform";

const handleOnChange = async (level) => {
    try {
        const container = document.getElementById("stackblitz-container");
        if (!container) throw new Error("Container element not found");

        const vm = await sdk.connect(container);
        console.log("Connected VM:", vm);

        const response = await fetch(`/exercise/javascript/${level}/tests.js`);
        if (!response.ok) throw new Error("Failed to fetch test file");

        const testContent = await response.text();

        await vm.applyFsDiff({
            destroy: ['tests.test'],
            create: {
                'tests.test': testContent,
            },
        });

        const snapshot = await vm.getFsSnapshot();
        console.log("FS Snapshot:", snapshot);

    } catch (error) {
        console.error("Error during StackBlitz VM setup:", error);
    }

};

const basicMenu = [
    {
        label: "1. Variables and Data Types",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/1"),
    },
    {
        label: "2. Basic Arithmetic Operations",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/2"),
    },
    {
        label: "3. Functions and Parameters",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/3"),
    },
    {
        label: "4. Conditional Statements",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/4"),
    },
    {
        label: "5. Loops and Iteration",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/5"),
    },
    {
        label: "6. Arrays and Basic Methods",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/6"),
    },
    {
        label: "7. DOM Manipulation Basics",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/7"),
    },
    {
        label: "8. Event Listeners",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/8"),
    },
    {
        label: "9. String Methods",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/9"),
    },
    {
        label: "10. Basic Error Handling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/10"),
    },
];

const intermediateMenu = [
    {
        label: "1. Closures and Scope",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/1"),
    },
    {
        label: "2. Higher-Order Functions",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/2"),
    },
    {
        label: "3. Array Methods (Map, Filter, Reduce)",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/3"),
    },
    {
        label: "4. Promises and Async",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/4"),
    },
    {
        label: "5. Object-Oriented Programming",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/5"),
    },
    {
        label: "6. Event Delegation",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/6"),
    },
    {
        label: "7. Modules and Imports",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/7"),
    },
    {
        label: "8. Regular Expressions",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/8"),
    },
    {
        label: "9. Error Handling with Custom Errors",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/9"),
    },
    {
        label: "10. DOM Manipulation with Datasets",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/10"),
    },
];

const hardMenu = [
    {
        label: "1. Advanced Closures and IIFEs",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/1"),
    },
    {
        label: "2. Functional Programming Patterns",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/2"),
    },
    {
        label: "3. Advanced Array Manipulation",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/3"),
    },
    {
        label: "4. Async Patterns and Concurrency",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/4"),
    },
    {
        label: "5. Design Patterns in JavaScript",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/5"),
    },
    {
        label: "6. Advanced Event Handling",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/6"),
    },
    {
        label: "7. Module Bundling and Lazy Loading",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/7"),
    },
    {
        label: "8. Advanced Regular Expressions",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/8"),
    },
    {
        label: "9. Error Handling and Debugging",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/9"),
    },
    {
        label: "10. Web APIs and Performance",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/10"),
    },
];


const sandboxFiles = {
    'script.js': '', 'eslint.config.mjs': `import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
`,
    'package.json': `{
  "name": "code4bharat-trybox",
  "stackblitz": {
    "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
  },
  "dependencies": {
    "eslint": "^9.27.0",
    "globals": "^16.1.0",
    "esprima": "^4.0.1",
    "servor": "^4.0.2"
  }
}

`}
const sandboxFilesOpened = "index.html"

export default function JsExercisePlatform() {
    const [menu, setMenu] = useState(basicMenu);
    const [task, setTask] = useState(menu[0].task)

    const setSidebarContent = (event) => {
        const value = (event.target.value).toLowerCase().toLowerCase();
        switch (value) {
            case 'basic':
                setMenu(basicMenu);
                break;
            case 'intermediate':
                setMenu(intermediateMenu);
                break;
            case 'hard':
                setMenu(hardMenu);
                break;
        }
    };


    return (
        <QuestionPlatform
            menuItems={menu}
            files={sandboxFiles}
            filesOpened={sandboxFilesOpened}
            setSidebarContent={setSidebarContent}
            title={"Javascript"}

        />
    );
}

