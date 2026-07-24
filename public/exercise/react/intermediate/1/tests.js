// react/intermediate/1/tests.js
// Test for Custom Hooks
console.log("🧪 Testing: Custom Hooks");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for custom hook function
        const hasCustomHook = userCode.match(/function\s+use\w+\s*\(\s*[^)]*\)\s*{/);
        if (hasCustomHook) {
            checks.push("✅ Has custom hook function");
            score += 25;
        } else {
            checks.push("❌ Missing custom hook function");
        }
        
        // Check for useState in custom hook
        const hasUseState = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasUseState) {
            checks.push("✅ Has useState in custom hook");
            score += 25;
        } else {
            checks.push("❌ Missing useState in custom hook");
        }
        
        // Check for return statement in hook
        const hasHookReturn = userCode.match(/return\s+{[^}]+}/);
        if (hasHookReturn) {
            checks.push("✅ Has return statement in hook");
            score += 25;
        } else {
            checks.push("❌ Missing return statement in hook");
        }
        
        // Check for custom hook usage
        const hasHookUsage = userCode.match(/const\s+{[^}]+}\s*=\s*use\w+\s*\(\s*[^)]*\)/);
        if (hasHookUsage) {
            checks.push("✅ Has custom hook usage");
            score += 25;
        } else {
            checks.push("❌ Missing custom hook usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more custom hook features`;
            
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
console.log("✅ Test ready for: Custom Hooks");
