"use client";
import { FaFileAlt, FaHeading, FaListUl, FaWindowMaximize, FaShieldAlt, FaCode } from "react-icons/fa";
import { useState } from "react";
import MonacoTestPlatform from "@/components/MonacoTestPlatform";

const handleOnChange = async (level) => {
  try {
    // Monaco sandbox integration
    if (window.monacoSandbox && window.monacoSandbox.applyFsDiff) {
      const response = await fetch(`/projects/mern/${level}/tests.js`);
      if (!response.ok) throw new Error("Failed to fetch test file");

      const testContent = await response.text();

      await window.monacoSandbox.applyFsDiff({
        destroy: ["tests.js"],
        create: {
          "tests.js": testContent,
        },
      });

      console.log("Monaco sandbox updated with new test file");
    } else {
      console.warn("Monaco sandbox not available");
    }
  } catch (error) {
    console.error("Error during Monaco sandbox setup:", error);
  }
};

// Single file with all MERN components
const sandboxFiles = {
  "mern-app.js": `/*
MERN Stack Application - All in One File
This file contains:
1. Express Backend Server
2. MongoDB Models
3. API Routes
4. React Frontend Components
5. Client-side JavaScript

Instructions:
1. Install dependencies: npm install express mongoose react react-dom axios
2. Set up MongoDB connection
3. Run with: node mern-app.js
4. Visit http://localhost:3000 for the application
*/

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mern-single-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// MongoDB Schema and Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// API Routes
// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a user
app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve React Frontend
app.get('/', (req, res) => {
  res.send(\`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MERN Single File App</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 2.5em;
        }
        
        .form-container {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        
        input {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        button {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-right: 10px;
            transition: background 0.3s;
        }
        
        button:hover {
            background: #5a67d8;
        }
        
        button.delete {
            background: #e53e3e;
        }
        
        button.delete:hover {
            background: #c53030;
        }
        
        button.edit {
            background: #38a169;
        }
        
        button.edit:hover {
            background: #2f855a;
        }
        
        .users-list {
            margin-top: 20px;
        }
        
        .user-card {
            background: #f7fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .user-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .user-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .user-details h3 {
            margin: 0 0 5px 0;
            color: #2d3748;
        }
        
        .user-details p {
            margin: 0;
            color: #718096;
        }
        
        .user-actions {
            display: flex;
            gap: 10px;
        }
        
        .loading {
            text-align: center;
            padding: 20px;
            font-size: 18px;
            color: #666;
        }
        
        .error {
            background: #fed7d7;
            color: #c53030;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        
        .success {
            background: #c6f6d5;
            color: #2f855a;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            
            .user-info {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
            
            .user-actions {
                width: 100%;
            }
            
            button {
                flex: 1;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        const { useState, useEffect } = React;
        
        function App() {
            const [users, setUsers] = useState([]);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState('');
            const [success, setSuccess] = useState('');
            const [formData, setFormData] = useState({
                name: '',
                email: '',
                age: ''
            });
            const [editingId, setEditingId] = useState(null);
            
            // Fetch users from API
            const fetchUsers = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get('/api/users');
                    setUsers(response.data);
                    setError('');
                } catch (err) {
                    setError('Failed to fetch users: ' + err.message);
                } finally {
                    setLoading(false);
                }
            };
            
            // Load users on component mount
            useEffect(() => {
                fetchUsers();
            }, []);
            
            // Handle form input changes
            const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            };
            
            // Handle form submission
            const handleSubmit = async (e) => {
                e.preventDefault();
                setError('');
                setSuccess('');
                
                if (!formData.name || !formData.email || !formData.age) {
                    setError('All fields are required');
                    return;
                }
                
                try {
                    if (editingId) {
                        // Update existing user
                        await axios.put(\`/api/users/\${editingId}\`, formData);
                        setSuccess('User updated successfully!');
                        setEditingId(null);
                    } else {
                        // Create new user
                        await axios.post('/api/users', formData);
                        setSuccess('User created successfully!');
                    }
                    
                    // Reset form
                    setFormData({ name: '', email: '', age: '' });
                    
                    // Refresh users list
                    fetchUsers();
                    
                    // Clear success message after 3 seconds
                    setTimeout(() => setSuccess(''), 3000);
                    
                } catch (err) {
                    setError('Operation failed: ' + (err.response?.data?.error || err.message));
                }
            };
            
            // Handle edit button click
            const handleEdit = (user) => {
                setFormData({
                    name: user.name,
                    email: user.email,
                    age: user.age.toString()
                });
                setEditingId(user._id);
            };
            
            // Handle delete button click
            const handleDelete = async (id) => {
                if (!window.confirm('Are you sure you want to delete this user?')) {
                    return;
                }
                
                try {
                    await axios.delete(\`/api/users/\${id}\`);
                    setSuccess('User deleted successfully!');
                    fetchUsers();
                    setTimeout(() => setSuccess(''), 3000);
                } catch (err) {
                    setError('Delete failed: ' + (err.response?.data?.error || err.message));
                }
            };
            
            // Cancel edit mode
            const handleCancelEdit = () => {
                setEditingId(null);
                setFormData({ name: '', email: '', age: '' });
            };
            
            return (
                <div className="container">
                    <h1>🚀 MERN User Management</h1>
                    
                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}
                    
                    <div className="form-container">
                        <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter user name"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter user email"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Age:</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    placeholder="Enter user age"
                                    min="1"
                                    max="120"
                                />
                            </div>
                            
                            <button type="submit">
                                {editingId ? 'Update User' : 'Add User'}
                            </button>
                            
                            {editingId && (
                                <button type="button" onClick={handleCancelEdit}>
                                    Cancel Edit
                                </button>
                            )}
                        </form>
                    </div>
                    
                    <div className="users-list">
                        <h2>Users List ({users.length})</h2>
                        
                        {loading ? (
                            <div className="loading">Loading users...</div>
                        ) : users.length === 0 ? (
                            <p>No users found. Add a user to get started!</p>
                        ) : (
                            users.map(user => (
                                <div key={user._id} className="user-card">
                                    <div className="user-info">
                                        <div className="user-details">
                                            <h3>{user.name}</h3>
                                            <p><strong>Email:</strong> {user.email}</p>
                                            <p><strong>Age:</strong> {user.age} years old</p>
                                            <p><strong>Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="user-actions">
                                            <button 
                                                className="edit"
                                                onClick={() => handleEdit(user)}
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                className="delete"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            );
        }
        
        // Render the React app
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
  \`);
});

// Start server
app.listen(PORT, () => {
  console.log(\`🚀 MERN Server running on http://localhost:\${PORT}\`);
  console.log('📊 MongoDB connected');
  console.log('⚛️  React frontend served from root route');
});

// Export for testing purposes
module.exports = app;`,
  "package.json": `{
    "name": "mern-single-file-project",
    "version": "1.0.0",
    "description": "A complete MERN stack application in a single file",
    "stackblitz": {
        "startCommand": "node tests.test && source ~/.jshrc",
        "installDependencies": false
    },
    "dependencies": {
        "express": "^4.19.2",
        "mongoose": "^6.8.0",
        "axios": "^1.6.0",
        "jsonwebtoken": "^9.0.2",
        "bcryptjs": "^2.4.3",
        "socket.io": "^4.8.0"
    },
    "devDependencies": {
        "eslint": "^9.28.0",
        "jsdom": "^26.1.0",
        "supertest": "^7.0.0"
    }
}`
};

const sandboxFilesOpened = "mern-app.js";

const basicMenu = [
  {
    label: "1. Simple CRUD App",
    icon: <FaFileAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Create a simple CRUD app in a single file using Express, MongoDB, and React. Build a complete user management system with create, read, update, and delete operations. Include a responsive React frontend served from the Express backend.`,
    onClick: (e) => handleOnChange("basic/1"),
  },
  {
    label: "2. Blog Backend + Frontend",
    icon: <FaHeading className="inline mr-2 text-xl" />,
    task: `**Task:** Develop a complete blog system in a single file with Express backend, MongoDB storage, and React frontend. Include post creation, display, editing, and deletion with a clean UI.`,
    onClick: (e) => handleOnChange("basic/2"),
  },
  {
    label: "3. To-Do Full Stack",
    icon: <FaListUl className="inline mr-2 text-xl" />,
    task: `**Task:** Build a full-stack to-do application in one file. Include Express API for task management, MongoDB for persistence, and React frontend with task status toggles and filtering.`,
    onClick: (e) => handleOnChange("basic/3"),
  },
];

const intermediateMenu = [
  {
    label: "1. User Auth System",
    icon: <FaFileAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Build a complete user authentication system in a single file. Include Express backend with JWT authentication, MongoDB for user storage, bcrypt for password hashing, and React frontend with login/signup forms.`,
    onClick: (e) => handleOnChange("intermediate/1"),
  },
  {
    label: "2. Real-Time Chat",
    icon: <FaHeading className="inline mr-2 text-xl" />,
    task: `**Task:** Create a real-time chat application in one file using Express, MongoDB, React, and Socket.IO. Include message storage, user identification, and live messaging with a modern chat interface.`,
    onClick: (e) => handleOnChange("intermediate/2"),
  },
  {
    label: "3. E-Commerce Products",
    icon: <FaListUl className="inline mr-2 text-xl" />,
    task: `**Task:** Develop a product catalog system in a single file with Express API, MongoDB storage, and React frontend. Include product CRUD operations, search, filtering, and responsive product cards.`,
    onClick: (e) => handleOnChange("intermediate/3"),
  },
];

const hardMenu = [
  {
    label: "1. Full Blog Platform",
    icon: <FaWindowMaximize className="inline mr-2 text-xl" />,
    task: `**Task:** Create a complete blog platform in one file with user authentication, post creation with rich text editing, comments system, user profiles, and admin capabilities. Include Express backend, MongoDB, and React frontend.`,
    onClick: (e) => handleOnChange("hard/1"),
  },
  {
    label: "2. Social Media Dashboard",
    icon: <FaShieldAlt className="inline mr-2 text-xl" />,
    task: `**Task:** Build a social media dashboard in a single file featuring user profiles, posts with likes/comments, real-time notifications using Socket.IO, image uploads, and activity feeds.`,
    onClick: (e) => handleOnChange("hard/2"),
  },
  {
    label: "3. Task Management System",
    icon: <FaCode className="inline mr-2 text-xl" />,
    task: `**Task:** Develop a comprehensive task management system in one file with user authentication, project management, task assignment, status tracking, team collaboration, and analytics dashboard.`,
    onClick: (e) => handleOnChange("hard/3"),
  },
];

export default function MernSingleFileProjectPlatform() {
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
      title={"MERN Single File"}
      hideExplorer={false}
      language="javascript"
    />
  );
}