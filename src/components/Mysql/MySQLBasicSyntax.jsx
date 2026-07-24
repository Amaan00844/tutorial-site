"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLBasicSyntax() {
  useReadingTracker("mysqlbasicsyntax");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        MySQL Syntax Overview
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Understanding MySQL syntax is the foundation of working with relational
        databases. SQL (Structured Query Language) is the language used to
        interact with MySQL. Whether you're building an e-commerce site,
        managing school records, or analyzing financial data, knowing the
        correct SQL syntax ensures your database operations are accurate and
        efficient.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          1. Basic SQL Structure
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>A standard SQL statement follows this basic structure:</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`SELECT column1, column2 FROM table_name WHERE condition ORDER BY column1 DESC;`}
            </code>
          </pre>

          <p>
            - <b>SELECT</b>: Specifies the columns you want to retrieve.
            <br />- <b>FROM</b>: Indicates the table.
            <br />- <b>WHERE</b>: Filters rows based on conditions.
            <br />- <b>ORDER BY</b>: Sorts the result.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">
            2. SQL Categories
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <b>DDL (Data Definition Language)</b>: CREATE, ALTER, DROP — for
              defining and modifying database structure.
            </li>
            <li>
              <b>DML (Data Manipulation Language)</b>: INSERT, UPDATE, DELETE —
              for changing data.
            </li>
            <li>
              <b>DQL (Data Query Language)</b>: SELECT — for retrieving data.
            </li>
            <li>
              <b>DCL (Data Control Language)</b>: GRANT, REVOKE — for
              permissions and access control.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">
            3. Real-Time Example: Library System
          </h2>
          <p>
            Let's build a mini "Library" system with a `books` table. We’ll
            create the table, insert data, update it, and then query it.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-700">
              {`-- Step 1: Create the table
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(50),
  price DECIMAL(5,2),
  available BOOLEAN DEFAULT true
);

-- Step 2: Insert records
INSERT INTO books (title, author, price) VALUES
('MySQL for Beginners', 'Alice Brown', 19.99),
('Mastering SQL', 'Bob Smith', 25.50);

-- Step 3: Query all books
SELECT * FROM books;

-- Step 4: Update price of a book
UPDATE books SET price = 20.99 WHERE title = 'MySQL for Beginners';

-- Step 5: Delete a book
DELETE FROM books WHERE title = 'Mastering SQL';`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">
            4. WHERE, AND, OR, and LIKE
          </h2>
          <p>Use these to filter data based on specific conditions:</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`-- Find books cheaper than $22
SELECT * FROM books WHERE price < 22;

-- Find books by Alice Brown or Bob Smith
SELECT * FROM books WHERE author = 'Alice Brown' OR author = 'Bob Smith';

-- Find books with 'SQL' in the title
SELECT * FROM books WHERE title LIKE '%SQL%';`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">
            5. Sorting & Limiting Results
          </h2>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-700">
              {`-- Get books sorted by price (ascending)
SELECT * FROM books ORDER BY price ASC;

-- Get top 1 expensive book
SELECT * FROM books ORDER BY price DESC LIMIT 1;`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">
            6. JOINs (Real-world example: Students and Courses)
          </h2>
          <p>
            Suppose you have two tables: `students` and `enrollments`. You can
            combine them using JOIN:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-700">
              {`-- Students table
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);

-- Enrollments table
CREATE TABLE enrollments (
  student_id INT,
  course VARCHAR(50)
);

-- Join to get student name and course
SELECT students.name, enrollments.course
FROM students
JOIN enrollments ON students.id = enrollments.student_id;`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
            7. Best Practices
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use uppercase for SQL keywords for readability.</li>
            <li>Use comments (`--` or `/* */`) to document logic.</li>
            <li>
              Keep your table and column names descriptive and meaningful.
            </li>
            <li>
              Use transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) for operations
              that affect multiple tables.
            </li>
            <li>
              Use indexing on frequently searched columns for faster
              performance.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">
            8. Practice Exercise
          </h2>
          <p>
            Create a `customers` table with columns: `id`, `name`, `email`,
            `city`. Insert at least three records and write queries to:
          </p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Retrieve all customers from a specific city.</li>
            <li>Update the city of one customer.</li>
            <li>Delete one customer.</li>
            <li>Sort the customers by name.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
