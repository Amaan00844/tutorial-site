"use client";

const HttpModulePage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        {" "}
        {/* Updated to shadow-xl for a more pronounced shadow */}
        <h1 className="text-4xl font-bold">Node.js HTTP Module</h1>
        <p className="text-lg">
          The <code>http</code> module in Node.js is used to create web servers
          and make HTTP requests. It allows you to handle HTTP requests and
          responses easily.
        </p>
        <h2 className="text-2xl font-semibold">Creating an HTTP Server</h2>
        <p className="text-lg">
          You can create a simple HTTP server using the <code>http</code>{" "}
          module. Here's an example:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a Node.js HTTP server!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on https://skill2future.code4bharat.com');
});`}
          </code>
        </pre>
        <h2 className="text-2xl font-semibold">Making HTTP Requests</h2>
        <p className="text-lg">
          You can also make HTTP requests using the <code>http</code> module.
          Here’s an example of making a simple GET request:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`const http = require('http');

http.get('http://example.com', (response) => {
  let data = '';

  // A chunk of data has been received.
  response.on('data', (chunk) => {
    data += chunk;
  });

  // The response has been fully received.
  response.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});`}
          </code>
        </pre>
        <h2 className="text-2xl font-semibold">Creating a Basic API</h2>
        <p className="text-lg">
          You can also build a simple API using the <code>http</code> module.
          Here's an example of how you can create endpoints:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/greet') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('API is running on https://skill2future.code4bharat.com');
});`}
          </code>
        </pre>
        <h2 className="text-2xl font-semibold">📦 Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The <code>http</code> module is used for creating servers and making
            HTTP requests.
          </li>
          <li>
            You can create a server using <code>http.createServer()</code> and
            listen for requests.
          </li>
          <li>
            To make HTTP requests, use methods like <code>http.get()</code>.
          </li>
          <li>
            You can build APIs by handling different routes and sending
            appropriate responses.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HttpModulePage;
