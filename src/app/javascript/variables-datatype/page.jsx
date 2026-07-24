import React from "react";

import Sidebar from "@/components/Javascript/Sidebar";
import VariableDatatypeContent from "@/components/Javascript/VariablesDatatype";

export default function JavascriptVariablesDatatypePage() {
  return (
    <>
      
      <div className="flex mt-24 px-4 gap-6">
        <Sidebar />
        <main className="flex-1">
          <VariableDatatypeContent />
        </main>
      </div>
    </>
  );
}
