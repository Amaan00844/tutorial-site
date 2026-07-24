
// nodejs/intermediate/4/tests.js
// Test for RESTful API Development
console.log("🧪 Testing: RESTful API Development");

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
        
        // Check for multiple HTTP methods
        const hasHttpMethods = userCode.match(/app\.(get|post|put|delete)\s*\(\s*['"][^'"]+['"]/);
        if (hasHttpMethods) {
            checks.push("✅ Has multiple HTTP methods");
            score += 25;
        } else {
            checks.push("❌ Missing multiple HTTP methods");
        }
        
        // Check for status codes
        const hasStatusCodes = userCode.match(/res\.status\s*\(\s*\d+\s*\)/);
        if (hasStatusCodes) {
            checks.push("✅ Has status codes");
            score += 25;
        } else {
            checks.push("❌ Missing status codes");
        }
        
        // Check for JSON response
        const hasJsonResponse = userCode.match(/res\.json\s*\(\s*{[^}]+}\s*\)/);
        if (hasJsonResponse) {
            checks.push("✅ Has JSON response");
            score += 25;
        } else {
            checks.push("❌ Missing JSON response");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more RESTful API features`;
            
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
      topic: "RESTful API Development",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: RESTful API Development");