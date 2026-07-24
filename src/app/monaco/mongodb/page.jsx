"use client";

import { MongoDBSandbox } from "@/components/MonacoSandboxes";
import { useState, useEffect } from "react";

export default function MongoDBMonacoPage() {
  const [files, setFiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load default MongoDB files
    const loadFiles = async () => {
      try {
        // Load test file for basic exercise 1
        const testResponse = await fetch('/exercise/mongodb/basic/1/tests.js');
        const testContent = testResponse.ok ? await testResponse.text() : '// Test file not found';
        
        setFiles({
          'mongodb_queries.js': '// Write your MongoDB code here\nconsole.log("Hello, MongoDB!");\n\n// Example: MongoDB operations using Node.js driver syntax\n\n// Connect to MongoDB (example)\n// const { MongoClient } = require(\'mongodb\');\n// const client = new MongoClient(\'mongodb://localhost:27017\');\n\n// Database and collection references\n// const db = client.db(\'tutorial_db\');\n// const usersCollection = db.collection(\'users\');\n// const postsCollection = db.collection(\'posts\');\n\n// Sample data\nconst sampleUsers = [\n  {\n    _id: 1,\n    name: "John Doe",\n    email: "john@example.com",\n    age: 30,\n    status: "active",\n    tags: ["developer", "javascript"],\n    profile: {\n      bio: "Software developer",\n      location: "New York",\n      website: "https://johndoe.dev"\n    },\n    createdAt: new Date()\n  },\n  {\n    _id: 2,\n    name: "Jane Smith",\n    email: "jane@example.com",\n    age: 25,\n    status: "active",\n    tags: ["designer", "ui/ux"],\n    profile: {\n      bio: "UI/UX Designer",\n      location: "San Francisco",\n      website: "https://janesmith.design"\n    },\n    createdAt: new Date()\n  },\n  {\n    _id: 3,\n    name: "Bob Johnson",\n    email: "bob@example.com",\n    age: 35,\n    status: "inactive",\n    tags: ["manager", "product"],\n    profile: {\n      bio: "Product Manager",\n      location: "Seattle",\n      website: null\n    },\n    createdAt: new Date()\n  }\n];\n\nconst samplePosts = [\n  {\n    _id: 1,\n    title: "Getting Started with MongoDB",\n    content: "MongoDB is a NoSQL database...",\n    authorId: 1,\n    tags: ["mongodb", "database", "tutorial"],\n    likes: 15,\n    comments: [\n      { user: "Alice", text: "Great tutorial!", date: new Date() },\n      { user: "Charlie", text: "Very helpful", date: new Date() }\n    ],\n    createdAt: new Date(),\n    updatedAt: new Date()\n  },\n  {\n    _id: 2,\n    title: "Advanced MongoDB Queries",\n    content: "Learn about aggregation pipelines...",\n    authorId: 2,\n    tags: ["mongodb", "advanced", "aggregation"],\n    likes: 23,\n    comments: [],\n    createdAt: new Date(),\n    updatedAt: new Date()\n  }\n];\n\n// MongoDB Query Examples (using MongoDB shell syntax in comments)\n\n// Insert operations\n// db.users.insertOne(sampleUsers[0]);\n// db.users.insertMany(sampleUsers);\n\n// Find operations\n// db.users.find({});\n// db.users.find({ status: "active" });\n// db.users.find({ age: { $gte: 25 } });\n// db.users.find({ "profile.location": "New York" });\n// db.users.find({ tags: { $in: ["developer", "designer"] } });\n\n// Update operations\n// db.users.updateOne({ _id: 1 }, { $set: { age: 31 } });\n// db.users.updateMany({ status: "active" }, { $inc: { age: 1 } });\n// db.users.updateOne({ _id: 1 }, { $push: { tags: "senior" } });\n\n// Delete operations\n// db.users.deleteOne({ _id: 3 });\n// db.users.deleteMany({ status: "inactive" });\n\n// Aggregation pipeline examples\nconst aggregationExamples = [\n  // Group users by status\n  {\n    pipeline: [\n      { $group: { _id: "$status", count: { $sum: 1 }, avgAge: { $avg: "$age" } } },\n      { $sort: { count: -1 } }\n    ]\n  },\n  \n  // Find users with posts\n  {\n    pipeline: [\n      {\n        $lookup: {\n          from: "posts",\n          localField: "_id",\n          foreignField: "authorId",\n          as: "posts"\n        }\n      },\n      { $match: { posts: { $ne: [] } } },\n      { $project: { name: 1, email: 1, postCount: { $size: "$posts" } } }\n    ]\n  },\n  \n  // Text search and filtering\n  {\n    pipeline: [\n      { $match: { $text: { $search: "developer" } } },\n      { $project: { name: 1, score: { $meta: "textScore" } } },\n      { $sort: { score: { $meta: "textScore" } } }\n    ]\n  }\n];\n\n// Index examples\n// db.users.createIndex({ email: 1 }, { unique: true });\n// db.users.createIndex({ "profile.location": 1 });\n// db.posts.createIndex({ title: "text", content: "text" });\n\n// MongoDB-specific operations\nconsole.log("Sample MongoDB operations configured");\nconsole.log("Users:", sampleUsers.length);\nconsole.log("Posts:", samplePosts.length);\nconsole.log("Aggregation examples:", aggregationExamples.length);',
          'tests.js': testContent
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading files:', error);
        setFiles({
          'mongodb_queries.js': '// Write your MongoDB code here\nconsole.log("Hello, MongoDB!");\n\n// Example MongoDB operations\nconst users = [{ name: "John", age: 30 }];\nconsole.log("Users:", users);',
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
          <p className="text-gray-600">Loading MongoDB Monaco Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="bg-gray-50 border-b px-4 py-2">
        <h1 className="text-lg font-semibold text-gray-800">🍃 MongoDB Monaco Editor</h1>
        <p className="text-sm text-gray-600">Write and test MongoDB queries and operations</p>
      </div>
      <MongoDBSandbox
        filesObj={files}
        fileToOpen="mongodb_queries.js"
        hideExplorer={false}
        onLoad={() => console.log('MongoDB Monaco Editor loaded')}
      />
    </div>
  );
}