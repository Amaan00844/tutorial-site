"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Reactdynamicroutes() {
  useReadingTracker("reactdynamicroutes"); // Custom hook to track user's reading progress (specific to your app setup)

  return (
    <div className="p-6 max-w-4xl ml-80">
      

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        {/* Setting up Dynamic Routes */}
        <h1 className="text-3xl text-gray-800 font-bold mb-4">
        React Dynamic Routing
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Dynamic Routing allows us to create routes that are flexible and can
        change based on the URL parameters. In React, this is typically handled
        using <span className="text-pink-700 font-semibold">React Router</span>.
        It helps in building applications where content varies based on the URL
        — like user profiles, blog posts, or product details.
      </p>
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          1. Setting Up Dynamic Routes
        </h2>
        <p className="text-gray-800 mb-4">
          In React Router, you define a dynamic route by adding a colon (
          <code>:</code>) before a parameter name in the path. This acts as a
          placeholder for actual values, like user IDs or product slugs.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          In this example, the path <code>/user/:id</code> means any URL like{" "}
          <code>/user/101</code> or <code>/user/jane</code> will render the{" "}
          <code>UserProfile</code> component, and the <code>id</code> part will
          be accessible as a route parameter.
        </p>

        {/* Accessing Route Parameters */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          2. Accessing Route Parameters
        </h2>
        <p className="text-gray-800 mb-4">
          Inside the component rendered by a dynamic route, you can access the
          URL parameter using the <code>useParams</code> hook from{" "}
          <code>react-router-dom</code>.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // 'id' will match whatever value is passed in the URL

  return <h2>User ID: {id}</h2>;
}

export default UserProfile;`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          This is how we extract dynamic parts of the URL and use them in our
          component logic — for example, fetching user details based on ID.
        </p>

        {/* Nested Dynamic Routes */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          3. Nested Dynamic Routes
        </h2>
        <p className="text-gray-800 mb-4">
          Nested routes are useful when one page has its own sub-pages. For
          example, a user profile might have sub-sections like settings or
          activity logs.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`<Route path="/user/:id" element={<UserProfile />}>
  <Route path="settings" element={<UserSettings />} />
</Route>`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          Now visiting <code>/user/123/settings</code> will render both{" "}
          <code>UserProfile</code> and its nested <code>UserSettings</code>{" "}
          component. This structure helps in organizing complex UIs.
        </p>

        {/* Dynamic Route Navigation */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          4. Dynamic Navigation using Link
        </h2>
        <p className="text-gray-800 mb-4">
          The <code>Link</code> component allows client-side navigation without
          reloading the page. You can pass dynamic paths using template literals
          or props.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { Link } from 'react-router-dom';

<Link to="/user/42">View User 42</Link>`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          Clicking the link above takes you to <code>/user/42</code> and renders
          the corresponding profile dynamically. It's efficient and enhances
          user experience.
        </p>

        {/* Query Parameters */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          5. Handling Query Parameters
        </h2>
        <p className="text-gray-800 mb-4">
          Query parameters come after a <code>?</code> in the URL (e.g.{" "}
          <code>/search?sort=asc</code>). They are not part of the route path
          but are still useful for filtering, sorting, etc.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { useLocation } from 'react-router-dom';

function SearchPage() {
  const { search } = useLocation(); // Returns '?sort=asc'
  const queryParams = new URLSearchParams(search);
  const sort = queryParams.get('sort'); // Returns 'asc'

  return <div>Sorting by: {sort}</div>;
}`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          This approach is handy when implementing search pages, filters, and
          user preferences.
        </p>

        {/* Real-World Example */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          6. Real-World Example: Blog Posts
        </h2>
        <p className="text-gray-800 mb-4">
          Blog apps use dynamic routes to render individual posts. Each post has
          a unique URL (often based on its slug or ID).
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <code>/blog/post-1</code>
          </li>
          <li>
            <code>/blog/post-2</code>
          </li>
          <li>
            <code>/blog/post-3</code>
          </li>
        </ul>
        <p className="text-gray-800 mb-6">
          A single route like <code>/blog/:slug</code> can handle all of them
          and render the corresponding content based on the slug.
        </p>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Summary of Dynamic Routes
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Use <span className="text-pink-700 font-semibold">params</span> in
            routes to capture dynamic values like IDs or slugs.
          </li>
          <li>
            <span className="text-pink-500 font-semibold">useParams</span> gives
            access to those values in the component.
          </li>
          <li>
            <span className="text-pink-700 font-semibold">Link</span> and{" "}
            <span className="text-pink-700 font-semibold">navigate</span> allow
            you to programmatically navigate with dynamic URLs.
          </li>
          <li>
            Use <span className="text-pink-700 font-semibold">useLocation</span>{" "}
            and{" "}
            <span className="text-pink-700 font-semibold">URLSearchParams</span>{" "}
            to extract and use query parameters from the URL.
          </li>
        </ul>

     
      </div>
    </div>
  );
}

export default Reactdynamicroutes;
