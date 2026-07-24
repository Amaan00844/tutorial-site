
import MySQLSelect from "@/components/Mysql/MySQLSelect";
import MySQLSidebar from "@/components/Mysql/MySQLSidebar";



export default function ExpressJwtPage() {
  return (
    <div className="flex">
      < MySQLSidebar />
      <main className="flex-1 bg-white min-h-screen">
        <MySQLSelect/>
      </main>
    </div>
  );
}
