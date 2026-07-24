// Test for Semantic HTML Elements
console.log("🧪 Testing: Semantic HTML Elements");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for header element
        if (/<header[^>]*>[\s\S]*<\/header>/i.test(userCode)) {
            checks.push("✅ Has header element");
            score += 25;
        } else {
            checks.push("❌ Missing header element");
        }
        
        // Check for main element
        if (/<main[^>]*>[\s\S]*<\/main>/i.test(userCode)) {
            checks.push("✅ Has main element");
            score += 25;
        } else {
            checks.push("❌ Missing main element");
        }
        
        // Check for section or article
        if (/<(section|article)[^>]*>[\s\S]*<\/(section|article)>/i.test(userCode)) {
            checks.push("✅ Has section or article element");
            score += 25;
        } else {
            checks.push("❌ Missing section or article element");
        }
        
        // Check for footer or nav
        if (/<(footer|nav)[^>]*>[\s\S]*<\/(footer|nav)>/i.test(userCode)) {
            checks.push("✅ Has footer or nav element");
            score += 25;
        } else {
            checks.push("❌ Missing footer or nav element");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more semantic HTML elements`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Semantic HTML Elements", language: "html"}
    };
}

console.log("✅ Test ready for: Semantic HTML Elements");