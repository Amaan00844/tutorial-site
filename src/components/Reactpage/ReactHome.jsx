"use client";
import useReadingTracker from "@/components/useReadingTracker";

export default function ReactHome() {
  useReadingTracker("reacthome");
  return (
    <>
      {" "}
      <div className="p-6 ml-80">
        <img
          src="/roadmaps/react.jpg"
          alt="React"
          className="w-full max-w-8xl rounded-lg mb-6 mx-auto"
        />
      </div>
    </>
  );
}
