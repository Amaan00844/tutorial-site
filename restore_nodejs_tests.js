const fs = require('fs');
const path = require('path');

// Base directory for all exercises
const exerciseDir = 'c:\\Users\\user\\Desktop\\tutorial-site\\public\\exercise';

// Function to get all tests.js files recursively
function getAllTestFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTestFiles(fullPath));
    } else if (item === 'tests.js') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to restore original Node.js test format
function restoreNodeJsTest(filePath) {
  console.log(`Restoring: ${filePath}`);
  
  // Standard Node.js test template
  const nodeJsTestContent = `const { ESLint } = require('eslint');
const esprima = require('esprima');
console.clear();
console.clear();
const fs = require('fs');
const path = require('path');

// File paths
const attemptsFile = path.join(__dirname, 'attempts.tests');
const resultFile = path.join(__dirname, 'results.tests');

// Read JavaScript
const js = fs.readFileSync('index.js', 'utf8');

// Helper: Read Attempts (default to 1)
function readAttempts() {
  if (fs.existsSync(attemptsFile)) {
    const data = fs.readFileSync(attemptsFile, 'utf8');
    try {
      const parsed = JSON.parse(data);
      return parsed.count >= 1 ? parsed.count : 1;
    } catch (err) {
      console.error('Error parsing attempts.tests. Resetting counter.');
      return 1;
    }
  }
  return 1;
}

// Helper: Write Attempt Count
function writeAttempts(count) {
  try {
    fs.writeFileSync(attemptsFile, JSON.stringify({ count }, null, 2));
  } catch (err) {
    console.error(\`Failed to write to \${attemptsFile}: \${err.message}\`);
  }
}

// Syntax Verification using ESLint
async function syntaxVerify() {
  const eslint = new ESLint();
  const results = await eslint.lintText(js);
  if (results[0].errorCount === 0) {
    console.log('✔ JavaScript syntax is valid.');
    return true;
  } else {
    console.log('❌ JavaScript syntax is not valid:');
    results[0].messages.forEach(msg => console.log(\`- [\${msg.ruleId}] \${msg.message} (line \${msg.line})\`));
    return false;
  }
}

// Code Verification
function codeVerify() {
  let allPassed = true;
  let ast;
  try {
    ast = esprima.parseScript(js, { tolerant: true });
  } catch (err) {
    console.log(\`✘ Failed to parse JavaScript: \${err.message}\`);
    return false;
  }

  let consoleLogs = 0;
  function traverse(node) {
    if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' && node.callee.object.name === 'console' && node.callee.property.name === 'log') {
      consoleLogs++;
    }
    for (const key in node) {
      if (node[key] && typeof node[key] === 'object') {
        traverse(node[key]);
      }
    }
  }
  traverse(ast);

  if (consoleLogs === 0) {
    console.log('✘ No console.log statements found');
    allPassed = false;
  } else {
    console.log(\`✔ Found \${consoleLogs} console.log statement(s)\`);
  }

  const variableDeclarations = ast.body.filter(node => node.type === 'VariableDeclaration');
  if (variableDeclarations.length === 0) {
    console.log('✘ No variable declarations found');
    allPassed = false;
  } else {
    console.log(\`✔ Found \${variableDeclarations.length} variable declaration(s)\`);
  }

  if (allPassed) {
    console.log('\\n🎉 Success! Code verification passed.');
  } else {
    console.log('\\n❗ Code verification failed. Please review your JavaScript.');
  }
  return allPassed;
}

// Main execution
(async () => {
  const startTime = process.hrtime();
const syntaxPassed = await syntaxVerify();
if (!syntaxPassed) {
  console.log('\\n❌ Syntax errors prevent further checks.');
  ;
}

  const structurePassed = codeVerify();
  const allPassed = syntaxPassed && structurePassed;

  const [sec, nanosec] = process.hrtime(startTime);
  const executionTime = +(sec + nanosec / 1e9).toFixed(3);
  const linesOfCode = js.split('\\n').filter(line => line.trim()).length;

  let attempts = readAttempts();
  if (allPassed) {
    const resultData = { attempts, linesOfCode, executionTime, syntaxCheckPassed: syntaxPassed, structureCheckPassed: structurePassed, timestamp: new Date().toISOString() };
    try {
      fs.writeFileSync(resultFile, JSON.stringify(resultData, null, 2));
      console.log(\`\\n✅ All tests passed. Results saved to \${resultFile}.\`);
    } catch (err) {
      console.error(\`Failed to write to \${resultFile}: \${err.message}\`);
    }
    process.exit(0);
  } else {
    attempts += 1;
    writeAttempts(attempts);
    console.log(\`\\n❌ One or more tests failed. Attempt #\${attempts} recorded.\`);
    ;
  }
})();`;

  fs.writeFileSync(filePath, nodeJsTestContent);
  console.log(`✓ Restored: ${filePath}`);
}

// Main execution
console.log('Restoring ALL test files to original Node.js format...');

const testFiles = getAllTestFiles(exerciseDir);
console.log(`Found ${testFiles.length} test files to restore`);

let restored = 0;
testFiles.forEach(file => {
  try {
    restoreNodeJsTest(file);
    restored++;
  } catch (error) {
    console.error(`Error restoring ${file}: ${error.message}`);
  }
});

console.log('\\nRestore completed!');
console.log(`Total files restored: ${restored} out of ${testFiles.length}`);