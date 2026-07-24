
import ExpressError from "@/components/Expresspage/ExpressError";
import ExpressSidebar from "@/components/Expresspage/ExpressSidebar";


export default function ReactPage() {
  return (
    <div className="flex">
      <ExpressSidebar />
      <main className="flex-1  bg-white min-h-screen">
      <ExpressError/>
      </main>
    </div>
  );
}
