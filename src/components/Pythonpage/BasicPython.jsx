import React from "react";

const BasicPython = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Basics</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          Python is a high-level, interpreted programming language that emphasizes code readability and simplicity.
          It's widely used in various domains like web development, automation, data science, machine learning, and more.
          Python uses simple syntax that mimics natural language, making it a great first language for beginners.
        </p>

        {/* Hello World */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Your First Python Program</h2>
          <p className="mt-4 text-lg text-gray-600">
            The simplest Python program prints something to the screen using the <code>print()</code> function:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg whitespace-pre-wrap">
{`print("Hello, World!")`}
          </pre>
        </div>

        {/* Variables and Data Types */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Variables and Data Types</h2>
          <p className="mt-4 text-lg text-gray-600">
            In Python, variables are used to store data values. You don’t need to declare the type of variable—it is inferred.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg whitespace-pre-wrap">
{`# String
name = "Alice"

# Integer
age = 30

# Float
height = 5.5

# Boolean
is_student = True`}
          </pre>
          <p className="mt-2 text-gray-600">You can use the <code>type()</code> function to check the data type of a variable.</p>
        </div>

        {/* Conditional Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. Conditional Statements</h2>
          <p className="mt-4 text-lg text-gray-600">
            Conditional statements let you control the flow of your program based on conditions.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg whitespace-pre-wrap">
{`if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`}
          </pre>
        </div>

        {/* Loops */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">4. Loops</h2>
          <p className="mt-4 text-lg text-gray-600">
            Loops are used to repeat a block of code multiple times. Python supports both <code>for</code> and <code>while</code> loops.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg whitespace-pre-wrap">
{`# For loop example
for i in range(5):
    print("i =", i)

# While loop example
count = 0
while count < 5:
    print("count =", count)
    count += 1`}
          </pre>
        </div>

        {/* Functions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">5. Functions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Functions allow you to reuse code. You define a function using the <code>def</code> keyword.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg whitespace-pre-wrap">
{`def greet(name):
    print("Hello, " + name)

greet("Alice")  # Output: Hello, Alice`}
          </pre>
          <p className="mt-2 text-gray-600">
            Functions can take parameters, return values, and make your code modular.
          </p>
        </div>

        {/* Lists */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">6. Lists</h2>
          <p className="mt-4 text-lg text-gray-600">
            Lists are used to store multiple items in a single variable. They are ordered, changeable, and allow duplicate values.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg whitespace-pre-wrap">
{`fruits = ["apple", "banana", "cherry"]
print(fruits[0])          # Output: apple
fruits.append("orange")   # Adds 'orange' to the list
print(fruits)`}
          </pre>
          <p className="mt-2 text-gray-600">
            You can also loop through lists, check for items, and modify them.
          </p>
        </div>

        {/* Final Note */}
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            These concepts form the foundation of Python. Practice writing small scripts, explore more data types like dictionaries and tuples,
            and gradually move into advanced topics like file handling, object-oriented programming, and modules.
          </p>
        </div>

        {/* Call to Action */}
     
      </div>
    </div>
  );
};

export default BasicPython;

