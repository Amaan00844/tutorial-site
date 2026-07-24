import React from 'react';

const ClassObjectJava = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Classes and Objects in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            Java is an <strong>object-oriented programming language</strong>. It uses classes and objects to structure code and solve problems efficiently. Everything in Java revolves around the concepts of <strong>classes</strong> and <strong>objects</strong>.
          </p>

          {/* What is a Class */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">What is a Class?</h2>
            <p className="mt-4 text-lg text-gray-600">
              A <strong>class</strong> is a user-defined blueprint or prototype from which objects are created. It can contain:
            </p>
            <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
              <li>Fields (variables)</li>
              <li>Methods (functions)</li>
              <li>Constructors</li>
              <li>Blocks</li>
              <li>Nested classes and interfaces</li>
            </ul>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Student {
    // Fields
    String name;
    int age;

    // Method
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}`}
            </pre>
          </div>

          {/* What is an Object */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">What is an Object?</h2>
            <p className="mt-4 text-lg text-gray-600">
              An <strong>object</strong> is an instance of a class. When a class is defined, no memory is allocated until an object is created. An object can access all non-static members (variables and methods) of a class.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(); // Creating object
        s1.name = "Alice";
        s1.age = 20;
        s1.display(); // Calling method
    }
}`}
            </pre>
          </div>

          {/* Real-Life Analogy */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Real-Life Analogy</h2>
            <p className="mt-4 text-lg text-gray-600">
              Think of a <strong>class</strong> as a blueprint of a car. It defines the structure — wheels, engine, color, etc. 
              An <strong>object</strong> is a specific car built using that blueprint — like a red Honda or blue Ford. Each object has its own state and behavior.
            </p>
          </div>

          {/* Fields and Methods */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Fields and Methods</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Fields:</strong> Variables inside a class that hold data or attributes.</li>
              <li><strong>Methods:</strong> Functions defined in a class to define behavior.</li>
            </ul>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Book {
    String title;  // field
    int pages;     // field

    void info() {  // method
        System.out.println("Title: " + title + ", Pages: " + pages);
    }
}`}
            </pre>
          </div>

          {/* Constructors */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Constructors</h2>
            <p className="mt-4 text-lg text-gray-600">
              A <strong>constructor</strong> is a special method that gets called automatically when an object is created. It has the same name as the class and does not have a return type.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Person {
    String name;

    // Constructor
    Person(String n) {
        name = n;
    }

    void greet() {
        System.out.println("Hello, " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person("John");
        p.greet();  // Output: Hello, John
    }
}`}
            </pre>
          </div>

          {/* Multiple Objects */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Creating Multiple Objects</h2>
            <p className="mt-4 text-lg text-gray-600">
              You can create many objects from the same class. Each object has its own copy of instance variables.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Animal {
    String name;

    void sound() {
        System.out.println(name + " makes a sound.");
    }
}

public class Zoo {
    public static void main(String[] args) {
        Animal a1 = new Animal();
        a1.name = "Dog";

        Animal a2 = new Animal();
        a2.name = "Cat";

        a1.sound(); // Dog makes a sound.
        a2.sound(); // Cat makes a sound.
    }
}`}
            </pre>
          </div>

          {/* Access Modifiers */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Access Modifiers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Access modifiers control the visibility of class members:
            </p>
            <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
              <li><code>public</code>: Accessible from anywhere</li>
              <li><code>private</code>: Accessible only within the class</li>
              <li><code>protected</code>: Accessible within the same package or subclasses</li>
              <li><code>default</code>: Accessible within the same package</li>
            </ul>
          </div>

          {/* Static vs Non-static */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Static vs Non-static</h2>
            <p className="mt-4 text-lg text-gray-600">
              <strong>Static</strong> members belong to the class, while <strong>non-static</strong> members belong to an instance.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Counter {
    static int count = 0;

    Counter() {
        count++;
        System.out.println("Count: " + count);
    }

    public static void main(String[] args) {
        Counter c1 = new Counter(); // Count: 1
        Counter c2 = new Counter(); // Count: 2
    }
}`}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use meaningful class and variable names.</li>
              <li>Keep class responsibilities focused (Single Responsibility Principle).</li>
              <li>Use constructors to initialize objects properly.</li>
              <li>Encapsulate fields by making them <code>private</code> and using <code>getters/setters</code>.</li>
              <li>Avoid making everything static — use it only when shared data is required.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassObjectJava;

