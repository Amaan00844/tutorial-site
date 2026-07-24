"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";

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

// Example variants (you can define or import your own)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const codeCardVariants = {
  hover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};

export default function MongoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e6f7e6] via-[#ccffcc] to-[#99ff99] animate-gradient-shift flex items-center justify-center p-4">
      <SiMongodb className="absolute top-30 left-50 text-green-500 text-6xl z-34 rotate-12" />
      <SiMongodb className="absolute top-30 right-34 text-green-500 text-6xl z-34 rotate-12" />
      <SiMongodb className="absolute top-40 right-90 text-green-500 text-6xl z-34 rotate-34" />
      <SiMongodb className="absolute top-90 left-23 text-green-500 text-6xl z-34 rotate-34" />
      <SiMongodb className="absolute bottom-16 left-12 text-green-500 text-6xl z-34" />
      <SiMongodb className="absolute top-[30%] left-[5%] text-green-500 text-5xl z-34" />
      <SiMongodb className="absolute top-[40%] right-[8%] text-green-500 text-5xl z-34" />
      <SiMongodb className="absolute bottom-20 right-[10%] text-green-500 text-5xl z-34" />
      <SiMongodb className="absolute top-[6%] right-[55%] text-green-500 text-6xl z-34" />
      <SiMongodb className="absolute top-5 right-[40%] w-12 h-12 text-green-600 z-34" />
      <SiMongodb className="absolute bottom-4 right-4 w-10 h-10 text-green-400 text-5xl z-34" />
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
                className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                NoSQL Database
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Store Data with{" "}
              <span className="text-green-600 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                MongoDB
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Manage flexible, scalable data with MongoDB, the leading NoSQL
              database for modern applications.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "/homemongodbpage",
                  text: "Get Started",
                  bg: "bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-green-500/20",
                },
                {
                  href: "https://www.youtube.com/watch?v=J6mDkcqU_ZE",
                  text: "Video Tutorial",
                  bg: "bg-white hover:bg-gray-50",
                  textColor: "text-gray-700",
                  border: "border border-gray-200",
                  shadow: "shadow-sm hover:shadow-md",
                },
                {
                  href: "/projects?tech=mongodb",
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
                {["IBM", "Cisco", "Bosch", "Forbes", "Coinbase", "Expedia"].map(
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
            className="flex-1 bg-gradient-to-br from-green-50 to-teal-50 p-8 md:p-12 flex items-center justify-center relative overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative blur circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-green-200/30 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-teal-200/30 blur-xl"></div>

            <div className="w-full max-w-md relative z-10">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                variants={codeCardVariants}
                whileHover="hover"
                aria-hidden="true"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-300 font-mono">
                    mongo-shell.js
                  </div>
                </div>

                {/* Code content */}
                <div className="relative">
                  <pre className="p-6 text-sm md:text-base h-[240px] text-gray-800 overflow-x-auto font-mono bg-gray-50">
                    <code className="block whitespace-pre">
                      {`// Insert document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 25
});

// Find documents
db.users.find({}).pretty();

// Update document
db.users.updateOne(
  { name: "John Doe" },
  { $set: { age: 26 } }
);

// Delete document
db.users.deleteOne({ name: "John Doe" });`}
                    </code>
                  </pre>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/70 to-transparent"></div>
                </div>
              </motion.div>

              {/* Button section */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-600 mb-4">
                  Try MongoDB right in your browser
                </p>
                <Link href="/exercises/mongodb" rel="noopener noreferrer">
                  <motion.button
                    className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all overflow-hidden"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Perform Exercise</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
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
