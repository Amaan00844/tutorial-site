
//import ExpressDeployment from "@/components/Expresspage/ExpressDeployment";
import NextIntroduction from "@/components/Nextjs/Introduction";
import JSSidebar from "@/components/Nextjs/Sidebar";


export default function Page() {
  return (
    <div className="flex">
      <JSSidebar/>
      <main className="flex-1 ml-75 bg-white min-h-screen">
      <NextIntroduction/>
      </main>
    </div>
  );
}
