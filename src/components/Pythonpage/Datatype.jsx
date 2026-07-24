import React from 'react';

const Datatype = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Data Types</h1>

        {/* Intro */}
        <p className="mt-4 text-lg text-gray-600">
          In Python, data types are used to classify or categorize the type of value a variable holds. Python has a
          wide variety of built-in data types and supports dynamic typing, meaning you don't need to declare the type.
        </p>

        {/* Basic Data Types */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Built-in Data Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python has several basic data types that allow you to store different kinds of values. Here are the most commonly used ones:
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>int</strong>: Integer numbers, both positive and negative, without decimal points. (<code>5, -10, 1000</code>)</li>
            <li><strong>float</strong>: Floating-point numbers (decimal numbers). (<code>3.14, -0.001, 2.5</code>)</li>
            <li><strong>str</strong>: Strings are sequences of characters enclosed in quotes. (<code>"Hello"</code>, <code>'Python'</code>)</li>
            <li><strong>bool</strong>: Boolean values that represent <code>True</code> or <code>False</code> states.</li>
          </ul>

          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
{`x = 10          # int
y = 3.14         # float
name = "Alice"   # str
is_valid = True  # bool`}
          </pre>

          <p className="mt-4 text-lg text-gray-600">
            You can use these types to store basic information like numbers, text, or whether something is true or false.
          </p>
        </div>

        {/* Collection Data Types */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Collection Data Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python also has several collection data types, which allow you to store multiple values in one variable:
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>list</strong>: A list is an ordered, mutable (changeable) collection of items. You can add, remove, or modify items in a list. (<code>[1, 2, 3]</code>)</li>
            <li><strong>tuple</strong>: A tuple is similar to a list but it is immutable (unchangeable). Once you create a tuple, you can't modify it. (<code>(1, 2, 3)</code>)</li>
            <li><strong>set</strong>: A set is an unordered collection of unique elements. You can't have duplicate values in a set. (<code>{'{1, 2, 3}'}</code>)</li>
            <li><strong>dict</strong>: A dictionary is a collection of key-value pairs, where each key maps to a value. (<code>{"{'name': 'Alice', 'age': 25}"}</code>)</li>
          </ul>

          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
{`fruits = ["apple", "banana", "cherry"]     # list
coordinates = (10.0, 20.0)                 # tuple
unique_ids = {101, 102, 103}              # set
person = {"name": "Alice", "age": 25}     # dict`}
          </pre>

          <p className="mt-4 text-lg text-gray-600">
            These data types allow you to store multiple items at once, such as a list of numbers, a set of unique values, or even key-value pairs like in a contact book.
          </p>
        </div>

        {/* Advanced Data Types */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Advanced Data Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            In addition to basic and collection data types, Python also supports some more advanced types like:
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>NoneType</strong>: The special <code>None</code> type represents the absence of a value or a null value.</li>
            <li><strong>complex</strong>: Complex numbers, which are written as <code>real + imagj</code>, where <code>j</code> is the imaginary unit. (<code>3 + 4j</code>)</li>
          </ul>

          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
{`a = None             # NoneType
b = 3 + 4j            # complex number`}
          </pre>

          <p className="mt-4 text-lg text-gray-600">
            These advanced types are less common but can be useful when working with more specialized data.
          </p>
        </div>

        {/* Type Checking */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Checking Data Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can check the data type of a variable using the built-in <code>type()</code> function, which returns the type of the value stored in the variable.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
{`x = 5
print(type(x))  # Output: <class 'int'>`}
          </pre>

          <p className="mt-4 text-lg text-gray-600">
            This function is useful when you want to confirm the type of a variable before performing operations on it.
          </p>
        </div>

        {/* Type Conversion */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Type Conversion</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can convert from one type to another using type conversion functions like <code>int()</code>, <code>float()</code>, <code>str()</code>, etc.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
{`# Converting string to integer
x = "10"
y = int(x)       # y becomes 10 (integer)

# Converting integer to string
z = str(20)      # z becomes "20" (string)`}
          </pre>

          <p className="mt-4 text-lg text-gray-600">
            Type conversion is important when you want to use different types of data together, like adding a number and a string.
          </p>
        </div>

        {/* Immutable vs Mutable */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Mutable vs Immutable Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            In Python, some data types are <strong>mutable</strong> (they can be changed after they are created), and some are <strong>immutable</strong> (they cannot be changed).
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>Mutable</strong> types include <code>list</code>, <code>set</code>, and <code>dict</code>. These can be modified after creation.</li>
            <li><strong>Immutable</strong> types include <code>int</code>, <code>float</code>, <code>str</code>, and <code>tuple</code>. Once created, their values cannot be changed.</li>
          </ul>

          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
{`# Mutable type example
my_list = [1, 2, 3]
my_list[0] = 100   # List can be changed (mutable)

# Immutable type example
my_string = "hello"
my_string[0] = "H"  # This will result in an error because strings are immutable`}
          </pre>

          <p className="mt-4 text-lg text-gray-600">
            Understanding the difference helps avoid errors when working with data structures in Python.
          </p>
        </div>

        {/* Recap */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Quick Recap</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>Python has basic data types like <code>int</code>, <code>float</code>, <code>str</code>, and <code>bool</code>.</li>
            <li>It supports collections like <code>list</code>, <code>tuple</code>, <code>set</code>, and <code>dict</code>.</li>
            <li>You can use the <code>type()</code> function to check the type of a variable.</li>
            <li>Python also supports advanced types like <code>NoneType</code> and <code>complex</code> numbers.</li>
          </ul>
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default Datatype;
