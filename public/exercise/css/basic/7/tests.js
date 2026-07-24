
// css/basic/7/tests.js
// Test for CSS Grid
console.log("🧪 Testing: CSS Grid");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for display: grid
        const has_display_grid = /display\s*:\s*grid\s*;/i.test(user_code);
        if (has_display_grid) {
            checks.push("✅ Has display: grid");
            score += 25;
        } else {
            checks.push("❌ Missing display: grid");
        }
        
        // Check for grid-template-columns
        const has_grid_columns = /grid-template-columns\s*:\s*[^;]+;/i.test(user_code);
        if (has_grid_columns) {
            checks.push("✅ Has grid-template-columns");
            score += 25;
        } else {
            checks.push("❌ Missing grid-template-columns");
        }
        
        // Check for grid-template-rows
        const has_grid_rows = /grid-template-rows\s*:\s*[^;]+;/i.test(user_code);
        if (has_grid_rows) {
            checks.push("✅ Has grid-template-rows");
            score += 25;
        } else {
            checks.push("❌ Missing grid-template-rows");
        }
        
        // Check for grid-gap or gap
        const has_grid_gap = /(grid-gap|gap)\s*:\s*[^;]+;/i.test(user_code);
        if (has_grid_gap) {
            checks.push("✅ Has grid-gap or gap");
            score += 25;
        } else {
            checks.push("❌ Missing grid-gap or gap");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more grid features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Grid", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Grid");