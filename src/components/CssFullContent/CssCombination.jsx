'use client'

const CssCombinators = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">CSS Combinators</h1>
        <p className="text-lg">Learn how to combine selectors to target specific elements.</p>
        <p>
          Combinators allow you to target elements based on their relationships, such as descendants, children, or siblings, providing precise control over styling.
        </p>

        <h2 className="text-2xl font-semibold">Types of Combinators</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Descendant Combinator (space):</strong> Targets elements nested within another (e.g., <code>div p</code>).</li>
          <li><strong>Child Combinator (&gt;):</strong> Targets direct children (e.g., <code>ul &gt; li</code>).</li>
          <li><strong>Adjacent Sibling Combinator (+):</strong> Targets the next sibling (e.g., <code>h2 + p</code>).</li>
          <li><strong>General Sibling Combinator (~):</strong> Targets all subsequent siblings (e.g., <code>h2 ~ p</code>).</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Combinators</h2>
        <p className="text-lg">
          The following code demonstrates how each combinator works in action:
        </p>
        
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Descendant combinator */
div p {
  color: green;
}

/* Child combinator */
ul > li {
  list-style: none;
}

/* Adjacent sibling combinator */
h2 + p {
  font-weight: bold;
}

/* General sibling combinator */
h2 ~ p {
  color: red;
}

/* HTML Structure */
<div>
  <p>Nested paragraph</p>
</div>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<h2>Title</h2>
<p>Adjacent paragraph</p>
<p>Another sibling paragraph</p>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Interactive Learning</h2>
        <p className="text-lg">
          Hover over the elements below to see how CSS combinators apply styles dynamically:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-200 p-4">
            <p className="text-lg hover:bg-green-100 transition duration-200 ease-in-out">Nested paragraph (Descendant)</p>
          </div>
          
          <ul className="bg-gray-200 p-4">
            <li className="hover:bg-blue-100 transition duration-200 ease-in-out">Item 1</li>
            <li className="hover:bg-blue-100 transition duration-200 ease-in-out">Item 2</li>
          </ul>
          
          <h2 className="text-2xl font-semibold hover:text-blue-600 transition duration-200 ease-in-out">Title</h2>
          <p className="text-lg hover:bg-yellow-100 transition duration-200 ease-in-out">Adjacent paragraph (Adjacent sibling)</p>
          <p className="text-lg hover:text-red-500 transition duration-200 ease-in-out">Another sibling paragraph (General sibling)</p>
        </div>

        <p className="italic text-[#FF7F50]">
          Experiment with combinators to target specific element relationships.
        </p>
      </div>
    </div>
  );
};

export default CssCombinators;
