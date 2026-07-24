
// javascript/hard/3/tests.js
// Test for Advanced Async Patterns
console.log("🧪 Testing: Advanced Async Patterns");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for generator function
        const hasGenerator = userCode.match(/\bfunction\s*\*\s+\w+\s*\(\s*\)\s*{/);
        if (hasGenerator) {
            checks.push("✅ Has generator function");
            score += 25;
        } else {
            checks.push("❌ Missing generator function");
        }
        
        // Check for yield
        const hasYield = userCode.match(/\byield\s+[^;]+;/);
        if (hasYield) {
            checks.push("✅ Has yield");
            score += 25;
        } else {
            checks.push("❌ Missing yield");
        }
        
        // Check for async iterator
        const hasAsyncIterator = userCode.match(/\basync\s+function\s*\*\s+\w+\s*\(\s*\)\s*{/);
        if (hasAsyncIterator) {
            checks.push("✅ Has async iterator");
            score += 25;
        } else {
            checks.push("❌ Missing async iterator");
        }
        
        // Check for for await...of
        const hasForAwaitOf = userCode.match(/\bfor\s+await\s*\(\s*(let|const)\s+\w+\s+of\s+\w+\s*\)\s*{/);
        if (hasForAwaitOf) {
            checks.push("✅ Has for await...of");
            score += 25;
        } else {
            checks.push("❌ Missing for await...of");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced async features`;
            
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

console.log("✅ Test ready for: Advanced Async Patterns");