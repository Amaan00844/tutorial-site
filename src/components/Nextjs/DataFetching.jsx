"use client";

const NextDataFetchingPage = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Data Fetching in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Beginners:</span> Data fetching is like ordering food from a restaurant. Your app asks for information (like a menu or a dish), and it gets delivered to show on your screen.  
          <span className="font-semibold">For Coders:</span> Data fetching in Next.js retrieves data from APIs, databases, or other sources to build dynamic web pages. Next.js offers multiple methods to fetch data, optimized for performance and flexibility.
        </p>

        {/* Fetching Data Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Fetching Data in Next.js</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Imagine your app as a waiter who can grab food (data) either before guests arrive, when they order, or while they’re eating. Next.js gives you different ways to do this.  
            <span className="font-semibold">For Coders:</span> Next.js supports data fetching at build time (Static Generation), on each request (Server-Side Rendering), or in the browser (Client-Side Rendering). The App Router (Next.js 13+) introduces new patterns like server components and route handlers.
          </p>
        </section>

        {/* Static Generation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Static Generation (SSG)</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Static Generation is like preparing a big batch of food before a party starts. Everything’s ready when guests arrive, so it’s super fast.  
            <span className="font-semibold">For Coders:</span> Static Generation fetches data at build time, generating HTML files that are cached and served instantly. In the Pages Router, use <code>getStaticProps</code>; in the App Router, use server components or <code>generateStaticParams</code> for dynamic routes.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/posts.js (Pages Router)
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: { posts: data },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

// app/posts/page.js (App Router)
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache', // Ensures static fetching
  });
  return response.json();
}

export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code grabs a list of posts (like a menu) before the page is shown, so it loads instantly.  
            <span className="font-semibold">For Coders:</span> In the Pages Router, <code>getStaticProps</code> fetches data at build time and passes it as props. In the App Router, server components fetch data directly in the component with <code>fetch</code> and <code>cache: 'force-cache'</code> for static behavior. Use <code>revalidate</code> for Incremental Static Regeneration (ISR).
          </p>
        </section>

        {/* Server-Side Rendering */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Server-Side Rendering (SSR)</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Server-Side Rendering is like cooking a fresh meal for each guest when they arrive. It takes a moment, but you get the latest ingredients.  
            <span className="font-semibold">For Coders:</span> SSR fetches data on each request, ensuring up-to-date content. In the Pages Router, use <code>getServerSideProps</code>; in the App Router, server components fetch data with <code>no-store</code> cache or dynamic route handlers.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// pages/users.js (Pages Router)
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: { users: data },
  };
}

export default function Users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// app/users/page.js (App Router)
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // Ensures SSR
  });
  return response.json();
}

export default async function Users() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code fetches a list of users (like a guest list) every time someone visits the page, so it’s always fresh.  
            <span className="font-semibold">For Coders:</span> <code>getServerSideProps</code> runs on each request in the Pages Router. In the App Router, server components with <code>cache: 'no-store'</code> achieve SSR. This is ideal for frequently changing data but slower than SSG.
          </p>
        </section>

        {/* Client-Side Data Fetching */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Client-Side Data Fetching (CSR)</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Client-Side Fetching is like asking the waiter to get dessert after you’re already eating. The page loads first, then grabs the extra info.  
            <span className="font-semibold">For Coders:</span> CSR fetches data in the browser after the page renders, using React hooks like <code>useEffect</code> or libraries like SWR. It’s suitable for dynamic, non-SEO-critical content.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`// app/client-posts/page.js
'use client';
import { useEffect, useState } from 'react';

export default function ClientSidePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`}</code>
          </pre>

          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> This code waits for the page to appear, then fetches posts to show them. You might see “Loading...” while it works.  
            <span className="font-semibold">For Coders:</span> The <code>useEffect</code> hook triggers data fetching on mount. The <code>'use client'</code> directive ensures client-side rendering in the App Router. Adding a loading state improves UX. Use SWR or TanStack Query for caching and refetching.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Choosing the Right Method</h2>
          <p className="mb-4">
            <span className="font-semibold">For Beginners:</span> Pick how to fetch data based on what your app needs:
            - <strong>Static:</strong> Fast, prepared ahead (like a buffet).
            - <strong>Server-Side:</strong> Fresh, made on order (like a chef’s special).
            - <strong>Client-Side:</strong> Flexible, fetched later (like a quick snack).  
            <span className="font-semibold">For Coders:</span> Choose based on performance, SEO, and data freshness:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>SSG:</strong> Best for static content (e.g., blogs). Use ISR for periodic updates.</li>
            <li><strong>SSR:</strong> Ideal for dynamic, user-specific data (e.g., dashboards).</li>
            <li><strong>CSR:</strong> Great for interactive, non-critical data (e.g., user preferences).</li>
            <li><strong>App Router:</strong> Leverage server components for simpler fetching and better performance.</li>
          </ul>
        </section>

        <p className="italic text-blue-300">
          Next.js makes data fetching easy for everyone, from beginners to pros, with flexible options for any project!
        </p>
      </div>
    </div>
  );
};

export default NextDataFetchingPage;