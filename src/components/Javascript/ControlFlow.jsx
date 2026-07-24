"use client";

const ControlFlow = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8  space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">🔁 Control Flow in JavaScript</h1>
        <p className="mb-4">
          Control flow refers to the order in which statements are executed in a program. In JavaScript, we use various control structures to control the flow of execution based on conditions or loops.
        </p>

        {/* if / else if / else */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. if / else if / else</h2>
          <p className="mb-4">
            The <code>if</code> statement executes a block of code if the condition is true. If the condition is false, the <code>else</code> statement executes. You can also use <code>else if</code> to check multiple conditions.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let age = 20;

if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age < 65) {
  console.log("Adult");
} else {
  console.log("Senior");
}`}</code>
          </pre>
          <p className="mb-4">Note: JavaScript treats non-boolean values as "truthy" or "falsy".</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let name = ""; // empty string is falsy
if (name) {
  console.log("Name exists");
} else {
  console.log("Name is missing");
}`}</code>
          </pre>
        </section>

        {/* switch */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. switch Statement</h2>
          <p className="mb-4">
            The <code>switch</code> statement evaluates an expression and compares it with values in each case block. It helps to execute one of many code blocks.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Just another day");
}`}</code>
          </pre>
          <p className="mb-4">Remember, the <code>break</code> statement prevents fall-through, ensuring only the matched case block executes.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let fruit = "apple";
switch(fruit) {
  case "apple":
  case "banana":
    console.log("It's a fruit");
    break;
  default:
    console.log("Unknown");
}`}</code>
          </pre>
        </section>

        {/* ternary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Ternary Operator</h2>
          <p className="mb-4">
            The <code>ternary</code> operator provides a concise way to write simple <code>if/else</code> statements in one line. It is written as: <code>condition ? valueIfTrue : valueIfFalse</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let score = 85;
let result = (score >= 60) ? "Pass" : "Fail";
console.log(result); // Pass`}</code>
          </pre>
          <p className="mb-4">You can also nest ternary operators, but it's best to avoid over-complicating it.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>{`let age = 20;
let category = (age < 13) ? "Child" : (age < 18) ? "Teenager" : "Adult";
console.log(category); // Adult`}</code>
          </pre>
        </section>

        {/* Loops */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Loops</h2>
          <p className="mb-4">
            Loops allow you to run a block of code multiple times. JavaScript provides several types of loops.
          </p>

          <h3 className="text-xl font-semibold mb-4">for Loop</h3>
          <p className="mb-4">The <code>for</code> loop is useful when you know how many times you want to iterate over a block of code.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-4">while Loop</h3>
          <p className="mb-4">The <code>while</code> loop runs as long as the condition is true.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-4">do...while Loop</h3>
          <p className="mb-4">The <code>do...while</code> loop guarantees the code will run at least once, as the condition is checked after the code block executes.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-4">for...of Loop</h3>
          <p className="mb-4">The <code>for...of</code> loop is useful for iterating over arrays or iterable objects.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color); // red, green, blue
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-4">for...in Loop</h3>
          <p className="mb-4">The <code>for...in</code> loop is used for iterating over the properties of an object.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key, person[key]); // name Alice, age 25
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-4">Loop Control: break & continue</h3>
          <p className="mb-4">
            - <code>break</code> stops the loop completely.
            - <code>continue</code> skips the current iteration and moves to the next one.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skips 3
  }
  if (i === 4) {
    break; // Stops loop
  }
  console.log(i); // 0, 1, 2
}`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Understanding control flow helps you write better, more logical code by directing the program's execution path based on conditions and repetitions.
        </p>
      </div>
    </div>
  );
};

export default ControlFlow;
