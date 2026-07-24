"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLIntro() {
  useReadingTracker("mysqlhome");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        MySQL Introduction
      </h1>

      <p className="text-lg text-gray-800 mb-6">
        Welcome to the MySQL tutorial! MySQL is one of the most widely used
        **Relational Database Management Systems (RDBMS)** in the world. It is
        an open-source software that allows you to store, organize, and retrieve
        data efficiently using **Structured Query Language (SQL)**.
      </p>

      <div className="bg-white p-6 rounded-xl max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          What is MySQL?
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            MySQL is a **Relational Database Management System (RDBMS)**. In
            simpler terms, it stores data in **tables** (just like
            spreadsheets), and allows you to manage that data using **SQL
            queries**. Each table consists of **rows** and **columns**.
          </p>

          <p>
            <strong>For example:</strong>
            <br />
            You can create a table called <code>students</code> with columns
            like `id`, `name`, and `email`. Each row will represent a student.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);`}
            </code>
          </pre>

          <p>
            This command creates a table with three columns. `INT` is a data
            type for integers, and `VARCHAR(100)` allows storing text up to 100
            characters.
          </p>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            🔍 Why Learn MySQL?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Ubiquity:</strong> MySQL is used by tech giants like
              Facebook, Twitter, and YouTube.
            </li>
            <li>
              <strong>Free & Open Source:</strong> You can use it freely for
              personal and commercial projects.
            </li>
            <li>
              <strong>Cross-platform:</strong> Works on Windows, Linux, macOS.
            </li>
            <li>
              <strong>Job Opportunities:</strong> MySQL knowledge is crucial for
              roles like Backend Developer, Database Administrator, Data
              Analyst, and more.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            📘 What Will You Learn?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Basics:</strong> Understanding databases, tables, data
              types, and relationships.
            </li>
            <li>
              <strong>SQL Commands:</strong> Learn to use <code>SELECT</code>,{" "}
              <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.
            </li>
            <li>
              <strong>Joins:</strong> Combine data from multiple tables.
            </li>
            <li>
              <strong>Subqueries:</strong> Write queries inside queries.
            </li>
            <li>
              <strong>Administration:</strong> User privileges, backups, and
              server tuning.
            </li>
            <li>
              <strong>Projects:</strong> Real-world use cases like blog systems,
              e-commerce, student management systems.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            🛠 Getting Started
          </h3>
          <p>You need to install MySQL or use a cloud-based tool:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Install Locally:</strong> Use MySQL Installer or packages
              like XAMPP, WAMP.
            </li>
            <li>
              <strong>Online Tools:</strong> Use platforms like db-fiddle.com or
              MySQL Sandbox to practice without installing.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            📂 What is a Database?
          </h3>
          <p>
            A database is a collection of organized information that can be
            accessed, managed, and updated. In MySQL, data is grouped into
            databases, and each database can contain many tables.
          </p>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            📄 What is a Table?
          </h3>
          <p>
            A table stores data in rows and columns. Each row is a record, and
            each column is a field.
          </p>

          <p>
            <strong>Example:</strong> A table named `users` might have:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <code>id</code> - unique identifier
            </li>
            <li>
              <code>name</code> - user’s name
            </li>
            <li>
              <code>email</code> - user’s email address
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            💬 First SQL Query
          </h3>
          <p>Retrieve all users from the table:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">{`SELECT * FROM users;`}</code>
          </pre>
          <p>
            This means: “Select all columns and all rows from the users table.”
          </p>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            📌 Common SQL Statements
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-400">
              {`-- Insert data
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

-- Update data
UPDATE users SET email = 'alice@newdomain.com' WHERE name = 'Alice';

-- Delete data
DELETE FROM users WHERE name = 'Alice';

-- Retrieve data
SELECT name FROM users WHERE email LIKE '%@example.com';`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            🧠 Key Concepts Ahead
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Primary Key:</strong> Uniquely identifies each row in a
              table (e.g., `id`).
            </li>
            <li>
              <strong>Foreign Key:</strong> A field that links two tables
              together.
            </li>
            <li>
              <strong>Joins:</strong> Merge rows from two or more tables based
              on a related column.
            </li>
            <li>
              <strong>Normalization:</strong> Organizing tables to reduce data
              redundancy.
            </li>
          </ul>

          <p>
            As you move forward, you’ll encounter more examples and gradually
            build your confidence in using MySQL effectively.
          </p>

          <h3 className="text-xl font-semibold mt-6 text-cyan-400">
            🚀 Final Note
          </h3>
          <p>
            Learning MySQL is not just about writing queries—it’s about
            understanding how data works and how to make it useful. You'll be
            working with real-world scenarios, building actual projects, and
            solving meaningful problems. Are you ready? Let’s move to the next
            topic and begin your journey into databases!
          </p>
        </div>
      </div>
    </div>
  );
}
