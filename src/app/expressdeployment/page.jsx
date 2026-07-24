
import ExpressDeployment from "@/components/Expresspage/ExpressDeployment";

import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";


export default function ReactPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1  bg-white min-h-screen">
      <ExpressDeployment/>
      </main>
    </div>
  );
}
