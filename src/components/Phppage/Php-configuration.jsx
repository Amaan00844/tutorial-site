"use client";

import useReadingTracker from "@/components/useReadingTracker";

export default function PhpConfiguration() {
  useReadingTracker("php-configuration");
  return (
    <div className="p-6 ml-80">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        PHP Configuration
      </h1>

      <div className="bg-white p-6 max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#532353] mb-4">
          php.ini Settings
        </h2>

        <div className="text-gray-800 space-y-6 text-md leading-relaxed">
          <p>
            The `php.ini` file is a crucial part of PHP's configuration. It
            controls the core behavior of PHP, including error reporting, file
            uploads, security settings, and session handling. Proper
            configuration of this file is essential for ensuring the
            performance, security, and reliability of your PHP-based
            application.
          </p>

          <h3 className="text-xl font-semibold text-[#632b63]">
            Important Settings in php.ini
          </h3>
          <p>
            Here are some of the most commonly used settings in the `php.ini`
            file, along with explanations of what each setting does:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#531a53]">
              {`; Error reporting
error_reporting = E_ALL
display_errors = Off
log_errors = On

; File uploads
file_uploads = On
upload_max_filesize = 2M
max_file_uploads = 20

; Security
allow_url_fopen = Off
allow_url_include = Off
expose_php = Off

; Session
session.cookie_httponly = 1
session.cookie_secure = 1
session.use_strict_mode = 1`}
            </code>
          </pre>
          <p>
            **Error Reporting**: Controls what types of errors are reported and
            how they're displayed: - `error_reporting = E_ALL`: Reports all
            errors, warnings, and notices. - `display_errors = Off`: Hides
            errors from being displayed on the webpage, making it secure for
            production. - `log_errors = On`: Ensures errors are logged to a file
            rather than displayed to users. **File Uploads**: Configures file
            upload limits and settings: - `file_uploads = On`: Allows file
            uploads. - `upload_max_filesize = 2M`: Limits file upload size to
            2MB. - `max_file_uploads = 20`: Limits the number of file uploads in
            a single request to 20 files. **Security Settings**: Important for
            ensuring that your PHP application is secure: - `allow_url_fopen =
            Off`: Disables opening remote files via URLs to prevent external
            file inclusion attacks. - `allow_url_include = Off`: Disables
            including remote files in PHP scripts, which helps avoid security
            vulnerabilities. - `expose_php = Off`: Prevents PHP from disclosing
            information about the server by hiding the PHP version in HTTP
            headers. **Session Settings**: Controls session security: -
            `session.cookie_httponly = 1`: Ensures that cookies are accessible
            only through the HTTP protocol, reducing the risk of XSS attacks. -
            `session.cookie_secure = 1`: Ensures that session cookies are only
            transmitted over secure (HTTPS) connections. -
            `session.use_strict_mode = 1`: Enforces strict session ID validation
            to prevent session fixation attacks.
          </p>

          <h3 className="text-xl font-semibold text-[#5f225f]">
            Runtime Configuration
          </h3>
          <p>
            PHP allows you to modify configuration settings at runtime using the
            `ini_set()` function. This can be useful when you need to change
            settings dynamically for a specific script or session, without
            modifying the `php.ini` file directly.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#5e235e]">
              {`<?php
  // Set configuration at runtime
  ini_set('display_errors', 0); // Disable displaying errors on screen (useful in production).
  ini_set('log_errors', 1); // Enable logging of errors.
  ini_set('error_log', '/var/log/php_errors.log'); // Specify the log file path for errors.
?>`}
            </code>
          </pre>
          <p>
            **`ini_set('display_errors', 0)`**: Turns off the display of errors
            on the screen, which is recommended for production environments.
            Instead of showing errors to users, they will be logged or hidden.
            **`ini_set('log_errors', 1)`**: Ensures that any errors are logged,
            even though they won't be displayed on the webpage. This helps in
            tracking errors for debugging without exposing them to the user.
            **`ini_set('error_log', '/var/log/php_errors.log')`**: Specifies the
            location where PHP should write the error log file. It is useful for
            troubleshooting and monitoring errors on a production server.
          </p>

          <h3 className="text-xl font-semibold text-[#532353]">
            Additional Configuration Options
          </h3>
          <p>
            PHP's configuration options are vast and can be tailored to meet the
            specific needs of your application. Some additional configuration
            settings include:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#531a53]">
              {`; Timezone Settings
date.timezone = "America/New_York"

; Memory Limit
memory_limit = 128M

; Max Execution Time
max_execution_time = 30

; Time Zone Configuration
date.timezone = "UTC"`}
            </code>
          </pre>
          <p>
            **Timezone Settings**: You can set the default timezone for your PHP
            scripts using the `date.timezone` directive. It helps ensure that
            date and time functions behave as expected. **Memory Limit**: The
            `memory_limit` directive defines the maximum amount of memory a PHP
            script can consume. Setting this appropriately helps prevent
            memory-related crashes in scripts with high memory usage. **Max
            Execution Time**: The `max_execution_time` directive sets the
            maximum time (in seconds) that a PHP script can run before it is
            terminated. This is useful for preventing scripts from running
            indefinitely and consuming server resources. **Time Zone
            Configuration**: Setting the correct timezone is crucial for proper
            handling of date and time functions. Use the `date.timezone`
            directive to set it according to your application's region.
          </p>

          <h3 className="text-xl font-semibold text-[#532353]">
            Working with Custom PHP Configurations
          </h3>
          <p>
            You may sometimes need to create custom configurations for specific
            projects. This can be achieved by creating a custom configuration
            file, such as `custom.ini`, and specifying it in your web server
            configuration (e.g., Apache or Nginx). Additionally, you can
            override settings at runtime or in specific directory contexts.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-[#531a53]">
              {`# In Apache's .htaccess file
php_value display_errors 0
php_value max_execution_time 60

# In nginx.conf (for Nginx web server)
fastcgi_param PHP_VALUE "display_errors=0; max_execution_time=60";`}
            </code>
          </pre>
          <p>
            The example above shows how you can override PHP configuration
            settings in web server configuration files. For Apache, you can use
            `.htaccess` files, while for Nginx, you use the `fastcgi_param`
            directive to set PHP values.
          </p>
        </div>
      </div>
    </div>
  );
}
