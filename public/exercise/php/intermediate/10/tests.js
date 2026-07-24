// php/intermediate/10/tests.js
// Test for Email Handling
console.log("🧪 Testing: Email Handling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for PHPMailer instantiation
        const hasPHPMailer = userCode.match(/\$\w+\s*=\s*new\s+PHPMailer\s*\(\s*[^)]*\)\s*;/);
        if (hasPHPMailer) {
            checks.push("✅ Has PHPMailer instantiation");
            score += 25;
        } else {
            checks.push("❌ Missing PHPMailer instantiation");
        }
        
        // Check for email configuration
        const hasEmailConfig = userCode.match(/\$\w+\s*->\s*(Host|Username|Password|Port|SMTPSecure)\s*=\s*[^;]+;/);
        if (hasEmailConfig) {
            checks.push("✅ Has email configuration");
            score += 25;
        } else {
            checks.push("❌ Missing email configuration");
        }
        
        // Check for email send
        const hasEmailSend = userCode.match(/\$\w+\s*->\s*send\s*\(\s*\)\s*;/);
        if (hasEmailSend) {
            checks.push("✅ Has email send");
            score += 25;
        } else {
            checks.push("❌ Missing email send");
        }
        
        // Check for require PHPMailer
        const hasPHPMailerRequire = userCode.match(/\brequire\s+['"].*PHPMailer.*['"]\s*;/);
        if (hasPHPMailerRequire) {
            checks.push("✅ Has PHPMailer require");
            score += 25;
        } else {
            checks.push("❌ Missing PHPMailer require");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more email handling features`;
            
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
console.log("✅ Test ready for: Email Handling");
