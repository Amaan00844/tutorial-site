// Test for Database Design and Normalization
console.log("🧪 Testing: Database Design and Normalization");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for multiple CREATE TABLE statements
        const has_multiple_tables = /(CREATE\s+TABLE\s+\w+\s*\([^)]+\)\s*;\s*){2,}/i.test(user_code);
        if (has_multiple_tables) {
            checks.push("✅ Has multiple CREATE TABLE statements");
            score += 25;
        } else {
            checks.push("❌ Missing multiple CREATE TABLE statements");
        }
        
        // Check for PRIMARY KEY
        const has_primary_key = /PRIMARY\s+KEY\s*\(\w+\)/i.test(user_code);
        if (has_primary_key) {
            checks.push("✅ Has PRIMARY KEY");
            score += 25;
        } else {
            checks.push("❌ Missing PRIMARY KEY");
        }
        
        // Check for FOREIGN KEY
        const has_foreign_key = /FOREIGN\s+KEY\s*\(\w+\)\s+REFERENCES\s+\w+/i.test(user_code);
        if (has_foreign_key) {
            checks.push("✅ Has FOREIGN KEY");
            score += 25;
        } else {
            checks.push("❌ Missing FOREIGN KEY");
        }
        
        // Check for normalization constraints
        const has_constraints = /(NOT\s+NULL|UNIQUE|CHECK)/i.test(user_code);
        if (has_constraints) {
            checks.push("✅ Has normalization constraints");
            score += 25;
        } else {
            checks.push("❌ Missing normalization constraints");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more database design and normalization features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Database Design and Normalization", language: "sql" }
    };
}

console.log("✅ Test ready for: Database Design and Normalization");