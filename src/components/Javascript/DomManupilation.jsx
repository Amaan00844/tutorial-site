"use client";

const DOMManipulationPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-8">
      <div className="bg-white p-8  space-y-6 ml-10">
        <h1 className="text-4xl font-bold mb-6">🌐 DOM Manipulation</h1>
        <p className="mb-4">
          The Document Object Model (DOM) represents the structure of an HTML document. Using JavaScript, you can manipulate the DOM to dynamically change the content, structure, and style of a webpage. DOM manipulation is a powerful way to make interactive and dynamic web pages.
        </p>

        {/* Accessing DOM Elements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Accessing DOM Elements</h2>
          <p className="mb-4">
            Before manipulating any element, you need to access it. There are several methods to access DOM elements.
          </p>

          {/* getElementById */}
          <h3 className="text-xl font-semibold mb-4">Using <code>getElementById</code></h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');`}</code>
          </pre>

          {/* querySelector */}
          <h3 className="text-xl font-semibold mb-4">Using <code>querySelector</code></h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.querySelector('.myClass');`}</code>
          </pre>

          {/* querySelectorAll */}
          <h3 className="text-xl font-semibold mb-4">Using <code>querySelectorAll</code></h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const elements = document.querySelectorAll('.myClass');`}</code>
          </pre>
        </section>

        {/* Manipulating Content */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Manipulating Content</h2>
          <p className="mb-4">
            Once you've accessed an element, you can change its content.
          </p>

          {/* Changing Text Content */}
          <h3 className="text-xl font-semibold mb-4">Changing Text Content</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.textContent = 'New Content!';`}</code>
          </pre>

          {/* Changing HTML Content */}
          <h3 className="text-xl font-semibold mb-4">Changing HTML Content</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.innerHTML = '<strong>New HTML Content!</strong>';`}</code>
          </pre>
        </section>

        {/* Manipulating Styles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Manipulating Styles</h2>
          <p className="mb-4">
            You can dynamically change the style of an element using JavaScript.
          </p>

          {/* Changing Inline Styles */}
          <h3 className="text-xl font-semibold mb-4">Changing Inline Styles</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.style.color = 'red';
element.style.fontSize = '20px';`}</code>
          </pre>
        </section>

        {/* Adding and Removing Classes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Adding and Removing Classes</h2>
          <p className="mb-4">
            You can add, remove, or toggle CSS classes using JavaScript.
          </p>

          {/* Adding a Class */}
          <h3 className="text-xl font-semibold mb-4">Adding a Class</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.classList.add('newClass');`}</code>
          </pre>

          {/* Removing a Class */}
          <h3 className="text-xl font-semibold mb-4">Removing a Class</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.classList.remove('oldClass');`}</code>
          </pre>

          {/* Toggling a Class */}
          <h3 className="text-xl font-semibold mb-4">Toggling a Class</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.classList.toggle('hidden');`}</code>
          </pre>
        </section>

        {/* Creating and Adding New Elements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Creating and Adding New Elements</h2>
          <p className="mb-4">
            You can dynamically create new elements and add them to the DOM.
          </p>

          {/* Creating a New Element */}
          <h3 className="text-xl font-semibold mb-4">Creating a New Element</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div!';
document.body.appendChild(newDiv);`}</code>
          </pre>

          {/* Adding the Element to the DOM */}
          <h3 className="text-xl font-semibold mb-4">Appending the New Element</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`document.body.appendChild(newDiv);`}</code>
          </pre>
        </section>

        {/* Removing Elements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Removing Elements</h2>
          <p className="mb-4">
            You can remove elements from the DOM using JavaScript.
          </p>

          {/* Removing an Element */}
          <h3 className="text-xl font-semibold mb-4">Removing an Element</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const element = document.getElementById('myElement');
element.remove();`}</code>
          </pre>
        </section>

        {/* Event Listeners */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Event Listeners</h2>
          <p className="mb-4">
            You can add event listeners to elements to make them interactive. An event listener waits for a specified event (like a click) and then runs the corresponding code.
          </p>

          {/* Adding an Event Listener */}
          <h3 className="text-xl font-semibold mb-4">Adding an Event Listener</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            <code>{`const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});`}</code>
          </pre>
        </section>

        <p className="italic text-blue-300">
          DOM manipulation allows you to create dynamic and interactive web pages by changing content, structure, style, and behavior on the fly. This enables you to create engaging and responsive user interfaces.
        </p>
      </div>
    </div>
  );
};

export default DOMManipulationPage;
