
// css/intermediate/5/tests.js
// Test for CSS Transforms
console.log("🧪 Testing: CSS Transforms");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for transform property
        const has_transform = /transform\s*:\s*[^;]+;/i.test(user_code);
        if (has_transform) {
            checks.push("✅ Has transform property");
            score += 25;
        } else {
            checks.push("❌ Missing transform property");
        }
        
        // Check for rotate transform
        const has_rotate = /transform\s*:\s*.*rotate\s*\([^)]+\)/i.test(user_code);
        if (has_rotate) {
            checks.push("✅ Has rotate transform");
            score += 25;
        } else {
            checks.push("❌ Missing rotate transform");
        }
        
        // Check for scale transform
        const has_scale = /transform\s*:\s*.*scale\s*\([^)]+\)/i.test(user_code);
        if (has_scale) {
            checks.push("✅ Has scale transform");
            score += 25;
        } else {
            checks.push("❌ Missing scale transform");
        }
        
        // Check for translate transform
        const has_translate = /transform\s*:\s*.*translate\s*\([^)]+\)/i.test(user_code);
        if (has_translate) {
            checks.push("✅ Has translate transform");
            score += 25;
        } else {
            checks.push("❌ Missing translate transform");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more transform features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Transforms", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Transforms");