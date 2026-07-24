'use client';

const StreamModulePage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white p-8 max-w-4xl rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js <code>stream</code> Module</h1>
        <p className="text-lg">
          The <code>stream</code> module in Node.js is used to handle streaming data. Streams are instances of the 
          <code>EventEmitter</code> class and can be classified into different types based on whether they allow 
          reading, writing, or both. They are fundamental for dealing with large data in Node.js, especially when 
          the data is too large to be loaded all at once into memory.
        </p>

        <h2 className="text-2xl font-semibold"> Types of Streams</h2>
        <p>There are four primary types of streams in Node.js:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Readable:</strong> Streams from which data can be read. These streams emit data events that can be consumed. An example is <code>fs.createReadStream</code>, which reads data from a file.</li>
          <li><strong>Writable:</strong> Streams to which data can be written. These streams emit events like <code>finish</code> once the data is written. For example, <code>fs.createWriteStream</code> writes data to a file.</li>
          <li><strong>Duplex:</strong> A combination of both readable and writable streams. These streams can both read and write data. A typical example is a TCP socket, which can both send and receive data.</li>
          <li><strong>Transform:</strong> A type of duplex stream that modifies the data as it’s being written and read. For example, <code>zlib.createGzip</code> is a transform stream that compresses data while reading it and writing it to a different location.</li>
        </ul>

        <h2 className="text-2xl font-semibold"> Example: Reading and Writing with Streams</h2>
        <p>In the following example, we demonstrate how to read from one file and write to another using streams:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const fs = require('fs');

// Create a readable stream
const reader = fs.createReadStream('input.txt');

// Create a writable stream
const writer = fs.createWriteStream('output.txt');

// Pipe the read and write operations
reader.pipe(writer);

console.log('File copied using streams.');`}
          </code>
        </pre>
        <p>
          In this example:
          <ul className="list-disc pl-6 space-y-2">
            <li><code>createReadStream()</code> is used to open the file for reading.</li>
            <li><code>createWriteStream()</code> is used to open the file for writing.</li>
            <li><code>pipe()</code> connects the readable and writable streams, so that data is automatically read from <code>input.txt</code> and written to <code>output.txt</code>.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold"> Using Events with Streams</h2>
        <p>Streams also emit events that can be handled to track the state of the stream. Below is an example showing how to handle the <code>data</code> and <code>end</code> events:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`reader.on('data', (chunk) => {
  console.log('Received chunk:', chunk.toString());
});

reader.on('end', () => {
  console.log('Read completed.');
});`}
          </code>
        </pre>
        <p>
          In this example:
          <ul className="list-disc pl-6 space-y-2">
            <li><code>'data'</code>: This event is emitted whenever a chunk of data is available to be processed from the readable stream. The chunk is passed as an argument to the callback function.</li>
            <li><code>'end'</code>: This event is emitted when the readable stream has no more data to emit, signaling that the reading process is completed.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold"> Summary</h2>
        <p>Here’s a quick recap of the important points about streams in Node.js:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Streams allow you to handle large data efficiently by processing it in chunks, which reduces memory consumption.</li>
          <li>Streams can be chained using <code>pipe()</code>, which helps to process data from one stream and send it to another stream seamlessly.</li>
          <li>Streams are event-driven, meaning they emit events like <code>data</code>, <code>end</code>, and <code>error</code> that allow you to react to the progress and completion of stream operations.</li>
        </ul>

        <p>
          Whether you're reading from a file, writing to a file, or manipulating data on the fly, streams are a crucial tool for efficient data handling in Node.js.
        </p>
      </div>
    </div>
  );
};

export default StreamModulePage;
