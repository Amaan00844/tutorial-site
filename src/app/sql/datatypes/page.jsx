import React from "react";
import Sidebar from "@/components/Sql/Sidebar";

import VariableDatatypeContent from "@/components/Sql/Datatype";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <VariableDatatypeContent />
      </div>
    </div>
  );
}
