import React from "react";

const ApiAuthrization = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          API Authentication in Next.js
        </h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Authentication
          is like a security guard at a club. It checks if you’re on the guest
          list (have the right credentials) before letting you in to access
          special features or data.
          <span className="font-semibold">For Coders:</span> API authentication
          in Next.js verifies user identity in API routes to secure endpoints.
          It ensures only authorized users can access protected resources, using
          methods like JSON Web Tokens (JWT), OAuth, or API keys.
        </p>

        {/* What Is API Authentication */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. What Is API Authentication?
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine
            locking your diary with a key. Only someone with the right key (like
            a password or token) can read it. API authentication makes sure your
            app’s private data stays safe.
            <span className="font-semibold">For Coders:</span> Authentication
            validates user credentials (e.g., username/password, tokens) to
            grant access to API routes. In Next.js, API routes handle
            authentication logic server-side, often integrating with libraries
            like NextAuth.js or custom JWT implementations.
          </p>
        </section>

        {/* Basic Authentication with API Keys */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Basic Authentication with API Keys
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> An API key is
            like a secret password you give to a friend so they can enter your
            treehouse. In Next.js, you can check this key to allow access to
            your API.
            <span className="font-semibold">For Coders:</span> API keys are
            simple tokens passed in request headers to authenticate clients.
            While not as secure as JWT or OAuth, they’re easy for basic use
            cases. Store keys in environment variables for security.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/secure.js (Pages Router)
export default function handler(req, res) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.status(200).json({ message: 'Access granted!' });
}

// app/api/secure/route.js (App Router)
export async function GET(request) {
  const apiKey = request.headers.get('x-api-key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return Response.json({ message: 'Access granted!' });
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code
            checks if the visitor has the right key. If they do, they get a
            “Welcome!” message; if not, they’re turned away.
            <span className="font-semibold">For Coders:</span> The Pages Router
            checks the `x-api-key` header, while the App Router uses
            `request.headers.get`. Store `API_KEY` in a `.env` file. This method
            is simple but limited—use it for low-security scenarios.
          </p>
        </section>

        {/* JWT Authentication */}
        <section className="mb-8 Gloves">
          <h2 className="text-2xl font-semibold mb-4">
            3. JSON Web Token (JWT) Authentication
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> A JWT is like
            a VIP pass that proves who you are. You show it to the app, and it
            lets you access private areas without asking for your ID again.
            <span className="font-semibold">For Coders:</span> JWTs are signed
            tokens containing user data, verified server-side to authenticate
            requests. Use libraries like `jsonwebtoken` to create and verify
            tokens in Next.js API routes.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/login.js (Pages Router)
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    // Dummy check (replace with real database check)
    if (username === 'user' && password === 'pass') {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ token });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.status(405).end('Method Not Allowed');
}

// pages/api/protected.js (Pages Router)
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ message: 'Protected data', user: decoded.username });
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// app/api/login/route.js (App Router)
import jwt from 'jsonwebtoken';

export async function POST(request) {
  const { username, password } = await request.json();
  if (username === 'user' && password === 'pass') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return Response.json({ token });
  }
  return Response.json({ error: 'Invalid credentials' }, { status: 401 });
}

// app/api/protected/route.js (App Router)
import jwt from 'jsonwebtoken';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return Response.json({ message: 'Protected data', user: decoded.username });
  } catch (error) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> The first part
            gives you a VIP pass (token) if you enter the right username and
            password. The second part checks your pass to let you see secret
            info.
            <span className="font-semibold">For Coders:</span> The `/login`
            endpoint generates a JWT with `jwt.sign`. The `/protected` endpoint
            verifies it with `jwt.verify`. Use `process.env.JWT_SECRET` for
            signing. In a real app, validate credentials against a database and
            handle token expiration.
          </p>
        </section>

        {/* OAuth with NextAuth.js */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. OAuth with NextAuth.js
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> OAuth is like
            signing in with your Google or Facebook account. Instead of creating
            a new password, you use an existing account to enter the app safely.
            <span className="font-semibold">For Coders:</span> NextAuth.js
            simplifies OAuth, credentials, and other authentication methods in
            Next.js. It integrates with providers like Google, GitHub, or custom
            databases, handling sessions and tokens automatically.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/..js (Pages Router)
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

// app/./route.js (App Router)
import .from '.;
import GoogleProvider from '.providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const { handlers, auth } = NextAuth(authOptions);

// Client-side usage (e.g., app/protected/page.js)
'use client';
import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <div>Please sign in</div>;

  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code lets
            users sign in with Google, like using a Google ID to enter a club.
            Once they’re in, the app knows who they are and shows their name.
            <span className="font-semibold">For Coders:</span> NextAuth.js sets
            up OAuth with minimal code. Configure providers in
            `[...nextauth].js` (Pages Router) or `route.js` (App Router). Use
            `useSession` for client-side session management. Secure `clientId`
            and `clientSecret` in `.env`. Supports custom credentials and
            database integration.
          </p>
        </section>

        {/* Security Best Practices */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Security Best Practices
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Securing your
            API is like locking your house. Use strong locks (passwords), hide
            your keys (secrets), and check IDs carefully to keep intruders out.
            <span className="font-semibold">For Coders:</span> Follow these
            practices to secure API authentication:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Environment Variables:</strong> Store secrets (e.g.,
              `JWT_SECRET`, API keys) in `.env` files, never hardcode them.
            </li>
            <li>
              <strong>HTTPS:</strong> Ensure all API requests use HTTPS to
              encrypt data in transit.
            </li>
            <li>
              <strong>Input Validation:</strong> Sanitize and validate user
              inputs to prevent injection attacks.
            </li>
            <li>
              <strong>Rate Limiting:</strong> Use middleware like
              `express-rate-limit` to prevent abuse.
            </li>
            <li>
              <strong>Token Expiry:</strong> Set short expiration times for JWTs
              and refresh tokens securely.
            </li>
            <li>
              <strong>CORS:</strong> Configure CORS to restrict API access to
              trusted domains.
            </li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/rate-limited.js (Pages Router with Rate Limiting)
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit to 100 requests per window
});

export default function handler(req, res) {
  limiter(req, res, () => {
    res.status(200).json({ message: 'Rate-limited endpoint' });
  });
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code is
            like a bouncer who says, “You can only visit 100 times every 15
            minutes!” It stops people from overwhelming your app.
            <span className="font-semibold">For Coders:</span> Rate limiting
            protects against DDoS attacks. While `express-rate-limit` works in
            the Pages Router, for App Router, use Vercel’s `@vercel/ratelimit`
            or custom middleware. Always combine multiple security layers for
            robust protection.
          </p>
        </section>

        <p className="italic text-blue-600">
          Next.js API authentication keeps your app secure and user-friendly,
          whether you’re a beginner setting up a simple login or a pro building
          a fortified backend!
        </p>
      </div>
    </div>
  );
};

export default ApiAuthrization;
