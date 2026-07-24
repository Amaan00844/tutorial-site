import { CheckCircle } from "lucide-react"; // Removed ArrowRightCircle
import { FaNodeJs, FaServer } from "react-icons/fa"; // Icons for Express/Node.js

const expressChecklist = {
  "Express Best Practices": [
    {
      title: "Project Structure & Organization",
      items: [
        "Organize files using MVC pattern (Models, Views, Controllers)",
        "Use separate routers for different routes/modules",
        "Keep configuration (e.g. DB URI, port) in environment variables using .env and dotenv"
      ],
    },
    {
      title: "Security Best Practices",
      items: [
        "Use Helmet to set secure HTTP headers: `app.use(helmet());`",
        "Sanitize input to prevent injection attacks (express-validator, xss-clean, etc.)",
        "Enable rate limiting to prevent brute force attacks (express-rate-limit)",
        "Always validate user input using a library like Joi or express-validator"
      ],
    },
    {
      title: "Authentication & Authorization",
      items: [
        "Use JWT or OAuth2 for authentication",
        "Protect routes with middleware that checks user roles/permissions",
        "Never store passwords in plain text – always hash with bcrypt"
      ],
    },
    {
      title: "Middleware Usage",
      items: [
        "Use custom middleware for logging, auth checks, error handling",
        "Apply middleware only to the routes that need it",
        "Always call next() unless response is sent"
      ],
    },
    {
      title: "Error Handling",
      items: [
        "Use centralized error-handling middleware: `app.use((err, req, res, next) => { ... });`",
        "Return meaningful error messages and status codes",
        "Avoid exposing internal stack traces in production"
      ],
    },
    {
      title: "Performance Optimization",
      items: [
        "Use clustering with PM2 to take advantage of multiple CPU cores",
        "Cache frequently accessed data with Redis",
        "Minimize middleware execution for performance"
      ],
    },
  ],
};

export default function ExpressBestPractices() {
  return (
    <div className="relative min-h-screen bg-white py-12 px-4 text-black overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <div className="absolute top-60 left-10">
          <FaNodeJs size={70} className="text-green-300 " />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <FaServer size={69} className="text-blue-300 " />
        </div>

        <div className="absolute top-10 left-10">
          <CheckCircle size={100} className="text-blue-100 rotate-12 z-34" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <CheckCircle size={100} className="text-green-200 -rotate-6 z-34" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-1">
            Express Best Practices
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {expressChecklist["Express Best Practices"].map((section, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg shadow-md p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b pb-1">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
