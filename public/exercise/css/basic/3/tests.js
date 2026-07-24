
// css/basic/3/tests.js
// Test for CSS Colors and Backgrounds
console.log("🧪 Testing: CSS Colors and Backgrounds");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for color property
        const has_color = /color\s*:\s*[^;]+;/i.test(user_code);
        if (has_color) {
            checks.push("✅ Has color property");
            score += 25;
        } else {
            checks.push("❌ Missing color property");
        }
        
        // Check for background-color
        const has_background_color = /background-color\s*:\s*[^;]+;/i.test(user_code);
        if (has_background_color) {
            checks.push("✅ Has background-color");
            score += 25;
        } else {
            checks.push("❌ Missing background-color");
        }
        
        // Check for background-image
        const has_background_image = /background-image\s*:\s*[^;]+;/i.test(user_code);
        if (has_background_image) {
            checks.push("✅ Has background-image");
            score += 25;
        } else {
            checks.push("❌ Missing background-image");
        }
        
        // Check for background shorthand
        const has_background = /background\s*:\s*[^;]+;/i.test(user_code);
        if (has_background) {
            checks.push("✅ Has background shorthand");
            score += 25;
        } else {
            checks.push("❌ Missing background shorthand");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more color and background features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Colors and Backgrounds", language: "css" }
    };
}
console.log("✅ Test ready for: CSS Colors and Backgrounds");