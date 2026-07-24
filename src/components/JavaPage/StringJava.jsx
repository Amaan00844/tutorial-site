import React from 'react'

const StringJava = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">Strings in Java</h1>

        <p className="mt-4 text-lg text-gray-700">
          In Java, a <strong>String</strong> is an object that represents a sequence of characters. It is defined in the <code>java.lang</code> package and is one of the most commonly used classes in Java. Strings in Java are <strong>immutable</strong>, meaning their values cannot be changed once created.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Creating Strings</h2>
        <p className="mt-2 text-lg text-gray-700">There are two ways to create strings in Java:</p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Using string literals:</strong> Stored in the String Pool.</li>
          <li><strong>Using the <code>new</code> keyword:</strong> Creates a new object in heap memory.</li>
        </ul>

        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`String str1 = "Hello";                // String literal
String str2 = new String("Hello");     // New object in heap`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">String Pool</h2>
        <p className="mt-2 text-lg text-gray-700">
          Java uses a special memory region called the <strong>String Constant Pool</strong> to store string literals. If two strings have the same literal value, Java will reuse the existing object to save memory.
        </p>
        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`String a = "Java";
String b = "Java";
System.out.println(a == b);  // true – same object in the pool`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Why Strings Are Immutable?</h2>
        <p className="mt-2 text-lg text-gray-700">
          String immutability provides:
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Security</strong>: Cannot be altered by other code (used in URLs, file paths).</li>
          <li><strong>Thread-safety</strong>: Safe to share across threads without sync.</li>
          <li><strong>String Pooling</strong>: Saves memory by reusing literals.</li>
          <li><strong>Performance</strong>: Caching hashcodes makes them efficient for hashing.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">String Methods</h2>
        <p className="mt-2 text-lg text-gray-700">
          Java provides many built-in methods to manipulate and work with strings:
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><code>length()</code> – returns number of characters</li>
          <li><code>charAt(index)</code> – gets character at specific index</li>
          <li><code>substring(start, end)</code> – gets part of the string</li>
          <li><code>toUpperCase()</code>, <code>toLowerCase()</code></li>
          <li><code>trim()</code> – removes leading/trailing spaces</li>
          <li><code>replace(old, new)</code> – replaces characters</li>
          <li><code>contains("str")</code> – checks if substring exists</li>
          <li><code>equals()</code>, <code>equalsIgnoreCase()</code></li>
          <li><code>indexOf()</code>, <code>lastIndexOf()</code></li>
          <li><code>split()</code> – breaks string into array</li>
        </ul>

        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`String str = " Hello Java ";
System.out.println(str.length());           // 12
System.out.println(str.charAt(2));          // l
System.out.println(str.substring(1, 6));    // "Hello"
System.out.println(str.trim());             // "Hello Java"
System.out.println(str.toLowerCase());      // " hello java "
System.out.println(str.replace("Java", "World"));  // " Hello World "`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Comparing Strings</h2>
        <p className="mt-2 text-lg text-gray-700">
          There are two common ways to compare strings:
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><code>==</code>: compares references (i.e., memory location)</li>
          <li><code>equals()</code>: compares actual contents</li>
        </ul>
        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`String a = "Java";
String b = new String("Java");

System.out.println(a == b);        // false (different objects)
System.out.println(a.equals(b));   // true (same content)`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">String Concatenation</h2>
        <p className="mt-2 text-lg text-gray-700">
          Strings can be joined using:
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li>The <code>+</code> operator</li>
          <li>The <code>concat()</code> method</li>
        </ul>
        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`String s1 = "Java";
String s2 = "Programming";

System.out.println(s1 + " " + s2);            // Java Programming
System.out.println(s1.concat(" " + s2));      // Java Programming`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Converting Between String and Other Types</h2>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><code>String.valueOf(int)</code> – converts number to string</li>
          <li><code>Integer.parseInt(str)</code> – converts string to int</li>
        </ul>
        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`int number = 123;
String str = String.valueOf(number);  // "123"

String s = "456";
int num = Integer.parseInt(s);        // 456`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Mutable Strings: StringBuilder & StringBuffer</h2>
        <p className="mt-2 text-lg text-gray-700">
          <code>StringBuilder</code> and <code>StringBuffer</code> are used when you need a mutable string:
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>StringBuilder</strong>: Fast, not thread-safe</li>
          <li><strong>StringBuffer</strong>: Thread-safe but slightly slower</li>
        </ul>
        <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-4 overflow-auto">
{`StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb);  // Hello World

StringBuffer buffer = new StringBuffer("Java");
buffer.insert(4, " is Awesome");
System.out.println(buffer);  // Java is Awesome`}
        </pre>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p className="mt-2 text-lg text-gray-700">
          Strings are one of the most powerful tools in Java. Understanding how strings work, including their immutability, creation, comparison, and manipulation, is essential for writing effective Java programs.
        </p>
      </div>
    </div>
  )
}

export default StringJava
