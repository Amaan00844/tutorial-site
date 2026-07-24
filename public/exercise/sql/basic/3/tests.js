// Test for ORDER BY and LIMIT
console.log("🧪 Testing: ORDER BY and LIMIT");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ORDER BY clause
        const has_order_by = /ORDER\s+BY\s+\w+/i.test(user_code);
        if (has_order_by) {
            checks.push("✅ Has ORDER BY clause");
            score += 25;
        } else {
            checks.push("❌ Missing ORDER BY clause");
        }
        
        // Check for ASC or DESC
        const has_sort_direction = /ORDER\s+BY\s+.*(ASC|DESC)/i.test(user_code);
        if (has_sort_direction) {
            checks.push("✅ Has ASC or DESC");
            score += 25;
        } else {
            checks.push("❌ Missing ASC or DESC");
        }
        
        // Check for LIMIT clause
        const has_limit = /LIMIT\s+\d+/i.test(user_code);
        if (has_limit) {
            checks.push("✅ Has LIMIT clause");
            score += 25;
        } else {
            checks.push("❌ Missing LIMIT clause");
        }
        
        // Check for SELECT with ORDER BY
        const has_select_order = /SELECT\s+.*FROM\s+.*ORDER\s+BY/i.test(user_code);
        if (has_select_order) {
            checks.push("✅ Has SELECT with ORDER BY");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with ORDER BY");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more ORDER BY and LIMIT features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "ORDER BY and LIMIT", language: "sql" }
    };
}

console.log("✅ Test ready for: ORDER BY and LIMIT");