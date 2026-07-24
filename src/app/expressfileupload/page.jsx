// pages/expressfileupload/page.jsx

import Expressfileuploads from "@/components/Expresspage/Expressfileuploads";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";
//import Expressfileuploads from "@/components/Expresspage/Expressfileuploads";

export default function ExpressFileUploadPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <Expressfileuploads />
      </main>
    </div>
  );
}
