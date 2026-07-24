"use client";

const CreateStatement = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL CREATE Statement</h1>
        <p className="text-lg">
          The <strong>CREATE</strong> statement in SQL is used to create a new database or table.
        </p>

        <h2 className="text-2xl font-semibold">Creating a Table</h2>
        <p>
          To create a new table in a database, use the <code>CREATE TABLE</code> command followed by the table name and column definitions.
        </p>

        <h2 className="text-2xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  ...
);`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">Example: Create a "students" Table</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  grade VARCHAR(2)
);`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">Explanation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>id INT PRIMARY KEY</code>: A unique identifier for each student.</li>
          <li><code>name VARCHAR(100)</code>: Stores the student's name (up to 100 characters).</li>
          <li><code>age INT</code>: Stores the student's age as a number.</li>
          <li><code>grade VARCHAR(2)</code>: Stores the student's grade (like A+, B, etc.).</li>
        </ul>

        <h2 className="text-2xl font-semibold">Other CREATE Statements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CREATE DATABASE</strong>: Creates a new database.</li>
          <li><strong>CREATE INDEX</strong>: Adds an index to a table to improve query performance.</li>
          <li><strong>CREATE VIEW</strong>: Creates a virtual table based on a SELECT query.</li>
        </ul>

        <p className="italic text-blue-300">
          Tip: Always check if a table already exists before creating it to avoid errors.
        </p>
      </div>
    </div>
  );
};

export default CreateStatement;
