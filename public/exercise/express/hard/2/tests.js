
// express/hard/2/tests.js
// Test for JWT Authentication
console.log("🧪 Testing: JWT Authentication");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for jsonwebtoken import
        const has_jwt = /const\s+\w+\s*=\s*require\s*\(\s*['"]jsonwebtoken['"]\s*\)/i.test(user_code);
        if (has_jwt) {
            checks.push("✅ Has jsonwebtoken import");
            score += 25;
        } else {
            checks.push("❌ Missing jsonwebtoken import");
        }
        
        // Check for jwt.sign
        const has_jwt_sign = /\w+\s*\.\s*sign\s*\(\s*{/i.test(user_code);
        if (has_jwt_sign) {
            checks.push("✅ Has jwt.sign");
            score += 25;
        } else {
            checks.push("❌ Missing jwt.sign");
        }
        
        // Check for jwt.verify
        const has_jwt_verify = /\w+\s*\.\s*verify\s*\(\s*\w+\s*\.\s*header\s*\(\s*['"]Authorization['"]/i.test(user_code);
        if (has_jwt_verify) {
            checks.push("✅ Has jwt.verify");
            score += 25;
        } else {
            checks.push("❌ Missing jwt.verify");
        }
        
        // Check for auth middleware with JWT
        const has_jwt_middleware = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)\s*{[^}]*\w+\s*\.\s*verify\s*\(/i.test(user_code);
        if (has_jwt_middleware) {
            checks.push("✅ Has auth middleware with JWT");
            score += 25;
        } else {
            checks.push("❌ Missing auth middleware with JWT");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JWT authentication features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "JWT Authentication", language: "express" }
    };
}

console.log("✅ Test ready for: JWT Authentication");