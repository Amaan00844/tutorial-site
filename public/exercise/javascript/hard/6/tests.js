// javascript/hard/6/tests.js
// Test for Performance Optimization
console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for debouncing
        const hasDebounce = userCode.match(/\bfunction\s+\w+\s*\(\s*\w+\s*\)\s*{[^}]*setTimeout\s*\(\s*function\s*\(\s*\)\s*{/);
        if (hasDebounce) {
            checks.push("✅ Has debouncing");
            score += 25;
        } else {
            checks.push("❌ Missing debouncing");
        }
        
        // Check for throttling
        const hasThrottle = userCode.match(/\bfunction\s+\w+\s*\(\s*\w+\s*\)\s*{[^}]*let\s+\w+\s*=\s*Date\.now\s*\(\s*\)\s*;/);
        if (hasThrottle) {
            checks.push("✅ Has throttling");
            score += 25;
        } else {
            checks.push("❌ Missing throttling");
        }
        
        // Check for memoization
        const hasMemoization = userCode.match(/\bfunction\s+\w+\s*\(\s*\)\s*{[^}]*let\s+\w+\s*=\s*{}[^}]*if\s*\(\s*\w+\[.*\]\s*\)\s*return\s+\w+\[.*\]/);
        if (hasMemoization) {
            checks.push("✅ Has memoization");
            score += 25;
        } else {
            checks.push("❌ Missing memoization");
        }
        
        // Check for Object.freeze
        const hasObjectFreeze = userCode.match(/\bObject\.freeze\s*\(\s*{[^}]+}\s*\)\s*;/);
        if (hasObjectFreeze) {
            checks.push("✅ Has Object.freeze");
            score += 25;
        } else {
            checks.push("❌ Missing Object.freeze");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more performance optimization features`;
            
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

console.log("✅ Test ready for: Performance Optimization");