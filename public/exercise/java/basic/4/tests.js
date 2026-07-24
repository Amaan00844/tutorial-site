
// java/basic/4/tests.js
// Test for Methods and Functions
console.log("🧪 Testing: Methods and Functions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for method declaration
        const hasMethodDecl = userCode.match(/\b(public|private|protected)\s+\w+\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasMethodDecl) {
            checks.push("✅ Has method declaration");
            score += 25;
        } else {
            checks.push("❌ Missing method declaration");
        }
        
        // Check for method with parameters
        const hasParams = userCode.match(/\b(public|private|protected)\s+\w+\s+\w+\s*\(\s*\w+\s+\w+\s*(,\s*\w+\s+\w+\s*)*\)\s*{/);
        if (hasParams) {
            checks.push("✅ Has method with parameters");
            score += 25;
        } else {
            checks.push("❌ Missing method with parameters");
        }
        
        // Check for return statement
        const hasReturn = userCode.match(/\breturn\s+[^;]+;/);
        if (hasReturn) {
            checks.push("✅ Has return statement");
            score += 25;
        } else {
            checks.push("❌ Missing return statement");
        }
        
        // Check for method call
        const hasMethodCall = userCode.match(/\b\w+\s*\(\s*[^)]*\)\s*;/);
        if (hasMethodCall) {
            checks.push("✅ Has method call");
            score += 25;
        } else {
            checks.push("❌ Missing method call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more method features`;
            
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

console.log("✅ Test ready for: Methods and Functions");
