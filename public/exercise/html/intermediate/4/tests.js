// Test for Microdata and Schema
console.log("🧪 Testing: Microdata and Schema");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for itemscope
        if (/itemscope/i.test(userCode)) {
            checks.push("✅ Has itemscope attribute");
            score += 25;
        } else {
            checks.push("❌ Missing itemscope attribute");
        }
        
        // Check for itemtype with schema.org
        if (/itemtype\s*=\s*["']https?:\/\/schema\.org\/[^"']+["']/i.test(userCode)) {
            checks.push("✅ Has schema.org itemtype");
            score += 25;
        } else {
            checks.push("❌ Missing schema.org itemtype");
        }
        
        // Check for itemprop
        if (/itemprop\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has itemprop attributes");
            score += 25;
        } else {
            checks.push("❌ Missing itemprop attributes");
        }
        
        // Check for multiple itemprop attributes
        const itemProps = (userCode.match(/itemprop\s*=\s*["'][^"']+["']/gi) || []).length;
        if (itemProps >= 2) {
            checks.push("✅ Has multiple itemprop attributes");
            score += 25;
        } else {
            checks.push("❌ Missing multiple itemprop attributes");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more microdata and schema features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Microdata and Schema", language: "html"}
    };
}

console.log("✅ Test ready for: Microdata and Schema");