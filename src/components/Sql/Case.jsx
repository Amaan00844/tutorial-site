"use client";

const CaseSQL = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL CASE Statement</h1>
        <p className="text-lg">How to use conditional logic in SQL queries</p>
        <p>
          The <strong>CASE</strong> statement in SQL lets you perform{" "}
          <strong>conditional logic</strong> in your queries. It's similar to an{" "}
          <strong>if-else</strong> or <strong>switch</strong> statement in programming languages. It allows you to change the output of a query based on certain conditions.
        </p>

        <h2 className="text-2xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ...
  ELSE default_result
END`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Example: Grade Evaluation</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`SELECT name, grade,
  CASE
    WHEN grade >= 90 THEN 'A'
    WHEN grade >= 80 THEN 'B'
    WHEN grade >= 70 THEN 'C'
    WHEN grade >= 60 THEN 'D'
    ELSE 'F'
  END AS letter_grade
FROM Students;`}
          </code>
        </pre>
        <p>
          In this example, each student's numeric grade is converted into a letter grade using the CASE statement.
        </p>

        <h2 className="text-2xl font-semibold">Use Cases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assign categories or labels based on values (e.g. pass/fail, region names).</li>
          <li>Replace NULL values or standardize data formats.</li>
          <li>Create readable outputs in reports and dashboards.</li>
          <li>Perform complex logic without changing the actual data in the table.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Another Example: Salary Bracket</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`SELECT name, salary,
  CASE
    WHEN salary >= 100000 THEN 'High'
    WHEN salary >= 50000 THEN 'Medium'
    ELSE 'Low'
  END AS salary_bracket
FROM Employees;`}
          </code>
        </pre>

        <p className="italic text-blue-300">
          You can use <code>CASE</code> in <strong>SELECT</strong>, <strong>ORDER BY</strong>, and even inside <strong>WHERE</strong> clauses in some databases.
        </p>
      </div>
    </div>
  );
};

export default CaseSQL;
