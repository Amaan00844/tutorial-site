// @/components/Instructions.jsx
import ReactMarkdown from "react-markdown";

const markdownTemplate = `
# {task}

## Welcome! Please follow the instructions below to complete and test your work.

### To execute your code, enter the below in terminal

> node <your-file-name-without-brackets>

**OR**

> npm run <any-predifined-script-in-package.json>

**OR**

> npx <any-installed-module> // for example npx http-server

### You must pass the tests before submitting. To run the tests and test your code: 

> run-tests

Once tested and all tests are passed, then **press submit** button.

### ⚠️ If a command is already running, press Ctrl + C to cancel.

Close this box after reading the instructions.
`;

export default function Instructions({ task, onClose }) {
  const markdown = markdownTemplate.replace("{task}", task);

  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <h1 className="text-xl font-bold mb-4 mr-1 text-blue-700">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-semibold mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-md font-semibold mt-4 mb-2">{children}</h3>,
        p: ({ children }) => <p className="mb-2 text-gray-800">{children}</p>,
        code: ({ children }) => (
          <code className="bg-gray-100 text-sm px-1 py-0.5 rounded text-red-600 font-mono">
            {children}
          </code>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 my-2">
            {children}
          </blockquote>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
