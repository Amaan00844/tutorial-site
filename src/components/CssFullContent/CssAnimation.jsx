'use client'

const CssAnimations = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">CSS Animations</h1>
        <p className="text-lg">Add dynamic effects to your web elements.</p>
        <p>
          CSS animations and transitions allow you to create smooth, engaging effects like fades, slides, or rotations, enhancing user experience.
          They improve visual flow and make your interfaces feel more interactive and alive.
        </p>

        <h2 className="text-2xl font-semibold">Transitions vs. Animations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Transitions:</strong> These are used when you want to animate from one state to another (like hover or focus). They need a trigger like <code>:hover</code> or a class change.</li>
          <li><strong>Animations:</strong> These run automatically and can involve multiple steps using <code>@keyframes</code>. Perfect for complex motion like bouncing, rotating, fading in/out, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Example: CSS Transition</h2>
        <p>
          This example changes the size and background color of a box when you hover over it. The transition makes this change smooth instead of instant.
        </p>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Transition */
.box {
  width: 100px;
  height: 100px;
  background-color: purple;
  transition: all 0.3s ease;
}

.box:hover {
  width: 150px;
  background-color: orange;
}

/* HTML */
<div class="box"></div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">Example: CSS Animation</h2>
        <p>
          This example uses keyframes to make a box "bounce" up and down forever. The animation runs continuously and doesn’t need user interaction.
        </p>
        <pre className="bg-gray-100 text-[#FF7F50] p-4 rounded text-sm overflow-x-auto">
          <code>
{`/* Animation keyframes */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

/* Apply animation */
.box {
  width: 100px;
  height: 100px;
  background-color: green;
  animation: bounce 1s infinite;
}

/* HTML */
<div class="box"></div>`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">How Animations Work</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>@keyframes:</strong> Define the animation sequence (e.g., bounce, fade, rotate).</li>
          <li><strong>animation-name:</strong> The name of the keyframes to use.</li>
          <li><strong>animation-duration:</strong> How long one cycle takes (e.g., 1s).</li>
          <li><strong>animation-iteration-count:</strong> How many times the animation should repeat (e.g., <code>infinite</code>).</li>
          <li><strong>animation-timing-function:</strong> Controls speed curve (<code>ease</code>, <code>linear</code>, <code>ease-in-out</code>).</li>
        </ul>

        <h2 className="text-2xl font-semibold">Tips for Using Animations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep animations subtle and meaningful—avoid distracting effects.</li>
          <li>Use <code>@keyframes</code> when you need full control over multiple steps.</li>
          <li>Always test performance on mobile devices; animations can affect speed.</li>
          <li>You can combine both transitions and animations for beautiful UIs!</li>
        </ul>

        <p className="italic text-[#FF7F50]">
          Use <strong>transitions</strong> for simple effects and <strong>animations</strong> for complex sequences or motion loops.
        </p>
      </div>
    </div>
  );
};

export default CssAnimations;
