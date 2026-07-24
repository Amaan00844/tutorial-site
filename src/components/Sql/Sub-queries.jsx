"use client";

const SubQueriesPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL Subqueries</h1>
        <p className="text-lg">
          A <strong>subquery</strong> is a query nested inside another query. It can be used in <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> statements to perform operations that rely on the results of another query.
        </p>

        <h2 className="text-2xl font-semibold">Subquery Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2
FROM table_name
WHERE column1 = (SELECT column1 FROM table_name WHERE condition);`}</code>
        </pre>
        <p>In this example, the subquery is enclosed in parentheses and used to return a value for the outer query's <code>WHERE</code> clause.</p>

        <h2 className="text-2xl font-semibold">Example 1: Subquery in WHERE Clause</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees
WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'Sales');`}</code>
        </pre>
        <p>This query retrieves the first and last names of employees who work in the 'Sales' department. The subquery fetches the department ID from the 'departments' table where the department name is 'Sales'.</p>

        <h2 className="text-2xl font-semibold">Example 2: Subquery in SELECT Clause</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name,
(SELECT department_name FROM departments WHERE departments.department_id = employees.department_id) AS department
FROM employees;`}</code>
        </pre>
        <p>This query retrieves the employee names along with their respective department names. The subquery is used in the <code>SELECT</code> clause to fetch the department name based on the employee's department ID.</p>

        <h2 className="text-2xl font-semibold">Example 3: Subquery with IN</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees
WHERE department_id IN (SELECT department_id FROM departments WHERE location = 'New York');`}</code>
        </pre>
        <p>This query retrieves employees who work in departments located in 'New York'. The subquery fetches the department IDs for departments located in 'New York' and returns those values to the outer query's <code>IN</code> clause.</p>

        <h2 className="text-2xl font-semibold">Example 4: Subquery with EXISTS</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees e
WHERE EXISTS (SELECT 1 FROM departments d WHERE e.department_id = d.department_id AND d.department_name = 'Sales');`}</code>
        </pre>
        <p>This query retrieves employees who belong to the 'Sales' department. The subquery uses the <code>EXISTS</code> clause to check if the condition is met (i.e., the employee's department is 'Sales').</p>

        <h2 className="text-2xl font-semibold">Correlated vs. Non-Correlated Subqueries</h2>
        <p>A subquery is said to be <strong>correlated</strong> if it refers to columns from the outer query. A non-correlated subquery does not reference any columns from the outer query.</p>

        <h3 className="text-xl font-semibold">Correlated Subquery Example</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees e
WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);`}</code>
        </pre>
        <p>This correlated subquery retrieves employees who have a salary greater than the average salary in their respective department.</p>

        <h3 className="text-xl font-semibold">Non-Correlated Subquery Example</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees
WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'Sales');`}</code>
        </pre>
        <p>This non-correlated subquery retrieves employees who work in the 'Sales' department. The subquery doesn't reference any columns from the outer query.</p>

        <p className="italic text-blue-300">
          Subqueries are a powerful tool that allow you to query data based on the results of another query. They help to structure more complex SQL operations efficiently.
        </p>
      </div>
    </div>
  );
};

export default SubQueriesPage;
