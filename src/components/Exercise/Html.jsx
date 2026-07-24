"use client"

import {
    FaRegFileAlt, FaHeading, FaParagraph, FaLink, FaListUl, FaTable, FaCheckSquare, FaCode, FaHtml5, FaVolumeUp, FaBars, FaSearch, FaUniversalAccess, FaWindowMaximize, FaImage, FaShieldAlt, FaList
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

        const response = await fetch(`/exercise/html/${level}/tests.js`);
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
    { label: "1. Create Basic Page", icon: <FaRegFileAlt className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/1"), task: `Task: Create a basic HTML page with a title "My First Page" and a visible heading that says "Welcome to My Website"` },
    { label: "2. Add Headings", icon: <FaHeading className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/2") },
    { label: "3. Add Paragraphs", icon: <FaParagraph className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/3") },
    { label: "4. Create a Link", icon: <FaLink className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/4") },
    { label: "5. Insert an Image", icon: <FaImage className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/5") },
    { label: "6. Make a List", icon: <FaListUl className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/6") },
    { label: "7. Create a Table", icon: <FaTable className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/7") },
    { label: "8. Use HTML Forms", icon: <FaCheckSquare className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/8") },
    { label: "9. Use Comments", icon: <FaCode className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/9") },
    { label: "10. HTML Boilerplate", icon: <FaHtml5 className="inline mr-2 text-xl" />, onClick: (e) => handleOnChange("basic/10") }
];

const intermediateMenu = [
    {
        label: "1. Use Semantic HTML",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/1"),
    },
    {
        label: "2. Advanced Form Inputs",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/2"),
    },
    {
        label: "3. Embed Multimedia",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/3"),
    },
    {
        label: "4. Create a Navigation Menu",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/4"),
    },
    {
        label: "5. Use Metadata",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/5"),
    },
    {
        label: "6. Implement Accessibility (ARIA)",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/6"),
    },
    {
        label: "7. Use Inline Frames (iframe)",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/7"),
    },
    {
        label: "8. Create Data Lists",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/8"),
    },
    {
        label: "9. Use Figure and Caption",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/9"),
    },
    {
        label: "10. Build a Form with Validation",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("intermediate/10"),
    },
];

const hardMenu = [
    {
        label: "1. Microdata and Schema.org",
        icon: <FaCode className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/1"),
    },
    {
        label: "2. Custom Form Validation",
        icon: <FaCheckSquare className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/2"),
    },
    {
        label: "3. Advanced Multimedia with Tracks",
        icon: <FaVolumeUp className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/3"),
    },
    {
        label: "4. Responsive Navigation with Off-Canvas",
        icon: <FaBars className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/4"),
    },
    {
        label: "5. Advanced Metadata for SEO",
        icon: <FaSearch className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/5"),
    },
    {
        label: "6. Advanced ARIA for Dynamic Content",
        icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/6"),
    },
    {
        label: "7. Secure Iframes with Sandbox",
        icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/7"),
    },
    {
        label: "8. Dynamic Data Lists with Autocomplete",
        icon: <FaList className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/8"),
    },
    {
        label: "9. Responsive Figures with Picture Element",
        icon: <FaImage className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/9"),
    },
    {
        label: "10. Form Validation with Constraint API",
        icon: <FaShieldAlt className="inline mr-2 text-xl" />,
        onClick: (e) => handleOnChange("hard/10"),
    },
];


const sandboxFiles = {
    'index.html': '',
    'package.json': `{
  "name": "code4bharat-trybox",
  "stackblitz": {
    "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
  },
  "dependencies": {
    "cheerio": "^1.0.0",
    "htmlhint": "^1.1.4",
    "servor": "^4.0.2"
  }
}`}
const sandboxFilesOpened = "index.html"

export default function HtmlExercisePlatform() {
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
            title={"HTML"}
            task={task}
        />
    );
}

