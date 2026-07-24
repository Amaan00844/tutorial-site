"use client";

const LoopsPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">🔁 Loops in JavaScript</h1>
        <p className="mb-4">
          Loops are used to execute a block of code repeatedly, as long as a specified condition is true. In JavaScript, there are different types of loops, each with its own use case.
        </p>

        {/* for loop */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. <code>for</code> Loop</h2>
          <p className="mb-4">
            The <code>for</code> loop is used when you know beforehand how many times you want the loop to run. It's commonly used for iterating over a range of values.
          </p>
          <h3 className="text-xl font-semibold mb-4">Syntax:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}</code>
          </pre>
          <p className="mb-4">
            In this example, the loop runs 5 times, printing the values from 0 to 4.
          </p>
        </section>

        {/* while loop */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. <code>while</code> Loop</h2>
          <p className="mb-4">
            The <code>while</code> loop repeats a block of code as long as the specified condition evaluates to <code>true</code>.
          </p>
          <h3 className="text-xl font-semibold mb-4">Syntax:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}</code>
          </pre>
          <p className="mb-4">
            The loop continues as long as <code>{"i < 5"}</code> is true. Each time the loop runs, <code>i</code> is incremented.
          </p>
        </section>

        {/* do...while loop */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. <code>do...while</code> Loop</h2>
          <p className="mb-4">
            The <code>do...while</code> loop is similar to the <code>while</code> loop, but it guarantees that the code block will run at least once before checking the condition.
          </p>
          <h3 className="text-xl font-semibold mb-4">Syntax:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}</code>
          </pre>
          <p className="mb-4">
            The <code>do...while</code> loop will run the code once before evaluating the condition.
          </p>
        </section>

        {/* for...in loop */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. <code>for...in</code> Loop</h2>
          <p className="mb-4">
            The <code>for...in</code> loop is used to iterate over the keys of an object or the indices of an array.
          </p>
          <h3 className="text-xl font-semibold mb-4">Syntax:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const person = { name: 'Alice', age: 25, city: 'New York' };
for (const key in person) {
  console.log(key + ': ' + person[key]);
}`}</code>
          </pre>
          <p className="mb-4">
            In this example, the loop iterates over the properties of the object <code>person</code>.
          </p>
        </section>

        {/* for...of loop */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. <code>for...of</code> Loop</h2>
          <p className="mb-4">
            The <code>for...of</code> loop is used to iterate over iterable objects like arrays, strings, maps, and sets.
          </p>
          <h3 className="text-xl font-semibold mb-4">Syntax:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const arr = [10, 20, 30, 40];
for (const value of arr) {
  console.log(value);
}`}</code>
          </pre>
          <p className="mb-4">
            This loop iterates over each value of the array <code>arr</code> and prints the values 10, 20, 30, and 40.
          </p>
        </section>

        {/* Breaking and Continuing Loops */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Breaking and Continuing Loops</h2>
          <p className="mb-4">
            You can use <code>break</code> to exit a loop prematurely and <code>continue</code> to skip the current iteration and move to the next one.
          </p>
          <h3 className="text-xl font-semibold mb-4">Breaking a Loop</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}`}</code>
          </pre>
          <p className="mb-4">
            The <code>break</code> statement exits the loop when <code>i</code> equals 5.
          </p>

          <h3 className="text-xl font-semibold mb-4">Continuing to the Next Iteration</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the iteration when i is 5
  }
  console.log(i);
}`}</code>
          </pre>
          <p className="mb-4">
            The <code>continue</code> statement skips the current iteration when <code>i</code> equals 5 and moves to the next iteration.
          </p>
        </section>

        <p className="italic text-blue-300">
          Loops are essential for automating repetitive tasks in programming. They help you save time and effort by reducing the need for manually repeating code.
        </p>
      </div>
    </div>
  );
};

export default LoopsPage;
