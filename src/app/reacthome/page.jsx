// pages/react.jsx

import Sidebar from "@/components/Reactpage/React_Sidebar";
import ReactHome from "@/components/Reactpage/ReactHome";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (

    <div className="min-h-screen flex flex-col">
       <ReactHome />
  
  <Sidebar />
</div>


  );
}
