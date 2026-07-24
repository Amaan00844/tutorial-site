"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const ImageHtml = () => {
  useReadingTracker("htmlImage");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Image Tag
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            The HTML <code>{`<img>`}</code> tag is used to embed images in a web
            page. Images help make content more engaging and visually appealing.
            The <code>{`<img>`}</code> tag is self-closing and requires
            attributes to function properly.
          </p>

          {/* Basic Example */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Basic Usage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's an example of how to embed an image using the{" "}
              <code>{`<img>`}</code> tag:
            </p>
            <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
              {`<img src="https://via.placeholder.com/300" alt="Sample Image" />`}
            </pre>

            {/* <div className="mt-4 border border-gray-200 p-4 rounded-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Sample Image"
                className="rounded-md shadow-md"
              />
            </div> */}
          </div>

          {/* Common Attributes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Common Attributes
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>src:</strong> The path to the image file (URL or local).
              </li>
              <li>
                <strong>alt:</strong> Alternative text for screen readers or if
                the image fails to load.
              </li>
              <li>
                <strong>width:</strong> Specifies the width of the image.
              </li>
              <li>
                <strong>height:</strong> Specifies the height of the image.
              </li>
              <li>
                <strong>title:</strong> Shows tooltip text when hovered.
              </li>
            </ul>

            <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg mt-4">
              {`<img src="photo.jpg" alt="Landscape" width="500" height="300" title="Nature" />`}
            </pre>
          </div>

          {/* Responsive Images */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Responsive Images
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              To make images responsive, use CSS or the <code>style</code>{" "}
              attribute to set <code>max-width: 100%</code> and{" "}
              <code>height: auto</code>:
            </p>
            <pre className="p-4 bg-gray-100 text-blue-600 rounded-lg">
              {`<img src="image.jpg" alt="Responsive" style={{ maxWidth: '100%', height: 'auto' }} />`}
            </pre>
          </div>

          {/* Accessibility Tips */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Accessibility Tips
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Always include descriptive <code>alt</code> text for screen
                readers.
              </li>
              <li>
                If the image is purely decorative, use <code>alt=""</code>.
              </li>
              <li>Use semantic HTML and labels for context when needed.</li>
            </ul>
          </div>

          {/* Image Formats */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Supported Image Formats
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>JPG/JPEG:</strong> Good for photographs.
              </li>
              <li>
                <strong>PNG:</strong> Supports transparency, good for logos.
              </li>
              <li>
                <strong>GIF:</strong> Supports animation.
              </li>
              <li>
                <strong>SVG:</strong> Scalable vector images for icons and
                illustrations.
              </li>
              <li>
                <strong>WebP:</strong> Modern format for fast-loading images.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default ImageHtml;
