// css/basic/5/tests.js
// Test for CSS Positioning
console.log("🧪 Testing: CSS Positioning");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for position property
        const has_position = /position\s*:\s*(absolute|relative|fixed|sticky)/i.test(user_code);
        if (has_position) {
            checks.push("✅ Has position property");
            score += 25;
        } else {
            checks.push("❌ Missing position property");
        }
        
        // Check for top, right, bottom, or left
        const has_offset = /(top|right|bottom|left)\s*:\s*[^;]+;/i.test(user_code);
        if (has_offset) {
            checks.push("✅ Has offset property");
            score += 25;
        } else {
            checks.push("❌ Missing offset property");
        }
        
        // Check for z-index
        const has_z_index = /z-index\s*:\s*[^;]+;/i.test(user_code);
        if (has_z_index) {
            checks.push("✅ Has z-index");
            score += 25;
        } else {
            checks.push("❌ Missing z-index");
        }
        
        // Check for selector with positioning
        const has_selector_position = /[#.a-zA-Z][^{]*{\s*position\s*:/i.test(user_code);
        if (has_selector_position) {
            checks.push("✅ Has selector with positioning");
            score += 25;
        } else {
            checks.push("❌ Missing selector with positioning");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more positioning features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Positioning", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Positioning");