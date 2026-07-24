import Sidebar from "@/components/Javascript/Sidebar";
import Intro from "@/components/Javascript/Intro";
import React from "react";


function Page() {
  return (
    <>
      
      <div className="mt-25">
        {" "}
        {/* Sidebar Section */}
        <Sidebar />
        {/* Content Section */}
        <Intro />
      </div>
    </>
  );
}

export default Page;
