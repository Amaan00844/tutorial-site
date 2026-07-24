
'use client'
import { CheckCircle } from "lucide-react";
import { FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import { FileCode, Braces, Database, Globe, Server } from "lucide-react";

const checklist = {
  "CSS Best Practices": [
    {
      title: "Use a Consistent Naming Convention",
      items: [
        "BEM (Block, Element, Modifier) is a popular naming convention that helps maintain clarity in large projects.",
        "By using a consistent and descriptive naming system, it becomes easier to understand and maintain the code, especially in larger teams."
      ]
    },
    {
      title: "Keep CSS DRY (Don’t Repeat Yourself)",
      items: [
        "Avoid repeating the same styles in multiple places.",
        "Instead, group common styles into reusable classes or use inheritance when appropriate.",
        "Utilize utility classes (e.g., .text-center, .m-2 for margin) for reusable styles."
      ]
    },
    {
      title: "Use External Stylesheets",
      items: [
        "Link to external stylesheets instead of using inline styles or embedding styles within HTML.",
        "This helps with code separation, improves performance, and allows the CSS file to be cached by the browser."
      ]
    },
    {
      title: "Minimize the Use of IDs for Styling",
      items: [
        "IDs have higher specificity, making the code more difficult to manage.",
        "Use classes for styling to avoid specificity issues.",
        "IDs should be used for unique elements, like a single header, not for styling purposes."
      ]
    },
    {
      title: "Use CSS Variables (Custom Properties)",
      items: [
        "CSS variables allow you to store values that can be reused throughout your stylesheet.",
        "This makes it easier to manage themes, colors, and other repetitive values across your CSS."
      ]
    },
    {
      title: "Avoid Inline Styles",
      items: [
        "Inline styles can add extra weight to your HTML and make it harder to manage and override styles.",
        "Use them sparingly, if at all."
      ]
    },
    {
      title: "Use Flexbox and Grid for Layouts",
      items: [
        "Rather than relying on floats or other outdated methods for layouts, use Flexbox or Grid.",
        "These modern layout systems offer greater flexibility and ease of use for building responsive designs."
      ]
    },
    {
      title: "Keep CSS Specificity Low",
      items: [
        "Avoid overly complex CSS selectors, as they can make your styles harder to override and lead to unexpected results.",
        "Simpler, more straightforward selectors are usually easier to manage."
      ]
    },
    {
      title: "Optimize for Performance",
      items: [
        "Minify your CSS to remove unnecessary characters like spaces and comments, reducing file size and improving page load times.",
        "Avoid overly complex selectors, as they can negatively impact browser performance."
      ]
    },
    {
      title: "Mobile-First and Responsive Design",
      items: [
        "Start your design with mobile devices in mind and then use media queries to adjust styles for larger screens.",
        "This ensures your design is responsive and works well across different devices."
      ]
    },
    {
      title: "Use Comments Wisely",
      items: [
        "Comments help explain why certain decisions were made, especially in complex or unclear code.",
        "Use comments to clarify the intention behind the code, rather than how things work (which should be evident from the code itself)."
      ]
    },
    {
      title: "Avoid `!important`",
      items: [
        "Using `!important` can make debugging and maintaining styles more difficult.",
        "It can also break the natural cascading behavior of CSS.",
        "Instead, focus on managing specificity and cascading rules properly."
      ]
    },
    {
      title: "Organize Your Stylesheets",
      items: [
        "Split your CSS into logical sections or files, such as:",
        "Base styles (e.g., resets, typography)",
        "Layout styles (e.g., grid, header, footer)",
        "Component styles (e.g., buttons, cards)",
        "Theme styles (e.g., colors, fonts)",
        "This modular approach helps keep the codebase organized and easier to manage."
      ]
    },
    {
      title: "Use CSS Resets or Normalize.css",
      items: [
        "Different browsers have different default styles.",
        "Using a reset or normalize stylesheet ensures consistency across all browsers and helps prevent unexpected styling issues."
      ]
    },
    {
      title: "Leverage CSS Transitions and Animations",
      items: [
        "CSS transitions and animations provide a way to add interactivity and improve the user experience without relying on JavaScript.",
        "They are powerful tools for creating dynamic, responsive designs."
      ]
    },
    
   
  ]
};

export default function CssBestPractice() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-60 left-10">
          <FaCss3Alt size={70} className="text-blue-300" />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <FaPython size={70} className="text-yellow-300" />
        </div>
        <div className="absolute top-10 left-10">
          <FileCode size={100} className="text-blue-100 rotate-12 z-34" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <Braces size={100} className="text-green-200 -rotate-6 z-34" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Database size={100} className="text-purple-200 rotate-12 z-34" />
        </div>
        <div className="absolute top-20 right-43 z-54">
          <Globe size={100} className="text-pink-200 -rotate-12 z-34" />
        </div>
        <div className="absolute bottom-23 left-34">
          <Server size={100} className="text-yellow-100 rotate-6 z-34 " />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            CSS Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {checklist["CSS Best Practices"].map((section, idx) => (
            <div
              key={idx}
              className="cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b pb-1">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
