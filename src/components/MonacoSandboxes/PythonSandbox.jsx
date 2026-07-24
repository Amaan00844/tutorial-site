"use client";

import { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function PythonSandbox({
  filesObj,
  fileToOpen,
  onLoad,
  hideExplorer = true,
}) {
  const [files, setFiles] = useState({});
  const [activeFile, setActiveFile] = useState(fileToOpen || "script.py");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const editorRef = useRef(null);
  const outputRef = useRef(null);
  const pyodideRef = useRef(null);

  useEffect(() => {
    if (filesObj) {
      const processedFiles = {};
      Object.entries(filesObj).forEach(([filename, content]) => {
        if (typeof content === "string") {
          processedFiles[filename] = content;
        } else if (content && typeof content === "object" && content.content) {
          processedFiles[filename] = content.content;
        }
      });
      setFiles(processedFiles);

      if (fileToOpen && processedFiles[fileToOpen]) {
        setActiveFile(fileToOpen);
      }
    }
  }, [filesObj, fileToOpen]);

  useEffect(() => {
    if (Object.keys(files).length > 0 && onLoad) {
      onLoad();
    }
  }, [files, onLoad]);

  // Initialize Pyodide
  useEffect(() => {
    const initPyodide = async () => {
      try {
        setOutput("🐍 Initializing Python environment...\n");

        // Load Pyodide from CDN
        if (!window.loadPyodide) {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
          script.onload = async () => {
            try {
              const pyodide = await window.loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
              });

              // Capture print output
              pyodide.runPython(`
import sys
from io import StringIO

class OutputCapture:
    def __init__(self):
        self.output = StringIO()
        self.original_stdout = sys.stdout
        self.original_stderr = sys.stderr
    
    def start_capture(self):
        sys.stdout = self.output
        sys.stderr = self.output
    
    def stop_capture(self):
        sys.stdout = self.original_stdout
        sys.stderr = self.original_stderr
        result = self.output.getvalue()
        self.output = StringIO()
        return result

output_capture = OutputCapture()
              `);

              pyodideRef.current = pyodide;
              setPyodideReady(true);
              setOutput("✅ Python environment ready!\n");
            } catch (error) {
              setOutput(
                "❌ Failed to initialize Python environment: " +
                  error.message +
                  "\n"
              );
            }
          };
          script.onerror = () => {
            setOutput("❌ Failed to load Pyodide library\n");
          };
          document.head.appendChild(script);
        } else {
          // Pyodide already loaded
          const pyodide = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
          });
          pyodideRef.current = pyodide;
          setPyodideReady(true);
          setOutput("✅ Python environment ready!\n");
        }
      } catch (error) {
        setOutput("❌ Error initializing Python: " + error.message + "\n");
      }
    };

    initPyodide();
  }, []);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    monaco.editor.defineTheme("custom-theme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#ffffff",
        "editor.foreground": "#000000",
      },
    });
    monaco.editor.setTheme("custom-theme");

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      handleRunCode();
    });
  };

  const handleEditorChange = (value) => {
    if (activeFile && value !== undefined) {
      setFiles((prev) => ({
        ...prev,
        [activeFile]: value,
      }));
    }
  };

  const executePython = async (code) => {
    return new Promise((resolve) => {
      try {
        if (!pyodideReady || !pyodideRef.current) {
          resolve({
            output: "",
            errors:
              "Python environment not ready. Please wait for initialization.",
            success: false,
          });
          return;
        }

        const pyodide = pyodideRef.current;

        // Start capturing output
        pyodide.runPython("output_capture.start_capture()");

        try {
          // Execute the user's Python code
          pyodide.runPython(code);

          // Stop capturing and get output
          const output = pyodide.runPython("output_capture.stop_capture()");

          resolve({
            output: output || "Code executed successfully (no output)",
            errors: "",
            success: true,
          });
        } catch (pythonError) {
          // Stop capturing in case of error
          try {
            pyodide.runPython("output_capture.stop_capture()");
          } catch (e) {
            // Ignore cleanup errors
          }

          resolve({
            output: "",
            errors: pythonError.message || "Python execution error",
            success: false,
          });
        }
      } catch (error) {
        resolve({
          output: "",
          errors: "Execution environment error: " + error.message,
          success: false,
        });
      }
    });
  };

  const handleRunCode = async () => {
    if (!files[activeFile]) return;

    if (!pyodideReady) {
      setOutput("⏳ Python environment is still loading. Please wait...\n");
      return;
    }

    setIsRunning(true);
    setOutput("🐍 Running Python code...\n");

    try {
      const code = files[activeFile];
      const result = await executePython(code);

      let outputText = "";
      if (result.output) {
        outputText += result.output + "\n";
      }
      if (result.errors) {
        outputText += "❌ Errors:\n" + result.errors + "\n";
      }
      if (result.success) {
        outputText += "\n✅ Python executed successfully";
      }

      setOutput(outputText);

      setTimeout(() => {
        if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
      }, 100);
    } catch (error) {
      setOutput((prev) => prev + "\n❌ Execution error: " + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  // Execute JavaScript test files for Python projects
  const executeJavaScriptTest = (testCode, userCode) => {
    try {
      // Create a function to evaluate the test code
      const testFunction = new Function(
        "userCode",
        `
        ${testCode}
        
        // Execute the test suite
        if (typeof testSuite !== 'undefined' && testSuite.tests) {
          let totalScore = 0;
          let allDetails = [];
          let allPassed = true;
          
          for (const test of testSuite.tests) {
            if (typeof test.test === 'function') {
              const result = test.test(userCode);
              totalScore += result.score || 0;
              if (result.details) {
                allDetails = allDetails.concat(result.details);
              }
              if (!result.passed) {
                allPassed = false;
              }
            }
          }
          
          return {
            passed: allPassed && totalScore >= 70,
            score: Math.min(totalScore, 100),
            details: allDetails,
            message: testSuite.name + " - Score: " + Math.min(totalScore, 100) + "/100"
          };
        }
        
        return {
          passed: false,
          score: 0,
          details: ["❌ Invalid test format"],
          message: "Test execution failed"
        };
      `
      );

      return testFunction(userCode);
    } catch (jsError) {
      console.error("JavaScript test execution error:", jsError);
      return {
        passed: false,
        score: 0,
        message: "JavaScript test execution error: " + jsError.message,
        details: ["❌ Test execution failed"],
      };
    }
  };

  // Simple Python test execution for .py test files
  const executePythonTest = (testCode, userCode) => {
    try {
      function run_simple_test(user_code) {
        const result = { passed: false, score: 0, message: "", details: [] };

        try {
          if (!user_code || user_code.trim().length < 5) {
            result["message"] = "Code is empty or too short";
            return result;
          }

          let score = 0;
          const checks = [];

          // Basic Python checks
          if (user_code.includes("print(")) {
            checks.push("✅ Has print statement");
            score += 30;
          } else {
            checks.push("❌ Missing print statement");
          }

          // Check for variable assignment (not comparison)
          const equalSigns = (user_code.match(/=/g) || []).length;
          const comparisonSigns = (user_code.match(/==/g) || []).length;
          if (equalSigns > comparisonSigns) {
            checks.push("✅ Has variable assignment");
            score += 30;
          } else {
            checks.push("❌ Missing variable assignment");
          }

          // Topic-specific checks based on the test file content
          if (testCode.includes("Variables and Data Types")) {
            // Check for different data types
            if (/\w+\s*=\s*["']/.test(user_code)) {
              checks.push("✅ Has string variable");
              score += 20;
            } else {
              checks.push("❌ Missing string variable");
            }

            if (/\w+\s*=\s*\d+/.test(user_code)) {
              checks.push("✅ Has number variable");
              score += 20;
            } else {
              checks.push("❌ Missing number variable");
            }
          } else if (testCode.includes("Function")) {
            // Check for function definition
            if (user_code.includes("def ")) {
              checks.push("✅ Has function definition");
              score += 40;
            } else {
              checks.push("❌ Missing function definition");
            }
          } else {
            // Generic topic check
            checks.push("⚠️ Add topic-specific content");
            score += 20;
          }

          result["details"] = checks;
          result["score"] = Math.min(score, 100);
          result["passed"] = score >= 70;
          result["message"] = `Score: ${result["score"]}/100`;
        } catch (e) {
          result["message"] = `Error: ${e.message}`;
        }

        return result;
      }

      // Execute the test function
      return run_simple_test(userCode);
    } catch (error) {
      console.error("Python test execution error:", error);
      return {
        passed: false,
        score: 0,
        message: "Test execution error: " + error.message,
        details: ["❌ Test execution failed"],
      };
    }
  };

  const handleRunTests = async () => {
    if (!files[activeFile]) return;

    setIsRunning(true);
    setOutput("🧪 Running Python tests...\n");

    try {
      // Look for test files (both .py and .js)
      const testFile = Object.keys(files).find(
        (name) =>
          name.includes("test") &&
          (name.endsWith(".py") || name.endsWith(".js"))
      );

      if (!testFile) {
        setOutput((prev) => prev + "❌ No test file found");
        setIsRunning(false);
        return;
      }

      const testCode = files[testFile];
      const userCode = files[activeFile] || "";

      // Execute test based on file type
      try {
        let result;

        if (testFile.endsWith(".js")) {
          // Handle JavaScript test files
          result = executeJavaScriptTest(testCode, userCode);
        } else {
          // Handle Python test files
          result = executePythonTest(testCode, userCode);
        }

        let outputText = "📊 Python Test Results:\n";
        outputText += `Score: ${result.score || 0}/100\n`;
        outputText += `Passed: ${result.passed ? "✅ Yes" : "❌ No"}\n`;

        if (result.details && result.details.length > 0) {
          outputText += "\n📋 Details:\n";
          result.details.forEach((detail) => {
            outputText += `  ${detail}\n`;
          });
        }

        if (result.message) {
          outputText += `\n💬 ${result.message}`;
        }

        setOutput(outputText);

        // Store results for parent component (store both passed and failed results)
        setFiles((prev) => ({
          ...prev,
          "results.tests": JSON.stringify(
            {
              score: result.score,
              passed: result.passed,
              timestamp: new Date().toISOString(),
              details: result.details || [],
              message: result.message || "",
            },
            null,
            2
          ),
        }));

        // Also store attempt data
        setFiles((prev) => ({
          ...prev,
          "attempts.tests": JSON.stringify(
            {
              userCode: userCode,
              timestamp: new Date().toISOString(),
              result: result,
            },
            null,
            2
          ),
        }));
      } catch (testSetupError) {
        setOutput(
          (prev) =>
            prev + `❌ Python test execution error: ${testSetupError.message}\n`
        );
      }
    } catch (error) {
      setOutput((prev) => prev + "\n❌ Test error: " + error.message);
      console.error("Python test execution error:", error);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  useEffect(() => {
    if (window) {
      window.monacoSandbox = {
        getFsSnapshot: () => Promise.resolve(files),
        applyFsDiff: (diff) => {
          setFiles((prev) => {
            const newFiles = { ...prev };
            if (diff.destroy) {
              diff.destroy.forEach((filename) => {
                delete newFiles[filename];
              });
            }
            if (diff.create) {
              Object.assign(newFiles, diff.create);
            }
            return newFiles;
          });
          return Promise.resolve();
        },
      };
    }
  }, [files]);

  return (
    <div className="w-full h-[calc(100vh-11rem)] flex flex-col">
      {!hideExplorer && (
        <div className="flex bg-gray-100 border-b overflow-x-auto">
          {Object.keys(files).map((filename) => (
            <button
              key={filename}
              onClick={() => setActiveFile(filename)}
              className={`px-4 py-2 text-sm border-r whitespace-nowrap ${
                activeFile === filename
                  ? "bg-white border-b-2 border-blue-500 text-blue-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {filename}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{activeFile}</span>
              <span className="text-xs text-gray-500">(Python)</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleRunCode}
                disabled={isRunning || !pyodideReady}
                className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isRunning
                  ? "⏳ Running..."
                  : !pyodideReady
                  ? "⏳ Loading..."
                  : "🐍 Run"}
              </button>
              <button
                onClick={handleRunTests}
                disabled={isRunning || !pyodideReady}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isRunning
                  ? "⏳ Testing..."
                  : !pyodideReady
                  ? "⏳ Loading..."
                  : "🧪 Test"}
              </button>
              <button
                onClick={clearOutput}
                className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                🗑️ Clear
              </button>
            </div>
          </div>

          <div className="flex-1">
            <Editor
              height="100%"
              language="python"
              value={files[activeFile] || ""}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 4,
                insertSpaces: true,
                wordWrap: "on",
                theme: "vs",
              }}
            />
          </div>
        </div>

        <div className="w-1/3 border-l flex flex-col">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <h3 className="text-sm font-medium">Python Output</h3>
          </div>
          <div
            ref={outputRef}
            className="flex-1 p-4 bg-black text-green-400 font-mono text-sm overflow-y-auto"
          >
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
