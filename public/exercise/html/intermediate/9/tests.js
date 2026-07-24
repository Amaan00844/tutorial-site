// Test for Responsive Images
console.log("🧪 Testing: Responsive Images");

function runSimpleTest(userCode) {
    const result = {passed: false, score: 0, message: "", details: []};
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for srcset attribute
        if (/<img[^>]+srcset\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has srcset attribute");
            score += 25;
        } else {
            checks.push("❌ Missing srcset attribute");
        }
        
        // Check for sizes attribute
        if (/<img[^>]+sizes\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has sizes attribute");
            score += 25;
        } else {
            checks.push("❌ Missing sizes attribute");
        }
        
        // Check for picture element
        if (/<picture[^>]*>[\s\S]*<\/picture>/i.test(userCode)) {
            checks.push("✅ Has picture element");
            score += 25;
        } else {
            checks.push("❌ Missing picture element");
        }
        
        // Check for source with media queries
        if (/<source[^>]+media\s*=\s*["'][^"']+["'][^>]+srcset\s*=\s*["'][^"']+["']/i.test(userCode)) {
            checks.push("✅ Has source with media queries");
            score += 25;
        } else {
            checks.push("❌ Missing source with media queries");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed ? 
            `Great! Score: ${result.score}/100` : 
            `Score: ${result.score}/100 - Add more responsive image features`;
            
    } catch (error) {
        result.message = "Error: " + error.message;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: runSimpleTest,
        testConfig: {topic: "Responsive Images", language: "html"}
    };
}

console.log("✅ Test ready for: Responsive Images");