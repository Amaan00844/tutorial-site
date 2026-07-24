// python/basic/10/tests.js
// Test for Basic Error Handling
console.log("🧪 Testing: Basic Error Handling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for try block
        const hasTry = userCode.match(/\btry\s*:/);
        if (hasTry) {
            checks.push("✅ Has try block");
            score += 25;
        } else {
            checks.push("❌ Missing try block");
        }
        
        // Check for except block
        const hasExcept = userCode.match(/\bexcept\s+[^:]+:/);
        if (hasExcept) {
            checks.push("✅ Has except block");
            score += 25;
        } else {
            checks.push("❌ Missing except block");
        }
        
        // Check for specific exception
        const hasSpecificException = userCode.match(/\bexcept\s+\w+\s*:/);
        if (hasSpecificException) {
            checks.push("✅ Has specific exception handling");
            score += 25;
        } else {
            checks.push("❌ Missing specific exception handling");
        }
        
        // Check for raise statement
        const hasRaise = userCode.match(/\braise\s+\w+\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasRaise) {
            checks.push("✅ Has raise statement");
            score += 25;
        } else {
            checks.push("❌ Missing raise statement");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more error handling features`;
            
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
console.log("✅ Test ready for: Basic Error Handling");