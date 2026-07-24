// pages/expressmiddleware/page.jsx

import Expressmiddleware from "@/components/Expresspage/Expressmiddleware";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";
//import Expressmiddleware from "@/components/Expresspage/Expressmiddleware";

export default function ExpressMiddlewarePage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <Expressmiddleware />
      </main>
    </div>
  );
}
