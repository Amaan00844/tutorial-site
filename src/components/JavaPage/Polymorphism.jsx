import React from 'react';

const Polymorphism = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Polymorphism in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            <strong>Polymorphism</strong> is a fundamental concept in Object-Oriented Programming (OOP) that means “many forms”. It allows objects to behave in multiple ways based on their data type or class. In Java, polymorphism enables a common interface to interact with different types of objects, allowing for code flexibility and reusability.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Java supports two types of polymorphism:
          </p>

          {/* Types of Polymorphism */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Types of Polymorphism in Java</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Compile-time Polymorphism (Static Binding / Method Overloading)</strong></li>
              <li><strong>Runtime Polymorphism (Dynamic Binding / Method Overriding)</strong></li>
            </ul>
          </div>

          {/* Compile-Time Polymorphism */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">1. Compile-time Polymorphism (Method Overloading)</h2>
            <p className="mt-4 text-lg text-gray-600">
              Compile-time polymorphism occurs when the method to be executed is determined at compile time. It is achieved by **method overloading**, where multiple methods have the same name but different parameters (different number, types, or order).
            </p>

            <h3 className="mt-4 text-xl font-semibold text-gray-700">Example:</h3>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));           // Output: 15
        System.out.println(calc.add(2.5, 3.7));        // Output: 6.2
        System.out.println(calc.add(1, 2, 3));         // Output: 6
    }
}`}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Here, the method `add` is overloaded with different parameter types and counts. The appropriate version is chosen by the compiler.
            </p>
          </div>

          {/* Runtime Polymorphism */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">2. Runtime Polymorphism (Method Overriding)</h2>
            <p className="mt-4 text-lg text-gray-600">
              Runtime polymorphism is achieved through **method overriding**, where a subclass provides a specific implementation of a method defined in its superclass. The method call is resolved at runtime based on the object’s actual type.
            </p>

            <h3 className="mt-4 text-xl font-semibold text-gray-700">Example:</h3>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class TestPolymorphism {
    public static void main(String[] args) {
        Animal a;

        a = new Dog();
        a.sound(); // Output: Dog barks

        a = new Cat();
        a.sound(); // Output: Cat meows
    }
}`}
            </pre>
            <p className="mt-2 text-lg text-gray-600">
              Even though the reference is of type `Animal`, the actual method called depends on the object (`Dog` or `Cat`) assigned at runtime.
            </p>
          </div>

          {/* Upcasting and Downcasting */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Upcasting and Downcasting</h2>
            <p className="mt-4 text-lg text-gray-600">
              <strong>Upcasting</strong> refers to treating a subclass object as an instance of its superclass. This is commonly used in polymorphism and is always safe.
              <br />
              <strong>Downcasting</strong> means casting a superclass reference back to its subclass. This is risky and should be done carefully, usually after type checking.
            </p>

            <h3 className="mt-4 text-xl font-semibold text-gray-700">Example:</h3>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`Animal animal = new Dog();  // Upcasting
animal.sound();              // Outputs: Dog barks

Dog dog = (Dog) animal;      // Downcasting (safe here)
dog.sound();`}
            </pre>
          </div>

          {/* Real-life Scenario */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Real-Life Analogy</h2>
            <p className="mt-4 text-lg text-gray-600">
              Think of a remote control (superclass) that can operate different types of devices like TVs, ACs, or fans (subclasses). You use the same remote (reference) to control various devices (objects), and the behavior changes based on the device (object type).
            </p>
          </div>

          {/* Advantages */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Advantages of Polymorphism</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Improves code reusability and maintainability</li>
              <li>Reduces complexity by letting one interface handle multiple behaviors</li>
              <li>Enables dynamic method dispatch (important for frameworks and libraries)</li>
              <li>Supports extensible and flexible application design</li>
              <li>Improves testing by allowing mock implementations of interfaces</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use interfaces or abstract classes to define common behaviors</li>
              <li>Apply method overloading only when it improves readability</li>
              <li>Always use <code>@Override</code> annotation to prevent errors</li>
              <li>Prefer upcasting to generalize behavior and improve flexibility</li>
              <li>Use polymorphism to reduce conditional logic (if-else, switch)</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Polymorphism;
