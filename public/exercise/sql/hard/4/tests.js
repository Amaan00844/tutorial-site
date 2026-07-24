// Test for Transactions and Concurrency
console.log("🧪 Testing: Transactions and Concurrency");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for BEGIN TRANSACTION
        const has_begin_transaction = /(BEGIN\s+TRANSACTION|START\s+TRANSACTION)/i.test(user_code);
        if (has_begin_transaction) {
            checks.push("✅ Has BEGIN TRANSACTION");
            score += 25;
        } else {
            checks.push("❌ Missing BEGIN TRANSACTION");
        }
        
        // Check for COMMIT
        const has_commit = /COMMIT\s*;/i.test(user_code);
        if (has_commit) {
            checks.push("✅ Has COMMIT");
            score += 25;
        } else {
            checks.push("❌ Missing COMMIT");
        }
        
        // Check for ROLLBACK
        const has_rollback = /ROLLBACK\s*;/i.test(user_code);
        if (has_rollback) {
            checks.push("✅ Has ROLLBACK");
            score += 25;
        } else {
            checks.push("❌ Missing ROLLBACK");
        }
        
        // Check for LOCK or isolation level
        const has_lock_isolation = /(LOCK\s+TABLE|SET\s+TRANSACTION\s+ISOLATION\s+LEVEL)/i.test(user_code);
        if (has_lock_isolation) {
            checks.push("✅ Has LOCK or isolation level");
            score += 25;
        } else {
            checks.push("❌ Missing LOCK or isolation level");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more transaction and concurrency features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Transactions and Concurrency", language: "sql" }
    };
}

console.log("✅ Test ready for: Transactions and Concurrency");