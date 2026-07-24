// Test for HTML5 APIs
console.log("🧪 Testing: HTML5 APIs");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for canvas element
        if (/<canvas[^>]*>/i.test(userCode)) {
            checks.push("✅ Has canvas element");
            score += 25;
        } else {
            checks.push("❌ Missing canvas element");
        }
        
        // Check for geolocation API usage
        if (/navigator\.geolocation\.getCurrentPosition/i.test(userCode)) {
            checks.push("✅ Has geolocation API usage");
            score += 25;
        } else {
            checks.push("❌ Missing geolocation API usage");
        }
        
        // Check for localStorage or sessionStorage
        if (/(localStorage|sessionStorage)\.(setItem|getItem)/i.test(userCode)) {
            checks.push("✅ Has web storage usage");
            score += 25;
        } else {
            checks.push("❌ Missing web storage usage");
        }
        
        // Check for drag and drop or other HTML5 APIs
        if (/(draggable|ondragstart|ondrop|FileReader|WebSocket)/i.test(userCode)) {
            checks.push("✅ Has additional HTML5 API features");
            score += 25;
        } else {
            checks.push("❌ Missing additional HTML5 API features");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more HTML5 API features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "HTML5 APIs", language: "html"}
    };
}

console.log("✅ Test ready for: HTML5 APIs");