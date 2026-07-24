"use client";

const InsertPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL INSERT Statement</h1>
        <p className="text-lg">
          The SQL <code>INSERT</code> statement is used to insert new records into a table in a database. You can insert one row or multiple rows at a time.
        </p>

        <h2 className="text-2xl font-semibold">Basic Syntax</h2>
        <p>The basic syntax for the <code>INSERT</code> statement is as follows:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`}</code>
        </pre>
        <p>
          - <code>INSERT INTO</code> specifies the table where you want to insert the data.
          - <code>(column1, column2, ...)</code> specifies the columns in which the data will be inserted.
          - <code>VALUES</code> specifies the values to be inserted into the corresponding columns.
        </p>

        <h2 className="text-2xl font-semibold">Inserting Data into a Table</h2>
        <p>You can insert data into a table by providing values for each column. Here's an example:</p>

        <h3 className="text-xl font-semibold">Example 1: Insert One Row</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`INSERT INTO employees (first_name, last_name, salary, department_name)
VALUES ('John', 'Doe', 55000, 'HR');`}</code>
        </pre>
        <p>This query inserts a new employee with the first name "John", last name "Doe", salary of 55,000, and department "HR" into the <code>employees</code> table.</p>

        <h3 className="text-xl font-semibold">Example 2: Insert Multiple Rows</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`INSERT INTO employees (first_name, last_name, salary, department_name)
VALUES 
  ('Alice', 'Smith', 62000, 'Marketing'),
  ('Bob', 'Johnson', 45000, 'Sales'),
  ('Charlie', 'Brown', 70000, 'IT');`}</code>
        </pre>
        <p>This query inserts three new rows into the <code>employees</code> table with different values for each row.</p>

        <h3 className="text-xl font-semibold">Example 3: Insert with Default Values</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`INSERT INTO employees (first_name, last_name)
VALUES ('Sarah', 'Lee');`}</code>
        </pre>
        <p>If a column has a default value defined in the table schema, you can omit it from the <code>INSERT</code> statement. The database will automatically use the default value for that column.</p>

        <h2 className="text-2xl font-semibold">Inserting Data into Specific Columns</h2>
        <p>If you want to insert data only into specific columns, you can do so by specifying only those columns in the <code>INSERT</code> statement:</p>

        <h3 className="text-xl font-semibold">Example: Insert into Specific Columns</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`INSERT INTO employees (first_name, last_name)
VALUES ('Tom', 'Hanks');`}</code>
        </pre>
        <p>This query only inserts data into the <code>first_name</code> and <code>last_name</code> columns. Other columns will be set to their default values or remain NULL if no default is defined.</p>

        <h2 className="text-2xl font-semibold">Important Notes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Data Types:</strong> Ensure that the data types of the values you insert match the data types of the columns in the table.</li>
          <li><strong>NULL Values:</strong> If a column allows NULL values, you can insert NULL into that column if no value is provided.</li>
          <li><strong>Auto-Increment Columns:</strong> If a column is set to auto-increment (e.g., a primary key), you do not need to include it in the <code>INSERT</code> statement. The database will automatically assign a unique value.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Using INSERT INTO SELECT</h2>
        <p>You can also use the <code>INSERT INTO SELECT</code> statement to insert data from one table into another. This is useful for copying data between tables:</p>

        <h3 className="text-xl font-semibold">Example: Insert Data from Another Table</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`INSERT INTO employees_backup (first_name, last_name, salary)
SELECT first_name, last_name, salary
FROM employees
WHERE department_name = 'HR';`}</code>
        </pre>
        <p>This query copies all employees from the <code>employees</code> table whose department is 'HR' into the <code>employees_backup</code> table.</p>

        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>The <code>INSERT</code> statement is a fundamental SQL command that allows you to add new data to your tables. Whether you're inserting a single row, multiple rows, or copying data between tables, understanding how to use the <code>INSERT</code> statement is essential for managing data in a database.</p>
      </div>
    </div>
  );
};

export default InsertPage;
