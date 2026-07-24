// php/intermediate/4/tests.js
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
        
        // Check for preg_match
        const hasPregMatch = userCode.match(/\bpreg_match\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasPregMatch) {
            checks.push("✅ Has preg_match");
            score += 25;
        } else {
            checks.push("❌ Missing preg_match");
        }
        
        // Check for preg_replace
        const hasPregReplace = userCode.match(/\bpreg_replace\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasPregReplace) {
            checks.push("✅ Has preg_replace");
            score += 25;
        } else {
            checks.push("❌ Missing preg_replace");
        }
        
        // Check for regex pattern
        const hasRegexPattern = userCode.match(/\bpreg_\w+\s*\(\s*['"]\/[^\/]+\/[a-z]*['"]/);
        if (hasRegexPattern) {
            checks.push("✅ Has regex pattern");
            score += 25;
        } else {
            checks.push("❌ Missing regex pattern");
        }
        
        // Check for validation with regex
        const hasValidation = userCode.match(/\bpreg_match\s*\(\s*['"][^'"]+['"]\s*,\s*\$\w+\s*\)\s*;/);
        if (hasValidation) {
            checks.push("✅ Has validation with regex");
            score += 25;
        } else {
            checks.push("❌ Missing validation with regex");
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