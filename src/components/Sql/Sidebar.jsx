'use client';

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaChevronDown, FaChevronUp, FaDatabase, FaTable, FaSearch, FaPlusCircle, FaEdit, FaTrash, 
  FaFilter, FaSortAmountDown, FaLink, FaProjectDiagram, FaListAlt, FaFileAlt, FaCodeBranch, 
  FaChartBar, FaBoxOpen, FaTasks
} from "react-icons/fa";

const Sidebar = () => {
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
      hover:bg-gradient-to-r from-yellow-100 to-green-100 
      ${pathname === href ? 'bg-gradient-to-r from-yellow-100 to-green-100 font-semibold text-black' : 'text-gray-700'}`
  );

  return (
    <div className="w-full md:w-64 bg-white text-black p-3 md:p-4 h-screen md:fixed flex flex-col border-r shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800 shrink-0">SQL Tutorial</h2>

      <ul className="overflow-y-auto flex-1 custom-scrollbar pr-1 md:pr-2">

        {/* Static Links */}
        <li className="mb-4">
          <Link href="/sql/home" className={getLinkClass("/sql/home")}>
            <FaDatabase className="inline mr-2 text-xl" /> SQL Roadmap
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/sql/intro" className={getLinkClass("/sql/intro")}>
            <FaFileAlt className="inline mr-2 text-xl" /> SQL Introduction
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/sql/get-started" className={getLinkClass("/sql/get-started")}>
            <FaFileAlt className="inline mr-2 text-xl" /> Get Started
          </Link>
        </li>

        {/* Dropdown Section */}
        <li className="mb-4">
          <button 
            className="w-full text-left flex items-center justify-between text-lg font-semibold" 
            onClick={() => toggleDropdown('sqlPath')}
          >
            <span>SQL Learning Path</span>
            {isOpen['sqlPath'] ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isOpen['sqlPath'] && (
            <ul className="pl-6 mt-2 space-y-2">
              {[
                { label: "SQL Syntax Overview", icon: <FaCodeBranch className="inline mr-2 text-xl" />, href: "/sql/basic-syntax" },
                { label: "Data Types", icon: <FaBoxOpen className="inline mr-2 text-xl" />, href: "/sql/datatypes" },
                { label: "Create Tables", icon: <FaTable className="inline mr-2 text-xl" />, href: "/sql/create" },
                { label: "SELECT – Retrieving Data", icon: <FaSearch className="inline mr-2 text-xl" />, href: "/sql/select" },
                { label: "INSERT – Adding Data", icon: <FaPlusCircle className="inline mr-2 text-xl" />, href: "/sql/insert" },
                { label: "UPDATE – Modifying Data", icon: <FaEdit className="inline mr-2 text-xl" />, href: "/sql/update" },
                { label: "DELETE – Removing Data", icon: <FaTrash className="inline mr-2 text-xl" />, href: "/sql/delete" },
                { label: "WHERE Clause", icon: <FaFilter className="inline mr-2 text-xl" />, href: "/sql/where" },
                { label: "ORDER BY", icon: <FaSortAmountDown className="inline mr-2 text-xl" />, href: "/sql/order-by" },
                { label: "LIMIT & OFFSET", icon: <FaListAlt className="inline mr-2 text-xl" />, href: "/sql/limit-offset" },
                { label: "Joins in SQL", icon: <FaLink className="inline mr-2 text-xl" />, href: "/sql/joins" },
                { label: "GROUP BY & Aggregates", icon: <FaChartBar className="inline mr-2 text-xl" />, href: "/sql/group-by" },
                { label: "Subqueries", icon: <FaCodeBranch className="inline mr-2 text-xl" />, href: "/sql/subqueries" },
                { label: "CASE Statements", icon: <FaFileAlt className="inline mr-2 text-xl" />, href: "/sql/case" },
                { label: "Database Management", icon: <FaDatabase className="inline mr-2 text-xl" />, href: "/sql/database-management" },
                { label: "SQL Practice Projects", icon: <FaTasks className="inline mr-2 text-xl" />, href: "/sql/projects" }
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

export default Sidebar;