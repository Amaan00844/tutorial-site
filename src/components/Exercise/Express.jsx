"use client"

import {
  FaCodeBranch,
  FaFolderOpen,
  FaBug,
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaLock,
  FaSync,
  FaUserEdit,
  FaEnvelopeOpenText,
  FaProjectDiagram,
  FaServer,
  FaNetworkWired,
  FaBolt,
  FaSyncAlt,
  FaShieldVirus,
  FaRocket,
  FaCloudUploadAlt,
  FaRoute,
  FaPlusCircle,
  FaList,
  FaSearch,
  FaEdit,
  FaTrash,
  FaTools,
  FaKey,
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

        const response = await fetch(`/exercise/express/${level}/tests.js`);
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
    label: "1. Setup Server",
    icon: <FaNetworkWired className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/1"),
  },
  {
    label: "2. GET Homepage",
    icon: <FaRoute className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/2"),
  },
  {
    label: "3. POST Data",
    icon: <FaPlusCircle className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/3"),
  },
  {
    label: "4. List Items",
    icon: <FaList className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/4"),
  },
  {
    label: "5. GET by ID",
    icon: <FaSearch className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/5"),
  },
  {
    label: "6. Update by ID",
    icon: <FaEdit className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/6"),
  },
  {
    label: "7. Delete by ID",
    icon: <FaTrash className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/7"),
  },
  {
    label: "8. Logger Middleware",
    icon: <FaTools className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/8"),
  },
  {
    label: "9. Parse JSON",
    icon: <FaKey className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/9"),
  },
  {
    label: "10. 404 Handler",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("basic/10/"),
  },
];

const intermediateMenu = [
  {
    label: "1. Use Router",
    icon: <FaCodeBranch className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/1"),
  },
  {
    label: "2. Custom Logger",
    icon: <FaFolderOpen className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/2"),
  },
  {
    label: "3. Error Handler",
    icon: <FaBug className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/3"),
  },
  {
    label: "4. Input Validation",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/4"),
  },
  {
    label: "5. MongoDB Setup",
    icon: <FaDatabase className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/5"),
  },
  {
    label: "6. JWT Auth",
    icon: <FaUserShield className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/6"),
  },
  {
    label: "7. Hash Passwords",
    icon: <FaLock className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/7"),
  },
  {
    label: "8. Patch User",
    icon: <FaSync className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/8"),
  },
  {
    label: "9. Use `req.user`",
    icon: <FaUserEdit className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/9"),
  },
  {
    label: "10. Send Email",
    icon: <FaEnvelopeOpenText className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("intermediate/10"),
  },
];

const hardMenu = [
  {
    label: "1. Rate Limiting",
    icon: <FaShieldVirus className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/1"),
  },
  {
    label: "2. API Versioning",
    icon: <FaProjectDiagram className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/2"),
  },
  {
    label: "3. Clustering",
    icon: <FaBolt className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/3"),
  },
  {
    label: "4. OAuth2 Auth",
    icon: <FaLock className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/4"),
  },
  {
    label: "5. Redis Caching",
    icon: <FaDatabase className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/5"),
  },
  {
    label: "6. WebSockets",
    icon: <FaNetworkWired className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/6"),
  },
  {
    label: "7. AWS S3 Upload",
    icon: <FaCloudUploadAlt className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/7"),
  },
  {
    label: "8. GraphQL Server",
    icon: <FaServer className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/8"),
  },
  {
    label: "9. Sentry Tracking",
    icon: <FaSyncAlt className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/9"),
  },
  {
    label: "10. Helmet Security",
    icon: <FaRocket className="inline mr-2 text-xl" />,
    onClick: (e) => handleOnChange("advanced/10"),
  },
];


const sandboxFiles = {
    'index.js': '', 'eslint.config.mjs': `import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
`,
    'package.json': `{
  "name": "code4bharat-trybox",
  "stackblitz": {
    "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
  },
  "dependencies": {
    "eslint": "^9.27.0",
    "globals": "^16.1.0",
    "esprima": "^4.0.1",
    "supertest": "^7.1.1",
    "express": "^5.1.0"
  }
}`}
const sandboxFilesOpened = "index.js"

export default function NodeJsExercisePlatform() {
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
            title={"Express"}
        />
    );
}

