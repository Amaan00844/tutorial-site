// Test for Progressive Web Apps
console.log("🧪 Testing: Progressive Web Apps");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for manifest link
        if (/<link[^>]+rel\s*=\s*["']manifest["'][^>]+href\s*=\s*["'][^"']+\.json["']/i.test(userCode)) {
            checks.push("✅ Has web app manifest");
            score += 25;
        } else {
            checks.push("❌ Missing web app manifest");
        }
        
        // Check for service worker registration
        if (/navigator\.serviceWorker\.register/i.test(userCode)) {
            checks.push("✅ Has service worker registration");
            score += 25;
        } else {
            checks.push("❌ Missing service worker registration");
        }
        
        // Check for meta theme-color
        if (/<meta[^>]+name\s*=\s*["']theme-color["'][^>]+content\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has theme-color meta tag");
            score += 25;
        } else {
            checks.push("❌ Missing theme-color meta tag");
        }
        
        // Check for icon links
        if (/<link[^>]+rel\s*=\s*["'](icon|apple-touch-icon)["'][^>]+href\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has icon links");
            score += 25;
        } else {
            checks.push("❌ Missing icon links");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more PWA features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Progressive Web Apps", language: "html"}
    };
}

console.log("✅ Test ready for: Progressive Web Apps");