
// nodejs/basic/5/tests.js
// Test for Asynchronous Programming
console.log("🧪 Testing: Asynchronous Programming");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for async function
        const hasAsync = userCode.match(/async\s+function\s+\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasAsync) {
            checks.push("✅ Has async function");
            score += 25;
        } else {
            checks.push("❌ Missing async function");
        }
        
        // Check for await keyword
        const hasAwait = userCode.match(/\bawait\s+\w+\.\w+\s*\(/);
        if (hasAwait) {
            checks.push("✅ Has await keyword");
            score += 25;
        } else {
            checks.push("❌ Missing await keyword");
        }
        
        // Check for Promise
        const hasPromise = userCode.match(/new\s+Promise\s*\(\s*function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{/);
        if (hasPromise) {
            checks.push("✅ Has Promise");
            score += 25;
        } else {
            checks.push("❌ Missing Promise");
        }
        
        // Check for error handling
        const hasTryCatch = userCode.match(/try\s*{[^}]*}\s*catch\s*\(\s*err\s*\)\s*{/);
        if (hasTryCatch) {
            checks.push("✅ Has try-catch");
            score += 25;
        } else {
            checks.push("❌ Missing try-catch");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more asynchronous programming features`;
            
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
      topic: "Asynchronous Programming",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Asynchronous Programming");