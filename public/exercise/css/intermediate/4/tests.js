
// css/intermediate/4/tests.js
// Test for CSS Advanced Selectors
console.log("🧪 Testing: CSS Advanced Selectors");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for child selector
        const has_child_selector = /[a-zA-Z]+[>\s][a-zA-Z]+[^{]*{/i.test(user_code);
        if (has_child_selector) {
            checks.push("✅ Has child selector");
            score += 25;
        } else {
            checks.push("❌ Missing child selector");
        }
        
        // Check for sibling selector
        const has_sibling_selector = /[a-zA-Z]+\s*[~+]\s*[a-zA-Z]+[^{]*{/i.test(user_code);
        if (has_sibling_selector) {
            checks.push("✅ Has sibling selector");
            score += 25;
        } else {
            checks.push("❌ Missing sibling selector");
        }
        
        // Check for attribute selector
        const has_attribute_selector = /\[[a-zA-Z-]+(=[^\]]+)?\][^{]*{/i.test(user_code);
        if (has_attribute_selector) {
            checks.push("✅ Has attribute selector");
            score += 25;
        } else {
            checks.push("❌ Missing attribute selector");
        }
        
        // Check for complex selector with property
        const has_complex_selector = /([a-zA-Z]+[>\s~+\[]|\[[a-zA-Z-]+)[^{]*{[^{]*[^;]+;/i.test(user_code);
        if (has_complex_selector) {
            checks.push("✅ Has complex selector with property");
            score += 25;
        } else {
            checks.push("❌ Missing complex selector with property");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more advanced selector features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Advanced Selectors", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Advanced Selectors");
