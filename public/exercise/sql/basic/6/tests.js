// Test for INSERT, UPDATE, DELETE
console.log("🧪 Testing: INSERT, UPDATE, DELETE");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for INSERT statement
        const has_insert = /INSERT\s+INTO\s+\w+/i.test(user_code);
        if (has_insert) {
            checks.push("✅ Has INSERT statement");
            score += 25;
        } else {
            checks.push("❌ Missing INSERT statement");
        }
        
        // Check for UPDATE statement
        const has_update = /UPDATE\s+\w+/i.test(user_code);
        if (has_update) {
            checks.push("✅ Has UPDATE statement");
            score += 25;
        } else {
            checks.push("❌ Missing UPDATE statement");
        }
        
        // Check for DELETE statement
        const has_delete = /DELETE\s+FROM\s+\w+/i.test(user_code);
        if (has_delete) {
            checks.push("✅ Has DELETE statement");
            score += 25;
        } else {
            checks.push("❌ Missing DELETE statement");
        }
        
        // Check for WHERE in UPDATE or DELETE
        const has_where = /(UPDATE|DELETE)\s+.*WHERE\s+/i.test(user_code);
        if (has_where) {
            checks.push("✅ Has WHERE in UPDATE or DELETE");
            score += 25;
        } else {
            checks.push("❌ Missing WHERE in UPDATE or DELETE");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more INSERT, UPDATE, DELETE features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "INSERT, UPDATE, DELETE", language: "sql" }
    };
}

console.log("✅ Test ready for: INSERT, UPDATE, DELETE");