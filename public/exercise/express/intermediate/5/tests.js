
// express/intermediate/5/tests.js
// Test for Response Headers
console.log("🧪 Testing: Response Headers");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for res.set
        const has_res_set = /\w+\s*\.\s*set\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_res_set) {
            checks.push("✅ Has res.set");
            score += 25;
        } else {
            checks.push("❌ Missing res.set");
        }
        
        // Check for multiple headers
        const has_multiple_headers = /\w+\s*\.\s*set\s*\(\s*{/i.test(user_code);
        if (has_multiple_headers) {
            checks.push("✅ Has multiple headers");
            score += 25;
        } else {
            checks.push("❌ Missing multiple headers");
        }
        
        // Check for route with response headers
        const has_route_headers = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{[^}]*\w+\s*\.\s*set\s*\(/i.test(user_code);
        if (has_route_headers) {
            checks.push("✅ Has route with response headers");
            score += 25;
        } else {
            checks.push("❌ Missing route with response headers");
        }
        
        // Check for response after headers
        const has_response = /\w+\s*\.\s*set\s*\(\s*['"][^'"]+['"]\s*,\s*['"][^'"]+['"]\s*\)\s*\.\s*(send|json)\s*\(/i.test(user_code);
        if (has_response) {
            checks.push("✅ Has response after headers");
            score += 25;
        } else {
            checks.push("❌ Missing response after headers");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more response header features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Response Headers", language: "express" }
    };
}

console.log("✅ Test ready for: Response Headers");
