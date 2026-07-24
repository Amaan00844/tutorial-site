// express/hard/5/tests.js
// Test for RESTful API
console.log("🧪 Testing: RESTful API");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CRUD routes
        const has_crud_routes = /\w+\s*\.\s*(get|post|put|delete)\s*\(\s*['"]\/[^'"]+['"]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_crud_routes) {
            checks.push("✅ Has CRUD routes");
            score += 25;
        } else {
            checks.push("❌ Missing CRUD routes");
        }
        
        // Check for multiple HTTP methods
        const has_multiple_methods = user_code.match(/\w+\s*\.\s*(get|post|put|delete)\s*\(\s*['"]/gi)?.length > 2;
        if (has_multiple_methods) {
            checks.push("✅ Has multiple HTTP methods");
            score += 25;
        } else {
            checks.push("❌ Missing multiple HTTP methods");
        }
        
        // Check for data handling
        const has_data_handling = /\w+\s*\.\s*body\s*\.\s*\w+\s*.*\w+\s*\.\s*json\s*\(/i.test(user_code);
        if (has_data_handling) {
            checks.push("✅ Has data handling");
            score += 25;
        } else {
            checks.push("❌ Missing data handling");
        }
        
        // Check for resource-based routing
        const has_resource_routing = /\w+\s*\.\s*(get|post|put|delete)\s*\(\s*['"]\/:[^'"]+['"]/i.test(user_code);
        if (has_resource_routing) {
            checks.push("✅ Has resource-based routing");
            score += 25;
        } else {
            checks.push("❌ Missing resource-based routing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more RESTful API features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "RESTful API", language: "express" }
    };
}

console.log("✅ Test ready for: RESTful API");