// @/components/Project/python-single-file.js
"use client";

import {
  FaFileAlt,
  FaHeading,
  FaListUl,
  FaWindowMaximize,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";
import { useState } from "react";
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

const handleOnChange = async (level) => {
  try {
    if (!window.monacoSandbox) {
      console.warn("Monaco sandbox not available");
      return;
    }

    // Fetch all required files
    const [codeResponse, testResponse, instructionsResponse] =
      await Promise.all([
        fetch(`/projects/python/${level}/script.py`),
        fetch(`/projects/python/${level}/tests.js`),
        fetch(`/projects/python/${level}/instructions.md`),
      ]);

    // Get file contents
    const code = codeResponse.ok
      ? await codeResponse.text()
      : "# Code will be loaded when you select an exercise";
    let testContent = testResponse.ok ? await testResponse.text() : "";
    const instructions = instructionsResponse.ok
      ? await instructionsResponse.text()
      : "# Instructions not available";

    // If no test content is available, create a default test wrapper
    

    // Apply filesystem changes
    await window.monacoSandbox.applyFsDiff({
      destroy: ["script.py", "test.js", "instructions.md"],
      create: {
        "script.py": code,
        "test.js": testContent,
        "instructions.md": instructions,
      },
    });

    console.log("Monaco sandbox updated with code, tests, and instructions");
  } catch (error) {
    console.error("Error during Monaco sandbox setup:", error);
  }
};

// Sandbox file structure
const sandboxFiles = {
  "script.py": `# Welcome to Python Projects!
# Select an exercise from the menu to get started.

def main():
    print("Hello! Choose a project from the menu to begin coding.")
    print("Each project includes:")
    print("- Step-by-step instructions")
    print("- Starter code")
    print("- Automated tests")
    print("- Real-time feedback")

if __name__ == "__main__":
    main()
`,
  "test.js": `    "test.js": "function runTest() { try { const code = document.querySelector('[data-path="script.py"]').textContent; return code.includes('def main'); } catch(e) { return false; } }",`,
  "instructions.md": `# Welcome to Python Projects!

Select an exercise from the menu to get started.

Each exercise includes:
- Detailed instructions
- Starter code
- Automated tests
- Real-time feedback`,
};

const sandboxFilesOpened = "script.py";

const basicMenu = [
  {
    label: "1. Calculator App",
    icon: <FaFileAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Create a simple calculator application in Python. Implement functions for addition, subtraction, multiplication, and division. Handle user input and include error handling for invalid inputs (e.g., division by zero).`,
    onClick: (e) => handleOnChange("basic/1"),
  },
  {
    label: "2. File Organizer",
    icon: <FaHeading className="inline mr-2 text-xl" />,
    task: `**Task:** Build a file organizer script using the \`os\` and \`shutil\` modules. Sort files in a directory by their file type (e.g., .txt, .jpg) into separate folders. Handle cases where folders already exist.`,
    onClick: (e) => handleOnChange("basic/2"),
  },
  {
    label: "3. Password Generator",
    icon: <FaListUl className="inline mr-2 text-xl" />,
    task: `**Task:** Create a password generator that allows customization of length and character sets (letters, numbers, symbols). Ensure the generated passwords are random and secure using the \`random\` module.`,
    onClick: (e) => handleOnChange("basic/3"),
  },
];

const intermediateMenu = [
  {
    label: "1. Web Scraper",
    icon: <FaFileAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Build a web scraper using \`requests\` and \`BeautifulSoup\`. Extract data (e.g., titles, links) from a website and save it to a CSV file. Handle HTTP errors and invalid URLs.`,
    onClick: (e) => handleOnChange("intermediate/1"),
  },
  {
    label: "2. REST API with Flask",
    icon: <FaHeading className="inline mr-2 text-xl" />,
    task: `**Task:** Create a REST API using Flask with CRUD operations (Create, Read, Update, Delete) for a resource (e.g., tasks). Handle JSON data and include basic error handling.`,
    onClick: (e) => handleOnChange("intermediate/2"),
  },
  {
    label: "3. Data Analysis",
    icon: <FaListUl className="inline mr-2 text-xl" />,
    task: `**Task:** Perform data analysis using Pandas and NumPy. Load a dataset, clean it (handle missing values), and create a summary (e.g., mean, median). Optionally, visualize data using Matplotlib.`,
    onClick: (e) => handleOnChange("intermediate/3"),
  },
];

const hardMenu = [
  {
    label: "1. Machine Learning Model",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    task: `**Task:** Build a machine learning model using scikit-learn. Train a model (e.g., classification) on a dataset, make predictions, and evaluate performance with metrics like accuracy.`,
    onClick: (e) => handleOnChange("hard/1"),
  },
  {
    label: "2. Django Web Application",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Create a Django web application with user authentication and database models (e.g., SQLite). Implement a simple feature like a to-do list with secure data handling.`,
    onClick: (e) => handleOnChange("hard/2"),
  },
  {
    label: "3. Automated Testing Suite",
    icon: <FaCode className="inline mr-2 text-xl" />,
    task: `**Task:** Develop an automated testing suite using pytest. Write unit tests and integration tests for a sample application. Ensure tests cover edge cases and generate coverage reports.`,
    onClick: (e) => handleOnChange("hard/3"),
  },
];

export default function PythonProjectPlatform() {
  const [menu, setMenu] = useState(basicMenu);
  const [task, setTask] = useState(basicMenu[0].task);

  const setSidebarContent = (event) => {
    const value = event.target.value.toLowerCase();
    switch (value) {
      case "basic":
        setMenu(basicMenu);
        setTask(basicMenu[0].task);
    
        break;
      case "intermediate":
        setMenu(intermediateMenu);
        setTask(intermediateMenu[0].task);
     
        break;
      case "hard":
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
      title={"Python Projects"}
      hideExplorer={false}
      language="python"
    />
  );
}
