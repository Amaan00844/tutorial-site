"use client";

const SyntaxPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL Syntax</h1>
        <p className="text-lg">
          SQL (Structured Query Language) is a standard programming language used to manage relational databases and perform operations on the data within them. Understanding SQL syntax is essential to write queries that interact with a database.
        </p>

        <h2 className="text-2xl font-semibold">Basic SQL Syntax</h2>
        <p>
          SQL statements are made up of keywords, operators, clauses, and expressions. Below is a basic structure of a SQL query:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1 DESC
LIMIT 10;`}</code>
        </pre>
        <p>This query structure retrieves data from a table with the specified columns, applies a condition, orders the results, and limits the number of rows returned.</p>

        <h2 className="text-2xl font-semibold">Key SQL Clauses</h2>
        <h3 className="text-xl font-semibold">1. SELECT</h3>
        <p>The <code>SELECT</code> statement is used to select data from a database. The data returned is stored in a result table called the result set.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2 FROM table_name;`}</code>
        </pre>

        <h3 className="text-xl font-semibold">2. FROM</h3>
        <p>The <code>FROM</code> clause is used to specify the table from which to retrieve the data.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2
FROM table_name;`}</code>
        </pre>

        <h3 className="text-xl font-semibold">3. WHERE</h3>
        <p>The <code>WHERE</code> clause is used to filter records based on a specified condition.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2
FROM table_name
WHERE condition;`}</code>
        </pre>

        <h3 className="text-xl font-semibold">4. ORDER BY</h3>
        <p>The <code>ORDER BY</code> clause is used to sort the result set in either ascending or descending order. The default sorting order is ascending.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2
FROM table_name
ORDER BY column1 DESC;`}</code>
        </pre>

        <h3 className="text-xl font-semibold">5. LIMIT</h3>
        <p>The <code>LIMIT</code> clause is used to specify the number of records to return in the result set.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column1, column2
FROM table_name
LIMIT 5;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">SQL Data Types</h2>
        <p>SQL supports various data types to define the type of data that can be stored in a column. Common data types include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>INT</strong>: Integer values</li>
          <li><strong>VARCHAR</strong>: Variable-length string</li>
          <li><strong>TEXT</strong>: Long text data</li>
          <li><strong>DATE</strong>: Date values</li>
          <li><strong>DECIMAL</strong>: Numeric values with fixed precision</li>
          <li><strong>BOOLEAN</strong>: True or False values</li>
        </ul>

        <h2 className="text-2xl font-semibold">SQL Operators</h2>
        <p>SQL operators are used to perform operations on data. Some common operators include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>AND</strong>: Combines multiple conditions</li>
          <li><strong>OR</strong>: Combines multiple conditions where either condition is true</li>
          <li><strong>NOT</strong>: Negates a condition</li>
          <li><strong>=</strong>: Equals operator</li>
          <li><strong>{">"}</strong>: Greater than operator</li>
          <li><strong>{"<"}</strong>: Less than operator</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example SQL Query</h2>
        <p>Here’s an example of a full SQL query using the basic syntax:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT first_name, last_name, age
FROM employees
WHERE age > 30
ORDER BY last_name ASC
LIMIT 10;`}</code>
        </pre>
        <p>This query retrieves the first name, last name, and age of employees older than 30, orders them by last name in ascending order, and limits the results to 10 records.</p>

        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>SQL syntax is relatively simple once you understand the structure of a query. By mastering SQL statements and clauses, you can interact with your database to retrieve, manipulate, and manage data effectively.</p>
      </div>
    </div>
  );
};

export default SyntaxPage;
