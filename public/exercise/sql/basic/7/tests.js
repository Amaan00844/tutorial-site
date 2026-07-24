// Test for Basic JOINs
console.log("🧪 Testing: Basic JOINs");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for INNER JOIN
        const has_inner_join = /INNER\s+JOIN\s+\w+/i.test(user_code);
        if (has_inner_join) {
            checks.push("✅ Has INNER JOIN");
            score += 25;
        } else {
            checks.push("❌ Missing INNER JOIN");
        }
        
        // Check for ON clause
        const has_on_clause = /JOIN\s+.*ON\s+\w+/i.test(user_code);
        if (has_on_clause) {
            checks.push("✅ Has ON clause");
            score += 25;
        } else {
            checks.push("❌ Missing ON clause");
        }
        
        // Check for SELECT with JOIN
        const has_select_join = /SELECT\s+.*FROM\s+.*INNER\s+JOIN/i.test(user_code);
        if (has_select_join) {
            checks.push("✅ Has SELECT with JOIN");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with JOIN");
        }
        
        // Check for table alias
        const has_table_alias = /JOIN\s+\w+\s+\w+/i.test(user_code);
        if (has_table_alias) {
            checks.push("✅ Has table alias");
            score += 25;
        } else {
            checks.push("❌ Missing table alias");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more JOIN features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Basic JOINs", language: "sql" }
    };
}

console.log("✅ Test ready for: Basic JOINs");