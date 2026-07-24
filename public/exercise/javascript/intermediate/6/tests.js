
// javascript/intermediate/6/tests.js
// Test for Destructuring and Spread
console.log("🧪 Testing: Destructuring and Spread");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for array destructuring
        const hasArrayDestructuring = userCode.match(/\[\s*\w+\s*(,\s*\w+\s*)*\]\s*=\s*\w+\s*;/);
        if (hasArrayDestructuring) {
            checks.push("✅ Has array destructuring");
            score += 25;
        } else {
            checks.push("❌ Missing array destructuring");
        }
        
        // Check for object destructuring
        const hasObjectDestructuring = userCode.match(/{\s*\w+\s*(,\s*\w+\s*)*}\s*=\s*\w+\s*;/);
        if (hasObjectDestructuring) {
            checks.push("✅ Has object destructuring");
            score += 25;
        } else {
            checks.push("❌ Missing object destructuring");
        }
        
        // Check for spread operator
        const hasSpread = userCode.match(/\.\.\.\w+\s*(,|\]|})/);
        if (hasSpread) {
            checks.push("✅ Has spread operator");
            score += 25;
        } else {
            checks.push("❌ Missing spread operator");
        }
        
        // Check for rest parameters
        const hasRest = userCode.match(/\bfunction\s+\w+\s*\(\s*[^)]*\.\.\.\w+\s*\)\s*{/);
        if (hasRest) {
            checks.push("✅ Has rest parameters");
            score += 25;
        } else {
            checks.push("❌ Missing rest parameters");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more destructuring and spread features`;
            
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

console.log("✅ Test ready for: Destructuring and Spread");