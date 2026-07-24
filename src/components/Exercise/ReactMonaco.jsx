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
        const response = await fetch(`/exercise/react/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'App.jsx': `import React from 'react';

// React Exercise Workspace
// Write your React component here

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Programming!</h1>
            
            {/* Complete the exercise requirements below: */}
            
        </div>
    );
}

export default App;`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'App.jsx': 'import React from "react";\n\nfunction App() {\n    return <div><h1>Hello, React!</h1></div>;\n}\n\nexport default App;',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. React Components and JSX",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create React functional components and understand JSX syntax.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Props and Component Communication",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Pass data between components using props.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. State and useState Hook",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Manage component state using the useState hook.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Event Handling",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Handle user interactions and events in React components.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Conditional Rendering",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Render components conditionally based on state or props.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Lists and Keys",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Render lists of data and understand the importance of keys.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Forms and Controlled Components",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create forms with controlled input components.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. useEffect Hook",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Handle side effects and lifecycle events with useEffect.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Component Styling",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Style React components using CSS modules and styled-components.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. React Router Basics",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement client-side routing with React Router.",
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
        task: "Create and use custom React hooks for reusable logic.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Context API",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Manage global state using React Context API.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. useReducer Hook",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Manage complex state logic with useReducer.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Performance Optimization",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Optimize React apps with memo, useMemo, and useCallback.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Error Boundaries",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Handle errors gracefully with React Error Boundaries.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. React Portals",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Use React Portals for rendering components outside the DOM hierarchy.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Lazy Loading Components",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement lazy loading with React Suspense and lazy.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. API Integration",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Fetch and manage data from APIs using fetch or Axios.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Animation in React",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Add animations using libraries like Framer Motion.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Type Checking with PropTypes",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement type checking with PropTypes or TypeScript.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced Patterns",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Implement advanced React patterns like HOCs and render props.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. Server-Side Rendering",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Implement SSR with Next.js or custom solutions.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Testing React Components",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Write comprehensive tests using Jest and React Testing Library.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. State Management Libraries",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Integrate Redux, Zustand, or other state management solutions.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. React Concurrent Features",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Use React 18 concurrent features like Suspense and transitions.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Microfrontends",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Implement microfrontends with React for modular applications.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Advanced Routing",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Implement dynamic routing and nested routes with React Router.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Web Vitals Optimization",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Optimize Core Web Vitals for better performance and SEO.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Custom Renderers",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Create custom renderers for non-browser environments.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. Accessibility (a11y)",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement accessible components with ARIA and best practices.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'App.jsx': `import React from 'react';

// React Exercise Workspace
// Write your React component here

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Programming!</h1>
            
            {/* Complete the exercise requirements below: */}
            
        </div>
    );
}

export default App;`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function ReactExerciseMonacoPlatform() {
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