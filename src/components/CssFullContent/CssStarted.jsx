'use client'

const CssGetStarted = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Getting Started with CSS</h1>
        <p className="text-lg">Learn how to set up and apply CSS to your web projects.</p>
        <p>
          Starting with CSS is straightforward. You need a basic understanding of HTML and a text editor. CSS can be applied in three ways: inline, internal, or external. This section guides you through the setup and best practices for using CSS effectively.
        </p>

        <h2 className="text-2xl font-semibold">Setting Up Your Environment</h2>
        <p>
          To start, you need:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A text editor (e.g., VS Code, Sublime Text).</li>
          <li>A web browser (e.g., Chrome, Firefox) for testing.</li>
          <li>Basic HTML knowledge to structure your content.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Ways to Apply CSS</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Inline CSS:</strong> Styles applied directly in HTML tags using the <code>style</code> attribute.</li>
          <li><strong>Internal CSS:</strong> Styles defined in a <code>&lt;style&gt;</code> tag within the HTML <code>&lt;head&gt;</code>.</li>
          <li><strong>External CSS:</strong> Styles in a separate <code>.css</code> file linked via a <code>&lt;link&gt;</code> tag (recommended for scalability).</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: External CSS</h2>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}

/* index.html */
<!DOCTYPE html>
<html>
<head>
  <title>My First CSS Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to My Page</h1>
</body>
</html>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use external CSS for maintainability.</li>
          <li>Keep CSS organized with comments and logical grouping.</li>
          <li>Test across browsers to ensure compatibility.</li>
          <li>Use developer tools (e.g., Chrome DevTools) to debug styles.</li>
        </ul>

        <p className="italic text-[#FF7F50]">
          Save the CSS in a <code>styles.css</code> file, link it to your HTML, and open it in a browser to see the result.
        </p>
      </div>
    </div>
  );
};

export default CssGetStarted;