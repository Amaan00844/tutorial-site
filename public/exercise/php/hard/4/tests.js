// php/hard/4/tests.js
// Test for Security Best Practices
console.log("🧪 Testing: Security Best Practices");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for htmlspecialchars
        const hasHtmlSpecialChars = userCode.match(/\bhtmlspecialchars\s*\(\s*[^)]+\)\s*;/);
        if (hasHtmlSpecialChars) {
            checks.push("✅ Has htmlspecialchars");
            score += 25;
        } else {
            checks.push("❌ Missing htmlspecialchars");
        }
        
        // Check for prepared statements
        const hasPreparedStatement = userCode.match(/\$\w+\s*->\s*prepare\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasPreparedStatement) {
            checks.push("✅ Has prepared statement");
            score += 25;
        } else {
            checks.push("❌ Missing prepared statement");
        }
        
        // Check for password_hash
        const hasPasswordHash = userCode.match(/\bpassword_hash\s*\(\s*[^)]+\)\s*;/);
        if (hasPasswordHash) {
            checks.push("✅ Has password_hash");
            score += 25;
        } else {
            checks.push("❌ Missing password_hash");
        }
        
        // Check for CSRF token
        const hasCsrfToken = userCode.match(/\$\w+\s*=\s*hash\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasCsrfToken) {
            checks.push("✅ Has CSRF token");
            score += 25;
        } else {
            checks.push("❌ Missing CSRF token");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more security features`;
            
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
console.log("✅ Test ready for: Security Best Practices");