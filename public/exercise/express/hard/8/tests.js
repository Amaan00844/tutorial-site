
// express/hard/8/tests.js
// Test for Middleware Chaining
console.log("🧪 Testing: Middleware Chaining");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for multiple middleware in route
        const has_multiple_middleware = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]\s*,\s*\[\s*\w+\s*,\s*\w+\s*\]/i.test(user_code);
        if (has_multiple_middleware) {
            checks.push("✅ Has multiple middleware in route");
            score += 25;
        } else {
            checks.push("❌ Missing multiple middleware in route");
        }
        
        // Check for middleware functions
        const has_middleware_functions = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)\s*{[^}]*next\s*\(\s*\)/i.test(user_code);
        if (has_middleware_functions) {
            checks.push("✅ Has middleware functions");
            score += 25;
        } else {
            checks.push("❌ Missing middleware functions");
        }
        
        // Check for sequential middleware execution
        const has_sequential = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]\s*,\s*\[\s*\w+\s*,\s*\w+\s*\]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_sequential) {
            checks.push("✅ Has sequential middleware execution");
            score += 25;
        } else {
            checks.push("❌ Missing sequential middleware execution");
        }
        
        // Check for conditional middleware logic
        const has_conditional_logic = /function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*,\s*next\s*\)\s*{[^}]*if\s*\(/i.test(user_code);
        if (has_conditional_logic) {
            checks.push("✅ Has conditional middleware logic");
            score += 25;
        } else {
            checks.push("❌ Missing conditional middleware logic");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more middleware chaining features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Middleware Chaining", language: "express" }
    };
}

console.log("✅ Test ready for: Middleware Chaining");