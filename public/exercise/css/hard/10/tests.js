// css/hard/10/tests.js
// Test for CSS Animations Complex
console.log("🧪 Testing: CSS Animations Complex");

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
        const has_keyframes = /@keyframes\s+\w+\s*\{\s*(0|100|\d+\w*)\%\s*\{.*?\}\s*(0|100|\d+\w*)\%\s*\{.*?\}/i.test(user_code);
        if (has_keyframes) {
            checks.push("✅ Has @keyframes with multiple steps");
            score += 25;
        } else {
            checks.push("❌ Missing @keyframes with multiple steps");
        }
        
        // Check for animation with multiple properties
        const has_animation = /animation\s*:\s*\w+\s+\d+\w*\s+\w+\s+\w+/i.test(user_code);
        if (has_animation) {
            checks.push("✅ Has animation with multiple properties");
            score += 25;
        } else {
            checks.push("❌ Missing animation with multiple properties");
        }
        
        // Check for animation-timing-function
        const has_timing_function = /animation-timing-function\s*:\s*(ease|cubic-bezier|steps)/i.test(user_code);
        if (has_timing_function) {
            checks.push("✅ Has animation-timing-function");
            score += 25;
        } else {
            checks.push("❌ Missing animation-timing-function");
        }
        
        // Check for animation-fill-mode
        const has_fill_mode = /animation-fill-mode\s*:\s*(forwards|backwards|both)/i.test(user_code);
        if (has_fill_mode) {
            checks.push("✅ Has animation-fill-mode");
            score += 25;
        } else {
            checks.push("❌ Missing animation-fill-mode");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more complex animation features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Animations Complex", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Animations Complex");