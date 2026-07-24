
// nodejs/intermediate/6/tests.js
// Test for Middleware Development
console.log("🧪 Testing: Middleware Development");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express import
        const hasExpressImport = userCode.match(/const\s+express\s*=\s*require\s*\(\s*['"]express['"]\s*\)/);
        if (hasExpressImport) {
            checks.push("✅ Has express import");
            score += 25;
        } else {
            checks.push("❌ Missing express import");
        }
        
        // Check for custom middleware
        const hasMiddleware = userCode.match(/function\s+\w+\s*\(\s*req\s*,\s*res\s*,\s*next\s*\)\s*{/);
        if (hasMiddleware) {
            checks.push("✅ Has custom middleware");
            score += 25;
        } else {
            checks.push("❌ Missing custom middleware");
        }
        
        // Check for app.use
        const hasAppUse = userCode.match(/app\.use\s*\(\s*function\s*\(\s*req\s*,\s*res\s*,\s*next\s*\)\s*{/);
        if (hasAppUse) {
            checks.push("✅ Has app.use for middleware");
            score += 25;
        } else {
            checks.push("❌ Missing app.use for middleware");
        }
        
        // Check for next() call
        const hasNextCall = userCode.match(/next\s*\(\s*\)/);
        if (hasNextCall) {
            checks.push("✅ Has next() call");
            score += 25;
        } else {
            checks.push("❌ Missing next() call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more middleware features`;
            
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
      topic: "Middleware Development",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Middleware Development");