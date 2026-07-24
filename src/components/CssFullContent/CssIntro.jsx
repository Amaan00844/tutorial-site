'use client'

const CssIntro = () => {
  return (
    <div className="p-8 mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl  p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Introduction to CSS</h1>
        <p className="text-lg">What is CSS and why is it essential for web development?</p>
        <p>
          CSS, or Cascading Style Sheets, is a styling language used to control the presentation of HTML or XML documents. It defines how elements like text, images, and layouts appear on a webpage, including colors, fonts, spacing, and responsiveness. CSS separates content (HTML) from design, making websites visually appealing and maintainable. Without CSS, websites would simply display content without styling or formatting, which would result in a poor user experience.
        </p>

        <h2 className="text-2xl font-semibold">Why Learn CSS?</h2>
        <p>
          CSS is a cornerstone of web development. It enables developers to create user-friendly, responsive, and aesthetically pleasing websites. With CSS, you can customize layouts, add animations, and ensure compatibility across devices, making it a critical skill for front-end developers. Learning CSS means you can transform basic HTML pages into beautiful and functional designs.
        </p>

        <h2 className="text-2xl font-semibold">Key Benefits of CSS</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Separation of Concerns:</strong> Keeps styling separate from HTML structure. This allows designers to work independently from content creators.</li>
          <li><strong>Consistency:</strong> Apply uniform styles across multiple pages of a site. This makes it easy to maintain and scale websites.</li>
          <li><strong>Flexibility:</strong> Supports a wide range of styling options, from simple color changes to complex animations, giving you full control over your designs.</li>
          <li><strong>Responsiveness:</strong> CSS can adjust layouts and designs to work on any device, from mobile phones to large desktop screens, using techniques like media queries and flexible layouts (e.g., Flexbox, Grid).</li>
          <li><strong>Community and Tools:</strong> CSS has a rich ecosystem with powerful tools, frameworks like Tailwind CSS, Bootstrap, and preprocessors like Sass, which make development faster and more efficient.</li>
        </ul>

        <h2 className="text-2xl font-semibold">How CSS Works</h2>
        <p>
          CSS uses **rules** that consist of **selectors** and **declarations**. The **selector** targets the HTML element(s) you want to style. The **declaration** consists of a property (such as `color` or `font-size`) and a value (like `blue` or `16px`). These declarations are wrapped in curly braces `{}`.
        </p>
        <p>
          CSS is called "cascading" because the rules are applied in a specific order of precedence. For example, if multiple rules are applied to the same element, the most specific one wins. The order of appearance and specificity (ID, class, or tag selectors) can also affect the final result.
        </p>

        <h2 className="text-2xl font-semibold">Example: Basic CSS Styling</h2>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Styling a paragraph */
p {
  color: #333;  /* Dark gray color for text */
  font-size: 16px;  /* Font size of 16px */
  line-height: 1.5;  /* Spacing between lines */
  font-family: Arial, sans-serif;  /* Setting the font to Arial */
}

/* HTML to apply the style */
<p>This is a styled paragraph.</p>`}
          </code>
        </pre>

        <p className="italic text-[#FF7F50]">
          Add this CSS to a <code>&lt;style&gt;</code> tag within the HTML <code>&lt;head&gt;</code> section or in an external <code>.css</code> file, and link it to your HTML document.
        </p>

        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>
          CSS is an essential skill for web developers because it controls the visual appearance of websites. With CSS, you can customize every detail of a webpage's layout and design, making it responsive and user-friendly. The power of CSS lies in its flexibility, scalability, and wide array of tools and frameworks available. By learning CSS, you can transform basic HTML content into visually stunning and fully functional web pages. As web development continues to evolve, mastering CSS will be crucial in building modern, interactive websites that meet the needs of today’s users.
        </p>
      </div>
    </div>
  );
};

export default CssIntro;
