// Test for Advanced Forms
console.log("🧪 Testing: Advanced Forms");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for form validation attributes
        if (/(required|pattern|min|max|minlength|maxlength)\s*=\s*["'][^"']*["']/i.test(userCode)) {
            checks.push("✅ Has validation attributes");
            score += 25;
        } else {
            checks.push("❌ Missing validation attributes");
        }
        
        // Check for fieldset and legend
        if (/<fieldset[^>]*>[\s\S]*?<\/fieldset>/i.test(userCode) && /<legend[^>]*>[\s\S]*?<\/legend>/i.test(userCode)) {
            checks.push("✅ Has fieldset and legend");
            score += 25;
        } else {
            checks.push("❌ Missing fieldset and legend elements");
        }
        
        // Check for advanced input types
        if (/type\s*=\s*["'](email|url|tel|date|number|range|color)["']/i.test(userCode)) {
            checks.push("✅ Has advanced input types");
            score += 25;
        } else {
            checks.push("❌ Missing advanced input types");
        }
        
        // Check for accessibility features
        if (/(aria-|for\s*=|placeholder)/i.test(userCode)) {
            checks.push("✅ Has accessibility features");
            score += 25;
        } else {
            checks.push("❌ Missing accessibility features");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more advanced form features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Advanced Forms", language: "html"}
    };
}

console.log("✅ Test ready for: Advanced Forms");