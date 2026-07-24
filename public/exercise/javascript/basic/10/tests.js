
// javascript/basic/10/tests.js
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
        
        // Check for addEventListener
        const hasAddEventListener = userCode.match(/\b\w+\.addEventListener\s*\(\s*['"](click|submit|change)['"][^)]+\)\s*;/);
        if (hasAddEventListener) {
            checks.push("✅ Has addEventListener");
            score += 25;
        } else {
            checks.push("❌ Missing addEventListener");
        }
        
        // Check for event object
        const hasEventObject = userCode.match(/\bfunction\s+\w*\s*\(\s*(e|event)\s*\)\s*{/);
        if (hasEventObject) {
            checks.push("✅ Has event object");
            score += 25;
        } else {
            checks.push("❌ Missing event object");
        }
        
        // Check for preventDefault
        const hasPreventDefault = userCode.match(/\b\w+\.preventDefault\s*\(\s*\)\s*;/);
        if (hasPreventDefault) {
            checks.push("✅ Has preventDefault");
            score += 25;
        } else {
            checks.push("❌ Missing preventDefault");
        }
        
        // Check for event handler function
        const hasEventHandler = userCode.match(/\b\w+\.addEventListener\s*\(\s*['"](click|submit|change)['"]\s*,\s*(function\s*\w*\s*\([^)]*\)|\(\s*\w*\s*\)\s*=>\s*{)/);
        if (hasEventHandler) {
            checks.push("✅ Has event handler function");
            score += 25;
        } else {
            checks.push("❌ Missing event handler function");
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