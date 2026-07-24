import MySQLHome from "@/components/Mysql/MySQLHome";
import MySQLSidebar from "@/components/Mysql/MySQLSidebar";


export default function ReactPage() {
  return (
    <div className="flex">
      <MySQLSidebar />
      <main className="flex-1  bg-white min-h-screen">
      <MySQLHome/>
      </main>
    </div>
  );
}
