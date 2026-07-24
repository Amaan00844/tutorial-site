'use client'

const CssBasicSelectors = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Basic CSS Selectors</h1>
        <p className="text-lg">Master the foundational selectors for styling web elements.</p>
        <p>
          CSS selectors are used to "select" HTML elements so you can apply styles to them.
          They act like pointers, telling the browser which part of the page to style and how.
          Without selectors, you can’t apply CSS properly.
        </p>

        <h2 className="text-2xl font-semibold">Key Basic Selectors</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Element Selector:</strong> Targets every HTML element of a specific type (like <code>h1</code>, <code>p</code>, or <code>div</code>).
            <br />
            <span className="text-sm text-gray-700">
              Example: If you write <code>h1 {`{ color: red; }`}</code>, it will turn all <code>&lt;h1&gt;</code> tags red, no matter where they are on the page.
              This is great for general layout or typography styling.
            </span>
          </li>

          <li>
            <strong>Class Selector:</strong> Targets any element that has a specific class. You define it using a period (dot), like <code>.box</code>.
            <br />
            <span className="text-sm text-gray-700">
              You can assign the same class to **multiple** elements. This makes classes ideal for reusable styles — like applying the same button design to many buttons.
              Example: <code>.alert {`{ background: yellow; }`}</code> will apply to every element with class="alert".
            </span>
          </li>

          <li>
            <strong>ID Selector:</strong> Targets **only one unique element**. Defined using a hash symbol, like <code>#main</code>.
            <br />
            <span className="text-sm text-gray-700">
              IDs are meant to be **unique per page**, used for elements that appear only once — like a main navigation bar or footer.
              It has higher specificity than classes and elements, meaning it will override them if there's a conflict.
            </span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Basic Selectors</h2>
        <p>
          Below is an example that combines all three selectors. The CSS targets each kind of element and applies different styles. This helps you visually see how selectors behave differently.
        </p>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Element selector */
h1 {
  color: navy;
  font-size: 28px;
  text-align: center;
}

/* Class selector */
.alert {
  border: 2px solid red;
  padding: 10px;
  background-color: #ffe5e5;
  color: red;
  font-weight: bold;
}

/* ID selector */
#footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 14px;
}

/* HTML */
<h1>Welcome to My Website</h1>

<div class="alert">Warning! Something went wrong.</div>

<div id="footer">© 2025 My Web Page. All rights reserved.</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Common Beginner Mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Using <code>#id</code> more than once on a page — this breaks the uniqueness rule and can cause unexpected results.</li>
          <li>Mixing up <code>.</code> and <code>#</code> — remember: dot is for class, hash is for ID.</li>
          <li>Overusing element selectors — they affect all elements of that type. Use classes for more control.</li>
        </ul>

        <h2 className="text-2xl font-semibold">When to Use What?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Use Element Selectors</strong> when applying general styles to all elements (like giving all <code>p</code> tags margin).</li>
          <li><strong>Use Class Selectors</strong> when you need the **same style on many elements**.</li>
          <li><strong>Use ID Selectors</strong> when styling **one specific thing only**, like a unique banner or footer.</li>
        </ul>

        <p className="italic text-[#FF7F50]">
          Think of element selectors as general, class selectors as reusable, and ID selectors as unique. Use them wisely to keep your CSS clean and effective.
        </p>
      </div>
    </div>
  );
};

export default CssBasicSelectors;
