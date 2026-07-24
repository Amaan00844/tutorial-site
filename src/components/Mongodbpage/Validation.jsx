"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Validation = () => {
  useReadingTracker("mongovalidation"); // Fixed typo
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Schema Validation
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            MongoDB is a schema-less NoSQL database by default, but it allows
            you to enforce rules on the structure of documents using{" "}
            <strong>schema validation</strong>. This feature lets you define
            criteria documents must meet to be inserted or updated in a
            collection, improving data integrity.
          </p>

          {/* Why Use Validation */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Use Schema Validation?
            </h2>
            <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
              <li>Prevent bad or inconsistent data from being written.</li>
              <li>Enforce data types and required fields.</li>
              <li>
                Protect your database against programming mistakes or user
                errors.
              </li>
            </ul>
          </div>

          {/* Validators */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Validation with JSON Schema
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB uses a JSON Schema syntax for defining validation rules.
              You can define types, required fields, value ranges, and more.
            </p>

            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        price: {
          bsonType: "double",
          minimum: 0,
          description: "must be a non-negative number and is required"
        },
        category: {
          bsonType: "string",
          description: "optional string"
        }
      }
    }
  }
});
              `}
            </pre>
          </div>

          {/* Validation Levels */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Validation Levels and Actions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB allows customization of how validation behaves:
            </p>
            <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
              <li>
                <strong>Validation Level:</strong> Determines which documents
                are subject to validation (`strict`, `moderate`).
              </li>
              <li>
                <strong>Validation Action:</strong> Controls what happens when
                validation fails (`error` or `warn`).
              </li>
            </ul>

            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.runCommand({
  collMod: "products",
  validator: { ... },
  validationLevel: "strict",
  validationAction: "error"
});
              `}
            </pre>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Practices
            </h2>
            <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
              <li>
                Use validation in combination with application-side checks.
              </li>
              <li>
                Start with `validationAction: "warn"` in development to monitor
                without blocking writes.
              </li>
              <li>
                Keep schemas flexible where needed (e.g., optional fields).
              </li>
              <li>
                Use `bsonType` instead of `type` for compatibility with
                MongoDB's internal structure.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          {/* Add any missing content here */}
        </div>
      </div>
    </>
  );
};

export default Validation;
