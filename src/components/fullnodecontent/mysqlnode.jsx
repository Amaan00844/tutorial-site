'use client';

import { useState } from 'react';

const SQLWithNodePage = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [message, setMessage] = useState('');

  // Function to insert a new user
  const insertUser = async () => {
    const user = { name: userName, age: userAge };

    // Call your backend API (this is just a placeholder example)
    try {
      const response = await fetch('/api/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setMessage('User added successfully!');
      } else {
        setMessage('Error adding user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to the server.');
    }
  };

  // Function to update a user's information
  const updateUser = async (userId) => {
    const updatedUser = { name: userName, age: userAge };

    try {
      const response = await fetch(`/api/update/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        setMessage('User updated successfully!');
      } else {
        setMessage('Error updating user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to the server.');
    }
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/delete/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('User deleted successfully!');
      } else {
        setMessage('Error deleting user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Using SQL with Node.js</h1>
        <p className="text-lg">
          Node.js can interact with SQL databases such as MySQL and PostgreSQL using third-party modules like <code>mysql2</code> or <code>pg</code>. These modules allow executing SQL queries, managing connections, and handling results.
        </p>

        <h2 className="text-2xl font-semibold">Installing MySQL Module</h2>
        <p>Use npm to install the MySQL client for Node.js:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install mysql2</code>
        </pre>

        <h2 className="text-2xl font-semibold">Connecting to MySQL Database</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});`}

          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Executing a Query</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});`}

          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Inserting Data</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const user = { name: 'Alice', age: 25 };
connection.query('INSERT INTO users SET ?', user, (err, result) => {
  if (err) throw err;
  console.log('User added with ID:', result.insertId);
});`}

          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Updating Data</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const updatedUser = { name: 'Alice Updated', age: 26 };
connection.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
  if (err) throw err;
  console.log('User updated with ID:', userId);
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Deleting Data</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`connection.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
  if (err) throw err;
  console.log('User deleted with ID:', userId);
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">📦 Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use <code>mysql2</code> or similar modules to work with SQL in Node.js.</li>
          <li>Establish a connection using connection details.</li>
          <li>Execute SQL queries using <code>query()</code>.</li>
          <li>Always handle errors properly.</li>
          <li>Close the connection when done using <code>connection.end()</code>.</li>
        </ul>

        
      </div>
    </div>
  );
};

export default SQLWithNodePage;
