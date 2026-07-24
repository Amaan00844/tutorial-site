
// javascript/basic/7/tests.js
// Test for Objects and Properties
console.log("🧪 Testing: Objects and Properties");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for object declaration
        const hasObjectDecl = userCode.match(/\b(let|const|var)\s+\w+\s*=\s*{[^}]+}\s*;/);
        if (hasObjectDecl) {
            checks.push("✅ Has object declaration");
            score += 25;
        } else {
            checks.push("❌ Missing object declaration");
        }
        
        // Check for dot notation
        const hasDotNotation = userCode.match(/\b\w+\.\w+\s*(=\s*[^;]+)?;/);
        if (hasDotNotation) {
            checks.push("✅ Has dot notation");
            score += 25;
        } else {
            checks.push("❌ Missing dot notation");
        }
        
        // Check for bracket notation
        const hasBracketNotation = userCode.match(/\b\w+\[['"][^'"]+['"]\]\s*(=\s*[^;]+)?;/);
        if (hasBracketNotation) {
            checks.push("✅ Has bracket notation");
            score += 25;
        } else {
            checks.push("❌ Missing bracket notation");
        }
        
        // Check for object method
        const hasObjectMethod = userCode.match(/\b\w+\s*:\s*function\s*\([^)]*\)\s*{/);
        if (hasObjectMethod) {
            checks.push("✅ Has object method");
            score += 25;
        } else {
            checks.push("❌ Missing object method");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more object features`;
            
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

console.log("✅ Test ready for: Objects and Properties");