import React from "react";
import Sidebar from "@/components/Javascript/Sidebar";

import ControlFlowContent from "@/components/Javascript/ControlFlow";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <ControlFlowContent />
      </div>
    </div>
  );
}
