import {
    Code,
    FileCode,
    Braces,
    Database,
    Globe,
    Server,
  } from "lucide-react"; // You can choose any relevant icons

  
  import {
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaJava,
    FaJs,
    FaReact,
  } from "react-icons/fa";

  const checklist = {
    "HTML Best Practices": [
      {
        title: "Semantic HTML",
        items: [
          "Use semantic tags like <article>, <section>, <nav>, <header>, <footer> etc.",
          "Improve accessibility using correct heading levels (h1-h6).",
          "Use <label> with form inputs for better screen reader support.",
          "Avoid using <div> and <span> excessively.",
        ],
      },
      {
        title: "Accessibility",
        items: [
          "Add alt attributes to all images.",
          "Use roles and ARIA labels where needed.",
          "Ensure good contrast ratio for text and background.",
          "Make sure all interactive elements are keyboard accessible.",
        ],
      },
      {
        title: "Performance",
        items: [
          "Minimize HTML file size.",
          "Defer non-critical scripts.",
          "Lazy-load offscreen content.",
          "Use async for external scripts when possible.",
        ],
      },
      {
        title: "SEO",
        items: [
          "Use proper meta tags (description, viewport, charset).",
          "Use heading tags in proper order.",
          "Use canonical URLs to prevent duplicate content.",
          "Structure data with schema.org when possible.",
        ],
      },
      {
        title: "Forms",
        items: [
          "Always associate <label> with <input>.",
          "Use required, minlength, and other validation attributes.",
          "Group related inputs using <fieldset> and <legend>.",
          "Provide helpful placeholder text.",
        ],
      },
      {
        title: "Responsive Design",
        items: [
          "Use viewport meta tag.",
          "Utilize CSS media queries.",
          "Avoid fixed width layout.",
          "Use scalable units like %, em, rem.",
        ],
      },
    ],
  };
  
  export default function HtmlBestPractices() {
    return (
      <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
        {/* Background Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none ">

        <div className="absolute top-60 left-10">
        <FaHtml5 size={70} className="text-orange-300 " />
        </div>
        <div className="absolute bottom-1/3 right-20">
  <FaPython size={69} className="text-yellow-300 " />
</div>



          <div className="absolute top-10 left-10">
            <FileCode size={100} className="text-blue-100 rotate-12 z-34" />
          </div>
          <div className="absolute top-1/2 left-1/4">
            <Braces size={100} className="text-green-200 -rotate-6 z-34" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Database size={100} className="text-purple-200 rotate-12 z-34" />
          </div>
          <div className="absolute top-20 right-43 z-54">
            <Globe size={100} className="text-pink-200 -rotate-12 z-34" />
          </div>
          <div className="absolute bottom-23 left-34">
            <Server size={100} className="text-yellow-100 rotate-6 z-34 " />
          </div>
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
              HTML Best Practices
            </h1>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {checklist["HTML Best Practices"].map((section, index) => (
              <div
                key={index}
                className=" cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
              >
                <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b pb-1">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  



// timeline

// 'use client';
// import { CheckCircle } from "lucide-react";

// export default function HtmlBestPractices() {
//   const sections = [
//     {
//       title: "Semantic HTML",
//       items: [
//         "Use semantic elements like <header>, <main>, <article>, <section>, <footer>",
//         "Avoid using <div> and <span> for structure when semantic tags are available",
//         "Enhance accessibility and SEO with proper semantics"
//       ]
//     },
//     {
//       title: "Accessibility (a11y)",
//       items: [
//         "Use alt attributes on all <img> tags",
//         "Ensure interactive elements are keyboard accessible",
//         "Use ARIA roles only when necessary",
//         "Label all form elements properly"
//       ]
//     },
//     {
//       title: "Performance",
//       items: [
//         "Minimize HTML file size",
//         "Load critical content first (above the fold)",
//         "Avoid deeply nested DOM structures",
//         "Use lazy loading for images where applicable"
//       ]
//     },
//     {
//       title: "Responsive Design",
//       items: [
//         "Use meta viewport tag for mobile scaling",
//         "Design using relative units (%, rem, em)",
//         "Use media queries to adjust layout for devices"
//       ]
//     },
//     {
//       title: "Forms & Validation",
//       items: [
//         "Use appropriate input types (email, tel, number)",
//         "Use built-in HTML5 validation features",
//         "Associate <label> tags correctly with inputs",
//         "Provide helpful placeholder or aria-describedby messages"
//       ]
//     },
//     {
//       title: "SEO Best Practices",
//       items: [
//         "Use proper heading structure (h1 → h6)",
//         "Include meta tags for title, description, charset, etc.",
//         "Ensure descriptive link text (avoid 'click here')"
//       ]
//     },
//     {
//       title: "Clean & Maintainable Code",
//       items: [
//         "Avoid inline styles; use classes instead",
//         "Use indentation and consistent formatting",
//         "Avoid unused or duplicate elements"
//       ]
//     }
//   ];

//   return (
//     <div className="relative p-8 max-w-6xl mx-auto bg-gradient-to-br from-white to-blue-50 rounded-lg">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12 tracking-tight">
//        Best Practice For Html
//       </h1>

//       {/* Vertical timeline line */}
//       <div className="absolute left-1/2 top-24 w-1 bg-blue-400 h-[calc(100%-8rem)] transform -translate-x-1/2" />

//       {/* Top indicator dot */}
//       <div className="absolute left-1/2 top-24 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-10" />

//       {/* Bottom indicator dot */}
//       <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-10" />

//       {/* Timeline sections */}
//       <div className="space-y-16">
//         {sections.map((section, idx) => {
//           const isLeft = idx % 2 === 0;
//           return (
//             <div
//               key={section.title}
//               className={`flex flex-col md:flex-row ${isLeft ? "" : "md:flex-row-reverse"} items-start md:items-center`}
//             >
//               <div className="md:w-1/2 px-6">
//                 <div className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6">
//                   <h3 className="text-xl font-bold text-blue-700 mb-4 tracking-tight">
//                     {section.title}
//                   </h3>
//                   <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside">
//                     {section.items.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="hidden md:flex justify-center items-center w-1/2 relative">
//                 <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg absolute top-4">
//                   <CheckCircle size={18} />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



// hexagon
// 'use client'

// export default function HexagonCircle() {
//   const hexagons = [
//     { label: '01', color: 'bg-teal-300', x: 0, y: -220 },       // Top
//     { label: '02', color: 'bg-pink-300', x: -178.5, y: -103.5 }, // Top Left
//     { label: '03', color: 'bg-sky-300', x: -178.5, y: 103.5 },   // Bottom Left
//     { label: '04', color: 'bg-red-300', x: 0, y: 207 },         // Bottom
//     { label: '05', color: 'bg-orange-300', x: 178.5, y: 103.5 }, // Bottom Right
//     { label: '06', color: 'bg-purple-300', x: 178.5, y: -103.5 } // Top Right
//   ]

//   return (
//     <div className="relative w-[700px] h-[700px] mx-auto mt-3">
//       {/* Center Circle */}
//       <div className="absolute top-96 left-1/2 w-[300px] h-[300px] bg-transparent border-[3px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 z-30 "></div>

//       {/* Hexagons */}
//       {hexagons.map((hex, i) => (
//         <div
//           key={i}
//           className={`
//             absolute w-[210px] h-[178.5px] ${hex.color}
//             clip-hexagon flex items-center justify-center text-white font-bold text-xl
//             z-20
//           `}
//           style={{
//             transform: `translate(-50%, -50%) translate(${hex.x}px, ${hex.y}px)`,
//             top: '55%',
//             left: '50%'
//           }}
//         >
//           {hex.label}
//         </div>
//       ))}
//     </div>
//   )
// }



//triangle diamond shape
// import { Code, Terminal, Monitor, Bug, FileCode } from "lucide-react";

// const HtmlBestPractices = () => {
//   const items = [
//     { title: "Clean & Maintainable Code", text: "Avoid inline styles; use classes instead Use indentation and consistent formatting Avoid unused or duplicate elements" },
//     { title: "SEO Best Practices", text: "Use proper heading structure (h1 → h6) Include meta tags for title, description, charset, etc Ensure descriptive link text (avoid 'click here')" },
//     { title: "Forms & Validation", text: "Use appropriate input types (email, tel, number) Use built-in HTML5 validation featuresAssociate <label> tags correctly with inputs Provide helpful placeholder or aria-describedby messages" },
//     { title: "TITLE LINE 04", text: "Lorem ipsum dolor sit amet." },
//     { title: "TITLE LINE 05", text: "Lorem ipsum dolor sit amet." },
//     { title: "TITLE LINE 06", text: "Lorem ipsum dolor sit amet." },
//   ];

//   return (
//     <div
//       className="relative flex flex-col items-center justify-center min-h-screen p-6 space-y-12 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url('/coding.png')`, // Replace with your image path or URL
//       }}
//     >
//       {/* Overlay (optional for readability) */}
//       <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

//       {/* Top Row */}
//       <div className="flex  gap-16 z-10">
//         {items.slice(0, 3).map((item, index) => (
//           <div
//             key={index}
//             className="w-60 h-60 rotate-45 bg-white border-2 shadow-md flex items-center justify-center"
//             style={{ borderColor: getColor(index) }}
//           >
//             <div className="-rotate-45 text-center">
//               <h3 className="text-sm font-semibold">{item.title}</h3>
//               <p className="text-xs">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Row */}
//       <div className="flex justify-center gap-16 mt-[-73px] ml-42 z-10">
//         <div className="w-20" />
//         {items.slice(3).map((item, index) => (
//           <div
//             key={index}
//             className="w-60 h-60 rotate-45 bg-white border-2 shadow-md flex items-center justify-center"
//             style={{ borderColor: getColor(index + 3) }}
//           >
//             <div className="-rotate-45 text-center">
//               <h3 className="text-sm font-semibold">{item.title}</h3>
//               <p className="text-xs">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Helper to set border color based on index
// const getColor = (index) => {
//   const colors = [
//     "#00BFD8",
//     "#0076CE",
//     "#8E44AD",
//     "#E91E63",
//     "#F57C00",
//     "#FFC107",
//   ];
//   return colors[index] || "#000";
// };

// export default HtmlBestPractices;


//hexagon with box imp
// 'use client'
// import { useState } from 'react'

// export default function HexagonCircle() {
//   const [selectedHex, setSelectedHex] = useState(null)

//   const hexagons = [
//     { label: '01', color: 'bg-teal-300', x: 0, y: -299 },
//     { label: '02', color: 'bg-pink-300', x: -260, y: -125 },
//     { label: '03', color: 'bg-sky-300', x: -260, y: 100 },
//     { label: '04', color: 'bg-red-300', x: 0, y: 270 },
//     { label: '05', color: 'bg-orange-300', x: 260, y: 100 },
//     { label: '06', color: 'bg-purple-300', x: 260, y: -125 },
//   ]

//   const getPanelPosition = (hex) => {
//     const marginX = 300   // Increased for extra spacing
//     const marginY = 1  // Optional: vertical spacing
//     const isLeft = ['01', '02', '03'].includes(hex.label)
//     const offsetX = isLeft ? hex.x - marginX : hex.x + marginX
//     const offsetY = hex.y + marginY
//     return { offsetX, offsetY, isLeft }
//   }
//   return (
//     <div className="relative w-[990px] h-[990px] mx-auto mt-6">
//       {/* Central Circle */}
//       <div className="absolute top-123 left-1/2 w-[430px] h-[430px] border-[3px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 z-12" />

//       {/* Hexagons */}
//       {hexagons.map((hex, index) => (
//         <div
//           key={index}
//           className={`absolute w-[240px] h-[198.5px] ${hex.color} clip-hexagon 
//             flex items-center justify-center text-white font-bold text-xl cursor-pointer z-10 
//             transition-transform duration-300 hover:scale-105`}
//           style={{
//             transform: `translate(-50%, -50%) translate(${hex.x}px, ${hex.y}px)`,
//             top: '50%',
//             left: '50%',
//           }}
//           onClick={() => setSelectedHex(hex)}
//         >
//           {hex.label}
//         </div>
//       ))}

//       {/* Info Panel */}
//       {selectedHex && (() => {
//         const { offsetX, offsetY, isLeft } = getPanelPosition(selectedHex)
//         return (
//           <div
//             className="absolute w-[370px] h-[180px] bg-white text-black p-4 rounded-lg shadow-xl z-0 transition-all duration-300"
//             style={{
//               top: `calc(50% + ${offsetY}px)`,
//               left: `calc(50% + ${offsetX}px)`,
//               transform: 'translate(-50%, -50%)',
//             }}
//           >
//             {/* Triangle Arrow */}
//             <div
//               className={`absolute w-0 h-0 border-[10px] 
//               ${isLeft
//                   ? 'border-r-white border-t-transparent border-b-transparent left-full top-1/2 -translate-y-1/2'
//                   : 'border-l-white border-t-transparent border-b-transparent right-full top-1/2 -translate-y-1/2'
//                 }`}
//             ></div>

//             <div className="flex justify-between items-center mb-2">
//               <h2 className="font-bold text-lg">Hexagon {selectedHex.label}</h2>
//               <button
//                 onClick={() => setSelectedHex(null)}
//                 className="text-sm text-red-500 hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//             <p>This panel opens beside hexagon {selectedHex.label}.</p>
//           </div>
//         )
//       })()}
//     </div>
//   )
// }


