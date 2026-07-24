"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const MediaVedio = () => {
  useReadingTracker("htmlVedio");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Video Tag
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            The <code>{`<video>`}</code> tag in HTML5 is used to embed video
            content on a webpage. It supports multiple formats and provides
            built-in controls like play, pause, and volume.
          </p>

          {/* Basic Usage */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Basic Example
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's how to embed a video using the <code>{`<video>`}</code>{" "}
              tag:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`}
            </pre>

            <div className="mt-4 border border-gray-200 p-4 rounded-lg">
              {/* <video width="100%" height="auto" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </div>

          {/* Attributes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Common Attributes
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>src:</strong> Specifies the path to the video file.
              </li>
              <li>
                <strong>controls:</strong> Displays video controls (play, pause,
                etc.).
              </li>
              <li>
                <strong>autoplay:</strong> Starts playing the video
                automatically (muted is often required).
              </li>
              <li>
                <strong>loop:</strong> Makes the video play repeatedly.
              </li>
              <li>
                <strong>muted:</strong> Mutes the audio by default.
              </li>
              <li>
                <strong>poster:</strong> Shows an image before the video plays.
              </li>
            </ul>

            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
              {`<video src="movie.mp4" controls autoplay muted loop poster="thumbnail.jpg"></video>`}
            </pre>
          </div>

          {/* Supported Formats */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Supported Formats
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HTML5 video typically supports:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>.mp4</code> (H.264 + AAC) — Widely supported
              </li>
              <li>
                <code>.webm</code> — Good quality, smaller size
              </li>
              <li>
                <code>.ogg</code> — Older, less common
              </li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Best Practices
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                Always include fallback text inside the <code>{`<video>`}</code>{" "}
                tag.
              </li>
              <li>
                Use multiple <code>{`<source>`}</code> tags to ensure
                compatibility.
              </li>
              <li>
                Keep videos optimized for fast loading (use compressed formats).
              </li>
              <li>Consider accessibility (e.g., captions or transcripts).</li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default MediaVedio;
