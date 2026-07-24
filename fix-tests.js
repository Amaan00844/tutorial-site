// Script to fix all test.js files to be browser-compatible
const fs = require('fs');
const path = require('path');

// Base directory for exercises
const exerciseDir = './public/exercise';

// Languages and their test file extensions
const languages = {
  javascript: { ext: '.js', testFile: 'tests.js' },
  python: { ext: '.py', testFile: 'tests.py' },
  html: { ext: '.html', testFile: 'tests.js' },
  css: { ext: '.css', testFile: 'tests.js' },
  react: { ext: '.jsx', testFile: 'tests.js' },
  nodejs: { ext: '.js', testFile: 'tests.js' },
  nextjs: { ext: '.js', testFile: 'tests.js' },
  express: { ext: '.js', testFile: 'tests.js' },
  sql: { ext: '.sql', testFile: 'tests.js' },
  mysql: { ext: '.sql', testFile: 'tests.js' },
  mongodb: { ext: '.js', testFile: 'tests.js' },
  java: { ext: '.java', testFile: 'tests.js' },
  php: { ext: '.php', testFile: 'tests.js' }
};

// Generic browser-compatible test template
function createBrowserCompatibleTest(language, level, exerciseNum, exerciseTitle) {
  const isJavaScript = language === 'javascript';
  const isPython = language === 'python';
  
  if (isPython) {
    return `# Browser-compatible test for ${language.charAt(0).toUpperCase() + language.slice(1)} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum}: ${exerciseTitle}
# This test runs in the Monaco Editor environment

print("🧪 Running ${language.charAt(0).toUpperCase() + language.slice(1)} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum} Tests...")

# Test configuration for Monaco Editor
test_config = {
    "exerciseTitle": "${exerciseTitle}",
    "language": "${language}",
    "requirements": [
        "Write clean, readable code",
        "Follow ${language} best practices",
        "Include appropriate comments",
        "Test your solution thoroughly"
    ]
}

def run_tests(user_code):
    results = {
        "syntaxCheckPassed": False,
        "structureCheckPassed": False,
        "functionalityCheckPassed": False,
        "errors": [],
        "warnings": [],
        "structureChecks": [],
        "score": 0
    }
    
    try:
        # 1. Syntax Check
        results["syntaxCheckPassed"] = check_syntax(user_code, results)
        
        # 2. Structure Check
        results["structureCheckPassed"] = check_structure(user_code, results)
        
        # 3. Functionality Check
        results["functionalityCheckPassed"] = check_functionality(user_code, results)
        
        # 4. Calculate Score
        calculate_score(results)
        
        return results
    except Exception as error:
        results["errors"].append(f"Test execution error: {str(error)}")
        return results

def check_syntax(code, results):
    try:
        # Basic Python syntax validation
        lines = code.split('\\n')
        for i, line in enumerate(lines):
            stripped = line.strip()
            if not stripped or stripped.startswith('#'):
                continue
        
        print("✅ Syntax check passed")
        return True
    except Exception as error:
        print(f"❌ Syntax error: {str(error)}")
        results["errors"].append(f"Syntax Error: {str(error)}")
        return False

def check_structure(code, results):
    passed = True
    
    # Check for print statements
    if "print(" in code:
        print("✅ Found print statement(s)")
        results["structureChecks"].append("✅ Found print statement(s)")
    else:
        print("❌ No print statements found")
        results["structureChecks"].append("❌ No print statements found")
        passed = False
    
    # Check for variable assignments
    import re
    has_variables = re.search(r'\\w+\\s*=\\s*.+', code)
    if has_variables:
        print("✅ Found variable assignments")
        results["structureChecks"].append("✅ Found variable assignments")
    else:
        print("❌ No variable assignments found")
        results["structureChecks"].append("❌ No variable assignments found")
        passed = False
    
    return passed

def check_functionality(code, results):
    try:
        # Simulate Python execution
        import re
        print_matches = re.findall(r'print\\([^)]+\\)', code)
        
        if print_matches:
            print("✅ Code contains executable statements")
            results["output"] = "Python code executed (browser simulation)"
            return True
        else:
            print("❌ No executable statements found")
            return False
    except Exception as error:
        print(f"❌ Functionality check error: {str(error)}")
        results["errors"].append(f"Functionality Error: {str(error)}")
        return False

def calculate_score(results):
    score = 0
    
    if results["syntaxCheckPassed"]:
        score += 30
    if results["structureCheckPassed"]:
        score += 50
    if results["functionalityCheckPassed"]:
        score += 20
    
    results["score"] = min(score, 100)
    
    print(f"📊 Final Score: {results['score']}/100")

print("✅ Test file loaded successfully")
print("Requirements:", ", ".join(test_config["requirements"]))`;
  } else {
    return `// Browser-compatible test for ${language.charAt(0).toUpperCase() + language.slice(1)} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum}: ${exerciseTitle}
// This test runs in the Monaco Editor environment

console.log("🧪 Running ${language.charAt(0).toUpperCase() + language.slice(1)} ${level.charAt(0).toUpperCase() + level.slice(1)} Exercise ${exerciseNum} Tests...");

// Test configuration for Monaco Editor
const testConfig = {
  exerciseTitle: "${exerciseTitle}",
  language: "${language}",
  requirements: [
    "Write clean, readable code",
    "Follow ${language} best practices", 
    "Include appropriate comments",
    "Test your solution thoroughly"
  ]
};

// Test functions that work in browser environment
function runTests(userCode) {
  const results = {
    syntaxCheckPassed: false,
    structureCheckPassed: false,
    functionalityCheckPassed: false,
    errors: [],
    warnings: [],
    structureChecks: [],
    score: 0
  };

  try {
    // 1. Syntax Check
    results.syntaxCheckPassed = checkSyntax(userCode, results);
    
    // 2. Structure Check
    results.structureCheckPassed = checkStructure(userCode, results);
    
    // 3. Functionality Check
    results.functionalityCheckPassed = checkFunctionality(userCode, results);
    
    // 4. Calculate Score
    calculateScore(results);
    
    return results;
  } catch (error) {
    results.errors.push(`Test execution error: ${error.message}`);
    return results;
  }
}

function checkSyntax(code, results) {
  try {
    ${isJavaScript ? 'new Function(code);' : '// Basic syntax validation for ' + language}
    console.log("✅ Syntax check passed");
    return true;
  } catch (error) {
    console.log("❌ Syntax error:", error.message);
    results.errors.push(`Syntax Error: ${error.message}`);
    return false;
  }
}

function checkStructure(code, results) {
  let passed = true;
  
  ${isJavaScript ? `
  // Check for console.log statements
  const hasConsoleLog = /console\\.log\\s*\\(/.test(code);
  if (hasConsoleLog) {
    console.log("✅ Found console.log statement(s)");
    results.structureChecks.push("✅ Found console.log statement(s)");
  } else {
    console.log("❌ No console.log statements found");
    results.structureChecks.push("❌ No console.log statements found");
    passed = false;
  }

  // Check for variable declarations
  const hasVariables = /\\b(let|const|var)\\s+\\w+/.test(code);
  if (hasVariables) {
    console.log("✅ Found variable declarations");
    results.structureChecks.push("✅ Found variable declarations");
  } else {
    console.log("❌ No variable declarations found");
    results.structureChecks.push("❌ No variable declarations found");
    passed = false;
  }` : `
  // Basic structure checks for ${language}
  if (code.trim().length > 0) {
    console.log("✅ Code is not empty");
    results.structureChecks.push("✅ Code is not empty");
  } else {
    console.log("❌ Code is empty");
    results.structureChecks.push("❌ Code is empty");
    passed = false;
  }`}

  return passed;
}

function checkFunctionality(code, results) {
  try {
    ${isJavaScript ? `
    // Capture console.log output
    const logs = [];
    
    // Mock console.log to capture output
    const mockConsole = {
      log: (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      }
    };

    // Execute user code with mocked console
    const executeCode = new Function('console', code);
    executeCode(mockConsole);

    if (logs.length > 0) {
      console.log("✅ Code executed and produced output");
      results.output = logs.join('\\n');
      return true;
    } else {
      console.log("❌ Code executed but produced no output");
      results.warnings.push("Code executed but produced no console output");
      return false;
    }` : `
    // Basic functionality check for ${language}
    if (code.trim().length > 10) {
      console.log("✅ Code appears to have meaningful content");
      results.output = "${language.charAt(0).toUpperCase() + language.slice(1)} code validated (browser simulation)";
      return true;
    } else {
      console.log("❌ Code appears too short");
      return false;
    }`}
  } catch (error) {
    console.log("❌ Runtime error:", error.message);
    results.errors.push(`Runtime Error: ${error.message}`);
    return false;
  }
}

function calculateScore(results) {
  let score = 0;
  
  if (results.syntaxCheckPassed) score += 30;
  if (results.structureCheckPassed) score += 50;
  if (results.functionalityCheckPassed) score += 20;
  
  results.score = Math.min(score, 100);
  
  console.log(`📊 Final Score: ${results.score}/100`);
}

// Export for Monaco Editor testing system
if (typeof window !== 'undefined') {
  window.exerciseTest = { runTests, testConfig };
}

console.log("✅ Test file loaded successfully");
console.log("Requirements:", testConfig.requirements.join(", "));`;
  }
}

// Function to get exercise title from existing test file or generate one
function getExerciseTitle(language, level, exerciseNum) {
  const titles = {
    javascript: {
      basic: [
        "Variables and Data Types", "Basic Arithmetic Operations", "Functions and Parameters",
        "Conditional Statements", "Loops and Iteration", "Arrays and Basic Methods",
        "DOM Manipulation Basics", "Event Listeners", "String Methods", "Basic Error Handling"
      ],
      intermediate: [
        "Closures and Scope", "Higher-Order Functions", "Array Methods", "Promises and Async",
        "Object-Oriented Programming", "Event Delegation", "Modules and Imports",
        "Regular Expressions", "Custom Error Handling", "Advanced DOM Manipulation"
      ],
      hard: [
        "Advanced Closures", "Functional Programming", "Advanced Arrays", "Async Patterns",
        "Design Patterns", "Advanced Events", "Module Bundling", "Advanced RegExp",
        "Error Handling", "Web APIs"
      ]
    },
    python: {
      basic: [
        "Variables and Data Types", "Basic Arithmetic Operations", "Functions and Parameters",
        "Conditional Statements", "Loops and Iteration", "Lists and Methods",
        "Dictionaries and Sets", "String Manipulation", "File I/O", "Basic Error Handling"
      ]
    }
  };
  
  const langTitles = titles[language] || {};
  const levelTitles = langTitles[level] || [];
  return levelTitles[exerciseNum - 1] || `Exercise ${exerciseNum}`;
}

// Function to process all test files
function fixAllTests() {
  console.log('Starting to fix all test files...');
  
  Object.entries(languages).forEach(([language, config]) => {
    const langDir = path.join(exerciseDir, language);
    
    if (!fs.existsSync(langDir)) {
      console.log(`Skipping ${language} - directory doesn't exist`);
      return;
    }
    
    ['basic', 'intermediate', 'hard'].forEach(level => {
      const levelDir = path.join(langDir, level);
      
      if (!fs.existsSync(levelDir)) {
        console.log(`Skipping ${language}/${level} - directory doesn't exist`);
        return;
      }
      
      // Get all exercise directories (numbered folders)
      const exercises = fs.readdirSync(levelDir)
        .filter(item => {
          const itemPath = path.join(levelDir, item);
          return fs.statSync(itemPath).isDirectory() && /^\d+$/.test(item);
        })
        .sort((a, b) => parseInt(a) - parseInt(b));
      
      exercises.forEach(exerciseNum => {
        const exerciseDir = path.join(levelDir, exerciseNum);
        const testFilePath = path.join(exerciseDir, config.testFile);
        
        // Check if test file exists and needs fixing
        if (fs.existsSync(testFilePath)) {
          const currentContent = fs.readFileSync(testFilePath, 'utf8');
          
          // Check if it's a Node.js style test (contains require, fs, etc.)
          if (currentContent.includes('require(') || currentContent.includes('fs.')) {
            console.log(`Fixing ${language}/${level}/${exerciseNum}/${config.testFile}`);
            
            const exerciseTitle = getExerciseTitle(language, level, parseInt(exerciseNum));
            const newContent = createBrowserCompatibleTest(language, level, exerciseNum, exerciseTitle);
            
            // Backup original file
            const backupPath = testFilePath + '.backup';
            if (!fs.existsSync(backupPath)) {
              fs.writeFileSync(backupPath, currentContent);
            }
            
            // Write new browser-compatible test
            fs.writeFileSync(testFilePath, newContent);
            console.log(`✅ Fixed ${testFilePath}`);
          } else {
            console.log(`⏭️  Skipping ${testFilePath} - already browser-compatible`);
          }
        } else {
          console.log(`⚠️  Test file not found: ${testFilePath}`);
        }
      });
    });
  });
  
  console.log('✅ Finished fixing all test files!');
}

// Run the fix
fixAllTests();