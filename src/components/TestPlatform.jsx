import { useState, useMemo } from "react";
import Sidebar from "@/components/Sidebar";
import Sandbox from "@/components/Sandbox";
import sdk from "@stackblitz/sdk";
import Instructions from "@/components/Modals/Instructions";
import TestPassed from "@/components/Modals/TaskPassed";
import TestNotPassed from "@/components/Modals/TaskNotPassed";
import Modal from "@/components/Modals/Modal";
import Leaderboard from "@/components/Leaderboard";

export default function QuestionPlatform({
  setSidebarContent,
  menuItems,
  files,
  filesOpened,
  task,
  title,
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

  const subtitle = hideExplorer === false ? "Projects" : "Exercises";

  const handleSandboxLoad = () => setSandboxLoaded(true);

  const handleInstructionsClose = () => {
    setShowingInstructions(false);
    // Start the timer when instructions are closed (user starts working)
    const currentTime = Date.now();
    localStorage.setItem("startTimestamp", currentTime.toString());
    console.log("Timer started for exercise at:", new Date(currentTime).toISOString());
  };

  const handleSubmit = async () => {
    try {
      const container = document.getElementById("stackblitz-container");
      if (!container) throw new Error("Container not found");

      const vm = await sdk.connect(container);
      const fsSnap = await vm.getFsSnapshot();

      if ("results.tests" in fsSnap && fsSnap["results.tests"]) {
        const index = menuItems.findIndex(item => item.label === selected) + 1;
        setUrl(`${title.replace(".", "").toLowerCase()}/${selectedLevel.toLowerCase()}/${index}`);
        setResult(JSON.parse(fsSnap["results.tests"]));
        setResultPage(true);
        await vm.applyFsDiff({ destroy: ['results.tests', 'attempts.tests'], create: {} });
      } else {
        setAlert(true);
      }
    } catch (error) {
      console.error("StackBlitz submission error:", error);
      alert("There was an issue submitting. Please try again.");
    }
  };

  const checkPreviousExerciseAttempted = async () => {
    const container = document.getElementById("stackblitz-container");
    if (!container) throw new Error("Container element not found");

    const vm = await sdk.connect(container);
    const files = Object.keys(await vm.getFsSnapshot());

    if (files.includes('results.tests') || files.includes('attempts.tests')) {
      setAlert(true);
      return 1;
    }
    return 0;
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

  const sandboxElement = useMemo(() => {
    return files && filesOpened ? (
      <Sandbox
        fileToOpen={filesOpened}
        filesObj={files}
        onLoad={handleSandboxLoad}
        hideExplorer={hideExplorer}
      />
    ) : null;
  }, [files, filesOpened]);

  const extendedMenu = useMemo(() => {
    return menuItems.map((item) => ({
      ...item,
      onClick: async (e) => {
        const previousAttempt = await checkPreviousExerciseAttempted();
        if (!previousAttempt) {
          // Clear any existing timer when starting a new exercise
          localStorage.removeItem("startTimestamp");
          
          item.onClick?.(e);
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
          <TestNotPassed onClose={() => setAlert(false)} />
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
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-row pr-2">
        <div className="order-2 grow">{sandboxElement}</div>
        {sandboxLoaded && (
          <div className="order-1">
            <Sidebar menuItems={extendedMenu} selected={selected} setSelected={setSelected} isVisible={isSidebarVisible} setIsVisible={setIsSidebarVisible} />
          </div>
        )}
      </div>
    </div>
  );
}