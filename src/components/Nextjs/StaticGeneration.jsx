"use client";

const NextStaticGenerationPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Understanding Static Generation in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Imagine printing a book before readers arrive, so they can grab it and read instantly. Static Generation in Next.js prepares webpages ahead of time for super-fast loading.  
          <span className="font-semibold">For Coders:</span> Static Generation (SSG) in Next.js pre-renders pages at build time, serving static HTML for optimal performance, SEO, and scalability, ideal for content that doesn’t change frequently.
        </p>

        {/* What is Static Generation? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What is Static Generation?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static Generation is like printing all your books before opening the library. When visitors come, they get their book instantly without waiting for you to write it.  
            <span className="font-semibold">For Coders:</span> SSG generates HTML files at build time, serving them directly from a CDN or server, minimizing runtime processing and enhancing load speed.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This is great for pages like blog posts or store items that stay the same for a while.  
            <span className="font-semibold">For Coders:</span> SSG is perfect for content like blogs, documentation, or e-commerce product pages, leveraging <code>getStaticProps</code> (Pages Router) or server components (App Router) for data fetching at build time.
          </p>
        </section>

        {/* Basic Static Page Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Example: A Simple Static Page</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine writing a “Welcome” book for your library. You print it once, and every visitor gets the same book super fast.  
            <span className="font-semibold">For Coders:</span> A basic static page requires no data fetching and is pre-rendered as static HTML during the build process.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/welcome.js (Pages Router)
export default function Welcome() {
  return <h1>Welcome to My Site!</h1>;
}

// app/welcome/page.js (App Router)
export default function Welcome() {
  return <h1>Welcome to My Site!</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This “Welcome” book is ready at <code>/welcome</code> for everyone, no waiting needed!  
            <span className="font-semibold">For Coders:</span> In Pages Router, <code>pages/welcome.js</code> generates a static page. In App Router, <code>app/welcome/page.js</code> does the same. Both are pre-rendered at build time for instant delivery.
          </p>
        </section>

        {/* Static Generation with Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Static Generation with Data</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Sometimes your book needs info, like a list of fruits, written before printing. Next.js can grab that info when preparing the book.  
            <span className="font-semibold">For Coders:</span> Use <code>getStaticProps</code> (Pages Router) or server components (App Router) to fetch data at build time, embedding it into static HTML.
          </p>

          {/* Example: Fetching Data */}
          <h3 className="text-xl font-semibold mb-4">Example: Showing a List of Fruits</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/fruits.js (Pages Router)
export async function getStaticProps() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return {
    props: {
      fruits,
    },
  };
}

export default function FruitsPage({ fruits }) {
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// app/fruits/page.js (App Router)
async function fetchFruits() {
  // Simulate API or database call
  return ['Apple', 'Banana', 'Orange'];
}

export default async function FruitsPage() {
  const fruits = await fetchFruits();
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This book lists fruits, printed once and shown instantly to every visitor at <code>/fruits</code>.  
            <span className="font-semibold">For Coders:</span> In Pages Router, <code>getStaticProps</code> fetches data at build time. In App Router, server components fetch data directly, defaulting to static rendering unless <code>cache: 'no-store'</code> is used. Use ISR with <code>revalidate</code> for periodic updates.
          </p>
        </section>

        {/* Static Generation with Dynamic Routes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Static Generation with Dynamic Routes</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine printing a separate book for each blog post in your library. You list which books to print, and each gets its own page.  
            <span className="font-semibold">For Coders:</span> Dynamic routes with SSG use <code>getStaticPaths</code> (Pages Router) or <code>generateStaticParams</code> (App Router) to define paths, paired with <code>getStaticProps</code> or server components for data.
          </p>

          {/* Example: Static Blog Posts */}
          <h3 className="text-xl font-semibold mb-4">Example: Blog Posts</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/posts/[id].js (Pages Router)
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = {
    1: 'First Blog Post',
    2: 'Second Blog Post',
  };
  return {
    props: {
      title: posts[params.id],
    },
  };
}

export default function Post({ title }) {
  return <h1>{title}</h1>;
}

// app/posts/[id]/page.js (App Router)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}

async function fetchPost(id) {
  const posts = {
    1: 'First Blog Post',
    2: 'Second Blog Post',
  };
  return posts[id];
}

export default async function Post({ params }) {
  const title = await fetchPost(params.id);
  return <h1>{title}</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This prints two blog books at <code>/posts/1</code> and <code>/posts/2</code>, ready for readers instantly.  
            <span className="font-semibold">For Coders:</span> In Pages Router, <code>getStaticPaths</code> lists paths, and <code>getStaticProps</code> fetches data per path. In App Router, <code>generateStaticParams</code> defines paths, and server components handle data fetching. Set <code>fallback: 'blocking'</code> or dynamic ISR for dynamic content.
          </p>
        </section>

        {/* When to Use Static Generation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. When Should You Use Static Generation?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Use Static Generation for books that don’t change often, so your library visitors get them fast.  
            <span className="font-semibold">For Coders:</span> SSG is ideal for content with stable data, offering superior performance and SEO benefits via pre-rendered HTML.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Beginners:</span> Homepages welcoming everyone.  
              <span className="font-semibold">Coders:</span> Landing pages or marketing sites.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Blog posts or articles.  
              <span className="font-semibold">Coders:</span> Content-driven pages with markdown or CMS data.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Store item descriptions.  
              <span className="font-semibold">Coders:</span> E-commerce product pages with stable inventory.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Help guides or manuals.  
              <span className="font-semibold">Coders:</span> Documentation or knowledge bases.
            </li>
          </ul>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> It makes your website fast and helps people find it on Google!  
            <span className="font-semibold">For Coders:</span> SSG improves Core Web Vitals (e.g., LCP) and SEO. Use ISR (<code>revalidate</code>) for semi-dynamic content to refresh data periodically.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Final Thoughts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static Generation is like having a library full of pre-printed books, ready for readers to enjoy instantly. It’s perfect for pages that stay the same.  
            <span className="font-semibold">For Coders:</span> SSG with <code>getStaticProps</code>, <code>getStaticPaths</code>, or App Router server components delivers blazing-fast, SEO-friendly pages. Combine with ISR for dynamic updates, and explore hybrid approaches with SSR or CSR for complex apps.
          </p>
        </section>

        <p className="italic text-blue-300">
          Print your webpages with Static Generation in Next.js and watch your site shine with speed and simplicity!
        </p>
      </div>
    </div>
  );
};

export default NextStaticGenerationPage;