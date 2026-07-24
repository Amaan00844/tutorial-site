import React from "react";
import Sidebar from "@/components/Sql/Sidebar";

import BasicSyntax from "@/components/Sql/Case";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <BasicSyntax />
      </div>
    </div>
  );
}
