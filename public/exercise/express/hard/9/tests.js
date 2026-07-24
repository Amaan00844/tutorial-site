
// express/hard/9/tests.js
// Test for Advanced Routing Patterns
console.log("🧪 Testing: Advanced Routing Patterns");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for route with regex
        const has_regex_route = /\w+\s*\.\s*(get|post)\s*\(\s*\/[^/]*\(\.\*\)\//i.test(user_code);
        if (has_regex_route) {
            checks.push("✅ Has route with regex");
            score += 25;
        } else {
            checks.push("❌ Missing route with regex");
        }
        
        // Check for parameterized route with constraints
        const has_param_constraints = /\w+\s*\.\s*route\s*\(\s*['"]\/:[^'"]+\(\w+\)['"]/i.test(user_code);
        if (has_param_constraints) {
            checks.push("✅ Has parameterized route with constraints");
            score += 25;
        } else {
            checks.push("❌ Missing parameterized route with constraints");
        }
        
        // Check for chained route methods
        const has_chained_routes = /\w+\s*\.\s*route\s*\(\s*['"][^'"]+['"]\s*\)\s*\.\s*(get|post)\s*\(\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{[^}]*\)\s*\.\s*(get|post)\s*\(/i.test(user_code);
        if (has_chained_routes) {
            checks.push("✅ Has chained route methods");
            score += 25;
        } else {
            checks.push("❌ Missing chained route methods");
        }
        
        // Check for express.Router usage
        const has_router = /const\s+\w+\s*=\s*express\s*\.\s*Router\s*\(\s*\)/i.test(user_code);
        if (has_router) {
            checks.push("✅ Has express.Router usage");
            score += 25;
        } else {
            checks.push("❌ Missing express.Router usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced routing features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Advanced Routing Patterns", language: "express" }
    };
}

console.log("✅ Test ready for: Advanced Routing Patterns");
