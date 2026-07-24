"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

export default function ExpressHome() {
  useReadingTracker("expresshome");
  return (
    <>
      <div className="p-6 ml-80">
        <img
          src="/roadmaps/express1.jpg"
          alt="Express"
          className="w-full max-w-8xl rounded-lg mb-6 mx-auto"
        />
      </div>
    </>
  );
}
