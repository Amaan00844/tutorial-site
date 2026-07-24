
// express/basic/8/tests.js
// Test for URL-Encoded Body Parsing
console.log("🧪 Testing: URL-Encoded Body Parsing");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express.urlencoded middleware
        const has_urlencoded = /\w+\s*\.\s*use\s*\(\s*express\s*\.\s*urlencoded\s*\(\s*{/i.test(user_code);
        if (has_urlencoded) {
            checks.push("✅ Has express.urlencoded middleware");
            score += 25;
        } else {
            checks.push("❌ Missing express.urlencoded middleware");
        }
        
        // Check for extended option
        const has_extended = /express\s*\.\s*urlencoded\s*\(\s*{\s*extended\s*:\s*(true|false)\s*}/i.test(user_code);
        if (has_extended) {
            checks.push("✅ Has extended option");
            score += 25;
        } else {
            checks.push("❌ Missing extended option");
        }
        
        // Check for POST route
        const has_post_route = /\w+\s*\.\s*post\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_post_route) {
            checks.push("✅ Has POST route");
            score += 25;
        } else {
            checks.push("❌ Missing POST route");
        }
        
        // Check for req.body access
        const has_body_access = /\w+\s*\.\s*body\s*\.\s*\w+/i.test(user_code);
        if (has_body_access) {
            checks.push("✅ Has req.body access");
            score += 25;
        } else {
            checks.push("❌ Missing req.body access");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more URL-encoded body parsing features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "URL-Encoded Body Parsing", language: "express" }
    };
}

console.log("✅ Test ready for: URL-Encoded Body Parsing");