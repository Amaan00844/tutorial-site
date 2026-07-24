"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

const codeCardVariants = {
  hover: {
    y: -8,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function NextJsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e6fffa] via-[#ccfbf1] to-[#99f6e4] animate-gradient-shift flex items-center justify-center p-4">
      <SiNextdotjs className="absolute top-30 left-50 text-cyan-600 text-4xl z-34 rotate-12" />
      <SiNextdotjs className="absolute top-30 right-34 text-cyan-600 text-4xl z-34 rotate-12" />
      <SiNextdotjs className="absolute top-40 right-90 text-cyan-600 text-4xl z-34 rotate-34" />
      <SiNextdotjs className="absolute top-90 left-23 text-cyan-600 text-4xl z-34 rotate-34" />
      <SiNextdotjs className="absolute bottom-16 left-12 text-cyan-600 text-4xl z-34" />
      <SiNextdotjs className="absolute top-[30%] left-[5%] text-cyan-600 text-5xl z-34" />
      <SiNextdotjs className="absolute top-[40%] right-[8%] text-cyan-600 text-5xl z-34" />
      <SiNextdotjs className="absolute bottom-20 right-[10%] text-cyan-600 text-5xl z-34" />
      <SiNextdotjs className="absolute top-[6%] right-[55%] text-cyan-600 text-4xl z-34" />
      <SiNextdotjs className="absolute top-5 right-[40%] w-12 h-12 text-cyan-600 z-34" />
      <SiNextdotjs className="absolute bottom-4 right-4 w-10 h-10 text-cyan-600 text-5xl z-34" />

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
            <div className="mb-2">
              <motion.span
                className="inline-block px-3 py-1 text-sm font-semibold text-cyan-600 bg-cyan-100 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Web Framework
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Build Modern Web Apps with{" "}
              <span className="text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Next.js
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Create fast, scalable, and SEO-friendly web applications with
              Next.js, the React framework.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "/nextjs/introduction",
                  text: "Get Started",
                  bg: "bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-cyan-500/20",
                },
                {
                  href: "https://www.youtube.com/watch?v=SSdS7I6gC9A",
                  text: "Video Tutorial",
                  bg: "bg-white hover:bg-gray-50",
                  textColor: "text-gray-700",
                  border: "border border-gray-200",
                  shadow: "shadow-sm hover:shadow-md",
                },
                {
                  href: "/nextjs",
                  text: "View Projects",
                  bg: "bg-gray-900 hover:bg-gray-800",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-cyan-500/20",
                },
              ].map((button, index) => (
                <motion.div
                  key={button.text}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link
                    href={button.href}
                    rel={
                      button.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <motion.button
                      className={`px-6 py-3 rounded-lg font-medium ${
                        button.bg
                      } ${button.textColor} ${button.border || ""} ${
                        button.shadow || ""
                      } transition-all duration-200 whitespace-nowrap cursor-pointer`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
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
              <span className="text-sm sm:text-base">
                Trusted by industry leaders:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Vercel", "Netflix", "Hulu", "Uber", "GitHub", "Shopify"].map(
                  (company, i) => (
                    <motion.span
                      key={company}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {company}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 flex items-center justify-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-200/30 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-300/30 blur-xl"></div>

            <div className="w-full max-w-md relative z-10">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                variants={codeCardVariants}
                whileHover="hover"
                aria-hidden="true"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-300 font-mono">
                    page.jsx
                  </div>
                </div>
                <div className="relative">
                  <pre className="p-6 text-sm md:text-base h-[240px] text-gray-800 overflow-x-auto font-mono bg-gray-50">
                    <code className="block whitespace-pre">
                      {`'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Next.js
      </h1>
      <Link href="/about">
        <button className="px-4 py-2 bg-gray-900 text-white rounded">
          Go to About
        </button>
      </Link>
    </main>
  );
}`}
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
                  Try Next.js in your browser
                </p>
                <Link href="/exercises/nextjs" rel="noopener noreferrer">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Perform Exercise</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-600 opacity-0 hover:opacity-100 transition-opacity"></span>
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
