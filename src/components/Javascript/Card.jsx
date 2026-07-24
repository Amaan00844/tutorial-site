"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

const codeCardVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

export default function JavaScriptPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fffbe6] via-[#fff5cc] to-[#ffef99] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative JavaScript icons */}
      <SiJavascript className="absolute top-10 left-10 text-yellow-400 text-4xl z-10 opacity-50" aria-hidden="true" />
      <SiJavascript className="absolute top-20 right-12 text-yellow-400 text-4xl z-10 opacity-50" aria-hidden="true" />
      <SiJavascript className="absolute bottom-16 left-16 text-yellow-400 text-5xl z-10 opacity-50" aria-hidden="true" />
      <SiJavascript className="absolute bottom-20 right-20 text-yellow-400 text-5xl z-10 opacity-50" aria-hidden="true" />

      <motion.div
        className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <motion.div
            className="flex-1 p-8 md:p-12 flex flex-col justify-center"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100 rounded-full mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Programming Language
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Power the Web with{" "}
              <span className="text-yellow-600 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                JavaScript
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Create dynamic and interactive web experiences with JavaScript, the language of the web.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "/javascript/intro",
                  text: "Get Started",
                  bg: "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-yellow-500/20",
                },
                {
                  href: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                  text: "Video Tutorial",
                  bg: "bg-white hover:bg-gray-50",
                  textColor: "text-gray-700",
                  border: "border border-gray-200",
                  shadow: "shadow-sm hover:shadow-md",
                },
                {
                  href: "/javascript",
                  text: "View Projects",
                  bg: "bg-gray-900 hover:bg-gray-800",
                  textColor: "text-white",
                  shadow: "shadow-lg hover:shadow-xl",
                },
              ].map((button, index) => (
                <motion.div key={button.text} variants={itemVariants} custom={index}>
                  <Link
                    href={button.href}
                    rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <motion.button
                      className={`px-6 py-3 rounded-lg font-medium ${button.bg} ${button.textColor} ${button.border || ""} ${button.shadow || ""} transition-all duration-200 whitespace-nowrap cursor-pointer`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      aria-label={button.text}
                    >
                      {button.text}
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500"
              variants={itemVariants}
            >
              <span className="text-sm sm:text-base">Trusted by industry leaders:</span>
              <div className="flex flex-wrap gap-2">
                {["Google", "Facebook", "Twitter", "Airbnb", "Slack", "Dropbox"].map(
                  (company) => (
                    <motion.span
                      key={company}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {company}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Updated Card) */}
          <motion.div
            className="flex-1 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-12 flex items-center justify-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative elements */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-200/30 blur-xl"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-orange-200/30 blur-xl"
              aria-hidden="true"
            ></div>

            <div className="w-full max-w-md relative z-10">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                variants={codeCardVariants}
                whileHover="hover"
                aria-label="JavaScript code preview"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-300 font-mono">script.js</div>
                </div>
                <div className="relative">
                  <pre className="p-6 text-sm md:text-base h-[240px] text-gray-800 overflow-x-auto font-mono bg-gray-50">
                    <code className="block whitespace-pre">
                      {`// Sum an array of numbers
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage
const numbers = [1, 2, 3];
console.log(sumArray(numbers)); // Output: 6

// Try this in our sandbox!
document.querySelector('button')?.addEventListener('click', () => {
  alert('Explore more in the Sandbox!');
});`}
                    </code>
                  </pre>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/70 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-600 mb-4">
                  Try JavaScript right in your browser
                </p>
                <Link href="/exercises/javascript">
                  <motion.button
                    className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Go to JavaScript Sandbox"
                  >
                    <span className="relative z-10">Sandbox</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}