// Test for Advanced Query Optimization
console.log("🧪 Testing: Advanced Query Optimization");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for EXPLAIN or ANALYZE
        const has_explain = /(EXPLAIN|ANALYZE)\s+/i.test(user_code);
        if (has_explain) {
            checks.push("✅ Has EXPLAIN or ANALYZE");
            score += 25;
        } else {
            checks.push("❌ Missing EXPLAIN or ANALYZE");
        }
        
        // Check for index usage
        const has_index = /CREATE\s+INDEX\s+\w+\s+ON\s+\w+/i.test(user_code);
        if (has_index) {
            checks.push("✅ Has index creation");
            score += 25;
        } else {
            checks.push("❌ Missing index creation");
        }
        
        // Check for query with JOIN
        const has_join = /SELECT\s+.*JOIN\s+\w+/i.test(user_code);
        if (has_join) {
            checks.push("✅ Has query with JOIN");
            score += 25;
        } else {
            checks.push("❌ Missing query with JOIN");
        }
        
        // Check for subquery or CTE
        const has_subquery_cte = /(SELECT\s+.*\(\s*SELECT|WITH\s+\w+\s+AS)/i.test(user_code);
        if (has_subquery_cte) {
            checks.push("✅ Has subquery or CTE");
            score += 25;
        } else {
            checks.push("❌ Missing subquery or CTE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more query optimization features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Advanced Query Optimization", language: "sql" }
    };
}

console.log("✅ Test ready for: Advanced Query Optimization");