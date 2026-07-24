import Sidebar from "@/components/Sql/Sidebar";
import Intro from "@/components/Sql/Intro";
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
