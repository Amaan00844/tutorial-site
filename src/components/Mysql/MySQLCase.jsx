"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLCase() {
  useReadingTracker("mysqlcase");
  return (
    <div className="p-6 ml-70">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        CASE Statements in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The `CASE` statement in MySQL allows you to add conditional logic to
        your queries, transforming data based on specific conditions. For
        example, you can categorize products as “cheap” or “expensive” based on
        their price. In this section, you’ll learn how to use the `CASE`
        statement in `SELECT` queries to create dynamic and meaningful results.
        By the end, you’ll be able to use `CASE` to enhance your queries and
        make data more insightful.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          Using the CASE Statement
        </h2>

        <div className="text-gray-800 space-y-6 text-sm leading-relaxed">
          <p>
            The `CASE` statement evaluates conditions and returns a value based
            on the first condition that is true. It’s like an “if-then-else”
            statement in programming, but for SQL queries. You can use `CASE` to
            create new columns, transform data, or make decisions within a
            query.
          </p>

          <p>
            <strong>Basic Syntax</strong>
            <br />
            There are two forms of the `CASE` statement: simple and searched.
          </p>

          <p>
            <strong>Simple CASE</strong>
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`CASE column_name
  WHEN value1 THEN result1
  WHEN value2 THEN result2
  ...
  ELSE default_result
END`}
            </code>
          </pre>

          <p>
            <strong>Searched CASE</strong>
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ...
  ELSE default_result
END`}
            </code>
          </pre>

          <p>
            - `WHEN`: Specifies a condition or value to check. - `THEN`: Defines
            the result if the condition is true. - `ELSE`: Provides a default
            result if no conditions are met (optional). - `END`: Closes the
            `CASE` statement.
          </p>

          <p>
            <strong>Example: Simple CASE</strong>
            <br />
            Assume we have a “students” table with columns `id`, `name`, and
            `grade`:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`SELECT name, grade,
  CASE grade
    WHEN 'A' THEN 'Excellent'
    WHEN 'B' THEN 'Good'
    WHEN 'C' THEN 'Average'
    ELSE 'Needs Improvement'
  END AS performance
FROM students;`}
            </code>
          </pre>

          <p>
            <strong>What’s Happening Here?</strong>
            <br />- The query creates a new column, `performance`, based on the
            `grade` value. - For example, a grade of “A” becomes “Excellent” in
            the output.
          </p>

          <p>
            <strong>Example: Searched CASE</strong>
            <br />
            Assume we have a “products” table with `id`, `name`, and `price`:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`SELECT name, price,
  CASE
    WHEN price < 50 THEN 'Cheap'
    WHEN price BETWEEN 50 AND 200 THEN 'Moderate'
    ELSE 'Expensive'
  END AS price_category
FROM products;`}
            </code>
          </pre>

          <p>
            <strong>What’s Happening Here?</strong>
            <br />- The query categorizes products based on their price. - A
            product priced at 30 will be labeled “Cheap,” while one at 300 will
            be “Expensive.”
          </p>

          <p>
            <strong>Using CASE in Other Clauses</strong>
            <br />
            You can use `CASE` in `ORDER BY`, `GROUP BY`, or even `UPDATE`
            statements. For example:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`-- Sort products by price category
SELECT name, price
FROM products
ORDER BY CASE
  WHEN price < 50 THEN 1
  WHEN price BETWEEN 50 AND 200 THEN 2
  ELSE 3
END;`}
            </code>
          </pre>

          <p>
            This sorts products with “Cheap” first, then “Moderate,” then
            “Expensive.”
          </p>

          <p>
            <strong>Best Practices</strong>
            <br />- Keep `CASE` statements simple to maintain readability. - Use
            meaningful aliases (e.g., `price_category`) for clarity. - Test
            conditions to ensure all cases are covered, especially the `ELSE`
            clause. - Avoid nested `CASE` statements unless necessary, as they
            can become complex.
          </p>

          <p>
            <strong>Practice Exercise</strong>
            <br />
            Create a “employees” table with columns `id`, `name`, `salary`, and
            `department`. Insert five employees, then write queries to: 1. Use a
            simple `CASE` to categorize departments as “Tech” (for IT,
            Engineering) or “Non-Tech” (others). 2. Use a searched `CASE` to
            label salaries as “Low” (&lt;50,000), “Medium” (50,000-100,000), or
            “High” (&gt;100,000). 3. Sort employees by salary category (Low,
            Medium, High).
          </p>
        </div>

        <button className="mt-8 bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-700">
          Learn Next Concept
        </button>
      </div>
    </div>
  );
}
