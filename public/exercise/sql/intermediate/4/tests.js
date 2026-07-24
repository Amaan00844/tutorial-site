// Test for Indexes and Performance
console.log("🧪 Testing: Indexes and Performance");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE INDEX
        const has_create_index = /CREATE\s+INDEX\s+\w+\s+ON\s+\w+/i.test(user_code);
        if (has_create_index) {
            checks.push("✅ Has CREATE INDEX");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE INDEX");
        }
        
        // Check for index on column
        const has_index_column = /CREATE\s+INDEX\s+\w+\s+ON\s+\w+\s*\(\s*\w+\s*\)/i.test(user_code);
        if (has_index_column) {
            checks.push("✅ Has index on column");
            score += 25;
        } else {
            checks.push("❌ Missing index on column");
        }
        
        // Check for SELECT with indexed column
        const has_select_indexed = /SELECT\s+.*WHERE\s+\w+\s*=/i.test(user_code);
        if (has_select_indexed) {
            checks.push("✅ Has SELECT with indexed column");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with indexed column");
        }
        
        // Check for EXPLAIN or ANALYZE
        const has_explain = /(EXPLAIN|ANALYZE)\s+/i.test(user_code);
        if (has_explain) {
            checks.push("✅ Has EXPLAIN or ANALYZE");
            score += 25;
        } else {
            checks.push("❌ Missing EXPLAIN or ANALYZE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more index and performance features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Indexes and Performance", language: "sql" }
    };
}

console.log("✅ Test ready for: Indexes and Performance");