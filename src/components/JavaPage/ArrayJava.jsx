import React from 'react';

const ArrayJava = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">Arrays in Java</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            An array in Java is a data structure that stores multiple values of the same type in a single variable. Arrays are used to store data in a structured manner and allow easy access to elements using an index. They are fundamental to understanding Java programming and are often used in a variety of applications, such as handling lists of items, performing calculations, and organizing large sets of data.
          </p>

          {/* Array Declaration and Initialization */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Declaring and Initializing Arrays</h2>
            <p className="mt-4 text-lg text-gray-600">
              To declare an array in Java, you specify the type of elements it will store, followed by square brackets, and then the array name. Arrays can be initialized either at the time of declaration or later, depending on the scenario.
            </p>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Array Declaration</h3>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers;  // Declaring an array of integers`}
            </pre>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Array Initialization</h3>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`numbers = new int[5];  // Initializing an array with 5 elements`}
            </pre>
            
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Array Declaration and Initialization in One Step</h3>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};  // Direct initialization`}
            </pre>
          </div>

          {/* Accessing Array Elements */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Accessing Array Elements</h2>
            <p className="mt-4 text-lg text-gray-600">
              Once an array is initialized, you can access its elements using their index. In Java, array indices start at 0. The syntax for accessing an element is: <code>arrayName[index]</code>.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]);  // Output: 10
System.out.println(numbers[2]);  // Output: 30`}
            </pre>
          </div>

          {/* Modifying Array Elements */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Modifying Array Elements</h2>
            <p className="mt-4 text-lg text-gray-600">
              You can modify the elements of an array by accessing them via their index and assigning a new value. This allows you to change an element's value after the array has been initialized.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};
numbers[1] = 25;  // Changing the second element to 25
System.out.println(numbers[1]);  // Output: 25`}
            </pre>
          </div>

          {/* Array Length */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Array Length</h2>
            <p className="mt-4 text-lg text-gray-600">
              The length of an array can be determined using the <code>length</code> property. This property returns the number of elements in the array. Note that <code>length</code> is a property, not a method, so it is accessed without parentheses.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers.length);  // Output: 5`}
            </pre>
          </div>

          {/* Iterating Over Arrays */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Iterating Over Arrays</h2>
            <p className="mt-4 text-lg text-gray-600">
              Arrays can be iterated using loops such as <code>for</code> or <code>for-each</code>. The <code>for-each</code> loop is a simpler and more readable way to iterate through array elements.
            </p>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Using For Loop</h3>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`}
            </pre>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Using For-Each Loop</h3>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};
for (int num : numbers) {
    System.out.println(num);
}`}
            </pre>
          </div>

          {/* Multidimensional Arrays */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Multidimensional Arrays</h2>
            <p className="mt-4 text-lg text-gray-600">
              A multidimensional array is an array of arrays. The most commonly used is the two-dimensional array, which can be visualized as a matrix. You can declare and initialize a 2D array like this:
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[0][0]);  // Output: 1`}
            </pre>
          </div>

          {/* Array Methods */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Common Array Methods in Java</h2>
            <p className="mt-4 text-lg text-gray-600">
              Java provides several built-in methods to manipulate arrays. Some of the most commonly used methods are:
            </p>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Arrays.fill()</h3>
            <p className="mt-4 text-lg text-gray-600">
              This method is used to fill an array with a specific value. For example, you can fill an array with zeros or any other number.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = new int[5];
Arrays.fill(numbers, 10);  // Fill all elements with 10
System.out.println(Arrays.toString(numbers));  // Output: [10, 10, 10, 10, 10]`}
            </pre>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Arrays.sort()</h3>
            <p className="mt-4 text-lg text-gray-600">
              The <code>Arrays.sort()</code> method is used to sort the elements of an array in ascending order.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {50, 10, 30, 40, 20};
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers));  // Output: [10, 20, 30, 40, 50]`}
            </pre>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">Arrays.copyOf()</h3>
            <p className="mt-4 text-lg text-gray-600">
              The <code>Arrays.copyOf()</code> method creates a new array by copying the specified range of elements from the original array.
            </p>
            <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg overflow-auto">
{`int[] numbers = {10, 20, 30, 40, 50};
int[] copy = Arrays.copyOf(numbers, 3);
System.out.println(Arrays.toString(copy));  // Output: [10, 20, 30]`}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Best Practices with Arrays</h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Use arrays when you know the fixed size of the data you are working with.</li>
              <li>For larger data sets or dynamic data, consider using other data structures like <code>ArrayList</code>.</li>
              <li>Always check the bounds of an array to avoid <code>ArrayIndexOutOfBoundsException</code> errors.</li>
              <li>For multidimensional arrays, ensure proper initialization and access to avoid errors.</li>
              <li>Use utility methods from the <code>Arrays</code> class to perform common operations on arrays efficiently.</li>
            </ul>
          </div>

          {/* Call to Action */}
          
        </div>
      </div>
    </>
  );
};

export default ArrayJava;

