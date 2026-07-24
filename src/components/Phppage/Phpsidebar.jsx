'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome, FaInfoCircle, FaDownload, FaCode, FaDatabase,
  FaServer, FaShieldAlt, FaUserCog, FaFileUpload,
  FaExclamationTriangle, FaCog, FaRocket, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const PhpSidebar = () => {
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
    hover:bg-purple-100
    ${pathname === href ? 'bg-purple-100 font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-80 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">PHP Tutorial</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <ul className="space-y-2 md:space-y-4 pb-16 md:pb-29">
          <li>
            <Link href="/phphome" className={getLinkClass("/php-home")}>
              <FaHome className="inline mr-2 text-xl" /> Roadmap
            </Link>
          </li>
          <li>
            <Link href="/php-intro" className={getLinkClass("/php-intro")}>
              <FaInfoCircle className="inline mr-2 text-xl" /> Introduction
            </Link>
          </li>
          <li>
            <Link href="/php-installation" className={getLinkClass("/php-installation")}>
              <FaDownload className="inline mr-2 text-xl" /> Installation
            </Link>
          </li>
          <li>
            <Link href="/php-syntax" className={getLinkClass("/php-syntax")}>
              <FaCode className="inline mr-2 text-xl" /> Basic Syntax
            </Link>
          </li>

          {/* Database Section */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-purple-100 p-2 rounded"
              onClick={() => toggleDropdown('database')}
            >
              <span>Database</span>
              {isOpen['database'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['database'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/php-mysql" className={getLinkClass("/php-mysql")}>
                    <FaDatabase className="inline mr-2 text-xl" /> MySQL Integration
                  </Link>
                </li>
                <li>
                  <Link href="/php-pdo" className={getLinkClass("/php-pdo")}>
                    <FaDatabase className="inline mr-2 text-xl" /> PDO
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Security Section */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold hover:bg-purple-100 p-2 rounded"
              onClick={() => toggleDropdown('security')}
            >
              <span>Security</span>
              {isOpen['security'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['security'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/php-validation" className={getLinkClass("/php-validation")}>
                    <FaShieldAlt className="inline mr-2 text-xl" /> Form Validation
                  </Link>
                </li>
                <li>
                  <Link href="/php-authentication" className={getLinkClass("/php-authentication")}>
                    <FaUserCog className="inline mr-2 text-xl" /> Authentication
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/php-file-handling" className={getLinkClass("/php-file-handling")}>
              <FaFileUpload className="inline mr-2 text-xl" /> File Handling
            </Link>
          </li>
          <li>
            <Link href="/php-error-handling" className={getLinkClass("/php-error-handling")}>
              <FaExclamationTriangle className="inline mr-2 text-xl" /> Error Handling
            </Link>
          </li>
          <li>
            <Link href="/php-configuration" className={getLinkClass("/php-configuration")}>
              <FaCog className="inline mr-2 text-xl" /> Configuration
            </Link>
          </li>
          <li>
            <Link href="/php-deployment" className={getLinkClass("/php-deployment")}>
              <FaRocket className="inline mr-2 text-xl" /> Deployment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhpSidebar;