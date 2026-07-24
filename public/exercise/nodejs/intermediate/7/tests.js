// nodejs/intermediate/7/tests.js
// Test for API Documentation
console.log("🧪 Testing: API Documentation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for swagger-jsdoc import
        const hasSwaggerImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]swagger-jsdoc['"]\s*\)/);
        if (hasSwaggerImport) {
            checks.push("✅ Has swagger-jsdoc import");
            score += 25;
        } else {
            checks.push("❌ Missing swagger-jsdoc import");
        }
        
        // Check for swagger definition
        const hasSwaggerDef = userCode.match(/swaggerDefinition\s*=\s*{/);
        if (hasSwaggerDef) {
            checks.push("✅ Has swagger definition");
            score += 25;
        } else {
            checks.push("❌ Missing swagger definition");
        }
        
        // Check for JSDoc comments
        const hasJsdoc = userCode.match(/\/\*\*\s*\n\s*\*\s*@\w+/);
        if (hasJsdoc) {
            checks.push("✅ Has JSDoc comments");
            score += 25;
        } else {
            checks.push("❌ Missing JSDoc comments");
        }
        
        // Check for app.use for swagger
        const hasSwaggerRoute = userCode.match(/app\.use\s*\(\s*['"][^'"]+['"]\s*,\s*swaggerUi\.serve/);
        if (hasSwaggerRoute) {
            checks.push("✅ Has swagger UI route");
            score += 25;
        } else {
            checks.push("❌ Missing swagger UI route");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more API documentation features`;
            
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
      topic: "API Documentation",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: API Documentation");