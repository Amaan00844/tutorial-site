'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome, FaInfoCircle, FaDownload, FaCube, FaExchangeAlt,
  FaCode, FaPlug, FaCheckSquare, FaTachometerAlt, FaRocket,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const ReactSidebar = () => {
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
    hover:bg-pink-100
    ${pathname === href ? 'bg-pink-100 font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-70 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">React Tutorial</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <ul className="space-y-2 md:space-y-4 pb-16 md:pb-29">
          <li>
            <Link href="/reacthome" className={getLinkClass("/reacthome")}>
              <FaHome className="inline mr-2 text-xl" /> React Roadmap
            </Link>
          </li>
          <li>
            <Link href="/reactintroduction" className={getLinkClass("/reactintroduction")}>
              <FaInfoCircle className="inline mr-2 text-xl" /> Introduction
            </Link>
          </li>
          <li>
            <Link href="/reactinstallation" className={getLinkClass("/reactinstallation")}>
              <FaDownload className="inline mr-2 text-xl" /> Installation
            </Link>
          </li>
          <li>
            <Link href="/reactcomponents" className={getLinkClass("/reactcomponents")}>
              <FaCube className="inline mr-2 text-xl" /> Components
            </Link>
          </li>
          <li>
            <Link href="/reactprops" className={getLinkClass("/reactprops")}>
              <FaExchangeAlt className="inline mr-2 text-xl" /> Props & State
            </Link>
          </li>

          {/* Hooks Section */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-pink-100 p-2 rounded"
              onClick={() => toggleDropdown('hooks')}
            >
              <span>React Hooks</span>
              {isOpen['hooks'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['hooks'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/reactusestate" className={getLinkClass("/reactusestate")}>
                    <FaCode className="inline mr-2 text-xl" /> useState
                  </Link>
                </li>
                <li>
                  <Link href="/reactuseeffect" className={getLinkClass("/reactuseeffect")}>
                    <FaCode className="inline mr-2 text-xl" /> useEffect
                  </Link>
                </li>
                <li>
                  <Link href="/react_custom_hooks" className={getLinkClass("/react_custom_hooks")}>
                    <FaPlug className="inline mr-2 text-xl" /> Custom Hooks
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Router Section */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-pink-100 p-2 rounded"
              onClick={() => toggleDropdown('router')}
            >
              <span>React Router</span>
              {isOpen['router'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['router'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/reactroutingbasics" className={getLinkClass("/reactroutingbasics")}>
                    <FaCode className="inline mr-2 text-xl" /> Routing Basics
                  </Link>
                </li>
                <li>
                  <Link href="/reactdynamicroutes" className={getLinkClass("/reactdynamicroutes")}>
                    <FaCode className="inline mr-2 text-xl" /> Dynamic Routes
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/reactcontextapi" className={getLinkClass("/reactcontext")}>
              <FaPlug className="inline mr-2 text-xl" /> Context API
            </Link>
          </li>
          <li>
            <Link href="/reactformsandvalidation" className={getLinkClass("/reactformsandvalidation")}>
              <FaCheckSquare className="inline mr-2 text-xl" /> Forms & Validation
            </Link>
          </li>
          <li>
            <Link href="/reactperformance" className={getLinkClass("/reactperformance")}>
              <FaTachometerAlt className="inline mr-2 text-xl" /> Performance
            </Link>
          </li>
          <li>
            <Link href="/reactdeployment" className={getLinkClass("/reactdeployment")}>
              <FaRocket className="inline mr-2 text-xl" /> Deployment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReactSidebar;