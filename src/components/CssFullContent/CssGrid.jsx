'use client'

const CssGrid = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">CSS Grid</h1>
        <p className="text-lg">Build complex, two-dimensional layouts with CSS Grid.</p>
        <p>
          CSS Grid is a powerful layout system for creating two-dimensional grid-based layouts. It allows you to design complex structures by arranging elements into rows and columns, making it perfect for building responsive web designs such as magazine-style layouts or dashboards.
        </p>

        <h2 className="text-2xl font-semibold">Key Grid Properties</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>display: grid;</strong> Activates the grid layout on a container, turning its children into grid items.</li>
          <li><strong>grid-template-columns/rows:</strong> Defines the number and size of the columns and rows in the grid. You can use units like `px`, `fr`, `em`, or `%`.</li>
          <li><strong>gap (or grid-gap):</strong> Sets the spacing between grid cells (both row and column spacing). This property is shorthand for `grid-row-gap` and `grid-column-gap`.</li>
          <li><strong>grid-area:</strong> Allows you to place items into specific grid areas using grid lines or named grid areas, providing a more flexible way to control layout.</li>
          <li><strong>justify-items/align-items:</strong> Aligns grid content along the row (horizontal) or column (vertical) axis. You can use these properties to fine-tune the positioning of grid items.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: Grid Layout</h2>
        <p className="text-lg">
          Below is an example of how CSS Grid works, where we define a grid with 3 equal-width columns and place 6 items inside it. CSS Grid makes it easy to create complex layouts by defining rows and columns explicitly.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Grid container */
.grid {
  display: grid; /* Activates the grid layout */
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
  gap: 20px; /* Adds space between grid items */
}

/* Grid items */
.item {
  background-color: teal;
  padding: 20px;
  text-align: center;
  color: white;
}

/* HTML */
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Using Grid Areas</h2>
        <p className="text-lg">
          CSS Grid also allows you to place items into named or explicit grid areas. This gives you more control over where each item goes in the grid.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Grid container with named areas */
.grid-areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "header header header"
    "main sidebar sidebar"
    "footer footer footer";
  gap: 20px;
}

/* Grid items */
.header {
  grid-area: header;
  background-color: lightblue;
  padding: 20px;
}

.main {
  grid-area: main;
  background-color: lightcoral;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: lightgreen;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: lightgoldenrodyellow;
  padding: 20px;
}

/* HTML */
<div class="grid-areas">
  <div class="header">Header</div>
  <div class="main">Main Content</div>
  <div class="sidebar">Sidebar</div>
  <div class="footer">Footer</div>
</div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Responsive Layouts with CSS Grid</h2>
        <p className="text-lg">
          CSS Grid makes it easy to create responsive layouts. You can use media queries to adjust the number of columns or change the layout entirely based on the screen size. For example, you can stack the columns into a single column on smaller screens.
        </p>

        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Responsive grid layout */
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-responsive {
    grid-template-columns: 1fr; /* Stacks items in a single column */
  }
}

/* HTML */
<div class="grid-responsive">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>`}
          </code>
        </pre>

        <p className="italic text-[#FF7F50]">
          Use CSS Grid to create flexible, responsive, and complex web layouts, such as dashboards, galleries, and magazine-style designs.
        </p>
      </div>
    </div>
  );
};

export default CssGrid;
