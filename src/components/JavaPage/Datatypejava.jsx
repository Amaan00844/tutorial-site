import React from 'react';

const Datatypejava = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Java Data Types</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            Data types in Java specify the type of data that a variable can hold. Java is a strongly typed language, which means every variable must be declared with a data type.
          </p>

          {/* Categories of Data Types */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Types of Data Types in Java</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Primitive Data Types:</strong> Built-in types in Java (8 total).</li>
              <li><strong>Non-Primitive Data Types:</strong> Includes classes, arrays, and interfaces.</li>
            </ul>
          </div>

          {/* Primitive Data Types */}
          <div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800">Java Primitive Data Types Explained</h2>
  <p className="mt-4 text-lg text-gray-600">
    Java has 8 primitive data types. These are the basic types that Java uses to store simple values. Each data type has its own size and range, and they are used for different kinds of data storage.
  </p>
  <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
    <li>
      <strong>byte:</strong>
      <p>
        The <code>byte</code> data type is used to store small integer values. It uses 1 byte (8 bits) of memory and can store numbers in the range from -128 to 127.
        <br />
        <strong>Why Use It?</strong> Use <code>byte</code> when you need to save memory and the numbers you need to store are small.
        <br />
        <strong>Example:</strong> Storing small numerical values like age or small counts.
      </p>
      <p><code>byte b = 100;</code> // Example: Declaring a byte with value 100</p>
    </li>
    <li>
      <strong>short:</strong>
      <p>
        The <code>short</code> data type is used to store small integer values, but with a larger range than <code>byte</code>. It uses 2 bytes (16 bits) of memory and stores values from -32,768 to 32,767.
        <br />
        <strong>Why Use It?</strong> Use <code>short</code> when you need more range than <code>byte</code>, but still want to save memory.
        <br />
        <strong>Example:</strong> When you need a larger range of integers, but still don’t need the size of an <code>int</code>.
      </p>
      <p><code>short s = 32000;</code> // Example: Declaring a short with value 32000</p>
    </li>
    <li>
      <strong>int:</strong>
      <p>
        The <code>int</code> data type is the most commonly used type for storing integer values. It uses 4 bytes (32 bits) of memory and can store numbers in the range from -2<sup>31</sup> to 2<sup>31</sup>-1.
        <br />
        <strong>Why Use It?</strong> You’ll most often use <code>int</code> for integers in your programs since it’s efficient and can store a wide range of values.
        <br />
        <strong>Example:</strong> For most whole numbers, like a person's age, the number of items, or counts.
      </p>
      <p><code>int i = 50000;</code> // Example: Declaring an int with value 50000</p>
    </li>
    <li>
      <strong>long:</strong>
      <p>
        The <code>long</code> data type is used for very large integer values. It uses 8 bytes (64 bits) of memory and can store values from -2<sup>63</sup> to 2<sup>63</sup>-1.
        <br />
        <strong>Why Use It?</strong> Use <code>long</code> when the numbers you need to store exceed the range of an <code>int</code>, such as the total population of a country or the number of seconds in a year.
        <br />
        <strong>Example:</strong> For large integer values like total sales or large counts.
      </p>
      <p><code>long l = 100000L;</code> // Example: Declaring a long with value 100000</p>
    </li>
    <li>
      <strong>float:</strong>
      <p>
        The <code>float</code> data type is used to store decimal numbers. It uses 4 bytes (32 bits) of memory and follows the IEEE 754 standard for single-precision floating-point numbers.
        <br />
        <strong>Why Use It?</strong> Use <code>float</code> when you need to store numbers with decimals and memory efficiency is important, but you don’t need extreme precision.
        <br />
        <strong>Example:</strong> When you need to store numbers like prices or measurements with decimals.
      </p>
      <p><code>float f = 5.75f;</code> // Example: Declaring a float with value 5.75</p>
    </li>
    <li>
      <strong>double:</strong>
      <p>
        The <code>double</code> data type is used for decimal numbers with double precision. It uses 8 bytes (64 bits) of memory and provides higher precision than <code>float</code>.
        <br />
        <strong>Why Use It?</strong> Use <code>double</code> when you need greater precision for decimal numbers, such as scientific calculations, financial calculations, or detailed measurements.
        <br />
        <strong>Example:</strong> For calculations where precision is very important, such as financial transactions.
      </p>
      <p><code>double d = 19.99;</code> // Example: Declaring a double with value 19.99</p>
    </li>
    <li>
      <strong>char:</strong>
      <p>
        The <code>char</code> data type is used to store a single character. It uses 2 bytes (16 bits) of memory and stores Unicode characters, which means it can store more than just English characters.
        <br />
        <strong>Why Use It?</strong> Use <code>char</code> when you want to store a single letter, symbol, or character.
        <br />
        <strong>Example:</strong> For storing a character such as a letter, number, or special symbol.
      </p>
      <p><code>char c = 'A';</code> // Example: Declaring a char with value 'A'</p>
    </li>
    <li>
      <strong>boolean:</strong>
      <p>
        The <code>boolean</code> data type is used to store only two values: <code>true</code> or <code>false</code>. It uses just 1 bit of memory and is commonly used for making decisions in programming (like conditions and loops).
        <br />
        <strong>Why Use It?</strong> Use <code>boolean</code> when you need to check whether something is true or false, for example, in if-statements.
        <br />
        <strong>Example:</strong> To store values like whether a user is logged in or if a condition is met.
      </p>
      <p><code>boolean isJavaFun = true;</code> // Example: Declaring a boolean with value true</p>
    </li>
  </ul>
</div>





          {/* Non-Primitive Data Types */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Non-Primitive Data Types</h2>
            <p className="mt-4 text-lg text-gray-600">
              These are created by the programmer and include:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>String</strong></li>
              <li><strong>Arrays</strong></li>
              <li><strong>Classes</strong></li>
              <li><strong>Interfaces</strong></li>
            </ul>
          </div>

          {/* Example Code */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Example Code</h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's an example that shows how to use different data types in Java:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg overflow-auto">
{`public class DataTypeExample {
    public static void main(String[] args) {
        int age = 25;
        float weight = 65.5f;
        double height = 175.5;
        char grade = 'A';
        boolean isJavaFun = true;
        String name = "John";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Weight: " + weight);
        System.out.println("Height: " + height);
        System.out.println("Grade: " + grade);
        System.out.println("Is Java fun? " + isJavaFun);
    }
}`}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use <code>int</code> for whole numbers unless large range is required.</li>
              <li>Use <code>double</code> for decimal numbers unless memory optimization is needed.</li>
              <li>Always initialize variables before use.</li>
              <li>Use meaningful variable names that describe the data they hold.</li>
            </ul>
          </div>

          {/* CTA */}
         
        </div>
      </div>
    </>
  );
};

export default Datatypejava;
