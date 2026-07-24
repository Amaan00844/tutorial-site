"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const MediaAudio = () => {
  useReadingTracker("htmlAudio");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            HTML Audio Tag
          </h1>

          {/* Introduction */}
          <p className="mt-4 text-lg text-gray-600">
            The <code>{`<audio>`}</code> tag in HTML5 is used to embed sound or
            music content on a webpage. It supports multiple formats like MP3,
            Ogg, and WebM. You can also control audio playback using the
            built-in audio controls.
          </p>

          {/* Basic Usage */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Basic Example
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's how to embed an audio file using the{" "}
              <code>{`<audio>`}</code> tag:
            </p>
            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg">
              {`<audio controls>
  <source src="audio.mp3" type="audio/mp3" />
  Your browser does not support the audio tag.
</audio>`}
            </pre>

            <div className="mt-4 border border-gray-200 p-4 rounded-lg">
              {/* <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio> */}
            </div>
          </div>

          {/* Attributes */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Common Attributes
            </h2>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>src:</strong> Specifies the path to the audio file.
              </li>
              <li>
                <strong>controls:</strong> Displays audio controls (play, pause,
                volume, etc.).
              </li>
              <li>
                <strong>autoplay:</strong> Automatically starts playing the
                audio when the page loads.
              </li>
              <li>
                <strong>loop:</strong> Loops the audio when it finishes.
              </li>
              <li>
                <strong>muted:</strong> Mutes the audio by default.
              </li>
              <li>
                <strong>preload:</strong> Specifies whether the audio should be
                loaded when the page loads. Options are <code>auto</code>,{" "}
                <code>metadata</code>, and <code>none</code>.
              </li>
            </ul>

            <pre className="p-4 bg-gray-100 text-[#547475] rounded-lg mt-4">
              {`<audio src="audio.mp3" controls autoplay loop muted preload="auto"></audio>`}
            </pre>
          </div>

          {/* Supported Formats */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Supported Formats
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HTML5 audio typically supports the following formats:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <code>.mp3</code> — Most commonly used format for audio.
              </li>
              <li>
                <code>.ogg</code> — A good open-source alternative.
              </li>
              <li>
                <code>.webm</code> — Another open-source format commonly used
                for web-based audio.
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
                Always provide fallback text inside the <code>{`<audio>`}</code>{" "}
                tag.
              </li>
              <li>
                Use multiple <code>{`<source>`}</code> tags to support different
                formats for compatibility.
              </li>
              <li>
                Keep audio files optimized for web use to reduce loading times.
              </li>
              <li>
                Consider accessibility by providing captions or transcripts for
                the audio content.
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>
      </div>
    </>
  );
};

export default MediaAudio;
