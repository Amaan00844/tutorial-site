
// express/basic/4/tests.js
// Test for Static Files
console.log("🧪 Testing: Static Files");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express.static
        const has_static = /\w+\s*\.\s*use\s*\(\s*express\s*\.\s*static\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_static) {
            checks.push("✅ Has express.static");
            score += 25;
        } else {
            checks.push("❌ Missing express.static");
        }
        
        // Check for app.use
        const has_app_use = /\w+\s*\.\s*use\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_app_use) {
            checks.push("✅ Has app.use");
            score += 25;
        } else {
            checks.push("❌ Missing app.use");
        }
        
        // Check for path module
        const has_path = /const\s+\w+\s*=\s*require\s*\(\s*['"]path['"]\s*\)/i.test(user_code);
        if (has_path) {
            checks.push("✅ Has path module");
            score += 25;
        } else {
            checks.push("❌ Missing path module");
        }
        
        // Check for path.join
        const has_path_join = /path\s*\.\s*join\s*\(\s*__dirname/i.test(user_code);
        if (has_path_join) {
            checks.push("✅ Has path.join");
            score += 25;
        } else {
            checks.push("❌ Missing path.join");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more static file features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Static Files", language: "express" }
    };
}

console.log("✅ Test ready for: Static Files");