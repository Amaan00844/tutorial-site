
// express/intermediate/1/tests.js
// Test for Custom Middleware
console.log("🧪 Testing: Custom Middleware");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for custom middleware function
        const has_custom_middleware = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)\s*{[^}]*\w+\s*\.\s*\w+\s*=/i.test(user_code);
        if (has_custom_middleware) {
            checks.push("✅ Has custom middleware function");
            score += 25;
        } else {
            checks.push("❌ Missing custom middleware function");
        }
        
        // Check for middleware logic
        const has_logic = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)\s*{[^}]*if\s*\(/i.test(user_code);
        if (has_logic) {
            checks.push("✅ Has middleware logic");
            score += 25;
        } else {
            checks.push("❌ Missing middleware logic");
        }
        
        // Check for app.use with custom middleware
        const has_app_use = /\w+\s*\.\s*use\s*\(\s*\w+\s*\)/i.test(user_code);
        if (has_app_use) {
            checks.push("✅ Has app.use with custom middleware");
            score += 25;
        } else {
            checks.push("❌ Missing app.use with custom middleware");
        }
        
        // Check for next() with condition
        const has_conditional_next = /if\s*\([^)]+\)\s*{[^}]*next\s*\(\s*\)/i.test(user_code);
        if (has_conditional_next) {
            checks.push("✅ Has conditional next() call");
            score += 25;
        } else {
            checks.push("❌ Missing conditional next() call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more custom middleware features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Custom Middleware", language: "express" }
    };
}

console.log("✅ Test ready for: Custom Middleware");