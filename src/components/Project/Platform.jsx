"use client";

import { useState, useMemo, useEffect } from "react";
import Sandbox from "@/components/Sandbox";
import Modal from "@/components/Modals/Modal";
import Instructions from "@/components/Modals/Instructions";
import TestPassed from "@/components/Modals/TaskPassed";
import TestNotPassed from "@/components/Modals/TaskNotPassed";
import { normalizeLevel } from "@/components/Modals/utils";

export default function ProjectPlatform({
  setSidebarContent,
  menuItems,
  projectType,
  task,
  onMenuItemClick,
}) {
  const [selectedLevel, setSelectedLevel] = useState("Basic");
  const [selectedProject, setSelectedProject] = useState(menuItems[0]?.label || "");
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [startTime, setStartTime] = useState(null);

  // Files based on projectType
  const getFilesForProjectType = (type) => {
    switch (type) {
      case "html-css-js":
        return {
          "index.html": "<!DOCTYPE html><html><head><title>Project</title><link rel='stylesheet' href='styles.css'></head><body><script src='script.js'></script></body></html>",
          "styles.css": "",
          "script.js": "",
          "package.json": `{
            "name": "project-sandbox",
            "stackblitz": {
              "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
            },
            "dependencies": {
              "cheerio": "^1.0.0",
              "htmlhint": "^1.1.4",
              "servor": "^4.0.2",
              "express": "^4.18.2"
            }
          }`
        };
      case "mern":
        return {
          "server.js": "const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server running'));",
          "client/index.html": "<!DOCTYPE html><html><head><title>MERN Project</title></head><body><div id='root'></div><script src='index.js'></script></body></html>",
          "client/index.js": "import React from 'react';\nimport ReactDOM from 'react-dom';\nReactDOM.render(<h1>Hello, MERN!</h1>, document.getElementById('root'));",
          "package.json": `{
            "name": "mern-sandbox",
            "stackblitz": {
              "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
            },
            "dependencies": {
              "express": "^4.18.2",
              "react": "^18.2.0",
              "react-dom": "^18.2.0",
              "servor": "^4.0.2"
            }
          }`
        };
      case "nextjs":
        return {
          "pages/index.js": "export default function Home() { return <div>Welcome to Next.js</div>; }",
          "package.json": `{
            "name": "nextjs-sandbox",
            "stackblitz": {
              "startCommand": "node tests.test && source ~/.jshrc",
"installDependencies": false
            },
            "scripts": {
              "dev": "next dev",
              "build": "next build",
              "start": "next start"
            },
            "dependencies": {
              "next": "^14.0.0",
              "react": "^18.2.0",
              "react-dom": "^18.2.0"
            }
          }`
        };
      case "python":
        return {
          "main.py": "print('Hello, Python Project!')",
          "requirements.txt": "",
          "tests.py": "print('Tests for Python project')"
        };
      default:
        return {};
    }
  };

  const files = getFilesForProjectType(projectType);
  const filesOpened = useMemo(() => {
    switch (projectType) {
      case "mern": return "server.js";
      case "nextjs": return "pages/index.js";
      case "python": return "main.py";
      default: return "index.html";
    }
  }, [projectType]);

  useEffect(() => {
    setStartTime(Date.now());
    localStorage.setItem("startTimestamp", Date.now().toString());
    const storedAttempts = localStorage.getItem(`attempts-${selectedProject}`);
    if (storedAttempts) setAttempts(parseInt(storedAttempts));
  }, [selectedProject]);

  const handleLevelChange = (e) => {
    const level = normalizeLevel(e.target.value);
    setSelectedLevel(level);
    setSidebarContent(e);
    onMenuItemClick(menuItems[0]?.task || "");
  };

  const handleProjectChange = (e) => {
    const projectLabel = e.target.value;
    setSelectedProject(projectLabel);
    const item = menuItems.find((itm) => itm.label === projectLabel);
    if (item) onMenuItemClick(item.task);
  };

  const handleSubmit = async () => {
    setAttempts(prev => {
      const newAttempt = prev + 1;
      localStorage.setItem(`attempts-${selectedProject}`, newAttempt);
      return newAttempt;
    });

    const correctness = Math.random() > 0.5;
    if (correctness) {
      const endTimestamp = Date.now();
      setResult({
        timestamp: endTimestamp,
        attempts,
      });
      setShowResult(true);
    } else {
      setShowAlert(true);
    }

    const endTime = Date.now();
    const executionTime = (endTime - startTime) / 1000;
    const finalPoint = correctness * 0.5 + (1 - attempts / 10) + executionTime * 0.1;

    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: selectedProject,
        finalPoint,
        attempts,
        executionTime,
        projectType,
      }),
    });
  };

  const sandboxElement = useMemo(() => {
    return files && filesOpened ? (
      <Sandbox
        fileToOpen={filesOpened}
        filesObj={files}
        onLoad={()=>{}}
      />
    ) : null;
  }, [files, filesOpened]);

  return (
    <div className="relative">
      {/* Modals */}
      {showInstructions && (
        <Modal onClose={() => setShowInstructions(false)} ariaLabel="Instructions">
          <Instructions task={task} onClose={() => setShowInstructions(false)} />
        </Modal>
      )}
      {showAlert && (
        <Modal onClose={() => setShowAlert(false)} ariaLabel="Test Not Passed">
          <TestNotPassed onClose={() => setShowAlert(false)} />
        </Modal>
      )}
      {showResult && result && (
        <Modal onClose={() => setShowResult(false)} ariaLabel="Test Passed">
          <TestPassed result={result} level={selectedLevel} onClose={() => setShowResult(false)} />
        </Modal>
      )}

      {/* Top Bar */}
      <div className="flex justify-between items-center py-5 px-4">
        <div className="flex space-x-3 items-center">
          {["Basic", "Intermediate", "Hard"].map((level) => {
            const isSelected = selectedLevel === level;
            const baseColor =
              level === "Basic"
                ? "bg-blue-500 hover:bg-blue-600 ring-blue-300"
                : level === "Intermediate"
                  ? "bg-green-500 hover:bg-green-600 ring-green-300"
                  : "bg-red-500 hover:bg-red-600 ring-red-300";

            return (
              <label key={level}>
                <input
                  type="radio"
                  name="level"
                  value={level}
                  className="sr-only peer"
                  onChange={handleLevelChange}
                  checked={isSelected}
                />
                <div
                  className={`px-4 py-2 rounded text-white cursor-pointer transition-all ${baseColor} ${
                    isSelected ? "ring-4 scale-105 shadow-md" : ""
                  }`}
                >
                  {level}
                </div>
              </label>
            );
          })}

          <select
            value={selectedProject}
            onChange={handleProjectChange}
            className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
          >
            {menuItems.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setShowInstructions(true)}
            className="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Instructions
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Sandbox */}
      <div className="pr-2">
        <h1 className="text-xl font-bold mb-4 pl-3">{projectType.toUpperCase()} Project Sandbox</h1>
        <div className="h-[400px]">{sandboxElement}</div>
      </div>
    </div>
  );
}