// react/basic/4/tests.js
// Test for Event Handling
console.log("🧪 Testing: Event Handling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for onClick event
        const hasOnClick = userCode.match(/onClick\s*=\s*{[^}]+}/);
        if (hasOnClick) {
            checks.push("✅ Has onClick event");
            score += 25;
        } else {
            checks.push("❌ Missing onClick event");
        }
        
        // Check for event handler function
        const hasEventHandler = userCode.match(/function\s+\w+\s*\(\s*event\s*\)\s*{/);
        if (hasEventHandler) {
            checks.push("✅ Has event handler function");
            score += 25;
        } else {
            checks.push("❌ Missing event handler function");
        }
        
        // Check for useState with event
        const hasStateWithEvent = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasStateWithEvent) {
            checks.push("✅ Has state update with event");
            score += 25;
        } else {
            checks.push("❌ Missing state update with event");
        }
        
        // Check for event object usage
        const hasEventObject = userCode.match(/event\.\w+/);
        if (hasEventObject) {
            checks.push("✅ Has event object usage");
            score += 25;
        } else {
            checks.push("❌ Missing event object usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more event handling features`;
            
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

console.log("✅ Test ready for: Event Handling");
