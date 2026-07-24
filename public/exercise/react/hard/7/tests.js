// react/hard/7/tests.js
// Test for Advanced Routing
console.log("🧪 Testing: Advanced Routing");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for nested Route
        const hasNestedRoute = userCode.match(/<Route\s+[^>]*>\s*<\w+\s+[^>]*>\s*<\/\w+>\s*<\/Route>/);
        if (hasNestedRoute) {
            checks.push("✅ Has nested Route");
            score += 25;
        } else {
            checks.push("❌ Missing nested Route");
        }
        
        // Check for dynamic route
        const hasDynamicRoute = userCode.match(/<Route\s+path\s*=\s*['"][^'"]+:\w+['"]/);
        if (hasDynamicRoute) {
            checks.push("✅ Has dynamic route");
            score += 25;
        } else {
            checks.push("❌ Missing dynamic route");
        }
        
        // Check for useParams
        const hasUseParams = userCode.match(/useParams\s*\(\s*\)/);
        if (hasUseParams) {
            checks.push("✅ Has useParams");
            score += 25;
        } else {
            checks.push("❌ Missing useParams");
        }
        
        // Check for useNavigate
        const hasUseNavigate = userCode.match(/const\s+navigate\s*=\s*useNavigate\s*\(\s*\)/);
        if (hasUseNavigate) {
            checks.push("✅ Has useNavigate");
            score += 25;
        } else {
            checks.push("❌ Missing useNavigate");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced routing features`;
            
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
console.log("✅ Test ready for: Advanced Routing");