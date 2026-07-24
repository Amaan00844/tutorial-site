
// express/basic/10/tests.js
// Test for Response Methods
console.log("🧪 Testing: Response Methods");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for res.send
        const has_send = /\w+\s*\.\s*send\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_send) {
            checks.push("✅ Has res.send");
            score += 25;
        } else {
            checks.push("❌ Missing res.send");
        }
        
        // Check for res.json
        const has_json = /\w+\s*\.\s*json\s*\(\s*{/i.test(user_code);
        if (has_json) {
            checks.push("✅ Has res.json");
            score += 25;
        } else {
            checks.push("❌ Missing res.json");
        }
        
        // Check for res.status
        const has_status = /\w+\s*\.\s*status\s*\(\s*\d+\s*\)/i.test(user_code);
        if (has_status) {
            checks.push("✅ Has res.status");
            score += 25;
        } else {
            checks.push("❌ Missing res.status");
        }
        
        // Check for res.redirect
        const has_redirect = /\w+\s*\.\s*redirect\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_redirect) {
            checks.push("✅ Has res.redirect");
            score += 25;
        } else {
            checks.push("❌ Missing res.redirect");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more response method features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Response Methods", language: "express" }
    };
}

console.log("✅ Test ready for: Response Methods");