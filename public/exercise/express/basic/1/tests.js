// express/basic/1/tests.js
// Test for Express App Setup
console.log("🧪 Testing: Express App Setup");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express import
        const has_express_import = /const\s+\w+\s*=\s*require\s*\(\s*['"]express['"]\s*\)/i.test(user_code);
        if (has_express_import) {
            checks.push("✅ Has express import");
            score += 25;
        } else {
            checks.push("❌ Missing express import");
        }
        
        // Check for app creation
        const has_app_creation = /const\s+\w+\s*=\s*\w+\s*\(\s*\)/i.test(user_code);
        if (has_app_creation) {
            checks.push("✅ Has app creation");
            score += 25;
        } else {
            checks.push("❌ Missing app creation");
        }
        
        // Check for app.listen
        const has_listen = /\w+\s*\.\s*listen\s*\(\s*\d+/i.test(user_code);
        if (has_listen) {
            checks.push("✅ Has app.listen");
            score += 25;
        } else {
            checks.push("❌ Missing app.listen");
        }
        
        // Check for port variable
        const has_port = /const\s+\w+\s*=\s*\d+/i.test(user_code);
        if (has_port) {
            checks.push("✅ Has port variable");
            score += 25;
        } else {
            checks.push("❌ Missing port variable");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more app setup features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Express App Setup", language: "express" }
    };
}

console.log("✅ Test ready for: Express App Setup");
