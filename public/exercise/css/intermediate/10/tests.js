
// css/intermediate/10/tests.js
// Test for CSS Advanced Layouts
console.log("🧪 Testing: CSS Advanced Layouts");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for display: flex or grid
        const has_layout = /display\s*:\s*(flex|grid)\s*;/i.test(user_code);
        if (has_layout) {
            checks.push("✅ Has display: flex or grid");
            score += 25;
        } else {
            checks.push("❌ Missing display: flex or grid");
        }
        
        // Check for grid-template-areas
        const has_grid_areas = /grid-template-areas\s*:\s*[^;]+;/i.test(user_code);
        if (has_grid_areas) {
            checks.push("✅ Has grid-template-areas");
            score += 25;
        } else {
            checks.push("❌ Missing grid-template-areas");
        }
        
        // Check for flex-wrap
        const has_flex_wrap = /flex-wrap\s*:\s*[^;]+;/i.test(user_code);
        if (has_flex_wrap) {
            checks.push("✅ Has flex-wrap");
            score += 25;
        } else {
            checks.push("❌ Missing flex-wrap");
        }
        
        // Check for responsive layout
        const has_responsive = /@media\s+.*{(display\s*:\s*(flex|grid)|[a-zA-Z-]+:\s*(vw|vh|vmin|vmax|rem|em|%))/i.test(user_code);
        if (has_responsive) {
            checks.push("✅ Has responsive layout");
            score += 25;
        } else {
            checks.push("❌ Missing responsive layout");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced layout features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Advanced Layouts", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Advanced Layouts");