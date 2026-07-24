"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const Aggrationgroupstage = () => {
  useReadingTracker("aggregationgroupstage");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB $group Stage
          </h1>

          {/* Introduction Section */}
          <p className="mt-4 text-lg text-gray-600">
            The <code>$group</code> stage is one of the most important stages in
            MongoDB's aggregation pipeline. It allows you to group documents
            together based on a specific field, and it enables you to perform
            aggregation operations like sum, average, count, and more on the
            grouped data.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            The <code>$group</code> stage is often used when you need to
            aggregate data for analysis, reporting, or summaries.
          </p>

          {/* $group Stage Basics Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              How the $group Stage Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The <code>$group</code> stage groups documents by a specific
              field, and it allows you to apply aggregation operators on each
              group. The syntax of the <code>$group</code> stage involves two
              main components:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>_id</strong>: The field by which documents will be
                grouped. You can specify one or more fields.
              </li>
              <li>
                <strong>Accumulator Expressions</strong>: Operators like{" "}
                <code>$sum</code>, <code>$avg</code>, <code>$max</code>,{" "}
                <code>$min</code>, etc., to perform calculations on each group.
              </li>
            </ul>
          </div>

          {/* Example of $group Stage */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example of $group Stage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Below is an example of how the <code>$group</code> stage can be
              used to group documents by a category field and calculate the
              total sales and average sales for each category.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.sales.aggregate([
  { 
    $group: {
      _id: "$category", 
      totalSales: { $sum: "$amount" }, 
      avgSales: { $avg: "$amount" }
    }
  }
]);
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In this example, we are grouping the documents in the{" "}
              <code>sales</code> collection by the <code>category</code> field,
              and for each group, we calculate the total sales using{" "}
              <code>$sum</code> and the average sales using <code>$avg</code>.
            </p>
          </div>

          {/* Real-World Example */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Real-World Example: Grouping by Date
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let’s consider a real-world scenario where we want to group sales
              by the month and calculate the total revenue for each month. We
              could use the <code>$group</code> stage to group the documents by
              a derived date field like <code>$month</code>, and then calculate
              the total revenue for each month.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.sales.aggregate([
  { 
    $project: {
      month: { $month: "$date" }, 
      revenue: "$amount"
    }
  },
  { 
    $group: {
      _id: "$month", 
      totalRevenue: { $sum: "$revenue" }
    }
  }
]);
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              In this example, the <code>$project</code> stage extracts the
              month from the <code>date</code> field, and then we use{" "}
              <code>$group</code> to sum the revenue for each month.
            </p>
          </div>

          {/* More Complex $group Examples */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              More Complex $group Examples
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              You can also use multiple accumulator operators in the{" "}
              <code>$group</code> stage for more complex aggregation needs.
            </p>
            <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
              {`
db.sales.aggregate([
  { 
    $group: {
      _id: "$category", 
      totalSales: { $sum: "$amount" }, 
      maxSale: { $max: "$amount" },
      minSale: { $min: "$amount" },
      avgSale: { $avg: "$amount" }
    }
  }
]);
              `}
            </pre>
            <p className="mt-4 text-lg text-gray-600">
              This query groups sales by the <code>category</code> field and
              calculates the total, maximum, minimum, and average sales for each
              category using multiple accumulator operators.
            </p>
          </div>

          {/* $group Performance Considerations */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Performance Considerations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              While the <code>$group</code> stage is powerful, it can be
              computationally expensive, especially when grouping large
              datasets. Here are some tips to improve performance:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Use Indexes:</strong> Ensure the fields used for
                grouping (e.g., <code>category</code>) are indexed.
              </li>
              <li>
                <strong>Limit Data Before Grouping:</strong> Use the{" "}
                <code>$match</code> stage to filter data before grouping it to
                reduce the dataset.
              </li>
              <li>
                <strong>Use $facet for Parallelism:</strong> If you need
                multiple aggregations, consider using <code>$facet</code> to
                parallelize them.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default Aggrationgroupstage;
