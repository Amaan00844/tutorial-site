
// python/intermediate/7/tests.js
// Test for Database Operations
console.log("🧪 Testing: Database Operations");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for database connection (sqlite3)
        const hasDbConnection = userCode.match(/\bimport\s+sqlite3\b|\bsqlite3\.connect\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasDbConnection) {
            checks.push("✅ Has database connection");
            score += 25;
        } else {
            checks.push("❌ Missing database connection");
        }
        
        // Check for CREATE query
        const hasCreateQuery = userCode.match(/\bexecute\s*\(\s*['"]CREATE\s+TABLE[^'"]+['"]\s*\)/);
        if (hasCreateQuery) {
            checks.push("✅ Has CREATE query");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE query");
        }
        
        // Check for INSERT query
        const hasInsertQuery = userCode.match(/\bexecute\s*\(\s*['"]INSERT\s+INTO[^'"]+['"]\s*,/);
        if (hasInsertQuery) {
            checks.push("✅ Has INSERT query");
            score += 25;
        } else {
            checks.push("❌ Missing INSERT query");
        }
        
        // Check for SELECT query
        const hasSelectQuery = userCode.match(/\bexecute\s*\(\s*['"]SELECT\s+[^'"]+['"]\s*\)/);
        if (hasSelectQuery) {
            checks.push("✅ Has SELECT query");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT query");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more database operation features`;
            
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
console.log("✅ Test ready for: Database Operations");
