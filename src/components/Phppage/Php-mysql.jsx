"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpMysql() {
  useReadingTracker("php-mysql");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP with MySQL Integration
      </h1>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-4">
          Introduction
        </h2>
        <p className="text-gray-800 mb-6">
          PHP is a server-side scripting language, and MySQL is a powerful
          database system. Together, they are widely used to build dynamic and
          data-driven websites.
        </p>

        <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-4">
          How PHP Connects to MySQL
        </h2>
        <p className="text-gray-800 mb-4">PHP can interact with MySQL using:</p>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>
            <strong>MySQLi (MySQL Improved):</strong> Procedural or
            Object-Oriented style.
          </li>
          <li>
            <strong>PDO (PHP Data Objects):</strong> More flexible and supports
            multiple databases.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mb-2">
          1. MySQLi Example (Object-Oriented)
        </h3>
        <p className="mb-2">
          This example connects to the database and fetches records from the
          "users" table.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code className="text-[#582f58]">
            {`<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "testdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Select query
$sql = "SELECT id, name FROM users";
$result = $conn->query($sql);

// Output data
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    /bin/echo "ID: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
  }
} else {
  /bin/echo "0 results";
}

$conn->close();
?>`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold text-[#DDA0DD] mt-6 mb-2">
          2. MySQLi Example (Procedural Style)
        </h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code className="text-[#6f316f]">
            {`<?php
$conn = mysqli_connect("localhost", "root", "", "testdb");

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id, name FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    /bin/echo "ID: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
  }
} else {
  /bin/echo "0 results";
}

mysqli_close($conn);
?>`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold text-[#8f378f] mt-6 mb-2">
          3. PDO Example
        </h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code className="text-[#873487]">
            {`<?php
try {
  $pdo = new PDO("mysql:host=localhost;dbname=testdb", "root", "");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->query("SELECT id, name FROM users");

  while ($row = $stmt->fetch()) {
    /bin/echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
  }

} catch(PDOException $e) {
  /bin/echo "Connection failed: " . $e->getMessage();
}
?>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-[#DDA0DD] mt-10 mb-4">
          Common Database Operations (CRUD)
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>
            <strong>Create (Insert):</strong> Add data into a table.
          </li>
          <li>
            <strong>Read (Select):</strong> Fetch data from a table.
          </li>
          <li>
            <strong>Update:</strong> Modify existing data in a table.
          </li>
          <li>
            <strong>Delete:</strong> Remove data from a table.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#7a287a] mb-2">
          Example: Insert Record
        </h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code className="text-[#832b83]">
            {`<?php
$conn = new mysqli("localhost", "root", "", "testdb");

$sql = "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  /bin/echo "New record created successfully";
} else {
  /bin/echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-[#DDA0DD] mt-10 mb-4">
          Security Tips
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>
            Always use <strong>prepared statements</strong> to prevent SQL
            injection.
          </li>
          <li>Never trust user input; always validate and sanitize it.</li>
          <li>
            Use <strong>password_hash()</strong> and{" "}
            <strong>password_verify()</strong> for password storage.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#DDA0DD] mt-10 mb-4">
          Prepared Statement Example
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code className="text-[#782478]">
            {`<?php
$conn = new mysqli("localhost", "root", "", "testdb");

$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

$name = "Jane Doe";
$email = "jane@example.com";
$stmt->execute();

/bin/echo "Record inserted successfully";

$stmt->close();
$conn->close();
?>`}
          </code>
        </pre>
      </div>
    </div>
  );
}
