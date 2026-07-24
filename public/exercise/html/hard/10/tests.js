// Test for Advanced HTML Parsing
console.log("🧪 Testing: Advanced HTML Parsing");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for DOMParser usage
        if (/new\s+DOMParser\s*\(\s*\)|DOMParser\.parse/i.test(userCode)) {
            checks.push("✅ Has DOMParser usage");
            score += 25;
        } else {
            checks.push("❌ Missing DOMParser usage");
        }
        
        // Check for XMLSerializer or string manipulation
        if (/new\s+XMLSerializer\s*\(\s*\)|serializeToString/i.test(userCode)) {
            checks.push("✅ Has XMLSerializer usage");
            score += 25;
        } else {
            checks.push("❌ Missing XMLSerializer usage");
        }
        
        // Check for DOM manipulation
        if (/(createElement|appendChild|removeChild|querySelector|innerHTML)/i.test(userCode)) {
            checks.push("✅ Has DOM manipulation");
            score += 25;
        } else {
            checks.push("❌ Missing DOM manipulation");
        }
        
        // Check for error handling
        if (/try.*catch|onerror|error.*event/i.test(userCode)) {
            checks.push("✅ Has parsing error handling");
            score += 25;
        } else {
            checks.push("❌ Missing parsing error handling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more advanced parsing features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Advanced HTML Parsing", language: "html"}
    };
}

console.log("✅ Test ready for: Advanced HTML Parsing");