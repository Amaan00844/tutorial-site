
// express/hard/1/tests.js
// Test for Authentication Middleware
console.log("🧪 Testing: Authentication Middleware");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for auth middleware function
        const has_auth_middleware = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)\s*{[^}]*\w+\s*\.\s*header\s*\(\s*['"]Authorization['"]/i.test(user_code);
        if (has_auth_middleware) {
            checks.push("✅ Has auth middleware function");
            score += 25;
        } else {
            checks.push("❌ Missing auth middleware function");
        }
        
        // Check for token validation
        const has_token_validation = /if\s*\(\s*!.*\w+\s*\.\s*header\s*\(\s*['"]Authorization['"]/i.test(user_code);
        if (has_token_validation) {
            checks.push("✅ Has token validation");
            score += 25;
        } else {
            checks.push("❌ Missing token validation");
        }
        
        // Check for error response
        const has_error_response = /\w+\s*\.\s*status\s*\(\s*401\s*\)\s*\.\s*(send|json)\s*\(/i.test(user_code);
        if (has_error_response) {
            checks.push("✅ Has error response");
            score += 25;
        } else {
            checks.push("❌ Missing error response");
        }
        
        // Check for next() with auth
        const has_next_auth = /if\s*\([^)]+\)\s*{[^}]*next\s*\(\s*\)/i.test(user_code);
        if (has_next_auth) {
            checks.push("✅ Has next() with auth");
            score += 25;
        } else {
            checks.push("❌ Missing next() with auth");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more authentication middleware features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Authentication Middleware", language: "express" }
    };
}

console.log("✅ Test ready for: Authentication Middleware");