
// react/intermediate/3/tests.js
// Test for useReducer Hook
console.log("🧪 Testing: useReducer Hook");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for useReducer import
        const hasUseReducer = userCode.match(/import\s+{[^}]*useReducer[^}]*}\s+from\s+['"]react['"]/);
        if (hasUseReducer) {
            checks.push("✅ Has useReducer import");
            score += 25;
        } else {
            checks.push("❌ Missing useReducer import");
        }
        
        // Check for reducer function
        const hasReducer = userCode.match(/function\s+\w+\s*\(\s*state\s*,\s*action\s*\)\s*{/);
        if (hasReducer) {
            checks.push("✅ Has reducer function");
            score += 25;
        } else {
            checks.push("❌ Missing reducer function");
        }
        
        // Check for useReducer call
        const hasUseReducerCall = userCode.match(/const\s+\[\s*\w+\s*,\s*dispatch\s*\]\s*=\s*useReducer\s*\(/);
        if (hasUseReducerCall) {
            checks.push("✅ Has useReducer call");
            score += 25;
        } else {
            checks.push("❌ Missing useReducer call");
        }
        
        // Check for dispatch call
        const hasDispatch = userCode.match(/dispatch\s*\(\s*{[^}]+}\s*\)/);
        if (hasDispatch) {
            checks.push("✅ Has dispatch call");
            score += 25;
        } else {
            checks.push("❌ Missing dispatch call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more useReducer features`;
            
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
console.log("✅ Test ready for: useReducer Hook");
