
// express/basic/5/tests.js
// Test for Query Parameters
console.log("🧪 Testing: Query Parameters");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for query parameter access
        const has_query = /\w+\s*\.\s*query\s*\.\s*\w+/i.test(user_code);
        if (has_query) {
            checks.push("✅ Has query parameter access");
            score += 25;
        } else {
            checks.push("❌ Missing query parameter access");
        }
        
        // Check for GET route with query
        const has_get_query = /\w+\s*\.\s*get\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{[^}]*\w+\s*\.\s*query/i.test(user_code);
        if (has_get_query) {
            checks.push("✅ Has GET route with query");
            score += 25;
        } else {
            checks.push("❌ Missing GET route with query");
        }
        
        // Check for response with query data
        const has_res_query = /\w+\s*\.\s*send\s*\(\s*\w+\s*\.\s*query\s*\.\s*\w+/i.test(user_code);
        if (has_res_query) {
            checks.push("✅ Has response with query data");
            score += 25;
        } else {
            checks.push("❌ Missing response with query data");
        }
        
        // Check for conditional query handling
        const has_conditional = /\w+\s*\.\s*query\s*\.\s*\w+\s*.*if\s*\(/i.test(user_code);
        if (has_conditional) {
            checks.push("✅ Has conditional query handling");
            score += 25;
        } else {
            checks.push("❌ Missing conditional query handling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more query parameter features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Query Parameters", language: "express" }
    };
}

console.log("✅ Test ready for: Query Parameters");