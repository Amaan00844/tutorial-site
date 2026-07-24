"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpPdo() {
  useReadingTracker("php-pdo");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP Data Objects (PDO)
      </h1>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#802c80] mb-4">
          Database Abstraction Layer
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            PDO stands for <strong>PHP Data Objects</strong>. It is a database
            access layer providing a uniform method of access to multiple
            databases. This means you can use the same code to connect to MySQL,
            PostgreSQL, SQLite, and many more, just by changing the connection
            string.
          </p>

          <h3 className="text-xl font-semibold text-[#691f69]">
            🔹 Why Use PDO?
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Works with multiple databases (MySQL, SQLite, PostgreSQL, etc.)
            </li>
            <li>Secure – uses prepared statements to prevent SQL Injection</li>
            <li>Object-oriented and clean code structure</li>
            <li>Detailed error handling using try-catch blocks</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#691f69]">
            🔹 Basic PDO Connection
          </h3>
          <p>
            Here's how you can connect to a MySQL database using PDO and perform
            a SELECT query securely:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#671f67]">
              {`<?php
  try {
    // Step 1: Connect to the database
    $conn = new PDO("mysql:host=localhost;dbname=myDB", "username", "password");
    
    // Step 2: Set error reporting mode
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Step 3: Prepare SQL query using placeholder
    $stmt = $conn->prepare("SELECT * FROM users WHERE id = :id");
    
    // Step 4: Execute query with data
    $stmt->execute(['id' => $user_id]);

    // Step 5: Fetch result
    $result = $stmt->fetchAll();

  } catch(PDOException $e) {
    /bin/echo "Error: " . $e->getMessage();
  }
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#651e65]">
            🔹 PDO Code Breakdown
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>PDO(...)</strong> – Creates a connection to the database.
            </li>
            <li>
              <strong>setAttribute(...)</strong> – Sets how errors are handled.
            </li>
            <li>
              <strong>prepare(...)</strong> – Prepares the SQL statement to be
              executed.
            </li>
            <li>
              <strong>execute([...])</strong> – Executes the statement with the
              actual data.
            </li>
            <li>
              <strong>fetchAll()</strong> – Fetches all matching records from
              the database.
            </li>
            <li>
              <strong>try-catch</strong> – Handles any connection or query
              errors gracefully.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#651e65]">
            🔹 Real Life Use Case
          </h3>
          <p>
            You can use PDO for login forms, registration forms, admin
            dashboards, and basically anywhere you interact with databases.
          </p>

          <h3 className="text-xl font-semibold text-[#651e65]">🔹 Quick Tip</h3>
          <p>
            Always use <code>prepare()</code> and <code>execute()</code> with
            placeholders to protect against SQL injection attacks.
          </p>
        </div>
      </div>
    </div>
  );
}
