// pages/react.jsx

import Reactcomponents from "@/components/Reactpage/Reactcomponents";
import Sidebar from "@/components/Reactpage/React_Sidebar";
import Reactcontextapi from "@/components/Reactpage/Reactcontextapi";
//import ReactHome from "@/components/Reactpage/ReactHome";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white min-h-screen">
        <Reactcontextapi/>
      </main>
    </div>
  );
}
