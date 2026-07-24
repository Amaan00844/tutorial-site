"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MongoDBProjects() {
  const [projects, setProjects] = useState({
    basic: [],
    intermediate: [],
    hard: [],
  });
  const [code, setCode] = useState(
    `db.users.insertOne({ name: "John Doe", email: "john@example.com", age: 25 });`,
  );
  const [output, setOutput] = useState("");
  const [scores, setScores] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
        "https://study-portal-backend-9zpf.onrender.com//api/projects?category=mongodb",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          // Invalid or expired token, log out and redirect to login
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
    }
  };

  const fetchScores = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://study-portal-backend-9zpf.onrender.com//api/scores?userId=${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          // Invalid or expired token, log out and redirect to login
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          router.push("/login");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Ensure data is an array before filtering
      if (Array.isArray(data)) {
        setScores(data.filter((score) => score.category === "mongodb"));
      } else {
        setScores([]); // Fallback to empty array if data is not an array
        console.error("Scores data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching scores:", error);
      setScores([]); // Fallback to empty array on error
    }
  };

  const runCode = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://study-portal-backend-9zpf.onrender.com//api/execute",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ code, category: "mongodb" }),
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
        // Submit a mock score (e.g., 100 for success)
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
        "https://study-portal-backend-9zpf.onrender.com//api/scores",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId,
            category: "mongodb",
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
      await fetchScores(); // Refresh scores after submission
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-green-100 px-4 py-10">
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
          MongoDB Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Basic</h2>
            <ul className="list-disc pl-5 text-black">
              {projects.basic.map((project) => (
                <li key={project._id}>
                  <Link
                    href={`/mongodb-projects/${project.slug}`}
                    className="text-green-600 hover:underline"
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
                    href={`/mongodb-projects/${project.slug}`}
                    className="text-green-600 hover:underline"
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
                    href={`/mongodb-projects/${project.slug}`}
                    className="text-green-600 hover:underline"
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
            Practice MongoDB Code
          </h2>
          <p className="text-black mb-4">
            Write and test your MongoDB code below. Click "Run Code" to execute
            it.
          </p>
          <textarea
            className="w-full h-64 p-4 bg-gray-100 rounded-lg text-black border border-gray-300"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <button
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
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
