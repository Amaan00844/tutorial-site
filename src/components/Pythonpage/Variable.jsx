import React from 'react';

const Variable = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Python Variables </h1>

        {/* What is a Variable? */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is a Variable?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Think of a variable like a **container** or **label** that stores some information for you to use later.
            Just like how you write someone’s name on a jar to know what's inside, a variable has a name and stores some value.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            In Python, you don’t have to say what kind of data you’re storing — Python figures it out for you!
          </p>
        </div>

        {/* Example of Storing Values */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Examples of Storing Information</h2>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`name = "Alice"       # A name (text)
age = 25             # Age (a number)
price = 19.99        # Price (a decimal number)
is_student = True    # True or False value`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            Each of these lines stores a piece of information in a variable. Later, you can use them in your program.
          </p>
        </div>

        {/* Changing the Value */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Changing the Value of a Variable</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can change what's inside the container. Python allows you to store different types of data in the same variable.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`x = 10        # First x is a number
x = "Hello"   # Now x is a text`}
          </pre>
        </div>

        {/* Variable Naming Rules */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Rules for Naming Variables</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>Use letters, numbers, and underscores (_).</li>
            <li>Start the name with a letter or underscore, NOT a number.</li>
            <li>Don’t use spaces or special characters like %, $, etc.</li>
            <li>Don’t use Python’s special words (called keywords) like <code>if</code>, <code>for</code>, <code>class</code>, etc.</li>
            <li>Python is case-sensitive: <code>Name</code> and <code>name</code> are different.</li>
          </ul>
        </div>

        {/* Multiple Assignments */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Assigning Many Variables at Once</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can give values to several variables in one line:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`a, b, c = 1, 2, 3
x = y = z = "Python"`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            In the first line, 1 goes into <code>a</code>, 2 into <code>b</code>, and 3 into <code>c</code>. 
            In the second line, all three variables get the same value.
          </p>
        </div>

        {/* Constants */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is a Constant?</h2>
          <p className="mt-4 text-lg text-gray-600">
            A constant is a variable whose value should not change. Python doesn’t have real constants, 
            but by writing the name in all capital letters, we agree not to change it.
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`PI = 3.14159
MAX_USERS = 100`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            These are just normal variables, but the capital letters tell other people (and you!) not to change them.
          </p>
        </div>

        {/* Recap */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Quick Recap</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>A variable is like a container to store values (like numbers or text).</li>
            <li>No need to mention type — Python guesses it for you.</li>
            <li>Variables can change their value or type anytime.</li>
            <li>Use clear and simple names that make sense.</li>
          </ul>
        </div>

        {/* Try It Button */}
        
      </div>
    </div>
  );
};

export default Variable;
