// css/hard/1/tests.js
// Test for CSS Performance Optimization
console.log("🧪 Testing: CSS Performance Optimization");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for will-change
        const has_will_change = /will-change\s*:\s*[^;]+;/i.test(user_code);
        if (has_will_change) {
            checks.push("✅ Has will-change");
            score += 25;
        } else {
            checks.push("❌ Missing will-change");
        }
        
        // Check for transform for GPU acceleration
        const has_transform = /transform\s*:\s*[^;]+;/i.test(user_code);
        if (has_transform) {
            checks.push("✅ Has transform for GPU");
            score += 25;
        } else {
            checks.push("❌ Missing transform for GPU");
        }
        
        // Check for minimal selectors
        const has_simple_selector = /^[#.a-zA-Z][^{]*{/i.test(user_code);
        if (has_simple_selector) {
            checks.push("✅ Has simple selector");
            score += 25;
        } else {
            checks.push("❌ Missing simple selector");
        }
        
        // Check for avoidance of !important
        const no_important = !/!important/i.test(user_code);
        if (no_important) {
            checks.push("✅ Avoids !important");
            score += 25;
        } else {
            checks.push("❌ Uses !important");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more performance optimization features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Performance Optimization", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Performance Optimization");
