// css/intermediate/3/tests.js
// Test for CSS Variables
console.log("🧪 Testing: CSS Variables");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for CSS variable definition
        const has_variable_def = /--[a-zA-Z0-9-]+\s*:\s*[^;]+;/i.test(user_code);
        if (has_variable_def) {
            checks.push("✅ Has CSS variable definition");
            score += 25;
        } else {
            checks.push("❌ Missing CSS variable definition");
        }
        
        // Check for var() usage
        const has_variable_use = /var\s*\(\s*--[a-zA-Z0-9-]+\s*\)/i.test(user_code);
        if (has_variable_use) {
            checks.push("✅ Has var() usage");
            score += 25;
        } else {
            checks.push("❌ Missing var() usage");
        }
        
        // Check for variable in property
        const has_variable_property = /[a-zA-Z-]+:\s*var\s*\(\s*--[a-zA-Z0-9-]+\s*\)\s*;/i.test(user_code);
        if (has_variable_property) {
            checks.push("✅ Has variable in property");
            score += 25;
        } else {
            checks.push("❌ Missing variable in property");
        }
        
        // Check for :root or selector
        const has_root = /:root\s*{[^}]*--[a-zA-Z0-9-]+\s*:/i.test(user_code);
        if (has_root) {
            checks.push("✅ Has :root with variable");
            score += 25;
        } else {
            checks.push("❌ Missing :root with variable");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more CSS variable features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Variables", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Variables");