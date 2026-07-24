'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react'; // icon for toggle button

const Sidebar = ({ menuItems, selected, setSelected, isVisible, setIsVisible }) => {
  

  useEffect(() => {
    if (menuItems.length > 0 && menuItems[0].onClick) {
      setSelected(menuItems[0].label);
      menuItems[0].onClick();
    }
  }, [menuItems]);

  return (
    <div
      className={`h-[calc(100vh-11rem)] sticky top-25 flex flex-col transition-all duration-300 ${isVisible ? 'w-60 bg-white px-2' : 'w-10 bg-white items-center'
        } text-black`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`p-1 m-1 rounded transition 
    ${!isVisible ? 'bg-black text-white' : 'hover:bg-gray-200 text-black'}`}
        title={isVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      >
        {isVisible ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>


      {/* Menu items (only when visible) */}
      {isVisible && (
        <ul className="flex flex-col overflow-y-auto pr-2 space-y-2">
          {menuItems.map(({ label, icon, href, onClick }, index) => {
            const isSelected = selected === label;

            return (
              <label
                key={`${label}-${index}`}
                htmlFor={label}
                className={`flex items-center gap-2 cursor-pointer p-2 rounded transition-all duration-200 ease-in-out 
                  ${isSelected
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <input
                  id={label}
                  type="radio"
                  name="sidebar-items"
                  value={label}
                  checked={isSelected}
                  onChange={async () => {
                    if (await onClick()) setSelected(label);
                  }}
                  className="hidden"
                />
                {icon}
                {label}
              </label>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
