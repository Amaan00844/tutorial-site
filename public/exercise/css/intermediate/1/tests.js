// css/intermediate/1/tests.js
// Test for CSS Pseudo-Classes
console.log("🧪 Testing: CSS Pseudo-Classes");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for :hover
        const has_hover = /:hover\s*{/i.test(user_code);
        if (has_hover) {
            checks.push("✅ Has :hover");
            score += 25;
        } else {
            checks.push("❌ Missing :hover");
        }
        
        // Check for :focus
        const has_focus = /:focus\s*{/i.test(user_code);
        if (has_focus) {
            checks.push("✅ Has :focus");
            score += 25;
        } else {
            checks.push("❌ Missing :focus");
        }
        
        // Check for :nth-child
        const has_nth_child = /:nth-child\s*\([^)]+\)\s*{/i.test(user_code);
        if (has_nth_child) {
            checks.push("✅ Has :nth-child");
            score += 25;
        } else {
            checks.push("❌ Missing :nth-child");
        }
        
        // Check for pseudo-class with property
        const has_pseudo_property = /:[a-z-]+[^{]*{[^{]*[^;]+;/i.test(user_code);
        if (has_pseudo_property) {
            checks.push("✅ Has pseudo-class with property");
            score += 25;
        } else {
            checks.push("❌ Missing pseudo-class with property");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more pseudo-class features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Pseudo-Classes", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Pseudo-Classes");
