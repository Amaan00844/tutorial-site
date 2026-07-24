// Test for Database Replication
console.log("🧪 Testing: Database Replication");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE TABLE for replication
        const has_create_table = /CREATE\s+TABLE\s+\w+/i.test(user_code);
        if (has_create_table) {
            checks.push("✅ Has CREATE TABLE for replication");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE TABLE for replication");
        }
        
        // Check for replication configuration
        const has_replication_config = /(CHANGE\s+MASTER\s+TO|START\s+SLAVE|REPLICA\s+OF)/i.test(user_code);
        if (has_replication_config) {
            checks.push("✅ Has replication configuration");
            score += 25;
        } else {
            checks.push("❌ Missing replication configuration");
        }
        
        // Check for log settings
        const has_log_settings = /(binlog|log_bin|log-slave-updates)/i.test(user_code);
        if (has_log_settings) {
            checks.push("✅ Has log settings");
            score += 25;
        } else {
            checks.push("❌ Missing log settings");
        }
        
        // Check for SHOW or SELECT replication status
        const has_replication_status = /(SHOW\s+SLAVE\s+STATUS|SHOW\s+MASTER\s+STATUS|SELECT\s+.*FROM\s+.*replica)/i.test(user_code);
        if (has_replication_status) {
            checks.push("✅ Has replication status check");
            score += 25;
        } else {
            checks.push("❌ Missing replication status check");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more database replication features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Database Replication", language: "sql" }
    };
}

console.log("✅ Test ready for: Database Replication");