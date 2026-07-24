
// express/intermediate/10/tests.js
// Test for CORS
console.log("🧪 Testing: CORS");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for cors import
        const has_cors = /const\s+\w+\s*=\s*require\s*\(\s*['"]cors['"]\s*\)/i.test(user_code);
        if (has_cors) {
            checks.push("✅ Has cors import");
            score += 25;
        } else {
            checks.push("❌ Missing cors import");
        }
        
        // Check for cors middleware
        const has_cors_middleware = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*\)/i.test(user_code);
        if (has_cors_middleware) {
            checks.push("✅ Has cors middleware");
            score += 25;
        } else {
            checks.push("❌ Missing cors middleware");
        }
        
        // Check for cors options
        const has_cors_options = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*{/i.test(user_code);
        if (has_cors_options) {
            checks.push("✅ Has cors options");
            score += 25;
        } else {
            checks.push("❌ Missing cors options");
        }
        
        // Check for specific cors header
        const has_cors_header = /origin\s*:\s*['"][^'"]+['"]/i.test(user_code);
        if (has_cors_header) {
            checks.push("✅ Has specific cors header");
            score += 25;
        } else {
            checks.push("❌ Missing specific cors header");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more CORS features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "CORS", language: "express" }
    };
}

console.log("✅ Test ready for: CORS");