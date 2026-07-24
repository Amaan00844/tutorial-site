import React from 'react';

const Operator = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Operators</h1>

        <p className="mt-4 text-lg text-gray-600">
          Operators are special symbols in Python used to perform operations on variables and values. Python has a rich set of operators grouped into several categories. Operators are the building blocks of operations, from basic mathematical computations to more complex conditional expressions.
        </p>

        {/* Arithmetic Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Arithmetic Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            These operators are used to perform basic mathematical operations like addition, subtraction, etc.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>+</code>: Addition</li>
            <li><code>-</code>: Subtraction</li>
            <li><code>*</code>: Multiplication</li>
            <li><code>/</code>: Division</li>
            <li><code>%</code>: Modulus (remainder)</li>
            <li><code>**</code>: Exponentiation (power)</li>
            <li><code>//</code>: Floor Division (returns the largest integer less than or equal to the result)</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`x = 10
y = 3

print(x + y)  # 13 (Addition)
print(x - y)  # 7 (Subtraction)
print(x * y)  # 30 (Multiplication)
print(x / y)  # 3.3333... (Division)
print(x % y)  # 1 (Modulus)
print(x ** y) # 1000 (Exponentiation)
print(x // y) # 3 (Floor Division)`}
          </pre>
        </div>

        {/* Comparison Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Comparison Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            Comparison operators are used to compare two values and return a Boolean result (True or False).
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>==</code>: Equal to</li>
            <li><code>!=</code>: Not equal to</li>
            <li><code>&gt;</code>: Greater than</li>
            <li><code>&lt;</code>: Less than</li>
            <li><code>&gt;=</code>: Greater than or equal to</li>
            <li><code>&lt;=</code>: Less than or equal to</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`a = 5
b = 7

print(a == b)  # False (Equal to)
print(a != b)  # True (Not equal to)
print(a > b)   # False (Greater than)
print(a < b)   # True (Less than)
print(a >= b)  # False (Greater than or equal to)
print(a <= b)  # True (Less than or equal to)`}
          </pre>
        </div>

        {/* Logical Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. Logical Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            Logical operators are used to combine conditional statements and make more complex expressions.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>and</code>: Returns True if both conditions are true</li>
            <li><code>or</code>: Returns True if at least one of the conditions is true</li>
            <li><code>not</code>: Reverses the result, returns True if the condition is False</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`x = 10
print(x > 5 and x < 20)  # True (Both conditions are True)
print(x < 5 or x > 20)   # False (At least one condition is False)
print(not(x < 5))        # True (Reverses the condition, since x > 5)`}
          </pre>
        </div>

        {/* Assignment Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">4. Assignment Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            Assignment operators are used to assign values to variables. These operators can also perform an operation and assign the result to the variable.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>=</code>: Assign</li>
            <li><code>+=</code>: Add and assign</li>
            <li><code>-=</code>: Subtract and assign</li>
            <li><code>*=</code>: Multiply and assign</li>
            <li><code>/=</code>: Divide and assign</li>
            <li><code>%=</code>: Modulus and assign</li>
            <li><code>&lt;&lt;=</code>: Left shift and assign</li>
            <li><code>&gt;&gt;=</code>: Right shift and assign</li>
            <li><code>**=</code>: Exponentiation and assign</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`x = 5
x += 3  # Same as x = x + 3
print(x)  # 8

x -= 2  # Same as x = x - 2
print(x)  # 6`}
          </pre>
        </div>

        {/* Bitwise Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">5. Bitwise Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            Bitwise operators are used to perform operations on binary numbers (bit-level operations). These are used when you need to manipulate individual bits of a number.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>&amp;</code>: AND</li>
            <li><code>|</code>: OR</li>
            <li><code>^</code>: XOR</li>
            <li><code>~</code>: NOT</li>
            <li><code>&lt;&lt;</code>: Left shift</li>
            <li><code>&gt;&gt;</code>: Right shift</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`x = 5    # 0b0101
y = 3    # 0b0011

print(x & y)  # 1 (AND)
print(x | y)  # 7 (OR)
print(x ^ y)  # 6 (XOR)
print(~x)     # -6 (NOT)
print(x << 1) # 10 (Left shift)
print(x >> 1) # 2 (Right shift)`}
          </pre>
        </div>

        {/* Membership Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">6. Membership Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            Membership operators are used to test if a sequence contains a certain element.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>in</code>: Returns True if the value is found in the sequence</li>
            <li><code>not in</code>: Returns True if the value is not found in the sequence</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("orange" not in fruits) # True`}

          </pre>
        </div>

        {/* Identity Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">7. Identity Operators</h2>
          <p className="mt-2 text-lg text-gray-600">
            Identity operators are used to check if two variables point to the same object in memory.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>is</code>: Returns True if both variables point to the same object</li>
            <li><code>is not</code>: Returns True if both variables do not point to the same object</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`x = ["apple", "banana"]
y = ["apple", "banana"]

print(x is y)     # False (Different memory locations)
print(x is not y) # True (Different memory locations)`}

          </pre>
        </div>

        {/* Call to Action */}
     
      </div>
    </div>
  );
};

export default Operator;

