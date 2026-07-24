
import React from 'react';

const Encapsulation = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Encapsulation in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            <strong>Encapsulation</strong> is a fundamental concept in object-oriented programming (OOP). It involves bundling data (fields) and the methods (functions) that operate on that data into a single unit — typically a class — while restricting direct access to some components. This is achieved using <strong>access modifiers</strong>.
          </p>

          {/* Why it's Important */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Why Encapsulation is Important</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Improves modularity by hiding internal implementation details</li>
              <li>Provides control over data via getters and setters</li>
              <li>Makes code more maintainable and less error-prone</li>
              <li>Protects data from unauthorized access and modification</li>
            </ul>
          </div>

          {/* Example */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Java Example</h2>
            <p className="mt-4 text-lg text-gray-600">
              Here is a real-world Java example demonstrating encapsulation:
            </p>
            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class BankAccount {
  private String accountHolder;
  private double balance;

  public BankAccount(String name, double initialDeposit) {
    accountHolder = name;
    if (initialDeposit >= 0) {
      balance = initialDeposit;
    } else {
      balance = 0;
    }
  }

  public String getAccountHolder() {
    return accountHolder;
  }

  public double getBalance() {
    return balance;
  }

  public void deposit(double amount) {
    if (amount > 0) {
      balance += amount;
    }
  }

  public void withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
    }
  }
}`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              This code ensures that <code>accountHolder</code> and <code>balance</code> can only be accessed or modified using the provided methods. This is the essence of encapsulation.
            </p>
          </div>

          {/* Access Modifiers */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Access Modifiers in Java</h2>
            <p className="mt-4 text-lg text-gray-600">
              Java provides four main access modifiers to control the visibility of class members (fields, methods, constructors). These modifiers define where the members can be accessed:
            </p>

            {/* Access Modifiers Explanation */}
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li><strong>private:</strong> When a member is declared as private, it is only accessible within the class where it is defined. This ensures strict control over the data. It is the most restrictive access modifier.</li>
              <li><strong>default (no modifier):</strong> If no access modifier is specified, the member is considered to have package-private access. This means it is accessible only within the same package.</li>
              <li><strong>protected:</strong> A protected member is accessible within the same package and by subclasses (even if they are in different packages). It allows for more flexibility than private.</li>
              <li><strong>public:</strong> A public member can be accessed from anywhere. It has the least restrictions and is usually used for methods that need to be accessed globally.</li>
            </ul>

            {/* Access Modifier Examples */}
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Examples of Each Access Modifier</h3>
            <p className="mt-4 text-lg text-gray-600">
              Let’s look at how each modifier is used in a Java class with examples:
            </p>

            <pre className="mt-4 p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public class AccessModifiersExample {
  private String name;  // Only accessible within this class
  int age;  // Default: Accessible within the same package
  protected String address;  // Accessible within the same package and subclasses
  public String email;  // Accessible from anywhere

  public AccessModifiersExample(String name, int age, String address, String email) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
  }

  // Public method to access private field
  public String getName() {
    return name;
  }

  // Protected method
  protected void printAddress() {
    System.out.println(address);
  }
}`}
            </pre>

            <p className="mt-4 text-lg text-gray-600">
              - <code>name</code> is marked as <strong>private</strong>, so it can only be accessed within the <code>AccessModifiersExample</code> class.<br/>
              - <code>age</code> has the default access, so it can be accessed only within classes in the same package.<br/>
              - <code>address</code> is marked as <strong>protected</strong>, so it can be accessed within the package and also by subclasses.<br/>
              - <code>email</code> is marked as <strong>public</strong>, so it can be accessed from anywhere in the program.
            </p>
          </div>

          {/* Access Modifier Table */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Access Modifier Table</h2>
            <table className="mt-4 w-full text-lg text-gray-600 border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Modifier</th>
                  <th className="border border-gray-300 p-2">Class</th>
                  <th className="border border-gray-300 p-2">Package</th>
                  <th className="border border-gray-300 p-2">Subclass</th>
                  <th className="border border-gray-300 p-2">World</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">private</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">❌</td>
                  <td className="border border-gray-300 p-2">❌</td>
                  <td className="border border-gray-300 p-2">❌</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">default</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">❌</td>
                  <td className="border border-gray-300 p-2">❌</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">protected</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">❌</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">public</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                  <td className="border border-gray-300 p-2">✔️</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Benefits */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Benefits of Encapsulation</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Improves security by hiding internal object state</li>
              <li>Encourages loose coupling between objects</li>
              <li>Allows input validation through setters</li>
              <li>Makes code more flexible, modular, and maintainable</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Encapsulation;


