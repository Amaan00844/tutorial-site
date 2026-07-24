// nodejs/hard/7/tests.js
// Test for Advanced Security Practices
console.log("🧪 Testing: Advanced Security Practices");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for JWT import
        const hasJwtImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]jsonwebtoken['"]\s*\)/);
        if (hasJwtImport) {
            checks.push("✅ Has JWT import");
            score += 25;
        } else {
            checks.push("❌ Missing JWT import");
        }
        
        // Check for OAuth implementation
        const hasOAuth = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]passport['"]\s*\)/);
        if (hasOAuth) {
            checks.push("✅ Has OAuth implementation");
            score += 25;
        } else {
            checks.push("❌ Missing OAuth implementation");
        }
        
        // Check for helmet usage
        const hasHelmet = userCode.match(/const\s+helmet\s*=\s*require\s*\(\s*['"]helmet['"]\s*\)/);
        if (hasHelmet) {
            checks.push("✅ Has helmet usage");
            score += 25;
        } else {
            checks.push("❌ Missing helmet usage");
        }
        
        // Check for rate limiting
        const hasRateLimit = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]express-rate-limit['"]\s*\)/);
        if (hasRateLimit) {
            checks.push("✅ Has rate limiting");
            score += 25;
        } else {
            checks.push("❌ Missing rate limiting");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced security features`;
            
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
      topic: "Advanced Security Practices",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Advanced Security Practices");
