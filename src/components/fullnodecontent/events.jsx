'use client';

const EventModulePage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js Event Module</h1>
        <p className="text-lg">
          The <code>events</code> module in Node.js is an essential feature for event-driven programming. It allows you to create, fire, and listen to custom events. It is a built-in module, so you don’t need to install anything separately to use it. This module helps to make Node.js applications more interactive and efficient by implementing event listeners and emitters.
        </p>

        <h2 className="text-2xl font-semibold">Importing the Event Module</h2>
        <p className="text-lg">
          To use the <code>events</code> module, you first need to require it in your application. The main object provided by the module is the <code>EventEmitter</code> class, which is responsible for creating and managing events.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const events = require('events');
const eventEmitter = new events.EventEmitter();`}
          </code>
        </pre>
        <p className="text-lg">
          In this code, we first import the <code>events</code> module and then create an instance of the <code>EventEmitter</code> class. This instance allows us to work with custom events.
        </p>

        <h2 className="text-2xl font-semibold">Creating and Listening to Events</h2>
        <p className="text-lg">
          Once we have an <code>EventEmitter</code> instance, we can create custom events and attach listeners (functions) to those events. A listener is a function that gets called whenever a specific event is triggered. Here's how you can set up an event listener:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`// Listener function
const greetUser = () => {
  console.log('Hello! Welcome to Node.js events.');
};

// Bind the event with the listener
eventEmitter.on('greet', greetUser);

// Trigger the event
eventEmitter.emit('greet');`}
          </code>
        </pre>
        <p className="text-lg">
          In this example, we create a listener function <code>greetUser</code>, which simply logs a message to the console. We then bind the event name <code>'greet'</code> with this listener using the <code>on()</code> method. Finally, we trigger the event by calling <code>emit()</code>, which causes the <code>greetUser</code> function to be executed.
        </p>

        <h2 className="text-2xl font-semibold">Passing Arguments to Event Listeners</h2>
        <p className="text-lg">
          In some cases, you might want to pass additional data when triggering an event. Node.js allows you to pass arguments from the <code>emit()</code> method, which can then be accessed by the listener function. Here's an example:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`eventEmitter.on('orderPlaced', (item, quantity) => {
  console.log(\`Order received: \${quantity} x \${item}\`);
});

eventEmitter.emit('orderPlaced', 'Pizza', 2);`}
          </code>
        </pre>
        <p className="text-lg">
          In this case, the event <code>'orderPlaced'</code> passes two arguments: <code>item</code> (which is a string) and <code>quantity</code> (which is a number). The listener function uses these arguments to display a message that includes the order details.
        </p>

        <h2 className="text-2xl font-semibold"> Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>The <code>events</code> module is built-in and used for handling events in Node.js applications.</li>
          <li>To use events, first create an instance of <code>EventEmitter</code> using <code>new events.EventEmitter()</code>.</li>
          <li>Use the <code>.on()</code> method to bind an event to a listener function. The listener function will be executed when the event is emitted.</li>
          <li>The <code>.emit()</code> method triggers an event and can pass any number of arguments to the listener functions.</li>
          <li>Event-driven architecture is a powerful tool in Node.js, allowing you to write more efficient and responsive applications.</li>
        </ul>
      </div>
    </div>
  );
};

export default EventModulePage;
