import React from "react";
import Sidebar from "@/components/Javascript/Sidebar";

import DomMalContent from "@/components/Javascript/DomManupilation";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <DomMalContent />
      </div>
    </div>
  );
}
