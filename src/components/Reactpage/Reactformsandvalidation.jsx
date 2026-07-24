"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React, { useState } from "react";

function Reactformsandvalidation() {
  // Track page visit or reading activity
  useReadingTracker("reactformsandvalidation");

  return (
    <div className="p-6 ">
    

      <div className="bg-white p-6 rounded-xl shadow-lg ml-80 max-w-5xl mx-auto">
        {/* ---------------- INTRODUCTION ---------------- */}
          <h1 className="text-3xl text-gray-800 font-bold mb-6">
        Forms and Validation in React
      </h1>
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Introduction
        </h2>
        <p className="text-gray-800 mb-6">
          Handling forms in React involves capturing user input through
          controlled components. Validation ensures that the form data entered
          by the user meets the required criteria before submission. Let’s
          explore how React simplifies form handling and validation.
        </p>

        {/* ---------------- CONTROLLED COMPONENTS ---------------- */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Controlled Components
        </h2>
        <p className="text-gray-800 mb-4">
          In React, form inputs like <code>input</code>, <code>textarea</code>,
          and <code>select</code>
          maintain their values in the component’s state. This makes them
          controlled components, where React is the single source of truth for
          input values.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    alert('Submitted Name: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
          </code>
        </pre>

        {/* ---------------- BASIC VALIDATION ---------------- */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Basic Validation Example
        </h2>
        <p className="text-gray-800 mb-4">
          You can add simple validation by checking input values before
          submitting. Here's a basic example to check if an email contains "@".
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email address');
    } else {
      setError('');
      alert('Email submitted: ' + email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}`}
          </code>
        </pre>

        {/* ---------------- USING FORMIK + YUP ---------------- */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Using Libraries like Formik and Yup
        </h2>
        <p className="text-gray-800 mb-4">
          For larger and more complex forms, libraries like <code>Formik</code>{" "}
          (form state management) and
          <code> Yup</code> (schema-based validation) make the process easier
          and cleaner.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-pink-700">
            {`import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

function SignupForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}`}
          </code>
        </pre>

        {/* ---------------- IMPORTANT TIPS ---------------- */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Important Tips
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>
            Always use controlled components for consistent form behavior.
          </li>
          <li>
            Use <strong>client-side</strong> validation for UX and{" "}
            <strong>server-side</strong> for security.
          </li>
          <li>Show clear and helpful error messages.</li>
          <li>
            Consider using Formik for large forms—it reduces boilerplate code.
          </li>
        </ul>

        {/* ---------------- MINI PROJECT IDEA ---------------- */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Mini Project Idea 🚀
        </h2>
        <p className="text-gray-800 mb-4">
          Create a complete signup/login form using React, Formik, and Yup.
          Store users temporarily in <code>localStorage</code>
          or send them to a backend API. You can later add features like
          password visibility toggles, form resets, and multi-step registration.
        </p>

        {/* ---------------- CONCLUSION ---------------- */}
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-800 mb-6">
          Forms are an essential part of any application. Mastering controlled
          components, applying proper validations, and using libraries to reduce
          complexity will enhance the professionalism of your user interfaces.
        </p>

       
      </div>
    </div>
  );
}

export default Reactformsandvalidation;
