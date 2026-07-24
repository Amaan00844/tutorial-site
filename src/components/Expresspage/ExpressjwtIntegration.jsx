"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function ExpressjwtIntegration() {
  useReadingTracker("expressjwt");
  return (
    <div className="ml-72 p-6 text-black">
      <h1 className="text-3xl font-bold mb-6 ">
        JWT Integration in Express.js
      </h1>

      {/* What is JWT */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
          What is JWT?
        </h2>
        <p className="mb-2">
          JWT (JSON Web Token) is a secure, compact, and self-contained way to
          transmit information between parties as a JSON object. It is commonly
          used for authorization in modern web applications.
        </p>
        <p className="mb-2">A JWT has three parts:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Header</strong> – specifies the signing algorithm.
          </li>
          <li>
            <strong>Payload</strong> – contains user data and claims.
          </li>
          <li>
            <strong>Signature</strong> – verifies that the token was not
            altered.
          </li>
        </ul>
      </section>

      {/* Setup Instructions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
          Installing Dependencies
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {`npm install jsonwebtoken dotenv`}
        </pre>
      </section>

      {/* Creating a Token */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
          Generating a JWT
        </h2>
        <p className="mb-2">After successful login, generate a JWT token:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {`const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const user = { id: 1, username: 'admin' };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});`}
        </pre>
      </section>

      {/* Verifying a Token */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
          Protecting Routes
        </h2>
        <p className="mb-2">Use middleware to protect secure endpoints:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {`function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected route
app.get('/dashboard', authenticateToken, (req, res) => {
  res.send('Welcome to the secure dashboard!');
});`}
        </pre>
      </section>

      {/* Storing Secret Keys */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
          Environment Variables
        </h2>
        <p className="mb-2">Store your secret key in a `.env` file:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {`JWT_SECRET=your_super_secret_key`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
          Best Practices for JWT
        </h2>
        <ul className="list-disc pl-6">
          <li>Use strong secret keys and store them securely.</li>
          <li>Set appropriate expiration times.</li>
          <li>Always validate the token on each request.</li>
          <li>
            Never store JWTs in local storage if possible—use HTTP-only cookies.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ExpressjwtIntegration;
