"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiCopy, FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

const cardVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const techIcons = {
  react: <FaReact className="text-blue-500" />,
  express: <SiExpress className="text-green-600" />,
  mongodb: <SiMongodb className="text-green-500" />,
  nodejs: <FaNodeJs className="text-green-600" />,
};

// Project data remains exactly the same
const projectsData = {
  react: {
    basic: [
      {
        title: "To-Do List",
        code: `function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };
  return (
    <div>
      <input onKeyPress={(e) => e.key === 'Enter' && addTodo(e.target.value)} />
      <ul>{todos.map((todo, index) => <li key={index}>{todo.text}</li>)}</ul>
    </div>
  );
}`,
        projectLink: "https://github.com/mdn/todo-react",
      },
      {
        title: "Counter App",
        code: `function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
        projectLink: "https://github.com/Amaan00844/react-counter-app",
      },
    ],
    intermediate: [
      {
        title: "Weather App",
        code: `function WeatherApp() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch('api/weather')
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);
  return <div>{weather ? weather.temp : 'Loading...'}</div>;
}`,
        projectLink:"https://github.com/Amaan00844/React-Weather-app",
      }, 
      {
        title: "E-Commerce Dashboard",
        code: `function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
}`,
        projectLink: "https://github.com/Amaan00844/react-ecommerce-dashboard",
      },
    ],
    professional: [
      {
        title: "Real-Time Chat",
        code: `function ChatApp() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('message', (msg) => setMessages([...messages, msg]));
  }, [messages]);
  return (
    <div>
      <ChatWindow messages={messages} />
      <MessageInput sendMessage={socket.emit} />
    </div>
  );
}`,
        projectLink: "https://github.com/Amaan00844/react-real-time-chat-app",
      },
      {
        title: "Social Media Dashboard",
        code: `function SocialDashboard() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);
  return (
    <div>
      <PostList posts={posts} />
      <Analytics />
    </div>
  );
}`,
        projectLink: "https://github.com/Amaan00844/React-Social-Media-Dashboard",
      },
    ],
  },
  express: {
    basic: [
      {
        title: "Hello World API",
        code: `const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, () => console.log('Server on port 3000'));`,
        projectLink: "https://github.com/Amaan00844/node-express-hello-world",
      },
      {
        title: "Simple GET API",
        code: `const express = require('express');
const app = express();
app.get('/api', (req, res) => res.json({ message: 'Hello API' }));
app.listen(3000, () => console.log('Server on port 3000'));`,
        projectLink: "https://github.com/Amaan00844/simple-express-api",
      },
    ],
    intermediate: [
      {
        title: "RESTful Blog API",
        code: `const express = require('express');
const app = express();
app.use(express.json());
app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});
app.listen(3000);`,
        projectLink: "https://github.com/Amaan00844/blogging-platform-api",
      },
      {
        title: "User Registration API",
        code: `const express = require('express');
const app = express();
app.use(express.json());
app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
app.listen(3000);`,
        projectLink: "https://github.com/Amaan00844/user-registration-and-login-api",
      },
    ],
    professional: [
      {
        title: "Authenticated API",
        code: `const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.post('/login', (req, res) => {
  const token = jwt.sign({ userId: 1 }, 'secret');
  res.json({ token });
});
app.listen(3000);`,
        projectLink: "https://github.com/Amaan00844/JWT-Authentication-API-with-Node.js-and-Express",
      },
      {
        title: "Rate-Limited API",
        code: `const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
app.get('/api', (req, res) => res.json({ message: 'Rate Limited' }));
app.listen(3000);`,
        projectLink: "https://github.com/Amaan00844/rate-limiter-api",
      },
    ],
  },
  mongodb: {
    basic: [
      {
        title: "Basic CRUD Operations",
        code: `db.users.insertOne({ name: "Alice", age: 25 });
db.users.find({});
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } });
db.users.deleteOne({ name: "Alice" });`,
        projectLink: "https://github.com/Amaan00844/node-express-mongodb",
      },
      {
        title: "Insert and Query",
        code: `db.products.insertOne({ name: "Laptop", price: 999 });
db.products.find({ price: { $gt: 500 } });`,
        projectLink: "https://github.com/Amaan00844/collection-sample",
      },
    ],
    intermediate: [
      {
        title: "User Management",
        code: `db.users.createIndex({ email: 1 }, { unique: true });
db.users.insertOne({ email: "user@example.com", role: "user" });
db.users.find({ role: "user" });`,
        projectLink: "https://github.com/Amaan00844/User-Management-System",
      },
      {
        title: "Product Catalog",
        code: `db.products.insertMany([
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" }
]);
db.products.find({ category: "Electronics" });`,
        projectLink: "https://github.com/Amaan00844/content-catalog",
      },
    ],
    professional: [
      {
        title: "Aggregation Pipeline",
        code: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
]);`,
        projectLink: "https://github.com/Amaan00844/master-the-mongodb-aggregation-pipeline-2505629",
      },
      {
        title: "Geospatial Queries",
        code: `db.places.createIndex({ location: "2dsphere" });
db.places.insertOne({ name: "Park", location: { type: "Point", coordinates: [-73.9, 40.7] } });
db.places.find({
  location: { $near: { $geometry: { type: "Point", coordinates: [-73.9, 40.7] }, $maxDistance: 1000 } }
});`,
        projectLink: "https://github.com/Amaan00844/project-mongodb-geospatial-queries",
      },
    ],
  },
  nodejs: {
    basic: [
      {
        title: "Basic Server",
        code: `const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node.js');
}).listen(3000);`,
        projectLink: "https://github.com/Amaan00844/simple-nodejs-server",
      },
      {
        title: "Simple API",
        code: `const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello API' }));
}).listen(3000);`,
        projectLink: "https://github.com/Amaan00844/node.js-simple-api",
      },
    ],
    intermediate: [
      {
        title: "File Upload Server",
        code: `const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(fs.createWriteStream('upload.txt'));
    res.end('Uploaded');
  }
}).listen(3000);`,
        projectLink: "https://github.com/Amaan00844/nodejs-simple-file-upload",
      },
      {
        title: "Static File Server",
        code: `const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}).listen(3000);`,
        projectLink: "https://github.com/Amaan00844/uploadFile",
      },
    ],
    professional: [
      {
        title: "WebSocket Server",
        code: `const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
wss.on('connection', (ws) => {
  ws.on('message', (msg) => ws.send(\`Echo: \${msg}\`));
});`,
        projectLink: "https://github.com/Amaan00844/ws",
      },
      {
        title: "Task Queue System",
        code: `const { Worker } = require('worker_threads');
const task = new Worker('./task.js');
task.on('message', (msg) => console.log('Task result:', msg));
task.postMessage('Start task');`,
        projectLink: "https://github.com/Amaan00844/bee-queue",
      },
    ],
  },
};

export default function Projects() {
  const searchParams = useSearchParams();
  const tech = searchParams.get("tech");
  const techKey = tech?.toLowerCase() || "react";
  const projects = projectsData[techKey] || projectsData.react;
  const [copied, setCopied] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e9ff] to-[#d0deff] animate-gradient-shift flex items-center justify-center p-4 sm:p-6 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="w-full max-w-7xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-white/30 p-6 sm:p-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-10 sm:mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-white rounded-full shadow-md mr-3">
              {techIcons[techKey] || techIcons.react}
            </div>                  
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              {techKey.charAt(0).toUpperCase() + techKey.slice(1)} Projects
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore projects at different skill levels to enhance your {techKey} expertise. Dive into practical examples and visit live projects to see them in action.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {["basic", "intermediate", "professional"].map((level) => (
            <motion.div
              key={level}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-colors"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={`px-4 sm:px-5 py-3 sm:py-4 ${
                level === "basic" ? "bg-gradient-to-r from-blue-600 to-blue-500" :
                level === "intermediate" ? "bg-gradient-to-r from-purple-600 to-purple-500" :
                "bg-gradient-to-r from-indigo-600 to-indigo-500"
              }`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-semibold text-white capitalize flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-white/30 mr-2"></span>
                    {level} Projects
                  </h2>
                  <FiCode className="text-white/80 w-5 h-5" />
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-6 sm:space-y-8">
                {projects[level].map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="border-b border-gray-100 pb-6 sm:pb-8 last:border-b-0"
                    variants={itemVariants}
                  >
                    <div className="flex items-start mb-3 sm:mb-4">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-2 ${
                        level === "basic" ? "bg-blue-500" :
                        level === "intermediate" ? "bg-purple-500" :
                        "bg-indigo-500"
                      }`}></div>
                      <h3 className="text-md sm:text-lg font-semibold text-gray-800">{project.title}</h3>
                    </div>
                    <div className="relative group">
                      <pre className="p-4 text-xs sm:text-sm text-gray-700 bg-gray-50 rounded-lg h-48 overflow-x-auto font-mono border border-gray-200 leading-relaxed">
                        <code className="text-gray-800">
                          <span className="text-blue-600">function</span> <span className="text-purple-600">{project.title.replace(/\s+/g, '')}</span>
                          {project.code.match(/{(.|\n)+}/)?.[0] || project.code}
                        </code>
                      </pre>
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                          className="p-2 text-gray-500 hover:text-gray-700 bg-white/80 backdrop-blur-sm rounded transition-colors"
                          onClick={() => handleCopy(project.code, index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Copy code"
                        >
                          <FiCopy className="w-4 h-4 sm:w-5 sm:h-5" />
                          {copied === index && (
                            <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1">
                              Copied!
                            </span>
                          )}
                        </motion.button>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-5 flex justify-center gap-3">
                      <Link href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          className={`px-4 py-2 rounded-lg font-medium text-white flex items-center ${
                            level === "basic" ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600" :
                            level === "intermediate" ? "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600" :
                            "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600"
                          } transition-colors relative overflow-hidden`}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <span className="relative z-10 flex items-center">
                            <FiGithub className="mr-2" />
                            View Code
                          </span>
                          <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"></span>
                        </motion.button>
                      </Link>
                     
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}