
// express/intermediate/9/tests.js
// Test for Cookie Management
console.log("🧪 Testing: Cookie Management");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for cookie-parser import
        const has_cookie_parser = /const\s+\w+\s*=\s*require\s*\(\s*['"]cookie-parser['"]\s*\)/i.test(user_code);
        if (has_cookie_parser) {
            checks.push("✅ Has cookie-parser import");
            score += 25;
        } else {
            checks.push("❌ Missing cookie-parser import");
        }
        
        // Check for cookie-parser middleware
        const has_cookie_middleware = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*\)/i.test(user_code);
        if (has_cookie_middleware) {
            checks.push("✅ Has cookie-parser middleware");
            score += 25;
        } else {
            checks.push("❌ Missing cookie-parser middleware");
        }
        
        // Check for cookie setting
        const has_cookie_set = /\w+\s*\.\s*cookie\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_cookie_set) {
            checks.push("✅ Has cookie setting");
            score += 25;
        } else {
            checks.push("❌ Missing cookie setting");
        }
        
        // Check for cookie access
        const has_cookie_access = /\w+\s*\.\s*cookies\s*\.\s*\w+/i.test(user_code);
        if (has_cookie_access) {
            checks.push("✅ Has cookie access");
            score += 25;
        } else {
            checks.push("❌ Missing cookie access");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more cookie management features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Cookie Management", language: "express" }
    };
}

console.log("✅ Test ready for: Cookie Management");
