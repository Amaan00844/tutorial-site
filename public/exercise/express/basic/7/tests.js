
// express/basic/7/tests.js
// Test for JSON Body Parsing
console.log("🧪 Testing: JSON Body Parsing");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express.json middleware
        const has_json_middleware = /\w+\s*\.\s*use\s*\(\s*express\s*\.\s*json\s*\(\s*\)/i.test(user_code);
        if (has_json_middleware) {
            checks.push("✅ Has express.json middleware");
            score += 25;
        } else {
            checks.push("❌ Missing express.json middleware");
        }
        
        // Check for POST route
        const has_post_route = /\w+\s*\.\s*post\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_post_route) {
            checks.push("✅ Has POST route");
            score += 25;
        } else {
            checks.push("❌ Missing POST route");
        }
        
        // Check for req.body access
        const has_body_access = /\w+\s*\.\s*body\s*\.\s*\w+/i.test(user_code);
        if (has_body_access) {
            checks.push("✅ Has req.body access");
            score += 25;
        } else {
            checks.push("❌ Missing req.body access");
        }
        
        // Check for response with body data
        const has_res_body = /\w+\s*\.\s*json\s*\(\s*\w+\s*\.\s*body/i.test(user_code);
        if (has_res_body) {
            checks.push("✅ Has response with body data");
            score += 25;
        } else {
            checks.push("❌ Missing response with body data");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JSON body parsing features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "JSON Body Parsing", language: "express" }
    };
}

console.log("✅ Test ready for: JSON Body Parsing");
