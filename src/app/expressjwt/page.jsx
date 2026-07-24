// pages/expressjwt/page.jsx

import ExpressjwtIntegration from "@/components/Expresspage/ExpressjwtIntegration";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";
//import ExpressjwtIntegration from "@/components/Expresspage/ExpressjwtIntegration";

export default function ExpressJwtPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <ExpressjwtIntegration />
      </main>
    </div>
  );
}
