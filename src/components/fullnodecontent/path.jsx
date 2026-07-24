'use client';

const PathModulePage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js <code>path</code> Module</h1>
        <p className="text-lg">
          The <code>path</code> module in Node.js provides utilities for working with file and directory paths. 
          It is a core module in Node.js, meaning that it comes pre-installed with Node.js, so there’s no need to install it.
        </p>

        <h2 className="text-2xl font-semibold"> Importing the Module</h2>
        <p>The <code>path</code> module can be imported using the <code>require</code> function. Here's how to do it:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`const path = require('path');`}</code>
        </pre>

        <h2 className="text-2xl font-semibold"> Common Methods</h2>
        <p>Below are some of the commonly used methods in the <code>path</code> module:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>path.basename(p)</code> – This method returns the last portion of a given path. For example, it extracts the filename from a full path.</li>
          <li><code>path.dirname(p)</code> – This method returns the directory name of the provided path, essentially extracting the folder path without the filename.</li>
          <li><code>path.extname(p)</code> – This method returns the extension of the file, such as <code>.txt</code>, <code>.jpg</code>, or <code>.pdf</code>.</li>
          <li><code>path.join(...paths)</code> – This method is used to join all given path segments together, ensuring proper handling of directory separators across platforms.</li>
          <li><code>path.resolve(...paths)</code> – This method resolves a sequence of paths into an absolute path. It combines a series of paths into a single absolute path, starting from the current directory or from the root of the file system.</li>
        </ul>

        <h2 className="text-2xl font-semibold"> Example</h2>
        <p>Here's a simple example demonstrating the use of some common methods:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const path = require('path');

const filePath = '/users/shiri/documents/report.pdf';

// Extract the base name (file name) from the full path
console.log('Base name:', path.basename(filePath)); // report.pdf

// Extract the directory name (path excluding the file)
console.log('Directory name:', path.dirname(filePath)); // /users/shiri/documents

// Get the extension of the file
console.log('Extension:', path.extname(filePath)); // .pdf

// Join multiple path segments into a single path
console.log('Joined path:', path.join('/users', 'shiri', 'notes.txt')); 
// /users/shiri/notes.txt

// Resolve a relative path to an absolute path
console.log('Resolved path:', path.resolve('folder', 'file.txt'));
// /current/working/directory/folder/file.txt (absolute path)`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold"> Summary</h2>
        <p>Here’s a brief recap of the key points:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The <code>path</code> module provides various utilities for working with and manipulating file and directory paths.</li>
          <li>It ensures consistent behavior across different operating systems, especially when working with file separators (e.g., <code>/</code> vs <code>\</code>).</li>
          <li>No installation is required as it is a core Node.js module, making it available out of the box.</li>
        </ul>

        <p>Whether you're working with file paths, directory structures, or need to resolve file locations, the <code>path</code> module will help make the process easier and more efficient.</p>
      </div>
    </div>
  );
};

export default PathModulePage;
