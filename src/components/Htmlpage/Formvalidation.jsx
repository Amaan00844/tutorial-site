"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Formvalidation = () => {
  useReadingTracker("htmlFormValidation");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Form Validation
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            Form validation ensures that users provide valid and complete
            information before a form is submitted. HTML5 provides built-in
            validation features to reduce the need for JavaScript.
          </p>

          {/* Required Field Validation */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Required Field
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>required</code> attribute prevents the form from
              submitting if the field is empty.
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<form>
  <label>Email: <input type="email" required /></label>
  <button type="submit">Submit</button>
</form>`}
            </pre>
          </div>

          {/* Type Validation */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Type Validation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Input types like <code>email</code>, <code>url</code>, and{" "}
              <code>number</code> automatically check the format of user input.
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<input type="email" required />  // Must include '@' and valid domain
<input type="number" min="1" max="100" />`}
            </pre>
          </div>

          {/* Pattern Validation */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Pattern Matching
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>pattern</code> attribute uses Regular Expressions to
              define valid input.
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters" />`}
            </pre>
          </div>

          {/* Length Validation */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Length Constraints
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use <code>minlength</code> and <code>maxlength</code> to restrict
              input length.
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<input type="text" minlength="5" maxlength="10" required />`}
            </pre>
          </div>

          {/* Custom Validation with JavaScript */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Custom Validation (JavaScript)
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sometimes built-in validations aren't enough. You can use
              JavaScript to create custom rules:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg overflow-auto">
              {`<form onsubmit="return validateForm()">
  <input type="text" id="username" />
  <button type="submit">Submit</button>
</form>

<script>
function validateForm() {
  const name = document.getElementById('username').value;
  if (name.length < 5) {
    alert('Username must be at least 5 characters.');
    return false;
  }
  return true;
}
</script>`}
            </pre>
          </div>

          {/* Validation Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Validation Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Use <code>required</code> on important fields.
              </li>
              <li>
                Use <code>type</code> and <code>pattern</code> for semantic
                validation.
              </li>
              <li>Combine HTML5 and JavaScript validation for best results.</li>
              <li>
                Give clear <code>title</code> attributes for custom messages.
              </li>
              <li>
                Always validate data on the server too—client-side can be
                bypassed.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default Formvalidation;
