"use client";

const NextApiRoutesPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">API Routes in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Think of API Routes like a friendly librarian who takes your request for a book, finds it in the library, and hands it to you. They connect your app to information or actions.  
          <span className="font-semibold">For Coders:</span> API Routes in Next.js enable server-side logic within your app, turning files in the <code>/pages/api</code> or <code>/app/api</code> directory into serverless endpoints.
        </p>

        {/* What are API Routes? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are API Routes?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine API Routes as a magic mailbox. You send a message (like asking for data), and it replies with what you need, all within your app.  
            <span className="font-semibold">For Coders:</span> API Routes let you create backend functionality in Next.js without a separate server. Each file in <code>/pages/api</code> (or <code>/app/api</code> in the App Router) becomes an HTTP endpoint, handling requests and responses.
          </p>
        </section>

        {/* Basic Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Basic Example: Hello API</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Picture a note you send to the librarian saying, “Say hello!” She writes back, “Hello from the library!” This is how an API route works.  
            <span className="font-semibold">For Coders:</span> Below is a simple API route that responds with a JSON message when accessed via a GET request.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/hello.js (or app/api/hello/route.js in App Router)
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from the server!" });
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Coders:</span> Visiting <code>/api/hello</code> triggers this function, returning a 200 status and a JSON response. In the App Router, use <code>app/api/hello/route.js</code> with <code>export async function GET(req)</code>.
          </p>
        </section>

        {/* API Routes Analogy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. API Route as a Librarian</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> An API Route is like a librarian who listens to what you want (like a book title), searches the library (or other places), and brings you the answer.  
            <span className="font-semibold">For Coders:</span> API Routes handle HTTP requests (GET, POST, etc.), process logic, interact with databases or external services, and return responses, all within Next.js’s serverless environment.
          </p>
        </section>

        {/* Handling Methods */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Handling Different Requests (GET, POST)</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> The librarian can handle different requests. A “GET” is like asking for a book; a “POST” is like giving her a new book to store.  
            <span className="font-semibold">For Coders:</span> API Routes can process various HTTP methods. The <code>req.method</code> property determines the request type, allowing different logic for each.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/data.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Here is your data' });
  } else if (req.method === 'POST') {
    const data = req.body;
    res.status(200).json({ message: 'Data saved', data });
  }
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Coders:</span> This route responds to GET with a message and to POST by /bin/echoing the request body. In App Router, use <code>export async function POST(req)</code> for method-specific handlers.
          </p>
        </section>

        {/* When to Use API Routes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. When Should You Use API Routes?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Use API Routes when your app needs to fetch information (like a weather report), save user input (like a form), or talk to other services.  
            <span className="font-semibold">For Coders:</span> API Routes are ideal for:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Querying databases (e.g., MongoDB, PostgreSQL)</li>
            <li>Handling form submissions or user inputs</li>
            <li>Integrating with third-party APIs (e.g., payment gateways)</li>
            <li>Server-side logic without a dedicated backend</li>
          </ul>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Advanced Concepts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Advanced API Routes are like a librarian who checks your library card, organizes books, and handles mistakes gracefully.  
            <span className="font-semibold">For Coders:</span> Key advanced features include:
            - **Authentication:** Secure routes using tokens or middleware (e.g., NextAuth.js).  
            - **Database Integration:** Connect to databases via ORMs like Prisma or direct queries.  
            - **Error Handling:** Validate inputs and return meaningful errors.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/api/greet.js
export default function handler(req, res) {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Name is required");
    res.status(200).json({ message: \`Hello, \${name}!\` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Coders:</span> This route checks for a <code>name</code> in the POST body, responds with a greeting, or throws a 400 error if invalid. Use middleware like <code>next-connect</code> for complex routes.
          </p>
        </section>

        <p className="italic text-blue-300">
          API Routes make your Next.js app powerful by handling backend tasks seamlessly, whether you’re a beginner or a pro!
        </p>
      </div>
    </div>
  );
};

export default NextApiRoutesPage;