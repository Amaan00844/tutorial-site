// Test for Cross-browser Compatibility
console.log("🧪 Testing: Cross-browser Compatibility");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for vendor prefixes
        if (/(-webkit-|-moz-|-ms-|-o-)/i.test(userCode)) {
            checks.push("✅ Has vendor prefixes");
            score += 25;
        } else {
            checks.push("❌ Missing vendor prefixes");
        }
        
        // Check for feature detection
        if (/(Modernizr|feature.*detect|supports\()/i.test(userCode)) {
            checks.push("✅ Has feature detection");
            score += 25;
        } else {
            checks.push("❌ Missing feature detection");
        }
        
        // Check for polyfills or fallbacks
        if (/(polyfill|fallback|if.*!.*support)/i.test(userCode)) {
            checks.push("✅ Has polyfills or fallbacks");
            score += 25;
        } else {
            checks.push("❌ Missing polyfills or fallbacks");
        }
        
        // Check for progressive enhancement
        if (/(noscript|progressive|enhance|graceful.*degrad)/i.test(userCode)) {
            checks.push("✅ Has progressive enhancement");
            score += 25;
        } else {
            checks.push("❌ Missing progressive enhancement");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more cross-browser compatibility features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Cross-browser Compatibility", language: "html"}
    };
}

console.log("✅ Test ready for: Cross-browser Compatibility");