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
        const response = await fetch(`/exercise/css/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'style.css': `/* CSS Exercise Workspace
Write your CSS code here */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    text-align: center;
}

/* Complete the exercise requirements below: */

`,
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'style.css': '/* Write your CSS code here */\nbody { font-family: Arial, sans-serif; }',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. CSS Selectors and Properties",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Learn basic CSS selectors (element, class, ID) and apply fundamental styling properties like color, background-color, width, height.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Colors and Typography",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Style text with colors (hex, rgb, hsl), fonts (font-family, font-size, font-weight), and typography properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Box Model",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Understand and apply margin, padding, border, and content properties. Practice box-sizing property.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Layout with Display",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Use display properties (block, inline, inline-block, none) to control element layout behavior.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Positioning Elements",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Position elements using static, relative, absolute, and fixed positioning with top, right, bottom, left properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Backgrounds and Borders",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Apply background images, colors, gradients, and border styles (solid, dashed, dotted) to elements.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Basic Responsive Design",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create responsive layouts using media queries, flexible units (%, em, rem), and max-width properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. CSS Pseudo-classes",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Use pseudo-classes like :hover, :focus, :active, :first-child, and :nth-child for interactive styling.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. CSS Units and Values",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Work with different CSS units: pixels (px), em, rem, percentages (%), viewport units (vh, vw).",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. CSS Inheritance and Specificity",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Understand CSS inheritance, specificity rules, and the cascade. Use !important appropriately.",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Flexbox Layout",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master flexbox for one-dimensional layouts with justify-content, align-items, flex-direction, and flex properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. CSS Grid Layout",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create complex two-dimensional layouts using CSS Grid with grid-template-columns, grid-template-rows, and grid-area.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. CSS Animations",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create smooth animations using @keyframes, animation properties, and CSS transitions.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. CSS Transforms",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Apply 2D and 3D transformations using translate, rotate, scale, and skew functions.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Advanced Selectors",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Use complex selectors including attribute selectors, combinators (>, +, ~), and advanced pseudo-selectors.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. CSS Variables and Custom Properties",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Create and use CSS custom properties (variables) for maintainable and dynamic styling.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. CSS Filters and Effects",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Apply visual effects using CSS filters (blur, brightness, contrast) and backdrop-filter property.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Advanced Typography",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Master advanced typography with line-height, letter-spacing, text-shadow, and web fonts.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. CSS Clipping and Masking",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Create complex shapes and effects using clip-path, mask, and shape-outside properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Responsive Images and Media",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Implement responsive images with srcset, picture element, and object-fit properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced CSS Grid",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Master complex grid layouts with subgrid, grid-template-areas, and advanced grid techniques for complex layouts.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. CSS Houdini and Paint API",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Explore CSS Houdini for custom paint worklets and properties to create unique visual effects.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Advanced Animations",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create complex animations with timing functions, animation orchestration, and performance optimization.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. CSS Container Queries",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Implement container queries for component-based responsive design using @container rules.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Modern CSS Features",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Use cutting-edge CSS features like :has(), cascade layers (@layer), and CSS logical properties.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. CSS Architecture and Methodologies",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Implement CSS methodologies like BEM, SMACSS, and CSS-in-JS for scalable architecture.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Performance Optimization",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Optimize CSS for performance with critical CSS, CSS containment, and efficient selector strategies.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. CSS for Complex UI Patterns",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Build complex UI patterns like carousels, accordions, and modal dialogs using only CSS.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. CSS Math Functions",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Use CSS math functions (calc, min, max, clamp) for dynamic and responsive calculations.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. CSS Preprocessing and PostCSS",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Master CSS preprocessing with Sass/SCSS and PostCSS for advanced CSS development workflows.",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'style.css': `/* CSS Exercise Workspace
Write your CSS code here */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    text-align: center;
}

/* Complete the exercise requirements below: */

`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function CssExerciseMonacoPlatform() {
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
            filesOpened="style.css"
            setSidebarContent={setSidebarContent}
            title="CSS"
            language="css"
            task={task}
        />
    );
}