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
        const response = await fetch(`/exercise/react/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'App.jsx': 'import React, { useState } from \'react\';\n\n// Write your React code here\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n      {/* Complete the exercise requirements below */}\n    </div>\n  );\n}\n\nexport default App;',
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'App.jsx': 'import React from \'react\';\n\nfunction App() {\n  return <div><h1>Hello, React!</h1></div>;\n}\n\nexport default App;',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. JSX and Components",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create functional components using JSX syntax and understand component structure",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Props and Data Flow",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Pass data between components using props and understand one-way data flow",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. State with useState",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Manage component state using the useState hook",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Event Handling",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Handle user interactions with onClick, onChange, and other event handlers",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Conditional Rendering",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Render components conditionally using ternary operators and logical AND",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Lists and Keys",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Render lists of data using map() and understand the importance of keys",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Forms and Controlled Components",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create forms with controlled inputs and handle form submission",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. useEffect Hook",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use useEffect for side effects, data fetching, and cleanup",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Component Lifecycle",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Understand component mounting, updating, and unmounting phases",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Basic Styling",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Style React components using CSS modules, inline styles, and className",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Custom Hooks",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create and use custom hooks to share stateful logic between components",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Context API",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Use React Context to share data across component tree without prop drilling",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. useReducer Hook",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Manage complex state logic using useReducer hook",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. React Router",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement client-side routing with React Router",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. API Integration",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Fetch data from APIs and handle loading states and errors",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Performance Optimization",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Optimize React apps using React.memo, useMemo, and useCallback",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Error Boundaries",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement error boundaries to catch and handle component errors",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Higher-Order Components",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Create and use Higher-Order Components (HOCs) for code reuse",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Refs and DOM Access",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Use useRef to access DOM elements and store mutable values",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Testing Components",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Write unit tests for React components using Jest and React Testing Library",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced State Management",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Implement complex state management patterns with Redux or Zustand",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Server-Side Rendering",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Implement SSR with Next.js and understand hydration",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Micro-frontends",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Build micro-frontend architecture with module federation",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. Advanced Patterns",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement advanced React patterns like Render Props and Compound Components",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Performance Profiling",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Profile and optimize React app performance using React DevTools",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Concurrent Features",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use React 18 concurrent features like Suspense and Transitions",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Build Tools Integration",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Configure Webpack, Vite, and other build tools for React projects",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. TypeScript Integration",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Build type-safe React applications with TypeScript",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Advanced Testing",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Implement E2E testing, visual regression testing, and performance testing",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. React Native",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Build mobile applications using React Native",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'App.jsx': 'import React, { useState } from \'react\';\n\n// Write your React code here\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n      {/* Complete the exercise requirements below */}\n    </div>\n  );\n}\n\nexport default App;',
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function ReactMonacoExercisePlatform() {
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
            filesOpened="App.jsx"
            setSidebarContent={setSidebarContent}
            title="React"
            language="react"
            task={task}
        />
    );
}