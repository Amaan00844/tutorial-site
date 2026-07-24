// css/basic/9/tests.js
// Test for CSS Animations
console.log("🧪 Testing: CSS Animations");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @keyframes
        const has_keyframes = /@keyframes\s+\w+\s*{/i.test(user_code);
        if (has_keyframes) {
            checks.push("✅ Has @keyframes");
            score += 25;
        } else {
            checks.push("❌ Missing @keyframes");
        }
        
        // Check for animation-name
        const has_animation_name = /animation-name\s*:\s*[^;]+;/i.test(user_code);
        if (has_animation_name) {
            checks.push("✅ Has animation-name");
            score += 25;
        } else {
            checks.push("❌ Missing animation-name");
        }
        
        // Check for animation-duration
        const has_animation_duration = /animation-duration\s*:\s*[^;]+;/i.test(user_code);
        if (has_animation_duration) {
            checks.push("✅ Has animation-duration");
            score += 25;
        } else {
            checks.push("❌ Missing animation-duration");
        }
        
        // Check for animation shorthand
        const has_animation = /animation\s*:\s*[^;]+;/i.test(user_code);
        if (has_animation) {
            checks.push("✅ Has animation shorthand");
            score += 25;
        } else {
            checks.push("❌ Missing animation shorthand");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more animation features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Animations", language: "css" }
    };
}
console.log("✅ Test ready for: CSS Animations");