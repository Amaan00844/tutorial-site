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

    const response = await fetch(`/exercise/react/${level}/tests.js`);
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
    label: "JSX Intro",
    icon: <FaCode className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/1"),
  },
  {
    label: "Components",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/2"),
  },
  {
    label: "Props & PropTypes",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/3"),
  },
  {
    label: "useState",
    icon: <FaBars className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/4"),
  },
  {
    label: "Events",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/5"),
  },
  {
    label: "Conditional Rendering",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/6"),
  },
  {
    label: "Lists & Keys",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/7"),
  },
  {
    label: "Styling",
    icon: <FaList className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/8"),
  },
  {
    label: "Forms",
    icon: <FaImage className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/9"),
  },
  {
    label: "useEffect",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("basic/10"),
  },
];

const intermediateMenu = [
  {
    label: "useEffect",
    icon: <FaCode className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/1"),
  },
  {
    label: "Context API",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/2"),
  },
  {
    label: "useReducer",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/3"),
  },
  {
    label: "Custom Hooks",
    icon: <FaBars className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/4"),
  },
  {
    label: "React Router",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/5"),
  },
  {
    label: "Error Boundaries",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/6"),
  },
  {
    label: "Performance",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/7"),
  },
  {
    label: "Portals",
    icon: <FaList className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/8"),
  },
  {
    label: "Refs",
    icon: <FaImage className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/9"),
  },
  {
    label: "Testing",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("intermediate/10"),
  },
];

const hardMenu = [
  {
    label: "Redux Toolkit",
    icon: <FaCode className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/1"),
  },
  {
    label: "Suspense",
    icon: <FaCheckSquare className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/2"),
  },
  {
    label: "Concurrent Rendering",
    icon: <FaVolumeUp className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/3"),
  },
  {
    label: "Custom Hooks",
    icon: <FaBars className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/4"),
  },
  {
    label: "React Query",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/5"),
  },
  {
    label: "SSR",
    icon: <FaUniversalAccess className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/6"),
  },
  {
    label: "Fiber Architecture",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/7"),
  },
  {
    label: "Error Handling",
    icon: <FaList className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/8"),
  },
  {
    label: "Hooks Patterns",
    icon: <FaImage className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/9"),
  },
  {
    label: "Unit Testing",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    onClick: () => handleOnChange("advanced/10"),
  },
];


const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
});
`

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- Main entry point -->
    <script type="module" src="/Main.jsx"></script>
  </body>
</html>
`

const packageJson = `{
  "name": "react-exercise",
  "stackblitz": {
    "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
  }, "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
  },
  "dependencies": {
    "eslint-plugin-react": "^7.37.5",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@babel/core": "^7.24.0",
    "@babel/parser": "^7.24.0",
    "@babel/preset-env": "^7.24.0",
    "@babel/preset-react": "^7.24.0",
    "@babel/register": "^7.24.0",
    "@babel/traverse": "^7.24.0",
    "@eslint/js": "^9.25.0",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "@vitest/ui": "^3.1.3",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "jsdom": "^26.1.0",
    "vite": "^6.3.5",
    "vitest": "^3.1.3"
  }
}
`

const mainJsx = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`

const eslintConfig = `import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React/JSX rules
      'react/jsx-uses-react': 'off', // Not needed with React 17+ (automatic runtime)
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // General code quality rules
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];`


const sandboxFiles = {
  'App.jsx': '',
  'vite.config.js': viteConfig,
  'Main.jsx': mainJsx,
  'package.json': packageJson,
  'index.html': indexHtml,
  'eslint.config.mjs': eslintConfig
}
const sandboxFilesOpened = "App.jsx"

export default function ReactExercisePlatform() {
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
      title={"React"}

    />
  );
}

