// Test for Advanced Indexing Strategies
console.log("🧪 Testing: Advanced Indexing Strategies");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for composite index
        const has_composite_index = /CREATE\s+INDEX\s+\w+\s+ON\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_composite_index) {
            checks.push("✅ Has composite index");
            score += 25;
        } else {
            checks.push("❌ Missing composite index");
        }
        
        // Check for covering index
        const has_covering_index = /CREATE\s+INDEX\s+\w+\s+ON\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_covering_index) {
            checks.push("✅ Has covering index");
            score += 25;
        } else {
            checks.push("❌ Missing covering index");
        }
        
        // Check for EXPLAIN with index usage
        const has_explain_index = /(EXPLAIN|ANALYZE)\s+SELECT\s+.*FROM\s+\w+\s+WHERE\s+\w+\s*=/i.test(user_code);
        if (has_explain_index) {
            checks.push("✅ Has EXPLAIN with index usage");
            score += 25;
        } else {
            checks.push("❌ Missing EXPLAIN with index usage");
        }
        
        // Check for index hint
        const has_index_hint = /USE\s+INDEX\s*\(\w+\)/i.test(user_code);
        if (has_index_hint) {
            checks.push("✅ Has index hint");
            score += 25;
        } else {
            checks.push("❌ Missing index hint");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced indexing features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Advanced Indexing Strategies", language: "sql" }
    };
}

console.log("✅ Test ready for: Advanced Indexing Strategies");