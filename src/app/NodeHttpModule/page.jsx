import Sidebar from "@/components/fullnodecontent/nodesidebar";
import NodeHttpModule from "@/components/fullnodecontent/HttpModule";
import React from "react";


function Page() {
  return (
    <>
      
      <div>
        {" "}
        {/* Sidebar Section */}
        <Sidebar />
        {/* Content Section */}
        <NodeHttpModule />
      </div>
    </>
  );
}

export default Page;
