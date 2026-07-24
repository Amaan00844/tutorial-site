
// css/intermediate/9/tests.js
// Test for CSS Custom Properties
console.log("🧪 Testing: CSS Custom Properties");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for custom property definition
        const has_custom_prop = /--[a-zA-Z0-9-]+\s*:\s*[^;]+;/i.test(user_code);
        if (has_custom_prop) {
            checks.push("✅ Has custom property definition");
            score += 25;
        } else {
            checks.push("❌ Missing custom property definition");
        }
        
        // Check for var() with fallback
        const has_var_fallback = /var\s*\(\s*--[a-zA-Z0-9-]+\s*,\s*[^)]+\)/i.test(user_code);
        if (has_var_fallback) {
            checks.push("✅ Has var() with fallback");
            score += 25;
        } else {
            checks.push("❌ Missing var() with fallback");
        }
        
        // Check for custom property in :root
        const has_root_prop = /:root\s*{[^}]*--[a-zA-Z0-9-]+\s*:/i.test(user_code);
        if (has_root_prop) {
            checks.push("✅ Has custom property in :root");
            score += 25;
        } else {
            checks.push("❌ Missing custom property in :root");
        }
        
        // Check for custom property usage
        const has_prop_usage = /[a-zA-Z-]+:\s*var\s*\(\s*--[a-zA-Z0-9-]+\s*\)\s*;/i.test(user_code);
        if (has_prop_usage) {
            checks.push("✅ Has custom property usage");
            score += 25;
        } else {
            checks.push("❌ Missing custom property usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more custom property features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Custom Properties", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Custom Properties");
