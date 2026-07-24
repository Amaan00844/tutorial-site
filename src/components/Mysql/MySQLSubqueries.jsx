"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLSubqueries() {
  useReadingTracker("mysqlsubqueries");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Subqueries in MySQL
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Subqueries are queries nested within another query, allowing you to
        perform complex operations—like finding customers who placed large
        orders. In this section, you’ll learn how to use subqueries in{" "}
        <code className="bg-gray-100 px-1 rounded">SELECT</code>,{" "}
        <code className="bg-gray-100 px-1 rounded">WHERE</code>, and{" "}
        <code className="bg-gray-100 px-1 rounded">FROM</code> clauses, and
        understand correlated vs. non-correlated subqueries. By the end, you’ll
        be able to write advanced queries with subqueries.
      </p>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using Subqueries
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            A subquery is a query inside parentheses that returns a result used
            by the outer query.
          </p>

          <p>
            <strong>Types of Subqueries:</strong>
            <br />• <span className="font-medium">Non-correlated</span>: Runs
            independently and returns a result used by the outer query.
            <br />• <span className="font-medium">Correlated</span>: Depends on
            the outer query and runs for each row in the outer query.
          </p>

          <p>
            <strong>Example: Non-correlated Subquery</strong>
            <br />
            Suppose you have <code>customers</code> (<code>id</code>,{" "}
            <code>name</code>) and <code>orders</code> (<code>order_id</code>,{" "}
            <code>customer_id</code>, <code>total</code>):
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT name
FROM customers
WHERE id IN (
  SELECT customer_id
  FROM orders
  WHERE total > 1000
);`}
            </code>
          </pre>

          <p>This finds customers who placed orders over 1000.</p>

          <p>
            <strong>Example: Correlated Subquery</strong>
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT name
FROM customers c
WHERE EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.customer_id = c.id AND o.total > 1000
);`}
            </code>
          </pre>

          <p>
            This checks for each customer whether they have a high-value order.
          </p>

          <p>
            <strong>Best Practices</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              Use joins instead of subqueries when possible for better
              performance.
            </li>
            <li>Keep subqueries simple and easy to understand.</li>
            <li>Test subqueries independently to ensure correctness.</li>
          </ul>

          <p>
            <strong>Practice Exercise</strong>
            <br />
            Create <code>employees</code> (<code>id</code>, <code>name</code>,{" "}
            <code>salary</code>) and <code>departments</code> (
            <code>dept_id</code>, <code>manager_id</code>) tables. Then:
          </p>
          <ol className="list-decimal ml-6">
            <li>
              Write a non-correlated subquery to find employees with
              above-average salaries.
            </li>
            <li>
              Write a correlated subquery to find employees who are department
              managers.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
