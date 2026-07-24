// css/basic/6/tests.js
// Test for CSS Flexbox
console.log("🧪 Testing: CSS Flexbox");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for display: flex
        const has_display_flex = /display\s*:\s*flex\s*;/i.test(user_code);
        if (has_display_flex) {
            checks.push("✅ Has display: flex");
            score += 25;
        } else {
            checks.push("❌ Missing display: flex");
        }
        
        // Check for flex-direction
        const has_flex_direction = /flex-direction\s*:\s*[^;]+;/i.test(user_code);
        if (has_flex_direction) {
            checks.push("✅ Has flex-direction");
            score += 25;
        } else {
            checks.push("❌ Missing flex-direction");
        }
        
        // Check for justify-content
        const has_justify_content = /justify-content\s*:\s*[^;]+;/i.test(user_code);
        if (has_justify_content) {
            checks.push("✅ Has justify-content");
            score += 25;
        } else {
            checks.push("❌ Missing justify-content");
        }
        
        // Check for align-items
        const has_align_items = /align-items\s*:\s*[^;]+;/i.test(user_code);
        if (has_align_items) {
            checks.push("✅ Has align-items");
            score += 25;
        } else {
            checks.push("❌ Missing align-items");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more flexbox features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Flexbox", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Flexbox");
