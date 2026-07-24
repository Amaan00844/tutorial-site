"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React, { createContext, useState, useContext } from "react";

function Reactcontextapi() {
  useReadingTracker("reactcontext");

  // Step 1: Create the context
  const MyContext = createContext();

  // Step 2: Set up the provider component
  function MyContextProvider({ children }) {
    const [user, setUser] = useState({ name: "John Doe", loggedIn: false });

    const login = (userData) => {
      setUser({ ...user, ...userData, loggedIn: true });
    };

    const logout = () => {
      setUser({ ...user, loggedIn: false });
    };

    return (
      <MyContext.Provider value={{ user, login, logout }}>
        {children}
      </MyContext.Provider>
    );
  }

  // Step 3: Consuming Context with useContext Hook
  function UserProfile() {
    const { user, login, logout } = useContext(MyContext);

    return (
      <div>
        <h2>User Profile</h2>
        {user.loggedIn ? (
          <div>
            <h3>Welcome, {user.name}!</h3>
            <button
              onClick={logout}
              className="mt-4 bg-pink-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h3>Please log in.</h3>
            <button
              onClick={() => login({ name: "Jane Doe" })}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Login as Jane
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6">
   

      <div className="bg-white p-6  max-w-4xl ml-80 rounded-xl shadow-lg  mx-auto">
        {/* Introduction */}
           <h1 className="text-3xl text-gray-800 font-bold mb-6">
        React Context API
      </h1>
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Introduction to Context API
        </h2>
        <p className="text-gray-800 mb-6">
          The Context API is a built-in feature in React that allows you to
          share data across multiple components, without having to pass props
          manually at every level (known as "prop drilling"). It makes state
          management simpler for medium-sized applications.
        </p>

        {/* Why Use Context API */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Why Use Context API?
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Eliminates prop drilling.</li>
          <li>Makes code cleaner and easier to maintain.</li>
          <li>
            Great for sharing global data like user authentication, theme,
            language preferences, etc.
          </li>
        </ul>

        {/* Basic Flow */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          How It Works
        </h2>
        <ol className="list-decimal list-inside text-gray-800 space-y-2 mb-6">
          <li>Create a Context.</li>
          <li>Provide the Context to components using a Provider.</li>
          <li>
            Consume the Context in any component using <code>useContext</code>{" "}
            hook or <code>Context.Consumer</code>.
          </li>
        </ol>

        {/* Creating Context */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Creating a Context
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { createContext } from 'react';

const MyContext = createContext();
export default MyContext;`}
          </code>
        </pre>

        {/* Providing Context */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Providing Context
        </h2>
        <p className="text-gray-800 mb-4">
          Wrap your component tree with the <code>Provider</code> and pass the
          value you want to share.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import MyContext from './MyContext';

function App() {
  const user = { name: 'John Doe' };

  return (
    <MyContext.Provider value={user}>
      <MyComponent />
    </MyContext.Provider>
  );
}`}
          </code>
        </pre>

        {/* Consuming Context */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Consuming Context with useContext Hook
        </h2>
        <p className="text-gray-800 mb-4">
          Inside any component, you can use the <code>useContext</code> hook to
          access the context value:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const user = useContext(MyContext);

  return <h1>Hello, {user.name}!</h1>;
}`}
          </code>
        </pre>

        {/* Context vs Redux */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Context API vs Redux
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            <span className="font-semibold text-pink-700">Context API</span> is
            best for simpler or medium-level apps needing light global state.
          </li>
          <li>
            <span className="font-semibold text-pink-700">Redux</span> is better
            for large applications with complex state management needs (like
            async operations, multiple data layers).
          </li>
        </ul>

        {/* Best Practices */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Split Contexts if data is unrelated (ex: AuthContext, ThemeContext).
          </li>
          <li>
            Don't overuse Context for every piece of state; use local state
            where appropriate.
          </li>
          <li>
            Memoize context values if necessary to avoid unnecessary re-renders.
          </li>
        </ul>

        {/* Example: Authentication Context */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Example: Authentication Context
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}`}
          </code>
        </pre>
        <p className="text-gray-800 mb-6">
          Now you can call <code>useAuth()</code> in any component to get access
          to <code>user</code>, <code>login()</code>, and <code>logout()</code>{" "}
          functions.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-800 mb-6">
          The React Context API is an extremely powerful and easy-to-use feature
          for managing global state. Use it wisely to make your React
          applications cleaner and more maintainable!
        </p>

      </div>

   
    </div>
  );
}

export default Reactcontextapi;
