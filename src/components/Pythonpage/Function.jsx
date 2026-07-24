import React from 'react';

const Function = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Functions</h1>

        {/* Intro */}
        <p className="mt-4 text-lg text-gray-600">
          A function is a block of code that only runs when it is called. Functions help make code reusable and organized. You can pass data to functions and return data from them.
        </p>

        {/* 1. Defining a Function */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Defining a Function</h2>
          <p className="mt-2 text-lg text-gray-600">Use the <code>def</code> keyword to define a function.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def greet():
    print("Hello, World!")

greet()`}
          </pre>
        </div>

        {/* 2. Function with Parameters */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Function with Parameters</h2>
          <p className="mt-2 text-lg text-gray-600">Functions can accept parameters for dynamic behavior.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def greet(name):
    print("Hello, " + name)

greet("Alice")`}
          </pre>
        </div>

        {/* 3. Return Statement */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. Return Statement</h2>
          <p className="mt-2 text-lg text-gray-600">Functions can return values using the <code>return</code> statement.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8`}
          </pre>
        </div>

        {/* 4. Default Parameters */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">4. Default Parameters</h2>
          <p className="mt-2 text-lg text-gray-600">You can set default values for parameters.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def greet(name="Guest"):
    print("Hello, " + name)

greet()        # Output: Hello, Guest
greet("Emma")  # Output: Hello, Emma`}
          </pre>
        </div>

        {/* 5. Arbitrary Arguments */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">5. Arbitrary Arguments</h2>
          <p className="mt-2 text-lg text-gray-600">
            Use <code>*args</code> for variable number of positional arguments, and <code>**kwargs</code> for keyword arguments.
          </p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def add_numbers(*args):
    return sum(args)

print(add_numbers(1, 2, 3))  # Output: 6`}
          </pre>
        </div>

        {/* 6. Lambda Functions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">6. Lambda Functions</h2>
          <p className="mt-2 text-lg text-gray-600">Lambda functions are anonymous functions written in one line.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`square = lambda x: x ** 2
print(square(4))  # Output: 16`}
          </pre>
        </div>

        {/* 7. Scope of Variables */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">7. Scope of Variables</h2>
          <p className="mt-2 text-lg text-gray-600">Variables can have local or global scope.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`x = 10  # Global variable

def display():
    x = 5  # Local variable
    print("Inside:", x)

display()
print("Outside:", x)`}
          </pre>
        </div>

        {/* 8. Recursive Functions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">8. Recursive Functions</h2>
          <p className="mt-2 text-lg text-gray-600">A recursive function is one that calls itself to solve a problem.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120`}
          </pre>
        </div>

        {/* 9. Function Annotations */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">9. Function Annotations</h2>
          <p className="mt-2 text-lg text-gray-600">Function annotations provide optional type hints for parameters and return values.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def greet(name: str) -> str:
    return "Hello, " + name

print(greet("John"))`}
          </pre>
        </div>

        {/* 10. Docstrings */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">10. Docstrings</h2>
          <p className="mt-2 text-lg text-gray-600">Use triple quotes to document what a function does.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def square(x):
    """Returns the square of a number."""
    return x * x

print(square.__doc__)`}
          </pre>
        </div>

        {/* 11. Nested Functions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">11. Nested Functions</h2>
          <p className="mt-2 text-lg text-gray-600">Functions can be defined inside other functions.</p>
          <pre className="bg-gray-100 text-blue-600 p-4 rounded-lg mt-2">
{`def outer():
    def inner():
        print("Inner function")
    inner()

outer()`}
          </pre>
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default Function;
