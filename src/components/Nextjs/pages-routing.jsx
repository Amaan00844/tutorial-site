"use client";

const NextHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Your Next.js Journey
          </h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">New to Coding?</span> Think of
            Next.js as a magical toolbox for building cool websites, like
            creating your own toy shop!
            <span className="font-semibold">Experienced Coder?</span> Dive into
            Next.js, a powerful React framework for crafting fast, SEO-friendly
            web apps with server-side rendering, static generation, and more.
          </p>
        </header>

        {/* Fundamentals Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. What is Next.js?
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Next.js is like a
            toy-building kit that makes websites fast and fun to use. It’s easy
            to start creating!
            <span className="font-semibold">Coders:</span> Next.js is a React
            framework that streamlines development with features like file-based
            routing, static site generation (SSG), server-side rendering (SSR),
            and built-in API routes.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Getting Started
          </h3>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Set up your
            workshop by typing a few commands to create your first website.
            <span className="font-semibold">Coders:</span> Use{" "}
            <code>create-next-app</code> to scaffold a Next.js project with
            modern tools like TypeScript and Tailwind CSS.
          </p>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto mb-4">
            <code>npx create-next-app@latest my-app cd my-app npm run dev</code>
          </pre>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Run these in your
            computer’s terminal (like a command center) and visit{" "}
            <code>https://skill2future.code4bharat.com</code> to see your site!
            <span className="font-semibold">Coders:</span> This sets up a
            Next.js v14+ project. <code>npm run dev</code> starts a local
            server. Add <code>--turbo</code> for faster builds.
          </p>
        </section>

        {/* Pages & Routing Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Creating Pages & Navigation
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Pages are like
            different toys in your shop. Name a file, and it becomes a page
            people can visit.
            <span className="font-semibold">Coders:</span> Next.js uses
            file-based routing. Files in <code>pages/</code> (Pages Router) or{" "}
            <code>app/</code> (App Router) automatically become routes.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Your First Page
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto mb-4">
            <code>{`// app/page.js (App Router)
export default function Home() {
  return <h1>Welcome to My Toy Shop!</h1>;
}`}</code>
          </pre>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> This creates a
            “Welcome” page at your site’s front door (
            <code>https://skill2future.code4bharat.com</code>).
            <span className="font-semibold">Coders:</span>{" "}
            <code>app/page.js</code> defines the root route in the App Router.
            Use <code>layout.js</code> for shared UI across pages.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Dynamic Pages
          </h3>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Make pages that
            change based on what a visitor wants, like a custom toy with their
            name.
            <span className="font-semibold">Coders:</span> Dynamic routes use
            brackets (e.g., <code>[id].js</code>) to handle unique URLs.
          </p>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto mb-4">
            <code>{`// app/[id]/page.js (App Router)
export default function Page({ params }) {
  return <h1>Toy ID: {params.id}</h1>;
}`}</code>
          </pre>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Visit{" "}
            <code>/1</code> or <code>/2</code> to see different toy IDs.
            <span className="font-semibold">Coders:</span> The{" "}
            <code>params</code> prop gives dynamic URL segments. Use{" "}
            <code>generateStaticParams</code> for static generation.
          </p>
        </section>

        {/* Data Fetching Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Fetching Data
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Imagine grabbing
            new toy parts from a store to show on your site, like a list of
            toys.
            <span className="font-semibold">Coders:</span> Next.js supports
            server-side rendering (SSR) and static generation (SSG) for dynamic
            data fetching.
          </p>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto mb-4">
            <code>{`// app/toys/page.js (App Router)
async function fetchToys() {
  const res = await fetch('https://api.example.com/toys', { cache: 'no-store' });
  return res.json();
}

export default async function Page() {
  const toys = await fetchToys();
  return (
    <ul>
      {toys.map((toy) => (
        <li key={toy.id}>{toy.name}</li>
      ))}
    </ul>
  );
}`}</code>
          </pre>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> This code grabs a
            list of toys and shows them when someone visits the page.
            <span className="font-semibold">Coders:</span> This server component
            fetches data on each request (SSR) with{" "}
            <code>cache: 'no-store'</code>. Use <code>getStaticProps</code> for
            SSG in the Pages Router.
          </p>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Try It Yourself
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Practice by making
            a page that shows a fun message, like a sign in your toy shop.
            <span className="font-semibold">Coders:</span> Build a simple page
            with static data to understand Next.js rendering.
          </p>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto mb-4">
            <code>{`// app/practice/page.js (App Router)
export default function Page() {
  const message = "Welcome to My Toy Shop!";
  return <div className="text-2xl text-blue-600">{message}</div>;
}`}</code>
          </pre>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> This shows a
            “Welcome” sign at <code>/practice</code>. Try changing the message!
            <span className="font-semibold">Coders:</span> This server component
            renders static content. Test it at{" "}
            <code>https://skill2future.code4bharat.com/practice</code>.
          </p>
        </section>

        {/* Next Steps Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. What’s Next?
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Beginners:</span> Keep playing in
            your toy shop! Try new designs and make your websites even cooler.
            <span className="font-semibold">Coders:</span> Explore advanced
            Next.js features: - Build APIs with Route Handlers. - Optimize
            images with <code>next/image</code>. - Create layouts with{" "}
            <code>layout.js</code> in App Router. - Experiment with middleware
            for custom logic.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-blue-500 italic">
            Start building amazing websites with Next.js—happy creating!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NextHomePage;
