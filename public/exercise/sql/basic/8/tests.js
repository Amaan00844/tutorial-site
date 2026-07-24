// Test for String Functions
console.log("🧪 Testing: String Functions");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CONCAT function
        const has_concat = /CONCAT\s*\(/i.test(user_code);
        if (has_concat) {
            checks.push("✅ Has CONCAT function");
            score += 25;
        } else {
            checks.push("❌ Missing CONCAT function");
        }
        
        // Check for SUBSTRING function
        const has_substring = /(SUBSTRING|SUBSTR)\s*\(/i.test(user_code);
        if (has_substring) {
            checks.push("✅ Has SUBSTRING function");
            score += 25;
        } else {
            checks.push("❌ Missing SUBSTRING function");
        }
        
        // Check for string function in SELECT
        const has_string_in_select = /SELECT\s+.*(CONCAT|SUBSTRING|SUBSTR)\s*\(/i.test(user_code);
        if (has_string_in_select) {
            checks.push("✅ Has string function in SELECT");
            score += 25;
        } else {
            checks.push("❌ Missing string function in SELECT");
        }
        
        // Check for AS alias
        const has_alias = /AS\s+\w+/i.test(user_code);
        if (has_alias) {
            checks.push("✅ Has AS alias");
            score += 25;
        } else {
            checks.push("❌ Missing AS alias");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more string function features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "String Functions", language: "sql" }
    };
}

console.log("✅ Test ready for: String Functions");