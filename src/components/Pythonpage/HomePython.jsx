import React from "react";

const HomePython = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800"> Python Tutorial</h1>

        {/* Introduction */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Introduction to Python</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms and is widely used in various fields such as web development, data analysis, artificial intelligence, and more.
          </p>
        </section>

        {/* Python Basics */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Python Basics</h2>
          <p className="mt-4 text-lg text-gray-600">
            Let's start with a simple Python program that prints "Hello, World!" to the console.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`print("Hello, World!")`}
          </pre>
        </section>

        {/* Variables and Data Types */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Variables and Data Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            Variables are used to store data. Python is dynamically typed, so you don't need to declare the type explicitly.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`name = "Alice"        # String
age = 30              # Integer
height = 5.5          # Float
is_student = True     # Boolean`}
          </pre>
        </section>

        {/* Control Flow */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Control Flow</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python uses indentation to define blocks of code. Here's how you can use conditional statements:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`if age > 18:
    print("Adult")
else:
    print("Minor")`}
          </pre>
        </section>

        {/* Loops */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Loops</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python supports both for-loops and while-loops:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`}
          </pre>
        </section>

        {/* Functions */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Functions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Functions are defined using the <code>def</code> keyword:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`def greet(name):
    print("Hello, " + name)

greet("Alice")`}
          </pre>
        </section>

        {/* Data Structures */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Data Structures</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python provides several built-in data structures:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`# List
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")

# Tuple
coordinates = (10, 20)

# Set
unique_numbers = {1, 2, 3}

# Dictionary
person = {"name": "Alice", "age": 30}`}
          </pre>
        </section>

        {/* Modules and Packages */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Modules and Packages</h2>
          <p className="mt-4 text-lg text-gray-600">
            Modules are Python files that contain functions and variables. Packages are collections of modules.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`import math
print(math.sqrt(16))  # Output: 4.0`}
          </pre>
        </section>

        {/* File Handling */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">File Handling</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python allows you to work with files to read and write data.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)`}
          </pre>
        </section>

        {/* Exception Handling */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Exception Handling</h2>
          <p className="mt-4 text-lg text-gray-600">
            Handle errors gracefully using try-except blocks:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")`}
          </pre>
        </section>

        {/* Object-Oriented Programming */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Object-Oriented Programming</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python supports object-oriented programming with classes and objects:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello, " + self.name)

person = Person("Alice")
person.greet()`}
          </pre>
        </section>

        {/* Conclusion */}
        <section className="mt-8">
          <p className="text-lg text-gray-600">
            This comprehensive tutorial covers the fundamental aspects of Python programming. Continue exploring advanced topics such as decorators, generators, and context managers to deepen your understanding.
          </p>
        </section>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default HomePython;
