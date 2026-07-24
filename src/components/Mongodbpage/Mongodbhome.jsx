"use client";
import useReadingTracker from "@/components/useReadingTracker";
import Link from "next/link";

const Mongodbhome = () => {
  useReadingTracker("indextypemongo");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800">
            MongoDB Tutorial
          </h1>

          {/* Introduction Section */}
          <p className="mt-4 text-lg text-gray-600">
            MongoDB is a document database. It stores data in a type of JSON
            format called BSON. MongoDB provides a flexible and scalable
            approach to managing data.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            If you are unfamiliar with JSON, check out our{" "}
            <Link href="/json" className="text-blue-500">
              JSON tutorial
            </Link>
            .
          </p>

          <p className="mt-4 text-lg text-gray-600">
            A record in MongoDB is a document, which is a data structure
            composed of key-value pairs similar to the structure of JSON
            objects. MongoDB stores documents in collections.
          </p>

          {/* Why MongoDB Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why MongoDB?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB is widely used due to its high scalability, flexibility,
              and ease of use. Here are some key reasons why MongoDB is
              preferred by developers:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Document-based storage for unstructured data.</li>
              <li>Schema-less design, which allows dynamic fields.</li>
              <li>Support for horizontal scaling (sharding).</li>
              <li>Built-in replication for high availability.</li>
              <li>Powerful aggregation framework for analytics.</li>
            </ul>
          </div>

          {/* Example Document Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Example MongoDB Document
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's an example of a document in MongoDB:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <pre className="text-sm text-green-600">
                {`
{
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: new Date()
}
                `}
              </pre>
            </div>
            <p className="mt-4 text-lg text-gray-600">In this example:</p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>title</strong> is a string.
              </li>
              <li>
                <strong>body</strong> is a string.
              </li>
              <li>
                <strong>category</strong> is a string.
              </li>
              <li>
                <strong>likes</strong> is a number.
              </li>
              <li>
                <strong>tags</strong> is an array of strings.
              </li>
              <li>
                <strong>date</strong> stores the current date and time.
              </li>
            </ul>
          </div>

          {/* MongoDB Features Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Key Features of MongoDB
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB provides a rich set of features that makes it a powerful
              NoSQL database:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Flexible Schema:</strong> MongoDB allows for the storage
                of documents with different structures in the same collection.
              </li>
              <li>
                <strong>Scalability:</strong> MongoDB supports horizontal
                scaling through sharding, which makes it suitable for big data
                applications.
              </li>
              <li>
                <strong>Aggregation Framework:</strong> MongoDB provides
                powerful aggregation tools to transform and combine data in
                different ways.
              </li>
              <li>
                <strong>High Availability:</strong> MongoDB supports replica
                sets, providing redundancy and high availability.
              </li>
              <li>
                <strong>Geospatial Indexing:</strong> MongoDB allows you to
                store and query geospatial data (e.g., location-based data).
              </li>
              <li>
                <strong>Indexing:</strong> MongoDB supports different types of
                indexes like single field, compound, and text indexing to
                optimize query performance.
              </li>
            </ul>
          </div>

          {/* MongoDB Use Cases Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Common Use Cases for MongoDB
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB is used in various industries for a wide range of
              applications. Some common use cases include:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>
                <strong>Content Management Systems (CMS):</strong> MongoDB is
                used for managing dynamic content on websites.
              </li>
              <li>
                <strong>Real-time Analytics:</strong> MongoDB’s aggregation
                framework helps with processing large volumes of real-time data.
              </li>
              <li>
                <strong>Catalogs and Inventory Systems:</strong> MongoDB’s
                flexible schema allows easy management of complex and evolving
                catalogs.
              </li>
              <li>
                <strong>Internet of Things (IoT):</strong> MongoDB’s scalability
                makes it ideal for storing sensor data from IoT devices.
              </li>
              <li>
                <strong>Mobile Applications:</strong> MongoDB is commonly used
                to store data for mobile apps that require flexible schemas.
              </li>
            </ul>
          </div>

          {/* Call to Action Section */}
        </div>
      </div>
    </>
  );
};

export default Mongodbhome;

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // Importing the router hook

// const QuizQuestion = ({ question, options, correctAnswer, onAnswer }) => {
//   const [selected, setSelected] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(null);

//   const handleAnswer = (option) => {
//     setSelected(option);
//     const correct = option === correctAnswer;
//     setIsCorrect(correct);
//     onAnswer(correct); // Pass the result of the answer back to parent
//   };

//   return (
//     <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-lg">
//       <h3 className="text-xl font-bold text-blue-800 mb-4">Quiz Time! 🚀</h3>
//       <p className="text-lg text-gray-800 mb-4">{question}</p>
//       <div className="grid gap-4">
//         {options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleAnswer(option)}
//             className={`p-3 rounded-lg text-left transition transform hover:scale-105 ${
//               selected === option
//                 ? isCorrect
//                   ? "bg-green-400 text-white"
//                   : "bg-red-400 text-white"
//                 : "bg-white hover:bg-blue-300"
//             }`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       {selected && (
//         <div className="mt-4 text-lg font-semibold">
//           {isCorrect ? (
//             <span className="text-green-600">✅ Correct Answer!</span>
//           ) : (
//             <span className="text-red-600">❌ Oops! Try Again.</span>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const Mongodbhome = () => {
//   const [quizCompleted, setQuizCompleted] = useState([false, false, false]); // Track individual quiz completion
//   const router = useRouter(); // Router for navigation

//   const handleQuizCompletion = (index, correct) => {
//     setQuizCompleted((prev) => {
//       const newCompletion = [...prev];
//       newCompletion[index] = correct;
//       return newCompletion;
//     });
//   };

//   const allQuizzesCompleted = quizCompleted.every((completed) => completed);

//   const handleNext = () => {
//     if (allQuizzesCompleted) {
//       router.push("/apimongodb"); // Navigate to next page when all quizzes are completed
//     } else {
//       alert("Please answer all the questions before proceeding!");
//     }
//   };

//   return (
//     <div className="p-6 ml-80">
//       <div className="bg-white p-8 rounded-2xl shadow-sm">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">🚀 MongoDB Full Tutorial</h1>

//         {/* Introduction Section */}
//         <section>
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to MongoDB</h2>
//           <p className="text-lg text-gray-600 leading-8">
//             MongoDB is a high-performance, open-source NoSQL database designed to handle large
//             volumes of unstructured data. Instead of storing data in tables and rows like
//             traditional relational databases, MongoDB uses documents, which are JSON-like
//             structures called BSON (Binary JSON).
//           </p>
//           <p className="text-lg text-gray-600 leading-8 mt-4">
//             It offers flexibility, scalability, and ease of use, making it ideal for modern
//             applications where data structures can change rapidly.
//           </p>
//           <p className="text-lg text-gray-600 leading-8 mt-4">
//             Not familiar with JSON? No worries! Check out our{" "}
//             <Link href="/json" className="text-blue-600 underline">
//               JSON tutorial
//             </Link>
//             .
//           </p>

//           {/* Quiz after Introduction */}
//           <QuizQuestion
//             question="What format does MongoDB primarily use to store data?"
//             options={["XML", "CSV", "BSON", "YAML"]}
//             correctAnswer="BSON"
//             onAnswer={(correct) => handleQuizCompletion(0, correct)}
//           />
//         </section>

//         {/* Why MongoDB Section */}
//         <section className="mt-12">
//           <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Use MongoDB?</h2>
//           <p className="text-lg text-gray-600 leading-8">
//             MongoDB is built for speed, flexibility, and scalability. It allows developers to
//             quickly iterate and evolve their applications without worrying about complex
//             database migrations.
//           </p>
//           <ul className="list-disc pl-6 text-lg text-gray-600 leading-8 mt-4 space-y-2">
//             <li>⚡ Document-based storage for semi-structured or unstructured data.</li>
//             <li>🧩 Dynamic schema: fields can vary across documents.</li>
//             <li>🌎 High scalability through sharding and replication.</li>
//             <li>🔍 Powerful queries and real-time aggregation framework.</li>
//             <li>🔒 Built-in security features like authentication and authorization.</li>
//           </ul>

//           {/* Quiz after Why MongoDB */}
//           <QuizQuestion
//             question="Which of the following enables MongoDB to scale horizontally?"
//             options={["Indexes", "Sharding", "Replication", "Joins"]}
//             correctAnswer="Sharding"
//             onAnswer={(correct) => handleQuizCompletion(1, correct)}
//           />
//         </section>

//         {/* Example Document Section */}
//         <section className="mt-12">
//           <h2 className="text-3xl font-semibold text-gray-700 mb-4">MongoDB Example Document</h2>
//           <p className="text-lg text-gray-600 leading-8">
//             Here's a basic example of what a MongoDB document looks like:
//           </p>
//           <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-inner text-green-800 text-md font-mono">
//             <pre>
//               {`{
//   "title": "Learn MongoDB",
//   "author": "Jane Doe",
//   "tags": ["database", "nosql", "mongodb"],
//   "likes": 100,
//   "date": new Date()
// }`}
//             </pre>
//           </div>

//           {/* Quiz after Example */}
//           <QuizQuestion
//             question="In MongoDB, what is the primary structure for storing data?"
//             options={["Tables", "Rows", "Documents", "Arrays"]}
//             correctAnswer="Documents"
//             onAnswer={(correct) => handleQuizCompletion(2, correct)}
//           />
//         </section>

//         {/* Call to Action */}
//         <div className="mt-12 text-center">
//           <button
//             onClick={handleNext}
//             disabled={!allQuizzesCompleted}
//             className={`${
//               allQuizzesCompleted ? "bg-green-500 hover:bg-green-700" : "bg-gray-400"
//             } text-white text-xl py-3 px-8 rounded-full transition transform hover:scale-105`}
//           >
//             Next!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mongodbhome;
