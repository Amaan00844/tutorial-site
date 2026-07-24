// Test for Advanced Data Analysis
console.log("🧪 Testing: Advanced Data Analysis");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for aggregate with GROUP BY
        const has_aggregate_group = /SELECT\s+.*(COUNT|SUM|AVG|MIN|MAX)\s*\(.*GROUP\s+BY/i.test(user_code);
        if (has_aggregate_group) {
            checks.push("✅ Has aggregate with GROUP BY");
            score += 25;
        } else {
            checks.push("❌ Missing aggregate with GROUP BY");
        }
        
        // Check for window function
        const has_window_function = /(ROW_NUMBER|RANK|DENSE_RANK)\s*\(\s*\)\s+OVER/i.test(user_code);
        if (has_window_function) {
            checks.push("✅ Has window function");
            score += 25;
        } else {
            checks.push("❌ Missing window function");
        }
        
        // Check for subquery or CTE
        const has_subquery_cte = /(SELECT\s+.*\(\s*SELECT|WITH\s+\w+\s+AS)/i.test(user_code);
        if (has_subquery_cte) {
            checks.push("✅ Has subquery or CTE");
            score += 25;
        } else {
            checks.push("❌ Missing subquery or CTE");
        }
        
        // Check for JOIN in analysis
        const has_join = /SELECT\s+.*JOIN\s+\w+/i.test(user_code);
        if (has_join) {
            checks.push("✅ Has JOIN in analysis");
            score += 25;
        } else {
            checks.push("❌ Missing JOIN in analysis");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced data analysis features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Advanced Data Analysis", language: "sql" }
    };
}

console.log("✅ Test ready for: Advanced Data Analysis");