import React from "react";
import Sidebar from "@/components/Sql/Sidebar";

import LoopsContent from "@/components/Sql/Update";
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
