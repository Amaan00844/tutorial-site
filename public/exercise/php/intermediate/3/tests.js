// php/intermediate/3/tests.js
// Test for Session Management
console.log("🧪 Testing: Session Management");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for session_start
        const hasSessionStart = userCode.match(/\bsession_start\s*\(\s*\)\s*;/);
        if (hasSessionStart) {
            checks.push("✅ Has session_start");
            score += 25;
        } else {
            checks.push("❌ Missing session_start");
        }
        
        // Check for $_SESSION access
        const hasSessionAccess = userCode.match(/\$_SESSION\s*\[\s*['"][^'"]+['"]\s*\]\s*=/);
        if (hasSessionAccess) {
            checks.push("✅ Has $_SESSION access");
            score += 25;
        } else {
            checks.push("❌ Missing $_SESSION access");
        }
        
        // Check for session_destroy
        const hasSessionDestroy = userCode.match(/\bsession_destroy\s*\(\s*\)\s*;/);
        if (hasSessionDestroy) {
            checks.push("✅ Has session_destroy");
            score += 25;
        } else {
            checks.push("❌ Missing session_destroy");
        }
        
        // Check for cookie setting
        const hasCookie = userCode.match(/\bsetcookie\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasCookie) {
            checks.push("✅ Has cookie setting");
            score += 25;
        } else {
            checks.push("❌ Missing cookie setting");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more session management features`;
            
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
console.log("✅ Test ready for: Session Management");