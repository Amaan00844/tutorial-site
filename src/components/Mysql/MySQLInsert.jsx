"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLInsert() {
  useReadingTracker("mysqlinsert");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        INSERT – Adding Data in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The `INSERT` statement in MySQL is used to add new rows of data to a
        table. This is how you put actual records (like names, prices, etc.)
        into your database tables. You'll learn how to insert one row, multiple
        rows, use default or auto-increment values, and avoid common mistakes.
      </p>

      <div className="bg-white p-6 rounded-xl  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
          🧾 Basic Syntax of INSERT
        </h2>

        <p className="text-gray-800 mb-4">
          The most common form of `INSERT` includes the column names and the
          values you want to add:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-500">
            {`INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);`}
          </code>
        </pre>

        <h2 className="text-xl font-semibold text-cyan-500 mt-8 mb-2">
          🎯 Example 1: Insert One Row
        </h2>
        <p className="mb-2">
          Assume you have a table called <code>students</code> with the columns:{" "}
          <code>id</code> (auto-increment), <code>name</code>, <code>age</code>,
          and <code>grade</code>.
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-500">
            {`INSERT INTO students (name, age, grade) VALUES ('Alice', 20, 'A');`}
          </code>
        </pre>

        <p>
          ✅ This will insert one row with name "Alice", age 20, and grade "A".
        </p>

        <h2 className="text-xl font-semibold text-cyan-600 mt-8 mb-2">
          👥 Example 2: Insert Multiple Rows
        </h2>
        <p>You can insert multiple records in a single statement:</p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-600">
            {`INSERT INTO students (name, age, grade) VALUES 
  ('Bob', 22, 'B'),
  ('Charlie', 21, 'A+'),
  ('Diana', 19, 'A');`}
          </code>
        </pre>

        <p>✅ This adds three students at once.</p>

        <h2 className="text-xl font-semibold text-cyan-600 mt-8 mb-2">
          📥 Insert All Columns (Optional)
        </h2>
        <p>
          If you’re inserting values into all columns in order, you can omit the
          column list (not recommended):
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-600">
            {`INSERT INTO students VALUES (NULL, 'Eve', 23, 'B');`}
          </code>
        </pre>

        <p>
          📝 <strong>Note:</strong> Use <code>NULL</code> for the{" "}
          <code>id</code> column because it auto-increments.
        </p>

        <h2 className="text-xl font-semibold text-cyan-600 mt-8 mb-2">
          ⚠️ Common Mistakes to Avoid
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Not matching the number of values with the number of columns.</li>
          <li>
            Using incorrect data types (e.g., inserting text into a numeric
            field).
          </li>
          <li>Forgetting to use single quotes around text and date values.</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-600 mt-8 mb-2">
          📌 Tip: Use Aliases in SELECT After Inserting
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-400">
            {`SELECT name AS student_name, grade AS final_grade FROM students;`}
          </code>
        </pre>

        <h2 className="text-xl font-semibold text-cyan-600 mt-8 mb-2">
          💡 Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always list the column names when inserting values.</li>
          <li>Use consistent formatting for readability.</li>
          <li>Use transactions when inserting into multiple related tables.</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-600 mt-8 mb-2">
          🧪 Practice Exercise
        </h2>
        <p>
          1. Create a table called <code>books</code>:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-600">
            {`CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100),
  price DECIMAL(6,2)
);`}
          </code>
        </pre>

        <p>2. Insert one book:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-500">
            {`INSERT INTO books (title, author, price) VALUES ('The Alchemist', 'Paulo Coelho', 9.99);`}
          </code>
        </pre>

        <p>3. Insert multiple books:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-500">
            {`INSERT INTO books (title, author, price) VALUES 
  ('Atomic Habits', 'James Clear', 12.50),
  ('Rich Dad Poor Dad', 'Robert Kiyosaki', 10.25);`}
          </code>
        </pre>

        <p>4. Verify the data:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-500">{`SELECT * FROM books;`}</code>
        </pre>
      </div>
    </div>
  );
}
