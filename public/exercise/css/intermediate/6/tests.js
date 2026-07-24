// css/intermediate/6/tests.js
// Test for CSS Responsive Design
console.log("🧪 Testing: CSS Responsive Design");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @media with max-width
        const has_media_max = /@media\s+\(\s*max-width\s*:\s*[^)]+\)/i.test(user_code);
        if (has_media_max) {
            checks.push("✅ Has @media with max-width");
            score += 25;
        } else {
            checks.push("❌ Missing @media with max-width");
        }
        
        // Check for @media with min-width
        const has_media_min = /@media\s+\(\s*min-width\s*:\s*[^)]+\)/i.test(user_code);
        if (has_media_min) {
            checks.push("✅ Has @media with min-width");
            score += 25;
        } else {
            checks.push("❌ Missing @media with min-width");
        }
        
        // Check for relative units
        const has_relative_units = /(vw|vh|vmin|vmax|rem|em|%)\s*[^;]+;/i.test(user_code);
        if (has_relative_units) {
            checks.push("✅ Has relative units");
            score += 25;
        } else {
            checks.push("❌ Missing relative units");
        }
        
        // Check for responsive layout
        const has_responsive_layout = /@media\s+.*{(display\s*:\s*(flex|grid)|[a-zA-Z-]+:\s*(vw|vh|vmin|vmax|rem|em|%))/i.test(user_code);
        if (has_responsive_layout) {
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
            : `Score: ${result.score}/100 - Add more responsive design features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Responsive Design", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Responsive Design");