// pages/react.jsx

//import Reactcomponents from "@/components/Reactpage/Reactcomponents";
//import Sidebar from "@/components/Reactpage/React_Sidebar";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";
//import Express from "@/components/Expresspage/Expresspage";
//import Expresshome from "@/components/Expresspage/Expresshome";
import ExpressIntroduction from "@/components/Expresspage/Expressintroduction";
//import ReactHome from "@/components/Reactpage/ReactHome";

// import Sidebar from "@/components/";
// import ReactHome from "@/components/ReactHome";

export default function ReactPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1  bg-white min-h-screen">
      <ExpressIntroduction/>
      </main>
    </div>
  );
}
