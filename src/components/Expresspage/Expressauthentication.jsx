"use client"; // This tells Next.js to run this component in the browser, so we can use special tools like hooks

import useReadingTracker from "@/components/useReadingTracker";

function Expressauthentication() {
  useReadingTracker("expressauth"); // This tracks that you visited this page
  return (
    <div className="p-6 ml-72">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Learn Authentication in Express.js
      </h1>

      {/* Introduction */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            What is Authentication?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Imagine you're entering a private club. The bouncer checks your ID
            to make sure you're allowed in. Authentication is like that bouncer
            for your web app—it checks if a user is who they say they are.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            In Express.js (a tool for building web apps), we use authentication
            to let users log in securely. We'll learn two popular ways to do
            this: <strong>JWT</strong> (like a special ticket) and{" "}
            <strong>Passport.js</strong> (like a super-smart bouncer who knows
            lots of ways to check IDs).
          </p>
        </section>

        {/* Getting Started */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Your First Step: Setting Up a Login
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Let’s start by creating a simple login system. When a user logs in,
            we give them a "ticket" to access special parts of the app. This
            ticket is called a <strong>JWT</strong> (JSON Web Token), and it’s
            like a secure pass that proves they’re allowed in.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Here’s what we need to do:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              Create a login page where users enter their username and password.
            </li>
            <li>Give them a JWT if their details are correct.</li>
            <li>
              Protect special pages so only users with a valid JWT can see them.
            </li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            First, install a tool called <code>jsonwebtoken</code> to create and
            check JWTs. Think of it as a ticket-making machine.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">npm install jsonwebtoken</code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            Now, let’s write code to create a login system. This code goes in
            your Express server file (like <code>app.js</code>), not in your
            React app. Don’t worry if it looks complicated—we’ll explain every
            part!
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`/* eslint-disable */ // Ignore linting for this example code
// Load the ticket-making tool
const jwt = require('jsonwebtoken');

// This is your login door
app.post('/login', (req, res) => {
  // Imagine checking if the username and password are correct
  const user = { id: 1, username: 'admin' }; // Pretend we found this user
  // Create a JWT ticket, signed with a secret password ('secretKey')
  const token = jwt.sign(user, 'secretKey', { expiresIn: '1h' });
  // Send the ticket to the user
  res.json({ token });
});
/* eslint-enable */
`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            <strong>What’s happening here?</strong>
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              <code>const jwt = require('jsonwebtoken')</code>: Loads the tool
              to make JWT tickets.
            </li>
            <li>
              <code>app.post('/login')</code>: This creates a login page users
              can visit.
            </li>
            <li>
              <code>user</code>: We pretend we found a user (in a real app,
              you’d check a database).
            </li>
            <li>
              <code>jwt.sign</code>: This makes a secure JWT ticket that expires
              in 1 hour.
            </li>
          </ul>
        </section>

        {/* Protecting Routes */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Guarding Your Pages
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Now that users have a JWT ticket, we need a way to check it before
            letting them into private pages, like a dashboard. We’ll create a
            “bouncer” function to check the ticket.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`/* eslint-disable */ // Ignore linting for this example code
// The bouncer who checks JWT tickets
function checkTicket(req, res, next) {
  // Look for the ticket in the request
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get just the ticket part
  // No ticket? Send them away
  if (!token) return res.sendStatus(401); // 401 means "Not allowed"
  // Check if the ticket is valid
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403); // 403 means "Bad ticket"
    req.user = user; // Save the user info
    next(); // Let them in
  });
}

// A private page only ticket-holders can see
app.get('/dashboard', checkTicket, (req, res) => {
  res.send('Welcome to your private dashboard!');
});
/* eslint-enable */
`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Let’s break it down:</strong>
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              <code>checkTicket</code>: This is our bouncer function that checks
              the JWT.
            </li>
            <li>
              <code>req.headers['authorization']</code>: Looks for the ticket in
              the request (like checking a pass at the door).
            </li>
            <li>
              <code>jwt.verify</code>: Makes sure the ticket is real and not
              expired.
            </li>
            <li>
              <code>app.get('/dashboard', checkTicket, ...)</code>: Only lets
              users with a valid ticket see the dashboard.
            </li>
          </ul>
        </section>

        {/* Passport.js for Beginners */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Another Way: Passport.js
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            JWT is great, but what if you want to let users log in with their
            Google or Facebook accounts? That’s where{" "}
            <strong>Passport.js</strong> comes in. It’s like a super-smart
            bouncer who knows how to check all kinds of IDs, not just JWT
            tickets.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Let’s try a simple example where users log in with a username and
            password (called a “local strategy”).
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`/* eslint-disable */ // Ignore linting for this example code
// Tell Express to use Passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Set up the local strategy (username/password)
passport.use(new LocalStrategy((username, password, done) => {
  // Pretend we check a database
  if (username === 'admin' && password === '1234') {
    return done(null, { id: 1, username: 'admin' }); // Success!
  } else {
    return done(null, false, { message: 'Wrong username or password.' });
  }
}));
/* eslint-enable */
`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            <strong>What’s going on?</strong>
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              <code>passport.use</code>: Tells Passport how to check usernames
              and passwords.
            </li>
            <li>
              <code>LocalStrategy</code>: This is the rule for checking
              username/password logins.
            </li>
            <li>
              <code>done</code>: Says whether the login worked or not.
            </li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            To use this, you’d also need to add Passport to your app and set up
            login routes, but this shows the basic idea. Passport can also
            handle Google, Facebook, and other logins with similar setups.
          </p>
        </section>

        {/* Keeping It Safe */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Keeping Authentication Safe
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Authentication is about keeping your app secure, so let’s follow
            some important safety rules:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              <strong>Never store passwords as plain text</strong>: Use a tool
              like <code>bcrypt</code> to scramble passwords so they’re
              unreadable.
            </li>
            <li>
              <strong>Keep JWTs safe</strong>: Store them in a special kind of
              cookie (called HTTP-only) that hackers can’t steal.
            </li>
            <li>
              <strong>Use HTTPS</strong>: This encrypts data sent between the
              user and your app, like a secret tunnel.
            </li>
            <li>
              <strong>Stop hackers from guessing passwords</strong>: Limit how
              many times someone can try to log in (called rate limiting).
            </li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            Here’s how to scramble a password with <code>bcrypt</code>:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`/* eslint-disable */ // Ignore linting for this example code
const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash('myPassword', saltRounds, (err, hash) => {
  // Save 'hash' in your database, not the password!
});
/* eslint-enable */
`}
            </code>
          </pre>
        </section>

        {/* Advanced: Putting It All Together */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Advanced: Building a Full System
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Now that you know the basics, let’s put it all together for a
            complete authentication system. Here’s what a real app might look
            like:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              Users sign up with a username and password (scrambled with{" "}
              <code>bcrypt</code>).
            </li>
            <li>They log in and get a JWT ticket.</li>
            <li>The app checks the JWT for private pages.</li>
            <li>Optionally, let users log in with Google using Passport.js.</li>
            <li>Add safety features like HTTPS and rate limiting.</li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            Here’s a complete example (don’t worry about copying it yet—just see
            how it fits together):
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-yellow-600">
              {`/* eslint-disable */ // Ignore linting for this example code
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

// Sign-up
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save username and hashedPassword in database
  res.send('User created!');
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Find user in database
  const user = { id: 1, username }; // Pretend we found them
  const valid = await bcrypt.compare(password, hashedPassword);
  if (!valid) return res.sendStatus(401);
  const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});

// Protect a page
function checkTicket(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/dashboard', checkTicket, (req, res) => {
  res.send(\`Welcome, user \${req.user.id}!\`);
});

app.listen(3000, () => console.log('Server running'));
/* eslint-enable */
`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            This code creates a full system with sign-up, login, and a protected
            dashboard. You can build on this by adding more features like Google
            login or password recovery.
          </p>
        </section>

        {/* Practice Time */}
        <section className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Try It Yourself!
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Ready to practice? Try these challenges to test what you’ve learned:
          </p>
          <ol className="list-decimal pl-6 text-gray-800 space-y-2 mb-4">
            <li>
              Create a login page that gives a JWT when you enter “admin” and
              “1234”.
            </li>
            <li>
              Make a private page that only shows a message if you have a valid
              JWT.
            </li>
            <li>
              Scramble a password with <code>bcrypt</code> and print the result.
            </li>
            <li>(Advanced) Add a Google login button using Passport.js.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Expressauthentication;
