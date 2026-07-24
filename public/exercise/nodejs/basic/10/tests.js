
// nodejs/basic/10/tests.js
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
        
        // Check for try-catch block
        const hasTryCatch = userCode.match(/try\s*{[^}]*}\s*catch\s*\(\s*err\s*\)\s*{/);
        if (hasTryCatch) {
            checks.push("✅ Has try-catch block");
            score += 25;
        } else {
            checks.push("❌ Missing try-catch block");
        }
        
        // Check for error throw
        const hasThrow = userCode.match(/throw\s+new\s+Error\s*\(\s*['"][^'"]+['"]/);
        if (hasThrow) {
            checks.push("✅ Has error throw");
            score += 25;
        } else {
            checks.push("❌ Missing error throw");
        }
        
        // Check for error logging
        const hasErrorLog = userCode.match(/console\.error\s*\(\s*err\s*\)/);
        if (hasErrorLog) {
            checks.push("✅ Has error logging");
            score += 25;
        } else {
            checks.push("❌ Missing error logging");
        }
        
        // Check for error handling in callback
        const hasCallbackError = userCode.match(/function\s*\(\s*err\s*,[^)]*\)\s*{[^}]*if\s*\(\s*err\s*\)\s*{/);
        if (hasCallbackError) {
            checks.push("✅ Has callback error handling");
            score += 25;
        } else {
            checks.push("❌ Missing callback error handling");
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
      topic: "Error Handling",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Error Handling");