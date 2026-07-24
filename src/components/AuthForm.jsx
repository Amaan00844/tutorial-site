'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthForm({ isLogin = false }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // After successful registration/login
      if (isLogin) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("Failed to process request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-50 py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative max-w-md w-full p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-gray-100/50 overflow-hidden"
      >
        {/* Decorative subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,162,255,0.1)_0%,transparent_60%)] pointer-events-none" />

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 text-center mb-8 tracking-tight"
        >
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </motion.h2>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-100/80 backdrop-blur-sm text-red-700 rounded-xl text-center"
          >
            {error}
          </motion.div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 placeholder-gray-400"
                placeholder="Your name"
                required
              />
            </motion.div>
          )}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isLogin ? 0.3 : 0.4, duration: 0.5 }}
          >
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 placeholder-gray-400"
              placeholder="Your email"
              required
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isLogin ? 0.4 : 0.5, duration: 0.5 }}
          >
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 placeholder-gray-400"
              placeholder="Your password"
              required
              minLength="6"
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.04, boxShadow: loading ? 'none' : '0 4px 20px rgba(0, 162, 255, 0.3)' }}
            whileTap={{ scale: loading ? 1 : 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isLogin ? 0.5 : 0.6, duration: 0.5 }}
            className={`w-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:from-sky-700 hover:to-indigo-700"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              isLogin ? "Login" : "Register"
            )}
          </motion.button>
        </form>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isLogin ? 0.6 : 0.7, duration: 0.5 }}
          className="mt-6 text-center text-gray-600"
        >
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-sky-600 hover:text-sky-700 hover:underline transition-colors font-medium">
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-sky-600 hover:text-sky-700 hover:underline transition-colors font-medium">
                Login
              </Link>
            </>
          )}
        </motion.p>
      </motion.div>
    </div>
  );
}