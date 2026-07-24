import Sidebar from "@/components/fullnodecontent/nodesidebar";
import ModulesNode from "@/components/fullnodecontent/ModulesNode";
import React from "react";


export default function page() {
  return (
    <div>
      <>
        
        <div>
          {" "}
          {/* Sidebar Section */}
          <Sidebar />
          {/* Content Section */}
          <ModulesNode />
        </div>
      </>
    </div>
  );
}
