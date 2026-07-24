import React from 'react';

const ControlStatementJava = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Java Control Statements</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          In Java, control statements are used to control the flow of the program based on conditions or repeated execution of code. There are three main categories:
        </p>

        <ul className="mt-2 text-lg text-gray-600 list-disc pl-6">
          <li><strong>Decision-Making Statements</strong></li>
          <li><strong>Looping Statements</strong></li>
          <li><strong>Jump Statements</strong></li>
        </ul>

        {/* 1. Decision-Making Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Decision-Making Statements</h2>
          <p className="mt-2 text-lg text-gray-600">
            These statements are used to make decisions based on certain conditions. If the condition is true, a block of code is executed.
          </p>

          {/* if Statement */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">a. if Statement</h3>
          <p className="text-lg text-gray-600">
            Executes a block if the condition is true.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int age = 20;
if (age >= 18) {
    System.out.println("You are eligible to vote.");
}`}
          </pre>

          {/* if-else Statement */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">b. if-else Statement</h3>
          <p className="text-lg text-gray-600">
            Executes one block if the condition is true, another block if false.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int num = -5;
if (num > 0) {
    System.out.println("Positive number");
} else {
    System.out.println("Negative number");
}`}
          </pre>

          {/* else-if ladder */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">c. else-if Ladder</h3>
          <p className="text-lg text-gray-600">
            Useful when there are multiple conditions to check.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int marks = 75;
if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 75) {
    System.out.println("Grade B");
} else {
    System.out.println("Grade C");
}`}
          </pre>

          {/* switch Statement */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">d. switch Statement</h3>
          <p className="text-lg text-gray-600">
            Used to select one of many blocks to execute based on a variable's value.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Invalid day");
}`}
          </pre>
        </div>

        {/* 2. Looping Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Looping Statements</h2>
          <p className="mt-2 text-lg text-gray-600">
            Looping statements allow repeating a set of instructions until a condition is met.
          </p>

          {/* for loop */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">a. for loop</h3>
          <p className="text-lg text-gray-600">
            Used when the number of iterations is known.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}`}
          </pre>

          {/* while loop */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">b. while loop</h3>
          <p className="text-lg text-gray-600">
            Executes a block as long as the condition is true.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int i = 1;
while (i <= 3) {
    System.out.println("i = " + i);
    i++;
}`}
          </pre>

          {/* do-while loop */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">c. do-while loop</h3>
          <p className="text-lg text-gray-600">
            Similar to while loop but ensures the loop executes at least once.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int j = 1;
do {
    System.out.println("j = " + j);
    j++;
} while (j <= 3);`}
          </pre>
        </div>

        {/* 3. Jump Statements */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. Jump Statements</h2>
          <p className="mt-2 text-lg text-gray-600">
            These statements alter the flow of execution.
          </p>

          {/* break */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">a. break</h3>
          <p className="text-lg text-gray-600">
            Exits the loop or switch immediately.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`for (int i = 1; i <= 5; i++) {
    if (i == 3) break;
    System.out.println("i = " + i);
}`}
          </pre>

          {/* continue */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">b. continue</h3>
          <p className="text-lg text-gray-600">
            Skips the current iteration and moves to the next one.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.println("i = " + i);
}`}
          </pre>

          {/* return */}
          <h3 className="mt-4 text-xl font-semibold text-gray-700">c. return</h3>
          <p className="text-lg text-gray-600">
            Exits from the current method and optionally returns a value.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`public static int getSquare(int num) {
    return num * num;
}`}
          </pre>
        </div>

        {/* Best Practices */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Best Practices</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
            <li>Use proper indentation and naming for clarity.</li>
            <li>Use `switch` for cleaner multi-condition checks instead of nested `if-else`.</li>
            <li>Avoid infinite loops by ensuring loop termination conditions are correct.</li>
            <li>Use `break` and `continue` with care to avoid unexpected program flow.</li>
            <li>Always comment complex logic for better understanding.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ControlStatementJava;

