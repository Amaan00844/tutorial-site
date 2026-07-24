
// express/hard/10/tests.js
// Test for Request Validation
console.log("🧪 Testing: Request Validation");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express-validator import
        const has_validator = /const\s+\{.*\w+.*\}\s*=\s*require\s*\(\s*['"]express-validator['"]\s*\)/i.test(user_code);
        if (has_validator) {
            checks.push("✅ Has express-validator import");
            score += 25;
        } else {
            checks.push("❌ Missing express-validator import");
        }
        
        // Check for validation middleware
        const has_validation_middleware = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]\s*,\s*\[\s*\w+\.\w+\s*\(/i.test(user_code);
        if (has_validation_middleware) {
            checks.push("✅ Has validation middleware");
            score += 25;
        } else {
            checks.push("❌ Missing validation middleware");
        }
        
        // Check for validation rules
        const has_validation_rules = /\w+\.\w+\s*\(\s*['"][^'"]+['"]\s*\)\s*\.\s*(isString|isInt|notEmpty)\s*\(\s*\)/i.test(user_code);
        if (has_validation_rules) {
            checks.push("✅ Has validation rules");
            score += 25;
        } else {
            checks.push("❌ Missing validation rules");
        }
        
        // Check for validation error handling
        const has_error_handling = /validationResult\s*\(\s*\w+\s*\)\s*\.\s*isEmpty\s*\(\s*\)/i.test(user_code);
        if (has_error_handling) {
            checks.push("✅ Has validation error handling");
            score += 25;
        } else {
            checks.push("❌ Missing validation error handling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more request validation features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Request Validation", language: "express" }
    };
}

console.log("✅ Test ready for: Request Validation");