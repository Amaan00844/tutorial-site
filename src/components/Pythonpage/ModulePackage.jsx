import React from 'react';

const ModulePackage = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Modules and Packages in Python</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          Python supports modular programming through <strong>modules</strong> and <strong>packages</strong>. This allows developers to break large programs into smaller, manageable, and organized files that can be reused across different projects. This is one of the key features that makes Python an efficient and scalable language.
        </p>

        {/* What is a Module? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. What is a Python Module?</h2>
          <p className="mt-2 text-lg text-gray-600">
            A module is a file containing Python code with functions, classes, or variables. Any Python file (with a `.py` extension) is considered a module. It helps in organizing code logically and makes it easier to reuse functions or logic in different scripts.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            For example, let’s say you have some math-related functions:
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`# math_utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            You can then use this module in another script:
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`# main.py
import math_utils

print(math_utils.add(5, 3))      # Output: 8
print(math_utils.subtract(5, 3)) # Output: 2`}
          </pre>
        </div>

        {/* Importing Modules */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Importing Modules</h2>
          <p className="mt-2 text-lg text-gray-600">
            Python provides several ways to import a module:
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
            <li><code>import module_name</code> – Imports the entire module.</li>
            <li><code>from module_name import function_name</code> – Imports specific items from the module.</li>
            <li><code>import module_name as alias</code> – Imports with an alias name for easier use.</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`from math import sqrt
print(sqrt(49))  # Output: 7.0

import datetime as dt
print(dt.datetime.now())`}
          </pre>
        </div>

        {/* Built-in Modules */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. Built-in Modules in Python</h2>
          <p className="mt-2 text-lg text-gray-600">
            Python provides a rich set of built-in modules. These are pre-written and included with Python. You just need to import them when needed.
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
            <li><code>math</code> – For mathematical operations</li>
            <li><code>random</code> – For generating random numbers</li>
            <li><code>os</code> – For interacting with the operating system</li>
            <li><code>datetime</code> – For working with dates and times</li>
          </ul>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`import os

print(os.getcwd())   # Prints current working directory
print(os.name)       # Prints the name of the OS`}
          </pre>
        </div>

        {/* Creating Custom Modules */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">4. Creating and Using Custom Modules</h2>
          <p className="mt-2 text-lg text-gray-600">
            You can create your own module by saving a Python file and defining your functions, classes, or variables inside it.
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`# greetings.py
def say_hello(name):
    return f"Hello, {name}!"`}
          </pre>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`# main.py
import greetings

print(greetings.say_hello("Jaya"))  # Output: Hello, Jaya!`}
          </pre>
        </div>

        {/* What is a Package? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">5. What is a Python Package?</h2>
          <p className="mt-2 text-lg text-gray-600">
            A package is a way of organizing related modules in a directory hierarchy. A package must contain a special file called <code>__init__.py</code>, which can be empty or include initialization code.
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`# Directory structure:
# mypackage/
# ├── __init__.py
# ├── greetings.py
# └── math_ops.py`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            You can then import modules from the package like this:
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`from mypackage import greetings
from mypackage.math_ops import add

print(greetings.say_hello("Jaya"))
print(add(10, 5))`}
          </pre>
        </div>

        {/* Advantages of Modules & Packages */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">6. Advantages of Using Modules and Packages</h2>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
            <li><strong>Code Reusability:</strong> Write once, use anywhere.</li>
            <li><strong>Improved Maintainability:</strong> Organize logic into separate files.</li>
            <li><strong>Namespace Management:</strong> Avoid variable conflicts.</li>
            <li><strong>Collaboration Friendly:</strong> Makes it easier to work in teams by splitting code into logical files.</li>
          </ul>
        </div>

        {/* Real-world Example */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">7. Real-world Example</h2>
          <p className="mt-2 text-lg text-gray-600">
            Imagine you're building a banking application. You could have:
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
            <li><code>auth.py</code> – for login/logout</li>
            <li><code>account.py</code> – for balance and transactions</li>
            <li><code>utils.py</code> – for helper functions</li>
            <li><code>__init__.py</code> – to make it a package</li>
          </ul>
        </div>

        {/* Call to Action */}
      
      </div>
    </div>
  );
};

export default ModulePackage;
