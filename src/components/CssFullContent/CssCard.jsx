"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiCss3 } from "react-icons/si";

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

export default function CssPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ffe6e0] via-[#ffdcd3] to-[#ffd2c6] animate-gradient-shift flex items-center justify-center p-4">
      <SiCss3 className="absolute top-30 left-50 text-red-400 text-4xl z-34 rotate-12" />
      <SiCss3 className="absolute top-30 right-34 text-red-400 text-4xl z-34 rotate-12" />
      <SiCss3 className="absolute top-40 right-90 text-red-400 text-4xl z-34 rotate-34" />
      <SiCss3 className="absolute top-90 left-23 text-red-400 text-4xl z-34 rotate-34" />
      <SiCss3 className="absolute bottom-16 left-12 text-red-400 text-4xl z-34" />
      <SiCss3 className="absolute top-[30%] left-[5%] text-red-400 text-5xl z-34" />
      <SiCss3 className="absolute top-[40%] right-[8%] text-red-400 text-5xl z-34" />
      <SiCss3 className="absolute bottom-20 right-[10%] text-red-400 text-5xl z-34" />
      <SiCss3 className="absolute top-[6%] right-[55%] text-red-400 text-6xl z-34" />
      <SiCss3 className="absolute top-5 right-[40%] w-12 h-12 text-red-400 z-34" />
      <SiCss3 className="absolute bottom-4 right-4 w-10 h-10 text-red-400 text-5xl z-34" />
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
                className="inline-block px-3 py-1 text-sm font-semibold text-[#FF7F50] bg-[#ffe6e0] rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Styling Language
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Style the Web with{" "}
              <span className="text-[#FF7F50] bg-gradient-to-r from-[#FF7F50] to-[#e66f47] bg-clip-text text-transparent">
                CSS
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Create stunning, responsive designs with Cascading Style Sheets.
              CSS brings your web pages to life.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "/CssIntro",
                  text: "Learn CSS",
                  bg: "bg-gradient-to-r from-[#FF7F50] to-[#e66f47] hover:from-[#e66f47] hover:to-[#d65f37]",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-[#FF7F50]/20",
                },
                {
                  href: "https://youtu.be/ESnrn1kAD4E?si=3_tiQWwfuAjikLKG",
                  text: "Video Tutorial",
                  bg: "bg-white hover:bg-gray-50",
                  textColor: "text-gray-700",
                  border: "border border-gray-200",
                  shadow: "shadow-sm hover:shadow-md",
                },
                {
                  href: "/Csscard",
                  text: "CSS Reference",
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
                    target={
                      button.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      button.href.startsWith("http") ? "noopener" : undefined
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

            {/* Trusted Companies Section */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500"
              variants={itemVariants}
            >
              <span className="text-sm sm:text-base">
                Trusted by industry leaders:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Apple", "Google", "Adobe", "Canva", "Figma", "Wix"].map(
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
            className="flex-1 bg-gradient-to-br from-[#fff0ed] to-[#ffe6e0] p-8 md:p-12 flex items-center justify-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FF7F50]/30 blur-xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#e66f47]/30 blur-xl pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                variants={codeCardVariants}
                whileHover="hover"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-300 font-mono">
                    styles.css
                  </div>
                </div>
                <div className="relative">
                  <pre className="p-6 text-sm md:text-base h-[240px] text-gray-800 overflow-x-auto font-mono bg-gray-50">
                    <code className="block whitespace-pre">
                      {`/* Styling a button */
.button {
  background-color: #FF7F50;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #e66f47;
}

.button:active {
  transform: scale(0.98);
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
                  Try CSS right in your browser
                </p>
                <Link href="/exercises/css" target="_blank" rel="noopener">
                  <motion.button
                    className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Perform Exercise</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF7F50] to-[#e66f47] opacity-0 hover:opacity-100 transition-opacity"></span>
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
