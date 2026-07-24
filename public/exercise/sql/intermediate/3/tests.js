// Test for Window Functions
console.log("🧪 Testing: Window Functions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for window function
        const has_window_function = /(ROW_NUMBER|RANK|DENSE_RANK)\s*\(\s*\)/i.test(user_code);
        if (has_window_function) {
            checks.push("✅ Has window function");
            score += 25;
        } else {
            checks.push("❌ Missing window function");
        }
        
        // Check for OVER clause
        const has_over_clause = /OVER\s*\(\s*(PARTITION\s+BY\s+\w+|ORDER\s+BY\s+\w+)/i.test(user_code);
        if (has_over_clause) {
            checks.push("✅ Has OVER clause");
            score += 25;
        } else {
            checks.push("❌ Missing OVER clause");
        }
        
        // Check for PARTITION BY
        const has_partition_by = /PARTITION\s+BY\s+\w+/i.test(user_code);
        if (has_partition_by) {
            checks.push("✅ Has PARTITION BY");
            score += 25;
        } else {
            checks.push("❌ Missing PARTITION BY");
        }
        
        // Check for SELECT with window function
        const has_select_window = /SELECT\s+.*(ROW_NUMBER|RANK|DENSE_RANK)\s*\(\s*\)\s+OVER/i.test(user_code);
        if (has_select_window) {
            checks.push("✅ Has SELECT with window function");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with window function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more window function features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Window Functions", language: "sql" }
    };
}

console.log("✅ Test ready for: Window Functions");