// java/intermediate/8/tests.js
// Test for Database Connectivity (JDBC)
console.log("🧪 Testing: Database Connectivity (JDBC)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Connection
        const hasConnection = userCode.match(/\bConnection\s+\w+\s*(=\s*DriverManager\.getConnection\s*\(\s*[^)]+\))?\s*;/);
        if (hasConnection) {
            checks.push("✅ Has Connection");
            score += 25;
        } else {
            checks.push("❌ Missing Connection");
        }
        
        // Check for PreparedStatement
        const hasPreparedStatement = userCode.match(/\bPreparedStatement\s+\w+\s*(=\s*\w+\.prepareStatement\s*\(\s*[^)]+\))?\s*;/);
        if (hasPreparedStatement) {
            checks.push("✅ Has PreparedStatement");
            score += 25;
        } else {
            checks.push("❌ Missing PreparedStatement");
        }
        
        // Check for executeQuery or executeUpdate
        const hasExecute = userCode.match(/\b\w+\.(executeQuery|executeUpdate)\s*\(\s*[^)]*\)\s*;/);
        if (hasExecute) {
            checks.push("✅ Has executeQuery or executeUpdate");
            score += 25;
        } else {
            checks.push("❌ Missing executeQuery or executeUpdate");
        }
        
        // Check for import java.sql
        const hasSqlImport = userCode.match(/\bimport\s+java\.sql\.\w+\s*;/);
        if (hasSqlImport) {
            checks.push("✅ Has java.sql import");
            score += 25;
        } else {
            checks.push("❌ Missing java.sql import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JDBC features`;
            
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

console.log("✅ Test ready for: Database Connectivity (JDBC)");