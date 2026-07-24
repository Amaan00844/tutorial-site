// express/basic/3/tests.js
// Test for POST Routes
console.log("🧪 Testing: POST Routes");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for POST route
        const has_post_route = /\w+\s*\.\s*post\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_post_route) {
            checks.push("✅ Has POST route");
            score += 25;
        } else {
            checks.push("❌ Missing POST route");
        }
        
        // Check for request body access
        const has_req_body = /\w+\s*\.\s*body\s*\.\s*\w+/i.test(user_code);
        if (has_req_body) {
            checks.push("✅ Has request body access");
            score += 25;
        } else {
            checks.push("❌ Missing request body access");
        }
        
        // Check for response status
        const has_res_status = /\w+\s*\.\s*status\s*\(\s*\d+\s*\)/i.test(user_code);
        if (has_res_status) {
            checks.push("✅ Has response status");
            score += 25;
        } else {
            checks.push("❌ Missing response status");
        }
        
        // Check for response json
        const has_res_json = /\w+\s*\.\s*json\s*\(\s*{/i.test(user_code);
        if (has_res_json) {
            checks.push("✅ Has response json");
            score += 25;
        } else {
            checks.push("❌ Missing response json");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more POST route features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "POST Routes", language: "express" }
    };
}

console.log("✅ Test ready for: POST Routes");