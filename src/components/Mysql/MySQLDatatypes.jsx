"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLDatatypes() {
  useReadingTracker("mysqldatatypes");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        MySQL Data Types
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        MySQL data types define the kind of data a column can store—whether it's
        a number, text, or date/time value. Choosing the right data type helps
        ensure data accuracy, saves storage space, and improves query
        performance. Let's dive deep into each type, explore real-world use
        cases, and see practical examples.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
          1. Numeric Data Types
        </h2>
        <div className="text-gray-800 space-y-4 text-md leading-relaxed">
          <p>
            **Definition:** Numeric data types store numbers. These can be whole
            numbers, decimals, or floating-point numbers.
          </p>
          <p>
            **Types & Usage:** - <b>INT</b>: Stores whole numbers, e.g., `age`,
            `quantity`, or `employee_id`.
            <br />
            <i>Example:</i> `age INT` can store values like 18, 30, 65.
            <br />
            <i>Real-world:</i> Used for storing number of items in stock in an
            inventory system. - <b>DECIMAL(M,D)</b>: Stores exact numbers with
            decimal places.
            <br />
            <i>Example:</i> `price DECIMAL(8,2)` stores values like 9999.99.
            <br />
            <i>Real-world:</i> Perfect for storing money values in an e-commerce
            site. - <b>FLOAT</b> and <b>DOUBLE</b>: Stores approximate decimal
            values.
            <br />
            <i>Real-world:</i> Useful for scientific calculations, like storing
            weight or temperature.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
          2. String (Text) Data Types
        </h2>
        <div className="text-gray-800 space-y-4 text-sm leading-relaxed">
          <p>
            **Definition:** String types store text, such as names, emails, or
            descriptions.
          </p>
          <p>
            **Types & Usage:** - <b>VARCHAR(n)</b>: Stores variable-length
            strings.
            <br />
            <i>Example:</i> `email VARCHAR(100)` for storing user emails.
            <br />
            <i>Real-world:</i> Usernames, product titles. - <b>CHAR(n)</b>:
            Stores fixed-length strings.
            <br />
            <i>Example:</i> `country_code CHAR(2)` for values like "IN", "US".
            <br />
            <i>Real-world:</i> Used when all entries have same length, like
            two-letter country codes. - <b>TEXT</b>: Stores long text like
            reviews or article content.
            <br />
            <i>Example:</i> `bio TEXT`.
            <br />
            <i>Real-world:</i> Blog posts, product descriptions.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
          3. Date and Time Data Types
        </h2>
        <div className="text-gray-800 space-y-4 text-sm leading-relaxed">
          <p>**Definition:** These types store date, time, or both.</p>
          <p>
            **Types & Usage:** - <b>DATE</b>: Stores date in `YYYY-MM-DD`
            format.
            <br />
            <i>Example:</i> `birth_date DATE`.
            <br />
            <i>Real-world:</i> Used in birth certificates or appointment
            records. - <b>DATETIME</b>: Stores date and time.
            <br />
            <i>Example:</i> `order_time DATETIME`.
            <br />
            <i>Real-world:</i> E-commerce order timestamps. - <b>TIMESTAMP</b>:
            Similar to `DATETIME`, auto-updates on record changes.
            <br />
            <i>Real-world:</i> Used in logging systems for `last_updated`.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
          4. Example Table: Employees
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-700">
            {`CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  salary DECIMAL(10,2),
  hire_date DATE,
  bio TEXT
);`}
          </code>
        </pre>
        <p className="text-sm mt-2">
          - `id`: Auto-incremented unique ID.
          <br />
          - `first_name`: Stores employee’s name.
          <br />
          - `salary`: Precision decimal value to store salary.
          <br />
          - `hire_date`: Joining date of the employee.
          <br />- `bio`: Long description or profile info.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
          5. Best Practices
        </h2>
        <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
          <li>Use the smallest data type possible to optimize storage.</li>
          <li>
            Choose `DECIMAL` over `FLOAT` for financial data to maintain
            precision.
          </li>
          <li>Prefer `VARCHAR` for names, emails, and flexible text input.</li>
          <li>
            Avoid using `TEXT` unless necessary—it is slower for searches.
          </li>
          <li>Use `DATE` or `DATETIME` instead of storing dates as strings.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
          6. Real-World Scenario: Products Table
        </h2>
        <p className="text-sm mb-2">
          Let’s create a table for an online store:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="text-cyan-700">
            {`CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(8,2),
  release_date DATE
);

INSERT INTO products (name, price, release_date)
VALUES 
  ('Smartphone X', 499.99, '2025-01-15'),
  ('Wireless Earbuds', 149.50, '2025-02-10');`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-cyan-700 mt-6 mb-4">
          7. Summary
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          MySQL offers a range of data types suitable for different kinds of
          data. The choice of data type affects accuracy, storage, and
          performance. A clear understanding of data types helps you design
          efficient and scalable databases.
        </p>
      </div>
    </div>
  );
}
