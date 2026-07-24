"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLWhere() {
  useReadingTracker("mysqlwhere");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        WHERE Clause in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The <code>WHERE</code> clause filters rows in a query, allowing you to
        retrieve or modify only the data that meets specific conditions. It’s a
        critical tool for precise data manipulation. In this section, you’ll
        learn how to use <code>WHERE</code> with various operators and combine
        conditions. By the end, you’ll be able to filter data like an expert.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using the WHERE Clause
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The <code>WHERE</code> clause is used in <code>SELECT</code>,{" "}
            <code>UPDATE</code>, <code>DELETE</code>, and other statements to
            specify which rows to process.
          </p>

          <p>
            <strong>Basic Syntax</strong>
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT column1, column2 FROM table_name WHERE condition;`}
            </code>
          </pre>

          <p>
            <strong>Common Operators</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              <code>=</code>, <code>!=</code> (or <code>&lt;&gt;</code>): Equal,
              not equal.
            </li>
            <li>
              <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>,{" "}
              <code>&lt;=</code>: Greater than, less than, etc.
            </li>
            <li>
              <code>LIKE</code>: Pattern matching (e.g.,{" "}
              <code>name LIKE 'A%'</code> for names starting with A).
            </li>
            <li>
              <code>IN</code>: Matches a list of values (e.g.,{" "}
              <code>city IN ('New York', 'London')</code>).
            </li>
            <li>
              <code>BETWEEN</code>: Matches a range (e.g.,{" "}
              <code>price BETWEEN 10 AND 50</code>).
            </li>
            <li>
              <code>AND</code>, <code>OR</code>, <code>NOT</code>: Combine
              conditions.
            </li>
          </ul>

          <p>
            <strong>Example Queries</strong>
            <br />
            Assume we have a “products” table with <code>id</code>,{" "}
            <code>name</code>, <code>price</code>, and <code>category</code>:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Basic filtering
SELECT * FROM products WHERE price > 100;

-- Pattern matching
SELECT name FROM products WHERE name LIKE 'Phone%';

-- Multiple conditions
SELECT * FROM products WHERE category = 'Electronics' AND price < 500;

-- List of values
SELECT * FROM products WHERE id IN (1, 3, 5);`}
            </code>
          </pre>

          <p>
            <strong>What’s Happening Here?</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>The first query retrieves products costing more than 100.</li>
            <li>The second query finds products starting with “Phone”.</li>
            <li>The third query finds electronics under 500.</li>
            <li>The fourth query retrieves products with specific IDs.</li>
          </ul>

          <p>
            <strong>Best Practices</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Use specific conditions to minimize the number of rows processed.
            </li>
            <li>
              Avoid overly complex <code>WHERE</code> clauses for readability.
            </li>
            <li>
              Use parentheses to clarify the order of operations in complex
              conditions (e.g., <code>WHERE (a AND b) OR c</code>).
            </li>
          </ul>

          <p>
            <strong>Practice Exercise</strong>
            <br />
            Create a “customers” table with <code>id</code>, <code>name</code>,{" "}
            <code>age</code>, and <code>city</code>. Insert five customers, then
            write queries to:
          </p>
          <ol className="list-decimal list-inside ml-4">
            <li>Find customers older than 30.</li>
            <li>Find customers in “London” or “Paris”.</li>
            <li>Find customers whose names start with “J”.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
