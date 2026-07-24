// Test for Forms and Input Elements
console.log("🧪 Testing: Forms and Input Elements");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for form element
        if (/<form[^>]*>[\s\S]*<\/form>/i.test(userCode)) {
            checks.push("✅ Has form element");
            score += 25;
        } else {
            checks.push("❌ Missing form element");
        }
        
        // Check for input elements
        if (/<input[^>]*>/i.test(userCode)) {
            checks.push("✅ Has input elements");
            score += 25;
        } else {
            checks.push("❌ Missing input elements");
        }
        
        // Check for labels
        if (/<label[^>]*>[\s\S]*<\/label>/i.test(userCode)) {
            checks.push("✅ Has label elements");
            score += 25;
        } else {
            checks.push("❌ Missing label elements");
        }
        
        // Check for submit button
        if (/<input[^>]+type\s*=\s*["']submit["'][^>]*>/i.test(userCode)) {
            checks.push("✅ Has submit button");
            score += 25;
        } else {
            checks.push("❌ Missing submit button");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more form and input elements`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Forms and Input Elements", language: "html"}
    };
}

console.log("✅ Test ready for: Forms and Input Elements");