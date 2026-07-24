
//import ExpressDeployment from "@/components/Expresspage/ExpressDeployment";
import JSSidebar from "@/components/Nextjs/Sidebar";
import NextServerSideRenderingPage from "@/components/Nextjs/Ssr";


export default function Page() {
  return (
    <div className="flex">
      <JSSidebar/>
      <main className="flex-1 ml-75  bg-white min-h-screen">
      <NextServerSideRenderingPage/>
      </main>
    </div>
  );
}
