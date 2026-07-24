// php/basic/9/tests.js
// Test for Include and Require
console.log("🧪 Testing: Include and Require");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for include
        const hasInclude = userCode.match(/\binclude\s+['"][^'"]+['"]\s*;/);
        if (hasInclude) {
            checks.push("✅ Has include statement");
            score += 25;
        } else {
            checks.push("❌ Missing include statement");
        }
        
        // Check for require
        const hasRequire = userCode.match(/\brequire\s+['"][^'"]+['"]\s*;/);
        if (hasRequire) {
            checks.push("✅ Has require statement");
            score += 25;
        } else {
            checks.push("❌ Missing require statement");
        }
        
        // Check for include_once
        const hasIncludeOnce = userCode.match(/\binclude_once\s+['"][^'"]+['"]\s*;/);
        if (hasIncludeOnce) {
            checks.push("✅ Has include_once statement");
            score += 25;
        } else {
            checks.push("❌ Missing include_once statement");
        }
        
        // Check for require_once
        const hasRequireOnce = userCode.match(/\brequire_once\s+['"][^'"]+['"]\s*;/);
        if (hasRequireOnce) {
            checks.push("✅ Has require_once statement");
            score += 25;
        } else {
            checks.push("❌ Missing require_once statement");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more include/require features`;
            
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
console.log("✅ Test ready for: Include and Require");