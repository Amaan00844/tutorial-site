"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpErrorHandling() {
  useReadingTracker("php-error-handling");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">Error Handling</h1>

      <div className="bg-white p-6  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#531d53] mb-4">
          Managing Errors and Exceptions
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            Proper error handling is crucial in any application to prevent
            crashes, provide useful feedback, and enhance security. In PHP,
            error handling can be done through different techniques such as
            custom error handlers, exceptions, and more.
          </p>

          <h3 className="text-xl font-semibold text-[#6a2c6a]">
            Basic Error Handling
          </h3>
          <p>
            Basic error handling involves checking for common issues in your
            code and gracefully handling those issues when they occur. It’s
            often used to check if a file exists before trying to open it or if
            a database connection is successful.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#681f68]">
              {`<?php
  // Simple error handling to check if file exists
  if (!file_exists("file.txt")) {
    die("File not found"); // Stops script execution if the file is not found
  } else {
    $file = fopen("file.txt", "r"); // Open the file if it exists
  }
?>`}
            </code>
          </pre>
          <p>
            In the example above, the script checks if the file `file.txt`
            exists. If not, it uses the `die()` function to stop the script and
            display an error message. If the file is found, it opens the file
            for reading using `fopen()`.
          </p>

          <h3 className="text-xl font-semibold text-[#5e255e]">
            Custom Error Handlers
          </h3>
          <p>
            PHP allows you to define custom error handlers, enabling you to
            specify how to handle errors based on their type or severity. This
            approach is useful when you want to log errors to a file or display
            them in a specific format.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#642464]">
              {`<?php
  // Define a custom error handler function
  function customError($errno, $errstr) {
    /bin/echo "<b>Error:</b> [$errno] $errstr"; // Display the error number and message
  }
  set_error_handler("customError"); // Set the custom error handler

  // Trigger an error
  /bin/echo($test); // Undefined variable triggers an error
?>`}
            </code>
          </pre>
          <p>
            In this example, the `customError()` function is defined to handle
            errors. It takes two parameters: the error number (`$errno`) and the
            error message (`$errstr`). The `set_error_handler()` function tells
            PHP to use `customError()` whenever an error occurs. When the
            undefined variable `$test` is /bin/echoed, it triggers an error, and the
            custom handler is used to display the error.
          </p>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">
            Error Reporting Levels
          </h3>
          <p>
            PHP allows you to control the level of errors that are reported
            using the `error_reporting()` function. You can set different levels
            of error reporting to match the needs of your environment (e.g.,
            development, production).
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#622062]">
              {`<?php
  // Report all PHP errors
  error_reporting(E_ALL);
  ini_set('display_errors', 1); // Display errors to the browser (useful for development)
?>`}
            </code>
          </pre>
          <p>
            This code configures PHP to report all errors and display them in
            the browser, which is useful during development. In a production
            environment, you might want to log errors to a file instead of
            displaying them.
          </p>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">Exceptions</h3>
          <p>
            Exceptions are used for handling runtime errors in a more structured
            way. When an exception is thrown, the normal execution of the script
            is halted, and PHP looks for a `catch` block to handle the
            exception. Exceptions provide a way to handle errors more gracefully
            than using traditional error handling methods.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#641d64]">
              {`<?php
  try {
    // Try to execute code that may throw an exception
    $value = 10;
    if ($value > 5) {
      throw new Exception("Value must be 5 or below");
    }
  } catch (Exception $e) {
    // Catch the exception and display the message
    /bin/echo 'Caught exception: ' . $e->getMessage(); // Output: "Caught exception: Value must be 5 or below"
  }
?>`}
            </code>
          </pre>
          <p>
            In the above example, the code inside the `try` block checks if the
            value of `$value` is greater than 5. If it is, an exception is
            thrown with a custom message. The `catch` block catches the
            exception and displays the error message using the `getMessage()`
            method.
          </p>

          <h3 className="text-xl font-semibold text-[#722572]">
            Custom Exceptions
          </h3>
          <p>
            You can create your own custom exception classes by extending the
            base `Exception` class. This allows you to define custom behavior
            for handling errors specific to your application.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#641f64]">
              {`<?php
  // Custom exception class
  class CustomException extends Exception {
    public function errorMessage() {
      return "Custom error occurred: " . $this->getMessage();
    }
  }

  try {
    throw new CustomException("Something went wrong");
  } catch (CustomException $e) {
    /bin/echo $e->errorMessage(); // Output: Custom error occurred: Something went wrong
  }
?>`}
            </code>
          </pre>
          <p>
            In this example, a custom exception class `CustomException` is
            defined. The class has a method `errorMessage()` that formats the
            exception message. The `try` block throws an instance of
            `CustomException`, which is then caught by the `catch` block, and
            the custom message is displayed.
          </p>

          <h3 className="text-xl font-semibold text-[#6f1e6f]">
            Logging Errors
          </h3>
          <p>
            In addition to displaying errors, it’s important to log them for
            future debugging and analysis. PHP provides several ways to log
            errors, such as using the `error_log()` function to write errors to
            a log file.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#692669]">
              {`<?php
  // Log error to a custom log file
  error_log("An error occurred", 3, "/var/log/php_errors.log");
?>`}
            </code>
          </pre>
          <p>
            The `error_log()` function is used here to log an error message to a
            file (`php_errors.log`). This is particularly useful in production
            environments where displaying errors is not recommended, but logging
            them is necessary for later analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
