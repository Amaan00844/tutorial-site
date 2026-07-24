"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpInstallation() {
  useReadingTracker("php-installation");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP Installation
      </h1>

      <div className="bg-white p-6  max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#DDA0DD] mb-4">
          How to Install PHP
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            To start using PHP, you need a server environment that can process
            PHP files. Here are the main ways to set up PHP:
          </p>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">
            1. Install a Web Server with PHP
          </h3>
          <p>Popular options include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>XAMPP</strong> - Complete package for Windows, Linux, and
              macOS
            </li>
            <li>
              <strong>WAMP</strong> - Windows-specific package
            </li>
            <li>
              <strong>MAMP</strong> - macOS-specific package
            </li>
            <li>
              <strong>LAMP</strong> - Linux stack (Linux, Apache, MySQL, PHP)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">
            2. Install PHP Separately
          </h3>
          <p>For advanced users:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              # On Ubuntu/Debian\n sudo apt install php\n\n # On CentOS/RHEL\n
              sudo yum install php
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">
            3. Cloud Development Environments
          </h3>
          <p>Options for cloud-based PHP development:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud9 IDE</li>
            <li>GitPod</li>
            <li>Replit</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#DDA0DD]">
            Verifying Your Installation
          </h3>
          <p>Create a test.php file with this content:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#DDA0DD]">
              {`<?php
  phpinfo();
?>`}
            </code>
          </pre>
          <p>
            Access it via your web browser to see PHP configuration information.
          </p>
        </div>
      </div>
    </div>
  );
}
