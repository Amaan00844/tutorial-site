
import MySQLOrderBy from "@/components/Mysql/MySQLOrderBy";
import MySQLSidebar from "@/components/Mysql/MySQLSidebar";



export default function ExpressJwtPage() {
  return (
    <div className="flex">
      < MySQLSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <MySQLOrderBy />
      </main>
    </div>
  );
}
