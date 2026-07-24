"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLCreate() {
  useReadingTracker("mysqlcreate");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Create Tables in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Tables are the core structures in any relational database like MySQL.
        They consist of rows and columns, where each row is a data record and
        each column has a specific data type. Creating tables correctly is
        essential for building efficient, scalable databases. In this guide,
        you'll learn how to create tables, define meaningful columns, apply
        constraints, and follow best practices that are used in real-world
        applications.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Creating Tables
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The <code>CREATE TABLE</code> command is used to define a new table
            and its structure, including columns, their data types, and
            constraints. This ensures your data is stored in an organized and
            secure way.
          </p>

          <h3 className="font-semibold text-lg mt-4">🧾 Basic Syntax</h3>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`CREATE TABLE table_name (
  column1 datatype [constraints],
  column2 datatype [constraints],
  ...
);`}
            </code>
          </pre>

          <h3 className="font-semibold text-lg mt-4">🔐 Common Constraints</h3>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>PRIMARY KEY</strong>: Uniquely identifies each record in a
              table.
            </li>
            <li>
              <strong>AUTO_INCREMENT</strong>: Automatically generates a unique
              number (commonly used with primary keys).
            </li>
            <li>
              <strong>NOT NULL</strong>: Column must have a value (cannot be
              left empty).
            </li>
            <li>
              <strong>UNIQUE</strong>: Ensures all values in a column are
              different.
            </li>
            <li>
              <strong>DEFAULT</strong>: Assigns a default value if none is
              specified during insertion.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mt-4">
            🧪 Real-World Example: Products Table
          </h3>
          <p>
            Let’s imagine we’re building an e-commerce site. We need to store
            product information like ID, name, price, and stock.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0
);`}
            </code>
          </pre>

          <p>
            <strong>Explanation:</strong>
            <br />- <code>id</code>: A unique ID that auto-increments (e.g., 1,
            2, 3...).
            <br />- <code>name</code>: Stores product names (e.g., "iPhone 15").
            Cannot be empty.
            <br />- <code>price</code>: Stores product prices like 999.99.
            <br />- <code>stock</code>: Number of items available. Defaults to 0
            if not provided.
          </p>

          <h3 className="font-semibold text-lg mt-4">
            🔍 Check Table Structure
          </h3>
          <p>
            Once your table is created, use this command to view its structure:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">DESCRIBE products;</code>
          </pre>

          <h3 className="font-semibold text-lg mt-4">💡 Real-World Use Case</h3>
          <p>
            Suppose you are building a library system. You can create a table
            like this:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`CREATE TABLE books (
  book_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  author VARCHAR(100),
  published_year INT,
  genre VARCHAR(50),
  available BOOLEAN DEFAULT true
);`}
            </code>
          </pre>
          <p>
            This would allow a librarian to store book details. The{" "}
            <code>available</code> column is useful to track if a book is
            currently issued or not.
          </p>

          <h3 className="font-semibold text-lg mt-4">✅ Best Practices</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Use meaningful and consistent column names.</li>
            <li>Always set a primary key for faster searching and indexing.</li>
            <li>Use appropriate data types for each column to save storage.</li>
            <li>
              Use constraints like <code>NOT NULL</code> and <code>UNIQUE</code>{" "}
              to prevent data errors.
            </li>
            <li>
              Use <code>DEFAULT</code> values to handle optional data
              efficiently.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mt-4">📝 Practice Exercise</h3>
          <p>
            Create a table named <strong>orders</strong> with the following
            columns:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <code>order_id</code>: INT, auto-increment, primary key
            </li>
            <li>
              <code>customer_name</code>: VARCHAR(100), not null
            </li>
            <li>
              <code>order_date</code>: DATE
            </li>
            <li>
              <code>total</code>: DECIMAL(8,2)
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`CREATE TABLE orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  order_date DATE,
  total DECIMAL(8,2)
);`}
            </code>
          </pre>

          <p>Then verify the table:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">DESCRIBE orders;</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
