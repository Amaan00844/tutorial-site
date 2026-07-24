"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function NodeProjectDetail() {
  const [project, setProject] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { project: slug } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
      fetchProject();
    }
  }, [router, slug]);

  const fetchProject = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://study-portal-backend-9zpf.onrender.com//api/projects/${slug}`,
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
        throw new Error("Project not found");
      }
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error("Error fetching project:", error);
      setError("Failed to load project details. Please try again later.");
      setProject(null);
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
        {error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : !project ? (
          <div className="text-center text-black">
            Loading project or project not found...
          </div>
        ) : (
          <>
            <h1 className="text-5xl font-bold text-black mb-8 text-center">
              {project.title}
            </h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-black mb-4">
                Project Details
              </h2>
              <p className="text-black mb-4">
                <strong>Category:</strong> {project.category}
              </p>
              <p className="text-black mb-4">
                <strong>Level:</strong> {project.level}
              </p>
              <p className="text-black mb-4">
                <strong>Description:</strong> {project.description}
              </p>
              <Link
                href="/node-projects"
                className="text-purple-600 hover:underline"
              >
                Back to Node.js Projects
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
