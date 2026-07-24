"use client";

const BasicSyntax = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8  space-y-6 ml-10">
        <h1 className="text-4xl font-bold">📘 Basic Syntax of JavaScript</h1>

        <section>
          <h2 className="text-2xl font-semibold">1. Statements</h2>
          <p>JavaScript programs are made of <strong>statements</strong>, each performing an action. Usually end with a semicolon <code>;</code>.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let x = 5;
console.log(x);`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Comments</h2>
          <p>Used to explain code and are ignored during execution.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`// Single-line comment

/*
Multi-line
comment
*/`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Case Sensitivity</h2>
          <p>JavaScript is <strong>case-sensitive</strong>:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let name = "Alice";
let Name = "Bob"; // These are different variables`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Variables</h2>
          <p>Declared using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let age = 25;
const pi = 3.14;`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Data Types</h2>
          <p>JavaScript supports:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>String</code>: "Hello"</li>
            <li><code>Number</code>: 42</li>
            <li><code>Boolean</code>: true / false</li>
            <li><code>Undefined</code>, <code>Null</code></li>
            <li><code>Object</code>, <code>Array</code>, <code>Function</code></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Functions</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`function greet() {
  console.log("Hello!");
}
greet();`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Conditionals</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Loops</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`for (let i = 0; i < 3; i++) {
  console.log(i);
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Operators</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
            <li><strong>Comparison:</strong> <code>==</code>, <code>===</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code></li>
            <li><strong>Logical:</strong> <code>&&</code>, <code>||</code>, <code>!</code></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Objects & Arrays</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "cherry"];`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default BasicSyntax;
