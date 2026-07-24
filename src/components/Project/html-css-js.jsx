// @/components/Project/html-css-js-single-file.js
"use client"
import { FaFileAlt, FaHeading, FaListUl, FaTable, FaLink, FaImage, FaWindowMaximize, FaShieldAlt, FaCode } from "react-icons/fa";
import { useState } from "react";
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

const handleOnChange = async (level) => {
    try {
        // Monaco sandbox integration
        if (window.monacoSandbox && window.monacoSandbox.applyFsDiff) {
            const response = await fetch(`/projects/html-css-js/${level}/tests.js`);
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

// Single HTML file with everything embedded
const sandboxFiles = {
    "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Portfolio</title>
    <style>
        /* Add your CSS styles here */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
        }

        header {
            background: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 1rem 0 0 0;
        }

        nav li {
            display: inline;
            margin: 0 1rem;
        }

        nav a {
            color: white;
            text-decoration: none;
        }

        main {
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
        }

        section {
            margin: 2rem 0;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 3px;
            cursor: pointer;
            margin: 0.5rem;
        }

        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <!-- Add your HTML content here -->
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>This is my bio section where I tell you about myself.</p>
            <img src="https://via.placeholder.com/300x200" alt="Profile picture">
        </section>

        <section id="projects">
            <h2>My Projects</h2>
            <h3>Project 1</h3>
            <p>Description of my first project.</p>
        </section>

        <section id="contact">
            <h2>Contact Me</h2>
            <p>Feel free to reach out!</p>
            <button id="contactBtn">Contact Me</button>
        </section>

        <section id="todo">
            <h2>My To-Do List</h2>
            <ul id="todoList">
                <li>Learn HTML</li>
                <li>Learn CSS</li>
                <li>Learn JavaScript</li>
            </ul>
            <button id="addTask">Add Task</button>
            <button id="removeTask">Remove Task</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>

    <script>
        // Add your JavaScript code here
        document.addEventListener('DOMContentLoaded', function() {
            // Contact button functionality
            const contactBtn = document.getElementById('contactBtn');
            if (contactBtn) {
                contactBtn.addEventListener('click', function() {
                    alert('Thanks for your interest! You can reach me at email@example.com');
                });
            }

            // To-Do List functionality
            const todoList = document.getElementById('todoList');
            const addTaskBtn = document.getElementById('addTask');
            const removeTaskBtn = document.getElementById('removeTask');

            if (addTaskBtn) {
                addTaskBtn.addEventListener('click', function() {
                    const newTask = document.createElement('li');
                    newTask.textContent = 'New Task ' + (todoList.children.length + 1);
                    todoList.appendChild(newTask);
                });
            }

            if (removeTaskBtn) {
                removeTaskBtn.addEventListener('click', function() {
                    const lastTask = todoList.lastElementChild;
                    if (lastTask) {
                        lastTask.remove();
                    }
                });
            }
        });
    </script>
</body>
</html>`,
    "package.json": `{
        "name": "single-html-project",
        "stackblitz": {
            "startCommand": "node tests.test && source ~/.jshrc",
            "installDependencies": false
        },
        "dependencies": {
            "cheerio": "^1.0.0",
            "htmlhint": "^1.1.4",
            "servor": "^4.0.2",
            "express": "^4.18.2",
            "jsdom": "^26.1.0",
            "eslint": "^9.28.0"
        }
    }`
}

const sandboxFilesOpened = "index.html"

const basicMenu = [
    {
        label: "1. Personal Portfolio",
        icon: <FaFileAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/1"),
        task: `**Task:** Create a personal portfolio page in a single HTML file. Include HTML structure, CSS styles in <style> tags, and JavaScript in <script> tags. Add a header, bio section, footer, and a "Contact Me" button that shows an alert when clicked.`,
    },
    {
        label: "2. Styled Blog Post",
        icon: <FaHeading className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/2"),
        task: `**Task:** Build a blog post page in a single HTML file. Include title, headings, paragraphs, and an image. Add CSS styling (center title, margins, colors) and JavaScript to toggle dark mode theme.`,
    },
    {
        label: "3. Interactive To-Do List",
        icon: <FaListUl className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("basic/3"),
        task: `**Task:** Create a to-do list in a single HTML file. Include HTML structure with unordered list, CSS styling (borders, hover effects), and JavaScript to add/remove tasks dynamically.`,
    },
];

const intermediateMenu = [
    {
        label: "1. Responsive Landing Page",
        icon: <FaLink className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/1"),
        task: `**Task:** Build a responsive landing page in a single HTML file. Include navigation bar, hero section, and contact form. Use CSS Flexbox/Grid with media queries for responsiveness. Add JavaScript form validation.`,
    },
    {
        label: "2. Interactive Photo Gallery",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/2"),
        task: `**Task:** Create a photo gallery in a single HTML file. Include HTML grid of images, CSS hover effects and transitions, and JavaScript modal functionality when images are clicked.`,
    },
    {
        label: "3. Dynamic Data Table",
        icon: <FaTable className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/3"),
        task: `**Task:** Build a data table in a single HTML file. Include HTML table structure, CSS styling (alternate row colors), and JavaScript to sort table data by different columns.`,
    },
];

const hardMenu = [
    {
        label: "1. Single Page Application (SPA)",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/1"),
        task: `**Task:** Create an SPA in a single HTML file. Include HTML for multiple "pages", CSS for smooth transitions, and JavaScript routing system to navigate between sections without page reload.`,
    },
    {
        label: "2. Secure Form with Validation",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/2"),
        task: `**Task:** Build a secure form in a single HTML file. Include HTML form elements, CSS for error states and styling, and JavaScript for advanced validation (email, password strength, XSS prevention).`,
    },
    {
        label: "3. Custom Dashboard",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/3"),
        task: `**Task:** Create a dashboard in a single HTML file. Include HTML structure with sidebar and content areas, CSS Grid layout, and JavaScript to fetch and display mock data with interactive charts.`,
    },
];

export default function HtmlCssJsSingleFileProjectPlatform() {
    const [menu, setMenu] = useState(basicMenu);
    const [task, setTask] = useState(menu[0].task)

    const setSidebarContent = (event) => {
        const value = (event.target.value).toLowerCase();
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
            filesOpened={sandboxFilesOpened}
            setSidebarContent={setSidebarContent}
            task={task}
            title={"HTML/CSS/JS "}
            hideExplorer={false}
            language="html"
        />
    );
}