"use client";

const NextGetStartedPage = () => {
  return (
    <div className="p-6 mi-70">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Get Started with Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Next.js is like
          a magic toolbox that helps you build a toy store (website) filled with
          fun toys (pages) that load fast and attract visitors.
          <span className="font-semibold">For Coders:</span> Next.js is a
          powerful React framework for building fast, scalable, SEO-friendly web
          applications with features like server-side rendering, static
          generation, and an intuitive file-based routing system.
        </p>

        {/* Setting Up Next.js */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Setting Up Your First Next.js Project
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Starting a
            Next.js project is like setting up a new toy store. You type a few
            instructions, and your store is ready to open!
            <span className="font-semibold">For Coders:</span> Next.js provides
            a streamlined setup process using <code>create-next-app</code>,
            which scaffolds a project with all necessary dependencies and
            configurations.
          </p>

          {/* Installation */}
          <h3 className="text-xl font-semibold mb-4">Install Next.js</h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Open your
            computer’s command app (like a magic typewriter) and type these
            lines to build your toy store.
            <span className="font-semibold">For Coders:</span> Use the following
            commands in your terminal to create and run a Next.js project with
            the latest version (e.g., Next.js 14).
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`npx create-next-app@latest my-next-app
cd my-next-app
npm run dev`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> After typing
            these, visit <code>https://skill2future.code4bharat.com</code> in
            your web browser to see your toy store come alive!
            <span className="font-semibold">For Coders:</span> The{" "}
            <code>npx create-next-app</code> command sets up a project with
            TypeScript, ESLint, and Tailwind CSS options.{" "}
            <code>npm run dev</code> starts a development server at{" "}
            <code>https://skill2future.code4bharat.com</code>. Use{" "}
            <code>--turbo</code> for faster builds in Next.js 14.
          </p>
        </section>

        {/* Project Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Next.js Project Structure
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Your toy store
            has shelves (folders) where everything is neatly organized, so you
            can find toys (files) easily.
            <span className="font-semibold">For Coders:</span> Next.js uses a
            file-based routing system, with specific folders for pages, assets,
            and configurations, differing slightly between the Pages and App
            Router.
          </p>

          {/* Folder Overview */}
          <h3 className="text-xl font-semibold mb-4">Folder Overview</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>pages/ (Pages Router) or app/ (App Router):</strong>
              <span className="font-semibold">Beginners:</span> This is where
              you put toys (pages) for your store. Each toy box (file) becomes a
              page, like an “About” toy for an About page.
              <span className="font-semibold">Coders:</span> In the Pages
              Router, <code>pages/</code> defines routes (e.g.,{" "}
              <code>pages/about.js</code> → <code>/about</code>). In the App
              Router, <code>app/</code> uses a folder-based structure with{" "}
              <code>page.js</code> files for routes.
            </li>
            <li>
              <strong>public/:</strong>
              <span className="font-semibold">Beginners:</span> This shelf holds
              pictures or decorations (like logos) anyone can see.
              <span className="font-semibold">Coders:</span> Static assets like
              images or fonts are served from <code>public/</code> at the root
              URL (e.g., <code>public/logo.png</code> → <code>/logo.png</code>).
            </li>
            <li>
              <strong>styles/ or app/globals.css:</strong>
              <span className="font-semibold">Beginners:</span> This is where
              you choose colors and designs to make your store pretty.
              <span className="font-semibold">Coders:</span> CSS files for
              global styling, often using Tailwind CSS or custom styles in{" "}
              <code>app/globals.css</code> for the App Router.
            </li>
            <li>
              <strong>next.config.js:</strong>
              <span className="font-semibold">Beginners:</span> A rulebook to
              customize how your store works.
              <span className="font-semibold">Coders:</span> Configuration file
              for Webpack, environment variables, or custom settings like image
              optimization domains.
            </li>
          </ul>
        </section>

        {/* Adding New Pages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Adding New Pages</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Adding a new
            page is like adding a new toy to your store. You just create a new
            toy box (file) in the right shelf.
            <span className="font-semibold">For Coders:</span> Pages are created
            by adding files to <code>pages/</code> (Pages Router) or{" "}
            <code>app/</code> (App Router), automatically mapped to routes.
          </p>

          {/* Creating a Page */}
          <h3 className="text-xl font-semibold mb-4">Creating a Page</h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> To make an
            “About Us” page, add a new toy box called <code>about.js</code> to
            your store’s page shelf.
            <span className="font-semibold">For Coders:</span> Create a file in{" "}
            <code>pages/</code> or <code>app/</code> to define a new route.
            Below are examples for both routers.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/about.js (Pages Router)
export default function About() {
  return <h1>About Us</h1>;
}

// app/about/page.js (App Router)
export default function About() {
  return <h1>About Us</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> After adding
            this, visit <code>https://skill2future.code4bharat.com/about</code>{" "}
            to see your new “About Us” page, like showing off a new toy!
            <span className="font-semibold">For Coders:</span> In the Pages
            Router, <code>pages/about.js</code> maps to <code>/about</code>. In
            the App Router, <code>app/about/page.js</code> defines the same
            route. Use <code>layout.js</code> in App Router for shared UI.
          </p>
        </section>

        {/* Linking Pages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Linking Pages</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Linking pages
            is like putting signs in your store to guide visitors to different
            toys, like from the entrance to the “About” section.
            <span className="font-semibold">For Coders:</span> Next.js uses the{" "}
            <code>Link</code> component for client-side navigation, ensuring
            fast page transitions without full reloads.
          </p>

          {/* Using the Link Component */}
          <h3 className="text-xl font-semibold mb-4">
            Using the Link Component
          </h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Add a sign
            (link) on your main page to guide visitors to the “About” page.
            <span className="font-semibold">For Coders:</span> Import{" "}
            <code>Link</code> from <code>next/link</code> to create navigation
            links, optimized for performance.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/index.js (Pages Router)
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}

// app/page.js (App Router)
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This adds a
            “Go to About Page” sign on your main page. Click it to visit the
            “About” page instantly!
            <span className="font-semibold">For Coders:</span> <code>Link</code>{" "}
            enables client-side routing. In the App Router, it works similarly
            but supports advanced features like intercepting routes. Use{" "}
            <code>prefetch</code> for faster navigation.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Keep Building</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You’ve opened
            your toy store! Keep adding toys (pages), decorating (styling), and
            exploring new tricks to make your store amazing.
            <span className="font-semibold">For Coders:</span> Your Next.js app
            is ready! Dive into advanced features like: - Static Site Generation
            (SSG) for fast, cached pages. - Server-Side Rendering (SSR) for
            dynamic content. - App Router for modern routing and server
            components. - API Routes or Route Handlers for backend logic.
          </p>
        </section>

        <p className="italic text-blue-300">
          Next.js makes building websites fun and powerful, whether you’re just
          starting or coding like a pro!
        </p>
      </div>
    </div>
  );
};

export default NextGetStartedPage;
