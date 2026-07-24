// Test for Offline-First HTML
console.log("🧪 Testing: Offline-First HTML");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for service worker registration
        if (/navigator\.serviceWorker\.register/i.test(userCode)) {
            checks.push("✅ Has service worker registration");
            score += 25;
        } else {
            checks.push("❌ Missing service worker registration");
        }
        
        // Check for cache API usage
        if (/(caches\.(open|match|add)|cache\.(add|put|match))/i.test(userCode)) {
            checks.push("✅ Has Cache API usage");
            score += 25;
        } else {
            checks.push("❌ Missing Cache API usage");
        }
        
        // Check for offline detection
        if (/(navigator\.onLine|online|offline).*addEventListener/i.test(userCode)) {
            checks.push("✅ Has offline detection");
            score += 25;
        } else {
            checks.push("❌ Missing offline detection");
        }
        
        // Check for background sync or push notifications
        if (/(background.*sync|push.*notification|registration\.sync)/i.test(userCode)) {
            checks.push("✅ Has background sync features");
            score += 25;
        } else {
            checks.push("❌ Missing background sync features");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more offline-first features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Offline-First HTML", language: "html"}
    };
}

console.log("✅ Test ready for: Offline-First HTML");