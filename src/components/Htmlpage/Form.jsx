"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Form = () => {
  useReadingTracker("htmlForm");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">HTML Forms</h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            HTML forms are used to collect user input. The data is typically
            sent to a server for processing using a method such as{" "}
            <code>GET</code> or <code>POST</code>.
          </p>

          {/* Basic Syntax */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Basic Syntax
            </h2>
            <pre className="p-4 bg-gray-100 text-[#426263] rounded-lg">
              {`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <input type="submit" value="Submit" />
</form>`}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              The <code>action</code> attribute defines where to send the form
              data, and <code>method</code> specifies the HTTP method.
            </p>
          </div>

          {/* Common Input Types */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common Input Types
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>text</code> – Single-line input for text.
              </li>
              <li>
                <code>password</code> – Obscures text for passwords.
              </li>
              <li>
                <code>email</code> – Validates input as an email.
              </li>
              <li>
                <code>radio</code> – Allows selection of one option in a group.
              </li>
              <li>
                <code>checkbox</code> – Allows selection of multiple items.
              </li>
              <li>
                <code>submit</code> – A button that submits the form.
              </li>
              <li>
                <code>reset</code> – Resets form values to default.
              </li>
              <li>
                <code>file</code> – Upload a file.
              </li>
              <li>
                <code>number</code>, <code>date</code>, <code>range</code>, etc.
              </li>
            </ul>
          </div>

          {/* Labels and Accessibility */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Using Labels
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use the <code>&lt;label&gt;</code> element to associate text with
              form inputs. This improves usability and accessibility.
            </p>
            <pre className="p-4 bg-gray-100 text-[#82b6b7] rounded-lg">
              {`<label for="email">Email:</label>
<input type="email" id="email" name="email" />`}
            </pre>
          </div>

          {/* Fieldset and Legend */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Fieldsets and Legends
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>{" "}
              to group related elements:
            </p>
            <pre className="p-4 bg-gray-100 text-[#82b6b7] rounded-lg">
              {`<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" />
</fieldset>`}
            </pre>
          </div>

          {/* Form Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Form Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Always use <code>label</code> for each input for accessibility.
              </li>
              <li>
                Use <code>required</code> attribute to enforce input rules.
              </li>
              <li>
                Use <code>placeholder</code> for hints inside inputs.
              </li>
              <li>
                Group related inputs with <code>fieldset</code>.
              </li>
              <li>
                Always validate user input on both client and server side.
              </li>
            </ul>
          </div>

          {/* CTA Button */}
        </div>
      </div>
    </>
  );
};

export default Form;
