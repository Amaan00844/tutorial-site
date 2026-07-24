// php/hard/3/tests.js
// Test for Performance Optimization
console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for caching (e.g., Memcached)
        const hasCaching = userCode.match(/\$\w+\s*=\s*new\s+(Memcached|Redis)\s*\(\s*[^)]*\)\s*;/);
        if (hasCaching) {
            checks.push("✅ Has caching");
            score += 25;
        } else {
            checks.push("❌ Missing caching");
        }
        
        // Check for prepared statements
        const hasPreparedStatement = userCode.match(/\$\w+\s*->\s*prepare\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasPreparedStatement) {
            checks.push("✅ Has prepared statement");
            score += 25;
        } else {
            checks.push("❌ Missing prepared statement");
        }
        
        // Check for output buffering
        const hasOutputBuffering = userCode.match(/\bob_(start|end_clean)\s*\(\s*\)\s*;/);
        if (hasOutputBuffering) {
            checks.push("✅ Has output buffering");
            score += 25;
        } else {
            checks.push("❌ Missing output buffering");
        }
        
        // Check for ini_set optimization
        const hasIniSet = userCode.match(/\bini_set\s*\(\s*['"][^'"]+['"]\s*,\s*[^)]+\)\s*;/);
        if (hasIniSet) {
            checks.push("✅ Has ini_set optimization");
            score += 25;
        } else {
            checks.push("❌ Missing ini_set optimization");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more performance optimization features`;
            
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
console.log("✅ Test ready for: Performance Optimization");