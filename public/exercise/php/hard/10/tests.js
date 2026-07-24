// php/hard/10/tests.js
// Test for Monitoring and Logging
console.log("🧪 Testing: Monitoring and Logging");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for error_log
        const hasErrorLog = userCode.match(/\berror_log\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasErrorLog) {
            checks.push("✅ Has error_log");
            score += 25;
        } else {
            checks.push("❌ Missing error_log");
        }
        
        // Check for Monolog Logger instantiation
        const hasMonolog = userCode.match(/\$\w+\s*=\s*new\s+Logger\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasMonolog) {
            checks.push("✅ Has Monolog Logger");
            score += 25;
        } else {
            checks.push("❌ Missing Monolog Logger");
        }
        
        // Check for log handler
        const hasLogHandler = userCode.match(/\$\w+\s*->\s*pushHandler\s*\(\s*new\s+\w+Handler\s*\(\s*[^)]+\)\s*\)\s*;/);
        if (hasLogHandler) {
            checks.push("✅ Has log handler");
            score += 25;
        } else {
            checks.push("❌ Missing log handler");
        }
        
        // Check for logging method (e.g., info, error)
        const hasLoggingMethod = userCode.match(/\$\w+\s*->\s*(info|error|debug|warning)\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasLoggingMethod) {
            checks.push("✅ Has logging method (info/error/debug/warning)");
            score += 25;
        } else {
            checks.push("❌ Missing logging method");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more monitoring and logging features`;
            
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
console.log("✅ Test ready for: Monitoring and Logging");