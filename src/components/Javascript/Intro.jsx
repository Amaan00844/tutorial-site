"use client";

const Intro = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        {" "}
        {/* Updated to shadow-xl for a more pronounced shadow */}
        <h1 className="text-4xl font-bold">Javascript Introduction</h1>
        <p className="text-lg">What is Javascript?</p>
        <p>
          <strong>JavaScript</strong> is a <strong>programming language</strong>{" "}
          used to make web pages <strong>interactive and dynamic</strong>. It
          runs in the browser and allows developers to create features like
          image sliders, form validations, popups, and real-time updates.
          JavaScript can also be used on the <strong>server-side</strong> with
          tools like <strong>Node.js</strong>, making it a powerful language for
          both frontend and backend development.
        </p>
        <h2 className="text-2xl font-semibold">Why Use Javascript?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Interactivity:</strong> Makes websites interactive with
            clicks, animations, and dynamic content.
          </li>
          <li>
            <strong>Client-Side Execution:</strong> Runs directly in the
            browser, reducing server load and improving speed.
          </li>
          <li>
            <strong>Wide Compatibility:</strong> Works on all modern web
            browsers without additional setup.
          </li>
          <li>
            <strong>Full-Stack Development:</strong> Can be used on both
            frontend (browser) and backend (Node.js).
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Large number of libraries and
            frameworks like React, Angular, and Vue.
          </li>
          <li>
            <strong>Community Support:</strong> Vast community, tutorials, and
            tools available for developers.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">Features of Javascript</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dynamic Typing:</strong> Variables can hold any data type
            and change types at runtime.
          </li>
          <li>
            <strong>Event-Driven:</strong> Responds to user actions like clicks,
            scrolls, and inputs.
          </li>
          <li>
            <strong>Asynchronous:</strong> Supports non-blocking operations
            using callbacks, promises, and async/await.
          </li>
          <li>
            <strong>Object-Oriented:</strong> Supports objects, classes, and
            inheritance for structured code.
          </li>
          <li>
            <strong>Functional Programming:</strong> Functions are first-class
            citizens and can be passed around.
          </li>
          <li>
            <strong>Prototypal Inheritance:</strong> Objects can inherit
            properties directly from other objects.
          </li>
          <li>
            <strong>DOM Manipulation:</strong> Can dynamically update HTML and
            CSS on a webpage.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Runs on all major browsers and
            server environments like Node.js.
          </li>
          <li>
            <strong>ECMAScript Standards:</strong> Continuously evolving
            language with regular updates and new features.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Includes many libraries and
            frameworks for faster development.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">Where is Javascript Used?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Web Development:</strong> Creates interactive websites and
            web applications.
          </li>
          <li>
            <strong>Mobile App Development:</strong> Builds cross-platform apps
            using frameworks like React Native.
          </li>
          <li>
            <strong>Server-Side Development:</strong> Powers backend services
            using Node.js.
          </li>
          <li>
            <strong>Game Development:</strong> Develops browser-based games
            using HTML5 and libraries like Phaser.js.
          </li>
          <li>
            <strong>Desktop Applications:</strong> Builds desktop apps with
            tools like Electron.js.
          </li>
          <li>
            <strong>Browser Extensions:</strong> Creates custom browser
            functionalities and tools.
          </li>
          <li>
            <strong>Automation and Scripting:</strong> Automates tasks and
            builds bots or scrapers.
          </li>
          <li>
            <strong>Data Visualization:</strong> Displays interactive charts and
            graphs using D3.js or Chart.js.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">Example: Hello World Log</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    console.log( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>');`}
          </code>
        </pre>
        <p className="italic text-blue-300">
          Save the file in <code>index.html</code> and open it with browser.
        </p>
      </div>
    </div>
  );
};

export default Intro;
