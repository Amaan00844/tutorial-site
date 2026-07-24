// Test for Advanced Security and Permissions
console.log("🧪 Testing: Advanced Security and Permissions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for GRANT statement
        const has_grant = /GRANT\s+\w+\s+ON\s+\w+/i.test(user_code);
        if (has_grant) {
            checks.push("✅ Has GRANT statement");
            score += 25;
        } else {
            checks.push("❌ Missing GRANT statement");
        }
        
        // Check for REVOKE statement
        const has_revoke = /REVOKE\s+\w+\s+ON\s+\w+/i.test(user_code);
        if (has_revoke) {
            checks.push("✅ Has REVOKE statement");
            score += 25;
        } else {
            checks.push("❌ Missing REVOKE statement");
        }
        
        // Check for CREATE USER or ROLE
        const has_create_user_role = /(CREATE\s+USER|CREATE\s+ROLE)\s+\w+/i.test(user_code);
        if (has_create_user_role) {
            checks.push("✅ Has CREATE USER or ROLE");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE USER or ROLE");
        }
        
        // Check for WITH GRANT OPTION
        const has_grant_option = /WITH\s+GRANT\s+OPTION/i.test(user_code);
        if (has_grant_option) {
            checks.push("✅ Has WITH GRANT OPTION");
            score += 25;
        } else {
            checks.push("❌ Missing WITH GRANT OPTION");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more security and permission features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Advanced Security and Permissions", language: "sql" }
    };
}

console.log("✅ Test ready for: Advanced Security and Permissions");