"use client";

const VariablesAndDataTypes = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">🔤 Variables and Data Types in JavaScript</h1>

        <section>
          <h2 className="text-2xl font-semibold">What are Variables?</h2>
          <p>
            Variables are containers for storing data values. In JavaScript, you can declare a variable using <code>let</code>, <code>const</code>, or <code>var</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let name = "Alice";
const age = 30;
var isStudent = true;`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">let vs const vs var</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>let</strong>: Block-scoped and can be updated.</li>
            <li><strong>const</strong>: Block-scoped and <strong>cannot</strong> be reassigned.</li>
            <li><strong>var</strong>: Function-scoped (old way; not recommended in modern code).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Data Types in JavaScript</h2>
          <p>JavaScript has <strong>8 basic data types</strong>:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>String</code>: Textual data — <code>"Hello"</code></li>
            <li><code>Number</code>: Integer or floating-point — <code>42</code>, <code>3.14</code></li>
            <li><code>Boolean</code>: true or false</li>
            <li><code>Null</code>: Intentional absence of any value</li>
            <li><code>Undefined</code>: A declared variable without a value</li>
            <li><code>Object</code>: Collections of key-value pairs</li>
            <li><code>Array</code>: Ordered list of values</li>
            <li><code>Symbol</code>: Unique and immutable identifier (advanced)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Examples</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let name = "John";       // String
let age = 25;            // Number
let isActive = true;     // Boolean
let emptyValue = null;   // Null
let notDefined;          // Undefined
let person = {           // Object
  name: "John",
  age: 25
};
let colors = ["red", "blue", "green"]; // Array`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Use <code>typeof</code> to check the data type of a variable: <code>typeof age</code> will return <code>"number"</code>.
        </p>
      </div>
    </div>
  );
};

export default VariablesAndDataTypes;
