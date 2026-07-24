"use client";

const IntroSQL = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL Introduction</h1>
        <p className="text-lg">What is SQL?</p>
        <p>
          <strong>SQL (Structured Query Language)</strong> is a standard language used to{" "}
          <strong>communicate with relational databases</strong>. It allows you to{" "}
          <strong>store, retrieve, update, and delete</strong> data in databases. SQL is widely used in data-driven applications, from websites to mobile apps, to manage and manipulate data efficiently.
        </p>

        <h2 className="text-2xl font-semibold">Why Use SQL?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Data Management:</strong> Helps store, retrieve, and manipulate structured data efficiently.
          </li>
          <li>
            <strong>Standardized Language:</strong> Used across many database systems like MySQL, PostgreSQL, SQLite, and Oracle.
          </li>
          <li>
            <strong>Powerful Queries:</strong> Allows filtering, sorting, joining, and aggregating large datasets.
          </li>
          <li>
            <strong>Widely Used:</strong> Core skill for backend development, data analysis, business intelligence, and more.
          </li>
          <li>
            <strong>Integration:</strong> Works with most programming languages and frameworks.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Features of SQL</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Declarative Syntax:</strong> Focuses on what data you want, not how to get it.</li>
          <li><strong>Data Definition:</strong> Can create and modify database structures (tables, columns, etc.).</li>
          <li><strong>Data Manipulation:</strong> Supports inserting, updating, and deleting records.</li>
          <li><strong>Data Retrieval:</strong> Allows querying data with conditions, sorting, and grouping.</li>
          <li><strong>Joins:</strong> Combines data from multiple tables using relationships.</li>
          <li><strong>Transactions:</strong> Ensures reliable and consistent database operations.</li>
          <li><strong>Functions & Aggregates:</strong> Supports COUNT, SUM, AVG, MAX, MIN, etc.</li>
          <li><strong>Security:</strong> Supports permissions and roles for controlled access.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Where is SQL Used?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Web Applications:</strong> Storing user data, posts, comments, etc.</li>
          <li><strong>Mobile Apps:</strong> Managing local or cloud-stored data.</li>
          <li><strong>Data Analytics:</strong> Running queries for reports and insights.</li>
          <li><strong>Backend Servers:</strong> Powering APIs and microservices with relational databases.</li>
          <li><strong>Enterprise Systems:</strong> Used in ERP, CRM, and financial platforms.</li>
          <li><strong>Business Intelligence:</strong> Querying data warehouses and dashboards.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Create Table & Query</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`-- Create a table
CREATE TABLE Students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  grade INT
);

-- Insert a record
INSERT INTO Students (id, name, grade)
VALUES (1, 'John Doe', 90);

-- Retrieve data
SELECT * FROM Students;`}
          </code>
        </pre>
        <p className="italic text-blue-300">
          Try this using online tools like{" "}
          <a href="https://sqliteonline.com/" target="_blank" className="underline">
            SQLite Online
          </a>{" "}
          or a local SQL environment.
        </p>
      </div>
    </div>
  );
};

export default IntroSQL;
