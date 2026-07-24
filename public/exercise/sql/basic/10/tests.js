// Test for CREATE TABLE and Constraints
console.log("🧪 Testing: CREATE TABLE and Constraints");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE TABLE
        const has_create_table = /CREATE\s+TABLE\s+\w+/i.test(user_code);
        if (has_create_table) {
            checks.push("✅ Has CREATE TABLE");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE TABLE");
        }
        
        // Check for column definitions
        const has_columns = /CREATE\s+TABLE\s+\w+\s*\([^)]+\)/i.test(user_code);
        if (has_columns) {
            checks.push("✅ Has column definitions");
            score += 25;
        } else {
            checks.push("❌ Missing column definitions");
        }
        
        // Check for data type
        const has_data_type = /(INT|VARCHAR|CHAR|DATE|DECIMAL|FLOAT)\s/i.test(user_code);
        if (has_data_type) {
            checks.push("✅ Has data type");
            score += 25;
        } else {
            checks.push("❌ Missing data type");
        }
        
        // Check for constraints
        const has_constraints = /(PRIMARY\s+KEY|FOREIGN\s+KEY|NOT\s+NULL|UNIQUE|CHECK)/i.test(user_code);
        if (has_constraints) {
            checks.push("✅ Has constraints");
            score += 25;
        } else {
            checks.push("❌ Missing constraints");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more CREATE TABLE and constraint features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CREATE TABLE and Constraints", language: "sql" }
    };
}

console.log("✅ Test ready for: CREATE TABLE and Constraints");