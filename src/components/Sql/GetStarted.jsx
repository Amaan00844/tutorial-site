"use client";

export default function GetStartedSQL() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">Get Started with SQL</h1>
        <p className="text-lg">Set up your first SQL queries and understand how databases work.</p>

        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>SQL Environment:</strong> Use tools like <a href="https://sqliteonline.com/" className="text-blue-600 underline" target="_blank">SQLite Online</a>, 
            <a href="https://www.db-fiddle.com/" className="text-blue-600 underline" target="_blank"> DB Fiddle</a>, or 
            <a href="https://www.mysql.com/products/workbench/" className="text-blue-600 underline" target="_blank"> MySQL Workbench</a>.
          </li>
          <li>
            <strong>Basic Knowledge:</strong> Understand what a table, row, and column are in a database.
          </li>
          <li>
            <strong>No Installation Needed:</strong> You can start running SQL online without installing anything.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Writing Your First Query</h2>
        <p>Here's a simple SQL script to create a table and insert some data:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`-- Create a table
CREATE TABLE Users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

-- Insert data
INSERT INTO Users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com');

-- Query data
SELECT * FROM Users;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>CREATE TABLE</code> defines a new table structure.</li>
          <li><code>INSERT INTO</code> adds new records to the table.</li>
          <li><code>SELECT *</code> retrieves all data from the table.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Learn to filter data using <code>WHERE</code> clauses.</li>
          <li>Explore sorting and grouping data with <code>ORDER BY</code> and <code>GROUP BY</code>.</li>
          <li>Understand how to join multiple tables using <code>JOIN</code>.</li>
          <li>Practice updating and deleting records with <code>UPDATE</code> and <code>DELETE</code>.</li>
        </ul>
      </div>
    </div>
  );
}
