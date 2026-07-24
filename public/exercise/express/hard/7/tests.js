// express/hard/7/tests.js
// Test for WebSocket Integration
console.log("🧪 Testing: WebSocket Integration");

function run_simple_test(user_code) {
    const result = { passed: false, score: 0, message: "", details: [] };
    
    try {
        if (!user_code || user_code.trim().length < 5) {
            result.message = "Code is empty or too short";
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for ws import
        const has_ws = /const\s+\w+\s*=\s*require\s*\(\s*['"]ws['"]\s*\)/i.test(user_code);
        if (has_ws) {
            checks.push("✅ Has ws import");
            score += 25;
        } else {
            checks.push("❌ Missing ws import");
        }
        
        // Check for WebSocket server
        const has_ws_server = /new\s+\w+\s*\(\s*\w+\s*\)/i.test(user_code);
        if (has_ws_server) {
            checks.push("✅ Has WebSocket server");
            score += 25;
        } else {
            checks.push("❌ Missing WebSocket server");
        }
        
        // Check for connection event
        const has_connection = /\w+\s*\.\s*on\s*\(\s*['"]connection['"]/i.test(user_code);
        if (has_connection) {
            checks.push("✅ Has connection event");
            score += 25;
        } else {
            checks.push("❌ Missing connection event");
        }
        
        // Check for message handling
        const has_message = /\w+\s*\.\s*on\s*\(\s*['"]message['"]/i.test(user_code);
        if (has_message) {
            checks.push("✅ Has message handling");
            score += 25;
        } else {
            checks.push("❌ Missing message handling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more WebSocket integration features`;
            
    } catch (error) {
        result.message = `Error: ${error.message}`;
    }
    
    return result;
}

if (typeof window !== 'undefined') {
    window.exerciseTest = {
        runTests: run_simple_test,
        testConfig: { topic: "WebSocket Integration", language: "express" }
    };
}

console.log("✅ Test ready for: WebSocket Integration");