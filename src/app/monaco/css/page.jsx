"use client";

import { CSSSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function CSSMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default CSS files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/css/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'style.css': '/* Write your CSS code here */\n\n/* Example: Basic CSS Styling */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 20px;\n    background-color: #f5f5f5;\n}\n\nh1 {\n    color: #333;\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.container {\n    max-width: 800px;\n    margin: 0 auto;\n    background-color: white;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.highlight {\n    background-color: #ffeb3b;\n    padding: 2px 4px;\n    border-radius: 3px;\n}',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'style.css': '/* Write your CSS code here */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 20px;\n}\n\nh1 {\n    color: #333;\n}',
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
          <p className="text-gray-600">Loading CSS Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">🎨 CSS Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test CSS styles</p>
      </div>
      <CSSSandbox
        filesObj={files}
        fileToOpen="style.css"
        hideExplorer={false}
        onLoad={() => console.log('CSS Monaco Editor loaded')}
      />
    </div>
  );
}