"use client";

import Link from "next/link";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { FaUser } from "react-icons/fa"; // Added user icon
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const menuItems = [
    { name: "HTML", link: "/firstHtml" },
    { name: "CSS", link: "/Csscard" },
    { name: "JavaScript", link: "/javascript" },
    { name: "React", link: "/react" },
    { name: "Node.js", link: "/CardNode" },
    { name: "PHP", link: "/php" },
    { name: "Python", link: "/firstPython" },
    { name: "Express", link: "/express" },
    { name: "Mongodb", link: "/firstmongo" },
    { name: "Java", link: "/firstJava" },
    { name: "Sql", link: "/sql" },
    { name: "MySql", link: "/mysql" },
    { name: "Next.js", link: "/nextjs" },
  ];

  const learningItems = [
    { name: "Tutorial", link: "/tutorial" },
    { name: "Video", link: "/video" },
    { name: "Quiz Test", link: "/quizz" },
    { name: "Interview Q&A", link: "/exercises" },
    { name: "Practical-Exercise", link: "/practical-exercise" },
    { name: "Practical-Projects", link: "/project-card" },
    { name: "Best Practices", link: "/bestpracticecard" },
    { name: "Leaderboard", link: "/leaderboard" },
  ];

  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "Activity", link: "/activity" },
  ];

  const allItems = [...navbarItems, ...learningItems, ...menuItems];

  const filteredSearchItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const userData = localStorage.getItem("user");
      if (userData && userData !== "undefined" && userData !== "null") {
        try {
          const { name } = JSON.parse(userData);
          setUsername(name);
        } catch (error) {
          console.error("Error parsing user data:", error);
          // Clear invalid data
          localStorage.removeItem("user");
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
    setShowDropdown(false);
    window.location.href = "/";
  };

  return (
    <div className="relative">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center space-x-1 sm:space-x-2">
                <PiFlowerLotusDuotone className="text-blue-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-glow" />
                <span className="text-black">Skill</span>
                <span className="text-blue-700 ">Bridge</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex space-x-8">
                {navbarItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`px-1 py-2 text-sm font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ${
                      pathname === item.link
                        ? "text-blue-500 border-blue-500"
                        : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Learning Dropdown */}
                <div className="relative group">
                  <button
                    className={`px-1 py-2 text-sm font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ${
                      learningItems.some((i) => pathname === i.link)
                        ? "text-blue-500 border-blue-500"
                        : "text-gray-800"
                    }`}
                  >
                    Learning ▾
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {learningItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className={`block px-4 py-2 text-sm ${
                          pathname === item.link
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Search + Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() =>
                    searchQuery.length > 0 && setShowSearchResults(true)
                  }
                  className="px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-sm w-40 transition-all duration-300 focus:w-52"
                />
                {showSearchResults && filteredSearchItems.length > 0 && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                    <div className="py-1 max-h-60 overflow-auto">
                      {filteredSearchItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => {
                            setSearchQuery("");
                            setShowSearchResults(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Section */}
              <div className="flex items-center space-x-2">
                {isLoggedIn ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {username ? (
                        <span className="font-medium">{username}</span>
                      ) : (
                        <FaUser className="w-4 h-4" />
                      )}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          showDropdown ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link href="/register">
                      <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl">
                        Sign Up
                      </button>
                    </Link>
                    <Link href="/login">
                      <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
                        Log In
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Menu */}
        <div className="w-full bg-white border-t border-gray-200 px-4 py-2 shadow-inner overflow-x-auto whitespace-nowrap hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="inline-flex space-x-6 sm:space-x-8 md:space-x-12">
            {menuItems.map((item, index) => {
              const isActive =
                pathname.replace(/\/$/, "") === item.link.replace(/\/$/, "");
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`text-xs sm:text-sm font-medium px-1 py-1 relative transition-colors duration-200 flex-shrink-0 ${
                    isActive
                      ? "text-blue-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Hamburger Menu Panel */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="text-xl font-semibold flex items-center space-x-2">
                <PiFlowerLotusDuotone className="text-blue-600 w-6 h-6" />
                <span className="text-gray-800">SkillBridge</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className="h-full overflow-y-auto pb-20">
              <div className="px-6 py-4 space-y-6">
                {/* Mobile Search */}
                <div className="relative">
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search topics..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 text-sm"
                    />
                  </div>
                  {searchQuery && filteredSearchItems.length > 0 && (
                    <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {filteredSearchItems.slice(0, 8).map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                          onClick={() => {
                            setSearchQuery("");
                            setMobileMenuOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* User Info */}
                {isLoggedIn && (
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FaUser className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Welcome back!</p>
                        <p className="text-sm text-gray-600">{username || "Guest"}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Items */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">Navigation</h3>
                  {navbarItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        pathname === item.link
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      <span>{item.name}</span>
                      {pathname === item.link && (
                        <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Learning Items */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">Learning</h3>
                  {learningItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        pathname === item.link
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      <span>{item.name}</span>
                      {pathname === item.link && (
                        <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">Technologies</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          pathname.replace(/\/$/, "") === item.link.replace(/\/$/, "")
                            ? "bg-blue-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 border border-gray-200"
                        }`}
                      >
                        <span className="text-center">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Auth Section */}
                <div className="pt-6 border-t border-gray-200">
                  {isLoggedIn ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        href="/register"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg text-center transition-all shadow-md hover:shadow-lg"
                      >
                        Sign Up
                      </Link>
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 text-sm font-medium text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-center transition-all"
                      >
                        Log In
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
