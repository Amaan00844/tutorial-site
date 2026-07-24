// php/intermediate/5/tests.js
// Test for JSON and API Development
console.log("🧪 Testing: JSON and API Development");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for json_encode
        const hasJsonEncode = userCode.match(/\bjson_encode\s*\(\s*[^)]+\)\s*;/);
        if (hasJsonEncode) {
            checks.push("✅ Has json_encode");
            score += 25;
        } else {
            checks.push("❌ Missing json_encode");
        }
        
        // Check for json_decode
        const hasJsonDecode = userCode.match(/\bjson_decode\s*\(\s*[^)]+\)\s*;/);
        if (hasJsonDecode) {
            checks.push("✅ Has json_decode");
            score += 25;
        } else {
            checks.push("❌ Missing json_decode");
        }
        
        // Check for header for JSON
        const hasJsonHeader = userCode.match(/\bheader\s*\(\s*['"]Content-Type:\s*application\/json['"]\s*\)\s*;/);
        if (hasJsonHeader) {
            checks.push("✅ Has JSON content-type header");
            score += 25;
        } else {
            checks.push("❌ Missing JSON content-type header");
        }
        
        // Check for REST API endpoint
        const hasApiEndpoint = userCode.match(/\bif\s*\(\s*\$_SERVER\s*\[\s*['"]REQUEST_METHOD['"]\s*\]\s*==\s*['"](GET|POST|PUT|DELETE)['"]\s*\)\s*{/);
        if (hasApiEndpoint) {
            checks.push("✅ Has REST API endpoint");
            score += 25;
        } else {
            checks.push("❌ Missing REST API endpoint");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JSON and API features`;
            
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
console.log("✅ Test ready for: JSON and API Development");