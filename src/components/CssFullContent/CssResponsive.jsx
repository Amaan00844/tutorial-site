'use client'

const CssResponsiveDesign = () => {
  return (
    <div className="p-8 mx-auto text-black space-y-6">
      <div className="bg-white p-8  max-w-4xl rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Responsive Design</h1>
        <p className="text-lg">Create websites that adapt to all devices.</p>
        <p>
          Responsive design ensures your website looks great on any screen size, from mobile phones to desktops, using techniques like relative units, media queries, and flexible layouts. This approach enhances the user experience across devices and resolutions.
        </p>

        <h2 className="text-2xl font-semibold">Key Techniques</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Relative Units:</strong> Use <code>%, vw, vh, rem, em</code> instead of fixed pixels for scalable layouts.</li>
          <li><strong>Media Queries:</strong> Apply styles based on screen size, device orientation, or features like resolution.</li>
          <li><strong>Fluid Layouts:</strong> Use Flexbox or CSS Grid for creating flexible, adaptive grid systems.</li>
          <li><strong>Responsive Images:</strong> Use <code>max-width: 100%</code> or <code>srcset</code> to serve different image sizes based on screen width.</li>
          <li><strong>Mobile-First Approach:</strong> Start by designing for mobile devices first, then scale up for larger screens.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Media Query</h2>
        <p className="text-lg">
          Media queries allow you to apply different styles based on screen sizes or device features. Here's an example that changes the layout of a container from a column layout (for mobile) to a row layout (for desktop).
        </p>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Base styles (mobile-first approach) */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Desktop styles */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* HTML */
<div class="container">
  <div style="background: coral; padding: 20px;">Box 1</div>
  <div style="background: teal; padding: 20px;">Box 2</div>
</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Responsive Images</h2>
        <p className="text-lg">
          To ensure that images scale correctly on different devices, use the <code>max-width: 100%</code> style. This ensures images don't overflow their container and resize based on the viewport.
        </p>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* HTML */
<img src="example.jpg" alt="Responsive image">`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Example: Flexbox Layout</h2>
        <p className="text-lg">
          Flexbox is a powerful tool for creating flexible and responsive layouts. Here's how you can use Flexbox to create a responsive navigation menu.
        </p>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Base styles (mobile-first approach) */
nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
}

/* Desktop styles */
@media (min-width: 768px) {
  nav {
    flex-direction: row;
  }
}

/* HTML */
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>`}
          </code>
        </pre>

        <p className="italic text-[#FF7F50]">
          Test your design across devices using browser developer tools to ensure that it’s fully responsive and adapts to various screen sizes.
        </p>
      </div>
    </div>
  );
};

export default CssResponsiveDesign;
