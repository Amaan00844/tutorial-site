// Test for Advanced JOINs
console.log("🧪 Testing: Advanced JOINs");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for LEFT or RIGHT JOIN
        const has_outer_join = /(LEFT|RIGHT)\s+JOIN\s+\w+/i.test(user_code);
        if (has_outer_join) {
            checks.push("✅ Has LEFT or RIGHT JOIN");
            score += 25;
        } else {
            checks.push("❌ Missing LEFT or RIGHT JOIN");
        }
        
        // Check for FULL OUTER JOIN
        const has_full_outer_join = /FULL\s+OUTER\s+JOIN\s+\w+/i.test(user_code);
        if (has_full_outer_join) {
            checks.push("✅ Has FULL OUTER JOIN");
            score += 25;
        } else {
            checks.push("❌ Missing FULL OUTER JOIN");
        }
        
        // Check for self-join
        const has_self_join = /JOIN\s+\w+\s+\w+\s+ON\s+\w+\.\w+\s*=\s*\w+\.\w+/i.test(user_code);
        if (has_self_join) {
            checks.push("✅ Has self-join");
            score += 25;
        } else {
            checks.push("❌ Missing self-join");
        }
        
        // Check for ON clause
        const has_on_clause = /JOIN\s+.*ON\s+\w+/i.test(user_code);
        if (has_on_clause) {
            checks.push("✅ Has ON clause");
            score += 25;
        } else {
            checks.push("❌ Missing ON clause");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced JOIN features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Advanced JOINs", language: "sql" }
    };
}

console.log("✅ Test ready for: Advanced JOINs");