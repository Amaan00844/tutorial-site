"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLSelect() {
  useReadingTracker("mysqlselect");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        SELECT – Retrieving Data in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The <code className="text-cyan-500">SELECT</code> statement is used to
        query and retrieve data from a MySQL database. Whether you want to pull
        all records or apply conditions to get specific results, the{" "}
        <code className="text-cyan-500">SELECT</code> command is your go-to
        tool. You’ll also learn how to rename output, remove duplicates, and
        combine data from multiple tables.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using the SELECT Statement
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The <code className="text-cyan-600">SELECT</code> statement
            retrieves data from one or more tables. You can specify individual
            columns or use <code className="text-cyan-500">*</code> to select
            all.
          </p>

          <h3 className="text-xl font-semibold mt-4">🔹 Basic Syntax</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT column1, column2, ... FROM table_name;`}
            </code>
          </pre>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <code className="text-cyan-600">SELECT *</code> selects all
              columns
            </li>
            <li>
              <code className="text-cyan-600">DISTINCT</code> removes duplicate
              rows
            </li>
            <li>
              <code className="text-cyan-600">AS</code> is used for column
              aliasing (renaming)
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            🔹 Example Table: customers
          </h3>
          <p>
            Assume we have a table named{" "}
            <code className="text-cyan-500">customers</code> with columns:{" "}
            <code>id</code>, <code>name</code>, <code>email</code>, and{" "}
            <code>city</code>.
          </p>

          <h3 className="text-xl font-semibold mt-6">🔹 Example Queries</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Select specific columns
SELECT name, email FROM customers;

-- Select all columns
SELECT * FROM customers;

-- Use aliasing
SELECT name AS customer_name, email AS contact_email FROM customers;

-- Remove duplicates
SELECT DISTINCT city FROM customers;`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">
            🔹 Filtering Data Using WHERE
          </h3>
          <p>
            You can narrow down results using conditions with{" "}
            <code className="text-cyan-500">WHERE</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT * FROM customers WHERE city = 'New York';`}
            </code>
          </pre>
          <p>This returns only customers whose city is "New York".</p>

          <h3 className="text-xl font-semibold mt-6">
            🔹 Ordering Results with ORDER BY
          </h3>
          <p>
            Use <code className="text-cyan-600">ORDER BY</code> to sort the
            results.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT name, city FROM customers ORDER BY name ASC;`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">🔹 Limiting Output</h3>
          <p>
            Use <code className="text-cyan-600">LIMIT</code> to restrict the
            number of returned rows.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT * FROM customers LIMIT 5;`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mt-6">
            🔹 Combining Conditions with AND/OR
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT * FROM customers WHERE city = 'New York' AND name LIKE 'A%';`}
            </code>
          </pre>
          <p>This retrieves customers in New York whose name starts with A.</p>

          <h3 className="text-xl font-semibold mt-6">📝 Practice Exercise</h3>
          <p>
            Create a table called{" "}
            <code className="text-cyan-600">products</code> with the following
            fields:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code>id</code>: INT, AUTO_INCREMENT, PRIMARY KEY
            </li>
            <li>
              <code>name</code>: VARCHAR(100)
            </li>
            <li>
              <code>price</code>: DECIMAL(10,2)
            </li>
            <li>
              <code>category</code>: VARCHAR(50)
            </li>
          </ul>

          <p>Insert 5 sample products and run the following queries:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Select only <code>name</code> and <code>price</code>.
            </li>
            <li>List all unique categories.</li>
            <li>
              Select all products using aliases (e.g., rename <code>name</code>{" "}
              as <code>product_name</code>).
            </li>
            <li>
              Select products where <code>price &gt; 100</code>.
            </li>
            <li>
              Order products by <code>price DESC</code>.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
