
// javascript/hard/1/tests.js
// Test for Advanced Closures and IIFEs
console.log("🧪 Testing: Advanced Closures and IIFEs");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for IIFE
        const hasIIFE = userCode.match(/\(\s*function\s*\(\s*\)\s*{[^}]+}\s*\)\s*\(\s*\)\s*;/);
        if (hasIIFE) {
            checks.push("✅ Has IIFE");
            score += 25;
        } else {
            checks.push("❌ Missing IIFE");
        }
        
        // Check for module pattern
        const hasModulePattern = userCode.match(/\b(const|let)\s+\w+\s*=\s*\(\s*function\s*\(\s*\)\s*{[^}]*return\s*{[^}]+}\s*\)\s*\(\s*\)\s*;/);
        if (hasModulePattern) {
            checks.push("✅ Has module pattern");
            score += 25;
        } else {
            checks.push("❌ Missing module pattern");
        }
        
        // Check for closure with private variable
        const hasPrivateClosure = userCode.match(/\bfunction\s+\w+\s*\(\s*\)\s*{[^}]*let\s+\w+\s*=\s*[^;]+;[^}]*function\s+\w*\s*\([^)]*\)\s*{[^}]*\w+\s*=/);
        if (hasPrivateClosure) {
            checks.push("✅ Has closure with private variable");
            score += 25;
        } else {
            checks.push("❌ Missing closure with private variable");
        }
        
        // Check for nested closure
        const hasNestedClosure = userCode.match(/\bfunction\s+\w+\s*\(\s*\)\s*{[^}]*function\s+\w+\s*\(\s*\)\s*{[^}]*function\s+\w+\s*\(\s*\)\s*{/);
        if (hasNestedClosure) {
            checks.push("✅ Has nested closure");
            score += 25;
        } else {
            checks.push("❌ Missing nested closure");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced closure and IIFE features`;
            
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

console.log("✅ Test ready for: Advanced Closures and IIFEs");