// php/intermediate/7/tests.js
// Test for Authentication Systems
console.log("🧪 Testing: Authentication Systems");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for password_hash
        const hasPasswordHash = userCode.match(/\bpassword_hash\s*\(\s*[^)]+\)\s*;/);
        if (hasPasswordHash) {
            checks.push("✅ Has password_hash");
            score += 25;
        } else {
            checks.push("❌ Missing password_hash");
        }
        
        // Check for password_verify
        const hasPasswordVerify = userCode.match(/\bpassword_verify\s*\(\s*[^)]+\)\s*;/);
        if (hasPasswordVerify) {
            checks.push("✅ Has password_verify");
            score += 25;
        } else {
            checks.push("❌ Missing password_verify");
        }
        
        // Check for session-based authentication
        const hasSessionAuth = userCode.match(/\$_SESSION\s*\[\s*['"]user[^'"]*['"]\s*\]\s*=/);
        if (hasSessionAuth) {
            checks.push("✅ Has session-based authentication");
            score += 25;
        } else {
            checks.push("❌ Missing session-based authentication");
        }
        
        // Check for login validation
        const hasLoginValidation = userCode.match(/\bif\s*\(\s*password_verify\s*\(\s*[^)]+\)\s*\)\s*{/);
        if (hasLoginValidation) {
            checks.push("✅ Has login validation");
            score += 25;
        } else {
            checks.push("❌ Missing login validation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more authentication features`;
            
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
console.log("✅ Test ready for: Authentication Systems");