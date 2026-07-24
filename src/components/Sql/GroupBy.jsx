"use client";

const GroupByPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL GROUP BY Clause</h1>
        <p className="text-lg">
          The <strong>GROUP BY</strong> clause groups rows that have the same values into summary rows, like totals or counts.
        </p>

        <h2 className="text-2xl font-semibold">Why Use GROUP BY?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To group data based on one or more columns.</li>
          <li>To perform aggregate functions like <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, or <code>MAX()</code> on each group.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">Example: Group Students by Grade</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT grade, COUNT(*) AS total_students
FROM students
GROUP BY grade;`}</code>
        </pre>
        <p>This returns the number of students in each grade.</p>

        <h2 className="text-2xl font-semibold">Example: Total Sales by Product</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT product_name, SUM(sales) AS total_sales
FROM orders
GROUP BY product_name;`}</code>
        </pre>
        <p>This calculates total sales for each product.</p>

        <h2 className="text-2xl font-semibold">Using GROUP BY with WHERE</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE salary > 30000
GROUP BY department;`}</code>
        </pre>
        <p>This gets the average salary per department for employees earning more than 30,000.</p>

        <h2 className="text-2xl font-semibold">Note</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Every column in the SELECT must either be grouped or used in an aggregate function.</li>
          <li>You can also use <code>HAVING</code> to filter grouped results.</li>
        </ul>

        <p className="italic text-blue-300">
          Use <code>GROUP BY</code> to analyze and summarize your data by categories or properties.
        </p>
      </div>
    </div>
  );
};

export default GroupByPage;
