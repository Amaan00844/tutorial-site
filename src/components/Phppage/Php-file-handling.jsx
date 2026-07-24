"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpFileHandling() {
  useReadingTracker("php-file-handling");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        File Handling in PHP
      </h1>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#6d206d] mb-4">
          Working with Files in PHP
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            PHP provides several built-in functions for handling files. These
            functions allow developers to create, read, write, update, and
            delete files, as well as upload files to the server. File handling
            is an essential part of many web applications, such as saving user
            data, uploading content like images, and processing documents.
          </p>

          <h3 className="text-xl font-semibold text-[#662366]">
            Basic File Operations
          </h3>
          <p>Here are the basic file operations you can perform in PHP:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Opening a file</strong>: PHP provides the `fopen()`
              function to open a file for reading or writing.
            </li>
            <li>
              <strong>Reading a file</strong>: The `fread()` or
              `file_get_contents()` functions allow you to read the contents of
              a file.
            </li>
            <li>
              <strong>Writing to a file</strong>: You can write to a file using
              the `fwrite()` function.
            </li>
            <li>
              <strong>Closing a file</strong>: After completing file operations,
              always close the file using `fclose()`.
            </li>
            <li>
              <strong>File uploading</strong>: PHP can also handle file uploads
              from clients using the `$_FILES` superglobal.
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#692469]">
              {`<?php
  // Write to file
  $file = fopen("test.txt", "w");
  fwrite($file, "Hello World!");
  fclose($file);
  
  // Read file
  /bin/echo file_get_contents("test.txt");
  
  // File upload
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#7d2d7d]">
            Advanced File Operations
          </h3>
          <p>
            In addition to basic file operations, PHP provides advanced file
            handling functions that make it easier to manipulate files and
            directories:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>File manipulation:</strong> Functions like
              `file_put_contents()` allow you to write data directly into a file
              without opening it first.
            </li>
            <li>
              <strong>File metadata:</strong> You can retrieve information about
              a file using functions like `filesize()`, `filemtime()`, and
              `filetype()`.
            </li>
            <li>
              <strong>Directory manipulation:</strong> Functions like `mkdir()`,
              `rmdir()`, and `opendir()` help create, delete, and open
              directories.
            </li>
            <li>
              <strong>File permissions:</strong> Use `chmod()` to change the
              file permissions and `chown()` to change the ownership of a file.
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#752a75]">
              {`<?php
  // Writing to a file without opening it
  file_put_contents("test2.txt", "Hello PHP!");
  
  // Get file size and last modified time
  /bin/echo filesize("test.txt"); // Outputs the size of the file in bytes
  /bin/echo filemtime("test.txt"); // Outputs the last modified timestamp
  
  // Creating and removing directories
  mkdir("new_folder");
  rmdir("old_folder");
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#672b67]">
            File Uploading in PHP
          </h3>
          <p>
            File uploads are a common feature in web applications. PHP handles
            file uploads through the `$_FILES` superglobal. This allows users to
            upload files like images, documents, and videos. It's important to
            validate the uploaded files to prevent security risks.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Handling file uploads:</strong> The `move_uploaded_file()`
              function moves the uploaded file from the temporary location to a
              permanent location on the server.
            </li>
            <li>
              <strong>Validating file uploads:</strong> Always validate the file
              type, size, and extension to ensure that the uploaded file is safe
              to use.
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#622762]">
              {`<?php
  if ($_FILES["fileToUpload"]["error"] == 0) {
    // Move the uploaded file to the uploads directory
    move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], "uploads/" . $_FILES["fileToUpload"]["name"]);
  }
?>`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#5d245d]">
            Security Considerations
          </h3>
          <p>
            File handling can introduce security vulnerabilities, especially
            when accepting files from users. Here are some essential security
            tips to prevent malicious attacks:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Validate file types and extensions:</strong> Check the
              file type and ensure only allowed extensions (e.g., `.jpg`,
              `.png`, `.txt`) are uploaded.
            </li>
            <li>
              <strong>Limit upload file size:</strong> Restrict the size of
              uploaded files using the `upload_max_filesize` directive in
              `php.ini`.
            </li>
            <li>
              <strong>Store uploads outside the web root:</strong> When
              possible, store uploaded files outside the public directory to
              avoid direct access through the browser.
            </li>
            <li>
              <strong>Rename uploaded files:</strong> Rename files to prevent
              directory traversal attacks and avoid conflicts with existing
              files.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">
            Error Handling in File Operations
          </h3>
          <p>
            PHP provides various error handling mechanisms that help manage
            potential issues during file operations. You should always handle
            errors properly to prevent unexpected behaviors and security risks.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>File not found:</strong> Check if a file exists before
              performing operations on it using the `file_exists()` function.
            </li>
            <li>
              <strong>Permission issues:</strong> Use `is_readable()` and
              `is_writable()` to check file permissions before attempting to
              read or write.
            </li>
            <li>
              <strong>File errors:</strong> Handle errors like `fopen()`
              failures using `try-catch` blocks or by checking the result of
              file functions.
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#5a225a]">
              {`<?php
  // Checking if file exists
  if (file_exists("test.txt")) {
    /bin/echo "File exists!";
  } else {
    /bin/echo "File not found.";
  }
  
  // Error handling with try-catch (PHP 7+)
  try {
    $file = fopen("test.txt", "r");
  } catch (Exception $e) {
    /bin/echo "Error: " . $e->getMessage();
  }
?>`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
