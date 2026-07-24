// pages/react.jsx

//import Reactcomponents from "@/components/Reactcomponents";
import Sidebar from "@/components/Reactpage/React_Sidebar";
import Reactprops from "@/components/Reactpage/Reactprops";
import Reactroutingbasics from "@/components/Reactpage/Reactroutingbasics";
//import Reactprops from "@/components/Reactpage/Reactprops";
//import ReactHome from "@/components/Reactpage/ReactHome";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white min-h-screen">
       <Reactroutingbasics/>
      </main>
    </div>
  );
}
