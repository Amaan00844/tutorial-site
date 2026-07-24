// Test for Subqueries and CTEs
console.log("🧪 Testing: Subqueries and CTEs");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for subquery
        const has_subquery = /SELECT\s+.*\s*\(\s*SELECT\s+/i.test(user_code);
        if (has_subquery) {
            checks.push("✅ Has subquery");
            score += 25;
        } else {
            checks.push("❌ Missing subquery");
        }
        
        // Check for CTE
        const has_cte = /WITH\s+\w+\s+AS\s*\(\s*SELECT/i.test(user_code);
        if (has_cte) {
            checks.push("✅ Has CTE");
            score += 25;
        } else {
            checks.push("❌ Missing CTE");
        }
        
        // Check for subquery in WHERE
        const has_subquery_where = /WHERE\s+.*\(\s*SELECT\s+/i.test(user_code);
        if (has_subquery_where) {
            checks.push("✅ Has subquery in WHERE");
            score += 25;
        } else {
            checks.push("❌ Missing subquery in WHERE");
        }
        
        // Check for SELECT with subquery or CTE
        const has_select_subquery = /SELECT\s+.*(\(\s*SELECT|WITH\s+\w+\s+AS)/i.test(user_code);
        if (has_select_subquery) {
            checks.push("✅ Has SELECT with subquery or CTE");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with subquery or CTE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more subquery and CTE features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Subqueries and CTEs", language: "sql" }
    };
}

console.log("✅ Test ready for: Subqueries and CTEs");