// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { SiPhp } from "react-icons/si";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
//     transition: { duration: 0.2 }
//   },
//   tap: { scale: 0.98 }
// };

// const codeCardVariants = {
//   hover: {
//     y: -8,
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//     transition: {
//       duration: 0.3,
//       ease: "easeOut"
//     }
//   }
// };

// export default function PHPPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#edd9ff] to-[#e7c9ff] animate-gradient-shift flex items-center justify-center p-4">
//       <SiPhp className="absolute top-30 left-50 text-indigo-600 text-5xl z-34 rotate-12" />
//       <SiPhp className="absolute top-30 right-34 text-indigo-600 text-5xl z-34 rotate-12" />
//       <SiPhp className="absolute top-40 right-90 text-indigo-600 text-5xl z-34 rotate-34" />
//       <SiPhp className="absolute top-90 left-23 text-indigo-600 text-5xl z-34 rotate-34" />
//       <SiPhp className="absolute bottom-16 left-12 text-indigo-600 text-5xl z-34" />
//       <SiPhp className="absolute top-[30%] left-[5%] text-indigo-600 text-5xl z-34" />
//       <SiPhp className="absolute top-[40%] right-[8%] text-indigo-600 text-5xl z-34" />
//       <SiPhp className="absolute bottom-20 right-[10%] text-indigo-600 text-5xl z-34" />
//       <SiPhp className="absolute top-[6%] right-[55%] text-indigo-600 text-6xl z-34" />
//       <SiPhp className="absolute top-5 right-[40%] w-12 h-12 text-indigo-700 z-34" />
//       <SiPhp className="absolute bottom-4 right-4 w-10 h-10 text-indigo-500 text-5xl z-34" />
//       <motion.div
//         className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Content */}
//           <motion.div
//             className="flex-1 p-8 md:p-12 flex flex-col justify-center"
//             variants={itemVariants}
//           >
//             <div className="mb-2">
//               <motion.span
//                 className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 Server-Side Scripting
//               </motion.span>
//             </div>

//             <motion.h1
//               className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
//               variants={itemVariants}
//             >
//               Build Dynamic Websites with <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">PHP</span>
//             </motion.h1>

//             <motion.p
//               className="text-lg md:text-xl text-gray-600 mb-8"
//               variants={itemVariants}
//             >
//               Create powerful, server-side applications with PHP, a versatile scripting language for web development.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap gap-4 mb-8"
//               variants={containerVariants}
//             >
//               {[
//                 {
//                   href: "/php-intro",
//                   text: "Learn PHP",
//                   bg: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
//                   textColor: "text-white",
//                   shadow: "shadow-lg shadow-purple-500/20"
//                 },
//                 {
//                   href: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
//                   text: "Video Tutorial",
//                   bg: "bg-white hover:bg-gray-50",
//                   textColor: "text-gray-700",
//                   border: "border border-gray-200",
//                   shadow: "shadow-sm hover:shadow-md"
//                 },
//                 {
//                   href: "/php",
//                   text: "PHP Projects",
//                   bg: "bg-gray-900 hover:bg-gray-800",
//                   textColor: "text-white",
//                   shadow: "shadow-lg hover:shadow-xl"
//                 }
//               ].map((button, index) => (
//                 <motion.div
//                   key={button.text}
//                   variants={itemVariants}
//                   custom={index}
//                 >
//                   <Link href={button.href}>
//                     <motion.button
//                       className={`px-6 py-3 rounded-lg font-medium ${button.bg} ${button.textColor} ${button.border || ''} ${button.shadow || ''} transition-all duration-200 cursor-pointer`}
//                       variants={buttonVariants}
//                       whileHover="hover"
//                       whileTap="tap"
//                     >
//                       {button.text}
//                     </motion.button>
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div
//               className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500"
//               variants={itemVariants}
//             >
//               <span className="text-sm sm:text-base">Trusted by industry leaders:</span>
//               <div className="flex flex-wrap gap-2">
//                 {["WordPress", "Facebook", "Slack", "Etsy", "Wikipedia", "Magento"].map((company, i) => (
//                   <motion.span
//                     key={company}
//                     className="px-3 py-1 bg-gray-100 rounded-full text-sm"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {company}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 flex items-center justify-center relative overflow-hidden"
//             variants={itemVariants}
//           >
//             {/* Decorative elements */}
//             <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-200/30 blur-xl"></div>
//             <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-200/30 blur-xl"></div>

//             <div className="w-full max-w-md relative z-10">
//               <motion.div
//                 className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
//                 variants={codeCardVariants}
//                 whileHover="hover"
//               >
//                 <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="ml-4 text-sm text-gray-300 font-mono">index.php</div>
//                 </div>
//                 <div className="relative">
//                   <pre className="p-6 text-sm md:text-base h-[240px] text-gray-800 overflow-x-auto font-mono bg-gray-50">
//                     <code className="block whitespace-pre">
// {`<?php
// // Output text
// /bin/echo "Hello, PHP!\\n";

// // Variables
// $name = "Amaan";
// $age = 19;

// // Conditional
// if ($age >= 18) {
//     /bin/echo "$name is an adult.\\n";
// } else {
//     /bin/echo "$name is not an adult.\\n";
// }
// ?>
// `}
//                     </code>
//                   </pre>
//                   <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/70 to-transparent"></div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="mt-8 text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 <p className="text-gray-600 mb-4">Try PHP right in your browser</p>
//                 <Link href="/sandbox/phpp">
//                   <motion.button
//                     className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     <span className="relative z-10">Perform Exercise</span>
//                     <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity"></span>
//                   </motion.button>
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </main>
//   );
// }

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiPhp } from "react-icons/si";

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

export default function PHPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#edd9ff] to-[#e7c9ff] animate-gradient-shift flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative PHP Icons */}
      {[
        { top: "top-30", left: "left-50" },
        { top: "top-30", right: "right-34" },
        { top: "top-40", right: "right-90" },
        { top: "top-90", left: "left-23" },
        { bottom: "bottom-16", left: "left-12" },
        { top: "top-[30%]", left: "left-[5%]" },
        { top: "top-[40%]", right: "right-[8%]" },
        { bottom: "bottom-20", right: "right-[10%]" },
        { top: "top-[6%]", right: "right-[55%]" },
        { top: "top-5", right: "right-[40%]" },
        { bottom: "bottom-4", right: "right-4" },
      ].map((pos, i) => (
        <SiPhp
          key={i}
          className={`absolute text-indigo-600 text-5xl z-10 rotate-12 ${Object.entries(
            pos
          )
            .map(([k, v]) => `${k}-${v}`)
            .join(" ")}`}
        />
      ))}

      <motion.div
        className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative z-20"
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
                className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Server-Side Scripting
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Build Dynamic Websites with{" "}
              <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                PHP
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Create powerful, server-side applications with PHP, a versatile
              scripting language for web development.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "/php-intro",
                  text: "Learn PHP",
                  bg: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
                  textColor: "text-white",
                  shadow: "shadow-lg shadow-purple-500/20",
                },
                {
                  href: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
                  text: "Video Tutorial",
                  bg: "bg-white hover:bg-gray-50",
                  textColor: "text-gray-700",
                  border: "border border-gray-200",
                  shadow: "shadow-sm hover:shadow-md",
                },
                {
                  href: "/php",
                  text: "PHP Projects",
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
                  <Link href={button.href}>
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
                {[
                  "WordPress",
                  "Facebook",
                  "Slack",
                  "Etsy",
                  "Wikipedia",
                  "Magento",
                ].map((company) => (
                  <motion.span
                    key={company}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 flex items-center justify-center relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-200/30 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-200/30 blur-xl"></div>

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
                    index.php
                  </div>
                </div>
                <pre className="p-6 text-sm md:text-base h-[240px] text-gray-800 overflow-x-auto font-mono bg-gray-50 relative">
                  <code>
                    {`<?php
// Output text
/bin/echo "Hello, PHP!\\n";

// Variables
$name = "Jaya";
$age = 19;

// Conditional
if ($age >= 18) {
    /bin/echo "$name is an adult.\\n";
} else {
    /bin/echo "$name is not an adult.\\n";
}
?>`}
                  </code>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"></div>
                </pre>
              </motion.div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-600 mb-4">
                  Try PHP right in your browser
                </p>
                <Link href="#">
                  <motion.button
                    className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Perform Exercise</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity z-0"></span>
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
