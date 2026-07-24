'use client';

const FileSystemModulePage = () => {
  return (
    <div className="p-8 mx-auto text-black space-y-6">
      <div className="bg-white  max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js File System Module</h1>
        <p className="text-lg">
          The <code>fs</code> module in Node.js provides an API to interact with the file system of your operating system. It allows you to perform file operations such as reading, writing, updating, and deleting files. The <code>fs</code> module is asynchronous by default but also provides synchronous versions of these methods for blocking behavior.
        </p>

        <h2 className="text-2xl font-semibold">Importing the Module</h2>
        <p className="text-lg">
          Before using the <code>fs</code> module, you need to import it into your Node.js application using <code>require()</code>. Once imported, you can access various methods that allow you to manipulate files.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`const fs = require('fs');`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">Create or Overwrite a File</h2>
        <p className="text-lg">
          You can create a new file or overwrite an existing one using the <code>writeFileSync()</code> method. If the file does not exist, it will be created, and if it does exist, it will be replaced with the new content.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`fs.writeFileSync('example.txt', 'Hello from Node.js!');
console.log('File created successfully.');`}
          </code>
        </pre>
        <p className="text-lg">
          In this example, we create a file named <code>example.txt</code> and write the text <code>'Hello from Node.js!'</code> to it. If the file already exists, its content will be overwritten.
        </p>

        <h2 className="text-2xl font-semibold">Read a File</h2>
        <p className="text-lg">
          To read the contents of a file, you can use the <code>readFileSync()</code> method. This method synchronously reads the content of the file and returns it as a string (or a buffer, depending on the encoding).
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const data = fs.readFileSync('example.txt', 'utf8');
console.log('File content:', data);`}
          </code>
        </pre>
        <p className="text-lg">
          In this code, we read the file <code>example.txt</code> and output its contents to the console. The second argument <code>'utf8'</code> ensures that the file is read as a string, rather than as a buffer.
        </p>

        <h2 className="text-2xl font-semibold">Append to a File</h2>
        <p className="text-lg">
          To add more content to an existing file without deleting the previous content, you can use the <code>appendFileSync()</code> method. This method appends data to the end of the file.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`fs.appendFileSync('example.txt', '\\nAppended text!');
console.log('Text appended successfully.');`}
          </code>
        </pre>
        <p className="text-lg">
          In this example, we append the text <code>'Appended text!'</code> to the end of <code>example.txt</code>. The <code>\\n</code> adds a new line before the appended text.
        </p>

        <h2 className="text-2xl font-semibold">Delete a File</h2>
        <p className="text-lg">
          If you need to delete a file, you can use the <code>unlinkSync()</code> method. This method removes the specified file from the filesystem. It is a synchronous operation, so it will block the execution until the file is deleted.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`fs.unlinkSync('example.txt');
console.log('File deleted successfully.');`}
          </code>
        </pre>
        <p className="text-lg">
          In this example, we delete the <code>example.txt</code> file. After this operation, the file is removed from the filesystem, and trying to access it again will throw an error.
        </p>

        <h2 className="text-2xl font-semibold">📦 Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>fs</code> is a core Node.js module that provides methods for interacting with the file system.</li>
          <li>Use <code>writeFileSync()</code> to create or overwrite a file with specified content.</li>
          <li>Use <code>readFileSync()</code> to read the contents of a file synchronously.</li>
          <li>Use <code>appendFileSync()</code> to append content to an existing file without overwriting it.</li>
          <li>Use <code>unlinkSync()</code> to delete a file from the filesystem.</li>
        </ul>
      </div>
    </div>
  );
};

export default FileSystemModulePage;
