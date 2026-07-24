
// nodejs/intermediate/9/tests.js
// Test for Caching Strategies
console.log("🧪 Testing: Caching Strategies");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for redis import
        const hasRedisImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]redis['"]\s*\)/);
        if (hasRedisImport) {
            checks.push("✅ Has redis import");
            score += 25;
        } else {
            checks.push("❌ Missing redis import");
        }
        
        // Check for redis client creation
        const hasRedisClient = userCode.match(/createClient\s*\(\s*{/);
        if (hasRedisClient) {
            checks.push("✅ Has redis client creation");
            score += 25;
        } else {
            checks.push("❌ Missing redis client creation");
        }
        
        // Check for cache get
        const hasCacheGet = userCode.match(/\.get\s*\(\s*['"][^'"]+['"]/);
        if (hasCacheGet) {
            checks.push("✅ Has cache get");
            score += 25;
        } else {
            checks.push("❌ Missing cache get");
        }
        
        // Check for cache set
        const hasCacheSet = userCode.match(/\.set\s*\(\s*['"][^'"]+['"]/);
        if (hasCacheSet) {
            checks.push("✅ Has cache set");
            score += 25;
        } else {
            checks.push("❌ Missing cache set");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more caching features`;
            
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
      topic: "Caching Strategies",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Caching Strategies");