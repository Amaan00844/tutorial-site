
// express/basic/9/tests.js
// Test for Basic Middleware
console.log("🧪 Testing: Basic Middleware");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for middleware function
        const has_middleware = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)/i.test(user_code);
        if (has_middleware) {
            checks.push("✅ Has middleware function");
            score += 25;
        } else {
            checks.push("❌ Missing middleware function");
        }
        
        // Check for app.use
        const has_app_use = /\w+\s*\.\s*use\s*\(\s*\w+\s*\)/i.test(user_code);
        if (has_app_use) {
            checks.push("✅ Has app.use");
            score += 25;
        } else {
            checks.push("❌ Missing app.use");
        }
        
        // Check for next() call
        const has_next = /next\s*\(\s*\)/i.test(user_code);
        if (has_next) {
            checks.push("✅ Has next() call");
            score += 25;
        } else {
            checks.push("❌ Missing next() call");
        }
        
        // Check for middleware application
        const has_middleware_apply = /\w+\s*\.\s*use\s*\(\s*['"][^'"]+['"]\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_middleware_apply) {
            checks.push("✅ Has middleware application");
            score += 25;
        } else {
            checks.push("❌ Missing middleware application");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more middleware features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Basic Middleware", language: "express" }
    };
}

console.log("✅ Test ready for: Basic Middleware");