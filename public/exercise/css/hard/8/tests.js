
// css/hard/8/tests.js
// Test for CSS Advanced Animations
console.log("🧪 Testing: CSS Advanced Animations");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @keyframes with multiple steps
        const has_keyframes_steps = /@keyframes\s+\w+\s*{[^}]*{[^{]*}[^}]*{[^{]*}/i.test(user_code);
        if (has_keyframes_steps) {
            checks.push("✅ Has @keyframes with multiple steps");
            score += 25;
        } else {
            checks.push("❌ Missing @keyframes with multiple steps");
        }
        
        // Check for animation-timing-function
        const has_timing_function = /animation-timing-function\s*:\s*[^;]+;/i.test(user_code);
        if (has_timing_function) {
            checks.push("✅ Has animation-timing-function");
            score += 25;
        } else {
            checks.push("❌ Missing animation-timing-function");
        }
        
        // Check for animation-delay
        const has_animation_delay = /animation-delay\s*:\s*[^;]+;/i.test(user_code);
        if (has_animation_delay) {
            checks.push("✅ Has animation-delay");
            score += 25;
        } else {
            checks.push("❌ Missing animation-delay");
        }
        
        // Check for animation-iteration-count
        const has_iteration_count = /animation-iteration-count\s*:\s*[^;]+;/i.test(user_code);
        if (has_iteration_count) {
            checks.push("✅ Has animation-iteration-count");
            score += 25;
        } else {
            checks.push("❌ Missing animation-iteration-count");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced animation features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Advanced Animations", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Advanced Animations");