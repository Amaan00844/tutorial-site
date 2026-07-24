
// express/hard/6/tests.js
// Test for Database Integration
console.log("🧪 Testing: Database Integration");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for database import
        const has_db_import = /const\s+\w+\s*=\s*require\s*\(\s*['"](mongoose|sequelize|mysql)['"]\s*\)/i.test(user_code);
        if (has_db_import) {
            checks.push("✅ Has database import");
            score += 25;
        } else {
            checks.push("❌ Missing database import");
        }
        
        // Check for database connection
        const has_db_connection = /\w+\s*\.\s*connect\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_db_connection) {
            checks.push("✅ Has database connection");
            score += 25;
        } else {
            checks.push("❌ Missing database connection");
        }
        
        // Check for model definition
        const has_model = /\w+\s*\.\s*(model|Schema)\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_model) {
            checks.push("✅ Has model definition");
            score += 25;
        } else {
            checks.push("❌ Missing model definition");
        }
        
        // Check for database query
        const has_db_query = /\w+\s*\.\s*(find|findOne|create|update|delete)\s*\(\s*{/i.test(user_code);
        if (has_db_query) {
            checks.push("✅ Has database query");
            score += 25;
        } else {
            checks.push("❌ Missing database query");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more database integration features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Database Integration", language: "express" }
    };
}

console.log("✅ Test ready for: Database Integration");