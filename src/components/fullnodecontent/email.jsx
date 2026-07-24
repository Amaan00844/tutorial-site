'use client';

const EmailModulePage = () => {
  return (
    <div className="p-8 mx-auto text-black space-y-6">
      <div className="bg-white  max-w-5xl   p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js Email Module</h1>
        <p className="text-lg">
          Node.js doesn't have a built-in email module, but you can easily send emails by using third-party modules like <code>nodemailer</code>. This package simplifies the process of sending emails from your Node.js application.
        </p>

        <h2 className="text-2xl font-semibold">Installing Nodemailer</h2>
        <p className="text-lg">
          First, you need to install <code>nodemailer</code> using npm (Node Package Manager). This package will enable you to send emails from within your application.
        </p>
        <p className="text-lg">
          To install Nodemailer, run the following command in your project directory:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install nodemailer</code>
        </pre>

        <h2 className="text-2xl font-semibold">Sending an Email</h2>
        <p className="text-lg">
          Here's a basic example of how to send an email using Nodemailer and a Gmail account:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const nodemailer = require('nodemailer');

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Gmail as the email service
  auth: {
    user: 'your_email@gmail.com', // Your Gmail address
    pass: 'your_password_or_app_password', // Your Gmail password or app password
  },
});

// Email options
const mailOptions = {
  from: 'your_email@gmail.com', // Sender email address
  to: 'recipient@example.com', // Recipient email address
  subject: 'Test Email from Node.js', // Subject of the email
  text: 'Hello! This email was sent from Node.js using Nodemailer.', // Plain text body of the email
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);  // Logs error if there is any
  }
  console.log('Email sent:', info.response);  // Logs confirmation once email is sent
});`}
          </code>
        </pre>
        <p className="text-sm text-red-600">
          ⚠️ For Gmail, you may need to enable "Less secure app access" or use an App Password if 2FA is enabled. This is required as Gmail blocks sign-ins from apps it considers less secure.
        </p>

        <h2 className="text-2xl font-semibold">Using HTML Content</h2>
        <p className="text-lg">
          In addition to sending plain text emails, you can also send rich HTML content. This is useful for sending formatted emails with headings, paragraphs, and other HTML elements.
        </p>
        <p className="text-lg">
          To send HTML emails, you can replace the <code>text</code> property in the <code>mailOptions</code> object with an <code>html</code> property.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Welcome Email',
  html: '<h1>Welcome!</h1><p>This is an HTML email from Node.js.</p>', // HTML content
};`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold">📦 Summary</h2>
        <p className="text-lg">
          To summarize, here’s how you can send emails from your Node.js application:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>nodemailer</code> is the package used to send emails in Node.js.</li>
          <li>To start, create a transporter object using the <code>createTransport</code> method. This will configure the email service (such as Gmail) and your login credentials (email and password or app password).</li>
          <li>Next, configure the email options, which include the sender's email address (<code>from</code>), recipient's email address (<code>to</code>), subject (<code>subject</code>), and the content of the email (either plain text with <code>text</code> or HTML content with <code>html</code>).</li>
          <li>Finally, use the <code>transporter.sendMail()</code> method to send the email. This method takes the email options and a callback function that handles the response.</li>
          <li>Be sure to use App Passwords or enable "Less secure app access" in Gmail to avoid authentication issues.</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailModulePage;
