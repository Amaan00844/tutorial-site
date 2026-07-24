// css/basic/8/tests.js
// Test for CSS Transitions
console.log("🧪 Testing: CSS Transitions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for transition-property
        const has_transition_property = /transition-property\s*:\s*[^;]+;/i.test(user_code);
        if (has_transition_property) {
            checks.push("✅ Has transition-property");
            score += 25;
        } else {
            checks.push("❌ Missing transition-property");
        }
        
        // Check for transition-duration
        const has_transition_duration = /transition-duration\s*:\s*[^;]+;/i.test(user_code);
        if (has_transition_duration) {
            checks.push("✅ Has transition-duration");
            score += 25;
        } else {
            checks.push("❌ Missing transition-duration");
        }
        
        // Check for transition shorthand
        const has_transition = /transition\s*:\s*[^;]+;/i.test(user_code);
        if (has_transition) {
            checks.push("✅ Has transition shorthand");
            score += 25;
        } else {
            checks.push("❌ Missing transition shorthand");
        }
        
        // Check for :hover or other state
        const has_pseudo_state = /:hover\s*{/i.test(user_code);
        if (has_pseudo_state) {
            checks.push("✅ Has :hover state");
            score += 25;
        } else {
            checks.push("❌ Missing :hover state");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more transition features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Transitions", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Transitions");