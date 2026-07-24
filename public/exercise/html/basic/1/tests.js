// Test for HTML Document Structure
console.log("🧪 Testing: HTML Document Structure");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for DOCTYPE declaration
        if (/<!DOCTYPE\s+html>/i.test(userCode)) {
            checks.push("✅ Has DOCTYPE declaration");
            score += 25;
        } else {
            checks.push("❌ Missing DOCTYPE declaration");
        }
        
        // Check for html element
        if (/<html[^>]*>/i.test(userCode)) {
            checks.push("✅ Has html element");
            score += 25;
        } else {
            checks.push("❌ Missing html element");
        }
        
        // Check for head section
        if (/<head[^>]*>[\s\S]*<\/head>/i.test(userCode)) {
            checks.push("✅ Has head section");
            score += 25;
        } else {
            checks.push("❌ Missing head section");
        }
        
        // Check for body section
        if (/<body[^>]*>[\s\S]*<\/body>/i.test(userCode)) {
            checks.push("✅ Has body section");
            score += 25;
        } else {
            checks.push("❌ Missing body section");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 70;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Create proper HTML document structure`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "HTML Document Structure", language: "html"}
    };
}

console.log("✅ Test ready for: HTML Document Structure");