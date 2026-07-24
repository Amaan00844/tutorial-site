// Test for Advanced Accessibility
console.log("🧪 Testing: Advanced Accessibility");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ARIA live regions
        if (/aria-live\s*=\s*["'](polite|assertive)["']/i.test(userCode)) {
            checks.push("✅ Has ARIA live regions");
            score += 25;
        } else {
            checks.push("❌ Missing ARIA live regions");
        }
        
        // Check for complex ARIA roles
        if (/role\s*=\s*["'](dialog|alert|region|application)["']/i.test(userCode)) {
            checks.push("✅ Has complex ARIA roles");
            score += 25;
        } else {
            checks.push("❌ Missing complex ARIA roles");
        }
        
        // Check for keyboard event handling
        if (/on(keydown|keyup|keypress)|addEventListener\s*\(\s*["']key/i.test(userCode)) {
            checks.push("✅ Has keyboard event handling");
            score += 25;
        } else {
            checks.push("❌ Missing keyboard event handling");
        }
        
        // Check for focus management
        if (/tabindex\s*=\s*["']-?[\d]+["']|focus\(\)/i.test(userCode)) {
            checks.push("✅ Has focus management");
            score += 25;
        } else {
            checks.push("❌ Missing focus management");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more advanced accessibility features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Advanced Accessibility", language: "html"}
    };
}

console.log("✅ Test ready for: Advanced Accessibility");