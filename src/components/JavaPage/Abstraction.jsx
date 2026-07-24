import React from 'react';

const Abstraction = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Abstraction in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            <strong>Abstraction</strong> is one of the fundamental Object-Oriented Programming (OOP) concepts in Java. It involves hiding the implementation details of a system and exposing only the essential features to the user. By doing this, abstraction helps in reducing complexity and makes the system more manageable.
            This principle allows developers to focus on what an object does, rather than how it works.
          </p>

          {/* Why Use Abstraction */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Why Use Abstraction?</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Hides complex code implementation from the user</li>
              <li>Improves code readability and maintainability</li>
              <li>Promotes security by exposing only relevant data</li>
              <li>Supports loose coupling between components, allowing easier updates and changes</li>
            </ul>
          </div>

          {/* Types of Abstraction */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">How Abstraction is Achieved in Java</h2>
            <p className="mt-4 text-lg text-gray-600">
              In Java, abstraction is achieved primarily through:
            </p>
            <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Abstract Classes</strong>: These are classes that contain abstract methods (methods without body) and can also have concrete methods (with implementation).</li>
              <li><strong>Interfaces</strong>: These are fully abstract types that define a contract for other classes to implement. Interfaces provide a way for unrelated classes to share common functionality.</li>
            </ul>
          </div>

          {/* Abstract Class Explanation */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Abstract Class in Java</h2>
            <p className="mt-4 text-lg text-gray-600">
              An abstract class is a class that cannot be instantiated on its own. It is designed to be inherited by other classes. Abstract classes may contain abstract methods (without a body) that the subclasses must implement.
              They can also contain concrete methods (with a body) that provide common functionality for subclasses.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`// Abstract class example
abstract class Animal {
    abstract void sound(); // abstract method with no implementation

    void sleep() {
        System.out.println("Sleeping...");
    }
}

// Subclass of Animal
class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal obj = new Dog();
        obj.sound();  // Output: Bark
        obj.sleep();  // Output: Sleeping...
    }
}`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In the example above:
            </p>
            <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
              <li>The <code>Animal</code> class is abstract and contains an abstract method <code>sound()</code>.</li>
              <li>The <code>Dog</code> class extends <code>Animal</code> and provides an implementation for the <code>sound()</code> method.</li>
              <li>We cannot instantiate an abstract class directly. Instead, we create an object of a subclass (like <code>Dog</code>) that implements the abstract methods.</li>
            </ul>
          </div>

          {/* Interface Explanation */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Interface in Java</h2>
            <p className="mt-4 text-lg text-gray-600">
              An interface is a completely abstract class that is used to define a contract for classes to follow. All methods in an interface are abstract by default and must be implemented by any class that "implements" the interface.
              Java interfaces allow multiple inheritance, which means a class can implement multiple interfaces, making it more flexible than abstract classes.
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`// Interface example
interface Vehicle {
    void start();  // Abstract method
}

// Implementing class
class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Bike();
        v.start();  // Output: Bike started
    }
}`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In the example above:
            </p>
            <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
              <li>The <code>Vehicle</code> interface declares the <code>start()</code> method.</li>
              <li>The <code>Bike</code> class implements the <code>Vehicle</code> interface and provides an implementation of the <code>start()</code> method.</li>
              <li>Interfaces allow different, unrelated classes to implement the same behavior (in this case, vehicles starting), providing a flexible design.</li>
            </ul>
          </div>

          {/* Abstract Class vs Interface */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Abstract Class vs Interface</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Abstract classes can have both abstract and concrete methods, while interfaces can only have abstract methods (unless using default methods in Java 8+).</li>
              <li>Interfaces allow multiple inheritance, meaning a class can implement multiple interfaces, but abstract classes do not support multiple inheritance.</li>
              <li>Use an abstract class when classes share some common functionality, and use an interface when classes have common behavior but are not related by inheritance.</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use interfaces when behavior is shared by unrelated classes, for example, <code>Flyable</code> for both <code>Bird</code> and <code>Plane</code>.</li>
              <li>Use abstract classes when classes are closely related and share code.</li>
              <li>Avoid adding implementation logic in interfaces unless using default methods (Java 8+).</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Abstraction;
