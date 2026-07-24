// Test for Dynamic SQL
console.log("🧪 Testing: Dynamic SQL");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for PREPARE statement
        const has_prepare = /PREPARE\s+\w+\s+FROM/i.test(user_code);
        if (has_prepare) {
            checks.push("✅ Has PREPARE statement");
            score += 25;
        } else {
            checks.push("❌ Missing PREPARE statement");
        }
        
        // Check for EXECUTE statement
        const has_execute = /EXECUTE\s+\w+/i.test(user_code);
        if (has_execute) {
            checks.push("✅ Has EXECUTE statement");
            score += 25;
        } else {
            checks.push("❌ Missing EXECUTE statement");
        }
        
        // Check for dynamic query string
        const has_dynamic_query = /FROM\s+['"].*SELECT.*['"]/i.test(user_code);
        if (has_dynamic_query) {
            checks.push("✅ Has dynamic query string");
            score += 25;
        } else {
            checks.push("❌ Missing dynamic query string");
        }
        
        // Check for DEALLOCATE or DROP PREPARE
        const has_deallocate = /(DEALLOCATE|DROP)\s+PREPARE\s+\w+/i.test(user_code);
        if (has_deallocate) {
            checks.push("✅ Has DEALLOCATE or DROP PREPARE");
            score += 25;
        } else {
            checks.push("❌ Missing DEALLOCATE or DROP PREPARE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more dynamic SQL features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Dynamic SQL", language: "sql" }
    };
}

console.log("✅ Test ready for: Dynamic SQL");