// php/hard/2/tests.js
// Test for Framework Development
console.log("🧪 Testing: Framework Development");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Laravel/Symfony route
        const hasRoute = userCode.match(/\bRoute\s*::\s*(get|post|put|delete)\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasRoute) {
            checks.push("✅ Has Laravel/Symfony route");
            score += 25;
        } else {
            checks.push("❌ Missing Laravel/Symfony route");
        }
        
        // Check for controller class
        const hasController = userCode.match(/\bclass\s+\w+Controller\s*(extends\s+\w+)?\s*{/);
        if (hasController) {
            checks.push("✅ Has controller class");
            score += 25;
        } else {
            checks.push("❌ Missing controller class");
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
        const hasFrameworkRequire = userCode.match(/\brequire\s+['"].*(laravel|symfony).*['"]\s*;/);
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
            : `Score: ${result.score}/100 - Add more framework features`;
            
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
console.log("✅ Test ready for: Framework Development");
