// python/basic/3/tests.js
// Test for Functions and Parameters
console.log("🧪 Testing: Functions and Parameters");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for function definition
        const hasFunctionDef = userCode.match(/\bdef\s+\w+\s*\(\s*[^)]*\)\s*:/);
        if (hasFunctionDef) {
            checks.push("✅ Has function definition");
            score += 25;
        } else {
            checks.push("❌ Missing function definition");
        }
        
        // Check for function with parameters
        const hasParams = userCode.match(/\bdef\s+\w+\s*\(\s*\w+\s*(,\s*\w+\s*)*\)\s*:/);
        if (hasParams) {
            checks.push("✅ Has function with parameters");
            score += 25;
        } else {
            checks.push("❌ Missing function with parameters");
        }
        
        // Check for return statement
        const hasReturn = userCode.match(/\breturn\s+[^;]+/);
        if (hasReturn) {
            checks.push("✅ Has return statement");
            score += 25;
        } else {
            checks.push("❌ Missing return statement");
        }
        
        // Check for function call
        const hasFunctionCall = userCode.match(/\b\w+\s*\(\s*[^)]*\)\s*/);
        if (hasFunctionCall) {
            checks.push("✅ Has function call");
            score += 25;
        } else {
            checks.push("❌ Missing function call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more function features`;
            
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
console.log("✅ Test ready for: Functions and Parameters");