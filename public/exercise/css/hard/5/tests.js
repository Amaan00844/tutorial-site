
// css/hard/5/tests.js
// Test for CSS 3D Transforms
console.log("🧪 Testing: CSS 3D Transforms");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for transform 3D
        const has_transform_3d = /transform\s*:\s*.*(rotateX|rotateY|rotateZ|translate3d|scale3d)\s*\([^)]+\)/i.test(user_code);
        if (has_transform_3d) {
            checks.push("✅ Has 3D transform");
            score += 25;
        } else {
            checks.push("❌ Missing 3D transform");
        }
        
        // Check for perspective
        const has_perspective = /perspective\s*:\s*[^;]+;/i.test(user_code);
        if (has_perspective) {
            checks.push("✅ Has perspective");
            score += 25;
        } else {
            checks.push("❌ Missing perspective");
        }
        
        // Check for transform-style
        const has_transform_style = /transform-style\s*:\s*preserve-3d\s*;/i.test(user_code);
        if (has_transform_style) {
            checks.push("✅ Has transform-style: preserve-3d");
            score += 25;
        } else {
            checks.push("❌ Missing transform-style: preserve-3d");
        }
        
        // Check for 3D transform with selector
        const has_3d_selector = /[#.a-zA-Z][^{]*{\s*transform\s*:\s*.*(rotateX|rotateY|rotateZ|translate3d|scale3d)/i.test(user_code);
        if (has_3d_selector) {
            checks.push("✅ Has 3D transform with selector");
            score += 25;
        } else {
            checks.push("❌ Missing 3D transform with selector");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more 3D transform features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS 3D Transforms", language: "css" }
    };
}

console.log("✅ Test ready for: CSS 3D Transforms");
