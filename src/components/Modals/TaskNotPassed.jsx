'use client';

export default function TestNotPassed({ result, onClose }) {
  return (
    <div className="text-center text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-2">
        ❌ Tests Failed
      </h1>
      <p className="mb-4">Your code didn't pass all test cases.</p>

      {result && (
        <div className="bg-gray-100 border border-gray-300 rounded-md shadow-inner p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">📊 Test Results:</h2>
          <div className="text-left space-y-2">
            <p><strong>Score:</strong> {result.score || 0}/100</p>
            <p><strong>Status:</strong> <span className="text-red-600">❌ Failed</span></p>
            {result.message && (
              <p><strong>Message:</strong> {result.message}</p>
            )}
            {result.details && result.details.length > 0 && (
              <div>
                <strong>Details:</strong>
                <ul className="mt-2 space-y-1">
                  {result.details.map((detail, index) => (
                    <li key={index} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-red-100 border border-red-300 rounded-md shadow-inner p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">💡 What to do next:</h2>
        <ul className="space-y-2 text-left inline-block">
          <li>✅ Check your code for syntax errors</li>
          <li>🔍 Review the test requirements carefully</li>
          <li>🐛 Use console.log to debug your code</li>
          <li>⚡ Click the "🧪 Test" button to run tests</li>
        </ul>
      </div>

      <p className="mb-4 text-gray-600">
        You haven't completed the exercise yet. Use the Monaco editor to write and test your code.
      </p>

      <p className="mb-4 text-gray-600">
        Use the "▶️ Run" button to execute your code and see the output, then use the 
        <code className="mx-2 bg-gray-100 text-blue-600 font-mono text-sm px-2 py-0.5 rounded">
          🧪 Test
        </code>
        button to check if it passes the requirements.
      </p>

      <p className="mb-6 text-gray-600">
        When you think your code is ready, click the 
        <code className="mx-2 bg-gray-100 text-green-600 font-mono text-sm px-2 py-0.5 rounded">
          Submit
        </code>
        button to submit your solution.
      </p>

      <button
        onClick={onClose}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}