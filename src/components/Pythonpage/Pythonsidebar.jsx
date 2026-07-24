'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaPython, FaCogs, FaLayerGroup, FaBookOpen, FaCode, FaChevronDown,
  FaChevronUp, FaRocket, FaLock, FaProjectDiagram
} from 'react-icons/fa';

const Pythonsidebar = () => {
  const [isOpen, setIsOpen] = useState({});
  const pathname = usePathname();

  const toggleDropdown = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getLinkClass = (href) => (
    `block p-2 rounded transition-all duration-200 ease-in-out
    hover:bg-[#d0f0fd]
    ${pathname === href ? 'bg-[#d0f0fd] font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-70 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">Python Tutorial</h2>

      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <ul className="space-y-2 md:space-y-4 pb-16 md:pb-24">
        <li>
            <Link href="/roadmapPython" className={getLinkClass("/homepythonpage")}>
              <FaPython className="inline mr-2 text-xl" /> RoadMap
            </Link>
          </li>
          <li>
            <Link href="/pythonHome" className={getLinkClass("/homepythonpage")}>
              <FaPython className="inline mr-2 text-xl" /> Python HOME
            </Link>
          </li>
          <li>
            <Link href="/pythonInstallation" className={getLinkClass("/installationpython")}>
              <FaCogs className="inline mr-2 text-xl" /> Installation
            </Link>
          </li>
          <li>
            <Link href="/pythonBasic" className={getLinkClass("/basicpython")}>
              <FaLayerGroup className="inline mr-2 text-xl" /> Python Basics
            </Link>
          </li>

          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold"
              onClick={() => toggleDropdown('syntax')}
            >
              <span>Python Syntax</span>
              {isOpen['syntax'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['syntax'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/pythonVariable" className={getLinkClass("/variables")}>
                    <FaCode className="inline mr-2 text-xl" /> Variables
                  </Link>
                </li>
                <li>
                  <Link href="/pythonDatatype" className={getLinkClass("/datatypes")}>
                    <FaLayerGroup className="inline mr-2 text-xl" /> Data Types
                  </Link>
                </li>
                <li>
                  <Link href="/pythonOperator" className={getLinkClass("/operators")}>
                    <FaRocket className="inline mr-2 text-xl" /> Operators
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/pythonControlflow" className={getLinkClass("/controlflow")}>
              <FaLock className="inline mr-2 text-xl" /> Control Flow 
            </Link>
          </li>

          <li>
            <Link href="/pythonFunction" className={getLinkClass("/functions")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> Functions
            </Link>
          </li>

          <li>
            <Link href="/pythonModule" className={getLinkClass("/modules")}>
              <FaBookOpen className="inline mr-2 text-xl" /> Modules & Packages
            </Link>
          </li>

          <li>
            <Link href="/pythonOops" className={getLinkClass("/oops")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> OOP in Python
            </Link>
          </li>

          <li>
            <Link href="/pythonFilehandling" className={getLinkClass("/filehandling")}>
              <FaLayerGroup className="inline mr-2 text-xl" /> File Handling
            </Link>
          </li>

          <li>
            <Link href="/pythonException" className={getLinkClass("/exceptions")}>
              <FaLock className="inline mr-2 text-xl" /> Exception Handling
            </Link>
          </li>

          <li>
            <Link href="/pythonLibrary" className={getLinkClass("/pythonlibraries")}>
              <FaRocket className="inline mr-2 text-xl" /> Python Libraries
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pythonsidebar;
