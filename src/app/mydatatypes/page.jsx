
import MySQLDatatypes from "@/components/Mysql/MySQLDatatypes";
import MySQLSidebar from "@/components/Mysql/MySQLSidebar";



export default function ExpressJwtPage() {
  return (
    <div className="flex">
      < MySQLSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <MySQLDatatypes />
      </main>
    </div>
  );
}
