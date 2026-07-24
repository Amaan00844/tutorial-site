"use client";

const JoinsPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL JOINS</h1>
        <p className="text-lg">
          SQL Joins are used to combine rows from two or more tables based on a related column between them.
        </p>

        <h2 className="text-2xl font-semibold">Types of Joins</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>INNER JOIN</strong>: Returns only the matching rows between two tables.</li>
          <li><strong>LEFT JOIN</strong> (or LEFT OUTER JOIN): Returns all rows from the left table, and matched rows from the right table.</li>
          <li><strong>RIGHT JOIN</strong> (or RIGHT OUTER JOIN): Returns all rows from the right table, and matched rows from the left table.</li>
          <li><strong>FULL JOIN</strong> (or FULL OUTER JOIN): Returns rows when there is a match in one of the tables.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Syntax: INNER JOIN</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT table1.column, table2.column
FROM table1
INNER JOIN table2
ON table1.common_column = table2.common_column;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">Example: INNER JOIN</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT employees.name, departments.department_name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.id;`}</code>
        </pre>
        <p>This returns only employees who are assigned to a department.</p>

        <h2 className="text-2xl font-semibold">Example: LEFT JOIN</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT employees.name, departments.department_name
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.id;`}</code>
        </pre>
        <p>This returns all employees, even if they don’t belong to any department.</p>

        <h2 className="text-2xl font-semibold">Example: RIGHT JOIN</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT employees.name, departments.department_name
FROM employees
RIGHT JOIN departments
ON employees.department_id = departments.id;`}</code>
        </pre>
        <p>This returns all departments, even if they have no employees.</p>

        <h2 className="text-2xl font-semibold">Example: FULL JOIN</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT employees.name, departments.department_name
FROM employees
FULL JOIN departments
ON employees.department_id = departments.id;`}</code>
        </pre>
        <p>This returns all employees and all departments, matching where possible.</p>

        <p className="italic text-blue-300">
          Use JOINs when you need to combine data across related tables to make sense of your database.
        </p>
      </div>
    </div>
  );
};

export default JoinsPage;
