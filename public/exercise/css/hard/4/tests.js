
// css/hard/4/tests.js
// Test for CSS Accessibility
console.log("🧪 Testing: CSS Accessibility");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for high contrast colors
        const has_contrast = /color\s*:\s*[^;]+;\s*background-color\s*:\s*[^;]+;/i.test(user_code);
        if (has_contrast) {
            checks.push("✅ Has high contrast colors");
            score += 25;
        } else {
            checks.push("❌ Missing high contrast colors");
        }
        
        // Check for focus styles
        const has_focus = /:focus\s*{[^}]*outline\s*:/i.test(user_code);
        if (has_focus) {
            checks.push("✅ Has focus styles");
            score += 25;
        } else {
            checks.push("❌ Missing focus styles");
        }
        
        // Check for font-size
        const has_font_size = /font-size\s*:\s*(1\.[2-9]rem|16px|[2-9][0-9]px)/i.test(user_code);
        if (has_font_size) {
            checks.push("✅ Has accessible font-size");
            score += 25;
        } else {
            checks.push("❌ Missing accessible font-size");
        }
        
        // Check for media query for reduced motion
        const has_reduced_motion = /@media\s+\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/i.test(user_code);
        if (has_reduced_motion) {
            checks.push("✅ Has reduced motion query");
            score += 25;
        } else {
            checks.push("❌ Missing reduced motion query");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more accessibility features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Accessibility", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Accessibility");
