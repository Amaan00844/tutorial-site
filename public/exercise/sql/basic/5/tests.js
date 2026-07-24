// Test for GROUP BY and HAVING
console.log("🧪 Testing: GROUP BY and HAVING");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for GROUP BY clause
        const has_group_by = /GROUP\s+BY\s+\w+/i.test(user_code);
        if (has_group_by) {
            checks.push("✅ Has GROUP BY clause");
            score += 25;
        } else {
            checks.push("❌ Missing GROUP BY clause");
        }
        
        // Check for HAVING clause
        const has_having = /HAVING\s+\w+/i.test(user_code);
        if (has_having) {
            checks.push("✅ Has HAVING clause");
            score += 25;
        } else {
            checks.push("❌ Missing HAVING clause");
        }
        
        // Check for aggregate function
        const has_aggregate = /(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(user_code);
        if (has_aggregate) {
            checks.push("✅ Has aggregate function");
            score += 25;
        } else {
            checks.push("❌ Missing aggregate function");
        }
        
        // Check for SELECT with GROUP BY
        const has_select_group = /SELECT\s+.*GROUP\s+BY/i.test(user_code);
        if (has_select_group) {
            checks.push("✅ Has SELECT with GROUP BY");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with GROUP BY");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more GROUP BY and HAVING features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "GROUP BY and HAVING", language: "sql" }
    };
}

console.log("✅ Test ready for: GROUP BY and HAVING");