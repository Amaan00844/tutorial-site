import PhpFileHandling from "@/components/Phppage/Php-file-handling";
//import PhpHome from "@/components/Phppage/Phphome";
import PhpSidebar from "@/components/Phppage/Phpsidebar";


export default function ReactPage() {
  return (
    <div className="flex">
      <PhpSidebar/>
      <main className="flex-1  bg-white min-h-screen">
      <PhpFileHandling/>
      </main>
    </div>
  );
}
