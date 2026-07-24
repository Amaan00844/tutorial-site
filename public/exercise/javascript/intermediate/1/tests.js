
// javascript/intermediate/1/tests.js
// Test for Closures and Scope
console.log("🧪 Testing: Closures and Scope");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for closure
        const hasClosure = userCode.match(/\bfunction\s+\w+\s*\([^)]*\)\s*{[^}]*function\s+\w*\s*\([^)]*\)\s*{/);
        if (hasClosure) {
            checks.push("✅ Has closure");
            score += 25;
        } else {
            checks.push("❌ Missing closure");
        }
        
        // Check for block scope (let/const)
        const hasBlockScope = userCode.match(/\b(let|const)\s+\w+\s*=\s*[^;]+;\s*{\s*\1\s+\w+\s*=\s*[^;]+;/);
        if (hasBlockScope) {
            checks.push("✅ Has block scope");
            score += 25;
        } else {
            checks.push("❌ Missing block scope");
        }
        
        // Check for lexical scope variable access
        const hasLexicalScope = userCode.match(/\bfunction\s+\w+\s*\([^)]*\)\s*{[^}]*\w+\s*=\s*\w+[^;]*;/);
        if (hasLexicalScope) {
            checks.push("✅ Has lexical scope variable access");
            score += 25;
        } else {
            checks.push("❌ Missing lexical scope variable access");
        }
        
        // Check for nested function
        const hasNestedFunction = userCode.match(/\bfunction\s+\w+\s*\([^)]*\)\s*{[^}]*function\s+\w+\s*\([^)]*\)\s*{/);
        if (hasNestedFunction) {
            checks.push("✅ Has nested function");
            score += 25;
        } else {
            checks.push("❌ Missing nested function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more closure and scope features`;
            
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

console.log("✅ Test ready for: Closures and Scope");