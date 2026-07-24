import Sidebar from "@/components/fullnodecontent/nodesidebar";
import HomeNode from "@/components/fullnodecontent/HomeNode";
import React from "react";


function Page() {
  return (
    <>
      

      <div className="mt-25">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}
        <HomeNode />
      </div>
    </>
  );
}

export default Page;
