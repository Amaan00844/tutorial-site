// Script to replace ALL existing test files with simple browser-compatible versions
const fs = require('fs');
const path = require('path');

// Base directory for exercises
const exerciseDir = './public/exercise';

// Languages and their configurations
const languages = {
  javascript: { testFile: 'tests.js', outputMethod: 'console.log' },
  python: { testFile: 'tests.py', outputMethod: 'print' },
  html: { testFile: 'tests.js', outputMethod: 'document' },
  css: { testFile: 'tests.js', outputMethod: 'style' },
  react: { testFile: 'tests.js', outputMethod: 'component' },
  nodejs: { testFile: 'tests.js', outputMethod: 'console.log' },
  nextjs: { testFile: 'tests.js', outputMethod: 'component' },
  express: { testFile: 'tests.js', outputMethod: 'app' },
  sql: { testFile: 'tests.js', outputMethod: 'query' },
  mysql: { testFile: 'tests.js', outputMethod: 'query' },
  mongodb: { testFile: 'tests.js', outputMethod: 'db' },
  java: { testFile: 'tests.js', outputMethod: 'System.out.println' },
  php: { testFile: 'tests.js', outputMethod: 'echo' }
};

// Exercise topics for each language and level
const exerciseTopics = {
  javascript: {
    basic: [
      'Variables and Data Types', 'Basic Arithmetic Operations', 'Functions and Parameters',
      'Conditional Statements', 'Loops and Iteration', 'Arrays and Basic Methods',
      'DOM Manipulation Basics', 'Event Listeners', 'String Methods', 'Basic Error Handling'
    ],
    intermediate: [
      'Closures and Scope', 'Higher-Order Functions', 'Array Methods (Map, Filter, Reduce)',
      'Promises and Async/Await', 'Object-Oriented Programming', 'Event Delegation',
      'Modules and Imports', 'Regular Expressions', 'Custom Error Handling', 'Advanced DOM Manipulation'
    ],
    hard: [
      'Advanced Closures and IIFEs', 'Functional Programming Patterns', 'Advanced Array Manipulation',
      'Async Patterns and Concurrency', 'Design Patterns in JavaScript', 'Advanced Event Handling',
      'Module Bundling and Lazy Loading', 'Advanced Regular Expressions', 'Performance Optimization', 'Web APIs and Service Workers'
    ]
  },
  python: {
    basic: [
      'Variables and Data Types', 'Basic Arithmetic Operations', 'Functions and Parameters',
      'Conditional Statements', 'Loops and Iteration', 'Lists and Basic Methods',
      'Dictionaries and Sets', 'String Manipulation', 'File Input/Output', 'Basic Error Handling'
    ],
    intermediate: [
      'Object-Oriented Programming', 'List Comprehensions', 'Decorators and Generators',
      'Lambda Functions and Map/Filter', 'Regular Expressions', 'Working with APIs',
      'Database Operations', 'Threading and Multiprocessing', 'Data Analysis with Pandas', 'Web Scraping'
    ],
    hard: [
      'Advanced OOP Patterns', 'Metaclasses and Descriptors', 'Async Programming with asyncio',
      'Performance Optimization', 'Machine Learning Basics', 'Web Framework Development',
      'Data Structures and Algorithms', 'Testing and Test-Driven Development', 'Package Development', 'Advanced Data Science'
    ]
  },
  html: {
    basic: [
      'Basic HTML Structure', 'Headings and Paragraphs', 'Links and Navigation',
      'Images and Media', 'Lists and Organization', 'Tables and Data',
      'Forms and Input', 'Semantic HTML Elements', 'HTML Attributes', 'HTML Validation'
    ]
  },
  css: {
    basic: [
      'CSS Selectors and Properties', 'Colors and Typography', 'Box Model',
      'Layout with Display', 'Positioning Elements', 'Backgrounds and Borders',
      'Basic Responsive Design', 'CSS Pseudo-classes', 'CSS Units and Values', 'CSS Inheritance'
    ]
  },
  react: {
    basic: [
      'JSX and Components', 'Props and Data Flow', 'State Management',
      'Event Handling', 'Conditional Rendering', 'Lists and Keys',
      'Component Lifecycle', 'Hooks (useState, useEffect)', 'Form Handling', 'Component Composition'
    ]
  },
  nodejs: {
    basic: [
      'Node.js Basics and Modules', 'File System Operations', 'HTTP Server Creation',
      'NPM and Package Management', 'Asynchronous Programming', 'Event Emitters',
      'Streams and Buffers', 'Path and URL Modules', 'Environment Variables', 'Basic Debugging'
    ]
  },
  nextjs: {
    basic: [
      'Next.js Project Setup', 'Pages and Routing', 'Components and Layouts',
      'Static Assets and Images', 'CSS and Styling', 'Navigation and Links',
      'Environment Variables', 'Basic Data Fetching', 'Dynamic Routes', 'Deployment Basics'
    ]
  },
  express: {
    basic: [
      'Express.js Setup and Basics', 'Routing and HTTP Methods', 'Middleware Functions',
      'Request and Response Objects', 'Static Files and Assets', 'Template Engines',
      'Error Handling', 'Form Data and Body Parsing', 'Session Management', 'RESTful API Design'
    ]
  },
  sql: {
    basic: [
      'Basic SQL Syntax', 'SELECT and WHERE Clauses', 'Sorting and Ordering',
      'Aggregate Functions', 'GROUP BY and HAVING', 'INSERT, UPDATE, DELETE',
      'Basic Joins', 'Table Creation and Schema', 'Constraints and Keys', 'Basic Indexing'
    ]
  },
  mysql: {
    basic: [
      'MySQL Setup and Connection', 'Database and Table Creation', 'Data Insertion and Retrieval',
      'MySQL Data Types', 'Constraints and Relationships', 'MySQL Functions',
      'Indexing in MySQL', 'Backup and Restore', 'User Management', 'Basic Performance Tuning'
    ]
  },
  mongodb: {
    basic: [
      'MongoDB Basics and Connection', 'Documents and Collections', 'CRUD Operations',
      'Query Operators', 'Sorting and Limiting', 'Indexing in MongoDB',
      'Data Modeling', 'Embedded Documents', 'References and Relationships', 'Basic Aggregation'
    ]
  },
  java: {
    basic: [
      'Java Basics and Syntax', 'Data Types and Variables', 'Control Structures',
      'Methods and Functions', 'Arrays and Collections', 'Object-Oriented Programming',
      'Inheritance and Polymorphism', 'Exception Handling', 'String Manipulation', 'File I/O Operations'
    ]
  },
  php: {
    basic: [
      'PHP Basics and Syntax', 'Variables and Data Types', 'Control Structures',
      'Functions and Scope', 'Arrays and Associative Arrays', 'String Manipulation',
      'Form Handling', 'File Operations', 'Include and Require', 'Error Handling'
    ]
  }
};

// Create simple browser-compatible test template
function createSimpleTest(language, level, exerciseNum, topic) {
  const isPython = language === 'python';
  const isJavaScript = ['javascript', 'nodejs', 'express', 'mongodb', 'react', 'nextjs'].includes(language);
  
  if (isPython) {
    return `# Simple Browser-Compatible Test for ${topic}
# No external dependencies - works entirely in browser

print("🧪 Testing: ${topic}")

def run_simple_test(user_code):
    """Simple test that works without external dependencies"""
    result = {"passed": False, "score": 0, "message": "", "details": []}
    
    try:
        if not user_code or len(user_code.strip()) < 5:
            result["message"] = "Code is empty or too short"
            return result
        
        score = 0
        checks = []
        
        # Basic Python checks
        if "print(" in user_code:
            checks.append("✅ Has print statement")
            score += 30
        else:
            checks.append("❌ Missing print statement")
        
        if "=" in user_code and not user_code.count("=") == user_code.count("=="):
            checks.append("✅ Has variable assignment")
            score += 30
        else:
            checks.append("❌ Missing variable assignment")
        
        # Topic-specific checks
        topic_lower = "${topic}".lower()
        if "variable" in topic_lower and "=" in user_code:
            checks.append("✅ Topic content found")
            score += 40
        elif "function" in topic_lower and "def " in user_code:
            checks.append("✅ Topic content found")
            score += 40
        elif "loop" in topic_lower and ("for " in user_code or "while " in user_code):
            checks.append("✅ Topic content found")
            score += 40
        elif "class" in topic_lower and "class " in user_code:
            checks.append("✅ Topic content found")
            score += 40
        else:
            checks.append("⚠️ Add topic-specific content")
            score += 20
        
        result["details"] = checks
        result["score"] = min(score, 100)
        result["passed"] = score >= 70
        result["message"] = f"Score: {result['score']}/100"
        
    except Exception as e:
        result["message"] = f"Error: {str(e)}"
    
    return result

print("✅ Test ready for: ${topic}")`;
  } else {
    return `// Simple Browser-Compatible Test for ${topic}
// No external dependencies - works entirely in browser

console.log("🧪 Testing: ${topic}");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        ${isJavaScript ? `
        // JavaScript syntax check
        try {
            new Function(userCode);
            checks.push("✅ Valid syntax");
            score += 30;
        } catch (e) {
            checks.push("❌ Syntax error");
        }
        
        // Basic JavaScript checks
        if (/console\\.log\\s*\\(/.test(userCode)) {
            checks.push("✅ Has console.log");
            score += 30;
        } else {
            checks.push("❌ Missing console.log");
        }` : `
        // Basic code checks
        if (userCode.trim().length > 10) {
            checks.push("✅ Has content");
            score += 30;
        } else {
            checks.push("❌ Too short");
        }
        
        if (userCode.split('\\n').length >= 3) {
            checks.push("✅ Multi-line code");
            score += 30;
        } else {
            checks.push("❌ Add more lines");
        }`}
        
        // Topic-specific checks
        const topic = "${topic}".toLowerCase();
        if (topic.includes("variable") && /\\w+\\s*=/.test(userCode)) {
            checks.push("✅ Topic content found");
            score += 40;
        } else if (topic.includes("function") && /function\\s+\\w+/.test(userCode)) {
            checks.push("✅ Topic content found");
            score += 40;
        } else if (topic.includes("loop") && /(for|while)\\s*\\(/.test(userCode)) {
            checks.push("✅ Topic content found");
            score += 40;
        } else if (topic.includes("array") && /\\[.*\\]/.test(userCode)) {
            checks.push("✅ Topic content found");
            score += 40;
        } else {
            checks.push("⚠️ Add topic-specific content");
            score += 20;
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = \`Score: \${result.score}/100\`;
        
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

// Export for Monaco Editor
if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "${topic}", language: "${language}"}
    };
}

console.log("✅ Test ready for: ${topic}");`;
  }
}

// Function to replace all test files
function replaceAllTests() {
  console.log('Replacing ALL test files with simple browser-compatible versions...');
  
  let totalReplaced = 0;
  let totalErrors = 0;
  
  Object.entries(languages).forEach(([language, config]) => {
    const langDir = path.join(exerciseDir, language);
    
    if (!fs.existsSync(langDir)) {
      console.log(`Skipping ${language} - directory doesn't exist`);
      return;
    }
    
    const topics = exerciseTopics[language] || { basic: ['Exercise 1'] };
    
    Object.entries(topics).forEach(([level, topicList]) => {
      const levelDir = path.join(langDir, level);
      
      if (!fs.existsSync(levelDir)) {
        console.log(`Skipping ${language}/${level} - directory doesn't exist`);
        return;
      }
      
      topicList.forEach((topic, index) => {
        const exerciseNum = index + 1;
        const exerciseDir = path.join(levelDir, exerciseNum.toString());
        const testFilePath = path.join(exerciseDir, config.testFile);
        
        try {
          if (fs.existsSync(testFilePath)) {
            // Backup original file
            const backupPath = testFilePath + '.backup';
            if (!fs.existsSync(backupPath)) {
              const originalContent = fs.readFileSync(testFilePath, 'utf8');
              fs.writeFileSync(backupPath, originalContent);
            }
            
            // Create and write simple test
            const simpleTestContent = createSimpleTest(language, level, exerciseNum, topic);
            fs.writeFileSync(testFilePath, simpleTestContent);
            
            console.log(`✅ Replaced ${language}/${level}/${exerciseNum}: ${topic}`);
            totalReplaced++;
          } else {
            // Create directory and file if they don't exist
            if (!fs.existsSync(exerciseDir)) {
              fs.mkdirSync(exerciseDir, { recursive: true });
            }
            
            const simpleTestContent = createSimpleTest(language, level, exerciseNum, topic);
            fs.writeFileSync(testFilePath, simpleTestContent);
            
            console.log(`✅ Created ${language}/${level}/${exerciseNum}: ${topic}`);
            totalReplaced++;
          }
        } catch (error) {
          console.log(`❌ Error with ${language}/${level}/${exerciseNum}: ${error.message}`);
          totalErrors++;
        }
      });
    });
  });
  
  console.log(`\\n🎉 Finished replacing all tests!`);
  console.log(`📊 Summary:`);
  console.log(`   ✅ Replaced/Created: ${totalReplaced} test files`);
  console.log(`   ❌ Errors: ${totalErrors} files`);
  console.log(`   📁 Total processed: ${totalReplaced + totalErrors} test files`);
  console.log(`\\n💾 Original files backed up with .backup extension`);
}

// Run the replacement
replaceAllTests();