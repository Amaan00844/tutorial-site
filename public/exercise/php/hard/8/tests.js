// php/hard/8/tests.js
// Test for API Rate Limiting
console.log("🧪 Testing: API Rate Limiting");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for rate limit check
        const hasRateLimitCheck = userCode.match(/\bif\s*\(\s*\$\w+\s*>\s*\d+\s*\)\s*{/);
        if (hasRateLimitCheck) {
            checks.push("✅ Has rate limit check");
            score += 25;
        } else {
            checks.push("❌ Missing rate limit check");
        }
        
        // Check for cache for rate limiting
        const hasCache = userCode.match(/\$\w+\s*=\s*new\s+(Memcached|Redis)\s*\(\s*[^)]*\)\s*;/);
        if (hasCache) {
            checks.push("✅ Has cache for rate limiting");
            score += 25;
        } else {
            checks.push("❌ Missing cache for rate limiting");
        }
        
        // Check for HTTP 429 response
        const hasTooManyRequests = userCode.match(/\bheader\s*\(\s*['"]HTTP\/1\.\d\s+429\s+Too\s+Many\s+Requests['"]\s*\)\s*;/);
        if (hasTooManyRequests) {
            checks.push("✅ Has HTTP 429 response");
            score += 25;
        } else {
            checks.push("❌ Missing HTTP 429 response");
        }
        
        // Check for rate limit storage
        const hasRateLimitStorage = userCode.match(/\$\w+\s*->\s*(set|setex)\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasRateLimitStorage) {
            checks.push("✅ Has rate limit storage");
            score += 25;
        } else {
            checks.push("❌ Missing rate limit storage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more API rate limiting features`;
            
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
console.log("✅ Test ready for: API Rate Limiting");