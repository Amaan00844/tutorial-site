'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaDatabase, FaHome,FaCogs, FaLayerGroup, FaSitemap, FaLock, FaRocket,
  FaCopy, FaProjectDiagram, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const SidebarJava = () => {
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
    hover:bg-yellow-100
    ${pathname === href ? 'bg-yellow-100 font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-70 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">Java Tutorial</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <ul className="space-y-2 md:space-y-4 pb-16 md:pb-29">
        <li>
            <Link href="/roadjava" className={getLinkClass("/php-home")}>
              <FaHome className="inline mr-2 text-xl" /> Roadmap
            </Link>
          </li>
          <li>
            <Link href="/javaHome" className={getLinkClass("/homejavapage")}>
              <FaDatabase className="inline mr-2 text-xl" /> Java HOME
            </Link>
          </li>
          <li>
            <Link href="/javaBasic" className={getLinkClass("/javabasics")}>
              <FaCogs className="inline mr-2 text-xl" /> Java Basics
            </Link>
          </li>
          <li>
            <Link href="/javaDataType" className={getLinkClass("/javadatatypes")}>
              <FaLayerGroup className="inline mr-2 text-xl" /> Data Types
            </Link>
          </li>
          <li>
            <Link href="/javaControlStatement" className={getLinkClass("/javacontrolstatements")}>
              <FaSitemap className="inline mr-2 text-xl" /> Control Statements
            </Link>
          </li>
          <li>
            <Link href="/javaMethod" className={getLinkClass("/javaprogmethods")}>
              <FaLock className="inline mr-2 text-xl" /> Methods
            </Link>
          </li>

          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold"
              onClick={() => toggleDropdown('oop')}
            >
              <span>(OOP)</span>
              {isOpen['oop'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['oop'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/javaClass" className={getLinkClass("/javaclasses")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Classes & Objects
                  </Link>
                </li>
                <li>
                  <Link href="/javaInheritance" className={getLinkClass("/javainheritance")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Inheritance
                  </Link>
                </li>
                <li>
                  <Link href="/javaPolymorphism" className={getLinkClass("/javapolymorphism")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Polymorphism
                  </Link>
                </li>
                <li>
                  <Link href="/javaEncapsulation" className={getLinkClass("/javaencapsulation")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Encapsulation
                  </Link>
                </li>
                <li>
                  <Link href="/javaAbstraction" className={getLinkClass("/javaabstraction")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Abstraction
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/javaArray" className={getLinkClass("/javaarrays")}>
              <FaRocket className="inline mr-2 text-xl" /> Arrays
            </Link>
          </li>

          <li>
            <Link href="/javaExceptionHandling" className={getLinkClass("/javaexceptionhandling")}>
              <FaCopy className="inline mr-2 text-xl" /> Exception Handling
            </Link>
          </li>

          <li>
            <Link href="/javaFileHandling" className={getLinkClass("/javafilehandling")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> File Handling
            </Link>
          </li>

          <li>
            <Link href="/javaString" className={getLinkClass("/javacollections")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> String
            </Link>
          </li>

          <li>
            <Link href="/javaLoop" className={getLinkClass("/javagenerics")}>
              <FaProjectDiagram className="inline mr-2 text-xl" />Java Loop 
            </Link>
          </li>

          <li>
            <Link href="/javaThread" className={getLinkClass("/javathreads")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> Threads
            </Link>
          </li>

          <li>
            <Link href="/javaJDBCConnection" className={getLinkClass("/javajdbc")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> JDBC (Java Database Connectivity)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarJava;
