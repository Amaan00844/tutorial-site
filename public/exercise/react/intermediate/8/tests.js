// react/intermediate/8/tests.js
// Test for API Integration
console.log("🧪 Testing: API Integration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for fetch usage
        const hasFetch = userCode.match(/fetch\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasFetch) {
            checks.push("✅ Has fetch usage");
            score += 25;
        } else {
            checks.push("❌ Missing fetch usage");
        }
        
        // Check for useEffect for API call
        const hasUseEffect = userCode.match(/useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*fetch\s*\(/);
        if (hasUseEffect) {
            checks.push("✅ Has useEffect for API call");
            score += 25;
        } else {
            checks.push("❌ Missing useEffect for API call");
        }
        
        // Check for useState for API data
        const hasApiState = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasApiState) {
            checks.push("✅ Has useState for API data");
            score += 25;
        } else {
            checks.push("❌ Missing useState for API data");
        }
        
        // Check for JSON parsing
        const hasJsonParsing = userCode.match(/\.json\s*\(\s*\)/);
        if (hasJsonParsing) {
            checks.push("✅ Has JSON parsing");
            score += 25;
        } else {
            checks.push("❌ Missing JSON parsing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more API integration features`;
            
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
console.log("✅ Test ready for: API Integration");