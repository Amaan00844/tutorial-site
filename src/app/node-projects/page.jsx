"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NodeProjects() {
  const [projects, setProjects] = useState({
    basic: [],
    intermediate: [],
    hard: [],
  });
  const [code, setCode] = useState(`const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\\n');
});
server.listen(3000, () => {
  console.log('Server running on port 3000');
});`);
  const [output, setOutput] = useState("");
  const [scores, setScores] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
      fetchProjects();
      fetchScores();
    }
  }, [router]);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://study-portal-backend-9zpf.onrender.com/api/projects?category=node",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          router.push("/login");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const grouped = {
        basic: data.filter((p) => p.level === "basic"),
        intermediate: data.filter((p) => p.level === "intermediate"),
        hard: data.filter((p) => p.level === "hard"),
      };
      setProjects(grouped);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects. Please try again later.");
    }
  };

  const fetchScores = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://study-portal-backend-9zpf.onrender.com/api/scores?userId=${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          router.push("/login");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setScores(data.filter((score) => score.category === "node"));
      } else {
        setScores([]);
        console.error("Scores data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching scores:", error);
      setError("Failed to load scores. Please try again later.");
    }
  };

  const runCode = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://study-portal-backend-9zpf.onrender.com/api/execute",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ code, category: "node" }),
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          router.push("/login");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setOutput(result.output || result.error || "No output");
      if (response.ok) {
        await submitScore(100);
      }
    } catch (error) {
      setOutput("Error running code: " + error.message);
    }
  };

  const submitScore = async (score) => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://study-portal-backend-9zpf.onrender.com/api/scores",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId,
            category: "node",
            projectId: "mock-project-id",
            score,
          }),
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          router.push("/login");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await fetchScores();
    } catch (error) {
      console.error("Error submitting score:", error);
      setError("Failed to submit score. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-purple-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-center space-x-4 mb-8">
          <Link href="/" className="text-gray-600 hover:underline">
            Home
          </Link>
          <Link
            href="/mongodb-projects"
            className="text-green-600 hover:underline"
          >
            MongoDB
          </Link>
          <Link
            href="/express-projects"
            className="text-blue-600 hover:underline"
          >
            Express
          </Link>
          <Link
            href="/node-projects"
            className="text-purple-600 hover:underline"
          >
            Node.js
          </Link>
          <Link href="/react-projects" className="text-red-600 hover:underline">
            React
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:underline"
          >
            Logout
          </button>
        </nav>
        <h1 className="text-5xl font-bold text-black mb-8 text-center">
          Node.js Projects
        </h1>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Basic</h2>
            <ul className="list-disc pl-5 text-black">
              {projects.basic.map((project) => (
                <li key={project._id}>
                  <Link
                    href={`/node-projects/${project.slug}`}
                    className="text-purple-600 hover:underline"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Intermediate
            </h2>
            <ul className="list-disc pl-5 text-black">
              {projects.intermediate.map((project) => (
                <li key={project._id}>
                  <Link
                    href={`/node-projects/${project.slug}`}
                    className="text-purple-600 hover:underline"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Hard</h2>
            <ul className="list-disc pl-5 text-black">
              {projects.hard.map((project) => (
                <li key={project._id}>
                  <Link
                    href={`/node-projects/${project.slug}`}
                    className="text-purple-600 hover:underline"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Practice Node.js Code
          </h2>
          <p className="text-black mb-4">
            Write and test your Node.js code below. Click "Run Code" to execute
            it.
          </p>
          <textarea
            className="w-full h-64 p-4 bg-gray-100 rounded-lg text-black border border-gray-300"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <button
            className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            onClick={runCode}
          >
            Run Code
          </button>
          {output && (
            <pre className="mt-4 bg-gray-100 p-4 rounded-lg text-black">
              {output}
            </pre>
          )}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Your Scores
          </h2>
          {scores.length > 0 ? (
            <ul className="list-disc pl-5 text-black">
              {scores.map((score) => (
                <li key={score._id}>
                  Score: {score.score} -{" "}
                  {new Date(score.timestamp).toLocaleString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-black">
              No scores yet. Run some code to earn scores!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
