
// javascript/basic/8/tests.js
// Test for String Methods and Manipulation
console.log("🧪 Testing: String Methods and Manipulation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for string method (split or join)
        const hasSplitJoin = userCode.match(/\b\w+\.(split|join)\s*\(\s*[^)]+\)\s*;/);
        if (hasSplitJoin) {
            checks.push("✅ Has split or join");
            score += 25;
        } else {
            checks.push("❌ Missing split or join");
        }
        
        // Check for substring or slice
        const hasSubstringSlice = userCode.match(/\b\w+\.(substring|slice)\s*\(\s*[^)]+\)\s*;/);
        if (hasSubstringSlice) {
            checks.push("✅ Has substring or slice");
            score += 25;
        } else {
            checks.push("❌ Missing substring or slice");
        }
        
        // Check for replace
        const hasReplace = userCode.match(/\b\w+\.replace\s*\(\s*[^)]+\)\s*;/);
        if (hasReplace) {
            checks.push("✅ Has replace");
            score += 25;
        } else {
            checks.push("❌ Missing replace");
        }
        
        // Check for template literal
        const hasTemplateLiteral = userCode.match(/`[^`]+`\s*;/);
        if (hasTemplateLiteral) {
            checks.push("✅ Has template literal");
            score += 25;
        } else {
            checks.push("❌ Missing template literal");
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

console.log("✅ Test ready for: String Methods and Manipulation");