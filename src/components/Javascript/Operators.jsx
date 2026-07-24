"use client";

const Operators = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">🧮 JavaScript Operators</h1>
        <p>
          Operators in JavaScript are special symbols used to perform operations on values and variables.
        </p>

        {/* Arithmetic Operators */}
        <section>
          <h2 className="text-2xl font-semibold">1. Arithmetic Operators</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>+</code> : Addition</li>
            <li><code>-</code> : Subtraction</li>
            <li><code>*</code> : Multiplication</li>
            <li><code>/</code> : Division</li>
            <li><code>%</code> : Modulus (Remainder)</li>
            <li><code>**</code> : Exponentiation</li>
            <li><code>++</code> : Increment</li>
            <li><code>--</code> : Decrement</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1`}</code>
          </pre>
        </section>

        {/* Assignment Operators */}
        <section>
          <h2 className="text-2xl font-semibold">2. Assignment Operators</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>=</code> : Assign</li>
            <li><code>+=</code>, <code>-=</code>, <code>*=</code>, etc.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let x = 5;
x += 3; // same as x = x + 3
console.log(x); // 8`}</code>
          </pre>
        </section>

        {/* Comparison Operators */}
        <section>
          <h2 className="text-2xl font-semibold">3. Comparison Operators</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>==</code> : Equal to (loose equality)</li>
            <li><code>===</code> : Strict equality</li>
            <li><code>!=</code>, <code>!==</code> : Not equal</li>
            <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code> : Greater/Less than</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`console.log(5 == "5");  // true
console.log(5 === "5"); // false`}</code>
          </pre>
        </section>

        {/* Logical Operators */}
        <section>
          <h2 className="text-2xl font-semibold">4. Logical Operators</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>&&</code> : AND</li>
            <li><code>||</code> : OR</li>
            <li><code>!</code> : NOT</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false`}</code>
          </pre>
        </section>

        {/* Other Operators */}
        <section>
          <h2 className="text-2xl font-semibold">5. Other Common Operators</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>typeof</code> : Returns the type of a variable</li>
            <li><code>instanceof</code> : Checks instance of an object</li>
            <li><code>?</code> : Ternary operator for conditional expressions</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`console.log(typeof "hello");  // "string"
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Operators are essential building blocks of logic and calculations in any JavaScript program.
        </p>
      </div>
    </div>
  );
};

export default Operators;
