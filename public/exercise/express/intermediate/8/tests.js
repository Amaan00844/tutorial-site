
// express/intermediate/8/tests.js
// Test for Session Management
console.log("🧪 Testing: Session Management");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for express-session import
        const has_session = /const\s+\w+\s*=\s*require\s*\(\s*['"]express-session['"]\s*\)/i.test(user_code);
        if (has_session) {
            checks.push("✅ Has express-session import");
            score += 25;
        } else {
            checks.push("❌ Missing express-session import");
        }
        
        // Check for session middleware
        const has_session_middleware = /\w+\s*\.\s*use\s*\(\s*\w+\s*\(\s*{/i.test(user_code);
        if (has_session_middleware) {
            checks.push("✅ Has session middleware");
            score += 25;
        } else {
            checks.push("❌ Missing session middleware");
        }
        
        // Check for session data
        const has_session_data = /\w+\s*\.\s*session\s*\.\s*\w+\s*=/i.test(user_code);
        if (has_session_data) {
            checks.push("✅ Has session data");
            score += 25;
        } else {
            checks.push("❌ Missing session data");
        }
        
        // Check for session access
        const has_session_access = /\w+\s*\.\s*session\s*\.\s*\w+/i.test(user_code);
        if (has_session_access) {
            checks.push("✅ Has session access");
            score += 25;
        } else {
            checks.push("❌ Missing session access");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more session management features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "Session Management", language: "express" }
    };
}

console.log("✅ Test ready for: Session Management");