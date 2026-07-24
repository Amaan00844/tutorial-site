// Test for Form Validation API
console.log("🧪 Testing: Form Validation API");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for HTML5 validation attributes
        if (/(required|pattern|minlength|maxlength|min|max)\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has HTML5 validation attributes");
            score += 25;
        } else {
            checks.push("❌ Missing HTML5 validation attributes");
        }
        
        // Check for custom validity API
        if (/setCustomValidity|checkValidity|reportValidity/i.test(userCode)) {
            checks.push("✅ Has custom validity API");
            score += 25;
        } else {
            checks.push("❌ Missing custom validity API");
        }
        
        // Check for validation event listeners
        if (/addEventListener\s*\(\s*["']invalid["']/i.test(userCode)) {
            checks.push("✅ Has validation event listeners");
            score += 25;
        } else {
            checks.push("❌ Missing validation event listeners");
        }
        
        // Check for validation feedback
        if (/:invalid|:valid|validationMessage/i.test(userCode)) {
            checks.push("✅ Has validation feedback");
            score += 25;
        } else {
            checks.push("❌ Missing validation feedback");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more form validation features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Form Validation API", language: "html"}
    };
}

console.log("✅ Test ready for: Form Validation API");