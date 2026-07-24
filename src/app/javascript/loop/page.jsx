import React from "react";
import Sidebar from "@/components/Javascript/Sidebar";

import LoopsContent from "@/components/Javascript/Loops";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <LoopsContent />
      </div>
    </div>
  );
}
