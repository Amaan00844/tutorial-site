"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

function Expressfileuploads() {
  useReadingTracker("expressfileupload");
  return (
    <div className="p-6 ml-72">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        File Uploads in Express.js
      </h1>

      {/* What is File Upload */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            What is File Upload?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            File uploads allow users to send files from their device to the
            server. This is commonly used for forms, profile pictures, document
            uploads, etc.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Express.js makes it easy to handle file uploads with the help of
            middleware like <code>multer</code>.
          </p>
        </section>

        {/* Installing Dependencies */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Installing Dependencies
          </h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-yellow-600">{`npm install multer`}</code>
          </pre>
        </section>

        {/* Basic File Upload Setup */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Basic File Upload Setup
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Here's how you can create a basic file upload endpoint in Express:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-yellow-600">
              {`const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // Contains file details
  res.send('File uploaded successfully');
});`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            In this example, the file is uploaded to a folder called{" "}
            <code>uploads/</code> on your server.
          </p>
        </section>

        {/* Multiple File Upload */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Multiple File Upload
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            You can also handle multiple files using <code>multer</code>. Here's
            how to upload multiple files at once:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-yellow-600">
              {`app.post('/uploadMultiple', upload.array('files', 10), (req, res) => {
  console.log(req.files); // Contains array of files
  res.send('Multiple files uploaded successfully');
});`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            In this case, the client can upload up to 10 files, and they will be
            stored in the <code>uploads/</code> folder.
          </p>
        </section>

        {/* Custom Storage Locations */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Custom Storage Locations
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            You can customize the location where files are saved and the file
            naming convention by configuring <code>multer</code>'s storage
            engine:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-yellow-600">
              {`const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.post('/uploadCustom', upload.single('file'), (req, res) => {
  res.send('Custom file uploaded successfully');
});`}
            </code>
          </pre>
        </section>

        {/* Handling File Type and Size */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            File Type and Size Validation
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            You can also validate the file type and size before accepting the
            upload. For example, allowing only image files with a maximum size
            of 5MB:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-yellow-600">
              {`const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image file'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

app.post('/uploadImage', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully');
});`}
            </code>
          </pre>
          <p className="text-lg text-gray-800 mb-4">
            Here, only image files are allowed, and the size is limited to 5MB.
          </p>
        </section>

        {/* Error Handling */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Error Handling
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            It's important to handle errors such as invalid file types, size
            limits, or server errors. Here's an example of how to handle file
            upload errors:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-yellow-600">
              {`app.post('/uploadError', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
}, (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send('Error during file upload');
  } else {
    res.status(500).send('Server error');
  }
});`}
            </code>
          </pre>
        </section>

        {/* Best Practices */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Best Practices for File Uploads
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Ensure proper file validation (type, size, etc.) to prevent
              malicious uploads.
            </li>
            <li>
              Always store uploaded files in a directory outside of your public
              server directory to prevent direct access.
            </li>
            <li>
              Use unique filenames or UUIDs to prevent filename collisions.
            </li>
            <li>
              Clean up old files regularly to avoid clutter and free up space on
              the server.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Expressfileuploads;
