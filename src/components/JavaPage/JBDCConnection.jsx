import React from 'react'

const JBDCConnection = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800">JDBC Connection in Java</h1>

          <p className="mt-4 text-lg text-gray-700">
            JDBC (Java Database Connectivity) is a Java API that allows Java programs to connect to databases, send SQL queries, and retrieve or update data.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            It acts like a bridge between your Java code and the database you want to work with, like MySQL, Oracle, or SQL Server.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔧 What You Need to Use JDBC</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li>Java installed and set up</li>
            <li>A database like MySQL or Oracle running</li>
            <li>JDBC driver for the database (a small file provided by the database company)</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🧱 Key Components of JDBC</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li><strong>DriverManager</strong> – Loads the database driver and manages connections</li>
            <li><strong>Connection</strong> – Opens a connection to the database</li>
            <li><strong>Statement</strong> – Sends simple SQL queries to the database</li>
            <li><strong>PreparedStatement</strong> – Sends SQL queries with parameters (safer and faster)</li>
            <li><strong>ResultSet</strong> – Stores results returned from the database</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔗 Steps to Connect to a Database</h2>
          <ol className="list-decimal pl-6 text-lg text-gray-700 mt-2">
            <li><strong>Load the JDBC driver</strong>: This tells Java which type of database you're using.</li>
            <li><strong>Open a connection</strong>: Use a URL, username, and password to connect to the database.</li>
            <li><strong>Create a statement</strong>: This lets you write SQL commands like SELECT, INSERT, etc.</li>
            <li><strong>Execute the statement</strong>: Send the SQL command to the database.</li>
            <li><strong>Process the results</strong>: Get the data back using `ResultSet` and read it.</li>
            <li><strong>Close the connection</strong>: Always close the connection to free up resources.</li>
          </ol>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">💡 Example: Connect to MySQL Database</h2>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`import java.sql.*;

public class DBConnection {
  public static void main(String[] args) {
    try {
      // 1. Load the driver
      Class.forName("com.mysql.cj.jdbc.Driver");

      // 2. Connect to the database
      Connection con = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/mydatabase", "root", "password");

      // 3. Create a statement
      Statement stmt = con.createStatement();

      // 4. Execute a query
      ResultSet rs = stmt.executeQuery("SELECT * FROM users");

      // 5. Process results
      while (rs.next()) {
        System.out.println(rs.getInt(1) + " " + rs.getString(2));
      }

      // 6. Close the connection
      con.close();
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">📦 What Is a JDBC URL?</h2>
          <p className="mt-2 text-lg text-gray-700">
            The URL tells Java where your database is. For example:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-[#37474f] mt-2">
{`jdbc:mysql://localhost:3306/mydatabase`}
          </pre>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li><strong>jdbc:</strong> Tells Java to use JDBC</li>
            <li><strong>mysql:</strong> Type of database</li>
            <li><strong>localhost:3306:</strong> Location and port</li>
            <li><strong>mydatabase:</strong> Name of your database</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🛠️ Using PreparedStatement (Recommended)</h2>
          <p className="mt-2 text-lg text-gray-700">
            <code>PreparedStatement</code> is better than Statement. It prevents SQL injection (a type of hacking) and makes your code cleaner.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`PreparedStatement ps = con.prepareStatement("INSERT INTO users (name, age) VALUES (?, ?)");
ps.setString(1, "Alice");
ps.setInt(2, 25);
ps.executeUpdate();`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🚀 Common JDBC Drivers</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li><strong>MySQL:</strong> <code>com.mysql.cj.jdbc.Driver</code></li>
            <li><strong>Oracle:</strong> <code>oracle.jdbc.driver.OracleDriver</code></li>
            <li><strong>SQL Server:</strong> <code>com.microsoft.sqlserver.jdbc.SQLServerDriver</code></li>
            <li><strong>PostgreSQL:</strong> <code>org.postgresql.Driver</code></li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🧼 Always Close Resources</h2>
          <p className="mt-2 text-lg text-gray-700">
            After you're done, always close the <code>ResultSet</code>, <code>Statement</code>, and <code>Connection</code> to avoid memory leaks.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">📌 Conclusion</h2>
          <p className="mt-2 text-lg text-gray-700">
            JDBC helps Java talk to databases easily. It's powerful and used in many real-world applications. Always use <code>PreparedStatement</code> for better performance and security.
          </p>
        </div>
      </div>
    </>
  )
}

export default JBDCConnection
