
// css/intermediate/7/tests.js
// Test for CSS Filters
console.log("🧪 Testing: CSS Filters");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for filter property
        const has_filter = /filter\s*:\s*[^;]+;/i.test(user_code);
        if (has_filter) {
            checks.push("✅ Has filter property");
            score += 25;
        } else {
            checks.push("❌ Missing filter property");
        }
        
        // Check for blur filter
        const has_blur = /filter\s*:\s*.*blur\s*\([^)]+\)/i.test(user_code);
        if (has_blur) {
            checks.push("✅ Has blur filter");
            score += 25;
        } else {
            checks.push("❌ Missing blur filter");
        }
        
        // Check for brightness filter
        const has_brightness = /filter\s*:\s*.*brightness\s*\([^)]+\)/i.test(user_code);
        if (has_brightness) {
            checks.push("✅ Has brightness filter");
            score += 25;
        } else {
            checks.push("❌ Missing brightness filter");
        }
        
        // Check for multiple filters
        const has_multiple_filters = /filter\s*:\s*[a-z]+\s*\([^)]+\)\s+[a-z]+\s*\([^)]+\)/i.test(user_code);
        if (has_multiple_filters) {
            checks.push("✅ Has multiple filters");
            score += 25;
        } else {
            checks.push("❌ Missing multiple filters");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more filter features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Filters", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Filters");