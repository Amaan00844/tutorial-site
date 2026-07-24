'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome, FaFileAlt, FaRocket, FaChevronDown, FaChevronUp,
  FaPaintBrush, FaLayerGroup, FaCode, FaPalette, FaCube, FaImage, FaDatabase
} from 'react-icons/fa';

const CssSidebar = () => {
  const [isOpen, setIsOpen] = useState({}); // State to manage dropdowns
  const pathname = usePathname();

  // Toggle the dropdown visibility based on the section clicked
  const toggleDropdown = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the specific section's dropdown
    }));
  };

  // Get link class with active state management
  const getLinkClass = (href) => {
    return `block p-2 rounded transition-all duration-200 ease-in-out 
      hover:bg-orange-200
      ${pathname === href ? 'bg-orange-200 font-semibold text-black' : 'text-gray-700'}`;
  };

  return (
    <div className="w-full md:w-70 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">CSS Tutorial</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <ul className="space-y-2 md:space-y-4 pb-16 md:pb-29">
          <li>
            <Link href="/CssHome" className={getLinkClass('/csshome')}>
              <FaHome className="inline mr-2 text-xl" /> CSS Roadmap 
            </Link>
          </li>
          <li>
            <Link href="/CssIntro" className={getLinkClass('/cssintro')}>
              <FaFileAlt className="inline mr-2 text-xl" /> CSS Introduction
            </Link>
          </li>
        

          {/* Selectors Dropdown */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold"
              onClick={() => toggleDropdown('selectors')}
            >
              <span>Selectors</span>
              {isOpen['selectors'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['selectors'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/CssBasic" className={getLinkClass('/basicselectors')}>
                    <FaCode className="inline mr-2 text-xl" /> Basic Selectors
                  </Link>
                </li>
                <li>
                  <Link href="/CssCombo" className={getLinkClass('/combinators')}>
                    <FaLayerGroup className="inline mr-2 text-xl" /> Combinators
                  </Link>
                </li>
                <li>
                  <Link href="/CsspseClass" className={getLinkClass('/pseudoclasses')}>
                    <FaPaintBrush className="inline mr-2 text-xl" /> Pseudo-Classes
                  </Link>
                </li>
                <li>
                  <Link href="/CssPseELe" className={getLinkClass('/pseudoelements')}>
                    <FaCube className="inline mr-2 text-xl" /> Pseudo-Elements
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other links */}
          <li>
            <Link href="/CssBoxMod" className={getLinkClass('/boxmodel')}>
              <FaCube className="inline mr-2 text-xl" /> Box Model
            </Link>
          </li>
          <li>
            <Link href="/CssFlex" className={getLinkClass('/flexbox')}>
              <FaLayerGroup className="inline mr-2 text-xl" /> Flexbox
            </Link>
          </li>
          <li>
            <Link href="/CssGrid" className={getLinkClass('/grid')}>
              <FaLayerGroup className="inline mr-2 text-xl" /> Grid
            </Link>
          </li>
          <li>
            <Link href="/CssAnimation" className={getLinkClass('/animations')}>
              <FaImage className="inline mr-2 text-xl" /> Animations
            </Link>
          </li>
          <li>
            <Link href="/CssResponsive" className={getLinkClass('/responsive')}>
              <FaPalette className="inline mr-2 text-xl" /> Responsive Design
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssSidebar;