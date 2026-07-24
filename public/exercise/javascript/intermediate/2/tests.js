
// javascript/intermediate/2/tests.js
// Test for Higher-Order Functions
console.log("🧪 Testing: Higher-Order Functions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for function as parameter
        const hasFunctionParam = userCode.match(/\bfunction\s+\w+\s*\(\s*\w+\s*,\s*function\s*\w*\s*\([^)]*\)\s*{/);
        if (hasFunctionParam) {
            checks.push("✅ Has function as parameter");
            score += 25;
        } else {
            checks.push("❌ Missing function as parameter");
        }
        
        // Check for function return
        const hasFunctionReturn = userCode.match(/\bfunction\s+\w+\s*\([^)]*\)\s*{[^}]*return\s+function\s*\w*\s*\([^)]*\)\s*{/);
        if (hasFunctionReturn) {
            checks.push("✅ Has function return");
            score += 25;
        } else {
            checks.push("❌ Missing function return");
        }
        
        // Check for callback usage
        const hasCallback = userCode.match(/\b\w+\s*\(\s*[^,]+,\s*function\s*\w*\s*\([^)]*\)\s*{/);
        if (hasCallback) {
            checks.push("✅ Has callback usage");
            score += 25;
        } else {
            checks.push("❌ Missing callback usage");
        }
        
        // Check for function composition
        const hasComposition = userCode.match(/\b\w+\s*\(\s*\w+\s*\(\s*[^)]+\)\s*\)\s*;/);
        if (hasComposition) {
            checks.push("✅ Has function composition");
            score += 25;
        } else {
            checks.push("❌ Missing function composition");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more higher-order function features`;
            
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

console.log("✅ Test ready for: Higher-Order Functions");