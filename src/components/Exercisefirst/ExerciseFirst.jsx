'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation'; // For app directory

const points = [
  'Take on challenges that truly matter.',
  'Choose by difficulty level.',
  'Explore 30+ languages and technologies.',
  'Use AI Tutor for smart tips.',
];

const ExerciseFirst = () => {
    const router = useRouter();

    const handleStartPractice = () => {
      router.push('/exerciseFirst'); // This should match your actual route
    };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-blue-500 font-semibold text-xl">Real world Problems</h3>
          <h2 className="text-3xl font-bold text-gray-900">Practice to Solve Real World Problems</h2>

          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-blue-500 w-5 h-5 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button 
          onClick={handleStartPractice}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
            Start Practice
          </button>
        </div>

        {/* Right Side Video */}
        <div className="w-full lg:w-1/2 flex justify-center ">

            <img
              src="/exercisevedio.png"
              alt="Difficulty Levels"
              className="rounded-xl"
            />
          
        </div>
      </div>
    </section>
  );
};

export default ExerciseFirst;
