// css/intermediate/2/tests.js
// Test for CSS Pseudo-Elements
console.log("🧪 Testing: CSS Pseudo-Elements");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ::before
        const has_before = /::before\s*{/i.test(user_code);
        if (has_before) {
            checks.push("✅ Has ::before");
            score += 25;
        } else {
            checks.push("❌ Missing ::before");
        }
        
        // Check for ::after
        const has_after = /::after\s*{/i.test(user_code);
        if (has_after) {
            checks.push("✅ Has ::after");
            score += 25;
        } else {
            checks.push("❌ Missing ::after");
        }
        
        // Check for content property
        const has_content = /content\s*:\s*[^;]+;/i.test(user_code);
        if (has_content) {
            checks.push("✅ Has content property");
            score += 25;
        } else {
            checks.push("❌ Missing content property");
        }
        
        // Check for pseudo-element with styling
        const has_pseudo_styling = /::(before|after)[^{]*{[^{]*[^;]+;/i.test(user_code);
        if (has_pseudo_styling) {
            checks.push("✅ Has pseudo-element with styling");
            score += 25;
        } else {
            checks.push("❌ Missing pseudo-element with styling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more pseudo-element features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Pseudo-Elements", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Pseudo-Elements");
