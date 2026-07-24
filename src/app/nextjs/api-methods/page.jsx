
import ExpressDeployment from "@/components/Expresspage/ExpressDeployment";
import NextApiMethods from "@/components/Nextjs/api-methods";
import NextApiRoutesPage from "@/components/Nextjs/ApiRoutes";
import JSSidebar from "@/components/Nextjs/Sidebar";


export default function Page() {
  return (
    <div className="flex">
      <JSSidebar/>
      <main className="flex-1 ml-75  bg-white min-h-screen">
      <NextApiMethods/>
      </main>
    </div>
  );
}
