"use client";

const NextIntroduction = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Welcome to Next.js Learning</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> This site is
          like a guide to building a toy city (website) with Next.js, a tool
          that makes your city fast, fun, and easy to explore.
          <span className="font-semibold">For Coders:</span> This site offers
          interactive tutorials to master Next.js, a React framework for
          creating optimized, dynamic web applications with features like
          server-side rendering (SSR), static site generation (SSG), and
          file-based routing.
        </p>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Learn Next.js Fundamentals
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js is
            like a city planner’s toolkit, helping you build a toy city with
            streets (pages) and shops (features) that visitors love.
            <span className="font-semibold">For Coders:</span> Next.js extends
            React with built-in tools for automatic routing, SSR, SSG, and API
            routes, enabling scalable, SEO-friendly applications.
          </p>

          {/* Next.js Basics */}
          <h3 className="text-xl font-semibold mb-4">Basics of Next.js</h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Start by
            learning how to set up your city, add streets (pages), and make it
            easy for visitors to move around.
            <span className="font-semibold">For Coders:</span> Learn core
            concepts like project setup, creating pages, and configuring routing
            in the Pages or App Router.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`npx create-next-app@latest my-next-app
cd my-next-app
npm run dev`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Type these
            commands in your computer’s command app to start your toy city.
            Visit <code>https://skill2future.code4bharat.com</code> to see it!
            <span className="font-semibold">For Coders:</span>{" "}
            <code>create-next-app</code> scaffolds a Next.js project (v14+) with
            TypeScript, Tailwind CSS, and ESLint options.{" "}
            <code>npm run dev</code> starts a local server. Use{" "}
            <code>--turbo</code> for faster builds.
          </p>

          {/* Advanced Next.js Concepts */}
          <h3 className="text-xl font-semibold mb-4">Advanced Concepts</h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Once you know
            the basics, learn to add shops that update instantly or fetch new
            items automatically.
            <span className="font-semibold">For Coders:</span> Dive into SSR,
            SSG, API routes, and the App Router’s server components to build
            dynamic, performant applications.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/data.js (Pages Router)
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data}</div>;
}

// app/data/page.js (App Router)
async function fetchData() {
  const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
  return res.json();
}

export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code
            fetches new items (data) for your city’s shop when visitors arrive,
            keeping it fresh.
            <span className="font-semibold">For Coders:</span> In the Pages
            Router, <code>getServerSideProps</code> enables SSR. In the App
            Router, server components with <code>cache: 'no-store'</code>{" "}
            simplify dynamic data fetching.
          </p>
        </section>

        {/* Learn Pages & Routing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Learn Pages & Routing
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Pages are like
            streets in your toy city, each with a name that helps visitors find
            them. Next.js makes it easy to create and connect these streets.
            <span className="font-semibold">For Coders:</span> Next.js’s
            file-based routing automatically maps files in <code>pages/</code>{" "}
            (Pages Router) or <code>app/</code> (App Router) to URL routes,
            supporting static and dynamic paths.
          </p>

          {/* Creating Pages */}
          <h3 className="text-xl font-semibold mb-4">Creating Pages</h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> To make a
            “Home” street, add a file to your city’s street folder, and it
            becomes a place visitors can visit.
            <span className="font-semibold">For Coders:</span> Create a page by
            adding a file like <code>index.js</code> in <code>pages/</code> or{" "}
            <code>page.js</code> in <code>app/</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/index.js (Pages Router)
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// app/page.js (App Router)
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This creates a
            “Welcome” street at your city’s entrance (
            <code>https://skill2future.code4bharat.com</code>).
            <span className="font-semibold">For Coders:</span>{" "}
            <code>index.js</code> defines the root route in the Pages Router;{" "}
            <code>app/page.js</code> does the same in the App Router. Use{" "}
            <code>layout.js</code> in App Router for shared layouts.
          </p>

          {/* Dynamic Routing */}
          <h3 className="text-xl font-semibold mb-4">Dynamic Routing</h3>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Dynamic
            routing is like naming streets with custom signs, so each visitor
            sees a unique street name.
            <span className="font-semibold">For Coders:</span> Use square
            brackets (e.g., <code>[id].js</code>) to create dynamic routes that
            handle variable URL segments.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/[id].js (Pages Router)
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Page ID: {id}</h1>;
}

// app/[id]/page.js (App Router)
export default function Page({ params }) {
  return <h1>Page ID: {params.id}</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This lets
            visitors go to streets like <code>/1</code> or <code>/2</code> to
            see different signs.
            <span className="font-semibold">For Coders:</span> In the Pages
            Router, <code>useRouter</code> accesses dynamic params. In the App
            Router, the <code>params</code> prop provides them directly. Use{" "}
            <code>generateStaticParams</code> for SSG with dynamic routes.
          </p>
        </section>

        {/* Interactive Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Interactive Exercises
          </h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Try fun tasks
            in your toy city, like building a street that shows a special
            message to visitors.
            <span className="font-semibold">For Coders:</span> Practice Next.js
            skills with hands-on exercises focusing on static generation and
            component rendering.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/exercise/page.js
export async function getStaticProps() {
  return { props: { message: "Hello, Next.js!" } };
}

export default function Page({ message }) {
  return <div>{message}</div>;
}

// Alternative: App Router Server Component
export default function Page() {
  const message = "Hello, Next.js!";
  return <div>{message}</div>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This task
            shows “Hello, Next.js!” on a street, like putting up a welcome sign.
            <span className="font-semibold">For Coders:</span> The first example
            uses <code>getStaticProps</code> (Pages Router style). The second
            uses an App Router server component for simpler static rendering.
            Test it at <code>/exercise</code>.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Keep Learning</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Your toy city
            is growing! Keep adding streets, shops, and cool features to make it
            amazing.
            <span className="font-semibold">For Coders:</span> Explore advanced
            Next.js features to enhance your apps: - API Routes or Route
            Handlers for backend functionality. - Image optimization with{" "}
            <code>next/image</code>. - Middleware for custom request handling. -
            App Router’s server components and streaming for modern workflows.
          </p>
        </section>

        <p className="italic text-blue-300">
          Happy coding! Build a vibrant toy city with Next.js, whether you’re
          just starting or coding like a pro.
        </p>
      </div>
    </div>
  );
};

export default NextIntroduction;
