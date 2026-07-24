
// express/intermediate/4/tests.js
// Test for Request Headers
console.log("🧪 Testing: Request Headers");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for header access
        const has_header = /\w+\s*\.\s*get\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_header) {
            checks.push("✅ Has header access");
            score += 25;
        } else {
            checks.push("❌ Missing header access");
        }
        
        // Check for route with header
        const has_route_header = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{[^}]*\w+\s*\.\s*get\s*\(\s*['"]/i.test(user_code);
        if (has_route_header) {
            checks.push("✅ Has route with header");
            score += 25;
        } else {
            checks.push("❌ Missing route with header");
        }
        
        // Check for conditional header handling
        const has_conditional_header = /\w+\s*\.\s*get\s*\(\s*['"][^'"]+['"]\s*\)\s*.*if\s*\(/i.test(user_code);
        if (has_conditional_header) {
            checks.push("✅ Has conditional header handling");
            score += 25;
        } else {
            checks.push("❌ Missing conditional header handling");
        }
        
        // Check for response with header data
        const has_res_header = /\w+\s*\.\s*(send|json)\s*\(\s*\w+\s*\.\s*get\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_res_header) {
            checks.push("✅ Has response with header data");
            score += 25;
        } else {
            checks.push("❌ Missing response with header data");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more request header features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Request Headers", language: "express" }
    };
}

console.log("✅ Test ready for: Request Headers");
