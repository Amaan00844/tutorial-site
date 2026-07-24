
// javascript/intermediate/10/tests.js
// Test for Event Delegation and Advanced DOM
console.log("🧪 Testing: Event Delegation and Advanced DOM");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for event delegation
        const hasEventDelegation = userCode.match(/\b\w+\.addEventListener\s*\(\s*['"](click|submit|change)['"]\s*,\s*function\s*\(\s*\w+\s*\)\s*{[^}]*\w+\.closest\s*\(\s*['"][^'"]+['"]\s*\)/);
        if (hasEventDelegation) {
            checks.push("✅ Has event delegation");
            score += 25;
        } else {
            checks.push("❌ Missing event delegation");
        }
        
        // Check for event bubbling
        const hasEventBubbling = userCode.match(/\b\w+\.addEventListener\s*\(\s*['"](click|submit|change)['"]\s*,\s*function\s*\(\s*\w+\s*\)\s*{[^}]*event\.stopPropagation\s*\(\s*\)\s*;/);
        if (hasEventBubbling) {
            checks.push("✅ Has event bubbling control");
            score += 25;
        } else {
            checks.push("❌ Missing event bubbling control");
        }
        
        // Check for createElement
        const hasCreateElement = userCode.match(/\bdocument\.createElement\s*\(\s*['"][^'"]+['"]\s*\)\s*;/);
        if (hasCreateElement) {
            checks.push("✅ Has createElement");
            score += 25;
        } else {
            checks.push("❌ Missing createElement");
        }
        
        // Check for appendChild
        const hasAppendChild = userCode.match(/\b\w+\.appendChild\s*\(\s*[^)]+\)\s*;/);
        if (hasAppendChild) {
            checks.push("✅ Has appendChild");
            score += 25;
        } else {
            checks.push("❌ Missing appendChild");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced DOM features`;
            
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

console.log("✅ Test ready for: Event Delegation and Advanced DOM");