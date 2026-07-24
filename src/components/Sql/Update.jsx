"use client";

const UpdatePage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL UPDATE Statement</h1>
        <p className="text-lg">
          The SQL <code>UPDATE</code> statement is used to modify existing records in a table. You can update one or more columns in a row, based on a specified condition.
        </p>

        <h2 className="text-2xl font-semibold">Basic Syntax</h2>
        <p>The basic syntax for the <code>UPDATE</code> statement is as follows:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}</code>
        </pre>
        <p>
          - <code>UPDATE</code> is followed by the name of the table you want to update. 
          - The <code>SET</code> clause specifies the columns to update and their new values. 
          - The <code>WHERE</code> clause is used to specify the condition that identifies which rows should be updated.
        </p>

        <h2 className="text-2xl font-semibold">Updating Single Column</h2>
        <p>To update a single column, you can set the column to a new value based on a condition.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE employees
SET salary = 50000
WHERE employee_id = 101;`}</code>
        </pre>
        <p>This statement updates the <code>salary</code> column of the employee with <code>employee_id</code> 101 to 50,000.</p>

        <h2 className="text-2xl font-semibold">Updating Multiple Columns</h2>
        <p>To update multiple columns, separate the assignments with commas in the <code>SET</code> clause.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE employees
SET first_name = 'John', last_name = 'Doe', salary = 55000
WHERE employee_id = 102;`}</code>
        </pre>
        <p>This statement updates the <code>first_name</code>, <code>last_name</code>, and <code>salary</code> of the employee with <code>employee_id</code> 102.</p>

        <h2 className="text-2xl font-semibold">Updating All Rows</h2>
        <p>If you omit the <code>WHERE</code> clause, all rows in the table will be updated.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE employees
SET salary = 60000;`}</code>
        </pre>
        <p>This statement updates the <code>salary</code> column for all employees in the <code>employees</code> table to 60,000. Be careful when omitting the <code>WHERE</code> clause, as it will affect all records in the table.</p>

        <h2 className="text-2xl font-semibold">Using Expressions in UPDATE</h2>
        <p>You can also use expressions in the <code>SET</code> clause. For example, to increase the salary by 10% for a specific employee:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE employees
SET salary = salary * 1.10
WHERE employee_id = 101;`}</code>
        </pre>
        <p>This statement increases the <code>salary</code> of the employee with <code>employee_id</code> 101 by 10%.</p>

        <h2 className="text-2xl font-semibold">Using Subqueries in UPDATE</h2>
        <p>You can also use subqueries to update a column based on data from another table. For example:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE employees
SET department_id = (SELECT department_id FROM departments WHERE department_name = 'HR')
WHERE employee_id = 103;`}</code>
        </pre>
        <p>This statement updates the <code>department_id</code> of the employee with <code>employee_id</code> 103 based on the <code>department_id</code> from the <code>departments</code> table where the <code>department_name</code> is 'HR'.</p>

        <h2 className="text-2xl font-semibold">Considerations and Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Always use a <code>WHERE</code> clause when updating data to avoid updating all rows in the table.
          </li>
          <li>
            Be cautious with subqueries in <code>UPDATE</code> statements as they can impact performance.
          </li>
          <li>
            It's a good practice to back up your data before performing update operations, especially on critical data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Update Employee Status</h2>
        <p>Here's an example where we update the <code>status</code> column for an employee:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`UPDATE employees
SET status = 'Active'
WHERE employee_id = 104;`}</code>
        </pre>
        <p>This statement sets the <code>status</code> of the employee with <code>employee_id</code> 104 to 'Active'.</p>

        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>The <code>UPDATE</code> statement is a powerful tool for modifying data in SQL. Always use it carefully, especially with the <code>WHERE</code> clause, to avoid unintended changes to your data.</p>
      </div>
    </div>
  );
};

export default UpdatePage;
