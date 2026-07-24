
// express/intermediate/3/tests.js
// Test for Router
console.log("🧪 Testing: Router");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express.Router
        const has_router = /const\s+\w+\s*=\s*express\s*\.\s*Router\s*\(\s*\)/i.test(user_code);
        if (has_router) {
            checks.push("✅ Has express.Router");
            score += 25;
        } else {
            checks.push("❌ Missing express.Router");
        }
        
        // Check for router route
        const has_router_route = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]/i.test(user_code);
        if (has_router_route) {
            checks.push("✅ Has router route");
            score += 25;
        } else {
            checks.push("❌ Missing router route");
        }
        
        // Check for app.use with router
        const has_app_use_router = /\w+\s*\.\s*use\s*\(\s*['"][^'"]+['"]\s*,\s*\w+\s*\)/i.test(user_code);
        if (has_app_use_router) {
            checks.push("✅ Has app.use with router");
            score += 25;
        } else {
            checks.push("❌ Missing app.use with router");
        }
        
        // Check for router response
        const has_router_response = /\w+\s*\.\s*(get|post)\s*\(\s*['"][^'"]+['"]\s*,\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{[^}]*\w+\s*\.\s*(send|json)\s*\(/i.test(user_code);
        if (has_router_response) {
            checks.push("✅ Has router response");
            score += 25;
        } else {
            checks.push("❌ Missing router response");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more router features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Router", language: "express" }
    };
}

console.log("✅ Test ready for: Router");