"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLOrderBy() {
  useReadingTracker("mysqlorderby");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        ORDER BY in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The `ORDER BY` clause is an essential SQL feature that allows you to
        sort the results of your query. Sorting helps to make the results more
        readable, especially when you're dealing with large datasets. Whether
        you're ordering by date, name, or price, the `ORDER BY` clause provides
        an easy way to present data in a meaningful way. In this section, we'll
        dive into the basics of how the `ORDER BY` clause works and how to apply
        it in your queries.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          Using the ORDER BY Clause
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The `ORDER BY` clause is used in SQL to sort the result set returned
            by a query. By default, data in a database is not sorted, and you
            may want to organize it based on certain columns (like alphabetical
            order for names or numerical order for prices). The `ORDER BY`
            clause can be used to sort the data in ascending or descending
            order.
          </p>

          <p>**Basic Syntax**</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT column1, column2 FROM table_name ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];`}
            </code>
          </pre>

          <p>
            The `ORDER BY` clause is placed at the end of a `SELECT` query,
            right before the query terminates. You can specify multiple columns
            to order by, and for each column, you can choose whether to sort it
            in ascending (ASC) or descending (DESC) order.
          </p>

          <p>
            - `ASC`: Ascending order, which is the default. It sorts data from
            smallest to largest, like A to Z, or 1 to 10. - `DESC`: Descending
            order, which sorts data from largest to smallest, like Z to A, or 10
            to 1.
          </p>

          <p>
            **Example Queries** Let’s assume we have an “employees” table with
            the following columns: - `id`: The unique identifier of each
            employee. - `name`: The name of the employee. - `salary`: The salary
            of the employee. - `hire_date`: The date the employee was hired.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Sort by one column
SELECT * FROM employees ORDER BY salary DESC;

-- Sort by multiple columns
SELECT * FROM employees ORDER BY department ASC, salary DESC;`}
            </code>
          </pre>

          <p>
            **Explanation of the Queries** - The first query sorts the employees
            by salary in descending order (`DESC`). The result will list the
            employees with the highest salary first. - The second query sorts
            employees by department in ascending order (`ASC`), followed by
            sorting within each department by salary in descending order
            (`DESC`).
          </p>

          <p>
            In both queries, `ORDER BY` is used to specify the sorting. You can
            use one column or multiple columns in the `ORDER BY` clause.
          </p>

          <p>
            **Understanding Sorting Order** - If you do not specify `ASC` or
            `DESC`, MySQL assumes the default `ASC` order. - Sorting is done in
            the order you list the columns. For example, if you order by two
            columns, MySQL will first sort the data by the first column, then by
            the second column if there are ties in the first column.
          </p>

          <p>
            **Common Use Cases for ORDER BY** - Sorting data alphabetically
            (e.g., sorting employee names from A to Z). - Sorting data
            numerically (e.g., sorting products by price from lowest to
            highest). - Sorting dates (e.g., sorting events by the most recent
            first).
          </p>

          <p>
            **Best Practices** - Sort only by columns that are relevant to the
            data analysis you're performing. Avoid sorting by every column in a
            large table, as it can affect performance. - Explicitly use `ASC` or
            `DESC` even though `ASC` is the default for clarity. This can make
            your SQL queries more readable and maintainable. - Combine `ORDER
            BY` with `WHERE` to sort data based on filtered results. This is
            particularly useful when you're interested in sorted data from a
            subset of records.
          </p>

          <p>
            **Practice Exercise** Here’s a simple exercise to practice using the
            `ORDER BY` clause: 1. Create a `products` table with the following
            columns: `id`, `name`, `price`, and `category`. 2. Insert at least
            five products into the table with various prices and categories. 3.
            Write SQL queries to: - Sort the products by price in ascending
            order. - Sort the products by category in ascending order, and then
            by price in descending order.
          </p>

          <p>
            **Advanced Tips** - Use `ORDER BY` with `LIMIT` to return a specific
            number of sorted rows. For example:
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-cyan-600">
                {`SELECT * FROM employees ORDER BY salary DESC LIMIT 5;`}
              </code>
            </pre>
            This query retrieves the top 5 employees with the highest salary.
          </p>

          <p>
            **Conclusion** The `ORDER BY` clause is a simple but powerful tool
            to sort your data. By understanding its syntax and the various
            sorting options, you can present your data in a way that’s
            meaningful and easy to interpret. As with any SQL feature, it’s
            important to use it efficiently to avoid unnecessary computational
            overhead, especially when working with large datasets.
          </p>
        </div>
      </div>
    </div>
  );
}
