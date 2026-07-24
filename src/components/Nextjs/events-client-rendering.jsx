
import React from 'react';

const NextClientRenderingGuide = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Understanding Client-Side Rendering in Next.js</h1>
        <p className="mb-4">
          <span className="font-semibold">For Non-Coders:</span> Imagine a toy store where the toys aren’t ready when visitors arrive. Instead, a robot (JavaScript) quickly builds the toys right in front of them, making the store fun and interactive! This is called client-side rendering, where your computer adds the fun parts to a website after it loads.  
          <span className="font-semibold">For Coders:</span> Client-side rendering (CSR) in Next.js involves rendering React components in the browser using JavaScript after the initial HTML is delivered. It’s ideal for dynamic, interactive UI but requires the `"use client"` directive in the App Router for components using client-side features like `useState` or `useEffect`. CSR trades off SEO for interactivity compared to server-side rendering (SSR) or static site generation (SSG).
        </p>

        {/* What is Client-Side Rendering */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What is Client-Side Rendering?</h2>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> When you visit a website, it’s like walking into a toy store. With client-side rendering, the store starts as a plain room, and your computer’s robot (JavaScript) quickly adds toys, like a list of events, so you can play with them. It might take a second, but it makes the store lively!  
            <span className="font-semibold">For Coders:</span> CSR means the browser downloads a minimal HTML skeleton and JavaScript bundle, then React renders the UI client-side. Next.js uses hydration to initialize React components, attaching event listeners and state. Use CSR for highly interactive features, like real-time event lists or forms, but note it can delay initial rendering and impact SEO.
          </p>
        </section>

        {/* Setting Up a Client-Rendered Component */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Setting Up a Client-Rendered Component</h2>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> To make a toy store interactive, you give the robot (JavaScript) special instructions to build toys only when visitors arrive. In Next.js, this means adding a note to your code that says, “Hey, this part needs the visitor’s computer!”  
            <span className="font-semibold">For Coders:</span> In Next.js’s App Router, client-rendered components require the `"use client"` directive at the top of the file. This tells Next.js to render the component in the browser, enabling hooks like `useState` or `useEffect` for dynamic behavior.
          </p>
          <h3 className="text-xl font-semibold mb-4">Basic Example</h3>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> Here’s how to make a simple toy store sign that changes when you click it, built by the robot.  
            <span className="font-semibold">For Coders:</span> Below is a client-rendered component using `"use client"` and `useState` to toggle a message.
          </p>
          <pre aria-label="Client-side rendering example" className="bg-gray-100 p-4 rounded text-sm max-w-full overflow-x-auto mb-4">
            <code>{`"use client";

import React, { useState } from 'react';

function NextEventsClientRendering() {
  const [message, setMessage] = useState('Welcome to the Event Store!');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{message}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setMessage('Check Out Our Events!')}
      >
        Change Message
      </button>
    </div>
  );
}

export default NextEventsClientRendering;`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> This code makes a sign that says “Welcome” but changes to “Check Out Our Events!” when you click a button. The robot builds it right in your browser!  
            <span className="font-semibold">For Coders:</span> The `"use client"` directive enables client-side rendering. The `useState` hook manages the message state, and the button’s `onClick` updates it. Save this as `app/events/page.js` to create a route at `/events`.
          </p>
        </section>

        {/* Dynamic Event List Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Building a Dynamic Event List</h2>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> Imagine your toy store showing a list of upcoming events, like toy sales, that appears after you enter. The robot fetches the event list and builds it for you to see.  
            <span className="font-semibold">For Coders:</span> Below is an enhanced version of the provided component, fetching a list of events client-side using `useEffect` and `useState`. This demonstrates real-world CSR for dynamic data.
          </p>
          <h3 className="text-xl font-semibold mb-4">Event List Component</h3>
          <pre aria-label="Dynamic event list example" className="bg-gray-100 p-4 rounded text-sm max-w-full overflow-x-auto mb-4">
            <code>{`"use client";

import React, { useState, useEffect } from 'react';

function NextEventsClientRendering() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching events from an API
    setTimeout(() => {
      setEvents([
        { id: 1, name: 'Toy Sale Extravaganza', date: 'June 1, 2025' },
        { id: 2, name: 'Robot Building Workshop', date: 'June 15, 2025' },
        { id: 3, name: 'Puzzle Day', date: 'June 30, 2025' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <ul className="list-disc ml-6">
          {events.map((event) => (
            <li key={event.id} className="mb-2">
              <span className="font-semibold">{event.name}</span> - {event.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NextEventsClientRendering;`}</code>
          </pre>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> This code makes a list of events appear after a short wait, like the robot setting up a display board in the store. You’ll see “Loading” first, then the events!  
            <span className="font-semibold">For Coders:</span> This component uses `useEffect` to simulate an API call (replace with `fetch` for real data). The `useState` hook manages the event list and loading state. The `"use client"` directive is required because `useEffect` and `useState` are client-side features. Save as `app/events/page.js` for the `/events` route.
          </p>
        </section>

        {/* Pros and Cons of CSR */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Pros and Cons of Client-Side Rendering</h2>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> Client-side rendering is like having a robot build toys while you’re in the store—it’s fun but might take a moment to set up, and search engines (like Google) might not see all the toys right away.  
            <span className="font-semibold">For Coders:</span> CSR offers interactivity but has trade-offs. Here’s a breakdown:
          </p>
          <h3 className="text-xl font-semibold mb-4">Pros</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Non-Coders:</span> The store feels alive with moving parts, like buttons or live updates.  
              <span className="font-semibold">Coders:</span> Enables rich interactivity with hooks like `useState` and `useEffect`.
            </li>
            <li>
              <span className="font-semibold">Non-Coders:</span> The store owner (server) does less work, so it’s faster to open the store.  
              <span className="font-semibold">Coders:</span> Reduces server load, as rendering happens in the browser.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-4">Cons</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Non-Coders:</span> Visitors might wait a second for the robot to build the toys, especially on slow phones.  
              <span className="font-semibold">Coders:</span> Slower initial render, especially on low-end devices or slow networks.
            </li>
            <li>
              <span className="font-semibold">Non-Coders:</span> Search engines might miss some toys because they’re built after the store opens.  
              <span className="font-semibold">Coders:</span> Poor SEO, as search engines may not index dynamic content without pre-rendering.
            </li>
          </ul>
        </section>

        {/* Optimizing CSR */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Optimizing Client-Side Rendering</h2>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> To make your toy store faster and friendlier, you can give the robot better tools or pre-build some toys. Keep the store simple so it loads quickly!  
            <span className="font-semibold">For Coders:</span> Optimize CSR in Next.js with these techniques:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <span className="font-semibold">Non-Coders:</span> Use a trick to show some toys before the robot finishes.  
              <span className="font-semibold">Coders:</span> Use Next.js’s `getStaticProps` or `getServerSideProps` for initial data, then hydrate with CSR for interactivity.
            </li>
            <li>
              <span className="font-semibold">Non-Coders:</span> Make the robot carry fewer toys at once.  
              <span className="font-semibold">Coders:</span> Code-split with `dynamic` imports or Next.js’s lazy loading to reduce JavaScript bundle size.
            </li>
            <li>
              <span className="font-semibold">Non-Coders:</span> Add a “Loading” sign so visitors know the robot is working.  
              <span className="font-semibold">Coders:</span> Implement loading states (as shown in the event list example) to improve UX during data fetching.
            </li>
          </ul>
          <p className="mb-4">
            <span className="font-semibold">For Non-Coders:</span> Your store is now interactive and fun! Keep adding toys and making it faster.  
            <span className="font-semibold">For Coders:</span> Combine CSR with SSG or SSR for hybrid rendering. Explore Next.js’s `Suspense` for streaming and React 18’s concurrent rendering for smoother UX.
          </p>
        </section>

        <p className="italic text-blue-300">
          Client-side rendering in Next.js makes your website interactive and exciting, whether you’re new to websites or a coding expert!
        </p>
      </div>
    </div>
  );
};

export default NextClientRenderingGuide;
