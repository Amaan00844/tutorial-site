// Test for HTML5 Multimedia
console.log("🧪 Testing: HTML5 Multimedia");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for video element
        if (/<video[^>]*>[\s\S]*<\/video>/i.test(userCode)) {
            checks.push("✅ Has video element");
            score += 25;
        } else {
            checks.push("❌ Missing video element");
        }
        
        // Check for audio element
        if (/<audio[^>]*>[\s\S]*<\/audio>/i.test(userCode)) {
            checks.push("✅ Has audio element");
            score += 25;
        } else {
            checks.push("❌ Missing audio element");
        }
        
        // Check for source elements
        if (/<source[^>]+src\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has source elements");
            score += 25;
        } else {
            checks.push("❌ Missing source elements");
        }
        
        // Check for media controls or attributes
        if (/(controls|autoplay|loop|muted|preload)\s*=\s*["'][^"']*["']/i.test(userCode)) {
            checks.push("✅ Has media control attributes");
            score += 25;
        } else {
            checks.push("❌ Missing media control attributes");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more multimedia features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "HTML5 Multimedia", language: "html"}
    };
}

console.log("✅ Test ready for: HTML5 Multimedia");