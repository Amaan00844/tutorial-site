// css/basic/2/tests.js
// Test for CSS Box Model
console.log("🧪 Testing: CSS Box Model");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for margin property
        const has_margin = /margin\s*:\s*[^;]+;/i.test(user_code);
        if (has_margin) {
            checks.push("✅ Has margin property");
            score += 25;
        } else {
            checks.push("❌ Missing margin property");
        }
        
        // Check for padding property
        const has_padding = /padding\s*:\s*[^;]+;/i.test(user_code);
        if (has_padding) {
            checks.push("✅ Has padding property");
            score += 25;
        } else {
            checks.push("❌ Missing padding property");
        }
        
        // Check for border property
        const has_border = /border\s*:\s*[^;]+;/i.test(user_code);
        if (has_border) {
            checks.push("✅ Has border property");
            score += 25;
        } else {
            checks.push("❌ Missing border property");
        }
        
        // Check for width or height
        const has_size = /(width|height)\s*:\s*[^;]+;/i.test(user_code);
        if (has_size) {
            checks.push("✅ Has width or height");
            score += 25;
        } else {
            checks.push("❌ Missing width or height");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more box model features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CSS Box Model", language: "css" }
    };
}

console.log("✅ Test ready for: CSS Box Model");