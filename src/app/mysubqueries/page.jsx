
import MySQLSidebar from "@/components/Mysql/MySQLSidebar";
import MySQLSubqueries from "@/components/Mysql/MySQLSubqueries";



export default function ExpressJwtPage() {
  return (
    <div className="flex">
      < MySQLSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <MySQLSubqueries/>
      </main>
    </div>
  );
}
