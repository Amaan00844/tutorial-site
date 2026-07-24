"use client";

const DeletePage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-black space-y-6">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 ml-10">
        <h1 className="text-4xl font-bold">SQL DELETE Statement</h1>
        <p className="text-lg">
          The <strong>DELETE</strong> statement in SQL is used to remove one or more records from a table.
        </p>

        <h2 className="text-2xl font-semibold">Syntax</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`DELETE FROM table_name
WHERE condition;`}</code>
        </pre>
        <p>
          <strong>Important:</strong> Always include a <code>WHERE</code> clause to avoid deleting all records.
        </p>

        <h2 className="text-2xl font-semibold">Example: Delete One Record</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`DELETE FROM students
WHERE id = 3;`}</code>
        </pre>
        <p>This deletes the student with <code>id = 3</code>.</p>

        <h2 className="text-2xl font-semibold">Delete All Records</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`DELETE FROM students;`}</code>
        </pre>
        <p>
          <strong>Warning:</strong> This removes all data from the <code>students</code> table, but keeps the table structure.
        </p>

        <h2 className="text-2xl font-semibold">Delete Using Multiple Conditions</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>{`DELETE FROM students
WHERE age < 18 AND grade = 'F';`}</code>
        </pre>
        <p>This deletes students who are under 18 and have a failing grade.</p>

        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always test your <code>DELETE</code> statement with a <code>SELECT</code> first.</li>
          <li>Use transactions if your database supports it, especially when deleting multiple rows.</li>
          <li>Keep backups before running mass deletes.</li>
        </ul>

        <p className="italic text-blue-300">
          Deleting data is permanent. Use with caution.
        </p>
      </div>
    </div>
  );
};

export default DeletePage;