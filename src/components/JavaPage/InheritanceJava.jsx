import React from 'react';

const InheritanceJava = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Inheritance in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            <strong>Inheritance</strong> is a mechanism in Java that allows one class to acquire the properties (fields) and behaviors (methods) of another class. It promotes reusability and forms the basis for polymorphism and method overriding in object-oriented programming.
          </p>

          {/* Why Use Inheritance */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Why Use Inheritance?</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Promotes <strong>code reusability</strong> by eliminating redundancy</li>
              <li>Allows <strong>method overriding</strong> (polymorphism)</li>
              <li>Improves <strong>code readability and organization</strong></li>
              <li>Supports <strong>hierarchical classification</strong></li>
              <li>Makes future maintenance easier</li>
            </ul>
          </div>

          {/* Terminology */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Key Terminology</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Superclass (Parent):</strong> The class being inherited from</li>
              <li><strong>Subclass (Child):</strong> The class that inherits the superclass</li>
              <li><strong>extends:</strong> Keyword used to inherit a class</li>
              <li><strong>is-a relationship:</strong> Inheritance forms an "is-a" relationship between subclass and superclass</li>
            </ul>
          </div>

          {/* Simple Example */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Basic Example</h2>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`// Superclass
class Animal {
  void eat() {
    System.out.println("This animal eats food");
  }
}

// Subclass
class Dog extends Animal {
  void bark() {
    System.out.println("The dog barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.eat();   // Inherited method
    d.bark();  // Own method
  }
}`}
            </pre>
          </div>

          {/* Types of Inheritance */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Types of Inheritance in Java</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>Single Inheritance:</strong> One subclass inherits one superclass</li>
              <li><strong>Multilevel Inheritance:</strong> A subclass inherits from a class which is already a subclass</li>
              <li><strong>Hierarchical Inheritance:</strong> Multiple subclasses inherit from one superclass</li>
              <li><strong>Multiple Inheritance (via Interface):</strong> Java allows a class to implement multiple interfaces (but not extend multiple classes)</li>
            </ul>
          </div>

          {/* Example of Multilevel Inheritance */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Multilevel Inheritance Example</h2>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`class Animal {
  void eat() {
    System.out.println("Animal eats");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("Dog barks");
  }
}

class Puppy extends Dog {
  void weep() {
    System.out.println("Puppy weeps");
  }
}

public class Main {
  public static void main(String[] args) {
    Puppy p = new Puppy();
    p.eat();   // From Animal
    p.bark();  // From Dog
    p.weep();  // Own method
  }
}`}
            </pre>
          </div>

          {/* Method Overriding */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">What is Method Overriding?</h2>
            <p className="mt-4 text-lg text-gray-600">
              When a subclass provides a specific implementation of a method that is already defined in its superclass, it is called <strong>method overriding</strong>.
            </p>
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

public class Main {
  public static void main(String[] args) {
    Animal a = new Dog(); // Upcasting
    a.sound();  // Dog's sound() is called
  }
}`}
            </pre>
          </div>

          {/* Interface Example for Multiple Inheritance */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Multiple Inheritance using Interface</h2>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`interface Printable {
  void print();
}

interface Showable {
  void show();
}

class A implements Printable, Showable {
  public void print() {
    System.out.println("Printing...");
  }

  public void show() {
    System.out.println("Showing...");
  }
}

public class Main {
  public static void main(String[] args) {
    A obj = new A();
    obj.print();
    obj.show();
  }
}`}
            </pre>
          </div>

          {/* Limitations */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Limitations of Inheritance</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Can lead to tight coupling between classes</li>
              <li>Deep inheritance trees reduce code readability</li>
              <li>Java does not support multiple class inheritance to avoid ambiguity (Diamond Problem)</li>
              <li>Misuse may lead to fragile code</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="mt-6 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices for Inheritance</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use inheritance when a clear "is-a" relationship exists</li>
              <li>Prefer composition over inheritance where suitable</li>
              <li>Keep inheritance hierarchies shallow</li>
              <li>Avoid overriding methods unnecessarily</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InheritanceJava;
