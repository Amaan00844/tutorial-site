"use client";

import { SQLSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function SQLMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default SQL files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/sql/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'queries.sql': '-- Write your SQL code here\n-- Example: Basic SQL queries\n\n-- Create a sample database schema\nCREATE TABLE users (\n    id INTEGER PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    age INTEGER,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n    id INTEGER PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    content TEXT,\n    user_id INTEGER,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n);\n\n-- Insert sample data\nINSERT INTO users (name, email, age) VALUES\n(\'John Doe\', \'john@example.com\', 30),\n(\'Jane Smith\', \'jane@example.com\', 25),\n(\'Bob Johnson\', \'bob@example.com\', 35),\n(\'Alice Brown\', \'alice@example.com\', 28);\n\nINSERT INTO posts (title, content, user_id) VALUES\n(\'First Post\', \'This is my first post!\', 1),\n(\'SQL Tutorial\', \'Learning SQL is fun and useful.\', 2),\n(\'Database Design\', \'Good database design is crucial.\', 1),\n(\'Advanced Queries\', \'Complex queries can be powerful.\', 3);\n\n-- Basic SELECT queries\nSELECT * FROM users;\n\nSELECT name, email FROM users WHERE age > 25;\n\nSELECT COUNT(*) as total_users FROM users;\n\n-- JOIN queries\nSELECT \n    u.name,\n    u.email,\n    p.title,\n    p.created_at\nFROM users u\nJOIN posts p ON u.id = p.user_id\nORDER BY p.created_at DESC;\n\n-- Aggregate functions\nSELECT \n    u.name,\n    COUNT(p.id) as post_count\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id\nGROUP BY u.id, u.name\nORDER BY post_count DESC;\n\n-- Filtering and sorting\nSELECT * FROM users \nWHERE age BETWEEN 25 AND 35 \nORDER BY age ASC;\n\n-- Update and Delete examples\n-- UPDATE users SET age = 31 WHERE name = \'John Doe\';\n-- DELETE FROM posts WHERE id = 1;',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'queries.sql': '-- Write your SQL code here\nSELECT \'Hello, SQL!\' as message;\n\n-- Example query\nSELECT * FROM users;',
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
          <p className="text-gray-600">Loading SQL Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">🗄️ SQL Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test SQL queries</p>
      </div>
      <SQLSandbox
        filesObj={files}
        fileToOpen="queries.sql"
        hideExplorer={false}
        onLoad={() => console.log('SQL Monaco Editor loaded')}
      />
    </div>
  );
}