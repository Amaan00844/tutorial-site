import React from 'react';

const FileHandling = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">File Handling in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            File handling is an essential part of any programming language. In Java, it allows us to store data permanently in files, making applications more dynamic and robust. Java supports file operations through the <code>java.io</code> and <code>java.nio.file</code> packages, which include classes like <code>File</code>, <code>FileReader</code>, <code>FileWriter</code>, <code>BufferedReader</code>, <code>BufferedWriter</code>, and more.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            File handling includes operations like creating files, reading from files, writing to files, and deleting files. We’ll explore each operation with examples and best practices.
          </p>

          {/* Basic File Operations */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Basic File Operations</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Creating a File:</strong> Using the <code>File</code> class with <code>createNewFile()</code>.</li>
              <li><strong>Reading from a File:</strong> Using <code>FileReader</code>, <code>BufferedReader</code>.</li>
              <li><strong>Writing to a File:</strong> Using <code>FileWriter</code>, <code>BufferedWriter</code>.</li>
              <li><strong>Deleting a File:</strong> Using <code>File.delete()</code> method.</li>
            </ul>
          </div>

          {/* Creating a File */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Creating a File</h2>
            <p className="mt-4 text-lg text-gray-600">
              Use the <code>File</code> class from <code>java.io</code> to create a file. The <code>createNewFile()</code> method returns <code>true</code> if the file is successfully created, or <code>false</code> if it already exists.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`import java.io.File;
import java.io.IOException;

public class CreateFile {
    public static void main(String[] args) {
        try {
            File myFile = new File("data.txt");
            if (myFile.createNewFile()) {
                System.out.println("File created: " + myFile.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}`}
            </pre>
          </div>

          {/* Reading from a File */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Reading from a File</h2>
            <p className="mt-4 text-lg text-gray-600">
              To read data, Java provides <code>FileReader</code> (character stream) and <code>BufferedReader</code> (for efficient line-by-line reading).
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`import java.io.*;

public class ReadFile {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("data.txt");
            BufferedReader br = new BufferedReader(fr);
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close(); // Always close the BufferedReader
        } catch (IOException e) {
            System.out.println("Error reading file.");
            e.printStackTrace();
        }
    }
}`}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              💡 Tip: Always close the reader to avoid memory leaks.
            </p>
          </div>

          {/* Writing to a File */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Writing to a File</h2>
            <p className="mt-4 text-lg text-gray-600">
              To write to a file, we use <code>FileWriter</code> for characters and <code>BufferedWriter</code> for efficient writing.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`import java.io.*;

public class WriteFile {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("data.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write("Java file handling is powerful.");
            bw.newLine();
            bw.write("Use it to create robust applications.");
            bw.close();
            System.out.println("Successfully written to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}`}
            </pre>
          </div>

          {/* Appending to a File */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Appending Data to a File</h2>
            <p className="mt-4 text-lg text-gray-600">
              To avoid overwriting existing content, open <code>FileWriter</code> in append mode by passing <code>true</code> as the second parameter.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`import java.io.*;

public class AppendFile {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("data.txt", true); // true = append mode
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write("This line is appended.");
            bw.newLine();
            bw.close();
            System.out.println("Data appended successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
            </pre>
          </div>

          {/* Deleting a File */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Deleting a File</h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>delete()</code> method of the <code>File</code> class is used to delete a file. It returns <code>true</code> if the deletion was successful.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`import java.io.File;

public class DeleteFile {
    public static void main(String[] args) {
        File file = new File("data.txt");
        if (file.delete()) {
            System.out.println("Deleted the file: " + file.getName());
        } else {
            System.out.println("File not found or deletion failed.");
        }
    }
}`}
            </pre>
          </div>

          {/* Checking File Info */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Checking File Information</h2>
            <p className="mt-4 text-lg text-gray-600">
              You can retrieve metadata such as file name, path, size, etc.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`import java.io.File;

public class FileInfo {
    public static void main(String[] args) {
        File file = new File("data.txt");
        if (file.exists()) {
            System.out.println("File name: " + file.getName());
            System.out.println("Path: " + file.getAbsolutePath());
            System.out.println("Writable: " + file.canWrite());
            System.out.println("Readable: " + file.canRead());
            System.out.println("File size (bytes): " + file.length());
        } else {
            System.out.println("File does not exist.");
        }
    }
}`}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices in File Handling</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Always close streams in a <code>finally</code> block or use <code>try-with-resources</code> for automatic closing.</li>
              <li>Use <code>BufferedReader</code>/<code>BufferedWriter</code> for large files for efficiency.</li>
              <li>Use <code>File.exists()</code> to check existence before operations.</li>
              <li>Always handle exceptions using <code>try-catch</code> blocks.</li>
              <li>Avoid hardcoding file paths; use relative paths when possible.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">📘 Learn More</h2>
            <p className="mt-2 text-lg text-gray-600">
              To go deeper into file handling, explore topics like object serialization, <code>FileInputStream</code>/<code>FileOutputStream</code>, reading binary files, and using <code>java.nio.file.Files</code> API for modern file handling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileHandling;
