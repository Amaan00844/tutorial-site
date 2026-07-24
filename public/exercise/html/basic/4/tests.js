// Test for Images and Media
console.log("🧪 Testing: Images and Media");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for img tags with src
        if (/<img[^>]+src\s*=\s*["'][^"']+["'][^>]*>/i.test(userCode)) {
            checks.push("✅ Has image elements with src");
            score += 25;
        } else {
            checks.push("❌ Missing image elements with src");
        }
        
        // Check for alt attributes
        if (/<img[^>]+alt\s*=\s*["'][^"']*["'][^>]*>/i.test(userCode)) {
            checks.push("✅ Has alt attributes for images");
            score += 25;
        } else {
            checks.push("❌ Missing alt attributes for images");
        }
        
        // Check for video elements
        if (/<video[^>]*>[\s\S]*<\/video>/i.test(userCode)) {
            checks.push("✅ Has video elements");
            score += 25;
        } else {
            checks.push("❌ Missing video elements");
        }
        
        // Check for audio or iframe elements
        if (/<(audio|iframe)[^>]*>/i.test(userCode)) {
            checks.push("✅ Has audio or embedded media");
            score += 25;
        } else {
            checks.push("❌ Missing audio or embedded media");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more media elements`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Images and Media", language: "html"}
    };
}

console.log("✅ Test ready for: Images and Media");