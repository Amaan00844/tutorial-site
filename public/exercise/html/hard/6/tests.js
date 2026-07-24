// Test for Shadow DOM Integration
console.log("🧪 Testing: Shadow DOM Integration");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for shadow root creation
        if (/attachShadow\s*\(\s*\{\s*mode\s*:\s*["'](open|closed)["']/i.test(userCode)) {
            checks.push("✅ Has shadow root creation");
            score += 25;
        } else {
            checks.push("❌ Missing shadow root creation");
        }
        
        // Check for slot usage
        if (/<slot[^>]*name\s*=\s*["'][^"']+["'][^>]*>/i.test(userCode)) {
            checks.push("✅ Has named slots");
            score += 25;
        } else {
            checks.push("❌ Missing named slots");
        }
        
        // Check for slot event handling
        if (/slotchange|assignedElements|assignedNodes/i.test(userCode)) {
            checks.push("✅ Has slot event handling");
            score += 25;
        } else {
            checks.push("❌ Missing slot event handling");
        }
        
        // Check for shadow DOM styling
        if (/:host|:slotted|::slotted/i.test(userCode)) {
            checks.push("✅ Has shadow DOM styling");
            score += 25;
        } else {
            checks.push("❌ Missing shadow DOM styling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more shadow DOM features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Shadow DOM Integration", language: "html"}
    };
}

console.log("✅ Test ready for: Shadow DOM Integration");