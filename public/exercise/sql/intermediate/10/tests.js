// Test for Temporary Tables
console.log("🧪 Testing: Temporary Tables");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE TEMPORARY TABLE
        const has_temp_table = /CREATE\s+TEMPORARY\s+TABLE\s+\w+/i.test(user_code);
        if (has_temp_table) {
            checks.push("✅ Has CREATE TEMPORARY TABLE");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE TEMPORARY TABLE");
        }
        
        // Check for column definitions
        const has_columns = /CREATE\s+TEMPORARY\s+TABLE\s+\w+\s*\(\s*\w+\s+/i.test(user_code);
        if (has_columns) {
            checks.push("✅ Has column definitions");
            score += 25;
        } else {
            checks.push("❌ Missing column definitions");
        }
        
        // Check for INSERT into temporary table
        const has_insert_temp = /INSERT\s+INTO\s+\w+\s+.*SELECT/i.test(user_code);
        if (has_insert_temp) {
            checks.push("✅ Has INSERT into temporary table");
            score += 25;
        } else {
            checks.push("❌ Missing INSERT into temporary table");
        }
        
        // Check for SELECT from temporary table
        const has_select_temp = /SELECT\s+.*FROM\s+\w+\s*;/i.test(user_code);
        if (has_select_temp) {
            checks.push("✅ Has SELECT from temporary table");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT from temporary table");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more temporary table features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Temporary Tables", language: "sql" }
    };
}

console.log("✅ Test ready for: Temporary Tables");