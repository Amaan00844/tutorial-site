"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLGroupBy() {
  useReadingTracker("mysqlgroupby");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        GROUP BY & Aggregates in MySQL
      </h1>

      <p className="text-lg text-gray-800 mb-6">
        The <code className="bg-gray-100 px-1 rounded">GROUP BY</code> clause
        groups rows that have the same values in specified columns. It's
        typically used with aggregate functions like{" "}
        <code className="bg-gray-100 px-1 rounded">COUNT</code>,{" "}
        <code className="bg-gray-100 px-1 rounded">SUM</code>, or{" "}
        <code className="bg-gray-100 px-1 rounded">AVG</code>. Use it to
        summarize data—for example, total sales per product. This section covers
        how to use <strong>GROUP BY</strong>, aggregate functions, and filter
        groups using <code className="bg-gray-100 px-1 rounded">HAVING</code>.
      </p>

      <div className="bg-white p-6 max-w-8xl mx-auto ">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using GROUP BY and Aggregates
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The <code className="bg-gray-100 px-1 rounded">GROUP BY</code>{" "}
            clause is used to arrange identical data into groups. It's often
            used with aggregate functions that perform calculations on each
            group.
          </p>

          <div>
            <h3 className="font-semibold">Common Aggregate Functions:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>COUNT()</code>: Counts the number of rows in a group.
              </li>
              <li>
                <code>SUM()</code>: Adds up values in a group.
              </li>
              <li>
                <code>AVG()</code>: Calculates the average of values.
              </li>
              <li>
                <code>MIN()</code> / <code>MAX()</code>: Finds the minimum or
                maximum value.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Basic Syntax:</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-cyan-600">
                {`SELECT column, AGGREGATE_FUNCTION(column)
FROM table_name
GROUP BY column;`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold">Example Queries:</h3>
            <p>
              Assume we have an <code>orders</code> table with{" "}
              <code>order_id</code>, <code>customer_id</code>,{" "}
              <code>total</code>, and <code>order_date</code>.
            </p>

            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-cyan-600">
                {`-- Count orders per customer
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;

-- Total sales per month
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, SUM(total) AS total_sales
FROM orders
GROUP BY month;`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="font-semibold">What’s Happening Here?</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                The first query counts how many orders each customer has placed.
              </li>
              <li>
                The second query calculates the total sales for each month.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Filtering Groups with HAVING:</h3>
            <p>
              The <code className="bg-gray-100 px-1 rounded">HAVING</code>{" "}
              clause filters groups based on conditions. It's like{" "}
              <code className="bg-gray-100 px-1 rounded">WHERE</code>, but for
              grouped data.
            </p>

            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-cyan-600">
                {`SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING order_count > 5;`}
              </code>
            </pre>

            <p>This will return only customers who have more than 5 orders.</p>
          </div>

          <div>
            <h3 className="font-semibold">Best Practices:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Only include grouped columns or aggregates in the{" "}
                <code>SELECT</code> clause.
              </li>
              <li>
                Use <code>HAVING</code> to filter aggregated results, not{" "}
                <code>WHERE</code>.
              </li>
              <li>Use indexes on grouped columns to improve performance.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Practice Exercise:</h3>
            <p>
              Create a <code>sales</code> table with <code>sale_id</code>,{" "}
              <code>product_id</code>, <code>amount</code>, and{" "}
              <code>sale_date</code>. Insert data and write queries to:
            </p>
            <ol className="list-decimal list-inside ml-4">
              <li>Count the number of sales per product.</li>
              <li>
                Find total sales per month, but only for months where sales are
                more than 10.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
