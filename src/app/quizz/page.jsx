"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, ArrowRight, Lock } from "lucide-react";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import Link from "next/link";

export default function QuizForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    general: "",
  });
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (errors.general) {
      const timer = setTimeout(() => {
        setErrors((prev) => ({ ...prev, general: "" }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors.general]);

  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "", general: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://study-portal-backend-9zpf.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("quizUser", JSON.stringify({ name, email }));

        // Increment login count
        const loginCount = parseInt(
          localStorage.getItem(`loginCount_${email}`) || "0",
          10,
        );
        localStorage.setItem(`loginCount_${email}`, loginCount + 1);

        router.push("/quizz/quizzes");
      } else {
        setErrors((prev) => ({
          ...prev,
          general: data.message || "Invalid credentials",
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: "Network error. Please try again.",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <motion.div
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50"
        >
          <div className="p-8">
            <div className="text-center mb-6">
              <PiFlowerLotusDuotone className="text-blue-600 w-8 h-8 mx-auto mb-2 animate-glow" />
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 tracking-tight"
              >
                Quiz Adventure
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-500 text-sm max-w-xs mx-auto"
              >
                Sign in to start or create an account
              </motion.p>
            </div>

            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-red-50/80 text-red-600 p-3 rounded-xl mb-6 flex items-center gap-2 border border-red-100/50 backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs font-medium">{errors.general}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center">
                  <User className="h-4 w-4 mr-1.5 text-blue-500" />
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-white/50 text-gray-800 placeholder-gray-400 shadow-sm text-sm ${
                      errors.name ? "border-red-500" : "border-gray-200/50"
                    }`}
                    placeholder="Your name"
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-xl"
                    initial={{ height: 0 }}
                    animate={{ height: name ? "100%" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10 bg-blue-100/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: name ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center">
                  <Mail className="h-4 w-4 mr-1.5 text-blue-500" />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-white/50 text-gray-800 placeholder-gray-400 shadow-sm text-sm ${
                      errors.email ? "border-red-500" : "border-gray-200/50"
                    }`}
                    placeholder="Your email"
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-xl"
                    initial={{ height: 0 }}
                    animate={{ height: email ? "100%" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10 bg-blue-100/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: email ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center">
                  <Lock className="h-4 w-4 mr-1.5 text-blue-500" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors((prev) => ({ ...prev, password: "" }));
                    }}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-white/50 text-gray-800 placeholder-gray-400 shadow-sm text-sm ${
                      errors.password ? "border-red-500" : "border-gray-200/50"
                    }`}
                    placeholder="Your password"
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-xl"
                    initial={{ height: 0 }}
                    animate={{ height: password ? "100%" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10 bg-blue-100/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: password ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 12px 24px -6px rgba(59, 130, 246, 0.5)",
                    backgroundPosition: "right center",
                    backgroundImage:
                      "linear-gradient(45deg, #3b82f6 50%, #4f46e5 50%)",
                    backgroundSize: "200%",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-base relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Quiz{" "}
                    <ArrowRight className="h-5 w-5 group-hover:transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center"
              >
                <Link href="/register" passHref>
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      color: "#db2777",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-pink-500 hover:text-pink-600 font-semibold text-sm transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Sign up for an account
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </Link>
              </motion.div>
            </form>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-3 text-center">
            <p className="text-xs text-gray-500">
              Powered by{" "}
              <span className="font-semibold text-blue-600">Skill Bridge</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
