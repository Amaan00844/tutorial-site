// pages/expressenv/page.jsx

import ExpressenvandConfiguration from "@/components/Expresspage/Express.envandConfiguration";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";
//import ExpressenvandConfiguration from "@/components/Expresspage/ExpressenvandConfiguration";

export default function ExpressEnvPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <ExpressenvandConfiguration />
      </main>
    </div>
  );
}
