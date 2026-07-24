"use client";

const NextStaticGeneration = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold mb-6">Understanding Static Generation in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Imagine baking cakes before customers arrive at a bakery, so they can grab one instantly. Static Generation in Next.js prepares webpages ahead of time for super-fast delivery.  
          <span className="font-semibold">For Coders:</span> Static Site Generation (SSG) in Next.js pre-renders pages at build time into static HTML, optimizing performance, SEO, and scalability for content that doesn’t change frequently.
        </p>

        {/* What is Static Generation? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What is Static Generation?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static Generation is like baking all your cakes before the bakery opens. When customers visit, they get their cake right away without waiting.  
            <span className="font-semibold">For Coders:</span> SSG generates static HTML files at build time, served directly from a CDN or server, minimizing server load and improving load times.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This works great for pages like menus, blog posts, or store items that stay the same for a while.  
            <span className="font-semibold">For Coders:</span> SSG is ideal for content like documentation, blogs, or product pages, using <code>getStaticProps</code> (Pages Router) or server components (App Router) to fetch data at build time.
          </p>
        </section>

        {/* Basic Static Page Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Example: A Simple Static Page</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Picture baking a “Welcome” cake for your bakery. You make it once, and every customer gets the same delicious cake instantly.  
            <span className="font-semibold">For Coders:</span> A basic static page requires no data fetching and is pre-rendered as static HTML during the build process.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/welcome.js (Pages Router)
export default function Welcome() {
  return <h1>Welcome to My Bakery!</h1>;
}

// app/welcome/page.js (App Router)
export default function Welcome() {
  return <h1>Welcome to My Bakery!</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This “Welcome” cake is ready at <code>/welcome</code> for everyone, no baking needed on the spot!  
            <span className="font-semibold">For Coders:</span> In Pages Router, <code>pages/welcome.js</code> creates a static page. In App Router, <code>app/welcome/page.js</code> does the same. Both are pre-rendered at build time for instant delivery.
          </p>
        </section>

        {/* Static Generation with Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Static Generation with Data</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Sometimes your cake needs a list of ingredients, like fruits, baked into it before serving. Next.js can grab that list when preparing the cake.  
            <span className="font-semibold">For Coders:</span> Use <code>getStaticProps</code> (Pages Router) or server components (App Router) to fetch data at build time, embedding it into static HTML.
          </p>
          <h3 className="text-xl font-semibold mb-4">Example: Displaying a Menu</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/menu.js (Pages Router)
export async function getStaticProps() {
  const menu = ['Croissant', 'Muffin', 'Scone'];
  return {
    props: {
      menu,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
}

export default function MenuPage({ menu }) {
  return (
    <div>
      <h1>Bakery Menu</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// app/menu/page.js (App Router)
async function fetchMenu() {
  // Simulate CMS or API call
  return ['Croissant', 'Muffin', 'Scone'];
}

export const revalidate = 86400; // Revalidate every 24 hours

export default async function MenuPage() {
  const menu = await fetchMenu();
  return (
    <div>
      <h1>Bakery Menu</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This cake shows a menu of baked goods, prepared once and served instantly at <code>/menu</code>. It can update daily if needed!  
            <span className="font-semibold">For Coders:</span> In Pages Router, <code>getStaticProps</code> fetches data at build time, with <code>revalidate</code> enabling Incremental Static Regeneration (ISR). In App Router, server components fetch data, and <code>revalidate</code> sets ISR at the page level. ISR refreshes data without rebuilding the entire site.
          </p>
        </section>

        {/* Static Generation with Dynamic Routes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Static Generation with Dynamic Routes</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine baking a unique cake for each special order, like “Chocolate Cake” or “Vanilla Cake.” You prepare each one in advance for quick serving.  
            <span className="font-semibold">For Coders:</span> Dynamic routes with SSG use <code>getStaticPaths</code> (Pages Router) or <code>generateStaticParams</code> (App Router) to define paths, paired with <code>getStaticProps</code> or server components for data.
          </p>
          <h3 className="text-xl font-semibold mb-4">Example: Cake Details</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/cakes/[id].js (Pages Router)
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const cakes = {
    1: 'Chocolate Cake',
    2: 'Vanilla Cake',
  };
  return {
    props: {
      name: cakes[params.id],
    },
    revalidate: 3600, // Revalidate hourly
  };
}

export default function CakePage({ name }) {
  return <h1>{name}</h1>;
}

// app/cakes/[id]/page.js (App Router)
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}

async function fetchCake(id) {
  const cakes = {
    1: 'Chocolate Cake',
    2: 'Vanilla Cake',
  };
  return cakes[id];
}

export const revalidate = 3600; // Revalidate hourly

export default async function CakePage({ params }) {
  const name = await fetchCake(params.id);
  return <h1>{name}</h1>;
}`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This bakes two cakes at <code>/cakes/1</code> and <code>/cakes/2</code>, ready for customers instantly, with hourly updates if needed.  
            <span className="font-semibold">For Coders:</span> In Pages Router, <code>getStaticPaths</code> defines paths, and <code>getStaticProps</code> fetches data, with <code>fallback: 'blocking'</code> for on-demand rendering. In App Router, <code>generateStaticParams</code> lists paths, and server components handle data, with ISR via <code>revalidate</code>.
          </p>
        </section>

        {/* When to Use Static Generation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. When to Use Static Generation?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Use Static Generation for cakes that don’t change often, so customers get them fast and fresh.  
            <span className="font-semibold">For Coders:</span> SSG is ideal for stable content, offering excellent performance, SEO, and CDN compatibility.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Beginners:</span> Bakery homepages welcoming customers.  
              <span className="font-semibold">Coders:</span> Landing pages or marketing sites.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Blog posts about baking tips.  
              <span className="font-semibold">Coders:</span> Content-driven pages with CMS or markdown.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Cake or pastry descriptions.  
              <span className="font-semibold">Coders:</span> E-commerce product pages with fixed inventory.
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Recipe guides or FAQs.  
              <span className="font-semibold">Coders:</span> Documentation or knowledge bases.
            </li>
          </ul>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> It makes your bakery fast and helps people find it online!  
            <span className="font-semibold">For Coders:</span> SSG boosts Core Web Vitals (e.g., LCP) and SEO. Use ISR for semi-dynamic content and <code>fallback</code> for large datasets.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Final Thoughts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static Generation is like having a bakery full of pre-baked cakes, ready for customers to enjoy instantly. It’s perfect for items that stay the same.  
            <span className="font-semibold">For Coders:</span> SSG with <code>getStaticProps</code>, <code>getStaticPaths</code>, or App Router server components delivers fast, SEO-friendly pages. Use ISR for periodic updates, and combine with SSR or CSR for dynamic needs in hybrid apps.
          </p>
        </section>

        <p className="italic text-blue-300">
          Bake your webpages with Static Generation in Next.js for a fast, delightful experience that keeps visitors coming back!
        </p>
      </div>
    </div>
  );
};

export default NextStaticGeneration;