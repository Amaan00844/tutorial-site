import React from "react";

const HomeJava = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Title Section */}
        <h1 className="text-4xl font-semibold text-gray-800">Java Home</h1>

        {/* Introduction to Java */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">What is Java?</h2>
          <p className="mt-4 text-lg text-gray-600">
            <strong>Java</strong> is a popular programming language that was created in 1995 by Sun Microsystems, and it’s now owned by Oracle. 
            It’s widely used because it’s easy to learn, powerful, and portable. This means you can write Java code once, and it will work on any computer that has the Java Virtual Machine (JVM) installed.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            The key idea behind Java is "Write Once, Run Anywhere" (WORA), which means Java programs can run on any system without needing to change the code.
          </p>
        </section>

        {/* Program Structure */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Java Program Structure</h2>
          <p className="mt-4 text-lg text-gray-600">
            A Java program typically consists of classes and methods. Every Java program starts with a <code>main()</code> method, which is the starting point of the program. Here's a simple example:
          </p>
          <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
          </pre>
          <p className="mt-2 text-gray-600"><strong>Explanation:</strong> This program simply prints "Hello, World!" on the screen. The <code>System.out.println</code> method is used to print text to the console.</p>
        </section>

        {/* Data Types */}
        <section className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800">Java Data Types</h2>
  <p className="mt-4 text-lg text-gray-600">
    Java has two main categories of data types: <strong>Primitive</strong> and <strong>Non-Primitive</strong>. Let's break them down:
  </p>
  <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
    <li><strong>Primitive Data Types:</strong> These are the basic types that represent simple values like numbers, characters, or boolean values.</li>
    <li><strong>Non-Primitive Data Types:</strong> These are more complex types, such as classes, objects, and arrays, that can hold multiple values.</li>
  </ul>

  <h3 className="mt-4 text-lg text-gray-800">Primitive Data Types</h3>
  <p className="mt-4 text-lg text-gray-600">
    Java supports eight primitive data types, each used for a specific kind of value:
  </p>
  <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
    <li><strong>int:</strong> Represents whole numbers. For example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`int age = 25; // stores an integer value`}
      </pre>
      <p className="mt-2">Here, <code>age</code> is an integer variable that stores the value 25.</p>
    </li>
    <li><strong>double:</strong> Represents decimal numbers. For example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`double price = 99.99; // stores a decimal value`}
      </pre>
      <p className="mt-2">Here, <code>price</code> is a double variable that stores the value 99.99.</p>
    </li>
    <li><strong>char:</strong> Represents a single character. For example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`char grade = 'A'; // stores a single character`}
      </pre>
      <p className="mt-2">Here, <code>grade</code> is a char variable that stores the character 'A'.</p>
    </li>
    <li><strong>boolean:</strong> Represents true or false values. For example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`boolean isJavaFun = true; // stores a boolean value`}
      </pre>
      <p className="mt-2">Here, <code>isJavaFun</code> is a boolean variable that stores the value <code>true</code>.</p>
    </li>
    <li><strong>String:</strong> Represents a sequence of characters (not technically a primitive type, but often treated as such in Java). For example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`String name = "John"; // stores a string value`}
      </pre>
      <p className="mt-2">Here, <code>name</code> is a String variable that stores the text "John".</p>
    </li>
  </ul>

  <h3 className="mt-4 text-lg text-gray-800">Non-Primitive Data Types</h3>
  <p className="mt-4 text-lg text-gray-600">
    Non-primitive data types are more complex types and include objects, arrays, and other custom types. Here are some examples:
  </p>
  <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
    <li><strong>Objects:</strong> An object is an instance of a class that can store multiple values in the form of fields and methods. Example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`public class Person {
  String name;
  int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}

Person person1 = new Person("Alice", 30);`}
      </pre>
      <p className="mt-2">Here, <code>Person</code> is a class with fields <code>name</code> and <code>age</code>. <code>person1</code> is an object of the <code>Person</code> class.</p>
    </li>
    <li><strong>Arrays:</strong> An array stores multiple values of the same type. Example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`int[] numbers = {1, 2, 3, 4, 5};`}
      </pre>
      <p className="mt-2">Here, <code>numbers</code> is an array that holds five integer values: 1, 2, 3, 4, and 5.</p>
    </li>
  </ul>

  <h3 className="mt-4 text-lg text-gray-800">Type Casting</h3>
  <p className="mt-4 text-lg text-gray-600">
    Type casting in Java allows you to convert one data type into another. There are two types of type casting:
  </p>
  <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
    <li><strong>Implicit Casting (Widening):</strong> This happens automatically when a smaller data type is converted to a larger one. Example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`int num = 100;
double result = num; // Implicit casting from int to double`}
      </pre>
      <p className="mt-2">Here, <code>num</code> is an integer, and it is implicitly cast to a double when assigned to <code>result</code>.</p>
    </li>
    <li><strong>Explicit Casting (Narrowing):</strong> This requires manual conversion when a larger data type is converted to a smaller one. Example:
      <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`double price = 9.99;
int intPrice = (int) price; // Explicit casting from double to int`}
      </pre>
      <p className="mt-2">Here, <code>price</code> is a double, and it is explicitly cast to an integer value (which will lose the decimal part).</p>
    </li>
  </ul>
</section>


        {/* Syntax */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Java Syntax</h2>
          <p className="mt-4 text-lg text-gray-600">
            Java syntax is similar to many other programming languages like C/C++. It uses semicolons to end statements and curly braces to group code.
          </p>
          <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`public class Welcome {
  public static void main(String[] args) {
    String message = "Welcome to Java!";
    System.out.println(message);
  }
}`}
          </pre>
          <p className="mt-2 text-gray-600"><strong>Explanation:</strong> This program stores a string message and prints it to the console.</p>
        </section>

        {/* Control Statements */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Java Control Statements</h2>
          <p className="mt-4 text-lg text-gray-600">
            Control statements in Java help you make decisions or repeat actions based on conditions. Let's take a look at the most common ones:
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>if-else:</strong> This statement lets you execute a block of code based on a condition. For example:</li>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`if (x > 10) {
  System.out.println("x is greater than 10");
} else {
  System.out.println("x is less than or equal to 10");
}`}
            </pre>
            <li><strong>switch:</strong> A way to select one out of many options based on the value of a variable. Example:</li>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`int day = 3;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  default:
    System.out.println("Invalid day");
}`}
            </pre>
            <li><strong>for loop:</strong> Executes a block of code a set number of times. Example:</li>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
{`for (int i = 1; i <= 5; i++) {
  System.out.println(i);
}`}
            </pre>
          </ul>
        </section>

        {/* Object-Oriented Programming Concepts */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Object-Oriented Programming (OOP) in Java</h2>
          <p className="mt-4 text-lg text-gray-600">
            Java follows Object-Oriented Programming (OOP) principles. Here’s a simple breakdown:
          </p>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li><strong>Class & Object:</strong> A class is like a blueprint for objects, and objects are real instances created from that blueprint.</li>
            <li><strong>Encapsulation:</strong> Bundling data (variables) and methods (functions) together into a single unit called a class.</li>
            <li><strong>Inheritance:</strong> One class can inherit fields and methods from another class, making code reuse possible.</li>
            <li><strong>Polymorphism:</strong> Allows methods to have the same name but behave differently based on the object’s type.</li>
            <li><strong>Abstraction:</strong> Hides the complex implementation details and shows only necessary features to the user.</li>
          </ul>
        </section>

        {/* Java Best Practices */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Java Best Practices</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>Follow naming conventions for better readability.</li>
            <li>Always close resources such as files and database connections when done.</li>
            <li>Keep code organized into functions and classes for maintainability.</li>
            <li>Use comments where necessary, especially for complex logic.</li>
            <li>Handle errors using try-catch blocks to prevent crashes.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mt-10">
          <p className="text-xl text-gray-700 font-medium">
            Ready to dive deeper into Java? Start by writing simple programs and slowly increase the complexity of your projects.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomeJava;


