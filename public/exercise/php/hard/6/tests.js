// php/hard/6/tests.js
// Test for Microservices with PHP
console.log("🧪 Testing: Microservices with PHP");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for REST API endpoint
        const hasApiEndpoint = userCode.match(/\bif\s*\(\s*\$_SERVER\s*\[\s*['"]REQUEST_METHOD['"]\s*\]\s*==\s*['"](GET|POST|PUT|DELETE)['"]\s*\)\s*{/);
        if (hasApiEndpoint) {
            checks.push("✅ Has REST API endpoint");
            score += 25;
        } else {
            checks.push("❌ Missing REST API endpoint");
        }
        
        // Check for JSON response
        const hasJsonResponse = userCode.match(/\bjson_encode\s*\(\s*[^)]+\)\s*;/);
        if (hasJsonResponse) {
            checks.push("✅ Has JSON response");
            score += 25;
        } else {
            checks.push("❌ Missing JSON response");
        }
        
        // Check for middleware
        const hasMiddleware = userCode.match(/\$\w+\s*->\s*middleware\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasMiddleware) {
            checks.push("✅ Has middleware");
            score += 25;
        } else {
            checks.push("❌ Missing middleware");
        }
        
        // Check for framework require
        const hasFrameworkRequire = userCode.match(/\brequire\s+['"].*(laravel|symfony|lumen).*['"]\s*;/);
        if (hasFrameworkRequire) {
            checks.push("✅ Has framework require");
            score += 25;
        } else {
            checks.push("❌ Missing framework require");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more microservices features`;
            
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
console.log("✅ Test ready for: Microservices with PHP");