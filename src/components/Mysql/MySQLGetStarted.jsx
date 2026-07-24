"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLGetStarted() {
  useReadingTracker("mysqlgetstarted");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Get Started with MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Ready to dive into MySQL? This beginner-friendly guide will walk you
        through everything you need to know—from installation to writing your
        first queries—with real-world examples and practical tips!
      </p>

      {/* Why Use MySQL */}
      <div className="bg-white p-6 rounded-xl max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          Why Use MySQL?
        </h2>
        <p className="text-gray-800 text-md mb-6">
          MySQL is trusted by companies like Facebook, Twitter, YouTube, and
          Airbnb because it’s fast, free, and reliable. It supports millions of
          rows of data and allows you to perform complex data operations with
          just a few lines of SQL.
        </p>

        {/* What is MySQL */}
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          What is MySQL?
        </h2>
        <p className="text-gray-800 text-md mb-6">
          MySQL is an open-source relational database management system (RDBMS).
          It allows you to create, organize, and retrieve data in structured
          tables.
          <br />
          <br />
          <strong>Think of it like this:</strong> Imagine a digital version of a
          spreadsheet, but way more powerful. Each table = one sheet. You can
          link sheets together, perform searches, and automate updates.
        </p>

        {/* Key Concepts */}
        <h3 className="text-xl font-semibold text-cyan-400">
          🔑 Key MySQL Concepts (With Analogies)
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>
            <strong>Database:</strong> Like a filing cabinet, it stores many
            related tables.
          </li>
          <li>
            <strong>Table:</strong> Like an Excel sheet, with rows and columns.
          </li>
          <li>
            <strong>Primary Key:</strong> A unique ID for each row, like a
            student roll number.
          </li>
          <li>
            <strong>SQL:</strong> The language you use to talk to MySQL. Think
            of it like asking questions.
          </li>
        </ul>

        {/* Setup */}
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          Setting Up MySQL
        </h2>
        <div className="text-gray-800 space-y-6 text-sm leading-relaxed">
          {/* Steps here are the same as your original code */}

          {/* First Query */}
          <p>
            <strong>Step 4: Run Your First Query</strong>
            <br />
            Let’s simulate managing user records for a newsletter.
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="text-cyan-400">
                {`CREATE DATABASE newsletter_db;
USE newsletter_db;
CREATE TABLE subscribers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);
INSERT INTO subscribers (name, email) VALUES ('Alice Smith', 'alice@example.com');
SELECT * FROM subscribers;`}
              </code>
            </pre>
          </p>

          {/* Use Cases */}
          <h2 className="text-xl font-semibold text-cyan-400">
            Real-World Use Cases of MySQL
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Online Booking:</strong> Hotels, flights, and movie ticket
              systems store all user reservations.
            </li>
            <li>
              <strong>Blog CMS:</strong> Platforms like WordPress use MySQL to
              manage posts, users, and comments.
            </li>
            <li>
              <strong>Mobile Apps:</strong> Store user login details,
              preferences, and messages.
            </li>
          </ul>

          {/* Common Errors */}
          <h2 className="text-xl font-semibold text-red-500">
            ⚠️ Common Beginner Errors
          </h2>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li>Forgetting semicolon (`;`) at the end of SQL queries.</li>
            <li>
              Mixing up table and column names (they’re case-sensitive in some
              systems).
            </li>
            <li>Using `=` instead of `LIKE` for partial text matches.</li>
            <li>Skipping the `USE database_name;` before querying tables.</li>
          </ul>

          {/* Helpful Tips */}
          <h2 className="text-xl font-semibold text-green-500">
            🛠 Helpful Tips
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              Use <strong>MySQL Workbench</strong> for a GUI interface.
            </li>
            <li>
              Start with small sample projects (like a contact book or book
              inventory).
            </li>
            <li>
              Explore{" "}
              <a
                href="https://www.w3schools.com/mysql/"
                className="text-cyan-600 underline"
              >
                W3Schools
              </a>{" "}
              and{" "}
              <a href="https://sqlzoo.net/" className="text-cyan-600 underline">
                SQLZoo
              </a>{" "}
              for hands-on learning.
            </li>
          </ul>

          {/* FAQs */}
          <h2 className="text-xl font-semibold text-cyan-400">
            ❓ Frequently Asked Questions
          </h2>
          <ul className="list-inside text-gray-800 space-y-2">
            <li>
              <strong>Q:</strong> Is MySQL free? <br />
              <strong>A:</strong> Yes! The Community Edition is open-source and
              free to use.
            </li>
            <li>
              <strong>Q:</strong> Can I use MySQL with PHP or Node.js? <br />
              <strong>A:</strong> Absolutely. It integrates with most
              programming languages easily.
            </li>
            <li>
              <strong>Q:</strong> Is MySQL good for large websites? <br />
              <strong>A:</strong> Yes, many high-traffic sites use MySQL with
              proper optimization.
            </li>
          </ul>

          {/* Next Steps */}
          <h2 className="text-xl font-semibold text-purple-500 mt-8">
            📘 Next Steps
          </h2>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            <li>
              Learn about <strong>JOINS</strong> to combine data from multiple
              tables.
            </li>
            <li>
              Practice with <strong>GROUP BY</strong>, <strong>ORDER BY</strong>
              , and <strong>WHERE</strong> clauses.
            </li>
            <li>
              Understand <strong>Normalization</strong> to structure data
              efficiently.
            </li>
            <li>
              Explore <strong>Stored Procedures</strong> for reusable SQL logic.
            </li>
          </ul>

          <p className="text-lg text-gray-800">
            MySQL is your gateway to handling real data like a pro. Keep
            practicing, build mini-projects, and explore how databases power
            everything from mobile apps to enterprise software.
          </p>
        </div>
      </div>
    </div>
  );
}
