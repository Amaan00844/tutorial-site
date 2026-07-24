// Test for Lists and Tables
console.log("🧪 Testing: Lists and Tables");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for unordered lists
        if (/<ul[^>]*>[\s\S]*<\/ul>/i.test(userCode)) {
            checks.push("✅ Has unordered list");
            score += 25;
        } else {
            checks.push("❌ Missing unordered list");
        }
        
        // Check for ordered lists
        if (/<ol[^>]*>[\s\S]*<\/ol>/i.test(userCode)) {
            checks.push("✅ Has ordered list");
            score += 25;
        } else {
            checks.push("❌ Missing ordered list");
        }
        
        // Check for list items
        if (/<li[^>]*>[\s\S]*<\/li>/i.test(userCode)) {
            checks.push("✅ Has list items");
            score += 25;
        } else {
            checks.push("❌ Missing list items");
        }
        
        // Check for tables
        if (/<table[^>]*>[\s\S]*<tr[^>]*>[\s\S]*<t[dh][^>]*>[\s\S]*<\/t[dh]>/i.test(userCode)) {
            checks.push("✅ Has table with rows and cells");
            score += 25;
        } else {
            checks.push("❌ Missing table structure");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more lists and tables`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Lists and Tables", language: "html"}
    };
}

console.log("✅ Test ready for: Lists and Tables");