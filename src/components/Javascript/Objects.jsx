"use client";

const ObjectsPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">🔑 JavaScript Objects</h1>
        <p className="mb-4">
          In JavaScript, an object is a collection of key-value pairs. Objects are a fundamental part of JavaScript, allowing you to store and manage complex data structures. You can create objects to represent real-world entities like a person, a car, or even a website.
        </p>

        {/* Creating Objects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Creating Objects</h2>
          <p className="mb-4">
            Objects can be created using either the object literal syntax or the <code>new Object()</code> syntax.
          </p>
          
          {/* Object Literal */}
          <h3 className="text-xl font-semibold mb-4">Object Literal</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};`}</code>
          </pre>

          {/* Using the `new Object()` Syntax */}
          <h3 className="text-xl font-semibold mb-4">Using the <code>new Object()</code> Syntax</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = new Object();
person.name = 'John Doe';
person.age = 30;
person.job = 'Developer';`}</code>
          </pre>
        </section>

        {/* Accessing Object Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Accessing Object Properties</h2>
          <p className="mb-4">
            You can access object properties using either dot notation or bracket notation.
          </p>

          {/* Dot Notation */}
          <h3 className="text-xl font-semibold mb-4">Dot Notation</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`console.log(person.name); // John Doe`}</code>
          </pre>

          {/* Bracket Notation */}
          <h3 className="text-xl font-semibold mb-4">Bracket Notation</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`console.log(person['age']); // 30`}</code>
          </pre>
        </section>

        {/* Adding and Modifying Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Adding and Modifying Properties</h2>
          <p className="mb-4">
            You can add new properties to an object or modify existing ones using either dot or bracket notation.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`person.country = 'USA'; // Adding a new property
person.age = 31; // Modifying an existing property`}</code>
          </pre>
        </section>

        {/* Deleting Object Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Deleting Object Properties</h2>
          <p className="mb-4">
            To remove a property from an object, you can use the <code>delete</code> operator.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`delete person.job; // Deletes the 'job' property`}</code>
          </pre>
        </section>

        {/* Nested Objects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Nested Objects</h2>
          <p className="mb-4">
            JavaScript objects can contain other objects as properties, which allows you to create complex data structures.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = {
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};

console.log(person.address.city); // New York`}</code>
          </pre>
        </section>

        {/* Methods in Objects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Methods in Objects</h2>
          <p className="mb-4">
            Objects can also have methods, which are functions associated with the object. You can define a method as a property of the object.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = {
  name: 'John Doe',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // Hello, John Doe`}</code>
          </pre>
        </section>

        {/* Object Destructuring */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Object Destructuring</h2>
          <p className="mb-4">
            Destructuring allows you to extract values from an object into variables.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};

const { name, age } = person; // Extracts 'name' and 'age' properties

console.log(name); // John Doe
console.log(age); // 30`}</code>
          </pre>
        </section>

        {/* Iterating over Objects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Iterating over Objects</h2>
          <p className="mb-4">
            You can iterate over the properties of an object using a <code>for...in</code> loop.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Objects are a powerful way to organize and store data in JavaScript. By understanding how to create, manipulate, and iterate over objects, you can manage complex data structures and build more sophisticated applications.
        </p>
      </div>
    </div>
  );
};

export default ObjectsPage;
