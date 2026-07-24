'use client';

import { useEffect, useState } from 'react';
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Link from 'next/link';

export default function TutorialPage() {
  const tutorials = [
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-green-600 w-12 h-12 group-hover:text-white" />,
      link: '/firstmongo',
    },
    {
      name: 'Express',
      icon: <SiExpress className="text-black w-12 h-12 group-hover:text-white" />,
      link: '/express',
    },
    {
      name: 'React',
      icon: <SiReact className="text-blue-500 w-12 h-12 group-hover:text-white" />,
      link: '/react',
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs className="text-green-700 w-12 h-12 group-hover:text-white" />,
      link: '/NodeCard',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-yellow-400 w-12 h-12 group-hover:text-white" />,
      link: '/javascript',
    },
    {
      name: 'Python',
      icon: <SiPython className="text-blue-700 w-12 h-12 group-hover:text-white" />,
      link: '/firstPython',
    },
    {
      name: 'Java',
      icon: <FaJava className="text-red-600 w-12 h-12 group-hover:text-white" />,
      link: '/firstJava',
    },
    {
      name: 'PHP',
      icon: <SiPhp className="text-indigo-600 w-12 h-12 group-hover:text-white" />,
      link: '/php',
    },
    {
      name: 'HTML',
      icon: <SiHtml5 className="text-orange-500 w-12 h-12 group-hover:text-white" />,
      link: '/firstHtml',
    },
    {
      name: 'CSS',
      icon: <SiCss3 className="text-blue-600 w-12 h-12 group-hover:text-white" />,
      link: '/Csscard',
    },
  ];

  const iconList = [
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiPython,
    FaJava,
    SiPhp,
    SiHtml5,
    SiCss3,
  ];

  const [bgIcons, setBgIcons] = useState([]);

  useEffect(() => {
    const generateRandomIcons = () => {
      const generated = Array.from({ length: 30 }, (_, i) => {
        const Icon = iconList[Math.floor(Math.random() * iconList.length)];
        return {
          id: i,
          Icon,
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            position: 'absolute',
            opacity: 0.1,
            transition: 'opacity 1s ease-in-out',
          },
        };
      });
      setBgIcons(generated);
    };
    generateRandomIcons();
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-10 bg-white flex flex-col items-center overflow-hidden">
      {/* Random background icons */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {bgIcons.map(({ id, Icon, style }) => (
          <Icon key={id} className="text-gray-500" style={style} />
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-8 text-blue-700 z-10">Tutorials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols gap-8 max-w-5xl w-full px-4 z-10">
        {tutorials.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-col items-center justify-center p-6 rounded-xl shadow hover:shadow-md transition-all text-center hover:scale-105 bg-white bg-opacity-90 hover:bg-blue-600 group"
          >
            {item.icon}
            <p className="mt-3 text-lg font-semibold text-gray-700 group-hover:text-white">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}