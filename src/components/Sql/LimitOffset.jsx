"use client";

const LimitOffsetPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL LIMIT & OFFSET</h1>
        <p className="text-lg">
          The <strong>LIMIT</strong> and <strong>OFFSET</strong> clauses are used to control the number of rows returned by a query.
        </p>

        <h2 className="text-2xl font-semibold">LIMIT</h2>
        <p>
          The <code>LIMIT</code> keyword is used to specify the maximum number of records to return.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM customers
LIMIT 5;`}</code>
        </pre>
        <p>This query returns only the first 5 rows from the <code>customers</code> table.</p>

        <h2 className="text-2xl font-semibold">OFFSET</h2>
        <p>
          The <code>OFFSET</code> keyword is used to skip a number of rows before starting to return results.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT * FROM customers
LIMIT 5 OFFSET 10;`}</code>
        </pre>
        <p>This query skips the first 10 rows and returns the next 5 rows.</p>

        <h2 className="text-2xl font-semibold">Common Use Case: Pagination</h2>
        <p>LIMIT and OFFSET are commonly used for pagination in web applications.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`-- Page 1 (records 1–5)
SELECT * FROM products
LIMIT 5 OFFSET 0;

-- Page 2 (records 6–10)
SELECT * FROM products
LIMIT 5 OFFSET 5;

-- Page 3 (records 11–15)
SELECT * FROM products
LIMIT 5 OFFSET 10;`}</code>
        </pre>

        <p className="italic text-blue-300">
          Use LIMIT and OFFSET to manage large results and improve performance when dealing with big data sets.
        </p>
      </div>
    </div>
  );
};

export default LimitOffsetPage;
