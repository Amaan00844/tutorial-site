"use client";

const OrderByPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL ORDER BY</h1>
        <p className="text-lg">
          The <strong>ORDER BY</strong> clause is used to sort the result set of a query by one or more columns.
        </p>

        <h2 className="text-2xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM table_name
ORDER BY column_name ASC | DESC;`}</code>
        </pre>
        <p>
          - Use <code>ASC</code> for ascending order (default).<br />
          - Use <code>DESC</code> for descending order.
        </p>

        <h2 className="text-2xl font-semibold">Example: Sort by Name</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM customers
ORDER BY name ASC;`}</code>
        </pre>
        <p>This query returns all customers sorted alphabetically by their name.</p>

        <h2 className="text-2xl font-semibold">Example: Sort by Age Descending</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM customers
ORDER BY age DESC;`}</code>
        </pre>
        <p>This query returns customers sorted from oldest to youngest.</p>

        <h2 className="text-2xl font-semibold">Sorting by Multiple Columns</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM employees
ORDER BY department ASC, salary DESC;`}</code>
        </pre>
        <p>
          This query sorts employees first by department in ascending order, and
          then by salary within each department in descending order.
        </p>

        <p className="italic text-blue-300">
          ORDER BY is commonly used with LIMIT to sort and paginate data in web applications.
        </p>
      </div>
    </div>
  );
};

export default OrderByPage;
