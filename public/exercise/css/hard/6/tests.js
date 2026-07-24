
// css/hard/6/tests.js
// Test for CSS Blend Modes
console.log("🧪 Testing: CSS Blend Modes");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for mix-blend-mode
        const has_mix_blend = /mix-blend-mode\s*:\s*[^;]+;/i.test(user_code);
        if (has_mix_blend) {
            checks.push("✅ Has mix-blend-mode");
            score += 25;
        } else {
            checks.push("❌ Missing mix-blend-mode");
        }
        
        // Check for background-blend-mode
        const has_background_blend = /background-blend-mode\s*:\s*[^;]+;/i.test(user_code);
        if (has_background_blend) {
            checks.push("✅ Has background-blend-mode");
            score += 25;
        } else {
            checks.push("❌ Missing background-blend-mode");
        }
        
        // Check for valid blend mode
        const has_valid_blend = /(mix-blend-mode|background-blend-mode)\s*:\s*(normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity)\s*;/i.test(user_code);
        if (has_valid_blend) {
            checks.push("✅ Has valid blend mode");
            score += 25;
        } else {
            checks.push("❌ Missing valid blend mode");
        }
        
        // Check for blend mode with selector
        const has_blend_selector = /[#.a-zA-Z][^{]*{\s*(mix-blend-mode|background-blend-mode)\s*:/i.test(user_code);
        if (has_blend_selector) {
            checks.push("✅ Has blend mode with selector");
            score += 25;
        } else {
            checks.push("❌ Missing blend mode with selector");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more blend mode features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Blend Modes", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Blend Modes");