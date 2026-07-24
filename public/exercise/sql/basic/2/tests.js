// Test for WHERE Clause and Filtering
console.log("🧪 Testing: WHERE Clause and Filtering");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for WHERE clause
        const has_where = /WHERE\s+\w+/i.test(user_code);
        if (has_where) {
            checks.push("✅ Has WHERE clause");
            score += 25;
        } else {
            checks.push("❌ Missing WHERE clause");
        }
        
        // Check for comparison operator
        const has_comparison = /WHERE\s+[^=><!]+(=|>|>=|<|<=|<>|!=)/i.test(user_code);
        if (has_comparison) {
            checks.push("✅ Has comparison operator");
            score += 25;
        } else {
            checks.push("❌ Missing comparison operator");
        }
        
        // Check for logical operator
        const has_logical = /WHERE\s+.*(AND|OR)\s+/i.test(user_code);
        if (has_logical) {
            checks.push("✅ Has logical operator (AND/OR)");
            score += 25;
        } else {
            checks.push("❌ Missing logical operator");
        }
        
        // Check for SELECT with WHERE
        const has_select_where = /SELECT\s+.*FROM\s+.*WHERE\s+/i.test(user_code);
        if (has_select_where) {
            checks.push("✅ Has SELECT with WHERE");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with WHERE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more WHERE clause features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "WHERE Clause and Filtering", language: "sql" }
    };
}

console.log("✅ Test ready for: WHERE Clause and Filtering");