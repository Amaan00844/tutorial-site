// express/hard/3/tests.js
// Test for Rate Limiting
console.log("🧪 Testing: Rate Limiting");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express-rate-limit import
        const has_rate_limit = /const\s+\w+\s*=\s*require\s*\(\s*['"]express-rate-limit['"]\s*\)/i.test(user_code);
        if (has_rate_limit) {
            checks.push("✅ Has express-rate-limit import");
            score += 25;
        } else {
            checks.push("❌ Missing express-rate-limit import");
        }
        
        // Check for rate limiter setup
        const has_limiter_setup = /const\s+\w+\s*=\s*\w+\s*\(\s*{/i.test(user_code);
        if (has_limiter_setup) {
            checks.push("✅ Has rate limiter setup");
            score += 25;
        } else {
            checks.push("❌ Missing rate limiter setup");
        }
        
        // Check for windowMs option
        const has_window_ms = /windowMs\s*:\s*\d+/i.test(user_code);
        if (has_window_ms) {
            checks.push("✅ Has windowMs option");
            score += 25;
        } else {
            checks.push("❌ Missing windowMs option");
        }
        
        // Check for max option
        const has_max = /max\s*:\s*\d+/i.test(user_code);
        if (has_max) {
            checks.push("✅ Has max option");
            score += 25;
        } else {
            checks.push("❌ Missing max option");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more rate limiting features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Rate Limiting", language: "express" }
    };
}

console.log("✅ Test ready for: Rate Limiting");