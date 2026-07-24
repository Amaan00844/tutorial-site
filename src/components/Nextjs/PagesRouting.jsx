"use client";

const NextPagesAndRoutingPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Pages & Routing in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> In Next.js,
          creating pages and moving between them is like organizing a library
          where each book (page) has its own shelf (URL) that visitors can
          easily find.
          <span className="font-semibold">For Coders:</span> Next.js uses
          file-based routing to map files in the <code>pages/</code> (Pages
          Router) or <code>app/</code> (App Router) directory to URL routes,
          supporting static, dynamic, and nested paths.
        </p>

        {/* What are Pages in Next.js? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. What are Pages in Next.js?
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Pages are like
            books in your library. Each book you add to a special shelf (folder)
            gets its own address, so visitors can find it.
            <span className="font-semibold">For Coders:</span> In Next.js, pages
            are React components in the <code>pages/</code> or <code>app/</code>{" "}
            directory, automatically mapped to routes based on their file names.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> For example,
            adding a book called “About” creates a page you can visit at{" "}
            <code>/about</code>, like finding a book on a shelf.
            <span className="font-semibold">For Coders:</span> A file like{" "}
            <code>pages/about.js</code> (Pages Router) or{" "}
            <code>app/about/page.js</code> (App Router) creates a route at{" "}
            <code>/about</code>. The root route uses <code>index.js</code> or{" "}
            <code>page.js</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/about.js (Pages Router)
export default function About() {
  return <h1>About Page</h1>;
}

// app/about/page.js (App Router)
export default function About() {
  return <h1>About Page</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> These create
            an “About” book at{" "}
            <code>https://skill2future.code4bharat.com/about</code>.
            <span className="font-semibold">For Coders:</span> Files in{" "}
            <code>pages/</code> or <code>app/</code> define routes. App Router
            uses <code>page.js</code> for page components and supports{" "}
            <code>layout.js</code> for shared UI.
          </p>
        </section>

        {/* Dynamic Routing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Dynamic Routing</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Dynamic
            routing is like having a book with a custom title for each reader,
            such as “Blog Post 1” or “Blog Post 2,” based on a number.
            <span className="font-semibold">For Coders:</span> Dynamic routes
            use square brackets (e.g., <code>[id].js</code>) to capture variable
            URL segments, enabling flexible, parameter-driven pages.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> You name a
            book “[id]” to show different versions, like <code>/posts/1</code>{" "}
            or <code>/posts/2</code>.
            <span className="font-semibold">For Coders:</span> Dynamic routes
            are defined with bracketed file names in <code>pages/</code> or
            folder names in <code>app/</code>, with parameters accessed via{" "}
            <code>useRouter</code> or <code>params</code>.
          </p>

          {/* Example: Dynamic Routing */}
          <h3 className="text-xl font-semibold mb-4">
            Example: Dynamic Blog Post
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/posts/[id].js (Pages Router)
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Blog Post {id}</h1>;
}

// app/posts/[id]/page.js (App Router)
export default function Post({ params }) {
  return <h1>Blog Post {params.id}</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This creates
            books for <code>/posts/1</code>, <code>/posts/2</code>, etc.,
            showing the right post number.
            <span className="font-semibold">For Coders:</span> In Pages Router,{" "}
            <code>useRouter</code> retrieves the <code>id</code> query param. In
            App Router, <code>params.id</code> provides the dynamic segment. Use{" "}
            <code>generateStaticParams</code> for SSG with dynamic routes.
          </p>
        </section>

        {/* Nested Routing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Nested Routing</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Nested routing
            is like organizing books into sections, such as a “Contact” section
            with “Email” and “Phone” chapters.
            <span className="font-semibold">For Coders:</span> Nested routes are
            created by adding subdirectories in <code>pages/</code> or{" "}
            <code>app/</code>, mapping to hierarchical URLs.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Put books in a
            “Contact” shelf with sub-books for “Email” and “Phone” to create
            paths like <code>/contact/email</code>.
            <span className="font-semibold">For Coders:</span> Subfolders in{" "}
            <code>pages/</code> or <code>app/</code> define nested routes, with
            each file or <code>page.js</code> creating a navigable endpoint.
          </p>

          {/* Example: Nested Routing */}
          <h3 className="text-xl font-semibold mb-4">
            Example: Nested Contact Page
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/contact/email.js (Pages Router)
export default function Email() {
  return <h1>Contact via Email</h1>;
}

// pages/contact/phone.js
export default function Phone() {
  return <h1>Contact via Phone</h1>;
}

// app/contact/email/page.js (App Router)
export default function Email() {
  return <h1>Contact via Email</h1>;
}

// app/contact/phone/page.js
export default function Phone() {
  return <h1>Contact via Phone</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> These create
            books at <code>/contact/email</code> and <code>/contact/phone</code>
            , like sections in your library.
            <span className="font-semibold">For Coders:</span> In Pages Router,
            files in subfolders create nested routes. In App Router,{" "}
            <code>page.js</code> files in subdirectories define the same. Use{" "}
            <code>layout.js</code> in App Router for shared nested layouts.
          </p>
        </section>

        {/* Catch-all Routes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Catch-all Routes</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Catch-all
            routes are like a magic shelf that holds any book under a section,
            so you don’t need a separate shelf for each one.
            <span className="font-semibold">For Coders:</span> Catch-all routes
            use <code>[...slug]</code> syntax to match any URL segments under a
            path, ideal for flexible routing scenarios.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> For a
            “Products” section, one shelf can show any product, like{" "}
            <code>/products/toys/dolls</code>.
            <span className="font-semibold">For Coders:</span> Use{" "}
            <code>[...slug].js</code> (Pages Router) or{" "}
            <code>[...slug]/page.js</code> (App Router) to capture all sub-paths
            as an array of segments.
          </p>

          {/* Example: Catch-all Route */}
          <h3 className="text-xl font-semibold mb-4">Example: Product Pages</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/products/[...slug].js (Pages Router)
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { slug } = router.query;
  return <h1>Product: {slug ? slug.join(' / ') : 'None'}</h1>;
}

// app/products/[...slug]/page.js (App Router)
export default function Product({ params }) {
  return <h1>Product: {params.slug ? params.slug.join(' / ') : 'None'}</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This shows any
            product, like <code>/products/smartphone/iphone-12</code> displaying
            “smartphone / iphone-12.”
            <span className="font-semibold">For Coders:</span> <code>slug</code>{" "}
            is an array of path segments. Handles routes like{" "}
            <code>/products/a/b/c</code>. Use <code>[[...slug]]</code> for
            optional catch-all routes (e.g., including <code>/products</code>).
            Add <code>generateStaticParams</code> for SSG.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Keep Exploring</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Your library
            is growing! Keep adding books, sections, and magic shelves to make
            your website exciting for visitors.
            <span className="font-semibold">For Coders:</span> With Next.js’s
            routing, build complex apps using: - Dynamic routes for
            parameterized content. - Nested routes for hierarchical navigation.
            - Catch-all routes for flexible paths. - App Router’s advanced
            features like parallel routes and intercepting routes.
          </p>
        </section>

        <p className="italic text-blue-300">
          Build a vibrant library with Next.js, making navigation easy for
          everyone, from beginners to pros!
        </p>
      </div>
    </div>
  );
};

export default NextPagesAndRoutingPage;
