'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome, FaInfoCircle, FaDownload, FaRoute, FaCogs,
  FaUserShield, FaKey, FaUpload, FaExclamationTriangle,
  FaCog, FaRocket, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const ExpressSidebar = () => {
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
    <div className="w-70 bg-white text-black p-4 h-screen fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Express Tutorial</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <ul className="space-y-4 pb-29">
          <li>
            <Link href="/expresshome" className={getLinkClass("/expresshome")}>
              <FaHome className="inline mr-2 text-xl" /> Express Roadmap
            </Link>
          </li>
          <li>
            <Link href="/expressintro" className={getLinkClass("/expressintro")}>
              <FaInfoCircle className="inline mr-2 text-xl" /> Introduction
            </Link>
          </li>
          <li>
            <Link href="/expresssetup" className={getLinkClass("/expresssetup")}>
              <FaDownload className="inline mr-2 text-xl" /> Setup & Installation
            </Link>
          </li>

          {/* Routing Section */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-yellow-100 p-2 rounded"
              onClick={() => toggleDropdown('routing')}
            >
              <span>Routing</span>
              {isOpen['routing'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['routing'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/expressrouting" className={getLinkClass("/expressrouting")}>
                    <FaRoute className="inline mr-2 text-xl" /> Basics of Routing
                  </Link>
                </li>
                <li>
                  <Link href="/expressparams" className={getLinkClass("/expressparams")}>
                    <FaRoute className="inline mr-2 text-xl" /> Route Parameters
                  </Link>
                </li>
                <li>
                  <Link href="/expressmiddleware" className={getLinkClass("/expressmiddleware")}>
                    <FaCogs className="inline mr-2 text-xl" /> Middleware
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Advanced Topics */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-yellow-100 p-2 rounded"
              onClick={() => toggleDropdown('advanced')}
            >
              <span>Advanced Topics</span>
              {isOpen['advanced'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['advanced'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/expressauth" className={getLinkClass("/expressauth")}>
                    <FaUserShield className="inline mr-2 text-xl" /> Authentication
                  </Link>
                </li>
                <li>
                  <Link href="/expressjwt" className={getLinkClass("/expressjwt")}>
                    <FaKey className="inline mr-2 text-xl" /> JWT Integration
                  </Link>
                </li>
                <li>
                  <Link href="/expressfileupload" className={getLinkClass("/expressfileupload")}>
                    <FaUpload className="inline mr-2 text-xl" /> File Uploads
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Utilities & Deployment */}
          <li>
            <Link href="/expresserror" className={getLinkClass("/expresserror")}>
              <FaExclamationTriangle className="inline mr-2 text-xl" /> Error Handling
            </Link>
          </li>
          <li>
            <Link href="/expressenv" className={getLinkClass("/expressenv")}>
              <FaCog className="inline mr-2 text-xl" /> .env & Configuration
            </Link>
          </li>
          <li>
            <Link href="/expressdeployment" className={getLinkClass("/expressdeployment")}>
              <FaRocket className="inline mr-2 text-xl" /> Deployment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpressSidebar;