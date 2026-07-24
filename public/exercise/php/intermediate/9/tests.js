// php/intermediate/9/tests.js
// Test for Caching Mechanisms
console.log("🧪 Testing: Caching Mechanisms");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Memcached connection
        const hasMemcached = userCode.match(/\$\w+\s*=\s*new\s+Memcached\s*\(\s*[^)]*\)\s*;/);
        if (hasMemcached) {
            checks.push("✅ Has Memcached connection");
            score += 25;
        } else {
            checks.push("❌ Missing Memcached connection");
        }
        
        // Check for Redis connection
        const hasRedis = userCode.match(/\$\w+\s*=\s*new\s+Redis\s*\(\s*[^)]*\)\s*;/);
        if (hasRedis) {
            checks.push("✅ Has Redis connection");
            score += 25;
        } else {
            checks.push("❌ Missing Redis connection");
        }
        
        // Check for cache set
        const hasCacheSet = userCode.match(/\$\w+\s*->\s*(set|setex)\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasCacheSet) {
            checks.push("✅ Has cache set operation");
            score += 25;
        } else {
            checks.push("❌ Missing cache set operation");
        }
        
        // Check for cache get
        const hasCacheGet = userCode.match(/\$\w+\s*->\s*get\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasCacheGet) {
            checks.push("✅ Has cache get operation");
            score += 25;
        } else {
            checks.push("❌ Missing cache get operation");
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
      topic: "Basic Arithmetic Operations",
      language: "javascript",
    },
  };
}
console.log("✅ Test ready for: Caching Mechanisms");
