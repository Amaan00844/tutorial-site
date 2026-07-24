"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLUpdate() {
  useReadingTracker("mysqlupdate");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        UPDATE – Modifying Data in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The `UPDATE` statement allows you to change existing records in a table.
        Whether it’s correcting a typo or changing a price, `UPDATE` lets you
        modify one or many rows. In this section, you’ll learn the correct
        syntax, how to use conditions wisely, and how to avoid accidental
        changes.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using the UPDATE Statement
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The `UPDATE` statement modifies data in one or more rows of a table.
            It's powerful — so always use it carefully.
          </p>

          <p>**Basic Syntax**</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`UPDATE table_name 
SET column1 = value1, column2 = value2, ...
WHERE condition;`}
            </code>
          </pre>

          <p>
            - `table_name`: the table you want to update
            <br />
            - `SET`: lists the columns and the new values
            <br />- `WHERE`: specifies which rows to update (this is **very
            important**)
          </p>

          <p>**Example: Updating a Single Row**</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Update one student's grade
UPDATE students
SET grade = 'A+'
WHERE name = 'Bob';`}
            </code>
          </pre>

          <p>
            Here, we change the grade of the student named Bob to A+. Only rows
            that match the condition will be updated.
          </p>

          <p>**Example: Updating Multiple Columns**</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Update both age and grade
UPDATE students
SET age = 22, grade = 'B+'
WHERE name = 'Alice';`}
            </code>
          </pre>

          <p>
            You can update more than one column in the same query using commas
            between column-value pairs.
          </p>

          <p>
            **IMPORTANT: Always Use WHERE!**
            <br />
            If you forget the `WHERE` clause, **all rows in the table will be
            updated.**
          </p>

          <pre className="bg-red-100 p-4 rounded-md overflow-x-auto">
            <code className="text-red-500">
              {`-- WARNING: This updates every row in the table!
UPDATE students
SET grade = 'C';`}
            </code>
          </pre>

          <p>
            This sets the grade to 'C' for every student. Avoid this mistake by
            always using a `WHERE` clause.
          </p>

          <p>
            **Using Conditions** You can update rows using other conditions like
            IDs or ages:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Update using ID
UPDATE students
SET grade = 'A'
WHERE id = 2;

-- Update based on a range
UPDATE students
SET grade = 'B'
WHERE age > 20;`}
            </code>
          </pre>

          <p>You can also combine conditions using `AND` or `OR`.</p>

          <p>
            **Best Practices** - Always test your query with a `SELECT` first to
            check which rows will be affected. - Backup your data if you're
            doing a big update. - Avoid updating the `id` or primary key unless
            absolutely necessary. - Use `LIMIT` with `ORDER BY` if you want to
            update only a specific number of rows.
          </p>

          <p>
            **Practice Exercise** Suppose you have a “books” table with columns
            `id`, `title`, `author`, and `price`. Try the following: - Update
            the price of a book with title = "The Alchemist" to 299. - Update
            the author and price of a book where id = 3. - Update all books with
            price less than 150 to price = 150.
          </p>
        </div>
      </div>
    </div>
  );
}
