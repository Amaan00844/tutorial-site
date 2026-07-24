import React from 'react';

const Oops = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">OOP (Object-Oriented Programming) in Python</h1>

        <p className="mt-4 text-lg text-gray-700">
          Object-Oriented Programming (OOP) is a way of writing code by creating “objects” that represent real-world things.
          OOP makes code reusable, organized, and easier to manage.
        </p>

        {/* 1. Class & Object */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700">1. Class and Object</h2>
          <p className="mt-2 text-lg text-gray-700">
            A <strong>Class</strong> is a blueprint (like a car design), and an <strong>Object</strong> is the actual item (like a real car built from that design).
          </p>
          <p className="text-gray-700 mt-2">
            🏠 <strong>Real-world Example:</strong> A “House” class can be used to create different house objects with different colors and sizes.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-4 overflow-auto">
{`class House:
    def __init__(self, color, size):
        self.color = color
        self.size = size

    def describe(self):
        print(f"This house is {self.color} and {self.size} sq ft.")

h1 = House("blue", 1200)
h2 = House("green", 900)

h1.describe()  # This house is blue and 1200 sq ft.
h2.describe()  # This house is green and 900 sq ft.`}
          </pre>
        </div>

        {/* 2. Encapsulation */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700">2. Encapsulation</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>Encapsulation</strong> means hiding the internal details of an object and only exposing necessary parts.
          </p>
          <p className="text-gray-700 mt-2">
            🔐 <strong>Real-world Example:</strong> Think of a bank ATM — you can withdraw or deposit, but you don’t see the internal banking system.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-4 overflow-auto">
{`class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # private variable

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount

    def check_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.check_balance())  # 1500`}
          </pre>
        </div>

        {/* 3. Inheritance */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700">3. Inheritance</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>Inheritance</strong> allows one class to use the features (methods/variables) of another class.
          </p>
          <p className="text-gray-700 mt-2">
            👪 <strong>Real-world Example:</strong> A “Car” class and a “SportsCar” class — SportsCar can inherit from Car and add more features.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-4 overflow-auto">
{`class Car:
    def start(self):
        print("Car is starting...")

class SportsCar(Car):
    def turbo(self):
        print("Turbo mode activated!")

my_car = SportsCar()
my_car.start()     # Car is starting...
my_car.turbo()     # Turbo mode activated!`}
          </pre>
        </div>

        {/* 4. Polymorphism */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700">4. Polymorphism</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>Polymorphism</strong> means the same method name can behave differently based on the object calling it.
          </p>
          <p className="text-gray-700 mt-2">
            🐾 <strong>Real-world Example:</strong> A “Dog” and “Cat” both have a method called <code>speak()</code> but they bark and meow differently.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-4 overflow-auto">
{`class Animal:
    def speak(self):
        print("Some sound")

class Dog(Animal):
    def speak(self):
        print("Dog says Woof!")

class Cat(Animal):
    def speak(self):
        print("Cat says Meow!")

def make_sound(animal):
    animal.speak()

make_sound(Dog())  # Dog says Woof!
make_sound(Cat())  # Cat says Meow!`}
          </pre>
        </div>

        {/* 5. Abstraction */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700">5. Abstraction</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>Abstraction</strong> means showing only the necessary details and hiding the complex parts.
          </p>
          <p className="text-gray-700 mt-2">
            🚗 <strong>Real-world Example:</strong> When you drive a car, you use the steering and pedals but don’t worry about how the engine works.
          </p>
          <pre className="bg-gray-100 text-blue-700 p-4 rounded-lg mt-4 overflow-auto">
{`from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

class Bike(Vehicle):
    def start(self):
        print("Bike started!")

my_bike = Bike()
my_bike.start()  # Bike started!`}
          </pre>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <p className="text-lg text-gray-700">
            🔁 OOP helps us write clean, reusable, and real-world-friendly code.
            Start small by creating your own classes like <code>Student</code>, <code>Laptop</code>, or <code>Library</code> and apply these concepts!
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Oops;

