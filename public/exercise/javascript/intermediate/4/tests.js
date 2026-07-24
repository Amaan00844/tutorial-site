
// javascript/intermediate/4/tests.js
// Test for Promises and Async/Await
console.log("🧪 Testing: Promises and Async/Await");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Promise
        const hasPromise = userCode.match(/\bnew\s+Promise\s*\(\s*\(\s*resolve\s*(,\s*reject)?\s*\)\s*=>\s*{/);
        if (hasPromise) {
            checks.push("✅ Has Promise");
            score += 25;
        } else {
            checks.push("❌ Missing Promise");
        }
        
        // Check for async function
        const hasAsync = userCode.match(/\basync\s+function\s+\w+\s*\([^)]*\)\s*{/);
        if (hasAsync) {
            checks.push("✅ Has async function");
            score += 25;
        } else {
            checks.push("❌ Missing async function");
        }
        
        // Check for await
        const hasAwait = userCode.match(/\bawait\s+\w+\s*\(\s*[^)]+\)\s*;/);
        if (hasAwait) {
            checks.push("✅ Has await");
            score += 25;
        } else {
            checks.push("❌ Missing await");
        }
        
        // Check for Promise.all
        const hasPromiseAll = userCode.match(/\bPromise\.all\s*\(\s*\[.*\]\s*\)\s*;/);
        if (hasPromiseAll) {
            checks.push("✅ Has Promise.all");
            score += 25;
        } else {
            checks.push("❌ Missing Promise.all");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Promise and async/await features`;
            
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

console.log("✅ Test ready for: Promises and Async/Await");