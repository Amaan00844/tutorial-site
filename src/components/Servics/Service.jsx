// 'use client';

// import {
//   FaRobot,
//   FaCode,
//   FaCertificate,
//   FaKeyboard,
//   FaMedal,
//   FaChalkboardTeacher,
// } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaRobot className="text-3xl text-blue-600" />,
//     title: 'AI Mentor for Real-Time Support',
//     desc: 'Get instant help from our AI that offers clear explanations, practical solutions, and debugging tips.',
//     rotate: '-rotate-[6deg]',
//   },
//   {
//     icon: <FaCode className="text-3xl text-blue-600" />,
//     title: 'Practice Platform',
//     desc: 'Thousands of coding problems organized by difficulty and real-life scenarios.',
//     rotate: 'rotate-[6deg]',
//   },
//   {
//     icon: <FaKeyboard className="text-3xl text-blue-600" />,
//     title: 'Online Compiler',
//     desc: 'Write, test, and debug code directly in your browser with instant feedback.',
//     rotate: '-rotate-[6deg]',
//   },
//   {
//     icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
//     title: 'Industry-Relevant Courses',
//     desc: 'Courses with input from professionals, covering Python, Java, C++, DSA, AI/ML, and more.',
//     rotate: 'rotate-[6deg]',
//   },
//   {
//     icon: <FaCertificate className="text-3xl text-blue-600" />,
//     title: 'Course Completion Certificates',
//     desc: 'Earn industry-recognized certificates to help your resume stand out.',
//     rotate: '-rotate-[6deg]',
//   },
//   {
//     icon: <FaMedal className="text-3xl text-blue-600" />,
//     title: 'Compete & Challenge',
//     desc: 'Join contests, boost your rankings, and shine among the best.',
//     rotate: 'rotate-[6deg]',
//   },
// ];

// export default function Service() {
//   return (
//     <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
//         {/* Left Side Text Section */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
//           <h2 className="text-3xl font-bold text-gray-900">
//             <span className="relative inline-block">
//               <span className="relative z-10">Features</span>
             
//             </span>{' '}
//             that drive our learning programs
//           </h2>
//           <p className="text-gray-700 text-xl max-w-md mx-auto lg:mx-0">
//             Try Before You Buy, Experience premium courses for free before committing.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </div>

//         {/* Right Side Cards Section */}
//         <div className="flex flex-col sm:flex-row gap-10 justify-center">
//           <div className="flex flex-col items-center space-y-7">
//             {services.slice(0, 3).map((service, index) => (
//               <div
//                 key={index}
//                 className={`bg-white w-[18rem] p-6 shadow-xl rounded-xl transform ${service.rotate}`}
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
//                 <p className="text-gray-600 text-sm">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col items-center space-y-7">
//             {services.slice(3).map((service, index) => (
//               <div
//                 key={index + 3}
//                 className={`bg-white w-[18rem] p-6 shadow-xl rounded-xl transform ${service.rotate}`}
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
//                 <p className="text-gray-600 text-sm">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';
import Link from 'next/link';
import {
  FaRobot,
  FaCode,
  FaCertificate,
  FaKeyboard,
  FaMedal,
  FaChalkboardTeacher,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si'; // MongoDB icon
import { Typewriter } from 'react-simple-typewriter';

const services = [
  {
    icon: <FaRobot className="text-3xl text-blue-600" />,
    title: 'AI Mentor for Real-Time Support',
    desc: 'Get instant help from our AI that offers clear explanations, practical solutions, and debugging tips.',
    rotate: '-rotate-[6deg]',
  },
  {
    icon: <FaCode className="text-3xl text-blue-600" />,
    title: 'Practice Platform',
    desc: 'Thousands of coding problems organized by difficulty and real-life scenarios.',
    rotate: 'rotate-[6deg]',
  },
  {
    icon: <FaKeyboard className="text-3xl text-blue-600" />,
    title: 'Online Compiler',
    desc: 'Write, test, and debug code directly in your browser with instant feedback.',
    rotate: '-rotate-[6deg]',
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
    title: 'Industry-Relevant Courses',
    desc: 'Courses with input from professionals, covering Python, Java, C++, DSA, AI/ML, and more.',
    rotate: 'rotate-[6deg]',
  },
  {
    icon: <FaCertificate className="text-3xl text-blue-600" />,
    title: 'Course Completion Certificates',
    desc: 'Earn industry-recognized certificates to help your resume stand out.',
    rotate: '-rotate-[6deg]',
  },
  {
    icon: <FaMedal className="text-3xl text-blue-600" />,
    title: 'Compete & Challenge',
    desc: 'Join contests, boost your rankings, and shine among the best.',
    rotate: 'rotate-[6deg]',
  },
];

export default function Service() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="relative inline-block">'Features that 
              <Typewriter
                words={[' drive our learning programs']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          {/* Expanded Paragraph */}
          <p className="text-gray-700 text-xl max-w-md mx-auto lg:mx-0 space-y-2">
            Try Before You Buy, Experience premium courses for free before committing.
            <br />real-world job expectations.
            <br />sharpen your problem-solving skills.
          </p>

         <Link href='/tutorial'>
         <button className="bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </button>
         </Link>
                  {/* 🔽 New Icon Row Below Button */}
        {/* 🔽 Icon Row with Wavy Vertical Offsets and Natural Colors */}
<div className="mt-6 flex justify-center lg:justify-start gap-6 text-5xl cursor-pointer">
  <div className="relative top-[-6px]">
    <FaJava title="Java" className="text-[#ef4a31]" />
  </div>
  <div className="relative top-[4px]">
    <FaPython title="Python" className="text-[#f1d106]" />
  </div>
  <div className="relative top-[-4px]">
    <FaReact title="React" className="text-[#61DBFB]" />
  </div>
  <div className="relative top-[6px]">
    <FaNodeJs title="Node.js" className="text-[#3C873A]" />
  </div>
  <div className="relative top-[-3px]">
    <SiMongodb title="MongoDB" className="text-[#47A248]" />
  </div>
</div>

        </div>

        {/* Right Side Cards Section */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center">
          <div className="flex flex-col items-center space-y-7">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className={`bg-white w-[18rem] p-6 shadow-xl rounded-xl transform ${service.rotate}`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-7">
            {services.slice(3).map((service, index) => (
              <div
                key={index + 3}
                className={`bg-white w-[18rem] p-6 shadow-xl rounded-xl transform ${service.rotate}`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
