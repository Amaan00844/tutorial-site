"use client";

const WherePage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL WHERE Clause</h1>
        <p className="text-lg">
          The SQL <code>WHERE</code> clause is used to filter records that meet a specified condition. It is commonly used in SQL queries to retrieve specific data, update, or delete rows based on certain criteria.
        </p>

        <h2 className="text-2xl font-semibold">Basic Syntax</h2>
        <p>The basic syntax for the <code>WHERE</code> clause is as follows:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</code>
        </pre>
        <p>
          - <code>SELECT</code> is followed by the columns you want to retrieve.
          - <code>FROM</code> specifies the table you want to query.
          - <code>WHERE</code> defines the condition that records must meet to be included in the result.
        </p>

        <h2 className="text-2xl font-semibold">Using Conditions with WHERE</h2>
        <p>You can use a variety of operators in the <code>WHERE</code> clause to specify conditions. Some common operators include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>=</strong> (Equal to): Used to filter records that match a specific value.</li>
          <li><strong>!=</strong> (Not equal to): Used to filter records that do not match a specific value.</li>
          <li><strong>&gt;</strong> (Greater than): Used to filter records greater than a specific value.</li>
          <li><strong>&lt;</strong> (Less than): Used to filter records less than a specific value.</li>
          <li><strong>&gt;=</strong> (Greater than or equal to): Filters records that are greater than or equal to a specific value.</li>
          <li><strong>&lt;=</strong> (Less than or equal to): Filters records that are less than or equal to a specific value.</li>
          <li><strong>BETWEEN</strong>: Filters records within a certain range.</li>
          <li><strong>LIKE</strong>: Used for pattern matching with wildcards.</li>
          <li><strong>IN</strong>: Filters records that match any value in a list.</li>
          <li><strong>IS NULL</strong>: Filters records where a column contains a NULL value.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Examples of WHERE Clauses</h2>

        <h3 className="text-xl font-semibold">Example 1: Select Employees with Salary Greater than 50000</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000;`}</code>
        </pre>
        <p>This query retrieves the first name, last name, and salary of employees who have a salary greater than 50,000.</p>

        <h3 className="text-xl font-semibold">Example 2: Select Employees Not in the 'HR' Department</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees
WHERE department_name != 'HR';`}</code>
        </pre>
        <p>This query selects employees whose department is not 'HR'.</p>

        <h3 className="text-xl font-semibold">Example 3: Select Employees Between Specific Salary Range</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 40000 AND 60000;`}</code>
        </pre>
        <p>This query retrieves employees whose salary is between 40,000 and 60,000.</p>

        <h3 className="text-xl font-semibold">Example 4: Select Employees with 'A' in Their Name</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees
WHERE first_name LIKE '%A%';`}</code>
        </pre>
        <p>This query retrieves employees whose first name contains the letter 'A'. The percent sign (%) is a wildcard that matches any number of characters before or after 'A'.</p>

        <h3 className="text-xl font-semibold">Example 5: Select Employees with NULL Department</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name
FROM employees
WHERE department_name IS NULL;`}</code>
        </pre>
        <p>This query selects employees who do not have a department assigned (i.e., their <code>department_name</code> is NULL).</p>

        <h2 className="text-2xl font-semibold">Using AND & OR in WHERE Clause</h2>
        <p>The <code>WHERE</code> clause can also combine multiple conditions using <code>AND</code> and <code>OR</code>.</p>

        <h3 className="text-xl font-semibold">Example: Using AND</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name, salary
FROM employees
WHERE salary > 50000 AND department_name = 'Sales';`}</code>
        </pre>
        <p>This query retrieves employees who have a salary greater than 50,000 and work in the 'Sales' department.</p>

        <h3 className="text-xl font-semibold">Example: Using OR</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name, salary
FROM employees
WHERE department_name = 'HR' OR department_name = 'IT';`}</code>
        </pre>
        <p>This query retrieves employees who work in either the 'HR' or 'IT' departments.</p>

        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>The <code>WHERE</code> clause is an essential tool in SQL for filtering data based on specific conditions. By using comparison operators, logical operators, and functions like <code>BETWEEN</code>, <code>LIKE</code>, and <code>IN</code>, you can perform complex queries to retrieve only the data that meets your needs.</p>
      </div>
    </div>
  );
};

export default WherePage;
