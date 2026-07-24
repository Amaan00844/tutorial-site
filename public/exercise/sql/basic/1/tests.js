// Test for Basic SELECT Statements
console.log("🧪 Testing: Basic SELECT Statements");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for SELECT keyword
        const has_select = /SELECT\s+/i.test(user_code);
        if (has_select) {
            checks.push("✅ Has SELECT keyword");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT keyword");
        }
        
        // Check for FROM clause
        const has_from = /FROM\s+\w+/i.test(user_code);
        if (has_from) {
            checks.push("✅ Has FROM clause");
            score += 25;
        } else {
            checks.push("❌ Missing FROM clause");
        }
        
        // Check for column selection
        const has_columns = /SELECT\s+[^;]+FROM/i.test(user_code);
        if (has_columns) {
            checks.push("✅ Has column selection");
            score += 25;
        } else {
            checks.push("❌ Missing column selection");
        }
        
        // Check for semicolon
        const has_semicolon = /;/.test(user_code);
        if (has_semicolon) {
            checks.push("✅ Has semicolon");
            score += 25;
        } else {
            checks.push("❌ Missing semicolon");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more SELECT statement features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Basic SELECT Statements", language: "sql" }
    };
}

console.log("✅ Test ready for: Basic SELECT Statements");