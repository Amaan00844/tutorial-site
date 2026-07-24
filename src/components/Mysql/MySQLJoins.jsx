"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLJoins() {
  useReadingTracker("mysqljoins");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">Joins in MySQL</h1>
      <p className="text-lg text-gray-800 mb-6">
        Joins are used to combine data from multiple tables based on related
        columns, enabling more complex queries and relationships. For example,
        you can use joins to link customers to their orders. In this section,
        you’ll learn about different types of joins (`INNER`, `LEFT`, `RIGHT`,
        `FULL`) and how to apply them in your queries. By the end of this
        section, you’ll be able to effectively use joins in your MySQL queries.
      </p>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Understanding Joins
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            Joins are used to link data from two or more tables using a common
            column, usually a primary key in one table and a foreign key in
            another.
          </p>

          <p>
            **Types of Joins** - `INNER JOIN`: Returns only rows that have
            matching values in both tables. - `LEFT JOIN`: Returns all rows from
            the left table and matching rows from the right table. If no match,
            the result will contain `NULL` values for columns from the right
            table. - `RIGHT JOIN`: Returns all rows from the right table and
            matching rows from the left table. If no match, the result will
            contain `NULL` values for columns from the left table. - `FULL
            JOIN`: Returns all rows from both tables, with `NULL` for unmatched
            rows (not supported in MySQL, but can be simulated using `UNION`).
          </p>

          <p>**Basic Syntax**</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT columns
FROM table1
[INNER|LEFT|RIGHT] JOIN table2
ON table1.column = table2.column;`}
            </code>
          </pre>

          <p>
            The `ON` keyword specifies the condition for the join, typically
            based on columns that link the two tables.
          </p>

          <p>
            **Example Queries** Let's assume we have two tables: - `customers`
            table with columns `id` and `name` - `orders` table with columns
            `order_id`, `customer_id`, and `total`
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- INNER JOIN: Returns customers who have orders
SELECT customers.name, orders.order_id
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;

-- LEFT JOIN: Returns all customers, even those without orders
SELECT customers.name, orders.order_id
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id;`}
            </code>
          </pre>

          <p>
            **What’s Happening Here?** - The `INNER JOIN` only returns rows
            where there is a matching `customer_id` in both the `customers` and
            `orders` tables. - The `LEFT JOIN` returns all rows from the
            `customers` table and only matching rows from the `orders` table.
            For customers who don’t have orders, the `order_id` will be `NULL`.
          </p>

          <p>
            **Best Practices** - Use meaningful column names or aliases (e.g.,
            `customers.id AS customer_id` or `orders.total AS order_total`). -
            Ensure indexes are created on the columns used in joins for better
            performance. - Test your joins with small datasets to verify that
            the results are as expected. - Use `JOIN` conditions that make sense
            for your schema to avoid incorrect or unexpected results.
          </p>

          <p>
            **Practice Exercise** Create two tables: 1. `products` (`id`,
            `name`) 2. `sales` (`sale_id`, `product_id`, `amount`) Insert data
            into the tables and then write queries to: 1. Use an `INNER JOIN` to
            show all products that have been sold (join `products` and `sales`).
            2. Use a `LEFT JOIN` to show all products, including those that have
            not been sold (use `sales` as the second table).
          </p>
        </div>
      </div>
    </div>
  );
}
