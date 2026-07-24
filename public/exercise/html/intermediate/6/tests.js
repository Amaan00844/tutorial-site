// Test for Custom Data Attributes
console.log("🧪 Testing: Custom Data Attributes");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for data attributes
        if (/data-[a-zA-Z-]+\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has custom data attributes");
            score += 25;
        } else {
            checks.push("❌ Missing custom data attributes");
        }
        
        // Check for multiple data attributes
        const dataAttrs = (userCode.match(/data-[a-zA-Z-]+\s*=\s*["'][^"']+["']/gi) || []).length;
        if (dataAttrs >= 2) {
            checks.push("✅ Has multiple data attributes");
            score += 25;
        } else {
            checks.push("❌ Missing multiple data attributes");
        }
        
        // Check for dataset API usage
        if (/\.dataset\./i.test(userCode)) {
            checks.push("✅ Has dataset API usage");
            score += 25;
        } else {
            checks.push("❌ Missing dataset API usage");
        }
        
        // Check for semantic data attributes
        if (/data-(id|type|value|config|state)\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has semantic data attributes");
            score += 25;
        } else {
            checks.push("❌ Missing semantic data attributes");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more custom data attributes`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Custom Data Attributes", language: "html"}
    };
}

console.log("✅ Test ready for: Custom Data Attributes");