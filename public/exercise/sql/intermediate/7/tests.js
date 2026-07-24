// Test for Partitioning Tables
console.log("🧪 Testing: Partitioning Tables");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE TABLE with PARTITION
        const has_partition = /CREATE\s+TABLE\s+\w+\s+.*PARTITION\s+BY/i.test(user_code);
        if (has_partition) {
            checks.push("✅ Has PARTITION BY in CREATE TABLE");
            score += 25;
        } else {
            checks.push("❌ Missing PARTITION BY in CREATE TABLE");
        }
        
        // Check for partition type
        const has_partition_type = /PARTITION\s+BY\s+(RANGE|LIST|HASH)/i.test(user_code);
        if (has_partition_type) {
            checks.push("✅ Has partition type (RANGE, LIST, HASH)");
            score += 25;
        } else {
            checks.push("❌ Missing partition type");
        }
        
        // Check for partition definition
        const has_partition_def = /PARTITION\s+\w+\s+VALUES/i.test(user_code);
        if (has_partition_def) {
            checks.push("✅ Has partition definition");
            score += 25;
        } else {
            checks.push("❌ Missing partition definition");
        }
        
        // Check for SELECT from partitioned table
        const has_select_partition = /SELECT\s+.*FROM\s+\w+\s*;/i.test(user_code);
        if (has_select_partition) {
            checks.push("✅ Has SELECT from partitioned table");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT from partitioned table");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more table partitioning features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Partitioning Tables", language: "sql" }
    };
}

console.log("✅ Test ready for: Partitioning Tables");