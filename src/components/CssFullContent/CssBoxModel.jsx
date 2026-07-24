'use client'

const CssBoxModel = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Understanding the CSS Box Model</h1>
        <p className="text-lg">Learn how the CSS Box Model works and how to use it effectively for layout and spacing in your designs.</p>
        <p>
          The **CSS Box Model** defines how elements are rendered and how they interact with surrounding elements. It consists of four key components:
        </p>

        <h2 className="text-2xl font-semibold">The Four Components of the Box Model</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Content:</strong> The actual content of the box, such as text or images.</li>
          <li><strong>Padding:</strong> Space between the content and the border.</li>
          <li><strong>Border:</strong> The line surrounding the padding (if defined).</li>
          <li><strong>Margin:</strong> Space outside the border, separating the element from others.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Box Model</h2>
        <p>Below is an example of how the box model affects an element's size and spacing:</p>
        
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Box model styling */
.box {
  width: 200px;            /* Content width */
  height: 100px;           /* Content height */
  padding: 20px;           /* Space inside the box */
  border: 5px solid black; /* Border around the box */
  margin: 30px;            /* Space outside the border */
  background-color: lightblue; /* Background color */
}

/* HTML */
<div class="box">Box Model Example</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Box-Sizing Property</h2>
        <p>
          The <code>box-sizing</code> property controls how the width and height of an element are calculated. By default, width and height apply only to the content area (not including padding and border).
          To include padding and border in the width and height, use <code>box-sizing: border-box;</code>.
        </p>

        <h3 className="text-xl font-semibold">Example with <code>box-sizing: border-box;</code></h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Apply box-sizing globally */
* {
  box-sizing: border-box;
}

/* Box model styling */
.box {
  width: 200px; /* Total width includes padding and border */
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
  background-color: lightgreen;
}

/* HTML */
<div class="box">Box Model with border-box</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use <code>box-sizing: border-box;</code> to ensure the width and height include padding and borders.</li>
          <li>Use padding for **internal spacing** and margin for **external spacing** between elements.</li>
          <li>Adjust padding and margin for responsiveness when designing for different screen sizes.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Forgetting to account for padding and border in width/height calculations (use <code>box-sizing: border-box;</code> to avoid this).</li>
          <li>Using large margins or padding in small layouts, causing layout issues or unwanted scrolling.</li>
        </ul>

        <p className="italic text-[#FF7F50]">
          Understanding the box model is key to controlling element sizes, spacing, and layout. By using the box-sizing property and adjusting padding, borders, and margins carefully, you'll create more consistent and responsive designs.
        </p>
      </div>
    </div>
  );
};

export default CssBoxModel;
