// Test for Accessibility (ARIA)
console.log("🧪 Testing: Accessibility (ARIA)");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for aria-label
        if (/aria-label\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has aria-label attributes");
            score += 25;
        } else {
            checks.push("❌ Missing aria-label attributes");
        }
        
        // Check for role attributes
        if (/role\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has role attributes");
            score += 25;
        } else {
            checks.push("❌ Missing role attributes");
        }
        
        // Check for aria-describedby or aria-labelledby
        if (/aria-(describedby|labelledby)\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has aria-describedby or aria-labelledby");
            score += 25;
        } else {
            checks.push("❌ Missing aria-describedby or aria-labelledby");
        }
        
        // Check for aria-hidden or other ARIA attributes
        if (/aria-(hidden|live|expanded|controls)\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has additional ARIA attributes");
            score += 25;
        } else {
            checks.push("❌ Missing additional ARIA attributes");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more ARIA accessibility features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Accessibility (ARIA)", language: "html"}
    };
}

console.log("✅ Test ready for: Accessibility (ARIA)");