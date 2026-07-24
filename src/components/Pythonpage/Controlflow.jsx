import React from 'react';

const Controlflow = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Control Flow</h1>

        <p className="mt-4 text-lg text-gray-600">
          Control flow in Python determines the logical flow of a program. Python executes code from top to bottom, but using
          conditional statements and loops, we can alter that flow. This allows us to make decisions (branching) and repeat
          actions (looping) based on conditions.
        </p>

        {/* Conditional Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Conditional Statements</h2>
          <p className="mt-2 text-lg text-gray-600">
            Conditional statements let us execute specific blocks of code based on conditions using keywords like <code>if</code>, <code>elif</code>, and <code>else</code>.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>if</code>: Checks a condition and executes code if the condition is true.</li>
            <li><code>elif</code>: Checks another condition if the previous one was false.</li>
            <li><code>else</code>: Executes a block of code if all previous conditions are false.</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`age = 18

if age >= 18:
    print("You are eligible to vote.")
elif age > 0:
    print("You are too young to vote.")
else:
    print("Invalid age")`}
          </pre>
        </div>

        {/* Nested If */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Nested if Statements</h3>
          <p className="text-lg text-gray-600">
            You can nest <code>if</code> statements inside other <code>if</code> blocks.
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`num = 10

if num > 0:
    if num % 2 == 0:
        print("Positive even number")
    else:
        print("Positive odd number")
else:
    print("Negative number")`}
          </pre>
        </div>

        {/* Loops */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Loops</h2>
          <p className="mt-2 text-lg text-gray-600">
            Loops let us execute a block of code multiple times. Python supports two main types: <code>for</code> and <code>while</code>.
          </p>

          {/* For Loop */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4">For Loop</h3>
          <p className="text-lg text-gray-600">
            The <code>for</code> loop is used to iterate over a sequence (like a list, tuple, dictionary, set, or string).
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like", fruit)`}
          </pre>

          {/* While Loop */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6">While Loop</h3>
          <p className="text-lg text-gray-600">
            The <code>while</code> loop keeps running as long as a given condition is true.
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`count = 1

while count <= 5:
    print("Count is:", count)
    count += 1`}
          </pre>
        </div>

        {/* Control Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. Loop Control Statements</h2>
          <p className="text-lg text-gray-600">Control how loops execute using these special statements:</p>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-2">
            <li><code>break</code>: Terminates the loop entirely.</li>
            <li><code>continue</code>: Skips the current iteration and continues with the next.</li>
            <li><code>pass</code>: A null statement that does nothing, used as a placeholder.</li>
          </ul>

          {/* Break Example */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Example: break</h3>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`for i in range(1, 10):
    if i == 5:
        break
    print(i)`}
          </pre>

          {/* Continue Example */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Example: continue</h3>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`for i in range(1, 6):
    if i == 3:
        continue
    print(i)`}
          </pre>

          {/* Pass Example */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Example: pass</h3>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`for i in range(3):
    pass  # Do nothing but required syntactically`}
          </pre>
        </div>

        {/* Real-Life Example */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">4. Real-Life Use Case</h2>
          <p className="text-lg text-gray-600">
            Imagine you're building a login system. You might use <code>if</code> to check if credentials are correct, a <code>while</code> loop to allow retry attempts, and <code>break</code> to exit after successful login.
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-4">
{`attempts = 0
correct_password = "python123"

while attempts < 3:
    pwd = input("Enter password: ")
    if pwd == correct_password:
        print("Login successful!")
        break
    else:
        print("Wrong password. Try again.")
        attempts += 1
else:
    print("Too many attempts. Access denied.")`}
          </pre>
        </div>

        {/* Call to Action */}
      
      </div>
    </div>
  );
};

export default Controlflow;
