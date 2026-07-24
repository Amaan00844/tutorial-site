'use client';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ishu Rajora',
    title: 'IET Lucknow',
    image: '/user.png',
    text: 'SkillBridge transformed my thinking. It improved my problem-solving, introduced new algorithms, and taught me to optimize...',
  },
  {
    name: 'Sanat Kumar Dubey',
    title: 'Capgemini',
    image: '/user.png',
    text: 'I\'ve been practicing on CodeChef since 2020—it was my first contest platform and helped me get comfortable...',
  },
  {
    name: 'Aman Tripathi',
    title: 'IIIT Bhagalpur',
    image: '/user.png',
    text: 'SkillBridge sparked my love for competitive programming through contests, challenges, and a great community...',
  },
  {
    name: 'Aman Sonkar',
    title: 'Dell',
    image: '/user.png',
    text: 'SkillBridge boosted my confidence by improving my logic, problem-solving, and time management...',
  },
  {
    name: 'Shrival Kumar',
    title: 'Scaler School of Technology',
    image: '/user.png',
    text: 'SkillBridge stands out as the best platform for DSA and competitive programming...',
  },
  {
    name: 'Ruchit Hiteshbhai Jagodara',
    title: 'IIT Gandhinagar',
    image: '/user.png',
    text: 'SkillBridge helped me prepare for interviews with structured DSA problems and quizzes...',
  },
  {
    name: 'Satyam Kumar',
    title: 'Mentor & Developer',
    image: '/user.png',
    text: 'SkillBridge has influenced my programming experience by improving problem solving and algorithmic thinking...',
  },
  {
    name: 'Kushagra Saxena',
    title: 'IIT Ranchi',
    image: '/user.png',
    text: 'Through SkillBridge, I have gained a strong hold on DSA topics and also the contests have been very beneficial...',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-blue-50 py-16 px-6 cursor-pointer">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Users Say</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-5xl text-blue-400 mb-4 leading-none">“</div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">{t.text}</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
