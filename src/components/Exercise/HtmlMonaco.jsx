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
            const response = await fetch(`/exercise/html/${level}/tests.js`);
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

// Basic HTML structure for exercises
const sandboxFiles = {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Exercise</title>
</head>
<body>
    <h1>Welcome to HTML Programming!</h1>
    
    <!-- Complete the exercise requirements below: -->
    
</body>
</html>`,
    'tests.js': '// Test file will be loaded based on selected exercise'
};

const sandboxFilesOpened = "index.html";

const basicMenu = [
    {
        label: "1. HTML Document Structure",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/1"),
        task: "Create a basic HTML document with proper structure and DOCTYPE.",
    },
    {
        label: "2. Text Elements and Formatting",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/2"),
        task: "Use headings, paragraphs, and text formatting elements.",
    },
    {
        label: "3. Links and Navigation",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/3"),
        task: "Create links, anchors, and navigation menus.",
    },
    {
        label: "4. Images and Media",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/4"),
        task: "Embed images, videos, and other media elements.",
    },
    {
        label: "5. Lists and Tables",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/5"),
        task: "Create ordered lists, unordered lists, and data tables.",
    },
    {
        label: "6. Forms and Input Elements",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/6"),
        task: "Build forms with various input types and validation.",
    },
    {
        label: "7. Semantic HTML Elements",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/7"),
        task: "Use semantic elements like header, nav, main, section, article.",
    },
    {
        label: "8. HTML Attributes",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/8"),
        task: "Work with HTML attributes like id, class, data attributes.",
    },
    {
        label: "9. Meta Tags and SEO",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/9"),
        task: "Add meta tags for SEO and social media optimization.",
    },
    {
        label: "10. HTML Validation",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/10"),
        task: "Create valid HTML that passes W3C validation standards.",
    },
];

const intermediateMenu = [
    {
        label: "1. Advanced Forms",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/1"),
        task: "Create complex forms with validation and accessibility features.",
    },
    {
        label: "2. HTML5 APIs",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/2"),
        task: "Use HTML5 APIs like Geolocation, Local Storage, and Canvas.",
    },
    {
        label: "3. Accessibility (ARIA)",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/3"),
        task: "Implement ARIA attributes for better accessibility.",
    },
    {
        label: "4. Microdata and Schema",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/4"),
        task: "Add structured data using microdata and Schema.org.",
    },
    {
        label: "5. Progressive Web Apps",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/5"),
        task: "Create PWA manifest and service worker integration.",
    },
    {
        label: "6. Custom Data Attributes",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/6"),
        task: "Work with custom data attributes and dataset API.",
    },
    {
        label: "7. HTML5 Multimedia",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/7"),
        task: "Implement advanced video and audio controls with HTML5.",
    },
    {
        label: "8. Web Storage APIs",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/8"),
        task: "Use localStorage, sessionStorage, and IndexedDB integration.",
    },
    {
        label: "9. Responsive Images",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/9"),
        task: "Implement responsive images with srcset and picture elements.",
    },
    {
        label: "10. Form Validation API",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/10"),
        task: "Use HTML5 constraint validation API and custom validation.",
    },
];

const hardMenu = [
    {
        label: "1. Web Components",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/1"),
        task: "Create custom HTML elements using Web Components.",
    },
    {
        label: "2. Advanced Accessibility",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/2"),
        task: "Implement complex accessibility patterns and screen reader support.",
    },
    {
        label: "3. Performance Optimization",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/3"),
        task: "Optimize HTML for performance with lazy loading and preloading.",
    },
    {
        label: "4. Cross-browser Compatibility",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/4"),
        task: "Ensure HTML works across different browsers and devices.",
    },
    {
        label: "5. HTML Email Templates",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/5"),
        task: "Create HTML email templates that work across email clients.",
    },
    {
        label: "6. Shadow DOM Integration",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/6"),
        task: "Implement Shadow DOM with custom elements and slot distribution.",
    },
    {
        label: "7. Advanced SVG Integration",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/7"),
        task: "Create interactive SVG graphics with HTML integration.",
    },
    {
        label: "8. Web Workers & HTML",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/8"),
        task: "Integrate Web Workers with HTML for background processing.",
    },
    {
        label: "9. Offline-First HTML",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/9"),
        task: "Build offline-capable HTML applications with service workers.",
    },
    {
        label: "10. Advanced HTML Parsing",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/10"),
        task: "Handle complex HTML parsing, sanitization, and DOM manipulation.",
    },
];

export default function HtmlExerciseMonacoPlatform() {
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
            title="HTML"
            language="html"
            task={task}
            hideExplorer={false}
        />
    );
}