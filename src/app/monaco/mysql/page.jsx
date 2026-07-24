"use client";

import { MySQLSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function MySQLMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default MySQL files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/mysql/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'mysql_queries.sql': '-- Write your MySQL code here\n-- Example: MySQL-specific queries and features\n\n-- Create database\nCREATE DATABASE IF NOT EXISTS tutorial_db;\nUSE tutorial_db;\n\n-- Create tables with MySQL-specific features\nCREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    age INT,\n    status ENUM(\'active\', \'inactive\', \'pending\') DEFAULT \'active\',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\nCREATE TABLE user_profiles (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    user_id INT,\n    bio TEXT,\n    avatar_url VARCHAR(255),\n    preferences JSON,\n    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- Insert sample data\nINSERT INTO users (name, email, age, status) VALUES\n(\'John Doe\', \'john@example.com\', 30, \'active\'),\n(\'Jane Smith\', \'jane@example.com\', 25, \'active\'),\n(\'Bob Johnson\', \'bob@example.com\', 35, \'inactive\'),\n(\'Alice Brown\', \'alice@example.com\', 28, \'pending\');\n\nINSERT INTO user_profiles (user_id, bio, avatar_url, preferences) VALUES\n(1, \'Software developer\', \'/avatars/john.jpg\', \'{"theme": "dark", "notifications": true}\'),\n(2, \'Designer\', \'/avatars/jane.jpg\', \'{"theme": "light", "notifications": false}\'),\n(3, \'Manager\', \'/avatars/bob.jpg\', \'{"theme": "auto", "notifications": true}\');\n\n-- MySQL-specific queries\nSELECT * FROM users;\n\n-- Using MySQL functions\nSELECT \n    name,\n    email,\n    UPPER(name) as name_upper,\n    CONCAT(name, \' - \', email) as full_info,\n    DATEDIFF(NOW(), created_at) as days_since_created\nFROM users;\n\n-- JSON operations (MySQL 5.7+)\nSELECT \n    u.name,\n    up.preferences,\n    JSON_EXTRACT(up.preferences, \'$.theme\') as theme,\n    JSON_EXTRACT(up.preferences, \'$.notifications\') as notifications\nFROM users u\nJOIN user_profiles up ON u.id = up.user_id;\n\n-- Advanced MySQL features\nSELECT \n    status,\n    COUNT(*) as count,\n    AVG(age) as avg_age,\n    MIN(age) as min_age,\n    MAX(age) as max_age\nFROM users\nGROUP BY status\nHAVING COUNT(*) > 0\nORDER BY count DESC;\n\n-- Window functions (MySQL 8.0+)\nSELECT \n    name,\n    age,\n    ROW_NUMBER() OVER (ORDER BY age DESC) as age_rank,\n    RANK() OVER (ORDER BY age DESC) as age_rank_with_ties\nFROM users;\n\n-- Full-text search example\n-- ALTER TABLE user_profiles ADD FULLTEXT(bio);\n-- SELECT * FROM user_profiles WHERE MATCH(bio) AGAINST(\'developer\');\n\n-- Show table information\nSHOW TABLES;\nDESCRIBE users;\nSHOW CREATE TABLE users;',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'mysql_queries.sql': '-- Write your MySQL code here\nSELECT \'Hello, MySQL!\' as message;\n\n-- Example query\nSELECT VERSION() as mysql_version;',
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
          <p className="text-gray-600">Loading MySQL Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">🐬 MySQL Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test MySQL database queries</p>
      </div>
      <MySQLSandbox
        filesObj={files}
        fileToOpen="mysql_queries.sql"
        hideExplorer={false}
        onLoad={() => console.log('MySQL Monaco Editor loaded')}
      />
    </div>
  );
}