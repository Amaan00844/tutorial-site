// nodejs/intermediate/1/tests.js
// Test for Express.js Framework
console.log("🧪 Testing: Express.js Framework");

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
        
        // Check for express app creation
        const hasAppCreation = userCode.match(/const\s+app\s*=\s*express\s*\(\s*\)/);
        if (hasAppCreation) {
            checks.push("✅ Has express app creation");
            score += 25;
        } else {
            checks.push("❌ Missing express app creation");
        }
        
        // Check for route definition
        const hasRoute = userCode.match(/app\.(get|post|put|delete)\s*\(\s*['"][^'"]+['"]/);
        if (hasRoute) {
            checks.push("✅ Has route definition");
            score += 25;
        } else {
            checks.push("❌ Missing route definition");
        }
        
        // Check for app.listen
        const hasAppListen = userCode.match(/app\.listen\s*\(\s*\d+\s*[,)]/);
        if (hasAppListen) {
            checks.push("✅ Has app.listen");
            score += 25;
        } else {
            checks.push("❌ Missing app.listen");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more Express.js features`;
            
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
      topic: "Express.js Framework",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Express.js Framework");