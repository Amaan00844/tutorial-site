"use client";

const NodeIntroPage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js Introduction</h1>
        <p className="text-lg">What is Node.js?</p>
        <p>
          Node.js is an open-source, cross-platform JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser. Unlike traditional client-side JavaScript
          (which runs within the browser), Node.js allows JavaScript to be
          executed on the server-side, enabling developers to build full-stack
          applications using a single language.
        </p>

        <h2 className="text-2xl font-semibold">Why Use Node.js?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Fast execution powered by Google Chrome's V8 engine, making it ideal
            for performance-intensive applications.
          </li>
          <li>
            Uses a non-blocking, event-driven architecture, allowing Node.js to
            handle numerous concurrent connections efficiently.
          </li>
          <li>
            Ideal for building scalable network applications, as it can handle
            many requests without the need for multiple threads.
          </li>
          <li>
            Single programming language (JavaScript) for both frontend and
            backend, streamlining development for full-stack JavaScript
            applications.
          </li>
          <li>
            Large ecosystem of open-source packages available through npm (Node
            Package Manager), making it easy to add new functionality to
            applications.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Features of Node.js</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Asynchronous and Event Driven:</strong> Node.js uses
            non-blocking I/O calls, meaning it can handle many operations at the
            same time without waiting for any one operation to complete before
            moving on.
          </li>
          <li>
            <strong>Very Fast:</strong> Node.js is built on Google Chrome’s V8
            JavaScript engine, making it extremely fast when executing code.
          </li>
          <li>
            <strong>Single Threaded but Highly Scalable:</strong> Node.js runs
            on a single thread using an event loop, which allows it to handle
            thousands of concurrent connections efficiently without the need for
            multi-threading.
          </li>
          <li>
            <strong>No Buffering:</strong> Data is streamed and processed in
            chunks, rather than being buffered. This makes it highly suitable
            for real-time applications like streaming video or audio.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Where is Node.js Used?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Real-time web applications (e.g., chat apps, live notifications)
          </li>
          <li>Building RESTful APIs and backend services</li>
          <li>
            Single-page applications (SPAs) that require asynchronous data
            updates
          </li>
          <li>Streaming applications (e.g., media streaming platforms)</li>
          <li>
            IoT and embedded systems that require lightweight, real-time
            processing
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Simple HTTP Server</h2>
        <p>
          Here's an example of how you can create a simple HTTP server in
          Node.js:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is your Node.js HTTP server!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on https://skill2future.code4bharat.com');
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">📦 Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Node.js is an open-source JavaScript runtime that allows JavaScript
            to be used on the server-side.
          </li>
          <li>
            It provides fast execution with an event-driven architecture, ideal
            for building scalable network applications.
          </li>
          <li>
            Node.js is widely used for real-time applications, APIs, and even
            IoT projects due to its high performance and scalability.
          </li>
        </ul>

        <p className="italic text-blue-300">
          Run the example in a terminal using <code>node filename.js</code> to
          see it in action!
        </p>
      </div>
    </div>
  );
};

export default NodeIntroPage;
