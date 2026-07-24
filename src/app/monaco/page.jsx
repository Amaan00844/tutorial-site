"use client";

import Link from 'next/link';
import { 
  FaCode, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaJava,
  FaPhp
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMysql, 
  SiMongodb 
} from 'react-icons/si';

export default function MonacoIndexPage() {
  const editors = [
    {
      name: 'JavaScript',
      description: 'Write and run JavaScript code with full execution support',
      icon: <FaCode className="text-4xl text-yellow-500" />,
      path: '/monaco/javascript',
      features: ['▶️ Run Code', '🧪 Test Code', '🗑️ Clear Output'],
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
    },
    {
      name: 'Python',
      description: 'Write and simulate Python code with print statement support',
      icon: <FaPython className="text-4xl text-blue-500" />,
      path: '/monaco/python',
      features: ['🐍 Run Code', '🧪 Test Code', '🗑️ Clear Output'],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      name: 'HTML',
      description: 'Write HTML and preview it in real-time with iframe',
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      path: '/monaco/html',
      features: ['🌐 Live Preview', '🧪 Test Code', '🗑️ Clear Output'],
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      name: 'CSS',
      description: 'Write and test CSS styles with syntax highlighting',
      icon: <FaCss3Alt className="text-4xl text-blue-600" />,
      path: '/monaco/css',
      features: ['🎨 Test Styles', '🗑️ Clear Output'],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      name: 'React',
      description: 'Write and test React components with JSX support',
      icon: <FaReact className="text-4xl text-cyan-500" />,
      path: '/monaco/react',
      features: ['⚛️ Test Components', '🗑️ Clear Output'],
      color: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100'
    },
    {
      name: 'Node.js',
      description: 'Write and test Node.js server-side JavaScript code',
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      path: '/monaco/nodejs',
      features: ['🟢 Test Code', '🗑️ Clear Output'],
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      name: 'Next.js',
      description: 'Write and test Next.js applications with framework features',
      icon: <SiNextdotjs className="text-4xl text-black" />,
      path: '/monaco/nextjs',
      features: ['▲ Test App', '🗑️ Clear Output'],
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    },
    {
      name: 'Express.js',
      description: 'Write and test Express.js server applications',
      icon: <SiExpress className="text-4xl text-gray-700" />,
      path: '/monaco/express',
      features: ['🚀 Test Server', '🗑️ Clear Output'],
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    },
    {
      name: 'SQL',
      description: 'Write and test SQL database queries',
      icon: <FaDatabase className="text-4xl text-blue-700" />,
      path: '/monaco/sql',
      features: ['🗄️ Test Queries', '🗑️ Clear Output'],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      name: 'MySQL',
      description: 'Write and test MySQL-specific database queries',
      icon: <SiMysql className="text-4xl text-blue-600" />,
      path: '/monaco/mysql',
      features: ['🐬 Test MySQL', '🗑️ Clear Output'],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      name: 'MongoDB',
      description: 'Write and test MongoDB queries and operations',
      icon: <SiMongodb className="text-4xl text-green-500" />,
      path: '/monaco/mongodb',
      features: ['🍃 Test Queries', '🗑️ Clear Output'],
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      name: 'Java',
      description: 'Write and test Java applications with OOP support',
      icon: <FaJava className="text-4xl text-red-600" />,
      path: '/monaco/java',
      features: ['☕ Test Code', '🗑️ Clear Output'],
      color: 'bg-red-50 border-red-200 hover:bg-red-100'
    },
    {
      name: 'PHP',
      description: 'Write and test PHP server-side scripting code',
      icon: <FaPhp className="text-4xl text-purple-600" />,
      path: '/monaco/php',
      features: ['🐘 Test Code', '🗑️ Clear Output'],
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Monaco Code Editors</h1>
          <p className="text-gray-600 mt-2">
            Choose a programming language to start coding with our Monaco-powered editors
          </p>
        </div>
      </div>

      {/* Editors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {editors.map((editor, index) => (
            <Link
              key={index}
              href={editor.path}
              className={`block p-6 rounded-lg border-2 transition-all duration-200 ${editor.color}`}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4">
                  {editor.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {editor.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {editor.description}
                </p>
                
                {/* Features */}
                <div className="space-y-1">
                  {editor.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-xs bg-white px-2 py-1 rounded-full text-gray-700"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Launch Button */}
                <div className="mt-4 w-full">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                    Launch Editor
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🚀 Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Syntax highlighting for all languages</li>
                <li>• Real-time code execution (where supported)</li>
                <li>• Built-in testing systems</li>
                <li>• File management and organization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">💡 Capabilities</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• JavaScript: Full execution with console.log</li>
                <li>• Python: Print statement simulation</li>
                <li>• HTML: Live preview in iframe</li>
                <li>• All others: Testing and validation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Perfect For</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Learning programming languages</li>
                <li>• Testing code snippets</li>
                <li>• Prototyping applications</li>
                <li>• Educational exercises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}