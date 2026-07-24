"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://study-portal-backend-9zpf.onrender.com//api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON:", text);
        throw new Error("Server returned unexpected response");
      }

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Invalid email or password. Please try again.");
        } else if (response.status === 500) {
          throw new Error("Server error. Please try again later.");
        }
        throw new Error(data.message || "Login failed");
      }

      // ENHANCED: Better validation and storage of user data
      console.log("Login response data:", data); // Debug log

      if (!data.token) {
        throw new Error("No authentication token received");
      }

      if (!data.userId) {
        throw new Error("No user ID received from server");
      }

      // Clear any existing data first
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");

      // Store new data with validation
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", String(data.userId)); // Ensure it's a string

      if (data.username) {
        localStorage.setItem("username", data.username);
      }

      // CRITICAL: Verify the data was actually stored
      const storedUserId = localStorage.getItem("userId");
      const storedToken = localStorage.getItem("token");

      console.log("Stored data verification:", {
        storedUserId,
        storedToken: storedToken ? "Present" : "Missing",
        originalUserId: data.userId,
      });

      if (
        !storedUserId ||
        storedUserId === "undefined" ||
        storedUserId === "null"
      ) {
        throw new Error("Failed to store user session data");
      }

      // Small delay to ensure localStorage is fully written
      await new Promise((resolve) => setTimeout(resolve, 100));

      router.push("/");
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative max-w-md w-full p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-gray-100/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,162,255,0.1)_0%,transparent_60%)] pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold mb-5 text-gray-900 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600"
        >
          Welcome Back
        </motion.h1>

        <AnimatePresence>
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-4 p-3 bg-red-50/90 backdrop-blur-sm text-red-900 rounded-xl text-sm flex items-start gap-3 shadow-sm"
            >
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m12 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide">
              Email Address
            </label>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              className="relative group"
            >
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 pl-12 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-transparent bg-gray-50/70 backdrop-blur-sm transition-all duration-300 text-gray-900 placeholder-gray-400/80 shadow-sm group-hover:shadow-md"
                placeholder="you@example.com"
                required
              />
              <motion.svg
                initial={{ opacity: 0.6 }}
                whileFocus={{ opacity: 1 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500/80 group-hover:text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                />
              </motion.svg>
            </motion.div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide">
              Password
            </label>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              className="relative group"
            >
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-4 pl-12 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-transparent bg-gray-50/70 backdrop-blur-sm transition-all duration-300 text-gray-900 placeholder-gray-400/80 shadow-sm group-hover:shadow-md"
                placeholder="••••••••"
                required
              />
              <motion.svg
                initial={{ opacity: 0.6 }}
                whileFocus={{ opacity: 1 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sky-500/80 group-hover:text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2s2 4 2 4m2-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-6 5v-1a2 2 0 012-2h4a2 2 0 012 2v1M5 8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2z"
                />
              </motion.svg>
            </motion.div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 4px 20px rgba(0, 162, 255, 0.3)",
            }}
            whileTap={{ scale: 0.96 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-sky-700 hover:to-indigo-700 transition-all duration-300 font-semibold flex items-center justify-center gap-3 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting && (
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </motion.svg>
            )}
            Login
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="mt-6 text-center text-sm text-gray-600 flex items-center justify-center gap-1.5"
        >
          <span>Need an account?</span>
          <Link
            href="/register"
            className="text-sky-600 hover:text-sky-800 font-semibold transition-colors duration-300 hover:underline"
          >
            Register now
          </Link>
        </motion.div>

        {/* Debug info for development */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 p-2 bg-gray-100 text-xs rounded">
            <strong>Debug - Current Storage:</strong>
            <br />
            UserId:{" "}
            {typeof window !== "undefined"
              ? localStorage.getItem("userId")
              : "N/A"}
            <br />
            Token:{" "}
            {typeof window !== "undefined"
              ? localStorage.getItem("token")
                ? "Present"
                : "Missing"
              : "N/A"}
          </div>
        )}
      </motion.div>
    </div>
  );
}
