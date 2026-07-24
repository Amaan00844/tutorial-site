
// css/hard/3/tests.js
// Test for CSS Architecture
console.log("🧪 Testing: CSS Architecture");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for BEM naming
        const has_bem = /[a-zA-Z0-9-]+__[a-zA-Z0-9-]+|--[a-zA-Z0-9-]+/i.test(user_code);
        if (has_bem) {
            checks.push("✅ Has BEM naming");
            score += 25;
        } else {
            checks.push("❌ Missing BEM naming");
        }
        
        // Check for modular structure
        const has_modular = /[#.][a-zA-Z0-9-]+-[a-zA-Z0-9-]+[^{]*{/i.test(user_code);
        if (has_modular) {
            checks.push("✅ Has modular structure");
            score += 25;
        } else {
            checks.push("❌ Missing modular structure");
        }
        
        // Check for variable usage
        const has_variable = /var\s*\(\s*--[a-zA-Z0-9-]+\s*\)/i.test(user_code);
        if (has_variable) {
            checks.push("✅ Has variable usage");
            score += 25;
        } else {
            checks.push("❌ Missing variable usage");
        }
        
        // Check for reusable components
        const has_reusable = /[#.][a-zA-Z0-9-]+[^{]*{\s*[a-zA-Z-]+:\s*[^;]+;\s*}\s*[#.][a-zA-Z0-9-]+[^{]*{/i.test(user_code);
        if (has_reusable) {
            checks.push("✅ Has reusable components");
            score += 25;
        } else {
            checks.push("❌ Missing reusable components");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more architecture features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Architecture", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Architecture");