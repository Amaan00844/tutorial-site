// express/basic/2/tests.js
// Test for Basic Routes
console.log("🧪 Testing: Basic Routes");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for GET route
        const has_get_route = /\w+\s*\.\s*get\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_get_route) {
            checks.push("✅ Has GET route");
            score += 25;
        } else {
            checks.push("❌ Missing GET route");
        }
        
        // Check for route handler
        const has_handler = /\w+\s*\.\s*get\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_handler) {
            checks.push("✅ Has route handler");
            score += 25;
        } else {
            checks.push("❌ Missing route handler");
        }
        
        // Check for response send
        const has_res_send = /\w+\s*\.\s*send\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_res_send) {
            checks.push("✅ Has response send");
            score += 25;
        } else {
            checks.push("❌ Missing response send");
        }
        
        // Check for route path
        const has_route_path = /\w+\s*\.\s*get\s*\(\s*['"]\/[^'"]*['"]/i.test(user_code);
        if (has_route_path) {
            checks.push("✅ Has route path");
            score += 25;
        } else {
            checks.push("❌ Missing route path");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more route features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Basic Routes", language: "express" }
    };
}

console.log("✅ Test ready for: Basic Routes");
