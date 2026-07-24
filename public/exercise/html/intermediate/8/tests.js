// Test for Web Storage APIs
console.log("🧪 Testing: Web Storage APIs");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for localStorage usage
        if (/localStorage\.(setItem|getItem|removeItem)/i.test(userCode)) {
            checks.push("✅ Has localStorage usage");
            score += 25;
        } else {
            checks.push("❌ Missing localStorage usage");
        }
        
        // Check for sessionStorage usage
        if (/sessionStorage\.(setItem|getItem|removeItem)/i.test(userCode)) {
            checks.push("✅ Has sessionStorage usage");
            score += 25;
        } else {
            checks.push("❌ Missing sessionStorage usage");
        }
        
        // Check for storage event listener
        if (/addEventListener\s*\(\s*["']storage["']/i.test(userCode)) {
            checks.push("✅ Has storage event listener");
            score += 25;
        } else {
            checks.push("❌ Missing storage event listener");
        }
        
        // Check for JSON parsing/storage
        if (/(JSON\.stringify|JSON\.parse)\s*\(\s*[^\)]+\)\s*[\s\S]*(localStorage|sessionStorage)/i.test(userCode)) {
            checks.push("✅ Has JSON storage usage");
            score += 25;
        } else {
            checks.push("❌ Missing JSON storage usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more web storage features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Web Storage APIs", language: "html"}
    };
}

console.log("✅ Test ready for: Web Storage APIs");