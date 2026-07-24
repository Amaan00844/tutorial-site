// Test for Stored Procedures and Functions
console.log("🧪 Testing: Stored Procedures and Functions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE PROCEDURE
        const has_create_procedure = /CREATE\s+PROCEDURE\s+\w+/i.test(user_code);
        if (has_create_procedure) {
            checks.push("✅ Has CREATE PROCEDURE");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE PROCEDURE");
        }
        
        // Check for CREATE FUNCTION
        const has_create_function = /CREATE\s+FUNCTION\s+\w+/i.test(user_code);
        if (has_create_function) {
            checks.push("✅ Has CREATE FUNCTION");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE FUNCTION");
        }
        
        // Check for BEGIN ... END block
        const has_begin_end = /BEGIN\s+.*END/i.test(user_code);
        if (has_begin_end) {
            checks.push("✅ Has BEGIN ... END block");
            score += 25;
        } else {
            checks.push("❌ Missing BEGIN ... END block");
        }
        
        // Check for CALL or function usage
        const has_call = /(CALL\s+\w+|SELECT\s+\w+\s*\()/i.test(user_code);
        if (has_call) {
            checks.push("✅ Has CALL or function usage");
            score += 25;
        } else {
            checks.push("❌ Missing CALL or function usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more stored procedure and function features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Stored Procedures and Functions", language: "sql" }
    };
}

console.log("✅ Test ready for: Stored Procedures and Functions");