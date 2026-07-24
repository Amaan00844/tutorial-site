
// javascript/hard/8/tests.js
// Test for Advanced Regular Expressions
console.log("🧪 Testing: Advanced Regular Expressions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for lookahead
        const hasLookahead = userCode.match(/\/[^/]+(?=\w+)[^/]*\/\w*\s*;/);
        if (hasLookahead) {
            checks.push("✅ Has lookahead");
            score += 25;
        } else {
            checks.push("❌ Missing lookahead");
        }
        
        // Check for lookbehind
        const hasLookbehind = userCode.match(/\/(?<!\w+)[^/]+\/\w*\s*;/);
        if (hasLookbehind) {
            checks.push("✅ Has lookbehind");
            score += 25;
        } else {
            checks.push("❌ Missing lookbehind");
        }
        
        // Check for capturing group
        const hasCapturingGroup = userCode.match(/\/([^/]+)\1\/\w*\s*;/);
        if (hasCapturingGroup) {
            checks.push("✅ Has capturing group");
            score += 25;
        } else {
            checks.push("❌ Missing capturing group");
        }
        
        // Check for named capture group
        const hasNamedCapture = userCode.match(/\/(?<[^>]+>[^/]+)\/\w*\s*;/);
        if (hasNamedCapture) {
            checks.push("✅ Has named capture group");
            score += 25;
        } else {
            checks.push("❌ Missing named capture group");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced regex features`;
            
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

console.log("✅ Test ready for: Advanced Regular Expressions");