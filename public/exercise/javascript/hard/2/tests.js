
// javascript/hard/2/tests.js
// Test for Functional Programming Patterns
console.log("🧪 Testing: Functional Programming Patterns");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for currying
        const hasCurrying = userCode.match(/\bfunction\s+\w+\s*\(\s*\w+\s*\)\s*{[^}]*return\s+function\s+\w*\s*\(\s*\w+\s*\)\s*{/);
        if (hasCurrying) {
            checks.push("✅ Has currying");
            score += 25;
        } else {
            checks.push("❌ Missing currying");
        }
        
        // Check for function composition
        const hasComposition = userCode.match(/\bfunction\s+\w+\s*\(\s*\w+\s*\)\s*{[^}]*\w+\s*\(\s*\w+\s*\(\s*[^)]+\)\s*\)/);
        if (hasComposition) {
            checks.push("✅ Has function composition");
            score += 25;
        } else {
            checks.push("❌ Missing function composition");
        }
        
        // Check for pure function
        const hasPureFunction = userCode.match(/\bfunction\s+\w+\s*\(\s*[^)]+\)\s*{[^}]*return\s+[^;]+;/);
        if (hasPureFunction) {
            checks.push("✅ Has pure function");
            score += 25;
        } else {
            checks.push("❌ Missing pure function");
        }
        
        // Check for immutability
        const hasImmutability = userCode.match(/\bconst\s+\w+\s*=\s*Object\.freeze\s*\(\s*{[^}]+}\s*\)\s*;/);
        if (hasImmutability) {
            checks.push("✅ Has immutability");
            score += 25;
        } else {
            checks.push("❌ Missing immutability");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more functional programming features`;
            
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

console.log("✅ Test ready for: Functional Programming Patterns");
