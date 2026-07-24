// php/basic/10/tests.js
// Test for Error Handling
console.log("🧪 Testing: Error Handling");

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
        const hasCatch = userCode.match(/\bcatch\s*\(\s*\w+\s+\$\w+\s*\)\s*{/);
        if (hasCatch) {
            checks.push("✅ Has catch block");
            score += 25;
        } else {
            checks.push("❌ Missing catch block");
        }
        
        // Check for throw statement
        const hasThrow = userCode.match(/\bthrow\s+new\s+\w+\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasThrow) {
            checks.push("✅ Has throw statement");
            score += 25;
        } else {
            checks.push("❌ Missing throw statement");
        }
        
        // Check for error reporting
        const hasErrorReporting = userCode.match(/\berror_reporting\s*\(\s*[^)]+\)\s*;/);
        if (hasErrorReporting) {
            checks.push("✅ Has error reporting");
            score += 25;
        } else {
            checks.push("❌ Missing error reporting");
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
console.log("✅ Test ready for: Error Handling");
