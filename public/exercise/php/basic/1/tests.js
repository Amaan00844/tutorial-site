// php/basic/1/tests.js
// Test for PHP Basics and Syntax
console.log("🧪 Testing: PHP Basics and Syntax");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for PHP opening tag
        const hasPhpTag = userCode.match(/<\?php/);
        if (hasPhpTag) {
            checks.push("✅ Has PHP opening tag");
            score += 25;
        } else {
            checks.push("❌ Missing PHP opening tag");
        }
        
        // Check for echo statement
        const hasEcho = userCode.match(/\becho\s+['"][^'"]+['"]\s*;/);
        if (hasEcho) {
            checks.push("✅ Has echo statement");
            score += 25;
        } else {
            checks.push("❌ Missing echo statement");
        }
        
        // Check for variable declaration
        const hasVariable = userCode.match(/\$\w+\s*=\s*[^;]+;/);
        if (hasVariable) {
            checks.push("✅ Has variable declaration");
            score += 25;
        } else {
            checks.push("❌ Missing variable declaration");
        }
        
        // Check for basic output
        const hasOutput = userCode.match(/\b(echo|print)\s+[^;]+;/);
        if (hasOutput) {
            checks.push("✅ Has output statement");
            score += 25;
        } else {
            checks.push("❌ Missing output statement");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more basic PHP syntax features`;
            
    } catch (e) {
        result.message = `Error: ${e.message}`;
    }
    
    return result;
}
// Export for Monaco Editor
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: runSimpleTest,
    testConfig: {
      topic: "Basic Arithmetic Operations",
      language: "javascript",
    },
  };
}
console.log("✅ Test ready for: PHP Basics and Syntax");
