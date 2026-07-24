"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLDelete() {
  useReadingTracker("mysqldelete");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        DELETE – Removing Data in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The <code>DELETE</code> statement removes rows from a table, such as
        deleting old records or cancelled orders. Like <code>UPDATE</code>, it
        requires caution to avoid deleting unintended data. In this section,
        you’ll learn how to use <code>DELETE</code>, apply <code>WHERE</code>{" "}
        conditions, and understand the difference between <code>DELETE</code>{" "}
        and <code>TRUNCATE</code>. By the end, you’ll be able to remove data
        safely.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using the DELETE Statement
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The <code>DELETE FROM</code> statement removes rows based on a
            condition specified in the <code>WHERE</code> clause.
          </p>

          <p>
            <strong>Basic Syntax</strong>
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`DELETE FROM table_name WHERE condition;`}
            </code>
          </pre>

          <p>
            <strong>Example: Deleting Data</strong>
          </p>
          <p>
            Assume we have a “tasks” table with columns <code>id</code>,{" "}
            <code>title</code>, and <code>status</code>:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Delete specific rows
DELETE FROM tasks WHERE status = 'completed';

-- Delete a single row
DELETE FROM tasks WHERE id = 5;`}
            </code>
          </pre>

          <p>
            <strong>What’s Happening Here?</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>The first query removes all completed tasks.</li>
            <li>
              The second query removes the task with <code>id = 5</code>.
            </li>
          </ul>

          <p>
            <strong>DELETE vs. TRUNCATE</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              <code>DELETE</code>: Removes specific rows based on a condition.
              Can be rolled back in transactions.
            </li>
            <li>
              <code>TRUNCATE</code>: Removes all rows and resets auto-increment
              counters. Faster but cannot be undone.
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">{`TRUNCATE TABLE tasks;`}</code>
          </pre>

          <p>
            <strong>Safe Deletes</strong>
          </p>
          <p>
            Without a <code>WHERE</code> clause, <code>DELETE</code> removes all
            rows:
          </p>

          <pre className="bg-red-100 p-4 rounded-md overflow-x-auto">
            <code className="text-red-500">
              {`-- DANGEROUS: Deletes all rows
DELETE FROM tasks;`}
            </code>
          </pre>

          <p>Use safe update mode to avoid accidental full deletes:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">{`SET SQL_SAFE_UPDATES = 1;`}</code>
          </pre>

          <p>
            <strong>Best Practices</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Always use a <code>WHERE</code> clause unless you intend to delete
              all rows.
            </li>
            <li>Back up your data before running delete queries.</li>
            <li>
              First test your <code>WHERE</code> condition using a{" "}
              <code>SELECT</code> query.
            </li>
          </ul>

          <p>
            <strong>Practice Exercise</strong>
          </p>
          <p>
            Create a “users” table with columns <code>id</code>,{" "}
            <code>name</code>, and <code>status</code>. Insert five users, then:
          </p>
          <ol className="list-decimal list-inside">
            <li>Delete all users with status “inactive”.</li>
            <li>Delete a user by ID.</li>
            <li>
              Use <code>SELECT</code> to verify the remaining data.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
