"use client";

import { NextJSSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function NextJSMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default Next.js files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/nextjs/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'pages/index.js': 'import React, { useState } from \'react\';\nimport Head from \'next/head\';\n\n// Write your Next.js code here\nexport default function Home() {\n  const [message, setMessage] = useState("Welcome to Next.js!");\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setCount(prev => prev + 1);\n    setMessage(`Next.js is awesome! Clicked ${count + 1} times`);\n  };\n\n  return (\n    <div>\n      <Head>\n        <title>Next.js Monaco Editor</title>\n        <meta name="description" content="Next.js development environment" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <main style={{ padding: \'20px\', fontFamily: \'Arial, sans-serif\' }}>\n        <h1>▲ Next.js Monaco Editor</h1>\n        <p>{message}</p>\n        \n        <div style={{ margin: \'20px 0\' }}>\n          <button \n            onClick={handleClick}\n            style={{\n              padding: \'10px 20px\',\n              backgroundColor: \'#000\',\n              color: \'white\',\n              border: \'none\',\n              borderRadius: \'4px\',\n              cursor: \'pointer\'\n            }}\n          >\n            Click me! ({count})\n          </button>\n        </div>\n        \n        <div>\n          <h3>Next.js Features:</h3>\n          <ul>\n            <li>Server-side rendering (SSR)</li>\n            <li>Static site generation (SSG)</li>\n            <li>API routes</li>\n            <li>File-based routing</li>\n            <li>Built-in CSS support</li>\n          </ul>\n        </div>\n        \n        <WelcomeCard />\n      </main>\n    </div>\n  );\n}\n\n// Example component\nfunction WelcomeCard() {\n  return (\n    <div style={{\n      padding: \'20px\',\n      backgroundColor: \'#f8f9fa\',\n      borderRadius: \'8px\',\n      border: \'1px solid #dee2e6\',\n      marginTop: \'20px\'\n    }}>\n      <h4>Getting Started with Next.js</h4>\n      <p>Edit this file to see changes in real-time!</p>\n      <p>Learn more at <a href="https://nextjs.org" target="_blank">nextjs.org</a></p>\n    </div>\n  );\n}',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'pages/index.js': 'export default function Home() {\n  return (\n    <div>\n      <h1>Hello, Next.js!</h1>\n    </div>\n  );\n}',
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
          <p className="text-gray-600">Loading Next.js Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">▲ Next.js Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test Next.js applications</p>
      </div>
      <NextJSSandbox
        filesObj={files}
        fileToOpen="pages/index.js"
        hideExplorer={false}
        onLoad={() => console.log('Next.js Monaco Editor loaded')}
      />
    </div>
  );
}