import Sidebar from "@/components/fullnodecontent/nodesidebar";
import IntroNode from "@/components/fullnodecontent/IntroNode";
import React from "react";


function Page() {
  return (
    <>
      
      <div className="mt-25">
        {" "}
        {/* Sidebar Section */}
        <Sidebar />
        {/* Content Section */}
        <IntroNode />
      </div>
    </>
  );
}

export default Page;
