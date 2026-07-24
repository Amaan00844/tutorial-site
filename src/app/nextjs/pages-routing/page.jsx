
//import ExpressDeployment from "@/components/Expresspage/ExpressDeployment";
import NextPagesAndRoutingPage from "@/components/Nextjs/PagesRouting";
import JSSidebar from "@/components/Nextjs/Sidebar";


export default function Page() {
  return (
    <div className="flex">
      <JSSidebar/>
      <main className="flex-1 ml-75  bg-white min-h-screen">
      <NextPagesAndRoutingPage/>
      </main>
    </div>
  );
}
