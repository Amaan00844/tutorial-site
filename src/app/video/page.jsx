'use client';
import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import useReadingTracker from "@/components/useReadingTracker";

export default function CourseCards() {
  const scrollRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(null);
  const videoRef = useRef();
  const [videoTime, setVideoTime] = useState(0); // Track video time

  useReadingTracker(selectedVideoTitle);
  
  const checkScrollPosition = () => {
    const { current } = scrollRef;
    if (current) {
      setShowLeftArrow(current.scrollLeft > 0);
      setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleVideoProgress = (event) => {
    const currentTime = event.target.getCurrentTime();
    setVideoTime(currentTime);
  };

  const handleCardClick = (course) => {
    const urlParams = new URL(course.youtubeLink).searchParams;
    const listId = urlParams.get("list");
    setSelectedVideoTitle(`${course.title} Video Tutorial`)
    setSelectedVideo({
      url: listId
        ? `https://www.youtube.com/embed/videoseries?list=${listId}`
        : course.youtubeLink.replace("watch?v=", "embed/"),
      title: course.title,
    });
  };

  const handleVideoEnd = () => {
    // Here you could save the video time or do something when the video ends
    console.log("Video watched for", videoTime, "seconds.");
    // You could save the data to localStorage, a database, etc.
  };

  const handlePlayerReady = (event) => {
    // This will ensure the player is ready to handle events
    event.target.addEventListener('onStateChange', function (e) {
      if (e.data === YT.PlayerState.ENDED) {
        handleVideoEnd();
      }
    });
  };

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedVideo]);

 
  const courseData = [
    {
      title: "Python with Beginner DSA",
      subtitle: "PYTHON FOR BEGINNERS",
      description:
        "Learn the basics of Python and data structures. Use practice modules to boost your coding and problem-solving skills.",
      rating: "4.6 (103.4k+)",
      courses: 6,
      learners: "451k+ learners",
      image: "/video-imgs/python.png",
      youtubeLink: "https://www.youtube.com/watch?v=t2_Q2BRzeEE&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
    },
    {
      title: "HTML",
      subtitle: "HYPER TEXT MARKUP LANGUAGE",
      description:
        "Learn HTML to structure web pages using elements like headings, paragraphs, links, images, and forms.",
      rating: "4.6 (72.9k+)",
      courses: 23,
      learners: "125k+ learners",
      image: "/video-imgs/html.png",
      youtubeLink: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
    },
    {
      title: "CSS",
      subtitle: " Cascading Style Sheets.",
      description:
        "Master CSS to style and layout web pages with colors, fonts, spacing, and responsive design techniques.",
      rating: "4.7 (94k+)",
      courses: 4,
      learners: "178k+ learners",
      image: "/video-imgs/css.png",
      youtubeLink: "https://www.youtube.com/watch?v=ESnrn1kAD4E",
    },
    {
      title: "MongoDB for Beginners",
      subtitle: " DATABASE",
      description:
        "Learn how to model data, create documents, and build robust NoSQL backends using MongoDB Atlas.",
      rating: "4.5 (40k+)",
      courses: 5,
      learners: "85k+ learners",
      image: "/video-imgs/mongo.png",
      youtubeLink: "https://www.youtube.com/watch?v=J6mDkcqU_ZE",
    },
    {
      title: "Express.js Crash Course",
      subtitle: "WEB FRAMEWORK",
      description:
        "Build RESTful APIs and backend apps using Express.js, a minimal and flexible Node.js framework.",
      rating: "4.4 (32k+)",
      courses: 3,
      learners: "68k+ learners",
      image: "/video-imgs/express.png",
      youtubeLink: "https://www.youtube.com/watch?v=7H_QH9nipNs",
    },
    {
      title: "Node.js Fundamentals",
      subtitle: "Node js",
      description:
        "Understand the core of Node.js, event-driven architecture, modules, and backend development.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/node.png",
      youtubeLink: "https://www.youtube.com/watch?v=AZzV3wZCvI4&list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3",
    },
    
// second

    {
      title: "Javascript Fundamentals",
      subtitle: "JAVASCRIPT",
      description:
      "Master the fundamentals of JavaScript, including variables, functions, DOM manipulation, and asynchronous programming.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/js.png",
      youtubeLink: "https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW",
    },
    ,
    {
      title: "React Fundamentals",
      subtitle: "React",
      description:
       "Learn React's component-based architecture, state management, hooks, and building dynamic user interfaces.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/react.png",
      youtubeLink: "https://www.youtube.com/watch?v=4z9bvgTlxKw&list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1",
    },
    ,
    {
      title: "PHP Fundamentals",
      subtitle: "PHP",
      description:
       "Explore PHP for server-side scripting, form handling, database interaction, and dynamic web development.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/php.png",
      youtubeLink: "https://www.youtube.com/watch?v=D4DXbRsQAOA&list=PL8p2I9GklV44cSOlKzB_0TrzxEgwfvicK",
    },

    //third
    {
      title: "Java Fundamentals",
      subtitle: "Java",
      description:
      "Understand Java's object-oriented principles, syntax, multithreading, and its use in building robust applications.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/java.png",
      youtubeLink: "https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
    },

    {
      title: "SQL Fundamentals",
      subtitle: "SQL",
      description:
       "Learn SQL to manage, query, and manipulate relational databases using commands like SELECT, INSERT, and JOIN.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/sql.png",
      youtubeLink: "https://www.youtube.com/watch?v=323H_mOOWQ4&list=PLxCzCOWd7aiFbom4rYyl5qROgqYuCuAPD",
    },
    {
      title: "MySQL Fundamentals",
      subtitle: "MYSQL",
      description:
     "Learn MySQL, a popular relational database system, to efficiently store, retrieve, and manage structured data.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/mysql.png",
      youtubeLink: "https://www.youtube.com/watch?v=KKgN_w71x3E&list=PLjVLYmrlmjGeyCPgdHL2vWmEGKxcpsC0E",
    },
    {
      title: "Nextjs full course ",
      subtitle: "Nextjs",
      description:
      "Discover Next.js for building fast, scalable React applications with features like server-side rendering and routing.",
      rating: "4.6 (52k+)",
      courses: 6,
      learners: "105k+ learners",
      image: "/video-imgs/nextjs.png",
      youtubeLink: "https://www.youtube.com/watch?v=eaQc7vbV4po",
    },

  ];

  return (
    <div className="w-full">
      <div className="flex justify-center py-6">
        <h2 className="text-xl font-semibold text-gray-800">Featured Courses</h2>
      </div>

      <div className="relative py-4 px-4 cursor-pointer">
        {showLeftArrow && (
          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white text-gray-700 p-2 shadow-md rounded-full z-10 hover:bg-gray-100"
            onClick={() => scroll("left")}
          >
            <FaArrowLeft size={20} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-scroll flex gap-6 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {courseData.map((course, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white border border-gray-100 shadow-md hover:shadow-xl transform transition-all duration-300 rounded-xl p-4"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{course.subtitle}</p>
              <p className="text-sm text-gray-700 mb-2">{course.description}</p>
              <p className="text-sm font-semibold text-blue-600">{course.rating}</p>
              <p className="text-xs text-gray-500">{course.learners}</p>
              <button
                onClick={() => handleCardClick(course)}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
              >
                Watch Course
              </button>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white text-gray-700 p-2 shadow-md rounded-full z-10 hover:bg-gray-100"
            onClick={() => scroll("right")}
          >
            <FaArrowRight size={20} />
          </button>
        )}
      </div>

      {selectedVideo && (
        <div className="w-full px-15 flex justify-center items-center" ref={videoRef}>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-[700px] h-[400px]"
              src={selectedVideo.url}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="youtube-player"
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 bg-white rounded-full shadow p-1 text-sm text-gray-600 hover:bg-red-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
