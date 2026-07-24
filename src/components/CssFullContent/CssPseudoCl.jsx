'use client'

const CssPseudoClasses = () => {
  return (
    <div className="p-8 mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">CSS Pseudo-Classes</h1>
        <p className="text-lg">Style elements based on their state or position.</p>
        <p>
          Pseudo-classes allow you to apply styles to elements based on their state (such as hover or focus) or their position in the document structure (like first-child or nth-child). These are useful for adding interactivity and structure-based styling to elements.
        </p>

        <h2 className="text-2xl font-semibold">Common Pseudo-Classes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>:hover:</strong> Activates when an element is hovered over by the mouse, often used for interactive elements like buttons or links.</li>
          <li><strong>:active:</strong> Applies styles when an element is clicked (or activated). Typically used with links and buttons.</li>
          <li><strong>:focus:</strong> Targets an element when it is focused, such as when an input field is clicked or selected. Commonly used for form elements.</li>
          <li><strong>:first-child:</strong> Selects the first child of a parent element. Useful for styling the first element in a list or a group of similar elements.</li>
          <li><strong>:nth-child(n):</strong> Allows you to style elements based on their position in a parent, such as every other item in a list or a specific item at a certain position.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Pseudo-Classes</h2>
        <p className="text-lg">
          Below is an example of how pseudo-classes can be applied to style elements in different states, like when a user hovers over a link or focuses on an input field.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Hover effect */
a:hover {
  color: red; /* Changes color of link when hovered */
}

/* Focus effect */
input:focus {
  border-color: blue; /* Highlights input field with blue border when focused */
}

/* First child effect */
li:first-child {
  font-weight: bold; /* Makes the first list item bold */
}

/* nth-child effect */
li:nth-child(2) {
  color: green; /* Styles the second list item with green color */
}

/* HTML */
<a href="#">Link</a>
<input type="text" placeholder="Enter text">
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Advanced Usage: :nth-child</h2>
        <p className="text-lg">
          The `:nth-child()` pseudo-class is powerful for targeting elements based on their position within a parent. You can pass specific numbers or patterns (like `odd` or `even`) to apply styles to items based on their position.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Style odd and even items */
li:nth-child(odd) {
  background-color: #f0f0f0; /* Style odd list items */
}

li:nth-child(even) {
  background-color: #e0e0e0; /* Style even list items */
}

/* Style every 3rd item */
li:nth-child(3n) {
  font-style: italic; /* Make every 3rd list item italic */
}

/* HTML */
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Use Cases for Pseudo-Classes</h2>
        <p className="text-lg">
          Pseudo-classes are essential for improving user interaction and designing intuitive interfaces. They can be used for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Interactive buttons/links:</strong> Enhance user experience by changing colors or effects when hovering or focusing.</li>
          <li><strong>Form validation:</strong> Highlight focused input fields or style elements that are required to be filled.</li>
          <li><strong>List styles:</strong> Use `:first-child`, `:nth-child`, or `:nth-last-child` to style list items differently.</li>
          <li><strong>Accessibility and usability:</strong> Provide visual feedback for elements in focus, especially for keyboard navigation.</li>
        </ul>

        <p className="italic text-[#FF7F50]">
          Pseudo-classes allow for interactive, visually appealing, and dynamic interfaces, making your designs come alive with minimal effort.
        </p>
      </div>
    </div>
  );
};

export default CssPseudoClasses;
