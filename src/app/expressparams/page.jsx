// pages/expressparams/page.jsx

import Epressrouteparameters from "@/components/Expresspage/Epressrouteparameters";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";
//import Epressrouteparameters from "@/components/Expresspage/Epressrouteparameters";

export default function ExpressParamsPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <Epressrouteparameters />
      </main>
    </div>
  );
}
