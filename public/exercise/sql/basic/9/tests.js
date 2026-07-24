// Test for Date and Time Functions
console.log("🧪 Testing: Date and Time Functions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for date function
        const has_date_function = /(NOW|CURRENT_DATE|CURRENT_TIMESTAMP|DATEADD|DATEDIFF)\s*\(/i.test(user_code);
        if (has_date_function) {
            checks.push("✅ Has date function");
            score += 25;
        } else {
            checks.push("❌ Missing date function");
        }
        
        // Check for date function in SELECT
        const has_date_in_select = /SELECT\s+.*(NOW|CURRENT_DATE|CURRENT_TIMESTAMP|DATEADD|DATEDIFF)\s*\(/i.test(user_code);
        if (has_date_in_select) {
            checks.push("✅ Has date function in SELECT");
            score += 25;
        } else {
            checks.push("❌ Missing date function in SELECT");
        }
        
        // Check for FROM clause
        const has_from = /FROM\s+\w+/i.test(user_code);
        if (has_from) {
            checks.push("✅ Has FROM clause");
            score += 25;
        } else {
            checks.push("❌ Missing FROM clause");
        }
        
        // Check for AS alias
        const has_alias = /AS\s+\w+/i.test(user_code);
        if (has_alias) {
            checks.push("✅ Has AS alias");
            score += 25;
        } else {
            checks.push("❌ Missing AS alias");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more date and time function features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Date and Time Functions", language: "sql" }
    };
}

console.log("✅ Test ready for: Date and Time Functions");