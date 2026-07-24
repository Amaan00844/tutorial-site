
// nodejs/intermediate/3/tests.js
// Test for Authentication and Security
console.log("🧪 Testing: Authentication and Security");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for authentication library import
        const hasAuthImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"](jsonwebtoken|bcrypt)['"]\s*\)/);
        if (hasAuthImport) {
            checks.push("✅ Has authentication library import");
            score += 25;
        } else {
            checks.push("❌ Missing authentication library import");
        }
        
        // Check for JWT or bcrypt usage
        const hasAuthUsage = userCode.match(/(jwt\.sign|bcrypt\.hash)\s*\(\s*[^)]+\)/);
        if (hasAuthUsage) {
            checks.push("✅ Has JWT or bcrypt usage");
            score += 25;
        } else {
            checks.push("❌ Missing JWT or bcrypt usage");
        }
        
        // Check for middleware for authentication
        const hasAuthMiddleware = userCode.match(/function\s+\w+\s*\(\s*req\s*,\s*res\s*,\s*next\s*\)\s*{/);
        if (hasAuthMiddleware) {
            checks.push("✅ Has authentication middleware");
            score += 25;
        } else {
            checks.push("❌ Missing authentication middleware");
        }
        
        // Check for secure headers
        const hasSecureHeaders = userCode.match(/app\.use\s*\(\s*helmet\s*\(\s*\)/);
        if (hasSecureHeaders) {
            checks.push("✅ Has secure headers");
            score += 25;
        } else {
            checks.push("❌ Missing secure headers");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more authentication and security features`;
            
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
      topic: "Authentication and Security",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Authentication and Security");
