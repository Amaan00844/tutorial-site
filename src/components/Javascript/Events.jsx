"use client";

const EventsPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">🎉 JavaScript Events</h1>
        <p className="mb-4">
          In JavaScript, events are actions that occur in the system that you can respond to. Examples of events include a user clicking a button, hovering over an element, or pressing a key on the keyboard. Handling events allows your web pages to interact dynamically with the user.
        </p>

        {/* Event Handling */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Event Handling</h2>
          <p className="mb-4">
            Events can be handled in JavaScript by associating an event handler function with an event, such as a <code>click</code>, <code>mouseover</code>, or <code>keydown</code> event. This can be done using HTML attributes or JavaScript methods.
          </p>

          {/* Inline Event Handler */}
          <h3 className="text-xl font-semibold mb-4">Inline Event Handler</h3>
          <p className="mb-4">
            You can directly add an event handler inside the HTML element using an attribute like <code>onclick</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`<button onclick="alert('Button clicked!')">Click Me</button>`}</code>
          </pre>

          {/* Adding Event Listeners */}
          <h3 className="text-xl font-semibold mb-4">Adding Event Listeners</h3>
          <p className="mb-4">
            A more flexible way to handle events is to use <code>addEventListener()</code> in JavaScript. This allows multiple event listeners to be attached to the same element and makes it easier to manage events dynamically.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button clicked!');
});`}</code>
          </pre>
        </section>

        {/* Common Event Types */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Common Event Types</h2>
          <p className="mb-4">
            There are many event types in JavaScript that correspond to different user interactions. Here are some of the most commonly used ones:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>click</strong>: Triggered when an element is clicked.
            </li>
            <li>
              <strong>mouseover</strong>: Triggered when the mouse pointer moves over an element.
            </li>
            <li>
              <strong>keydown</strong>: Triggered when a key is pressed down.
            </li>
            <li>
              <strong>submit</strong>: Triggered when a form is submitted.
            </li>
            <li>
              <strong>focus</strong>: Triggered when an element receives focus (e.g., an input field).
            </li>
            <li>
              <strong>resize</strong>: Triggered when the window is resized.
            </li>
          </ul>
        </section>

        {/* Event Object */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Event Object</h2>
          <p className="mb-4">
            When an event is triggered, an event object is passed to the event handler. This object contains useful information about the event, such as which element triggered the event, the type of event, and other details.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let button = document.querySelector('button');
button.addEventListener('click', function(event) {
  console.log('Event Type:', event.type);
  console.log('Clicked Element:', event.target);
});`}</code>
          </pre>
        </section>

        {/* Event Propagation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Event Propagation</h2>
          <p className="mb-4">
            Events in JavaScript can propagate in two directions: <strong>capturing</strong> and <strong>bubbling</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Bubbling</strong>: Events propagate from the target element up to the root element (e.g., <code>document</code>).
            </li>
            <li>
              <strong>Capturing</strong>: Events propagate from the root element down to the target element.
            </li>
          </ul>
          <p className="mb-4">
            You can control event propagation using <code>stopPropagation()</code> to prevent further propagation of the event.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

parent.addEventListener('click', function() {
  console.log('Parent clicked!');
});

child.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Child clicked!');
});`}</code>
          </pre>
        </section>

        {/* Event Delegation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Event Delegation</h2>
          <p className="mb-4">
            Event delegation is a technique where a parent element listens for events on its child elements. This allows you to add event listeners to dynamically added elements without attaching individual listeners to each element.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`let parent = document.querySelector('.parent');

parent.addEventListener('click', function(event) {
  if (event.target && event.target.matches('button')) {
    alert('Button clicked!');
  }
});`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          Mastering event handling is essential to creating interactive web pages and making your websites respond to user actions efficiently. By using event listeners, event propagation, and event delegation, you can make your application more flexible and optimized.
        </p>
      </div>
    </div>
  );
};

export default EventsPage;
