// css/basic/1/tests.js
// Test for Basic CSS Selectors
console.log("🧪 Testing: Basic CSS Selectors");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for element selector
        const has_element_selector = /^[a-zA-Z]+[^{]*{/i.test(user_code);
        if (has_element_selector) {
            checks.push("✅ Has element selector");
            score += 25;
        } else {
            checks.push("❌ Missing element selector");
        }
        
        // Check for class selector
        const has_class_selector = /\.[a-zA-Z][^{]*{/i.test(user_code);
        if (has_class_selector) {
            checks.push("✅ Has class selector");
            score += 25;
        } else {
            checks.push("❌ Missing class selector");
        }
        
        // Check for ID selector
        const has_id_selector = /#[a-zA-Z][^{]*{/i.test(user_code);
        if (has_id_selector) {
            checks.push("✅ Has ID selector");
            score += 25;
        } else {
            checks.push("❌ Missing ID selector");
        }
        
        // Check for CSS property
        const has_property = /[a-zA-Z-]+:\s*[^;]+;/i.test(user_code);
        if (has_property) {
            checks.push("✅ Has CSS property");
            score += 25;
        } else {
            checks.push("❌ Missing CSS property");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more selector features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Basic CSS Selectors", language: "css" }
    };
}

console.log("✅ Test ready for: Basic CSS Selectors");