'use client'

const CssFlexbox = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">CSS Flexbox</h1>
        <p className="text-lg">Create flexible and responsive layouts with ease.</p>
        <p>
          Flexbox is a powerful one-dimensional layout model that provides a simple way to arrange elements in rows or columns. It makes it easy to align and distribute space among items, even when their size is unknown or dynamic.
        </p>

        <h2 className="text-2xl font-semibold">Key Flexbox Properties</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>display: flex;</strong> Activates the flexbox layout on a container. This turns the container's children into flex items.</li>
          <li><strong>flex-direction:</strong> Defines the main axis of the layout. It can be set to:
            <ul className="list-inside list-disc">
              <li><strong>row:</strong> Default, aligns items horizontally (left to right in LTR languages).</li>
              <li><strong>column:</strong> Aligns items vertically (top to bottom).</li>
              <li><strong>row-reverse:</strong> Reverses the horizontal direction (right to left in LTR languages).</li>
              <li><strong>column-reverse:</strong> Reverses the vertical direction (bottom to top).</li>
            </ul>
          </li>
          <li><strong>justify-content:</strong> Aligns the flex items along the main axis (horizontal if `flex-direction: row` is used). It can be set to:
            <ul className="list-inside list-disc">
              <li><strong>flex-start:</strong> Items align to the start of the container (default).</li>
              <li><strong>flex-end:</strong> Items align to the end of the container.</li>
              <li><strong>center:</strong> Items are centered along the main axis.</li>
              <li><strong>space-between:</strong> Distributes items with equal space between them.</li>
              <li><strong>space-around:</strong> Distributes items with equal space around them.</li>
              <li><strong>space-evenly:</strong> Distributes items with equal space between and around them.</li>
            </ul>
          </li>
          <li><strong>align-items:</strong> Aligns the items along the cross axis (vertical if `flex-direction: row` is used). Options include:
            <ul className="list-inside list-disc">
              <li><strong>flex-start:</strong> Items align to the top of the container.</li>
              <li><strong>flex-end:</strong> Items align to the bottom of the container.</li>
              <li><strong>center:</strong> Items are centered vertically.</li>
              <li><strong>baseline:</strong> Items align to their baseline.</li>
              <li><strong>stretch:</strong> Items stretch to fill the container's height (default).</li>
            </ul>
          </li>
          <li><strong>flex:</strong> This is a shorthand property for setting the `flex-grow`, `flex-shrink`, and `flex-basis` properties. It controls how a flex item grows, shrinks, and how much space it occupies. You can set:
            <ul className="list-inside list-disc">
              <li><strong>flex-grow:</strong> Defines how much a flex item can grow relative to other items.</li>
              <li><strong>flex-shrink:</strong> Defines how much a flex item can shrink relative to other items.</li>
              <li><strong>flex-basis:</strong> Defines the initial size of the flex item before any growing or shrinking happens.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Flexbox Layout</h2>
        <p className="text-lg">
          Below is a simple example demonstrating how Flexbox works by creating a horizontal layout of items. Flexbox makes it easier to align items and distribute space, especially when the number of items is dynamic.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Flexbox container */
.container {
  display: flex; /* Activates flexbox */
  flex-direction: row; /* Items will be arranged in a row */
  justify-content: space-between; /* Items are spaced evenly */
  align-items: center; /* Items are aligned vertically in the center */
  gap: 20px; /* Adds spacing between items */
}

/* Flex items */
.item {
  flex: 1; /* Each item will take up equal space */
  background-color: coral;
  padding: 20px;
  text-align: center;
}

/* HTML */
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Interactive Example</h2>
        <p className="text-lg">
          You can also play with Flexbox properties interactively. Here's a simple layout where you can adjust the number of items, their alignment, and spacing by modifying the container's Flexbox properties. Experimenting with the options will give you a better feel for how Flexbox can be used in real-world layouts.
        </p>

        <div className="space-y-4">
          <div className="container bg-gray-100 p-4">
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
          </div>
        </div>

        <p className="italic text-[#FF7F50]">
          Use Flexbox for creating responsive layouts, such as navigation bars, galleries, and even forms.
        </p>
      </div>
    </div>
  );
};

export default CssFlexbox;
