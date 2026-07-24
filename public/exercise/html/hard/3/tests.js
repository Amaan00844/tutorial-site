// Test for Performance Optimization
console.log("🧪 Testing: Performance Optimization");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for lazy loading
        if (/loading\s*=\s*["']lazy["']/i.test(userCode)) {
            checks.push("✅ Has lazy loading");
            score += 25;
        } else {
            checks.push("❌ Missing lazy loading");
        }
        
        // Check for async or defer scripts
        if (/<script[^>]+(async|defer)/i.test(userCode)) {
            checks.push("✅ Has async or defer scripts");
            score += 25;
        } else {
            checks.push("❌ Missing async or defer scripts");
        }
        
        // Check for resource hints
        if (/<link[^>]+rel\s*=\s*["'](preload|dns-prefetch|preconnect)["']/i.test(userCode)) {
            checks.push("✅ Has resource hints");
            score += 25;
        } else {
            checks.push("❌ Missing resource hints");
        }
        
        // Check for optimized images
        if (/<img[^>]+srcset\s*=\s*["'][^"']+["']|format\s*=\s*["']webp["']/i.test(userCode)) {
            checks.push("✅ Has optimized images");
            score += 25;
        } else {
            checks.push("❌ Missing optimized images");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more performance optimization features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Performance Optimization", language: "html"}
    };
}

console.log("✅ Test ready for: Performance Optimization");