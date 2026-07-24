"use client";

import { ExpressSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function ExpressMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default Express.js files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/express/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'app.js': '// Write your Express.js code here\nconsole.log("Hello, Express.js!");\n\n// Example: Basic Express.js server\nconst express = require(\'express\');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middleware\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\n// Routes\napp.get(\'/\', (req, res) => {\n  res.json({\n    message: \'Welcome to Express.js!\',\n    timestamp: new Date().toISOString(),\n    method: req.method,\n    url: req.url\n  });\n});\n\napp.get(\'/api/users\', (req, res) => {\n  const users = [\n    { id: 1, name: \'John Doe\', email: \'john@example.com\' },\n    { id: 2, name: \'Jane Smith\', email: \'jane@example.com\' },\n    { id: 3, name: \'Bob Johnson\', email: \'bob@example.com\' }\n  ];\n  res.json(users);\n});\n\napp.post(\'/api/users\', (req, res) => {\n  const { name, email } = req.body;\n  const newUser = {\n    id: Date.now(),\n    name,\n    email,\n    createdAt: new Date().toISOString()\n  };\n  res.status(201).json(newUser);\n});\n\napp.get(\'/api/users/:id\', (req, res) => {\n  const { id } = req.params;\n  res.json({\n    id: parseInt(id),\n    name: `User ${id}`,\n    email: `user${id}@example.com`\n  });\n});\n\n// Error handling middleware\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: \'Something went wrong!\' });\n});\n\n// 404 handler\napp.use(\'*\', (req, res) => {\n  res.status(404).json({ error: \'Route not found\' });\n});\n\n// Start server (commented out for browser environment)\n// app.listen(PORT, () => {\n//   console.log(`Express server running on port ${PORT}`);\n// });\n\nconsole.log(\'Express.js application configured\');\nconsole.log(\'Routes: GET /, GET /api/users, POST /api/users, GET /api/users/:id\');',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'app.js': '// Write your Express.js code here\nconst express = require(\'express\');\nconst app = express();\n\napp.get(\'/\', (req, res) => {\n  res.json({ message: \'Hello, Express!\' });\n});\n\nconsole.log(\'Express app configured\');',
          'tests.js': '// Test file not available'
        });
        setIsLoading(false);
      }
    };

    loadFiles();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Express.js Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">🚀 Express.js Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test Express.js server applications</p>
      </div>
      <ExpressSandbox
        filesObj={files}
        fileToOpen="app.js"
        hideExplorer={false}
        onLoad={() => console.log('Express.js Monaco Editor loaded')}
      />
    </div>
  );
}