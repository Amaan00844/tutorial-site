// nodejs/hard/5/tests.js
// Test for Production Deployment
console.log("🧪 Testing: Production Deployment");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for process.env.NODE_ENV
        const hasNodeEnv = userCode.match(/process\.env\.NODE_ENV/);
        if (hasNodeEnv) {
            checks.push("✅ Has NODE_ENV check");
            score += 25;
        } else {
            checks.push("❌ Missing NODE_ENV check");
        }
        
        // Check for error handling middleware
        const hasErrorMiddleware = userCode.match(/app\.use\s*\(\s*function\s*\(\s*err\s*,\s*req\s*,\s*res\s*,\s*next\s*\)\s*{/);
        if (hasErrorMiddleware) {
            checks.push("✅ Has error handling middleware");
            score += 25;
        } else {
            checks.push("❌ Missing error handling middleware");
        }
        
        // Check for compression
        const hasCompression = userCode.match(/const\s+compression\s*=\s*require\s*\(\s*['"]compression['"]\s*\)/);
        if (hasCompression) {
            checks.push("✅ Has compression middleware");
            score += 25;
        } else {
            checks.push("❌ Missing compression middleware");
        }
        
        // Check for logging
        const hasLogging = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"](winston|morgan)['"]\s*\)/);
        if (hasLogging) {
            checks.push("✅ Has logging setup");
            score += 25;
        } else {
            checks.push("❌ Missing logging setup");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more production deployment features`;
            
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
      topic: "Production Deployment",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Production Deployment");