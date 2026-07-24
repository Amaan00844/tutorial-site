// python/basic/8/tests.js
// Test for String Manipulation
console.log("🧪 Testing: String Manipulation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for string declaration
        const hasString = userCode.match(/\b\w+\s*=\s*['"][^'"]+['"]/);
        if (hasString) {
            checks.push("✅ Has string declaration");
            score += 25;
        } else {
            checks.push("❌ Missing string declaration");
        }
        
        // Check for split method
        const hasSplit = userCode.match(/\b\w+\.split\s*\(\s*[^)]*\)/);
        if (hasSplit) {
            checks.push("✅ Has split method");
            score += 25;
        } else {
            checks.push("❌ Missing split method");
        }
        
        // Check for join method
        const hasJoin = userCode.match(/\b['"]?[^'"]+['"]?\.join\s*\(\s*[^)]+\)/);
        if (hasJoin) {
            checks.push("✅ Has join method");
            score += 25;
        } else {
            checks.push("❌ Missing join method");
        }
        
        // Check for string formatting
        const hasFormat = userCode.match(/f['"][^'"]*{[^}]+}[^'"]*['"]/);
        if (hasFormat) {
            checks.push("✅ Has string formatting");
            score += 25;
        } else {
            checks.push("❌ Missing string formatting");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more string manipulation features`;
            
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
console.log("✅ Test ready for: String Manipulation");