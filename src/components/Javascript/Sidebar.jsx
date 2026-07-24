'use client';

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaChevronDown, FaHome, FaRegFileAlt, FaCogs, FaChevronUp, FaCode, FaCubes, FaEquals, FaRandom, FaCodeBranch, FaListUl, FaObjectGroup, FaSync, FaHtml5, FaMousePointer, FaBolt, FaProjectDiagram, FaTasks, FaArrowCircleRight } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({});
  const pathname = usePathname();

  const toggleDropdown = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };FaBolt

  const getLinkClass = (href) => (
    `block p-2 rounded transition-all duration-200 ease-in-out
      hover:bg-yellow-100
      ${pathname === href ? 'bg-yellow-100 font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-64 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg">
      {/* Header */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800 shrink-0">Javascript Tutorial</h2>

      {/* Menu */}
      <ul className="overflow-y-auto flex-1 custom-scrollbar pr-1 md:pr-2">

        {/* Static Links */}
        <li className="mb-4">
          <Link href="/javascript/home" className={getLinkClass("/javascript/home")}>
            <FaHome className="inline mr-2 text-xl" /> Roadmap
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/javascript/intro" className={getLinkClass("/javascript/intro")}>
            <FaRegFileAlt className="inline mr-2 text-xl" /> Javascript Introduction
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/javascript/get-started" className={getLinkClass("/javascript/get-started")}>
            <FaCogs className="inline mr-2 text-xl" /> Javascript Get Started
          </Link>
        </li>

        {/* Dropdown Section */}
        <li className="mb-4">
          <button 
            className="w-full text-left flex items-center justify-between text-lg font-semibold" 
            onClick={() => toggleDropdown('nodeJs')}
          >
            <span>Javascript Learning Path</span>
            {isOpen['nodeJs'] ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isOpen['nodeJs'] && (
            <ul className="pl-6 mt-2 space-y-2">
              {[
              { label: "Basic Syntax", icon: <FaCode className="inline mr-2 text-xl" />, href: "/javascript/basic-syntax" },
              { label: "Variables & Data Types", icon: <FaCubes className="inline mr-2 text-xl" />, href: "/javascript/variables-datatype" },
              { label: "Operators", icon: <FaEquals className="inline mr-2 text-xl" />, href: "/javascript/operators" },
              { label: "Control Flow", icon: <FaRandom className="inline mr-2 text-xl" />, href: "/javascript/control-flow" },
              { label: "Functions", icon: <FaCodeBranch className="inline mr-2 text-xl" />, href: "/javascript/functions" },
              { label: "Arrays", icon: <FaListUl className="inline mr-2 text-xl" />, href: "/javascript/arrays" },
              { label: "Objects", icon: <FaObjectGroup className="inline mr-2 text-xl" />, href: "/javascript/objects" },
              { label: "Loops", icon: <FaSync className="inline mr-2 text-xl" />, href: "/javascript/loops" },
              { label: "DOM Manipulation", icon: <FaHtml5 className="inline mr-2 text-xl" />, href: "/javascript/dom-manupilation" },
              { label: "Events", icon: <FaMousePointer className="inline mr-2 text-xl" />, href: "/javascript/events" },
              { label: "Project: Calculator", icon: <FaProjectDiagram className="inline mr-2 text-xl" />, href: "/javascript/project-calculator" },
              { label: "Project: To-Do App", icon: <FaTasks className="inline mr-2 text-xl" />, href: "/javascript/project-todo" },
              { label: "Next Steps", icon: <FaArrowCircleRight className="inline mr-2 text-xl" />, href: "/javascript/next-steps" }
            ].map(({ label, icon, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={getLinkClass(href)}
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Other Static Links */}
        <li className="mb-4">
          <Link href="/ReferenceNode" className={getLinkClass("/ReferenceNode")}>
            <FaRegFileAlt className="inline mr-2 text-xl" /> Javascript Reference
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
