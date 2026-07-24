import React from "react";

const Installation = () => {
  return (
    <div className="p-6 ml-80">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Installing Python</h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-600">
          Python is available on all major operating systems. You can download and install the latest version
          from the official website:{" "}
          <a
            href="https://www.python.org/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            python.org/downloads
          </a>.
        </p>

        {/* Windows */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Installation on Windows</h2>
          <ul className="mt-4 list-decimal text-lg text-gray-600 pl-6">
            <li>Download the installer from the official website.</li>
            <li>Run the installer and check the option <strong>"Add Python to PATH"</strong>.</li>
            <li>Click "Install Now" and wait for the installation to complete.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-600">
            After installation, open Command Prompt and type:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`python --version`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            This should display the installed Python version.
          </p>
        </div>

        {/* macOS */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Installation on macOS</h2>
          <p className="mt-4 text-lg text-gray-600">
            You can install Python on macOS using the official installer or Homebrew:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`brew install python`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            After installation, confirm by running:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`python3 --version`}
          </pre>
        </div>

        {/* Linux */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Installation on Linux</h2>
          <p className="mt-4 text-lg text-gray-600">
            Most Linux distributions come with Python pre-installed. To install or upgrade manually, use the
            package manager. For example, on Debian/Ubuntu:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`sudo apt update
sudo apt install python3`}
          </pre>
          <p className="mt-2 text-lg text-gray-600">
            Verify the installation with:
          </p>
          <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
{`python3 --version`}
          </pre>
        </div>

        {/* Final Note */}
        <div className="mt-6">
          <p className="text-lg text-gray-600">
            Once Python is installed, you can start writing and running Python programs using the terminal, an IDE,
            or a code editor like VS Code or PyCharm.
          </p>
        </div>

        {/* CTA */}
     
      </div>
    </div>
  );
};

export default Installation;
