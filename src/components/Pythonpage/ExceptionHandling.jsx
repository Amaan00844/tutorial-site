import React from 'react';

const ExceptionHandling = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Exception Handling in Python</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          Exception handling in Python is a mechanism that helps manage errors or exceptional situations during the execution of a program. By handling exceptions, we ensure that the program does not crash unexpectedly and can recover from these situations gracefully. It allows the programmer to define what to do when errors arise.
        </p>

        {/* Try-Except Block */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Basic try-except Block</h2>
          <p className="mt-4 text-lg text-gray-600">
            The basic structure for handling exceptions in Python is the <code>try</code> and <code>except</code> block.
            <br />
            The <code>try</code> block is used to write code that may raise exceptions. The <code>except</code> block catches those exceptions and handles them.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            In the above example, attempting to divide by zero triggers a <code>ZeroDivisionError</code>, and we handle it by printing an appropriate message.
          </p>
        </div>

        {/* Catching Multiple Exceptions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Handling Multiple Exceptions</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can handle multiple exceptions in separate <code>except</code> blocks. Python will check each block and match the exception type to the appropriate block.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ZeroDivisionError:
    print("Division by zero!")
except ValueError:
    print("Invalid input! Enter a number.")`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            In this example, we handle two types of exceptions. If the user enters something other than a number, it raises a <code>ValueError</code>, and if the user enters 0, it raises a <code>ZeroDivisionError</code>.
          </p>
        </div>

        {/* Finally Block */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Using finally Block</h2>
          <p className="mt-4 text-lg text-gray-600">
            The <code>finally</code> block is executed no matter what, whether an exception occurs or not. It is commonly used to clean up resources, such as closing a file or releasing network resources.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`try:
    file = open("example.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File not found.")
finally:
    print("Execution completed.")`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            The <code>finally</code> block runs regardless of whether the file is found or not, ensuring that "Execution completed." is always printed.
          </p>
        </div>

        {/* Else Block */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Using else with try-except</h2>
          <p className="mt-4 text-lg text-gray-600">
            The <code>else</code> block runs only if no exceptions are raised in the <code>try</code> block. It is useful for code that should only execute when the <code>try</code> block completes without errors.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`try:
    num = int(input("Enter a number: "))
except ValueError:
    print("That's not a number.")
else:
    print("You entered:", num)`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            In this case, if the user enters a valid number, the <code>else</code> block will execute and print the entered number. If the input is invalid, the <code>except</code> block will handle it.
          </p>
        </div>

        {/* Raising Exceptions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Raising Exceptions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Python allows you to raise exceptions manually using the <code>raise</code> keyword. This is useful when you want to enforce certain conditions within your program.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`age = -5
if age < 0:
    raise ValueError("Age cannot be negative.")`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            In this example, if the <code>age</code> is negative, a <code>ValueError</code> is raised with the message "Age cannot be negative."
          </p>
        </div>

        {/* Custom Exceptions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Creating Custom Exceptions</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can create your own custom exception classes by inheriting from the base <code>Exception</code> class. This allows you to raise exceptions with custom messages or handle specific errors in a more specific way.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-2">
{`class NegativeAgeError(Exception):
    def __init__(self, message="Age cannot be negative"):
        self.message = message
        super().__init__(self.message)

age = -5
if age < 0:
    raise NegativeAgeError()} 
`}
          </pre>
          <p className="mt-4 text-lg text-gray-600">
            Here, we define a custom exception called <code>NegativeAgeError</code> to handle the case when a negative age is encountered.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            Exception handling is a vital concept in Python, enabling developers to write error-resilient code that can handle unexpected situations gracefully. By understanding the use of <code>try</code>, <code>except</code>, <code>else</code>, <code>finally</code>, and custom exceptions, you can create robust programs that function well under various circumstances.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default ExceptionHandling;
