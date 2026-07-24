"use client";

const ArrayPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8  space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">🔢 Arrays in JavaScript</h1>
        <p className="mb-4">
          Arrays are used to store multiple values in a single variable. They are one of the most commonly used data structures in JavaScript and provide several methods to perform various operations on the data.
        </p>

        {/* Creating Arrays */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Creating Arrays</h2>
          <p className="mb-4">
            You can create an array using either the array literal syntax or the <code>Array</code> constructor.
          </p>

          {/* Array Literal */}
          <h3 className="text-xl font-semibold mb-4">Array Literal</h3>
          <p className="mb-4">This is the most common and concise way to create an array.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = ['Apple', 'Banana', 'Cherry'];`}</code>
          </pre>

          {/* Array Constructor */}
          <h3 className="text-xl font-semibold mb-4">Array Constructor</h3>
          <p className="mb-4">
            You can also create arrays using the <code>Array</code> constructor, although this is less common.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = new Array('Apple', 'Banana', 'Cherry');`}</code>
          </pre>
        </section>

        {/* Accessing Array Elements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Accessing Array Elements</h2>
          <p className="mb-4">
            You can access array elements using their index. Note that arrays in JavaScript are zero-indexed, meaning the first element has an index of 0.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[1]); // Output: 'Banana'`}</code>
          </pre>
        </section>

        {/* Array Methods */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Array Methods</h2>
          <p className="mb-4">
            JavaScript arrays come with several built-in methods for manipulating the data stored within them.
          </p>

          {/* push() and pop() */}
          <h3 className="text-xl font-semibold mb-4">push() and pop()</h3>
          <p className="mb-4">
            The <code>push()</code> method adds an element to the end of an array, while <code>pop()</code> removes the last element.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana']`}</code>
          </pre>

          {/* shift() and unshift() */}
          <h3 className="text-xl font-semibold mb-4">shift() and unshift()</h3>
          <p className="mb-4">
            The <code>shift()</code> method removes the first element of an array, while <code>unshift()</code> adds an element to the beginning.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = ['Apple', 'Banana'];
fruits.unshift('Orange');
console.log(fruits); // Output: ['Orange', 'Apple', 'Banana']

fruits.shift();
console.log(fruits); // Output: ['Apple', 'Banana']`}</code>
          </pre>

          {/* forEach() */}
          <h3 className="text-xl font-semibold mb-4">forEach()</h3>
          <p className="mb-4">
            The <code>forEach()</code> method is used to execute a function for each item in the array.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Output:
// Apple
// Banana
// Cherry`}</code>
          </pre>

          {/* map() */}
          <h3 className="text-xl font-semibold mb-4">map()</h3>
          <p className="mb-4">
            The <code>map()</code> method creates a new array by applying a function to each element in the original array.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6]`}</code>
          </pre>

          {/* filter() */}
          <h3 className="text-xl font-semibold mb-4">filter()</h3>
          <p className="mb-4">
            The <code>filter()</code> method creates a new array with all elements that pass a test implemented by a provided function.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]`}</code>
          </pre>
        </section>

        {/* Multidimensional Arrays */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Multidimensional Arrays</h2>
          <p className="mb-4">
            You can create arrays within arrays, also known as multidimensional arrays. These are often used to represent tables or grids of data.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][1]); // Output: 2`}</code>
          </pre>
        </section>

        {/* Array Destructuring */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Array Destructuring</h2>
          <p className="mb-4">
            Array destructuring allows you to unpack values from arrays into distinct variables.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let fruits = ['Apple', 'Banana', 'Cherry'];
let [first, second] = fruits;
console.log(first);  // Output: 'Apple'
console.log(second); // Output: 'Banana'`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Arrays are a versatile and powerful data structure in JavaScript. Understanding arrays and their methods will help you manipulate and process data efficiently in your programs.
        </p>
      </div>
    </div>
  );
};

export default ArrayPage;
