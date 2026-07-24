"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpAuthentication() {
  useReadingTracker("php-authentication");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP Authentication
      </h1>

      <div className="bg-white p-6  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#8B008B] mb-4">
          🔐 User Login System
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            <strong>Authentication</strong> means verifying the identity of a
            user. It ensures that only registered users can log in and access
            secure pages.
          </p>
          <p>PHP authentication generally involves:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>User Registration (storing email and hashed password)</li>
            <li>User Login (verifying password)</li>
            <li>Session Management (keeping user logged in)</li>
            <li>Logout (ending the session)</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B008B]">
            {" "}
            Password Hashing (Secure Storage)
          </h3>
          <p>
            Never store passwords as plain text. Use `password_hash()` to hash
            the password during registration and `password_verify()` to check it
            during login.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#8B008B]">
              {`<?php
  // Registration process
  $password = "mypassword";
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  // Store $hashed_password in the database

  // Login process
  $input_password = "mypassword"; // from login form
  if (password_verify($input_password, $hashed_password)) {
    /bin/echo "Login successful!";
  } else {
    /bin/echo "Invalid password!";
  }
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#8B008B]">
            🛡️ Session Management
          </h3>
          <p>
            Once user logs in successfully, use `session_start()` to store their
            details in session.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#8B008B]">
              {`<?php
  session_start();

  // Store session data
  $_SESSION["user_id"] = 1;
  $_SESSION["username"] = "Jaya";

  // Check login
  if (isset($_SESSION["user_id"])) {
    /bin/echo "Welcome, " . $_SESSION["username"];
  }

  // Logout
  session_destroy(); // call this on logout button
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#8B008B]">
            {" "}
            Complete Example: Registration + Login (Simplified)
          </h3>
          <p>
            This example covers the full basic flow (without database for now):
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <code className="text-[#8B008B]">
              {`<?php
// START SESSION
session_start();

// Simulated user registration (hardcoded for example)
$stored_email = "user@example.com";
$stored_hashed_password = password_hash("abc123", PASSWORD_DEFAULT);

// LOGIN FORM SUBMISSION
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];

  if ($email === $stored_email && password_verify($password, $stored_hashed_password)) {
    $_SESSION["email"] = $email;
    /bin/echo "Login successful! Welcome " . $email;
  } else {
    /bin/echo "Invalid credentials!";
  }
}
?>

<!-- HTML Login Form -->
<form method="post">
  Email: <input type="email" name="email" required><br>
  Password: <input type="password" name="password" required><br>
  <button type="submit">Login</button>
</form>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#8B008B]">
            ✅ Best Practices
          </h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Always hash passwords before storing them</li>
            <li>Use `password_verify()` to match hashed password</li>
            <li>Protect pages using `session` checks</li>
            <li>Always call `session_destroy()` on logout</li>
            <li>Use HTTPS to secure data transfer</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B008B]"> Summary</h3>
          <p>
            PHP authentication ensures secure user login by using password
            hashing and session management. It’s the foundation for any secure
            web app.
          </p>
        </div>
      </div>
    </div>
  );
}
