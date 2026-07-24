"use client";

const NextServerSideRenderingPage = () => {
  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Understanding Server-Side Rendering (SSR) in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Imagine ordering a meal at a restaurant where the chef cooks it fresh just for you. Server-Side Rendering (SSR) in Next.js works like that, preparing a webpage with the latest ingredients (data) every time someone visits.  
          <span className="font-semibold">For Coders:</span> SSR in Next.js generates HTML on the server for each request, delivering dynamic, up-to-date content ideal for personalized or frequently changing data, with built-in SEO benefits.
        </p>

        {/* What is SSR? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What is Server-Side Rendering?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> SSR is like a chef preparing a fresh meal each time a customer orders. Your webpage is built on the spot with the latest information before it’s sent to the visitor’s screen.  
            <span className="font-semibold">For Coders:</span> SSR renders the page’s HTML on the server per request, fetching data dynamically and sending a fully rendered page to the client, ensuring fresh content and SEO optimization.
          </p>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This is perfect for pages that need to show new info, like a news feed or your personal profile.  
            <span className="font-semibold">For Coders:</span> SSR is ideal for use cases requiring real-time data, user-specific content, or frequent updates, such as dashboards, e-commerce product pages, or social media feeds.
          </p>
        </section>

        {/* Basic SSR Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Example: A Page with SSR</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine a restaurant sign showing the current time, updated every time someone walks in. SSR can make a webpage show fresh data like that.  
            <span className="font-semibold">For Coders:</span> SSR ensures data is fetched on each request, making it suitable for time-sensitive or user-specific content that can’t be pre-rendered.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/time.js (Pages Router)
export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleTimeString(),
    },
  };
}

export default function TimePage({ time }) {
  return <h1>Current Time: {time}</h1>;
}

// app/time/page.js (App Router)
async function getTime() {
  return new Date().toLocaleTimeString();
}

export default async function TimePage() {
  const time = await getTime();
  return <h1>Current Time: {time}</h1>;
}`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Each time you visit this page, it shows the current time, like a freshly cooked meal served hot.  
            <span className="font-semibold">For Coders:</span> In the Pages Router, <code>getServerSideProps</code> fetches data per request. In the App Router, server components with <code>cache: 'no-store'</code> (implicit here) achieve SSR, simplifying data fetching. Visit <code>/time</code> to see the latest time.
          </p>
        </section>

        {/* When to Use SSR */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. When Should You Use Server-Side Rendering?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Use SSR when your webpage needs to show fresh, custom info, like a menu that changes daily or a profile with your name.  
            <span className="font-semibold">For Coders:</span> Choose SSR for scenarios requiring dynamic, user-specific, or real-time data, balancing performance with content freshness.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Beginners:</span> User dashboards showing live updates, like your bank balance.  
              <span className="font-semibold">Coders:</span> Real-time data dashboards (e.g., analytics or monitoring systems).
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Personalized pages, like “Welcome, Sarah!”  
              <span className="font-semibold">Coders:</span> User-specific content (e.g., account settings or personalized recommendations).
            </li>
            <li>
              <span className="font-semibold">Beginners:</span> Pages with changing info, like news or weather.  
              <span className="font-semibold">Coders:</span> Frequently updated content (e.g., stock prices, news feeds, or weather APIs).
            </li>
          </ul>
        </section>

        {/* getServerSideProps Explanation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Understanding SSR Mechanisms</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Next.js has a tool, like a chef’s recipe, that prepares fresh data for your page every time someone visits.  
            <span className="font-semibold">For Coders:</span> SSR is powered by <code>getServerSideProps</code> in the Pages Router or server components in the App Router, fetching data server-side before rendering.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/profile.js (Pages Router)
export async function getServerSideProps(context) {
  const { userId } = context.query; // Access request params
  const res = await fetch(\`https://api.example.com/users/\${userId}\`);
  const data = await res.json();
  return {
    props: { user: data },
  };
}

export default function Profile({ user }) {
  return <h1>Hello, {user.name}!</h1>;
}

// app/profile/[userId]/page.js (App Router)
async function fetchUser(userId) {
  const res = await fetch(\`https://api.example.com/users/\${userId}\`, { cache: 'no-store' });
  return res.json();
}

export default async function Profile({ params }) {
  const user = await fetchUser(params.userId);
  return <h1>Hello, {user.name}!</h1>;
}`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This recipe fetches a user’s name to show a custom greeting, like a chef using fresh ingredients for each order.  
            <span className="font-semibold">For Coders:</span> <code>getServerSideProps</code> uses <code>context</code> to access request details (e.g., query params). App Router server components fetch data directly, using <code>params</code> for dynamic routes and <code>no-store</code> for SSR behavior.
          </p>
        </section>

        {/* SSR vs Static */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. SSR vs Static Generation</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> SSR and Static Generation are like different ways to serve food at a restaurant:  
            <span className="font-semibold">For Coders:</span> SSR and Static Site Generation (SSG) serve different use cases based on data freshness and performance needs.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Static Generation (SSG):</strong>  
              <span className="font-semibold">Beginners:</span> Like baking cookies ahead of time—ready to serve instantly.  
              <span className="font-semibold">Coders:</span> Pre-renders pages at build time (or with ISR), ideal for static content like blogs or documentation, offering faster load times.
            </li>
            <li>
              <strong>Server-Side Rendering (SSR):</strong>  
              <span className="font-semibold">Beginners:</span> Like cooking a meal when ordered—fresh but takes a moment.  
              <span className="font-semibold">Coders:</span> Renders pages per request, suited for dynamic, user-specific data, but slower than SSG due to server processing.
            </li>
          </ul>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Choose SSR for fresh meals, SSG for ready-made snacks.  
            <span className="font-semibold">For Coders:</span> Use SSG with <code>getStaticProps</code> or App Router’s cached fetches for static content; use SSR for dynamic content with <code>getServerSideProps</code> or <code>no-store</code>.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Final Thoughts</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> SSR is like having a chef prepare a fresh webpage for every visitor, perfect for pages that need to stay up-to-date or personal.  
            <span className="font-semibold">For Coders:</span> SSR in Next.js delivers dynamic, SEO-friendly pages with <code>getServerSideProps</code> or App Router server components. Balance SSR with SSG or CSR based on performance and data needs, and explore features like streaming for partial rendering.
          </p>
        </section>

        <p className="italic text-blue-300">
          Keep cooking up amazing webpages with SSR in Next.js—you’re on your way to mastering dynamic content!
        </p>
      </div>
    </div>
  );
};

export default NextServerSideRenderingPage;