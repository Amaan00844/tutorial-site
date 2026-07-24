// Test for Views and Materialized Views
console.log("🧪 Testing: Views and Materialized Views");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CREATE VIEW
        const has_create_view = /CREATE\s+VIEW\s+\w+/i.test(user_code);
        if (has_create_view) {
            checks.push("✅ Has CREATE VIEW");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE VIEW");
        }
        
        // Check for CREATE MATERIALIZED VIEW
        const has_create_materialized = /CREATE\s+MATERIALIZED\s+VIEW\s+\w+/i.test(user_code);
        if (has_create_materialized) {
            checks.push("✅ Has CREATE MATERIALIZED VIEW");
            score += 25;
        } else {
            checks.push("❌ Missing CREATE MATERIALIZED VIEW");
        }
        
        // Check for SELECT in view
        const has_select_view = /(CREATE\s+(MATERIALIZED\s+)?VIEW\s+\w+\s+AS\s+SELECT)/i.test(user_code);
        if (has_select_view) {
            checks.push("✅ Has SELECT in view");
            score += 25;
        } else {
            checks.push("❌ Missing SELECT in view");
        }
        
        // Check for view usage
        const has_view_usage = /SELECT\s+.*FROM\s+\w+\s*;/i.test(user_code);
        if (has_view_usage) {
            checks.push("✅ Has view usage");
            score += 25;
        } else {
            checks.push("❌ Missing view usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more view and materialized view features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Views and Materialized Views", language: "sql" }
    };
}

console.log("✅ Test ready for: Views and Materialized Views");