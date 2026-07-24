// css/basic/4/tests.js
// Test for CSS Text Properties
console.log("🧪 Testing: CSS Text Properties");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for font-size
        const has_font_size = /font-size\s*:\s*[^;]+;/i.test(user_code);
        if (has_font_size) {
            checks.push("✅ Has font-size");
            score += 25;
        } else {
            checks.push("❌ Missing font-size");
        }
        
        // Check for font-family
        const has_font_family = /font-family\s*:\s*[^;]+;/i.test(user_code);
        if (has_font_family) {
            checks.push("✅ Has font-family");
            score += 25;
        } else {
            checks.push("❌ Missing font-family");
        }
        
        // Check for text-align
        const has_text_align = /text-align\s*:\s*[^;]+;/i.test(user_code);
        if (has_text_align) {
            checks.push("✅ Has text-align");
            score += 25;
        } else {
            checks.push("❌ Missing text-align");
        }
        
        // Check for text-decoration
        const has_text_decoration = /text-decoration\s*:\s*[^;]+;/i.test(user_code);
        if (has_text_decoration) {
            checks.push("✅ Has text-decoration");
            score += 25;
        } else {
            checks.push("❌ Missing text-decoration");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more text property features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Text Properties", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Text Properties");
