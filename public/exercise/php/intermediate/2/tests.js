// php/intermediate/2/tests.js
// Test for Database Connectivity
console.log("🧪 Testing: Database Connectivity");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for PDO connection
        const hasPDO = userCode.match(/\$\w+\s*=\s*new\s+PDO\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasPDO) {
            checks.push("✅ Has PDO connection");
            score += 25;
        } else {
            checks.push("❌ Missing PDO connection");
        }
        
        // Check for MySQLi connection
        const hasMySQLi = userCode.match(/\$\w+\s*=\s*new\s+mysqli\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasMySQLi) {
            checks.push("✅ Has MySQLi connection");
            score += 25;
        } else {
            checks.push("❌ Missing MySQLi connection");
        }
        
        // Check for query execution
        const hasQuery = userCode.match(/\$\w+\s*->\s*(query|prepare)\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasQuery) {
            checks.push("✅ Has query execution");
            score += 25;
        } else {
            checks.push("❌ Missing query execution");
        }
        
        // Check for fetch operation
        const hasFetch = userCode.match(/\$\w+\s*->\s*(fetch|fetchAll)\s*\(\s*[^)]*\)\s*;/);
        if (hasFetch) {
            checks.push("✅ Has fetch operation");
            score += 25;
        } else {
            checks.push("❌ Missing fetch operation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more database connectivity features`;
            
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
console.log("✅ Test ready for: Database Connectivity");