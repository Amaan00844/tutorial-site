// Test for Aggregate Functions
console.log("🧪 Testing: Aggregate Functions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for aggregate function
        const has_aggregate = /(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(user_code);
        if (has_aggregate) {
            checks.push("✅ Has aggregate function");
            score += 25;
        } else {
            checks.push("❌ Missing aggregate function");
        }
        
        // Check for SELECT with aggregate
        const has_select_aggregate = /SELECT\s+.*(COUNT|SUM|AVG|MIN|MAX)\s*\(/i.test(user_code);
        if (has_select_aggregate) {
            checks.push("✅ Has SELECT with aggregate");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT with aggregate");
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
            : `Score: ${result.score}/100 - Add more aggregate function features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Aggregate Functions", language: "sql" }
    };
}

console.log("✅ Test ready for: Aggregate Functions");