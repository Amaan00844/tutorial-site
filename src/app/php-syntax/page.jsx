import PhpSyntax from "@/components/Phppage/Php-syntax";
//import PhpHome from "@/components/Phppage/Phphome";
import PhpSidebar from "@/components/Phppage/Phpsidebar";


export default function ReactPage() {
  return (
    <div className="flex">
      <PhpSidebar/>
      <main className="flex-1  bg-white min-h-screen">
      <PhpSyntax/>
      </main>
    </div>
  );
}
