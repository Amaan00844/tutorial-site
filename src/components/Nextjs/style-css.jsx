"use client";

const NextStyleCss = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold mb-6">Styling with CSS in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> CSS is like decorating your house, choosing paint colors, furniture, or curtains to make it look inviting. In Next.js, you can decorate your website in various ways to make it beautiful and user-friendly.  
          <span className="font-semibold">For Coders:</span> Next.js supports multiple CSS styling methods—global CSS, CSS Modules, inline CSS, Styled JSX, and utilities like Tailwind CSS—offering flexibility for styling React components in both Pages and App Router.
        </p>

        {/* Global CSS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Using Global CSS</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Global CSS is like painting all the walls in your house the same color or using the same carpet everywhere. It sets a consistent look for your entire website.  
            <span className="font-semibold">For Coders:</span> Global CSS applies styles across the entire app, defined in a central file like <code>styles/globals.css</code>, imported in <code>_app.js</code> (Pages Router) or <code>layout.js</code> (App Router).
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You put these decorations in one special file to make your whole house look cohesive.  
            <span className="font-semibold">For Coders:</span> Define global styles in <code>globals.css</code> and import it in <code>pages/_app.js</code> or <code>app/layout.js</code> to ensure consistent application.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`/* styles/globals.css */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
}

/* pages/_app.js (Pages Router) */
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/* app/layout.js (App Router) */
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This paints your house with a light background and uses a clean font for all text, making everything look uniform.  
            <span className="font-semibold">For Coders:</span> <code>globals.css</code> sets app-wide styles, applied via <code>_app.js</code> or <code>layout.js</code>. Include resets (e.g., <code>margin: 0</code>) and use modern fonts like Roboto for consistency. Avoid overuse to prevent CSS specificity issues.
          </p>
        </section>

        {/* Component-Level CSS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Component-Level CSS with CSS Modules</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Sometimes you want to decorate just one room, like a cozy chair for the living room. CSS Modules let you style one part of your website without affecting others.  
            <span className="font-semibold">For Coders:</span> CSS Modules provide scoped, component-specific styles, generating unique class names at build time to prevent style conflicts.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You create a decoration plan just for that room, so other rooms stay untouched.  
            <span className="font-semibold">For Coders:</span> Use a <code>.module.css</code> file alongside the component, importing and applying scoped classes for isolated styling.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/@/components/Card.js
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Welcome</h2>
      <p>Explore our website!</p>
    </div>
  );
}

// app/@/components/Card.module.css
.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.title {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 10px;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This room gets a white card with a shadow, and only this room looks that way, even if other rooms have cards.  
            <span className="font-semibold">For Coders:</span> The <code>styles.card</code> and <code>styles.title</code> classes are scoped to the <code>Card</code> component, with unique names (e.g., <code>Card_card__xyz123</code>) generated at build time. Supports advanced CSS like <code>:hover</code> and transitions.
          </p>
        </section>

        {/* Inline CSS */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Inline CSS</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Inline CSS is like hanging a quick picture on a wall—fast but simple. You add decorations right where you need them.  
            <span className="font-semibold">For Coders:</span> Inline CSS applies styles directly in JSX via the <code>style</code> attribute, ideal for small tweaks but limited for complex styling.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/@/components/QuickButton.js
export default function QuickButton() {
  return (
    <button
      style={{
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      Quick Action
    </button>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This button gets a red color right where it’s placed, but you can’t add fancy effects like glowing when touched.  
            <span className="font-semibold">For Coders:</span> Inline styles are convenient for dynamic or one-off styles but lack support for pseudo-classes, media queries, or animations. Use sparingly, favoring CSS Modules or Tailwind for maintainability.
          </p>
        </section>

        {/* Styled JSX */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Styled JSX</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Styled JSX is like decorating a room with a unique wallpaper that only that room uses, keeping it separate from the rest of the house.  
            <span className="font-semibold">For Coders:</span> Styled JSX, a Next.js-specific CSS-in-JS solution, scopes styles to a component, defined within JSX using a <code>style jsx</code> tag.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/@/components/StyledCard.js
export default function StyledCard() {
  return (
    <div>
      <div className="card">
        <h2>Welcome</h2>
        <p>Explore our website!</p>
      </div>
      <style jsx>{\`
        .card {
          background-color: #34495e;
          color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card:hover {
          background-color: #2c3e50;
        }
      \`}</style>
    </div>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This room gets a dark, stylish card that only it uses, staying unique in the house.  
            <span className="font-semibold">For Coders:</span> Styled JSX ensures styles are scoped to the component, supporting pseudo-classes and media queries. Use <code>style jsx global</code> for unscoped styles if needed. Less common with modern tools like Tailwind but useful for CSS-in-JS workflows.
          </p>
        </section>

        {/* When to Use Which Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. When to Use Which Method?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Each decorating method is like choosing a tool to make your house look great—pick what suits your project!  
            <span className="font-semibold">For Coders:</span> Choose styling methods based on scope, scalability, and team preferences, with modern utilities like Tailwind CSS for rapid prototyping.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Global CSS:</strong>  
              <span className="font-semibold">Beginners:</span> For decorating the whole house, like paint or flooring.  
              <span className="font-semibold">Coders:</span> Use for app-wide resets, themes, or typography in <code>globals.css</code>.
            </li>
            <li>
              <strong>CSS Modules:</strong>  
              <span className="font-semibold">Beginners:</span> For unique furniture in one room, like a special chair.  
              <span className="font-semibold">Coders:</span> Best for modular, scoped styles with full CSS feature support.
            </li>
            <li>
              <strong>Inline CSS:</strong>  
              <span className="font-semibold">Beginners:</span> For quick decorations, like a single lamp.  
              <span className="font-semibold">Coders:</span> Use for dynamic or temporary styles, avoiding complex logic.
            </li>
            <li>
              <strong>Styled JSX:</strong>  
              <span className="font-semibold">Beginners:</span> For custom decorations kept in one room.  
              <span className="font-semibold">Coders:</span> Suitable for scoped CSS-in-JS, though alternatives like Emotion or Tailwind are more popular.
            </li>
            <li>
              <strong>Tailwind CSS (Bonus):</strong>  
              <span className="font-semibold">Beginners:</span> Like a decorating kit with ready-to-use pieces you mix and match.  
              <span className="font-semibold">Coders:</span> Leverage Tailwind’s utility-first approach for fast, consistent styling, integrated via <code>create-next-app</code>.
            </li>
          </ul>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Final Thoughts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Decorating your website with CSS is like making your house a cozy home—try different styles to create a welcoming experience!  
            <span className="font-semibold">For Coders:</span> Next.js offers versatile styling solutions for any project. Use CSS Modules for modularity, Styled JSX for CSS-in-JS, or Tailwind CSS for speed. Optimize with PostCSS, ensure App Router compatibility, and explore CSS-in-JS libraries like Emotion for advanced needs.
          </p>
        </section>

        <p className="italic text-blue-300">
          Decorate your Next.js website with CSS to create a stunning, user-friendly experience that shines for every visitor!
        </p>
      </div>
    </div>
  );
};

export default NextStyleCss;