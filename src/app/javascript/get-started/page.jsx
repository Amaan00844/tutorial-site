import React from "react";

import Sidebar from "@/components/Javascript/Sidebar";
import GetStartedPage from "@/components/Javascript/GetStarted";

export default function JavascriptGetStartedPage() {
  return (
    <>
      
      <div className="flex mt-24 px-4 gap-6">
        <Sidebar />
        <main className="flex-1">
          <GetStartedPage />
        </main>
      </div>
    </>
  );
}
