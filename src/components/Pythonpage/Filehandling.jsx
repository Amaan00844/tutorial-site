import React from 'react';

const Filehandling = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">File Handling in Python</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          File handling means working with files—opening them, reading data from them, writing data to them, and closing them. 
          Python makes this task easy by providing built-in functions to work with both text and binary files.
        </p>

        <p className="mt-2 text-lg text-gray-600">
          <strong>Real-world example:</strong> Suppose you’re building a student management system. Instead of printing student details every time, 
          you can store them in a file and retrieve them when needed.
        </p>

        {/* Why File Handling? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Why Use File Handling?</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li>To store program output for future use</li>
            <li>To read configuration or data files</li>
            <li>To create logs or reports</li>
          </ul>
        </div>

        {/* File Operations */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Basic File Operations</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><strong>Open</strong> – Use <code>open()</code> function</li>
            <li><strong>Read</strong> – Use <code>read()</code>, <code>readline()</code>, or <code>readlines()</code></li>
            <li><strong>Write/Append</strong> – Use <code>write()</code> or <code>writelines()</code></li>
            <li><strong>Close</strong> – Use <code>close()</code> to free resources</li>
          </ul>
        </div>

        {/* File Modes Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">File Modes Explained</h2>
          <p className="text-lg text-gray-600 mt-2">Each mode determines how you open a file:</p>
          <table className="w-full text-left border mt-4 text-gray-600 text-lg">
            <thead className="bg-gray-200">
              <tr><th className="p-2">Mode</th><th className="p-2">Description</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-2">"r"</td><td className="p-2">Read-only mode (default)</td></tr>
              <tr><td className="p-2">"w"</td><td className="p-2">Write mode (overwrites file)</td></tr>
              <tr><td className="p-2">"a"</td><td className="p-2">Append mode (adds to file)</td></tr>
              <tr><td className="p-2">"x"</td><td className="p-2">Create new file (fails if exists)</td></tr>
              <tr><td className="p-2">"b"</td><td className="p-2">Binary mode</td></tr>
              <tr><td className="p-2">"t"</td><td className="p-2">Text mode (default)</td></tr>
            </tbody>
          </table>
        </div>

        {/* Reading Example */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Reading a File</h2>
          <p className="text-lg text-gray-600 mt-2">
            You can read content using <code>read()</code>, <code>readline()</code>, or <code>readlines()</code>:
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`with open("notes.txt", "r") as f:
    print(f.read())`}
          </pre>
          <p className="text-lg text-gray-600 mt-2"><strong>Real-world use:</strong> Reading student grades from a saved report file.</p>
        </div>

        {/* Writing Example */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Writing to a File</h2>
          <p className="text-lg text-gray-600 mt-2">Use <code>"w"</code> to write new content or <code>"a"</code> to add to an existing file.</p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`with open("output.txt", "w") as f:
    f.write("Welcome to Python File Handling!")`}
          </pre>
          <p className="text-lg text-gray-600 mt-2"><strong>Real-world use:</strong> Writing a log of customer orders in a bakery app.</p>
        </div>

        {/* Checking File Existence */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Checking if File Exists</h2>
          <p className="text-lg text-gray-600 mt-2">You can use the <code>os</code> module:</p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`import os
if os.path.exists("data.txt"):
    print("File found!")
else:
    print("File not found!")`}
          </pre>
        </div>

        {/* File Pointer with seek() */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Using File Pointer with <code>seek()</code></h2>
          <p className="text-lg text-gray-600 mt-2">
            The file pointer tells where you are in a file. Use <code>seek()</code> to change position.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`with open("sample.txt", "r") as f:
    f.seek(5)  # Move 5 characters ahead
    print(f.read())`}
          </pre>
        </div>

        {/* Error Handling in File Access */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Handling Errors</h2>
          <p className="text-lg text-gray-600 mt-2">
            Always use <code>try-except</code> to avoid crashes if file doesn't exist:
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`try:
    f = open("missing.txt", "r")
    print(f.read())
except FileNotFoundError:
    print("Oops! File not found.")`}
          </pre>
        </div>

        {/* Binary File Handling */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Binary File Handling</h2>
          <p className="text-lg text-gray-600 mt-2">
            Use binary mode for images, audio, etc. Example:
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`with open("image.jpg", "rb") as f:
    data = f.read()
    print("Binary data length:", len(data))`}
          </pre>
        </div>

        {/* Conclusion */}
        <div className="mt-6">
          <p className="text-lg text-gray-600">
            ✅ File handling is useful in every real-world application — from saving user data to building data pipelines.
            Make sure to close files or use <code>with</code> to manage them automatically.
          </p>
      
        </div>
      </div>
    </div>
  );
};

export default Filehandling;
