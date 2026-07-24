"use client";

const DataTypes = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL Data Types</h1>
        <p className="text-lg">
          SQL supports various data types to store different kinds of data like numbers, text, dates, and more.
        </p>

        <h2 className="text-2xl font-semibold">1. Numeric Data Types</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>INT:</strong> Whole numbers (e.g., 1, 25, -100)
          </li>
          <li>
            <strong>FLOAT / DOUBLE:</strong> Decimal numbers with floating-point precision
          </li>
          <li>
            <strong>DECIMAL(p, s):</strong> Fixed precision decimal (good for money values)
          </li>
          <li>
            <strong>SMALLINT / BIGINT:</strong> Smaller or larger ranges of integers
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">2. String Data Types</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>CHAR(n):</strong> Fixed-length string (e.g., CHAR(10) always stores 10 characters)
          </li>
          <li>
            <strong>VARCHAR(n):</strong> Variable-length string up to n characters (most commonly used)
          </li>
          <li>
            <strong>TEXT:</strong> Long string (useful for paragraphs or articles)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Date and Time Types</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>DATE:</strong> Stores date only (e.g., 2025-05-01)
          </li>
          <li>
            <strong>TIME:</strong> Stores time only (e.g., 13:45:00)
          </li>
          <li>
            <strong>DATETIME / TIMESTAMP:</strong> Stores both date and time
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Boolean Type</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>BOOLEAN / BOOL:</strong> Stores TRUE or FALSE values (commonly stored as 1 and 0)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">5. Miscellaneous</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>BLOB:</strong> Binary Large Object (used for images, audio, or video data)
          </li>
          <li>
            <strong>ENUM:</strong> A predefined set of values (e.g., 'small', 'medium', 'large')
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Using Data Types in a Table</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(255),
  age INT,
  is_active BOOLEAN,
  created_at DATETIME
);`}</code>
        </pre>

        <p className="italic text-blue-300">
          Choosing the right data type improves performance and saves space.
        </p>
      </div>
    </div>
  );
};

export default DataTypes;
