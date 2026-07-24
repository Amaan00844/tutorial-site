'use client';

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaChevronDown, FaChevronUp, FaDatabase, FaTable, FaSearch, FaPlusCircle, FaEdit, FaTrash, 
  FaFilter, FaSortAmountDown, FaLink, FaProjectDiagram, FaListAlt, FaFileAlt, FaCodeBranch, 
  FaChartBar, FaBoxOpen, FaTasks, FaLock, FaServer
} from "react-icons/fa";

const MySQLSidebar = () => {
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
    <div className="w-full md:w-74 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg ">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800 shrink-0">MySQL Tutorial</h2>

      <ul className="overflow-y-auto flex-1 custom-scrollbar pr-1 md:pr-2">

        {/* Static Links */}
        <li className="mb-4">
          <Link href="/mysql-home" className={getLinkClass("/mysql/myhome")}>
            <FaDatabase className="inline mr-2 text-xl" /> Roadmap
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/myintro" className={getLinkClass("/mysql/myintro")}>
            <FaFileAlt className="inline mr-2 text-xl" /> MySQL Introduction
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/myget-started" className={getLinkClass("/mysql/myget-started")}>
            <FaFileAlt className="inline mr-2 text-xl" /> Get Started
          </Link>
        </li>

        {/* Dropdown Section */}
        <li className="mb-30">
          <button 
            className="w-full text-left flex items-center justify-between text-lg font-semibold" 
            onClick={() => toggleDropdown('mysqlPath')}
          >
            <span>MySQL Learning Path</span>
            {isOpen['mysqlPath'] ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isOpen['mysqlPath'] && (
            <ul className="pl-6 mt-2 space-y-2">
              {[
                { label: "MySQL Syntax Overview", icon: <FaCodeBranch className="inline mr-2 text-xl" />, href: "/mybasic-syntax" },
                { label: "Data Types", icon: <FaBoxOpen className="inline mr-2 text-xl" />, href: "/mydatatypes" },
                { label: "Create Tables", icon: <FaTable className="inline mr-2 text-xl" />, href: "/mycreate" },
                { label: "SELECT – Retrieving Data", icon: <FaSearch className="inline mr-2 text-xl" />, href: "/myselect" },
                { label: "INSERT – Adding Data", icon: <FaPlusCircle className="inline mr-2 text-xl" />, href: "/myinsert" },
                { label: "UPDATE – Modifying Data", icon: <FaEdit className="inline mr-2 text-xl" />, href: "/mysqlUpdate" },
                { label: "DELETE – Removing Data", icon: <FaTrash className="inline mr-2 text-xl" />, href: "/mydelete" },
                { label: "WHERE Clause", icon: <FaFilter className="inline mr-2 text-xl" />, href: "/mywhere" },
                { label: "ORDER BY", icon: <FaSortAmountDown className="inline mr-2 text-xl" />, href: "/myorder-by" },
                { label: "LIMIT & OFFSET", icon: <FaListAlt className="inline mr-2 text-xl" />, href: "/mylimit-offset" },
                { label: "Joins in MySQL", icon: <FaLink className="inline mr-2 text-xl" />, href: "/myjoins" },
                { label: "GROUP BY & Aggregates", icon: <FaChartBar className="inline mr-2 text-xl" />, href: "/mygroup-by" },
                { label: "Subqueries", icon: <FaCodeBranch className="inline mr-2 text-xl" />, href: "/mysubqueries" },
             
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
      </ul>
    </div>
  );
};

export default MySQLSidebar;