
// react/hard/10/tests.js
// Test for Accessibility (a11y)
console.log("🧪 Testing: Accessibility (a11y)");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for aria-label
        const hasAriaLabel = userCode.match(/aria-label\s*=\s*['"][^'"]+['"]/);
        if (hasAriaLabel) {
            checks.push("✅ Has aria-label");
            score += 25;
        } else {
            checks.push("❌ Missing aria-label");
        }
        
        // Check for role attribute
        const hasRole = userCode.match(/role\s*=\s*['"][^'"]+['"]/);
        if (hasRole) {
            checks.push("✅ Has role attribute");
            score += 25;
        } else {
            checks.push("❌ Missing role attribute");
        }
        
        // Check for semantic HTML
        const hasSemanticHtml = userCode.match(/<(nav|header|main|footer|article|section)\s+[^>]*>/);
        if (hasSemanticHtml) {
            checks.push("✅ Has semantic HTML");
            score += 25;
        } else {
            checks.push("❌ Missing semantic HTML");
        }
        
        // Check for focus management
        const hasFocusManagement = userCode.match(/focus\s*\(\s*\)/);
        if (hasFocusManagement) {
            checks.push("✅ Has focus management");
            score += 25;
        } else {
            checks.push("❌ Missing focus management");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more accessibility features`;
            
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
console.log("✅ Test ready for: Accessibility (a11y)");