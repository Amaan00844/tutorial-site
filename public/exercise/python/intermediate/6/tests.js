
// python/intermediate/6/tests.js
// Test for Working with APIs
console.log("🧪 Testing: Working with APIs");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for requests import
        const hasRequestsImport = userCode.match(/\bimport\s+requests\b/);
        if (hasRequestsImport) {
            checks.push("✅ Has requests import");
            score += 25;
        } else {
            checks.push("❌ Missing requests import");
        }
        
        // Check for GET request
        const hasGetRequest = userCode.match(/\brequests\.get\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasGetRequest) {
            checks.push("✅ Has GET request");
            score += 25;
        } else {
            checks.push("❌ Missing GET request");
        }
        
        // Check for JSON parsing
        const hasJsonParse = userCode.match(/\b\w+\.json\s*\(\s*\)/);
        if (hasJsonParse) {
            checks.push("✅ Has JSON parsing");
            score += 25;
        } else {
            checks.push("❌ Missing JSON parsing");
        }
        
        // Check for POST request
        const hasPostRequest = userCode.match(/\brequests\.post\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasPostRequest) {
            checks.push("✅ Has POST request");
            score += 25;
        } else {
            checks.push("❌ Missing POST request");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more API features`;
            
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
console.log("✅ Test ready for: Working with APIs");