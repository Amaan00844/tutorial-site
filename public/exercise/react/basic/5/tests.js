// react/basic/5/tests.js
// Test for Conditional Rendering
console.log("🧪 Testing: Conditional Rendering");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ternary operator
        const hasTernary = userCode.match(/{\s*\w+\s*\?\s*<\w+[^>]*>\s*:\s*<\w+[^>]*>\s*}/);
        if (hasTernary) {
            checks.push("✅ Has ternary operator");
            score += 25;
        } else {
            checks.push("❌ Missing ternary operator");
        }
        
        // Check for logical AND operator
        const hasLogicalAnd = userCode.match(/{\s*\w+\s*&&\s*<\w+[^>]*>\s*}/);
        if (hasLogicalAnd) {
            checks.push("✅ Has logical AND operator");
            score += 25;
        } else {
            checks.push("❌ Missing logical AND operator");
        }
        
        // Check for useState for condition
        const hasStateCondition = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasStateCondition) {
            checks.push("✅ Has state for condition");
            score += 25;
        } else {
            checks.push("❌ Missing state for condition");
        }
        
        // Check for conditional JSX
        const hasConditionalJsx = userCode.match(/{[^}]*\s*<\w+[^>]*>\s*}/);
        if (hasConditionalJsx) {
            checks.push("✅ Has conditional JSX");
            score += 25;
        } else {
            checks.push("❌ Missing conditional JSX");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more conditional rendering features`;
            
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

console.log("✅ Test ready for: Conditional Rendering");