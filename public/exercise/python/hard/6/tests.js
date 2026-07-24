// python/hard/6/tests.js
// Test for Web Framework Development
console.log("🧪 Testing: Web Framework Development");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Flask/Django import
        const hasFrameworkImport = userCode.match(/\bimport\s+(flask|django)\b/);
        if (hasFrameworkImport) {
            checks.push("✅ Has Flask/Django import");
            score += 25;
        } else {
            checks.push("❌ Missing Flask/Django import");
        }
        
        // Check for route decorator
        const hasRoute = userCode.match(/@app\.route\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasRoute) {
            checks.push("✅ Has route decorator");
            score += 25;
        } else {
            checks.push("❌ Missing route decorator");
        }
        
        // Check for app creation
        const hasAppCreation = userCode.match(/\bapp\s*=\s*Flask\s*\(\s*[^)]+\)/);
        if (hasAppCreation) {
            checks.push("✅ Has app creation");
            score += 25;
        } else {
            checks.push("❌ Missing app creation");
        }
        
        // Check for route handler
        const hasRouteHandler = userCode.match(/@app\.route\s*\(\s*['"][^'"]+['"]\s*\)\s*\n\s*def\s+\w+\s*\(/);
        if (hasRouteHandler) {
            checks.push("✅ Has route handler");
            score += 25;
        } else {
            checks.push("❌ Missing route handler");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more web framework features`;
            
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
console.log("✅ Test ready for: Web Framework Development");