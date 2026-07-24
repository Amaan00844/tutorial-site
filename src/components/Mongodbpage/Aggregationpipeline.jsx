"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Aggregationpipeline = () => {
  useReadingTracker("agrigationpipelinemongo");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Aggregation Pipeline
          </h1>

          {/* Introduction Section */}
          <p className="mt-4 text-lg text-gray-600">
            The MongoDB Aggregation Pipeline is a powerful framework for
            transforming and combining data. It allows you to perform complex
            queries by applying multiple stages that process and transform
            documents in a collection. This makes it a versatile tool for
            analytics and reporting.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            The pipeline consists of multiple stages, each performing a specific
            operation, such as filtering, grouping, or sorting. It is used to
            extract insights from your data, perform computations, and even join
            multiple collections.
          </p>

          {/* Aggregation Pipeline Basics Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Aggregation Pipeline Basics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The aggregation pipeline processes data in a series of stages.
              Each stage modifies or filters the documents in some way and
              passes the result to the next stage. Stages can include operations
              such as filtering, grouping, sorting, and more.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Common aggregation pipeline stages include:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>$match</strong> - Filters documents based on a condition
                (similar to the "find" operation).
              </li>
              <li>
                <strong>$group</strong> - Groups documents by a specified field
                and applies aggregation operations like summing or averaging.
              </li>
              <li>
                <strong>$sort</strong> - Sorts the documents in ascending or
                descending order.
              </li>
              <li>
                <strong>$project</strong> - Reshapes documents by adding,
                removing, or renaming fields.
              </li>
            </ul>
          </div>

          {/* MongoDB Aggregation Stages Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common Aggregation Stages
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB supports many different stages in the aggregation
              pipeline. Below, we’ll take a closer look at a few of them.
            </p>

            {/* $match Stage */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                1. $match (Filter Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                The <code>$match</code> stage filters documents based on a
                specified condition. It’s similar to the <code>find()</code>{" "}
                operation.
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").aggregate([
  { $match: { status: "active" } }
]);
                `}
              </pre>
            </div>

            {/* $group Stage */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                2. $group (Group Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                The <code>$group</code> stage groups documents by a specific
                field and applies aggregation operations like <code>$sum</code>{" "}
                or <code>$avg</code>.
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").aggregate([
  { $group: { _id: "$category", totalPosts: { $sum: 1 } } }
]);
                `}
              </pre>
            </div>

            {/* $sort Stage */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                3. $sort (Sort Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                The <code>$sort</code> stage sorts documents in ascending or
                descending order.
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").aggregate([
  { $sort: { totalPosts: -1 } }
]);
                `}
              </pre>
            </div>

            {/* $project Stage */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                4. $project (Reshape Documents)
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                The <code>$project</code> stage is used to reshape documents by
                including, excluding, or renaming fields.
              </p>
              <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                {`
db.collection("posts").aggregate([
  { $project: { title: 1, category: 1, _id: 0 } }
]);
                `}
              </pre>
            </div>
          </div>

          {/* MongoDB Aggregation Example Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example Aggregation Pipeline
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here is an example of a complete aggregation pipeline:
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.posts.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$category", totalPosts: { $sum: 1 } } },
  { $sort: { totalPosts: -1 } }
]);
              `}
            </pre>
          </div>

          {/* MongoDB Aggregation Security Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              MongoDB Aggregation Security Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              When using the aggregation pipeline, follow these security best
              practices to ensure data protection:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Enable Authentication:</strong> Always ensure
                authentication is enabled for your MongoDB instance.
              </li>
              <li>
                <strong>Limit Data Exposure:</strong> Use appropriate{" "}
                <code>$project</code> stages to control what data is returned.
              </li>
              <li>
                <strong>Monitor Aggregation Performance:</strong> Complex
                aggregation queries can be resource-intensive, so monitor their
                performance.
              </li>
              <li>
                <strong>Use Indexes:</strong> Ensure that frequently queried
                fields are indexed to improve the performance of your
                aggregation queries.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default Aggregationpipeline;
