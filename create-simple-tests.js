// Script to create simple browser-compatible test.js files for all languages and topics
const fs = require('fs');
const path = require('path');

// Base directory for exercises
const exerciseDir = './public/exercise';

// Languages and their configurations
const languages = {
  javascript: {
    ext: '.js',
    testFile: 'tests.js',
    mainFile: 'script.js',
    outputMethod: 'console.log'
  },
  python: {
    ext: '.py', 
    testFile: 'tests.py',
    mainFile: 'script.py',
    outputMethod: 'print'
  },
  html: {
    ext: '.html',
    testFile: 'tests.js',
    mainFile: 'index.html',
    outputMethod: 'document'
  },
  css: {
    ext: '.css',
    testFile: 'tests.js', 
    mainFile: 'style.css',
    outputMethod: 'style'
  },
  react: {
    ext: '.jsx',
    testFile: 'tests.js',
    mainFile: 'App.jsx',
    outputMethod: 'component'
  },
  nodejs: {
    ext: '.js',
    testFile: 'tests.js',
    mainFile: 'server.js',
    outputMethod: 'console.log'
  },
  nextjs: {
    ext: '.js',
    testFile: 'tests.js',
    mainFile: 'pages/index.js',
    outputMethod: 'component'
  },
  express: {
    ext: '.js',
    testFile: 'tests.js',
    mainFile: 'app.js',
    outputMethod: 'app'
  },
  sql: {
    ext: '.sql',
    testFile: 'tests.js',
    mainFile: 'queries.sql',
    outputMethod: 'query'
  },
  mysql: {
    ext: '.sql',
    testFile: 'tests.js',
    mainFile: 'mysql_queries.sql',
    outputMethod: 'query'
  },
  mongodb: {
    ext: '.js',
    testFile: 'tests.js',
    mainFile: 'mongodb_queries.js',
    outputMethod: 'db'
  },
  java: {
    ext: '.java',
    testFile: 'tests.js',
    mainFile: 'Main.java',
    outputMethod: 'System.out.println'
  },
  php: {
    ext: '.php',
    testFile: 'tests.js',
    mainFile: 'index.php',
    outputMethod: 'echo'
  }
};

// Exercise topics for each language and level
const exerciseTopics = {
  javascript: {
    basic: [
      'Variables and Data Types',
      'Basic Arithmetic Operations', 
      'Functions and Parameters',
      'Conditional Statements',
      'Loops and Iteration',
      'Arrays and Basic Methods',
      'DOM Manipulation Basics',
      'Event Listeners',
      'String Methods',
      'Basic Error Handling'
    ],
    intermediate: [
      'Closures and Scope',
      'Higher-Order Functions',
      'Array Methods (Map, Filter, Reduce)',
      'Promises and Async/Await',
      'Object-Oriented Programming',
      'Event Delegation',
      'Modules and Imports',
      'Regular Expressions',
      'Custom Error Handling',
      'Advanced DOM Manipulation'
    ],
    hard: [
      'Advanced Closures and IIFEs',
      'Functional Programming Patterns',
      'Advanced Array Manipulation',
      'Async Patterns and Concurrency',
      'Design Patterns in JavaScript',
      'Advanced Event Handling',
      'Module Bundling and Lazy Loading',
      'Advanced Regular Expressions',
      'Performance Optimization',
      'Web APIs and Service Workers'
    ]
  },
  python: {
    basic: [
      'Variables and Data Types',
      'Basic Arithmetic Operations',
      'Functions and Parameters', 
      'Conditional Statements',
      'Loops and Iteration',
      'Lists and Basic Methods',
      'Dictionaries and Sets',
      'String Manipulation',
      'File Input/Output',
      'Basic Error Handling'
    ],
    intermediate: [
      'Object-Oriented Programming',
      'List Comprehensions',
      'Decorators and Generators',
      'Lambda Functions and Map/Filter',
      'Regular Expressions',
      'Working with APIs',
      'Database Operations',
      'Threading and Multiprocessing',
      'Data Analysis with Pandas',
      'Web Scraping'
    ],
    hard: [
      'Advanced OOP Patterns',
      'Metaclasses and Descriptors',
      'Async Programming with asyncio',
      'Performance Optimization',
      'Machine Learning Basics',
      'Web Framework Development',
      'Data Structures and Algorithms',
      'Testing and Test-Driven Development',
      'Package Development',
      'Advanced Data Science'
    ]
  },
  html: {
    basic: [
      'Basic HTML Structure',
      'Headings and Paragraphs',
      'Links and Navigation',
      'Images and Media',
      'Lists and Organization',
      'Tables and Data',
      'Forms and Input',
      'Semantic HTML Elements',
      'HTML Attributes',
      'HTML Validation'
    ]
  },
  css: {
    basic: [
      'CSS Selectors and Properties',
      'Colors and Typography',
      'Box Model',
      'Layout with Display',
      'Positioning Elements',
      'Backgrounds and Borders',
      'Basic Responsive Design',
      'CSS Pseudo-classes',
      'CSS Units and Values',
      'CSS Inheritance'
    ]
  },
  react: {
    basic: [
      'JSX and Components',
      'Props and Data Flow',
      'State Management',
      'Event Handling',
      'Conditional Rendering',
      'Lists and Keys',
      'Component Lifecycle',
      'Hooks (useState, useEffect)',
      'Form Handling',
      'Component Composition'
    ]
  },
  nodejs: {
    basic: [
      'Node.js Basics and Modules',
      'File System Operations',
      'HTTP Server Creation',
      'NPM and Package Management',
      'Asynchronous Programming',
      'Event Emitters',
      'Streams and Buffers',
      'Path and URL Modules',
      'Environment Variables',
      'Basic Debugging'
    ]
  },
  nextjs: {
    basic: [
      'Next.js Project Setup',
      'Pages and Routing',
      'Components and Layouts',
      'Static Assets and Images',
      'CSS and Styling',
      'Navigation and Links',
      'Environment Variables',
      'Basic Data Fetching',
      'Dynamic Routes',
      'Deployment Basics'
    ]
  },
  express: {
    basic: [
      'Express.js Setup and Basics',
      'Routing and HTTP Methods',
      'Middleware Functions',
      'Request and Response Objects',
      'Static Files and Assets',
      'Template Engines',
      'Error Handling',
      'Form Data and Body Parsing',
      'Session Management',
      'RESTful API Design'
    ]
  },
  sql: {
    basic: [
      'Basic SQL Syntax',
      'SELECT and WHERE Clauses',
      'Sorting and Ordering',
      'Aggregate Functions',
      'GROUP BY and HAVING',
      'INSERT, UPDATE, DELETE',
      'Basic Joins',
      'Table Creation and Schema',
      'Constraints and Keys',
      'Basic Indexing'
    ]
  },
  mysql: {
    basic: [
      'MySQL Setup and Connection',
      'Database and Table Creation',
      'Data Insertion and Retrieval',
      'MySQL Data Types',
      'Constraints and Relationships',
      'MySQL Functions',
      'Indexing in MySQL',
      'Backup and Restore',
      'User Management',
      'Basic Performance Tuning'
    ]
  },
  mongodb: {
    basic: [
      'MongoDB Basics and Connection',
      'Documents and Collections',
      'CRUD Operations',
      'Query Operators',
      'Sorting and Limiting',
      'Indexing in MongoDB',
      'Data Modeling',
      'Embedded Documents',
      'References and Relationships',
      'Basic Aggregation'
    ]
  },
  java: {
    basic: [
      'Java Basics and Syntax',
      'Data Types and Variables',
      'Control Structures',
      'Methods and Functions',
      'Arrays and Collections',
      'Object-Oriented Programming',
      'Inheritance and Polymorphism',
      'Exception Handling',
      'String Manipulation',
      'File I/O Operations'
    ]
  },
  php: {
    basic: [
      'PHP Basics and Syntax',
      'Variables and Data Types',
      'Control Structures',
      'Functions and Scope',
      'Arrays and Associative Arrays',
      'String Manipulation',
      'Form Handling',
      'File Operations',
      'Include and Require',
      'Error Handling'
    ]
  }
};

// Create simple browser-compatible test template
function createSimpleTest(language, level, exerciseNum, topic) {
  const config = languages[language];
  const isJavaScript = language === 'javascript' || language === 'nodejs' || language === 'express' || language === 'mongodb';
  const isPython = language === 'python';
  
  if (isPython) {
    return `# Simple Browser-Compatible Test for ${topic}
# This test runs in the Monaco Editor environment without external dependencies

print("🧪 Running ${language.charAt(0).toUpperCase() + language.slice(1)} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum}: ${topic}")

def run_simple_test(user_code):
    """Simple test function that works in browser environment"""
    results = {
        "passed": False,
        "score": 0,
        "message": "",
        "details": []
    }
    
    try:
        # Basic checks
        if not user_code or len(user_code.strip()) < 10:
            results["message"] = "Code is too short or empty"
            results["score"] = 0
            return results
        
        # Check for basic Python syntax elements
        checks = []
        score = 0
        
        # Check for print statements
        if "print(" in user_code:
            checks.append("✅ Found print statement")
            score += 25
        else:
            checks.append("❌ No print statement found")
        
        # Check for variable assignments
        if "=" in user_code and not user_code.count("=") == user_code.count("=="):
            checks.append("✅ Found variable assignment")
            score += 25
        else:
            checks.append("❌ No variable assignment found")
        
        # Check for basic structure
        lines = [line.strip() for line in user_code.split('\\n') if line.strip() and not line.strip().startswith('#')]
        if len(lines) >= 3:
            checks.append("✅ Code has good structure")
            score += 25
        else:
            checks.append("❌ Code needs more structure")
        
        # Check for topic-specific elements
        topic_lower = "${topic}".lower()
        if "variable" in topic_lower and ("=" in user_code):
            checks.append("✅ Topic-specific content found")
            score += 25
        elif "function" in topic_lower and ("def " in user_code):
            checks.append("✅ Topic-specific content found")
            score += 25
        elif "loop" in topic_lower and ("for " in user_code or "while " in user_code):
            checks.append("✅ Topic-specific content found")
            score += 25
        else:
            checks.append("⚠️ Consider adding topic-specific content")
            score += 10
        
        results["details"] = checks
        results["score"] = min(score, 100)
        results["passed"] = score >= 75
        results["message"] = f"Test completed with score: {results['score']}/100"
        
        return results
        
    except Exception as e:
        results["message"] = f"Test error: {str(e)}"
        results["score"] = 0
        return results

# Test configuration
test_config = {
    "topic": "${topic}",
    "language": "${language}",
    "level": "${level}",
    "exercise": ${exerciseNum}
}

print("✅ Simple test loaded successfully")
print(f"Topic: {test_config['topic']}")`;
  } else {
    return `// Simple Browser-Compatible Test for ${topic}
// This test runs in the Monaco Editor environment without external dependencies

console.log("🧪 Running ${language.charAt(0).toUpperCase() + language.slice(1)} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum}: ${topic}");

// Simple test function that works in browser environment
function runSimpleTest(userCode) {
    const results = {
        passed: false,
        score: 0,
        message: "",
        details: []
    };
    
    try {
        // Basic checks
        if (!userCode || userCode.trim().length < 10) {
            results.message = "Code is too short or empty";
            results.score = 0;
            return results;
        }
        
        // Check for basic syntax
        let score = 0;
        const checks = [];
        
        ${isJavaScript ? `
        // JavaScript-specific checks
        try {
            new Function(userCode);
            checks.push("✅ Valid JavaScript syntax");
            score += 25;
        } catch (e) {
            checks.push("❌ Syntax error: " + e.message);
        }
        
        // Check for console.log
        if (/console\\.log\\s*\\(/.test(userCode)) {
            checks.push("✅ Found console.log statement");
            score += 25;
        } else {
            checks.push("❌ No console.log statement found");
        }
        
        // Check for variables
        if (/\\b(let|const|var)\\s+\\w+/.test(userCode)) {
            checks.push("✅ Found variable declaration");
            score += 25;
        } else {
            checks.push("❌ No variable declaration found");
        }` : `
        // Basic code structure checks
        if (userCode.trim().length > 0) {
            checks.push("✅ Code is not empty");
            score += 25;
        }
        
        // Check for meaningful content
        const lines = userCode.split('\\n').filter(line => line.trim().length > 0);
        if (lines.length >= 3) {
            checks.push("✅ Code has good structure");
            score += 25;
        } else {
            checks.push("❌ Code needs more structure");
        }
        
        // Basic content check
        if (userCode.length > 50) {
            checks.push("✅ Sufficient code content");
            score += 25;
        } else {
            checks.push("❌ Code content seems insufficient");
        }`}
        
        // Topic-specific checks
        const topic = "${topic}".toLowerCase();
        if (topic.includes("variable") && userCode.includes("=")) {
            checks.push("✅ Topic-specific content found");
            score += 25;
        } else if (topic.includes("function") && /function\\s+\\w+/.test(userCode)) {
            checks.push("✅ Topic-specific content found");
            score += 25;
        } else if (topic.includes("loop") && /(for|while)\\s*\\(/.test(userCode)) {
            checks.push("✅ Topic-specific content found");
            score += 25;
        } else {
            checks.push("⚠️ Consider adding topic-specific content");
            score += 10;
        }
        
        results.details = checks;
        results.score = Math.min(score, 100);
        results.passed = score >= 75;
        results.message = \`Test completed with score: \${results.score}/100\`;
        
        return results;
        
    } catch (error) {
        results.message = "Test error: " + error.message;
        results.score = 0;
        return results;
    }
}

// Export for Monaco Editor testing system
if (typeof window !== 'undefined') {
    window.exerciseTest = { 
        runTests: runSimpleTest,
        testConfig: {
            topic: "${topic}",
            language: "${language}",
            level: "${level}",
            exercise: ${exerciseNum}
        }
    };
}

console.log("✅ Simple test loaded successfully");
console.log("Topic: ${topic}");`;
  }
}

// Function to create all test files
function createAllSimpleTests() {
  console.log('Creating simple browser-compatible tests for all languages and topics...');
  
  let totalCreated = 0;
  let totalSkipped = 0;
  
  Object.entries(languages).forEach(([language, config]) => {
    const langDir = path.join(exerciseDir, language);
    
    if (!fs.existsSync(langDir)) {
      console.log(`Creating directory: ${langDir}`);
      fs.mkdirSync(langDir, { recursive: true });
    }
    
    const topics = exerciseTopics[language] || { basic: ['Exercise 1'] };
    
    Object.entries(topics).forEach(([level, topicList]) => {
      const levelDir = path.join(langDir, level);
      
      if (!fs.existsSync(levelDir)) {
        console.log(`Creating directory: ${levelDir}`);
        fs.mkdirSync(levelDir, { recursive: true });
      }
      
      topicList.forEach((topic, index) => {
        const exerciseNum = index + 1;
        const exerciseDir = path.join(levelDir, exerciseNum.toString());
        const testFilePath = path.join(exerciseDir, config.testFile);
        
        // Create exercise directory if it doesn't exist
        if (!fs.existsSync(exerciseDir)) {
          fs.mkdirSync(exerciseDir, { recursive: true });
        }
        
        // Check if test file already exists
        if (fs.existsSync(testFilePath)) {
          console.log(`⏭️  Skipping ${language}/${level}/${exerciseNum} - test file already exists`);
          totalSkipped++;
        } else {
          // Create simple test file
          const testContent = createSimpleTest(language, level, exerciseNum, topic);
          fs.writeFileSync(testFilePath, testContent);
          console.log(`✅ Created ${language}/${level}/${exerciseNum}: ${topic}`);
          totalCreated++;
        }
      });
    });
  });
  
  console.log(`\\n🎉 Finished creating simple tests!`);
  console.log(`📊 Summary:`);
  console.log(`   ✅ Created: ${totalCreated} test files`);
  console.log(`   ⏭️  Skipped: ${totalSkipped} existing files`);
  console.log(`   📁 Total: ${totalCreated + totalSkipped} test files processed`);
}

// Run the creation
createAllSimpleTests();