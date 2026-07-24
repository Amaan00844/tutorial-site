
// javascript/intermediate/8/tests.js
// Test for Regular Expressions
console.log("🧪 Testing: Regular Expressions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for regex declaration
        const hasRegex = userCode.match(/\b(let|const|var)\s+\w+\s*=\s*\/[^/]+\/\w*\s*;/);
        if (hasRegex) {
            checks.push("✅ Has regex declaration");
            score += 25;
        } else {
            checks.push("❌ Missing regex declaration");
        }
        
        // Check for test method
        const hasTest = userCode.match(/\b\w+\.test\s*\(\s*[^)]+\)\s*;/);
        if (hasTest) {
            checks.push("✅ Has test method");
            score += 25;
        } else {
            checks.push("❌ Missing test method");
        }
        
        // Check for match method
        const hasMatch = userCode.match(/\b\w+\.match\s*\(\s*\/[^/]+\/\w*\s*\)\s*;/);
        if (hasMatch) {
            checks.push("✅ Has match method");
            score += 25;
        } else {
            checks.push("❌ Missing match method");
        }
        
        // Check for regex flags
        const hasRegexFlags = userCode.match(/\/[^/]+\/[gi]\s*;/);
        if (hasRegexFlags) {
            checks.push("✅ Has regex flags");
            score += 25;
        } else {
            checks.push("❌ Missing regex flags");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more regex features`;
            
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

console.log("✅ Test ready for: Regular Expressions");
