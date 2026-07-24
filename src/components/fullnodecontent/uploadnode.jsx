"use client";

const FileUploadPage = () => {
  return (
    <div className="p-8  mx-auto text-black space-y-6">
      <div className="bg-white  max-w-4xl p-8 rounded-lg shadow-xl space-y-6 ml-80">
        <h1 className="text-4xl font-bold">Node.js File Upload</h1>
        <p className="text-lg">
          File uploading in Node.js is commonly handled using third-party
          middleware like <code>multer</code>. It helps process{" "}
          <code>multipart/form-data</code>, which is used for uploading files.
          In this guide, we’ll walk through the steps of setting up file upload
          functionality using <code>multer</code> with Express.js.
        </p>

        <h2 className="text-2xl font-semibold">
          {" "}
          Step 1: Install <code>multer</code>
        </h2>
        <p>
          The first step is to install the <code>multer</code> package, which is
          a middleware for handling file uploads in Node.js.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>npm install multer</code>
        </pre>

        <h2 className="text-2xl font-semibold">
          {" "}
          Step 2: Create an Upload Endpoint
        </h2>
        <p>
          Next, we’ll create an endpoint that will handle the file upload
          process. Here's how to set up an Express route to handle file uploads:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // upload destination
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('myfile'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server running on https://skill2future.code4bharat.com');
});`}
          </code>
        </pre>

        <p>
          In this example:
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>express</strong>: The Express.js framework is used to
              create the server and handle routes.
            </li>
            <li>
              <strong>multer</strong>: The <code>multer</code> middleware is
              imported to handle file uploads.
            </li>
            <li>
              <strong>path</strong>: The <code>path</code> module is used to
              manipulate file paths, especially for appending file extensions.
            </li>
          </ul>
        </p>

        <p>
          <strong>Storage Configuration:</strong> The{" "}
          <code>multer.diskStorage</code> function allows us to configure two
          things:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>destination</strong>: Specifies the folder where the
            uploaded files will be saved. In this case, files will be uploaded
            to the <code>uploads/</code> directory.
          </li>
          <li>
            <strong>filename</strong>: Defines the naming strategy for uploaded
            files. Here, we're appending the current timestamp to the file’s
            original extension to create a unique filename.
          </li>
        </ul>

        <p>
          <strong>Upload Endpoint:</strong> The{" "}
          <code>app.post('/upload', upload.single('myfile'), ...)</code> route
          is where the file upload is handled. The{" "}
          <code>upload.single('myfile')</code> middleware processes the file
          from the client and stores it according to the configuration we
          defined. The <code>myfile</code> field corresponds to the name
          attribute of the file input in the form. After the file is uploaded, a
          success message is sent as a response.
        </p>

        <h2 className="text-2xl font-semibold"> Testing the Upload</h2>
        <p>Once the server is set up, we can test the upload functionality:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Using Postman:</strong> You can use Postman or similar tools
            to test the file upload. Ensure you set the HTTP method to{" "}
            <code>POST</code> and use the <code>multipart/form-data</code>{" "}
            encoding in the body. This encoding is necessary to upload files via
            HTTP.
          </li>
          <li>
            <strong>HTML Form:</strong> Alternatively, you can create an HTML
            form with the <code>enctype="multipart/form-data"</code> attribute
            to allow file uploads from a web page.
          </li>
          <li>
            <strong>Uploads Directory:</strong> Uploaded files will be stored in
            the <code>uploads/</code> directory, which should be created
            beforehand in your project structure.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold"> Summary</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use <code>multer</code> middleware to handle file uploads in Node.js
            with Express.
          </li>
          <li>
            Configure the storage destination and filename strategy to control
            where and how the files are stored.
          </li>
          <li>
            Support both single file uploads using{" "}
            <code>upload.single('fieldName')</code> or multiple files using{" "}
            <code>upload.array('fieldName')</code>.
          </li>
        </ul>
        <p>
          This approach to file uploading in Node.js is efficient and simple to
          implement. By using <code>multer</code>, you can easily handle
          different types of file uploads, whether it’s for a single file or
          multiple files.
        </p>
      </div>
    </div>
  );
};

export default FileUploadPage;
