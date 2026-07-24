"use client";
import { useEffect, useState } from "react";
import { LEVEL_SCORE_MAP, calculateScore } from "./utils";

// Helper function to format time in a user-friendly way
const formatTime = (seconds) => {
  if (seconds < 60) {
    return `${seconds.toFixed(1)} seconds`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }
};

export default function TestPassed({
  result,
  level,
  onClose,
  url,
  type = "exercise",
}) {
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [breakdown, setBreakdown] = useState({
    passScore: 0,
    attemptScore: 0,
    timeScore: 0,
  });

  useEffect(() => {
    const calculateScoreFromTimer = async () => {
      try {
        let startTime = null;
        let duration = 60; // Default fallback duration in seconds

        // First try localStorage
        const startTimestamp = localStorage.getItem("startTimestamp");
        if (startTimestamp) {
          const startTimeMs = Number(startTimestamp);
          const endTimeMs = result.timestamp
            ? new Date(result.timestamp).getTime()
            : Date.now();

          // Validate timestamps
          if (
            !isNaN(startTimeMs) &&
            !isNaN(endTimeMs) &&
            endTimeMs > startTimeMs
          ) {
            duration = Math.max(1, (endTimeMs - startTimeMs) / 1000);
            console.log("Timer calculation:", {
              startTimeMs,
              endTimeMs,
              durationMs: endTimeMs - startTimeMs,
              durationSeconds: duration,
            });
          } else {
            console.warn("Invalid timestamp data:", {
              startTimestamp,
              resultTimestamp: result.timestamp,
            });
          }
        } else {
          // Fallback: try to get timer data from StackBlitz file system
          try {
            const container = document.getElementById("stackblitz-container");
            if (container) {
              const sdk = await import("@stackblitz/sdk");
              const vm = await sdk.default.connect(container);
              const fsSnap = await vm.getFsSnapshot();

              if ("timer.tests" in fsSnap && fsSnap["timer.tests"]) {
                const timerData = JSON.parse(fsSnap["timer.tests"]);
                if (timerData.startTimestamp) {
                  const startTimeMs = Number(timerData.startTimestamp);
                  const endTimeMs = result.timestamp
                    ? new Date(result.timestamp).getTime()
                    : Date.now();

                  if (
                    !isNaN(startTimeMs) &&
                    !isNaN(endTimeMs) &&
                    endTimeMs > startTimeMs
                  ) {
                    duration = Math.max(1, (endTimeMs - startTimeMs) / 1000);
                    console.log("Timer data found in StackBlitz file system");
                  }
                }
              }
            }
          } catch (stackblitzError) {
            console.warn(
              "Could not retrieve timer from StackBlitz:",
              stackblitzError,
            );
          }
        }

        // Cap the duration to reasonable limits (max 30 minutes)
        if (duration > 1800) {
          console.warn(
            `Duration capped from ${duration}s to 1800s (30 minutes)`,
          );
          duration = 1800;
        }

        // Ensure minimum duration
        duration = Math.max(1, Math.round(duration));

        setTimeTaken(duration);

        const { total, breakdown } = calculateScore(
          result.attempts,
          duration,
          level,
        );
        setScore(total);
        setBreakdown(breakdown);

        console.log("Score calculated:", {
          total,
          breakdown,
          duration,
          attempts: result.attempts,
          startTimestamp,
          resultTimestamp: result.timestamp,
        });
      } catch (err) {
        console.error("Error calculating score:", err);
        setError("Failed to calculate score");
        // Use a default duration for scoring
        const duration = 60;
        setTimeTaken(duration);
        const { total, breakdown } = calculateScore(
          result.attempts,
          duration,
          level,
        );
        setScore(total);
        setBreakdown(breakdown);
      }
    };

    calculateScoreFromTimer();
  }, [result, level]);

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Enhanced validation
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token) {
        throw new Error("Authentication token missing. Please log in again.");
      }

      if (
        !userId ||
        userId === "undefined" ||
        userId === "null" ||
        userId.length < 10
      ) {
        throw new Error("User session expired. Please log in again.");
      }

      if (!url) {
        throw new Error("URL missing. Cannot submit score.");
      }

      if (score <= 0) {
        throw new Error("Invalid score. Cannot submit.");
      }

      console.log("Submitting score:", { score, url, userId, type });

      const response = await fetch(
        "https://study-portal-backend-9zpf.onrender.com//api/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            score: Number(score), // Ensure it's a number
            url: url.trim(), // Remove any whitespace
            userId: userId.trim(),
            type,
          }),
        },
      );

      // Handle different response types
      let data;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned unexpected response format");
      }

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          throw new Error("Session expired. Please log in again.");
        } else if (response.status === 404) {
          localStorage.removeItem("userId");
          throw new Error("User account not found. Please log in again.");
        } else if (response.status === 400) {
          throw new Error(data.message || "Invalid submission data");
        }

        throw new Error(data.message || `Server error (${response.status})`);
      }

      console.log("Score submitted successfully:", data);

      // Clear the start timestamp after successful submission
      localStorage.removeItem("startTimestamp");

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      setError(
        error.message || "An error occurred while submitting your score",
      );

      // Clear invalid user data for specific errors
      if (
        error.message.includes("User not found") ||
        error.message.includes("Invalid user ID") ||
        error.message.includes("Session expired")
      ) {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        🎉 Congratulations! 🎉
      </h1>
      <p className="mb-4">Your code passed all test cases!</p>

      <div className="mb-4">
        <p>
          <strong>Time Taken:</strong> {formatTime(timeTaken)}
        </p>
        <p>
          <strong>Attempts:</strong> {result.attempts}
        </p>
        <p>
          <strong>Level:</strong> {level}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>
      </div>

      <div className="bg-green-100 border border-green-300 rounded-md shadow-inner p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">📊 Score Breakdown</h2>
        <ul className="space-y-1 text-left inline-block">
          <li>
            ✅ Passed Checks: <strong>{breakdown.passScore}</strong>
          </li>
          <li>
            🔁 Attempts Bonus: <strong>{breakdown.attemptScore}</strong>
          </li>
          <li>
            ⏱️ Time Bonus: <strong>{breakdown.timeScore}</strong>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Total Score: {score} / {LEVEL_SCORE_MAP[level] || 100}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => onClose()}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Close Without Saving
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          disabled={isSubmitting || !score}
        >
          {isSubmitting ? "Submitting..." : "Submit & Close"}
        </button>
      </div>

      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-4 p-2 bg-gray-100 text-xs text-left rounded">
          <strong>Debug Info:</strong>
          <br />
          URL: {url}
          <br />
          Score: {score}
          <br />
          UserId: {localStorage.getItem("userId")}
          <br />
          HasToken: {!!localStorage.getItem("token")}
        </div>
      )}
    </div>
  );
}
