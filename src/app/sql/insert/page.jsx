import React from "react";
import Sidebar from "@/components/Sql/Sidebar";

import OperatorsContent from "@/components/Sql/Insert";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <OperatorsContent />
      </div>
    </div>
  );
}
