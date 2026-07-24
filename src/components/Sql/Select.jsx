"use client";

const SelectPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL SELECT</h1>
        <p className="text-lg">
          The <strong>SELECT</strong> statement is used to select data from a database. The data returned is stored in a result table.
        </p>

        <h2 className="text-2xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2, ...
FROM table_name;`}</code>
        </pre>
        <p>Here, you specify the columns you want to retrieve from the table.</p>

        <h2 className="text-2xl font-semibold">Example: Select All Columns</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM customers;`}</code>
        </pre>
        <p>This query retrieves all columns from the "customers" table.</p>

        <h2 className="text-2xl font-semibold">Example: Select Specific Columns</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name, age FROM customers;`}</code>
        </pre>
        <p>This query retrieves only the <code>first_name</code>, <code>last_name</code>, and <code>age</code> columns from the "customers" table.</p>

        <h2 className="text-2xl font-semibold">Using WHERE with SELECT</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM customers
WHERE age > 30;`}</code>
        </pre>
        <p>This query retrieves all columns of customers who are older than 30 years.</p>

        <h2 className="text-2xl font-semibold">Using SELECT with Aliases</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name AS "First Name", last_name AS "Last Name"
FROM customers;`}</code>
        </pre>
        <p>The <code>AS</code> keyword allows you to rename columns in the result set (i.e., aliases).</p>

        <h2 className="text-2xl font-semibold">Selecting Distinct Values</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT DISTINCT age FROM customers;`}</code>
        </pre>
        <p>This query retrieves only the distinct ages from the "customers" table, removing duplicates.</p>

        <p className="italic text-blue-300">
          The <code>SELECT</code> statement is the most frequently used SQL command, helping you extract data from a table or multiple tables.
        </p>
      </div>
    </div>
  );
};

export default SelectPage;
