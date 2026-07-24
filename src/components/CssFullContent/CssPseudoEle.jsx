'use client'

const CssPseudoElements = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">CSS Pseudo-Elements</h1>
        <p className="text-lg">Style specific parts of an element.</p>
        <p>
          Pseudo-elements allow you to target and style specific parts of an element without modifying the element’s actual structure. These are useful for adding decorative effects or content before or after an element, or styling parts of text like the first letter or line.
        </p>

        <h2 className="text-2xl font-semibold">Common Pseudo-Elements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>::before:</strong> Adds content before an element. Often used for icons or decorative text.</li>
          <li><strong>::after:</strong> Adds content after an element. Commonly used for closing quotation marks, punctuation, or icons.</li>
          <li><strong>::first-line:</strong> Styles the first line of text within a block-level element. Useful for special typographic effects.</li>
          <li><strong>::first-letter:</strong> Styles the first letter of a text block. Often used for creating drop caps in paragraphs.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Pseudo-Elements</h2>
        <p className="text-lg">
          Below is an example of how you can use pseudo-elements to style specific parts of an element. These techniques are often used for enhancing typography and adding design flair without changing the HTML structure.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Before pseudo-element */
p::before {
  content: "★ ";
  color: gold; /* Adds a golden star before the paragraph */
}

/* First letter effect */
p::first-letter {
  font-size: 2em; /* Makes the first letter larger */
  color: red; /* Colors the first letter red */
}

/* After pseudo-element */
p::after {
  content: " ✔"; /* Adds a checkmark after the paragraph */
  color: green;
}

/* HTML */
<p>Lorem ipsum dolor sit amet.</p>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Advanced Usage: Decorative Effects</h2>
        <p className="text-lg">
          Pseudo-elements can also be used for creating advanced design effects like styling the first letter of a paragraph or adding icons before or after links and text. For example, you can create a decorative quote box by using `::before` and `::after` together.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Decorative Quote Box */
blockquote::before {
  content: open-quote; /* Adds the opening quote mark before the blockquote */
  font-size: 3em;
  color: #888;
}

blockquote::after {
  content: close-quote; /* Adds the closing quote mark after the blockquote */
  font-size: 3em;
  color: #888;
}

/* HTML */
<blockquote>
  "This is a sample quote styled using pseudo-elements."
</blockquote>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Use Cases for Pseudo-Elements</h2>
        <p className="text-lg">
          Pseudo-elements are extremely versatile and can be used in a wide range of scenarios:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Decorative Elements:</strong> Add icons, quotation marks, or other decorative content before/after an element.</li>
          <li><strong>Typography Effects:</strong> Use `::first-letter` and `::first-line` to create visually appealing text treatments, like drop caps or highlighted first lines.</li>
          <li><strong>Icons and Badges:</strong> Insert icons next to elements using `::before` or `::after` to add visual indicators or badges (e.g., a "new" label on a product).</li>
          <li><strong>Layout Enhancements:</strong> Use pseudo-elements to add shapes or patterns in the background without additional HTML.</li>
        </ul>

        <p className="italic text-[#FF7F50]">
          Pseudo-elements offer a clean and effective way to add complex visual effects without the need for extra HTML elements or excessive CSS.
        </p>
      </div>
    </div>
  );
};

export default CssPseudoElements;
