
// express/basic/6/tests.js
// Test for Route Parameters
console.log("🧪 Testing: Route Parameters");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for route parameter
        const has_route_param = /\w+\s*\.\s*get\s*\(\s*['"]\/:[^'"]+['"]/i.test(user_code);
        if (has_route_param) {
            checks.push("✅ Has route parameter");
            score += 25;
        } else {
            checks.push("❌ Missing route parameter");
        }
        
        // Check for params access
        const has_params = /\w+\s*\.\s*params\s*\.\s*\w+/i.test(user_code);
        if (has_params) {
            checks.push("✅ Has params access");
            score += 25;
        } else {
            checks.push("❌ Missing params access");
        }
        
        // Check for response with param
        const has_res_param = /\w+\s*\.\s*send\s*\(\s*\w+\s*\.\s*params\s*\.\s*\w+/i.test(user_code);
        if (has_res_param) {
            checks.push("✅ Has response with param");
            score += 25;
        } else {
            checks.push("❌ Missing response with param");
        }
        
        // Check for multiple route parameters
        const has_multiple_params = /\w+\s*\.\s*get\s*\(\s*['"]\/:[^'"]+\/:[^'"]+['"]/i.test(user_code);
        if (has_multiple_params) {
            checks.push("✅ Has multiple route parameters");
            score += 25;
        } else {
            checks.push("❌ Missing multiple route parameters");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more route parameter features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Route Parameters", language: "express" }
    };
}

console.log("✅ Test ready for: Route Parameters");