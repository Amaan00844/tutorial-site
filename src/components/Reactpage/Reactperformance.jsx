"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Reactperformance() {
  useReadingTracker("reactperformance");
  return (
    <div className="p-6 ml-80">
      

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        {/* Memoization */}
        <h1 className="text-3xl text-gray-800 font-bold mb-4">
        React Performance Optimization
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Performance is crucial for providing a smooth user experience in React
        applications. This page covers best practices and tools to improve the
        speed and responsiveness of your React apps.
      </p>
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          1. Memoization with React.memo
        </h2>
        <p className="text-gray-800 mb-4">
          Use <code>React.memo</code> to prevent unnecessary re-renders of
          functional components:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-700">
            {`const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});`}
          </code>
        </pre>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            Why use React.memo?
          </summary>
          <p className="mt-2">
            <code>React.memo</code> helps avoid re-rendering components when
            their props haven’t changed. This is especially useful when the
            component is complex or renders large datasets.
          </p>
        </details>

        {/* useCallback */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          2. useCallback Hook
        </h2>
        <p className="text-gray-800 mb-4">
          <code>useCallback</code> memoizes functions to avoid re-creating them
          on every render:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-700">
            {`const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`}
          </code>
        </pre>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            When should you use useCallback?
          </summary>
          <p className="mt-2">
            Use <code>useCallback</code> when passing functions to child
            components to prevent unnecessary re-renders due to new function
            references.
          </p>
        </details>

        {/* useMemo */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          3. useMemo Hook
        </h2>
        <p className="text-gray-800 mb-4">
          <code>useMemo</code> caches the result of a computation to avoid
          expensive recalculations:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-700">
            {`const expensiveValue = useMemo(() => {
  return computeExpensiveValue(input);
}, [input]);`}
          </code>
        </pre>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            Why use useMemo?
          </summary>
          <p className="mt-2">
            It optimizes performance by caching heavy computations and reusing
            them unless dependencies change.
          </p>
        </details>

        {/* Lazy Loading */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          4. Code Splitting & Lazy Loading
        </h2>
        <p className="text-gray-800 mb-4">
          Split your code using <code>React.lazy</code> and{" "}
          <code>Suspense</code> to improve load time:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-700">
            {`const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
          </code>
        </pre>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            How does lazy loading help?
          </summary>
          <p className="mt-2">
            It reduces the initial bundle size by loading components only when
            they’re needed, which makes your app load faster.
          </p>
        </details>

        {/* Windowing */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          5. Windowing/Lazy List Rendering
        </h2>
        <p className="text-gray-800 mb-4">
          Use libraries like <code>react-window</code> or{" "}
          <code>react-virtualized</code> to render only visible list items:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-700">
            {`import { FixedSizeList as List } from 'react-window';

<List
  height={300}
  itemCount={1000}
  itemSize={35}
  width={300}
>
  {({ index, style }) => <div style={style}>Item {index}</div>}
</List>`}
          </code>
        </pre>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            Why use windowing?
          </summary>
          <p className="mt-2">
            Rendering only visible items improves performance and memory usage
            for long lists or tables.
          </p>
        </details>

        {/* Avoid Creating Functions Inside JSX */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          6. Avoid Creating Functions Inside JSX
        </h2>
        <p className="text-gray-800 mb-4">
          Declare functions outside of the render method to avoid re-creation on
          every render.
        </p>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            Why avoid inline functions?
          </summary>
          <p className="mt-2">
            Inline functions in JSX create new function instances on every
            render, which can trigger unnecessary re-renders in child
            components.
          </p>
        </details>

        {/* Avoid Prop Drilling */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          7. Avoid Prop Drilling
        </h2>
        <p className="text-gray-800 mb-4">
          Use Context API or state management libraries (like Redux or Zustand)
          to avoid passing props deeply.
        </p>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            Why is prop drilling bad for performance?
          </summary>
          <p className="mt-2">
            It leads to complex component hierarchies and causes re-renders even
            if the intermediate components don’t use the data.
          </p>
        </details>

        {/* Performance Monitoring */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          8. Monitoring Performance
        </h2>
        <p className="text-gray-800 mb-4">
          Use tools like React DevTools and Chrome Performance tab to analyze
          and debug performance bottlenecks.
        </p>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            How do these tools help?
          </summary>
          <p className="mt-2">
            They help you inspect component re-renders, analyze timing, and
            identify memory leaks or slow operations.
          </p>
        </details>

        {/* Production Builds */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          9. Use Production Build
        </h2>
        <p className="text-gray-800 mb-4">
          Always build your app for production using:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code className="text-pink-700">npm run build</code>
        </pre>
        <details className="mb-6 text-gray-700">
          <summary className="cursor-pointer font-medium">
            Why production builds matter?
          </summary>
          <p className="mt-2">
            Production builds are optimized, minified, and strip out helpful but
            heavy development checks to improve performance.
          </p>
        </details>

        {/* Summary */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Summary</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Use <code>React.memo</code>, <code>useCallback</code>, and{" "}
            <code>useMemo</code> wisely
          </li>
          <li>
            Implement code splitting with <code>React.lazy</code> and{" "}
            <code>Suspense</code>
          </li>
          <li>Use virtualized lists for large datasets</li>
          <li>Monitor performance with React DevTools</li>
          <li>Avoid unnecessary re-renders and prop drilling</li>
        </ul>

       
      </div>
    </div>
  );
}

export default Reactperformance;
