"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function MySQLLimitOffset() {
  useReadingTracker("mysqllimitoffset");

  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        LIMIT & OFFSET in MySQL
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        The `LIMIT` and `OFFSET` clauses in MySQL are crucial for controlling
        the number of rows returned in a query. They allow us to retrieve only a
        subset of data, which is especially useful when working with large
        datasets or implementing pagination in applications. - `LIMIT` specifies
        how many rows to return. - `OFFSET` specifies where to start fetching
        the rows, skipping a set number of rows from the start. By using these
        clauses together, you can manage the display of data in a more
        user-friendly way, especially for paginated results.
      </p>

      <div className="bg-white p-6 rounded-xl  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
          Using LIMIT and OFFSET
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The `LIMIT` clause controls the number of rows returned by the
            query, while the `OFFSET` clause skips a specified number of rows
            before starting to return results.
          </p>

          <p>**Basic Syntax**</p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`SELECT column1, column2 FROM table_name LIMIT number [OFFSET number];`}
            </code>
          </pre>

          <p>
            - `number`: Specifies the number of rows to return. - `OFFSET
            number`: Skips the first `number` rows. - If `OFFSET` is omitted,
            MySQL assumes `OFFSET 0`, which starts at the first row.
          </p>

          <p>
            **Example Queries** Let’s assume we have a “posts” table with `id`,
            `title`, and `created_at` columns:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Get the first 5 posts
SELECT * FROM posts LIMIT 5;

-- Get 5 posts, skipping the first 10
SELECT * FROM posts LIMIT 5 OFFSET 10;`}
            </code>
          </pre>

          <p>
            **What’s Happening Here?** - The first query retrieves the first 5
            posts from the table. - The second query skips the first 10 posts
            and retrieves the next 5 posts (posts 11-15).
          </p>

          <p>
            **Use Case: Pagination** When working with large datasets, it’s
            common to display data in pages. For example, a blog may show 10
            posts per page:
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-cyan-600">
              {`-- Page 1: First 10 posts
SELECT * FROM posts LIMIT 10 OFFSET 0;

-- Page 2: Posts 11-20
SELECT * FROM posts LIMIT 10 OFFSET 10;

-- Page 3: Posts 21-30
SELECT * FROM posts LIMIT 10 OFFSET 20;`}
            </code>
          </pre>

          <p>
            **What’s Happening Here?** - On Page 1, the query retrieves posts
            1-10 (`OFFSET 0`). - On Page 2, it retrieves posts 11-20 (`OFFSET
            10`). - On Page 3, it retrieves posts 21-30 (`OFFSET 20`). This
            pattern continues as you paginate through the data.
          </p>

          <p>
            **Best Practices** - Combine `LIMIT` and `OFFSET` with `ORDER BY` to
            ensure that the data is consistently ordered, particularly in
            applications that display dynamic data. - Always use `LIMIT` in
            combination with `ORDER BY` to avoid inconsistencies in results when
            paginating. - Be careful with large `OFFSET` values, as they can
            cause performance issues. The larger the offset, the more rows MySQL
            has to skip, potentially slowing down the query. - When paginating
            large datasets, consider alternatives like “seek pagination” to
            improve performance (this involves tracking the last seen item
            instead of using offsets).
          </p>

          <p>
            **Practice Exercise** 1. Create a “products” table with `id`,
            `name`, and `price`. Insert 20 products into the table. 2. Write
            queries to: - Retrieve the first 3 products. - Retrieve products
            6-10 using `LIMIT` and `OFFSET`. - Simulate page 2 of a product list
            with 5 products per page.
          </p>
        </div>
      </div>
    </div>
  );
}
