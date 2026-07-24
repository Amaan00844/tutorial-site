
// express/intermediate/2/tests.js
// Test for Error Handling Middleware
console.log("🧪 Testing: Error Handling Middleware");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for error middleware signature
        const has_error_middleware = /function\s+\w+\s*\(\s*err\s*,\s*\w+\s*,\s*\w+\s*,\s*next\s*\)/i.test(user_code);
        if (has_error_middleware) {
            checks.push("✅ Has error middleware signature");
            score += 25;
        } else {
            checks.push("❌ Missing error middleware signature");
        }
        
        // Check for app.use with error middleware
        const has_app_use = /\w+\s*\.\s*use\s*\(\s*\w+\s*\)/i.test(user_code);
        if (has_app_use) {
            checks.push("✅ Has app.use with error middleware");
            score += 25;
        } else {
            checks.push("❌ Missing app.use with error middleware");
        }
        
        // Check for error response
        const has_error_response = /\w+\s*\.\s*status\s*\(\s*\d+\s*\)\s*\.\s*(send|json)\s*\(/i.test(user_code);
        if (has_error_response) {
            checks.push("✅ Has error response");
            score += 25;
        } else {
            checks.push("❌ Missing error response");
        }
        
        // Check for next(err)
        const has_next_error = /next\s*\(\s*err\s*\)/i.test(user_code);
        if (has_next_error) {
            checks.push("✅ Has next(err) call");
            score += 25;
        } else {
            checks.push("❌ Missing next(err) call");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more error handling middleware features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Error Handling Middleware", language: "express" }
    };
}

console.log("✅ Test ready for: Error Handling Middleware");