// css/hard/9/tests.js
// Test for CSS Grid Advanced
console.log("🧪 Testing: CSS Grid Advanced");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for grid-template-areas
        const has_grid_areas = /grid-template-areas\s*:\s*["'].*["']/i.test(user_code);
        if (has_grid_areas) {
            checks.push("✅ Has grid-template-areas");
            score += 25;
        } else {
            checks.push("❌ Missing grid-template-areas");
        }
        
        // Check for grid-area usage
        const has_grid_area = /grid-area\s*:\s*\w+/i.test(user_code);
        if (has_grid_area) {
            checks.push("✅ Has grid-area");
            score += 25;
        } else {
            checks.push("❌ Missing grid-area");
        }
        
        // Check for minmax() in grid-template
        const has_minmax = /minmax\s*\(\s*\d+\w+\s*,\s*\d+\w+\s*\)/i.test(user_code);
        if (has_minmax) {
            checks.push("✅ Has minmax()");
            score += 25;
        } else {
            checks.push("❌ Missing minmax()");
        }
        
        // Check for auto-flow dense
        const has_auto_flow = /grid-auto-flow\s*:\s*dense/i.test(user_code);
        if (has_auto_flow) {
            checks.push("✅ Has grid-auto-flow: dense");
            score += 25;
        } else {
            checks.push("❌ Missing grid-auto-flow: dense");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced grid features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Grid Advanced", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Grid Advanced");