import React from 'react';

const Methodjava = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Methods in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            A <strong>method</strong> in Java is a collection of statements that perform a specific task. Methods help avoid code duplication by allowing you to write a block of code once and reuse it whenever required. Every Java program must have a <code>main()</code> method as the entry point.
          </p>

          {/* Syntax */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Syntax of a Method</h2>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`returnType methodName(parameters) {
    // method body
}`}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              - <code>returnType</code>: The type of value the method returns (e.g., int, void, String).<br />
              - <code>methodName</code>: A unique name identifying the method.<br />
              - <code>parameters</code>: Optional inputs passed to the method.
            </p>
          </div>

          {/* Example */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Example: Basic Method</h2>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class Example {
    
    // Method to add two numbers
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Example obj = new Example();
        int result = obj.add(5, 3);
        System.out.println("Sum: " + result);
    }
}`}
            </pre>
          </div>

          {/* Predefined vs User-defined */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Types of Methods</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Predefined Methods:</strong> Built-in methods provided by Java. For example:
                <pre className="mt-2 p-3 bg-gray-100 rounded-lg overflow-auto">
{`System.out.println("Hello"); // println() is predefined`}
                </pre>
              </li>
              <li><strong>User-defined Methods:</strong> Created by the programmer to perform specific tasks.
                <pre className="mt-2 p-3 bg-gray-100 rounded-lg overflow-auto">
{`void greet() {
    System.out.println("Welcome!");
}`}
                </pre>
              </li>
            </ul>
          </div>

          {/* Static vs Non-static */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Static vs Non-static Methods</h2>
            <p className="mt-4 text-lg text-gray-600">
              - A <strong>static method</strong> belongs to the class and can be called without creating an object.<br />
              - A <strong>non-static method</strong> belongs to an instance (object) of the class.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class Demo {

    static void staticMethod() {
        System.out.println("Static method");
    }

    void nonStaticMethod() {
        System.out.println("Non-static method");
    }

    public static void main(String[] args) {
        staticMethod(); // No object needed

        Demo obj = new Demo();
        obj.nonStaticMethod(); // Object required
    }
}`}
            </pre>
          </div>

          {/* Parameters and Return Type */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Parameters and Return Type</h2>
            <p className="mt-4 text-lg text-gray-600">
              - <strong>Parameters</strong> allow passing values to a method.<br />
              - <strong>Return type</strong> defines what type of value the method returns. If it returns nothing, use <code>void</code>.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int square(int num) {
    return num * num;
}

void display(String name) {
    System.out.println("Hello, " + name);
}`}
            </pre>
          </div>

          {/* Method Overloading */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Method Overloading</h2>
            <p className="mt-4 text-lg text-gray-600">
              Method overloading allows multiple methods in the same class with the same name but different parameters (type, number, or both).
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class Overload {

    void display() {
        System.out.println("No parameters");
    }

    void display(String msg) {
        System.out.println("Message: " + msg);
    }

    void display(int number) {
        System.out.println("Number: " + number);
    }

    public static void main(String[] args) {
        Overload obj = new Overload();
        obj.display();
        obj.display("Hello");
        obj.display(10);
    }
}`}
            </pre>
          </div>

          {/* Method Calling */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Calling a Method</h2>
            <p className="mt-4 text-lg text-gray-600">
              To call a method, use the method name followed by parentheses. If the method is not static, an object is needed.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`// Calling static method
ClassName.staticMethodName();

// Calling non-static method
ClassName obj = new ClassName();
obj.nonStaticMethod();`}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use meaningful method names that clearly describe the method’s purpose.</li>
              <li>Keep methods focused on a single task (follow Single Responsibility Principle).</li>
              <li>Limit method length to improve readability and maintainability.</li>
              <li>Avoid writing duplicate code; reuse methods when needed.</li>
              <li>Use method overloading when appropriate to handle different inputs in a clean way.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Methodjava;
