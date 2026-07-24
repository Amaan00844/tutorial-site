"use client";

import { FaFileAlt, FaHeading, FaListUl, FaWindowMaximize, FaShieldAlt, FaCode } from "react-icons/fa";
import { useState } from "react";
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

// Function to load and execute exercise files
const loadExerciseFiles = async (level) => {
  console.log(`🧪 Attempting to load test file for ${level} from /projects/nextjs/${level}/tests.js`);
  try {
    const response = await fetch(`/projects/nextjs/${level}/tests.js`);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}: ${response.statusText}`);
    }

    const testContent = await response.text();
    console.log(`✅ Successfully fetched test file for ${level}`);

    // Execute the test content to ensure window.exerciseTest is set
    if (typeof window !== 'undefined') {
      try {
        const testFunction = new Function(testContent);
        testFunction();
        console.log(`✅ Executed test file for ${level}`);
        if (!window.exerciseTest) {
          console.error(`❌ window.exerciseTest not defined after executing test file for ${level}`);
          throw new Error("window.exerciseTest not defined");
        }
      } catch (execError) {
        console.error(`❌ Error executing test file for ${level}:`, execError);
        throw execError;
      }
    }

    return {
      'page.jsx': `// Next.js Project Workspace
// Write your Next.js page component here
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js Projects!</h1>
      {/* Complete the project requirements below: */}
    </div>
  );
}`,
      'tests.js': testContent,
    };
  } catch (error) {
    console.error(`❌ Error loading project files for ${level}:`, error.message);
    return {
      'page.jsx': `// Next.js Project Workspace
export default function HomePage() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  );
}`,
      'tests.js': `// Test file not available for ${level}
// Please ensure the test file exists at /projects/nextjs/${level}/tests.js
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: () => ({
      passed: false,
      score: 0,
      message: "Test file not available: Ensure /projects/nextjs/${level}/tests.js exists and is accessible",
      details: ["❌ Test file failed to load"]
    }),
    testConfig: { topic: "Fallback - ${level}", language: "nextjs" }
  };
  console.log("✅ Fallback window.exerciseTest defined for ${level}");
}`,
    };
  }
};

// Menu definitions for different difficulty levels
const basicMenu = [
  {
    label: "1. Static Portfolio Site",
    icon: <FaFileAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Create a static portfolio site in Next.js with a home page, about page, and contact page. Use CSS modules for styling and file-based routing.`,
    onClick: async () => {
      const files = await loadExerciseFiles("basic/1");
      return { files };
    },
  },
  {
    label: "2. Blog with Static Generation",
    icon: <FaHeading className="inline mr-2 text-xl" />,
    task: `**Task:** Build a blog in Next.js using Static Site Generation (SSG) with getStaticProps. Create pages for blog posts and style with Tailwind CSS.`,
    onClick: async () => {
      const files = await loadExerciseFiles("basic/2");
      return { files };
    },
  },
  {
    label: "3. Task Tracker App",
    icon: <FaListUl className="inline mr-2 text-xl" />,
    task: `**Task:** Develop a task tracker app in Next.js with client-side state management using useState. Add and remove tasks, and style with Tailwind CSS.`,
    onClick: async () => {
      const files = await loadExerciseFiles("basic/3");
      return { files };
    },
  },
];

const intermediateMenu = [
  {
    label: "1. Dynamic Blog with API",
    icon: <FaFileAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Build a dynamic blog in Next.js with API routes to fetch blog posts from a mock API. Use Incremental Static Regeneration (ISR) and Tailwind CSS for styling.`,
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/1");
      return { files };
    },
  },
  {
    label: "2. E-Commerce Cart Page",
    icon: <FaHeading className="inline mr-2 text-xl" />,
    task: `**Task:** Create an e-commerce cart page in Next.js with client-side state management using useState. Implement API routes for product data and style with Tailwind CSS.`,
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/2");
      return { files };
    },
  },
  {
    label: "3. User Profile with Authentication",
    icon: <FaListUl className="inline mr-2 text-xl" />,
    task: `**Task:** Develop a user profile page in Next.js with authentication using NextAuth.js. Fetch user data from an API and display it securely. Style with CSS modules.`,
    onClick: async () => {
      const files = await loadExerciseFiles("intermediate/3");
      return { files };
    },
  },
];

const hardMenu = [
  {
    label: "1. Full-Stack Dashboard",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    task: `**Task:** Build a full-stack dashboard in Next.js using the App Router with API routes, user authentication, and dynamic data fetching. Style with Tailwind CSS.`,
    onClick: async () => {
      const files = await loadExerciseFiles("hard/1");
      return { files };
    },
  },
  {
    label: "2. Real-Time Collaboration App",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Create a real-time collaboration app in Next.js using WebSockets (e.g., Socket.IO). Implement shared document editing and user presence. Style with Tailwind CSS.`,
    onClick: async () => {
      const files = await loadExerciseFiles("hard/2");
      return { files };
    },
  },
  {
    label: "3. Advanced E-Commerce Platform",
    icon: <FaCode className="inline mr-2 text-xl" />,
    task: `**Task:** Develop an advanced e-commerce platform in Next.js with payment integration (e.g., Stripe), product search, and user reviews. Use Server Components and Tailwind CSS.`,
    onClick: async () => {
      const files = await loadExerciseFiles("hard/3");
      return { files };
    },
  },
];

// Default sandbox files
const sandboxFiles = {
  'page.jsx': `// Next.js Project Workspace
// Write your Next.js page component here
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js Projects!</h1>
      {/* Complete the project requirements below: */}
    </div>
  );
}`,
  'package.json': `{
    "name": "nextjs-project-sandbox",
    "version": "1.0.0",
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    },
    "dependencies": {
      "next": "^14.0.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
  }`,
  'tests.js': `// Test file will be loaded based on selected project
// Define window.exerciseTest to prevent test system error
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: () => ({
      passed: false,
      score: 0,
      message: "Test file not available: Please select a project to load the appropriate tests",
      details: ["❌ No test file loaded"]
    }),
    testConfig: { topic: "Fallback", language: "nextjs" }
  };
  console.log("✅ Fallback window.exerciseTest defined for initial state");
}`,
};

const sandboxFilesOpened = 'page.jsx';

export default function NextJsProjectPlatform() {
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
      default:
        setMenu(basicMenu);
        setTask(basicMenu[0].task);
    }
  };

  return (
    <MonacoTestPlatform
      menuItems={menu}
      files={sandboxFiles}
      filesOpened={sandboxFilesOpened}
      setSidebarContent={setSidebarContent}
      title="Next.js Projects"
      hideExplorer={false}
      language="javascript"
      task={task}
      hideRunButton={true} // Added prop to hide the Run button
    />
  );
}