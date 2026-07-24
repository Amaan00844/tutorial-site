
// css/hard/7/tests.js
// Test for CSS Custom Fonts
console.log("🧪 Testing: CSS Custom Fonts");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for @font-face
        const has_font_face = /@font-face\s*{/i.test(user_code);
        if (has_font_face) {
            checks.push("✅ Has @font-face");
            score += 25;
        } else {
            checks.push("❌ Missing @font-face");
        }
        
        // Check for font-family in @font-face
        const has_font_family = /@font-face\s*{[^}]*font-family\s*:\s*[^;]+;/i.test(user_code);
        if (has_font_family) {
            checks.push("✅ Has font-family in @font-face");
            score += 25;
        } else {
            checks.push("❌ Missing font-family in @font-face");
        }
        
        // Check for src in @font-face
        const has_src = /@font-face\s*{[^}]*src\s*:\s*[^;]+;/i.test(user_code);
        if (has_src) {
            checks.push("✅ Has src in @font-face");
            score += 25;
        } else {
            checks.push("❌ Missing src in @font-face");
        }
        
        // Check for font-family usage
        const has_font_usage = /font-family\s*:\s*[^;]+;/i.test(user_code);
        if (has_font_usage) {
            checks.push("✅ Has font-family usage");
            score += 25;
        } else {
            checks.push("❌ Missing font-family usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more custom font features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Custom Fonts", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Custom Fonts");