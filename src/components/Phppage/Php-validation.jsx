"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpValidation() {
  useReadingTracker("php-validation");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP Form Validation
      </h1>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#732a73] mb-4">
          🔐 Secure Input Handling
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            <strong>Form validation</strong> means checking whether the user has
            entered correct and complete data before sending it to the server.
            Validation ensures:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Correct format (like valid email or required name)</li>
            <li>Security (preventing code injection)</li>
            <li>Preventing blank/incorrect submissions</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#6d296d] mt-6">
            📌 What is Server-side Validation?
          </h3>
          <p>
            Server-side validation means validating data on the backend using
            PHP. It's more secure because it cannot be bypassed like client-side
            JavaScript validation.
          </p>

          <h3 className="text-xl font-semibold text-[#6d296d] mt-6">
            🧪 Simple Validation Example
          </h3>
          <p>
            This example checks if the name and email fields are filled, and if
            the email is in the correct format.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#692c69]">
              {`<?php
  $name = $email = "";
  $errors = [];

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Name Validation
    if (empty($_POST["name"])) {
      $errors["name"] = "Name is required";
    } else {
      $name = test_input($_POST["name"]);
    }

    // Email Validation
    if (empty($_POST["email"])) {
      $errors["email"] = "Email is required";
    } else {
      $email = test_input($_POST["email"]);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Invalid email format";
      }
    }
  }

  function test_input($data) {
    $data = trim($data);               // Remove extra spaces
    $data = stripslashes($data);       // Remove slashes
    $data = htmlspecialchars($data);   // Convert special characters
    return $data;
  }
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#6b246b] mt-6">
            📚 Code Explanation
          </h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>empty()</strong>: Checks if a field is left blank.
            </li>
            <li>
              <strong>filter_var(..., FILTER_VALIDATE_EMAIL)</strong>: Checks if
              the email is valid.
            </li>
            <li>
              <strong>test_input()</strong>: A custom function to clean data
              (remove spaces, slashes, special characters).
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#6b246b] mt-6">
            ✅ Best Practices for Form Validation
          </h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Always use <strong>server-side validation</strong>, even if
              client-side exists.
            </li>
            <li>
              Always <strong>sanitize</strong> user inputs before storing or
              using them.
            </li>
            <li>
              Use <strong>prepared statements</strong> when saving data to a
              database (to prevent SQL injection).
            </li>
            <li>Keep error messages user-friendly and helpful.</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#6b246b] mt-6">
            🔎 Real-World Use Case
          </h3>
          <p>
            Suppose you have a user registration form with fields like name,
            email, and password. Before saving this data, PHP should check if
            the values are not empty and formatted correctly. This avoids fake
            or malicious data entry.
          </p>
        </div>
      </div>
    </div>
  );
}
