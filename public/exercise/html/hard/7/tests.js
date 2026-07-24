// Test for Advanced SVG Integration
console.log("🧪 Testing: Advanced SVG Integration");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for inline SVG
        if (/<svg[^>]*>[\s\S]*<\/svg>/i.test(userCode)) {
            checks.push("✅ Has inline SVG");
            score += 25;
        } else {
            checks.push("❌ Missing inline SVG");
        }
        
        // Check for SVG animations
        if (/<(animate|animateTransform|animateMotion)[^>]*>/i.test(userCode)) {
            checks.push("✅ Has SVG animations");
            score += 25;
        } else {
            checks.push("❌ Missing SVG animations");
        }
        
        // Check for SVG interactivity
        if (/onclick|addEventListener[\s\S]*svg|hover[\s\S]*svg/i.test(userCode)) {
            checks.push("✅ Has SVG interactivity");
            score += 25;
        } else {
            checks.push("❌ Missing SVG interactivity");
        }
        
        // Check for SVG accessibility
        if (/<svg[^>]+(aria-label|role|title)[\s\S]*<desc>/i.test(userCode)) {
            checks.push("✅ Has SVG accessibility");
            score += 25;
        } else {
            checks.push("❌ Missing SVG accessibility");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more advanced SVG features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Advanced SVG Integration", language: "html"}
    };
}

console.log("✅ Test ready for: Advanced SVG Integration");