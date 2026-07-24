'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome, FaRegFileAlt, FaCogs, FaCode, FaCubes, FaEquals, FaRandom, FaCodeBranch,
  FaListUl, FaObjectGroup, FaSync, FaHtml5, FaMousePointer, FaTasks, FaRocket,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const JSSidebar = () => {
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
    hover:bg-gradient-to-r from-white to-cyan-100 
    ${pathname === href ? 'bg-gradient-to-r from-white to-cyan-100  font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-70 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">Next.js API Routes</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <ul className="space-y-2 md:space-y-4 pb-16 md:pb-29">
          <li>
            <Link href="/nextjs/home" className={getLinkClass("/nextjs/home")}>
              <FaHome className="inline mr-2 text-xl" /> Roadmap
            </Link>
          </li>
          <li>
            <Link href="/nextjs/introduction" className={getLinkClass("/nextjs/introduction")}>
              <FaRegFileAlt className="inline mr-2 text-xl" /> Introduction
            </Link>
          </li>
          <li>
            <Link href="/nextjs/get-started" className={getLinkClass("/nextjs/get-started")}>
              <FaCogs className="inline mr-2 text-xl" /> Getting Started
            </Link>
          </li>

          {/* API Routing Section */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-gradient-to-r from-white to-cyan-100  p-2 rounded"
              onClick={() => toggleDropdown('api-routing')}
            >
              <span>API Routes</span>
              {isOpen['api-routing'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['api-routing'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/nextjs/api-routes" className={getLinkClass("/nextjs/api-routes")}>
                    <FaRandom className="inline mr-2 text-xl" /> Basics of API Routes
                  </Link>
                </li>
                <li>
                  <Link href="/nextjs/api-methods" className={getLinkClass("/nextjs/api-methods")}>
                    <FaCode className="inline mr-2 text-xl" /> API Methods (GET, POST)
                  </Link>
                </li>
                <li>
                  <Link href="/nextjs/api-auth" className={getLinkClass("/nextjs/api-auth")}>
                    <FaTasks className="inline mr-2 text-xl" /> API Authentication
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Advanced Topics */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-gradient-to-r from-white to-cyan-100  p-2 rounded"
              onClick={() => toggleDropdown('advanced')}
            >
              <span>Advanced Topics</span>
              {isOpen['advanced'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['advanced'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/nextjs/ssr" className={getLinkClass("/nextjs/ssr")}>
                    <FaEquals className="inline mr-2 text-xl" /> Server-side Rendering (SSR)
                  </Link>
                </li>
                <li>
                  <Link href="/nextjs/static-generation" className={getLinkClass("/nextjs/static-generation")}>
                    <FaCubes className="inline mr-2 text-xl" /> Static Generation
                  </Link>
                </li>
                <li>
                  <Link href="/nextjs/data-fetching" className={getLinkClass("/nextjs/data-fetching")}>
                    <FaObjectGroup className="inline mr-2 text-xl" /> Data Fetching
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Utilities & Deployment */}
          <li>
            <Link href="/nextjs/image-optimization" className={getLinkClass("/nextjs/image-optimization")}>
              <FaSync className="inline mr-2 text-xl" /> Image Optimization
            </Link>
          </li>
          <li>
            <Link href="/nextjs/style-css" className={getLinkClass("/nextjs/style-css")}>
              <FaListUl className="inline mr-2 text-xl" /> Styling with CSS
            </Link>
          </li>
          <li>
            <Link href="/nextjs/deployment" className={getLinkClass("/nextjs/deployment")}>
              <FaRocket className="inline mr-2 text-xl" /> Deployment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JSSidebar;
