// Test for Sharding and Scalability
console.log("🧪 Testing: Sharding and Scalability");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE TABLE with sharding
        const has_create_table = /CREATE\s+TABLE\s+\w+\s+.*PARTITION\s+BY\s+(RANGE|LIST|HASH)/i.test(user_code);
        if (has_create_table) {
            checks.push("✅ Has CREATE TABLE with sharding");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE TABLE with sharding");
        }
        
        // Check for shard key
        const has_shard_key = /PARTITION\s+BY\s+(RANGE|LIST|HASH)\s*\(\s*\w+\s*\)/i.test(user_code);
        if (has_shard_key) {
            checks.push("✅ Has shard key");
            score += 25;
        } else {
            checks.push("❌ Missing shard key");
        }
        
        // Check for partition definition
        const has_partition_def = /PARTITION\s+\w+\s+VALUES/i.test(user_code);
        if (has_partition_def) {
            checks.push("✅ Has partition definition");
            score += 25;
        } else {
            checks.push("❌ Missing partition definition");
        }
        
        // Check for SELECT from sharded table
        const has_select_shard = /SELECT\s+.*FROM\s+\w+\s+WHERE\s+\w+\s*=/i.test(user_code);
        if (has_select_shard) {
            checks.push("✅ Has SELECT from sharded table");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT from sharded table");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more sharding and scalability features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Sharding and Scalability", language: "sql" }
    };
}

console.log("✅ Test ready for: Sharding and Scalability");