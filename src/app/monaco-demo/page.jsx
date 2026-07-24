'use client';

import { useState } from 'react';
import JavascriptMonaco from '@/components/Exercise/JavascriptMonaco';
import PythonMonaco from '@/components/Exercise/PythonMonaco';
import HtmlMonaco from '@/components/Exercise/HtmlMonaco';
import CssMonaco from '@/components/Exercise/CssMonaco';
import ReactMonaco from '@/components/Exercise/ReactMonaco';
import NodejsMonaco from '@/components/Exercise/NodejsMonaco';
import NextjsMonaco from '@/components/Exercise/NextjsMonaco';
import ExpressMonaco from '@/components/Exercise/ExpressMonaco';
import SqlMonaco from '@/components/Exercise/SqlMonaco';
import MysqlMonaco from '@/components/Exercise/MysqlMonaco';
import MongodbMonaco from '@/components/Exercise/MongodbMonaco';
import JavaMonaco from '@/components/Exercise/JavaMonaco';
import PhpMonaco from '@/components/Exercise/PhpMonaco';

export default function MonacoDemoPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const languages = [
    { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500', component: JavascriptMonaco },
    { id: 'python', name: 'Python', color: 'bg-blue-500', component: PythonMonaco },
    { id: 'html', name: 'HTML', color: 'bg-orange-500', component: HtmlMonaco },
    { id: 'css', name: 'CSS', color: 'bg-blue-600', component: CssMonaco },
    { id: 'react', name: 'React', color: 'bg-cyan-500', component: ReactMonaco },
    { id: 'nodejs', name: 'Node.js', color: 'bg-green-600', component: NodejsMonaco },
    { id: 'nextjs', name: 'Next.js', color: 'bg-black', component: NextjsMonaco },
    { id: 'express', name: 'Express.js', color: 'bg-gray-700', component: ExpressMonaco },
    { id: 'sql', name: 'SQL', color: 'bg-indigo-600', component: SqlMonaco },
    { id: 'mysql', name: 'MySQL', color: 'bg-blue-700', component: MysqlMonaco },
    { id: 'mongodb', name: 'MongoDB', color: 'bg-green-500', component: MongodbMonaco },
    { id: 'java', name: 'Java', color: 'bg-red-600', component: JavaMonaco },
    { id: 'php', name: 'PHP', color: 'bg-purple-600', component: PhpMonaco },
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);
  const CurrentComponent = currentLanguage?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Complete Monaco Editor Platform
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                All 13 Programming Languages - Complete StackBlitz Replacement
              </p>
            </div>
            
            {/* Current Language Badge */}
            <div className={`px-4 py-2 rounded-lg text-white font-semibold ${currentLanguage?.color}`}>
              {currentLanguage?.name}
            </div>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold mb-4">Select Programming Language (13 Available):</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
                  selectedLanguage === language.id
                    ? 'bg-white text-gray-900 shadow-lg scale-105'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Complete Programming Language Coverage
            </h2>
            <p className="text-gray-600">
              13 languages with comprehensive exercise platforms, advanced testing, and detailed analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900">Zero Cost</h3>
              <p className="text-sm text-gray-600">No subscription fees, unlimited usage for all languages</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">🧪</div>
              <h3 className="font-semibold text-gray-900">Advanced Testing</h3>
              <p className="text-sm text-gray-600">Language-specific test runners with 0-100 scoring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-900">Detailed Analytics</h3>
              <p className="text-sm text-gray-600">Performance metrics, code quality, and progress tracking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900">Superior Performance</h3>
              <p className="text-sm text-gray-600">Faster than StackBlitz, runs entirely in browser</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform */}
      <div className="flex-1">
        {CurrentComponent && <CurrentComponent />}
      </div>

      {/* Comprehensive Footer */}
      <div className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Languages Grid */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Frontend Languages
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-yellow-500"></span>
                  JavaScript - Complete with all levels
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-orange-500"></span>
                  HTML - Structure and semantics
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-blue-600"></span>
                  CSS - Styling and layouts
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-cyan-500"></span>
                  React - Component-based UI
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Backend Languages
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-green-600"></span>
                  Node.js - Server-side JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-black"></span>
                  Next.js - Full-stack React framework
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-gray-700"></span>
                  Express.js - Web application framework
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-blue-500"></span>
                  Python - General-purpose programming
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-red-600"></span>
                  Java - Enterprise applications
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-purple-600"></span>
                  PHP - Web development
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Database Languages
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-indigo-600"></span>
                  SQL - Standard query language
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-blue-700"></span>
                  MySQL - Relational database
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2 bg-green-500"></span>
                  MongoDB - NoSQL document database
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                Key Features
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time code execution
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced syntax highlighting
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Comprehensive testing
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How to Use
              </h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-semibold">1.</span>
                  Select any of the 13 programming languages
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-semibold">2.</span>
                  Choose difficulty: Basic/Intermediate/Hard
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-semibold">3.</span>
                  Pick an exercise from the sidebar
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-semibold">4.</span>
                  Write code in the Monaco Editor
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-semibold">5.</span>
                  Test with 🧪 button for instant feedback
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-semibold">6.</span>
                  Submit when all tests pass
                </li>
              </ol>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Migration Complete!</h4>
                <p className="text-sm text-green-700">
                  All 13 languages now use Monaco Editor instead of StackBlitz, 
                  providing better performance and zero cost.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Complete StackBlitz Replacement Achieved
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Before: StackBlitz</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• $20/month per user</li>
                    <li>• Limited usage</li>
                    <li>• External dependencies</li>
                    <li>• Basic testing</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">After: Monaco Editor</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• $0/month (completely free)</li>
                    <li>• Unlimited usage</li>
                    <li>• Runs entirely in browser</li>
                    <li>• Advanced testing & scoring</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Enhanced Features</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 13 programming languages</li>
                    <li>• Detailed analytics</li>
                    <li>• Better performance</li>
                    <li>• Same UI/UX experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}