import Sidebar from "@/components/Javascript/Sidebar";
import Home from "@/components/Javascript/Home";
import React from "react";


function Page() {
  return (
    <>
      
      <div className="mt-25">
        {" "}
        {/* Sidebar Section */}
        <Sidebar />
        {/* Content Section */}
        <Home />
      </div>
    </>
  );
}

export default Page;
