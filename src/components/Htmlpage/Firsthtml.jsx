"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiHtml5 } from "react-icons/si";

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

export default function HtmlPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e6f3ff] via-[#cce6ff] to-[#99ccff] animate-gradient-shift flex items-center justify-center p-4">
      <SiHtml5 className="absolute top-30 left-50 text-orange-500 text-4xl z-34 rotate-12" />
      <SiHtml5 className="absolute top-30 right-34 text-orange-500 text-4xl z-34 rotate-12" />
      <SiHtml5 className="absolute top-40 right-90 text-orange-500 text-4xl z-34 rotate-34" />
      <SiHtml5 className="absolute top-90 left-23 text-orange-500 text-4xl z-34 rotate-34" />

      <SiHtml5 className="absolute bottom-16 left-12 text-orange-500 text-4xl z-34" />
      <SiHtml5 className="absolute top-[30%] left-[5%] text-orange-500 text-4xl z-34" />
      <SiHtml5 className="absolute top-[40%] right-[8%] text-orange-500 text-4xl z-34" />
      <SiHtml5 className="absolute bottom-20 right-[10%] text-orange-500 text-4xl z-34" />
      <SiHtml5 className="absolute top-[6%] right-[55%] text-orange-500 text-4xl z-34" />
      <SiHtml5 className="absolute top-5 right-[40%] w-12 h-12 text-orange-600 z-34" />
      <SiHtml5 className="absolute bottom-4 right-4 w-10 h-10 text-orange-400 text-4xl z-34" />

      <motion.div
        className="w-full max-w-4xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <motion.div
            className="flex-1 p-6 md:p-8 flex flex-col justify-center"
            variants={itemVariants}
          >
            <div className="mb-2">
              <motion.span
                className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Markup Language
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Build Web Pages with{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                HTML
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Create the structure of web pages with HTML, the standard markup
              language for the web.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "/htmlHome",
                  text: "Get Started",
                  bg: "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-blue-500/20",
                },
                {
                  href: "https://www.youtube.com/watch?v=pQN-pn6p3u0",
                  text: "Video Tutorial",
                  bg: "bg-white hover:bg-gray-50",
                  textColor: "text-gray-700",
                  border: "border border-gray-200",
                  shadow: "shadow-sm hover:shadow-md",
                },
                {
                  href: "/firstHtml",
                  text: "View Projects",
                  bg: "bg-gray-900 hover:bg-gray-800",
                  textColor: "text-white",
                  shadow: "shadow-lg hover:shadow-xl",
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
                      } transition-all duration-200 cursor-pointer`}
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
                {["Google", "Mozilla", "W3C", "GitHub", "Adobe", "Shopify"].map(
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
            className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 flex items-center justify-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-200/30 blur-xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-200/30 blur-xl pointer-events-none"></div>

            <div className="w-full max-w-xs relative z-10">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                //imp
                variants={{
                  hover: {
                    scale: 1.03,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  },
                }}
                whileHover="hover"
                aria-hidden="true"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-300 font-mono">
                    index.html
                  </div>
                </div>
                <div className="relative">
                  <pre className="p-4 text-xs h-[200px] text-gray-800 overflow-x-auto font-mono bg-gray-50">
                    <code className="block whitespace-pre">
                      {`<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</body>
</html>`}
                    </code>
                  </pre>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/70 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-600 mb-3 text-sm">
                  Try HTML right in your browser
                </p>
                <Link href="exercises/html" rel="noopener noreferrer">
                  <motion.button
                    className="relative px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                    variants={{
                      hover: { scale: 1.05 },
                      tap: { scale: 0.95 },
                    }}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Perform Exercise</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 hover:opacity-100 transition-opacity"></span>
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
