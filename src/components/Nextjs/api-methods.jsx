import React from 'react';

const NextApiMethods = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Understanding Next.js API Routes</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Think of an API route as a waiter in a restaurant who takes your order (a request) and brings you food (data) from the kitchen. In Next.js, API routes let your app talk to other parts of the internet or handle tasks like saving or fetching information.  
          <span className="font-semibold">For Coders:</span> Next.js API routes allow you to create server-side endpoints within your Next.js application. These are Node.js functions that handle HTTP requests (GET, POST, etc.) and return responses, ideal for building backends without a separate server.
        </p>

        {/* What Are API Routes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Next.js API Routes?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine your app as a store. API routes are like the cashier who handles requests, such as checking if an item is in stock or processing a payment. They help your app do things behind the scenes.  
            <span className="font-semibold">For Coders:</span> API routes are serverless functions defined in the `/pages/api` directory (Pages Router) or `/app/api` (App Router). Each file exports a handler function that processes HTTP requests and sends JSON responses. They’re built on Node.js and support middleware, authentication, and database integration.
          </p>
        </section>

        {/* Creating a Basic API Route */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Creating a Basic API Route</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Creating an API route is like setting up a phone number for your app. When someone calls (sends a request), the app answers with the right information, like a list of products.  
            <span className="font-semibold">For Coders:</span> Create a file in `/pages/api` (or `/app/api/route.js` for App Router). Export a default function that handles requests and returns responses. The function receives `req` (request) and `res` (response) objects.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/hello.js (Pages Router)
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API!' });
}

// app/api/hello/route.js (App Router)
export async function GET() {
  return Response.json({ message: 'Hello from Next.js API!' });
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code is like a simple note that says, “Hi, I’m working!” When someone visits this API, they get that message.  
            <span className="font-semibold">For Coders:</span> In the Pages Router, the handler function uses `res.status` and `res.json` to send responses. In the App Router, HTTP methods like `GET` are exported as functions, and responses are returned using `Response.json`. Test it at `/api/hello`.
          </p>
        </section>

        {/* Handling HTTP Methods */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Handling HTTP Methods (GET, POST, etc.)</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> HTTP methods are like different types of orders at a café. A GET order asks for the menu, a POST order sends a new recipe to the kitchen, and so on. API routes can handle all these orders.  
            <span className="font-semibold">For Coders:</span> API routes support HTTP methods like GET, POST, PUT, DELETE, etc. In the Pages Router, check `req.method` to handle them. In the App Router, export separate functions for each method (`GET`, `POST`, etc.).
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/users.js (Pages Router)
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch users (e.g., from a database)
    res.status(200).json([{ id: 1, name: 'John Doe' }]);
  } else if (req.method === 'POST') {
    // Create a new user
    const { name } = req.body;
    res.status(201).json({ id: 2, name });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
  }
}

// app/api/users/route.js (App Router)
export async function GET() {
  // Fetch users
  return Response.json([{ id: 1, name: 'John Doe' }]);
}

export async function POST(request) {
  // Create a new user
  const { name } = await request.json();
  return Response.json({ id: 2, name }, { status: 201 });
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code is like a cashier who can either show you a list of customers (GET) or add a new customer (POST). It only accepts those two types of requests.  
            <span className="font-semibold">For Coders:</span> The Pages Router uses a switch-like structure with `req.method`. The App Router separates methods into distinct exports, improving readability. Use `request.json()` to parse POST data and set appropriate status codes (e.g., 201 for creation).
          </p>
        </section>

        {/* Advanced Use Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Advanced API Route Features</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> API routes can do fancy things, like checking if you’re allowed to order (authentication), talking to a database, or handling big tasks like sending emails.  
            <span className="font-semibold">For Coders:</span> API routes support middleware (e.g., for authentication), database integration (e.g., Prisma, MongoDB), and external API calls. Use environment variables for sensitive data and handle errors gracefully.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/secure.js (Pages Router with Authentication)
export default function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== 'Bearer my-secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    // Fetch secure data
    res.status(200).json({ data: 'Secure information' });
  } else {
    res.status(405).end('Method Not Allowed');
  }
}

// app/api/secure/route.js (App Router with Database)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { title } = await request.json();
    const newPost = await prisma.post.create({
      data: { title },
    });
    return Response.json(newPost, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code is like a VIP section. The first part checks if you have a special pass (token) to get in. The second part saves a new blog post to a database, like adding a new dish to the menu.  
            <span className="font-semibold">For Coders:</span> The Pages Router example uses a simple token-based authentication check. The App Router example integrates Prisma for database operations. Always validate inputs, use try-catch for error handling, and secure sensitive endpoints.
          </p>
        </section>

        {/* Choosing When to Use API Routes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. When to Use API Routes</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Use API routes when your app needs to:
            - Get or save information (like a shopping list).
            - Talk to other services (like a weather app).
            - Keep things secure (like a locked diary).  
            <span className="font-semibold">For Coders:</span> Use API routes for:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Backend Logic:</strong> Handle form submissions, user authentication, or database queries.</li>
            <li><strong>Third-Party Integration:</strong> Proxy requests to external APIs to hide keys or simplify responses.</li>
            <li><strong>Serverless Functions:</strong> Run lightweight backend tasks without managing a separate server.</li>
            <li><strong>App Router:</strong> Use route handlers for cleaner method-specific logic and better TypeScript support.</li>
          </ul>
          <p className="mb-4">
            <span className="font-semibold">Note:</span> For complex backends, consider dedicated frameworks like Express or NestJS, but API routes are perfect for most Next.js apps.
          </p>
        </section>

        <p className="italic text-blue-600">
          Next.js API routes make it easy to build powerful backends, whether you’re just starting out or crafting advanced serverless applications!
        </p>
      </div>
    </div>
  );
};

export default NextApiMethods;