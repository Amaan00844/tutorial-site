// pages/react.jsx

import Sidebar from "@/components/Reactpage/React_Sidebar";
import Reactdynamicroutes from "@/components/Reactpage/Reactdynamicroutes";
import Reactformsandvalidation from "@/components/Reactpage/Reactformsandvalidation";
import ReactHome from "@/components/Reactpage/ReactHome";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white min-h-screen">
        <Reactformsandvalidation/>
      </main>
    </div>
  );
}
