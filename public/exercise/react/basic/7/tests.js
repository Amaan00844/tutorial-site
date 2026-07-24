// react/basic/7/tests.js
// Test for Forms and Controlled Components
console.log("🧪 Testing: Forms and Controlled Components");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for input element
        const hasInput = userCode.match(/<input\s+[^>]+>/);
        if (hasInput) {
            checks.push("✅ Has input element");
            score += 25;
        } else {
            checks.push("❌ Missing input element");
        }
        
        // Check for useState for form
        const hasFormState = userCode.match(/const\s+\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState\s*\(/);
        if (hasFormState) {
            checks.push("✅ Has useState for form");
            score += 25;
        } else {
            checks.push("❌ Missing useState for form");
        }
        
        // Check for value prop
        const hasValueProp = userCode.match(/value\s*=\s*{[^}]+}/);
        if (hasValueProp) {
            checks.push("✅ Has value prop");
            score += 25;
        } else {
            checks.push("❌ Missing value prop");
        }
        
        // Check for onChange event
        const hasOnChange = userCode.match(/onChange\s*=\s*{[^}]+}/);
        if (hasOnChange) {
            checks.push("✅ Has onChange event");
            score += 25;
        } else {
            checks.push("❌ Missing onChange event");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more form and controlled component features`;
            
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

console.log("✅ Test ready for: Forms and Controlled Components");