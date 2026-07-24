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
        const response = await fetch(`/exercise/html/${level}/tests.js`);
        const testContent = response.ok ? await response.text() : '// Test file not found';
        
        return {
            'index.html': '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>HTML Exercise</title>\n</head>\n<body>\n    <h1>Hello, HTML!</h1>\n    <!-- Complete the exercise requirements below -->\n    \n</body>\n</html>',
            'tests.js': testContent
        };
    } catch (error) {
        console.error("Error loading exercise files:", error);
        return {
            'index.html': '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Exercise</title>\n</head>\n<body>\n    <h1>Hello, HTML!</h1>\n</body>\n</html>',
            'tests.js': '// Test file not available'
        };
    }
};

const basicMenu = [
    {
        label: "1. HTML Document Structure",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create a proper HTML5 document with DOCTYPE, html, head, and body elements",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/1");
            return { files };
        },
    },
    {
        label: "2. Headings and Paragraphs",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Use heading tags (h1-h6) and paragraph tags to structure content",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/2");
            return { files };
        },
    },
    {
        label: "3. Text Formatting",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Apply text formatting using strong, em, mark, small, and other inline elements",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/3");
            return { files };
        },
    },
    {
        label: "4. Lists and Navigation",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Create ordered lists, unordered lists, and navigation menus",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/4");
            return { files };
        },
    },
    {
        label: "5. Links and Anchors",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Create internal and external links using anchor tags and href attributes",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/5");
            return { files };
        },
    },
    {
        label: "6. Images and Media",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Embed images, videos, and audio with proper attributes and accessibility",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/6");
            return { files };
        },
    },
    {
        label: "7. Tables and Data",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create tables with headers, rows, columns, and proper table structure",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/7");
            return { files };
        },
    },
    {
        label: "8. Forms and Input",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Build forms with various input types, labels, and form validation",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/8");
            return { files };
        },
    },
    {
        label: "9. Semantic HTML5",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Use semantic HTML5 elements like header, nav, main, section, article, footer",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/9");
            return { files };
        },
    },
    {
        label: "10. Meta Tags and SEO",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Add meta tags for SEO, social media, and responsive design",
        onClick: async () => {
            const files = await loadExerciseFiles("basic/10");
            return { files };
        },
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced Forms",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Create complex forms with fieldsets, validation, and accessibility features",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/1");
            return { files };
        },
    },
    {
        label: "2. Multimedia Integration",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Embed videos, audio, and interactive media with HTML5 elements",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/2");
            return { files };
        },
    },
    {
        label: "3. Canvas and SVG",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create graphics using HTML5 Canvas and inline SVG elements",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/3");
            return { files };
        },
    },
    {
        label: "4. Web Components",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Build custom elements and web components using HTML templates",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/4");
            return { files };
        },
    },
    {
        label: "5. Accessibility (ARIA)",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Implement ARIA attributes and accessibility best practices",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/5");
            return { files };
        },
    },
    {
        label: "6. Progressive Enhancement",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Build progressively enhanced HTML that works without JavaScript",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/6");
            return { files };
        },
    },
    {
        label: "7. Microdata and Schema",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Add structured data using microdata and Schema.org markup",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/7");
            return { files };
        },
    },
    {
        label: "8. Performance Optimization",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Optimize HTML for performance with lazy loading and resource hints",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/8");
            return { files };
        },
    },
    {
        label: "9. Email HTML Templates",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Create HTML email templates that work across different email clients",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/9");
            return { files };
        },
    },
    {
        label: "10. Print Stylesheets",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Create print-friendly HTML with proper print media queries",
        onClick: async () => {
            const files = await loadExerciseFiles("intermediate/10");
            return { files };
        },
    },
];

const hardMenu = [
    {
        label: "1. Advanced Web Components",
        icon: <FaCode className="inline mr-2 text-xl" />,
        task: "Build complex web components with Shadow DOM and custom elements",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/1");
            return { files };
        },
    },
    {
        label: "2. PWA Manifest",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        task: "Create Progressive Web App manifests and service worker integration",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/2");
            return { files };
        },
    },
    {
        label: "3. Advanced Canvas",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        task: "Create complex graphics and animations using HTML5 Canvas API",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/3");
            return { files };
        },
    },
    {
        label: "4. WebGL Integration",
        icon: <FaBars className="inline mr-2 text-xl" />,
        task: "Integrate WebGL for 3D graphics and advanced visual effects",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/4");
            return { files };
        },
    },
    {
        label: "5. Web APIs Integration",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        task: "Use modern Web APIs like Geolocation, Camera, and File System",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/5");
            return { files };
        },
    },
    {
        label: "6. Advanced SEO",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        task: "Implement advanced SEO techniques with structured data and meta tags",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/6");
            return { files };
        },
    },
    {
        label: "7. Internationalization",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        task: "Create multilingual HTML with proper i18n attributes and structure",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/7");
            return { files };
        },
    },
    {
        label: "8. Advanced Accessibility",
        icon: <FaList className="inline mr-2 text-xl" />,
        task: "Implement complex accessibility patterns for dynamic content",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/8");
            return { files };
        },
    },
    {
        label: "9. Performance Auditing",
        icon: <FaImage className="inline mr-2 text-xl" />,
        task: "Audit and optimize HTML for Core Web Vitals and performance metrics",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/9");
            return { files };
        },
    },
    {
        label: "10. HTML Templating",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        task: "Build advanced HTML templating systems and component architectures",
        onClick: async () => {
            const files = await loadExerciseFiles("hard/10");
            return { files };
        },
    },
];

const sandboxFiles = {
    'index.html': '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>HTML Exercise</title>\n</head>\n<body>\n    <h1>Hello, HTML!</h1>\n    <!-- Complete the exercise requirements below -->\n    \n</body>\n</html>',
    'tests.js': '// Test file will be loaded based on selected exercise'
};

export default function HTMLMonacoExercisePlatform() {
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
            filesOpened="index.html"
            setSidebarContent={setSidebarContent}
            title="HTML"
            language="html"
            task={task}
        />
    );
}