import React from 'react';

function Nextdocs() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Understanding Data Fetching in Next.js</h1>
        <p className="mb-6 text-lg text-gray-600">
          <span className="font-semibold">For Non-Coders:</span> Imagine your favorite website as a chef preparing a meal. Sometimes, the chef prepares the food in advance, sometimes they cook it fresh when you order, or they might grab extra ingredients while you’re already eating. Next.js helps websites get information (like recipes) in these different ways to show you what you want!  
          <span className="font-semibold">For Coders:</span> Next.js provides powerful data fetching methods—Static Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR)—optimized for performance, SEO, and dynamic content. The App Router (Next.js 13+) introduces server components and streamlined fetching patterns.
        </p>

        {/* Overview of Data Fetching */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. What is Data Fetching?</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Data fetching is like asking a librarian to find a book for you. The website asks for information (like a story or a picture) and shows it to you when it arrives.  
            <span className="font-semibold">For Coders:</span> Data fetching retrieves content from APIs, databases, or files to display on a webpage. Next.js supports fetching at build time (SSG), on each request (SSR), or in the browser (CSR), with the App Router simplifying server-side logic.
          </p>
        </section>

        {/* Static Generation (SSG) */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Pre-Made Pages (Static Generation)</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Think of a bakery that bakes cakes before the shop opens. When you visit, the cake is ready to grab, so you get it super fast! Static Generation prepares website pages ahead of time.  
            <span className="font-semibold ">For Coders:</span> Static Generation (SSG) fetches data at build time, creating pre-rendered HTML for fast delivery and SEO benefits. Use <code>getStaticProps</code> in the Pages Router or server components with <code>cache: 'force-cache'</code> in the App Router. Incremental Static Regeneration (ISR) allows periodic updates.
          </p>

          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`// pages/todos.js (Pages Router)
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.slice(0, 5).map((todo) => (
        <div key={todo.id} className="border-b py-2">
          <h2 className="font-medium">{todo.title}</h2>
          <p>{todo.completed ? 'Done!' : 'Not done yet'}</p>
        </div>
      ))}
    </div>
  );
}

// app/todos/page.js (App Router)
async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'force-cache',
  });
  return response.json();
}

export default async function Todos() {
  const todos = await getTodos();
  return (
    <div>
      <h1>Todo List</h1>
      {todos.slice(0, 5).map((todo) => (
        <div key={todo.id} className="border-b py-2">
          <h2 className="font-medium">{todo.title}</h2>
          <p>{todo.completed ? 'Done!' : 'Not done yet'}</p>
        </div>
      ))}
    </div>
  );
}`}
          </pre>

          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> This code is like a bakery preparing a list of todos (tasks) before you visit the website, so the page loads instantly with the tasks ready to see.  
            <span className="font-semibold">For Coders:</span> In the Pages Router, <code>getStaticProps</code> fetches data at build time and passes it as props. In the App Router, server components handle fetching directly with <code>fetch</code> and <code>cache: 'force-cache'</code>. Add <code>revalidate: 3600</code> for ISR to refresh data hourly.
          </p>
        </section>

        {/* Server-Side Rendering (SSR) */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Freshly Made Pages (Server-Side Rendering)</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Imagine a pizza shop making a fresh pizza when you order it. It takes a little time, but you get the newest ingredients! Server-Side Rendering makes pages fresh each time you visit.  
            <span className="font-semibold">For Coders:</span> SSR fetches data on each request, ensuring the latest content. Use <code>getServerSideProps</code> in the Pages Router or server components with <code>cache: 'no-store'</code> in the App Router for dynamic, user-specific data.
          </p>

          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`// pages/comments.js (Pages Router)
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  return {
    props: { comments },
  };
}

export default function Comments({ comments }) {
  return (
    <div>
      <h1>Latest Comments</h1>
      {comments.slice(0, 5).map((comment) => (
        <div key={comment.id} className="border-b py-2">
          <h2 className="font-medium">{comment.name}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

// app/comments/page.js (App Router)
async function getComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    cache: 'no-store',
  });
  return response.json();
}

export default async function Comments() {
  const comments = await getComments();
  return (
    <div>
      <h1>Latest Comments</h1>
      {comments.slice(0, 5).map((comment) => (
        <div key={comment.id} className="border-b py-2">
          <h2 className="font-medium">{comment.name}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}`}
          </pre>

          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> This code grabs a fresh list of comments (like new messages) every time you visit the page, so you always see the latest ones.  
            <span className="font-semibold">For Coders:</span> <code>getServerSideProps</code> fetches data per request in the Pages Router. In the App Router, server components use <code>cache: 'no-store'</code> for SSR. This method is slower than SSG but ideal for real-time data like user comments.
          </p>
        </section>

        {/* Client-Side Rendering (CSR) */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Fetching After Loading (Client-Side Rendering)</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Picture eating your meal at a restaurant, then asking for dessert afterward. The page shows up first, then grabs extra info (like dessert) to add to it.  
            <span className="font-semibold">For Coders:</span> CSR fetches data in the browser after the page loads, using React hooks like <code>useEffect</code>. It’s perfect for interactive features or non-SEO-critical content. Use libraries like SWR for better caching.
          </p>

          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`'use client';
import { useEffect, useState } from 'react';

export default function ClientSidePhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setPhotos(data.slice(0, 5));
      setLoading(false);
    }
    fetchPhotos();
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading photos...</div>;

  return (
    <div>
      <h1>Photo Gallery</h1>
      {photos.map((photo) => (
        <div key={photo.id} className="border-b py-2">
          <h2 className="font-medium">{photo.title}</h2>
          <img src={photo.thumbnailUrl} alt={photo.title} className="w-32 h-32 object-cover mt-2" />
        </div>
      ))}
    </div>
  );
}`}
          </pre>

          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> This code shows the page first, then grabs photos to display, like waiting for dessert after your meal. You might see “Loading...” while it fetches the photos.  
            <span className="font-semibold">For Coders:</span> The <code>useEffect</code> hook fetches data after the component mounts, and <code>'use client'</code> ensures client-side execution in the App Router. A loading state improves UX. Libraries like SWR or TanStack Query can optimize fetching with caching and refetching.
          </p>
        </section>

        {/* Choosing the Right Method */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Which Method Should You Use?</h2>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">For Non-Coders:</span> Choosing how to get data is like picking how to get food:
            - <strong>Pre-Made (Static):</strong> Fast and ready, like grabbing a pre-made sandwich.
            - <strong>Freshly Made (Server-Side):</strong> Fresh but slower, like ordering a custom burger.
            - <strong>After Loading (Client-Side):</strong> Flexible, like adding fries after you start eating.  
            <span className="font-semibold">For Coders:</span> Select the method based on your app’s needs:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-600">
            <li><strong>SSG:</strong> Use for static content like blogs or product pages. Add ISR for occasional updates.</li>
            <li><strong>SSR:</strong> Use for dynamic, user-specific data like dashboards or live feeds.</li>
            <li><strong>CSR:</strong> Use for interactive features like search filters or user settings.</li>
            <li><strong>App Router:</strong> Use server components for simpler, faster fetching with better defaults.</li>
          </ul>
        </section>

        {/* Final Note */}
        <p className="text-lg italic text-blue-600">
          Whether you’re new to websites or a coding expert, Next.js makes it easy to fetch data in the way that works best for your project!
        </p>
      </div>
    </div>
  );
}

export default Nextdocs;