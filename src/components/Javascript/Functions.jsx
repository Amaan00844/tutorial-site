"use client";

const Functions = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">⚙️ Functions in JavaScript</h1>
        <p className="mb-4">
          Functions are one of the fundamental building blocks in JavaScript. They allow you to group code into reusable blocks that can be executed when called. Functions can accept input, process it, and return an output.
        </p>

        {/* Function Declaration */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Function Declaration</h2>
          <p className="mb-4">
            A function declaration is the most common way to define a function in JavaScript. It consists of the <code>function</code> keyword, followed by the function name, a list of parameters (optional), and the function body.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`function greet(name) {
  return "Hello, " + name;
}`}</code>
          </pre>
          <p className="mb-4">You can call the function using its name, passing the required arguments.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`console.log(greet("Alice")); // Output: "Hello, Alice"`}</code>
          </pre>
        </section>

        {/* Function Expression */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Function Expression</h2>
          <p className="mb-4">
            A function expression defines a function inside an expression. You can assign the function to a variable.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const sum = function(a, b) {
  return a + b;
};`}</code>
          </pre>
          <p className="mb-4">In this case, the function is stored in the variable <code>sum</code>, and you can call it by referencing the variable.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`console.log(sum(2, 3)); // Output: 5`}</code>
          </pre>
        </section>

        {/* Arrow Function */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Arrow Function</h2>
          <p className="mb-4">
            Arrow functions provide a more concise way to write functions. They use the <code>{"=>"}</code> syntax and do not have their own <code>this</code> value, which makes them useful in certain contexts.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const multiply = (x, y) => {
  return x * y;
};`}</code>
          </pre>
          <p className="mb-4">Arrow functions are often used for functions that consist of a single expression, which can be written without the <code>return</code> keyword.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const square = x => x * x;`}</code>
          </pre>
        </section>

        {/* Parameters and Arguments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Parameters and Arguments</h2>
          <p className="mb-4">
            Functions can take parameters, which are values you pass into the function when calling it. These values are called arguments. JavaScript functions can have default parameters, rest parameters, and be called with any number of arguments.
          </p>

          {/* Default Parameters */}
          <h3 className="text-xl font-semibold mb-4">Default Parameters</h3>
          <p className="mb-4">
            You can assign default values to parameters. If no value is passed for that parameter, the default value is used.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet()); // Output: "Hello, Guest"
console.log(greet("Alice")); // Output: "Hello, Alice"`}</code>
          </pre>

          {/* Rest Parameters */}
          <h3 className="text-xl font-semibold mb-4">Rest Parameters</h3>
          <p className="mb-4">
            The <code>...rest</code> parameter allows a function to accept an indefinite number of arguments as an array.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6`}</code>
          </pre>
        </section>

        {/* Returning Values */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Returning Values</h2>
          <p className="mb-4">
            Functions can return values using the <code>return</code> statement. When a function returns a value, it can be used or stored in another variable.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`function add(x, y) {
  return x + y;
}

let result = add(5, 7);
console.log(result); // Output: 12`}</code>
          </pre>
        </section>

        {/* Anonymous Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Anonymous Functions</h2>
          <p className="mb-4">
            Anonymous functions are functions that do not have a name. They are often used in situations where you need a function as an argument, like in <code>setTimeout()</code> or array methods.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);`}</code>
          </pre>
        </section>

        {/* IIFE (Immediately Invoked Function Expression) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. IIFE (Immediately Invoked Function Expression)</h2>
          <p className="mb-4">
            An IIFE is a function that runs as soon as it is defined. It is often used to create a private scope to avoid polluting the global namespace.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`(function() {
  console.log("I run immediately!");
})();`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Functions are a powerful feature of JavaScript, enabling modularity, code reuse, and flexibility. Mastering functions is essential for writing clean and maintainable JavaScript code.
        </p>
      </div>
    </div>
  );
};

export default Functions;
