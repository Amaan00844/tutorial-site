import React from 'react';

const Loopjava = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Loops in Java</h1>

        <p className="mt-4 text-lg text-gray-600">
          In Java, loops are used to execute a block of code repeatedly as long as a specific condition is true.
          Loops reduce redundancy, make code more efficient, and simplify complex operations. There are mainly four types of loops in Java:
        </p>

        <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
          <li><strong>for loop</strong></li>
          <li><strong>while loop</strong></li>
          <li><strong>do-while loop</strong></li>
          <li><strong>enhanced for loop (for-each loop)</strong></li>
        </ul>

        {/* FOR LOOP */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">1. For Loop</h2>
          <p className="mt-4 text-lg text-gray-600">
            The <code>for</code> loop is used when the number of iterations is known beforehand. It consists of three parts:
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Initialization:</strong> Executes once at the beginning.</li>
              <li><strong>Condition:</strong> Checked before each iteration.</li>
              <li><strong>Update:</strong> Executed after each iteration.</li>
            </ul>
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            This loop will print:
          </p>
          <pre className="p-2 bg-gray-50 text-sm text-gray-700">
{`i = 0
i = 1
i = 2
i = 3
i = 4`}
          </pre>
        </div>

        {/* WHILE LOOP */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">2. While Loop</h2>
          <p className="mt-4 text-lg text-gray-600">
            The <code>while</code> loop is used when the number of iterations is not known and depends on a condition.
            It checks the condition before executing the block.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int i = 0;
while (i < 5) {
    System.out.println("i = " + i);
    i++;
}`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Output is the same as the for loop above. But if the condition is false initially, the loop may never run.
          </p>
        </div>

        {/* DO WHILE LOOP */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">3. Do-While Loop</h2>
          <p className="mt-4 text-lg text-gray-600">
            The <code>do-while</code> loop is similar to the while loop, but it guarantees that the loop body runs at least once, even if the condition is false at the beginning.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int i = 0;
do {
    System.out.println("i = " + i);
    i++;
} while (i < 5);`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            This is helpful when the code block must execute at least once regardless of the condition.
          </p>
        </div>

        {/* FOR-EACH LOOP */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">4. Enhanced For Loop (For-Each Loop)</h2>
          <p className="mt-4 text-lg text-gray-600">
            The enhanced <code>for</code> loop is used to iterate over arrays or collections directly without using an index.
            It simplifies the code and avoids errors related to index handling.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Output:
          </p>
          <pre className="p-2 bg-gray-50 text-sm text-gray-700">
{`1
2
3
4
5`}
          </pre>
        </div>

        {/* LOOP CONTROL STATEMENTS */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Loop Control Statements</h2>
          <p className="mt-4 text-lg text-gray-600">
            Java provides two main control statements to alter the flow of loops:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li><code>break</code> – immediately exits the loop.</li>
            <li><code>continue</code> – skips the current iteration and moves to the next one.</li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-800">Example: break statement</h3>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i);
}`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Output:
          </p>
          <pre className="p-2 bg-gray-50 text-sm text-gray-700">
{`0
1
2
3
4`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-gray-800">Example: continue statement</h3>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    System.out.println(i);
}`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Output:
          </p>
          <pre className="p-2 bg-gray-50 text-sm text-gray-700">
{`0
1
3
4`}
          </pre>
        </div>

        {/* COMMON USE CASES */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Common Use Cases of Loops</h2>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
            <li>Traversing arrays or lists</li>
            <li>Printing patterns (like triangles or pyramids)</li>
            <li>Calculating factorials, sums, or averages</li>
            <li>Validating user input in loops</li>
            <li>Working with file lines or database records</li>
          </ul>
        </div>

        {/* CONCLUSION */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
          <p className="mt-4 text-lg text-gray-600">
            Loops in Java are essential for automating repetitive tasks. Mastering each type of loop helps you write optimized and clear code.
            Understanding when to use <code>for</code>, <code>while</code>, or <code>do-while</code> can greatly improve your problem-solving skills as a Java developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loopjava;
