import { useState, useMemo, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Instructions from "@/components/Modals/Instructions";
import TestPassed from "@/components/Modals/TaskPassed";
import TestNotPassed from "@/components/Modals/TaskNotPassed";
import Modal from "@/components/Modals/Modal";
import Leaderboard from "@/components/Leaderboard";
import { 
  JavaScriptSandbox, 
  PythonSandbox, 
  HTMLSandbox, 
  CSSSandbox, 
  ReactSandbox, 
  NodeJSSandbox, 
  NextJSSandbox, 
  ExpressSandbox, 
  SQLSandbox, 
  MySQLSandbox, 
  MongoDBSandbox, 
  JavaSandbox, 
  PHPSandbox 
} from "@/components/MonacoSandboxes";

export default function MonacoTestPlatform({
  setSidebarContent,
  menuItems,
  files,
  filesOpened,
  task,
  title,
  language = 'javascript',
  hideExplorer = true
}) {
  const [sandboxLoaded, setSandboxLoaded] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("basic");
  const [showingInstructions, setShowingInstructions] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [showResult, setResultPage] = useState(false);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(menuItems[0]?.label || "");
  const [url, setUrl] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [currentFiles, setCurrentFiles] = useState(files);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedExercises, setSubmittedExercises] = useState(new Set());

  const subtitle = hideExplorer === false ? "Projects" : "Exercises";

  // Function to check if current exercise has been submitted
  const getCurrentExerciseKey = () => {
    const index = menuItems.findIndex(item => item.label === selected) + 1;
    return `${title.replace(".", "").toLowerCase()}_${selectedLevel.toLowerCase()}_${index}`;
  };

  // Function to prevent multiple submissions
  const checkIfAlreadySubmitted = () => {
    const exerciseKey = getCurrentExerciseKey();
    return submittedExercises.has(exerciseKey);
  };

  // Function to mark exercise as submitted
  const markExerciseAsSubmitted = () => {
    const exerciseKey = getCurrentExerciseKey();
    setSubmittedExercises(prev => new Set([...prev, exerciseKey]));
    setHasSubmitted(true);
  };

  // Reset submission status when exercise changes
  useEffect(() => {
    setHasSubmitted(checkIfAlreadySubmitted());
  }, [selected, selectedLevel]);

  const handleSandboxLoad = () => setSandboxLoaded(true);

  const handleInstructionsClose = () => {
    setShowingInstructions(false);
    // Start the timer when instructions are closed (user starts working)
    const currentTime = Date.now();
    localStorage.setItem("startTimestamp", currentTime.toString());
    console.log("Timer started for exercise at:", new Date(currentTime).toISOString());
  };

  const handleSubmit = async () => {
    // Check if already submitted
    if (checkIfAlreadySubmitted()) {
      alert("You have already submitted this exercise. You cannot submit again.");
      return;
    }

    try {
      // Get results from Monaco sandbox
      if (window.monacoSandbox && window.monacoSandbox.getFsSnapshot) {
        const fsSnap = await window.monacoSandbox.getFsSnapshot();

        if ("results.tests" in fsSnap && fsSnap["results.tests"]) {
          const testResults = JSON.parse(fsSnap["results.tests"]);
          const index = menuItems.findIndex(item => item.label === selected) + 1;
          setUrl(`${title.replace(".", "").toLowerCase()}/${selectedLevel.toLowerCase()}/${index}`);
          setResult(testResults);
          
          // Mark as submitted BEFORE showing results
          markExerciseAsSubmitted();
          
          // Show results regardless of pass/fail status
          if (testResults.passed) {
            setResultPage(true);
          } else {
            setAlert(true);
          }
          
          // Clear results after submission
          await window.monacoSandbox.applyFsDiff({ 
            destroy: ['results.tests', 'attempts.tests'], 
            create: {} 
          });
        } else {
          // No test results found - user needs to run tests first
          alert("Please run the tests first by clicking the '🧪 Test' button in the code editor.");
        }
      } else {
        setAlert(true);
      }
    } catch (error) {
      console.error("Monaco submission error:", error);
      alert("There was an issue submitting. Please try again.");
    }
  };

  const checkPreviousExerciseAttempted = async () => {
    try {
      if (window.monacoSandbox && window.monacoSandbox.getFsSnapshot) {
        const fsSnap = await window.monacoSandbox.getFsSnapshot();
        const files = Object.keys(fsSnap);

        if (files.includes('results.tests') || files.includes('attempts.tests')) {
          setAlert(true);
          return 1;
        }
      }
      return 0;
    } catch (error) {
      console.error("Error checking previous exercise:", error);
      return 0;
    }
  };

  const handleLevelChange = async (e) => {
    const level = e.target.value.toLowerCase();
    if (!(await checkPreviousExerciseAttempted())) {
      setSelectedLevel(level);
      setIsSidebarVisible(true);
      setSidebarContent(e);
      setShowingInstructions(true);
    }
  };

  // Get the appropriate Monaco sandbox component based on language
  const getSandboxComponent = () => {
    const sandboxProps = {
      filesObj: currentFiles,
      fileToOpen: filesOpened,
      onLoad: handleSandboxLoad,
      hideExplorer: hideExplorer
    };

    switch (language.toLowerCase()) {
      case 'javascript':
      case 'js':
        return <JavaScriptSandbox {...sandboxProps} />;
      case 'python':
      case 'py':
        return <PythonSandbox {...sandboxProps} />;
      case 'html':
        return <HTMLSandbox {...sandboxProps} />;
      case 'css':
        return <CSSSandbox {...sandboxProps} />;
      case 'react':
      case 'jsx':
        return <ReactSandbox {...sandboxProps} />;
      case 'nodejs':
      case 'node':
        return <NodeJSSandbox {...sandboxProps} />;
      case 'nextjs':
      case 'next':
        return <NextJSSandbox {...sandboxProps} />;
      case 'express':
        return <ExpressSandbox {...sandboxProps} />;
      case 'sql':
        return <SQLSandbox {...sandboxProps} />;
      case 'mysql':
        return <MySQLSandbox {...sandboxProps} />;
      case 'mongodb':
      case 'mongo':
        return <MongoDBSandbox {...sandboxProps} />;
      case 'java':
        return <JavaSandbox {...sandboxProps} />;
      case 'php':
        return <PHPSandbox {...sandboxProps} />;
      default:
        return <JavaScriptSandbox {...sandboxProps} />;
    }
  };

  const sandboxElement = useMemo(() => {
    return currentFiles && filesOpened ? getSandboxComponent() : null;
  }, [currentFiles, filesOpened, language]);

  const extendedMenu = useMemo(() => {
    return menuItems.map((item) => ({
      ...item,
      onClick: async (e) => {
        const previousAttempt = await checkPreviousExerciseAttempted();
        if (!previousAttempt) {
          // Clear any existing timer when starting a new exercise
          localStorage.removeItem("startTimestamp");
          
          // Load exercise files from the onClick function
          if (item.onClick) {
            try {
              const result = await item.onClick(e);
              if (result && typeof result === 'object') {
                // Handle both { files: {...} } and direct files object
                const newFiles = result.files || result;
                if (newFiles && typeof newFiles === 'object') {
                  setCurrentFiles(newFiles);
                }
              }
            } catch (error) {
              console.error("Error loading exercise files:", error);
            }
          }
          
          setShowingInstructions(true);
          return 1;
        }
        return 0;
      },
    }));
  }, [menuItems]);

  return (
    <div className="relative">
      {showingInstructions && (
        <Modal onClose={handleInstructionsClose} ariaLabel="Instructions">
          <Instructions task={task} onClose={handleInstructionsClose} />
        </Modal>
      )}

      {showAlert && (
        <Modal onClose={() => setAlert(false)} ariaLabel="Test Not Passed">
          <TestNotPassed result={result} onClose={() => setAlert(false)} />
        </Modal>
      )}

      {showResult && (
        <Modal onClose={() => setResultPage(false)} ariaLabel="Test Passed">
          <TestPassed result={result} onClose={() => setResultPage(false)} level={selectedLevel} url={url} />
        </Modal>
      )}

      {showLeaderboard && (
        <Modal onClose={() => setShowLeaderboard(false)} ariaLabel="Leaderboard">
          <Leaderboard />
        </Modal>
      )}

      {/* Top Bar */}
      <div className="flex justify-between items-center py-5 px-4">
        {/* Difficulty Buttons */}
        <div className="flex space-x-3" role="radiogroup" aria-label="Difficulty">
          {["Basic", "Intermediate", "Hard"].map((level) => {
            const isSelected = selectedLevel === level.toLowerCase();
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
                  className={`px-4 py-2 rounded text-white cursor-pointer transition-all ${baseColor}
                    ${isSelected ? "ring-4 scale-105 shadow-md" : ""}`}
                >
                  {level}
                </div>
              </label>
            );
          })}
        </div>

        <div className="text-3xl font-bold">{title} {subtitle}</div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => setShowingInstructions(true)}
            className="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Instructions
          </button>
          <button
            onClick={() => setShowLeaderboard(true)}
            className="px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Leaderboard
          </button>
          <button
            onClick={handleSubmit}
            disabled={hasSubmitted}
            className={`px-4 py-2 text-white rounded transition-colors ${
              hasSubmitted 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
            title={hasSubmitted ? "You have already submitted this exercise" : "Submit your solution"}
          >
            {hasSubmitted ? "Already Submitted" : "Submit"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-row pr-2">
        <div className="order-2 grow">{sandboxElement}</div>
        {sandboxLoaded && (
          <div className="order-1">
            <Sidebar 
              menuItems={extendedMenu} 
              selected={selected} 
              setSelected={setSelected} 
              isVisible={isSidebarVisible} 
              setIsVisible={setIsSidebarVisible} 
            />
          </div>
        )}
      </div>
    </div>
  );
}