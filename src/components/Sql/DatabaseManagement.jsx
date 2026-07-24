"use client";

const DatabaseManagement = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">Database Management in SQL</h1>
        <p className="text-lg">
          SQL provides powerful commands to manage databases — including creating, modifying, and deleting them.
        </p>

        <h2 className="text-2xl font-semibold">1. CREATE DATABASE</h2>
        <p>This command creates a new database.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`CREATE DATABASE my_database;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">2. SHOW DATABASES</h2>
        <p>Lists all the databases on the server (MySQL specific).</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`SHOW DATABASES;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">3. USE DATABASE</h2>
        <p>Selects a specific database to run queries against.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`USE my_database;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">4. RENAME DATABASE</h2>
        <p>Renames an existing database (not supported in all SQL engines).</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`ALTER DATABASE old_name MODIFY NAME = new_name;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold">5. DROP DATABASE</h2>
        <p>Deletes a database and all its tables permanently.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`DROP DATABASE my_database;`}</code>
        </pre>
        <p className="italic text-red-500">
          ⚠️ Warning: This action is irreversible. Use with caution!
        </p>

        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use clear and consistent naming conventions for databases.</li>
          <li>Back up important data before dropping or modifying databases.</li>
          <li>Use environment-specific databases (e.g., dev, test, prod).</li>
          <li>Apply permissions to protect databases from unauthorized access.</li>
        </ul>
      </div>
    </div>
  );
};

export default DatabaseManagement;
