import React from 'react';

const Basicjava = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Java Basics</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is platform-independent and runs on the Java Virtual Machine (JVM).
        </p>

        {/* Key Features */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Key Features of Java</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>Platform Independent:</strong> Write once, run anywhere.</li>
            <li><strong>Object-Oriented:</strong> Everything is treated as an object.</li>
            <li><strong>Simple & Secure:</strong> Easy to learn and safe to use.</li>
            <li><strong>Robust:</strong> Strong memory management and error handling.</li>
            <li><strong>Multithreaded:</strong> Supports concurrent execution.</li>
          </ul>
        </div>

        {/* Basic Syntax */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Syntax Rules</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>Statements end with a semicolon <code>;</code>.</li>
            <li>Code blocks use curly braces <code>{`{ }`}</code>.</li>
            <li>Java is case-sensitive.</li>
            <li>Class names should start with uppercase letters.</li>
          </ul>
        </div>

        {/* Hello World Example */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Java Program</h2>
          <p className="mt-4 text-lg text-gray-600">Example: Hello World Program</p>
          <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg overflow-auto">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
          </pre>
        </div>

        {/* Program Structure Explanation */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Program Structure Explanation</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>Class:</strong> The blueprint of a Java program.</li>
            <li><strong>Main Method:</strong> Entry point of the program: <code>public static void main()</code>.</li>
            <li><strong>System.out.println:</strong> Used for output on the console.</li>
          </ul>
        </div>

        {/* Compilation Process */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Java Compilation Process</h2>
          <ol className="mt-4 text-lg text-gray-600 list-decimal pl-6">
            <li>Write Java code and save with <code>.java</code> extension.</li>
            <li>Compile using <code>javac FileName.java</code>.</li>
            <li>Run using <code>java ClassName</code>.</li>
          </ol>
        </div>

        {/* Data Types */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Data Types in Java</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>Primitive:</strong> int, float, double, char, boolean, long, short, byte</li>
            <li><strong>Non-primitive:</strong> Arrays, Strings, Classes, Interfaces</li>
          </ul>
        </div>

        {/* Variables and Operators */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Variables and Operators</h2>
          <p className="mt-4 text-lg text-gray-600">
            Variables store data. Operators perform actions like addition, comparison, etc.
          </p>
          <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
            <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
      
            <li><strong>Logical:</strong> &&, ||, !</li>
          </ul>
        </div>

        {/* Control Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Control Statements</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>if, if-else, else-if:</strong> Conditional branching</li>
            <li><strong>switch:</strong> Multi-branch condition</li>
            <li><strong>while, do-while, for:</strong> Loops for repetition</li>
            <li><strong>break, continue:</strong> Control loop flow</li>
          </ul>
        </div>

        {/* Methods */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Methods in Java</h2>
          <p className="mt-4 text-lg text-gray-600">
            Methods are blocks of code that perform a specific task.
          </p>
          <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg overflow-auto">
{`public int add(int a, int b) {
  return a + b;
}`}
          </pre>
        </div>

        {/* Object-Oriented Concepts */}
       {/* Object-Oriented Concepts */}
<div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800">OOP Concepts in Java</h2>
  <ul className="mt-4 text-lg text-gray-600 list-disc pl-6 space-y-4">

    <li>
      <strong>Class & Object:</strong><br />
      A <em>class</em> is a blueprint or template for creating objects. An <em>object</em> is an instance of a class. It holds actual values and can call methods defined in the class.
      <div className="bg-gray-100 text-sm font-mono p-3 mt-2 rounded">
        class Car {'{'}<br />
        &nbsp;&nbsp;String color = "Red";<br />
        &nbsp;&nbsp;void drive() {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Driving...");<br />
        &nbsp;&nbsp;{'}'}<br />
        {'}'}<br /><br />
        Car myCar = new Car();<br />
        myCar.drive();
      </div>
    </li>

    <li>
      <strong>Inheritance:</strong><br />
      Allows one class (child) to acquire properties and behaviors (methods) from another class (parent). Promotes code reuse.
      <div className="bg-gray-100 text-sm font-mono p-3 mt-2 rounded">
        class Animal {'{'} void sound() {'{'} System.out.println("Animal sound"); {'}'} {'}'}<br />
        class Dog extends Animal {'{'} void bark() {'{'} System.out.println("Dog barks"); {'}'} {'}'}<br /><br />
        Dog d = new Dog();<br />
        d.sound();<br />
        d.bark();
      </div>
    </li>

    <li>
      <strong>Polymorphism:</strong><br />
      "One interface, many implementations." A method behaves differently depending on the object that invokes it. Two types: method overloading and overriding.
      <div className="bg-gray-100 text-sm font-mono p-3 mt-2 rounded">
        class Animal {'{'} void sound() {'{'} System.out.println("Animal sound"); {'}'} {'}'}<br />
        class Cat extends Animal {'{'} void sound() {'{'} System.out.println("Meow"); {'}'} {'}'}<br /><br />
        Animal a = new Cat();<br />
        a.sound(); // Output: Meow
      </div>
    </li>

    <li>
      <strong>Encapsulation:</strong><br />
      Wrapping data using private variables and exposing access via public getter and setter methods. It protects internal data from outside interference.
      <div className="bg-gray-100 text-sm font-mono p-3 mt-2 rounded">
        class Student {'{'}<br />
        &nbsp;&nbsp;private String name;<br /><br />
        &nbsp;&nbsp;public String getName() {'{'} return name; {'}'}<br />
        &nbsp;&nbsp;public void setName(String name) {'{'} this.name = name; {'}'}<br />
        {'}'}
      </div>
    </li>

    <li>
      <strong>Abstraction:</strong><br />
      Hides unnecessary implementation details and shows only essential features to the user. Achieved using abstract classes and interfaces.
      <div className="bg-gray-100 text-sm font-mono p-3 mt-2 rounded">
        abstract class Shape {'{'} abstract void draw(); {'}'}<br />
        class Circle extends Shape {'{'} void draw() {'{'} System.out.println("Drawing Circle"); {'}'} {'}'}<br /><br />
        Shape s = new Circle();<br />
        s.draw(); // Output: Drawing Circle
      </div>
    </li>

  </ul>
</div>

      </div>
    </div>
  );
};

export default Basicjava;



