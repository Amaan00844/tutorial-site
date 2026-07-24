
// javascript/intermediate/9/tests.js
// Test for Error Handling and Debugging
console.log("🧪 Testing: Error Handling and Debugging");

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
        const hasTry = userCode.match(/\btry\s*{/);
        if (hasTry) {
            checks.push("✅ Has try block");
            score += 25;
        } else {
            checks.push("❌ Missing try block");
        }
        
        // Check for catch block
        const hasCatch = userCode.match(/\bcatch\s*\(\s*\w+\s*\)\s*{/);
        if (hasCatch) {
            checks.push("✅ Has catch block");
            score += 25;
        } else {
            checks.push("❌ Missing catch block");
        }
        
        // Check for custom Error
        const hasCustomError = userCode.match(/\bnew\s+Error\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasCustomError) {
            checks.push("✅ Has custom Error");
            score += 25;
        } else {
            checks.push("❌ Missing custom Error");
        }
        
        // Check for console.debug or console.error
        const hasDebug = userCode.match(/\bconsole\.(debug|error)\s*\(\s*[^)]+\)\s*;/);
        if (hasDebug) {
            checks.push("✅ Has console.debug or console.error");
            score += 25;
        } else {
            checks.push("❌ Missing console.debug or console.error");
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

console.log("✅ Test ready for: Error Handling and Debugging");