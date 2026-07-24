// pages/react.jsx

import Reactcomponents from "@/components/Reactpage/Reactcomponents";
import Sidebar from "@/components/Reactpage/React_Sidebar";
import React_custom_hooks from "@/components/Reactpage/React_custom_hooks";
//import ReactHome from "@/components/Reactpage/ReactHome";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white min-h-screen">
        <React_custom_hooks />
      </main>
    </div>
  );
}
