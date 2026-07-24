// nodejs/intermediate/2/tests.js
// Test for Database Integration
console.log("🧪 Testing: Database Integration");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for database library import
        const hasDbImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"](mongoose|mysql2|pg)['"]\s*\)/);
        if (hasDbImport) {
            checks.push("✅ Has database library import");
            score += 25;
        } else {
            checks.push("❌ Missing database library import");
        }
        
        // Check for database connection
        const hasDbConnection = userCode.match(/\.connect\s*\(\s*['"][^'"]+['"]/);
        if (hasDbConnection) {
            checks.push("✅ Has database connection");
            score += 25;
        } else {
            checks.push("❌ Missing database connection");
        }
        
        // Check for model or schema definition
        const hasModel = userCode.match(/mongoose\.Schema\s*\(\s*{/);
        if (hasModel) {
            checks.push("✅ Has model or schema definition");
            score += 25;
        } else {
            checks.push("❌ Missing model or schema definition");
        }
        
        // Check for database query
        const hasQuery = userCode.match(/\.(find|create|query)\s*\(\s*[^)]+\)/);
        if (hasQuery) {
            checks.push("✅ Has database query");
            score += 25;
        } else {
            checks.push("❌ Missing database query");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more database integration features`;
            
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
      topic: "Database Integration",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Database Integration");
