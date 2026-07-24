import React from "react";
import Sidebar from "@/components/Javascript/Sidebar";

import EventsContent from "@/components/Javascript/Events";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <EventsContent />
      </div>
    </div>
  );
}
