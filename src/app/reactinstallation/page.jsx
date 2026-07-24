// pages/react.jsx

import Sidebar from "@/components/Reactpage/React_Sidebar";
//import ReactHome from "@/components/Reactpage/ReactHome";
import Reactinstallation from "@/components/Reactpage/Reactinstallation";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white min-h-screen">
        <Reactinstallation/>
      </main>
    </div>
  );
}
