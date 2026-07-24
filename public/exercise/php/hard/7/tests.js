// php/hard/7/tests.js
// Test for Advanced Database Queries
console.log("🧪 Testing: Advanced Database Queries");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for JOIN query
        const hasJoinQuery = userCode.match(/\bSELECT\s+.*\s+FROM\s+\w+\s+(INNER\s+)?JOIN\s+\w+\s+ON\s+[^;]+;/);
        if (hasJoinQuery) {
            checks.push("✅ Has JOIN query");
            score += 25;
        } else {
            checks.push("❌ Missing JOIN query");
        }
        
        // Check for prepared statement
        const hasPreparedStatement = userCode.match(/\$\w+\s*->\s*prepare\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasPreparedStatement) {
            checks.push("✅ Has prepared statement");
            score += 25;
        } else {
            checks.push("❌ Missing prepared statement");
        }
        
        // Check for GROUP BY or HAVING
        const hasGroupBy = userCode.match(/\b(GROUP\s+BY|HAVING)\s+[^;]+;/);
        if (hasGroupBy) {
            checks.push("✅ Has GROUP BY or HAVING");
            score += 25;
        } else {
            checks.push("❌ Missing GROUP BY or HAVING");
        }
        
        // Check for subquery
        const hasSubquery = userCode.match(/\bSELECT\s+.*\s*\(\s*SELECT\s+[^)]+\)\s*;/);
        if (hasSubquery) {
            checks.push("✅ Has subquery");
            score += 25;
        } else {
            checks.push("❌ Missing subquery");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced database query features`;
            
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
console.log("✅ Test ready for: Advanced Database Queries");