import React from 'react';

const ExceptionHandling = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Exception Handling in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            <strong>Exception Handling</strong> in Java is a mechanism to handle runtime errors and maintain the normal flow of the application. Exceptions are unwanted or unexpected events that disrupt the normal flow of a program's execution. In Java, exception handling allows us to handle these situations in a graceful manner, preventing the abrupt termination of the program.
          </p>

          {/* Why Exception Handling */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Why Exception Handling?</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>To prevent program crashes due to unhandled errors.</li>
              <li>To separate error-handling code from regular program logic.</li>
              <li>To provide more meaningful error messages for easier debugging.</li>
              <li>To allow the program to continue running even when errors occur.</li>
            </ul>
          </div>

          {/* Types of Exceptions */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Types of Exceptions</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Checked Exceptions:</strong> These exceptions are known at compile-time and must be handled by the program. Examples include <code>IOException</code> and <code>SQLException</code>.</li>
              <li><strong>Unchecked Exceptions:</strong> These exceptions occur at runtime. They include <code>NullPointerException</code>, <code>ArithmeticException</code>, and <code>ArrayIndexOutOfBoundsException</code>.</li>
              <li><strong>Errors:</strong> These are not exceptions but are more severe, such as <code>OutOfMemoryError</code> or <code>StackOverflowError</code>, and are usually not handled by the program.</li>
            </ul>
          </div>

          {/* Try-Catch Example */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Try-Catch Example</h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>try</code> block is used to enclose the code that might throw an exception, and the <code>catch</code> block handles the exception if it occurs. Here's an example where an <code>ArithmeticException</code> occurs due to division by zero:
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class Example {
  public static void main(String[] args) {
    try {
      int result = 10 / 0; // ArithmeticException occurs here
      System.out.println("Result: " + result);
    } catch (ArithmeticException e) {
      System.out.println("Error: Division by zero is not allowed.");
    }
  }
}`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In this example, dividing by zero triggers an <code>ArithmeticException</code>, which is caught by the <code>catch</code> block, preventing the program from crashing.
            </p>
          </div>

          {/* Finally Block */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Finally Block</h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>finally</code> block is used to execute essential cleanup code, such as closing file streams or database connections, regardless of whether an exception occurs. It runs after the <code>try</code> and <code>catch</code> blocks, even if no exception is thrown.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`try {
  int[] arr = new int[2];
  arr[3] = 10; // ArrayIndexOutOfBoundsException occurs here
} catch (ArrayIndexOutOfBoundsException e) {
  System.out.println("Index out of bounds!");
} finally {
  System.out.println("Finally block executed.");
}`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              Even though an exception occurs in the <code>try</code> block, the <code>finally</code> block is always executed, ensuring that important code is run.
            </p>
          </div>

          {/* Throw and Throws */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Throw and Throws</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><code>throw</code> is used to explicitly throw an exception from within a method or block of code.</li>
              <li><code>throws</code> is used to declare that a method may throw one or more exceptions. The calling method is then responsible for handling those exceptions.</li>
            </ul>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public void checkAge(int age) throws ArithmeticException {
  if (age < 18) {
    throw new ArithmeticException("Not eligible to vote");
  } else {
    System.out.println("Eligible to vote");
  }
}`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In this example, the <code>checkAge</code> method checks if the age is less than 18. If so, it throws an <code>ArithmeticException</code>, which must be handled by the calling method.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Catch specific exceptions instead of using generic <code>Exception</code> or <code>Throwable</code> to get more precise error handling.</li>
              <li>Always clean up resources like file streams or database connections using the <code>finally</code> block.</li>
              <li>Avoid leaving empty <code>catch</code> blocks; always handle or log the exception appropriately.</li>
              <li>Log exceptions to keep track of the issues and help with debugging in production environments.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default ExceptionHandling;
