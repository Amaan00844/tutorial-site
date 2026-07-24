'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaDatabase, FaCogs, FaLayerGroup, FaSitemap, FaLock, FaRocket,
  FaCopy, FaProjectDiagram, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const Sidebarhtml = () => {
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
    <div className="w-70 bg-white text-black p-4 h-screen fixed flex flex-col border-r shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">HTML Tutorial</h2>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <ul className="space-y-4 pb-29">
        <li>
            <Link href="/roadmapHtml" className={getLinkClass("/homehtmlpage")}>
              <FaDatabase className="inline mr-2 text-xl" /> Roadmap
            </Link>
          </li>
          <li>
            <Link href="/htmlHome" className={getLinkClass("/homehtmlpage")}>
              <FaDatabase className="inline mr-2 text-xl" /> HTML Introduction
            </Link>
          </li>
          <li>
            <Link href="/htmlBasic" className={getLinkClass("/htmlbasics")}>
              <FaCogs className="inline mr-2 text-xl" /> HTML Basics
            </Link>
          </li>
          <li>
            <Link href="/htmlComment" className={getLinkClass("/htmlstructure")}>
              <FaLayerGroup className="inline mr-2 text-xl" /> Comment
            </Link>
          </li>
          <li>
            <Link href="/htmltag" className={getLinkClass("/htmltags")}>
              <FaSitemap className="inline mr-2 text-xl" /> HTML Tags
            </Link>
          </li>
          <li>
            <Link href="/htmlAttribute" className={getLinkClass("/htmlattributes")}>
              <FaLock className="inline mr-2 text-xl" /> HTML Attributes
            </Link>
          </li>

          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold"
              onClick={() => toggleDropdown('forms')}
            >
              <span>HTML Forms</span>
              {isOpen['forms'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['forms'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/htmlForm" className={getLinkClass("/formtags")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Form Tags
                  </Link>
                </li>
                <li>
                  <Link href="/htmlFormValidation" className={getLinkClass("/formvalidation")}>
                    <FaProjectDiagram className="inline mr-2 text-xl" /> Form Validation
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="w-full text-left flex items-center justify-between text-lg font-semibold"
              onClick={() => toggleDropdown('media')}
            >
              <span>HTML Media</span>
              {isOpen['media'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen['media'] && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link href="/htmlImage" className={getLinkClass("/htmlimages")}>
                    <FaLayerGroup className="inline mr-2 text-xl" /> HTML Images
                  </Link>
                </li>
                <li>
                  <Link href="/htmlAudio" className={getLinkClass("/htmlaudio")}>
                    <FaLayerGroup className="inline mr-2 text-xl" /> HTML Audio
                  </Link>
                </li>
                <li>
                  <Link href="/htmlVedio" className={getLinkClass("/htmlvideo")}>
                    <FaLayerGroup className="inline mr-2 text-xl" /> HTML Video
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/htmlTable" className={getLinkClass("/htmltables")}>
              <FaRocket className="inline mr-2 text-xl" /> HTML Tables
            </Link>
          </li>

          <li>
            <Link href="/htmlBlock" className={getLinkClass("/htmlcomments")}>
              <FaCopy className="inline mr-2 text-xl" />Block and Inline
            </Link>
          </li>

          <li>
            <Link href="/htmlCss" className={getLinkClass("/htmlcss")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> HTML & CSS
            </Link>
          </li>

          <li>
            <Link href="/htmlHeading" className={getLinkClass("/html5")}>
              <FaProjectDiagram className="inline mr-2 text-xl" /> Heading
            </Link>
          </li>

          <li>
            <Link href="/htmlID" className={getLinkClass("/htmlbestpractices")}>
              <FaProjectDiagram className="inline mr-2 text-xl" />ID & CLASS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebarhtml;
