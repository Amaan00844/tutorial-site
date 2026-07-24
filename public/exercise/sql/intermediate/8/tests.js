// Test for JSON Data Handling
console.log("🧪 Testing: JSON Data Handling");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for JSON data type
        const has_json_type = /JSON\s+/i.test(user_code);
        if (has_json_type) {
            checks.push("✅ Has JSON data type");
            score += 25;
        } else {
            checks.push("❌ Missing JSON data type");
        }
        
        // Check for JSON function
        const has_json_function = /(JSON_EXTRACT|JSON_VALUE|JSON_QUERY)\s*\(/i.test(user_code);
        if (has_json_function) {
            checks.push("✅ Has JSON function");
            score += 25;
        } else {
            checks.push("❌ Missing JSON function");
        }
        
        // Check for JSON in SELECT
        const has_json_select = /SELECT\s+.*(JSON_EXTRACT|JSON_VALUE|JSON_QUERY)\s*\(/i.test(user_code);
        if (has_json_select) {
            checks.push("✅ Has JSON function in SELECT");
            score += 25;
        } else {
            checks.push("❌ Missing JSON function in SELECT");
        }
        
        // Check for JSON path
        const has_json_path = /JSON_\w+\s*\([^)]*,\s*['"]\$\..*['"]\)/i.test(user_code);
        if (has_json_path) {
            checks.push("✅ Has JSON path");
            score += 25;
        } else {
            checks.push("❌ Missing JSON path");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JSON handling features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "JSON Data Handling", language: "sql" }
    };
}

console.log("✅ Test ready for: JSON Data Handling");