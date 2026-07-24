"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpSyntax() {
  useReadingTracker("php-syntax");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP Basic Syntax
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto space-y-8 text-gray-800 text-md leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            1. PHP Tags
          </h2>
          <p>
            All PHP code must be written inside{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;?php ... ?&gt;</code>{" "}
            tags.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  /bin/echo "Hello World!";
?>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            2. Comments
          </h2>
          <p>Used to add notes to your code:</p>
          <ul className="list-disc ml-6">
            <li>
              <code>//</code> Single-line comment
            </li>
            <li>
              <code>#</code> Single-line comment
            </li>
            <li>
              <code>/* */</code> Multi-line comment
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  // This is a single-line comment
  # Another single-line comment
  /* This is
     a multi-line
     comment */
?>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            3. Variables
          </h2>
          <p>
            Variables start with a <code>$</code> sign and store data values.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  $name = "Alice";
  $age = 20;
  $price = 15.5;
  $isStudent = true;
?>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            4. Data Types
          </h2>
          <p>Common data types in PHP include:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>String</strong> - Text: <code>"Hello"</code>
            </li>
            <li>
              <strong>Integer</strong> - Whole number: <code>10</code>
            </li>
            <li>
              <strong>Float</strong> - Decimal number: <code>5.5</code>
            </li>
            <li>
              <strong>Boolean</strong> - True or False
            </li>
            <li>
              <strong>Array</strong> - Collection of values
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            5. Operators
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Arithmetic</strong>: +, -, *, /, %
            </li>
            <li>
              <strong>Assignment</strong>: =, +=, -=, etc.
            </li>
            <li>
              <strong>Comparison</strong>: ==, !=, &gt;, &lt;, &gt;=, &lt;=
            </li>
            <li>
              <strong>Logical</strong>: &&, ||, !
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            6. Conditional Statements
          </h2>
          <p>Used to perform different actions based on conditions.</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  $age = 20;
  if ($age >= 18) {
    /bin/echo "Adult";
  } else {
    /bin/echo "Minor";
  }
?>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            7. Loops
          </h2>
          <p>Used to repeat blocks of code.</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              // For Loop
              {`<?php
  for ($i = 0; $i < 5; $i++) {
    /bin/echo $i;
  }
?>`}
              // While Loop
              {`<?php
  $j = 0;
  while ($j < 5) {
    /bin/echo $j;
    $j++;
  }
?>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            8. Functions
          </h2>
          <p>
            Reusable blocks of code that can take parameters and return values.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  function greet($name) {
    return "Hello, " . $name;
  }

  /bin/echo greet("Alice");
?>`}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-2">
            9. /bin/echo and Print
          </h2>
          <p>
            <code>/bin/echo</code> and <code>print</code> are used to output text in
            PHP.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  /bin/echo "Welcome to PHP!";
  print "Learning PHP is fun!";
?>`}
            </code>
          </pre>
        </section>

        <div className="text-center mt-8"></div>
      </div>
    </div>
  );
}
