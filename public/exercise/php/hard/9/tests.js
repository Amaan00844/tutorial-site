// php/hard/9/tests.js
// Test for Websockets in PHP
console.log("🧪 Testing: Websockets in PHP");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for WebSocket server
        const hasWebSocketServer = userCode.match(/\$\w+\s*=\s*new\s+WebSocketServer\s*\(\s*[^)]+\)\s*;/);
        if (hasWebSocketServer) {
            checks.push("✅ Has WebSocket server");
            score += 25;
        } else {
            checks.push("❌ Missing WebSocket server");
        }
        
        // Check for WebSocket connection
        const hasWebSocketConnection = userCode.match(/\$\w+\s*->\s*on\s*\(\s*['"](open|message|close)['"]\s*,/);
        if (hasWebSocketConnection) {
            checks.push("✅ Has WebSocket connection");
            score += 25;
        } else {
            checks.push("❌ Missing WebSocket connection");
        }
        
        // Check for WebSocket send
        const hasWebSocketSend = userCode.match(/\$\w+\s*->\s*send\s*\(\s*[^)]+\)\s*;/);
        if (hasWebSocketSend) {
            checks.push("✅ Has WebSocket send");
            score += 25;
        } else {
            checks.push("❌ Missing WebSocket send");
        }
        
        // Check for WebSocket library require
        const hasWebSocketRequire = userCode.match(/\brequire\s+['"].*Ratchet.*['"]\s*;/);
        if (hasWebSocketRequire) {
            checks.push("✅ Has WebSocket library require");
            score += 25;
        } else {
            checks.push("❌ Missing WebSocket library require");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more WebSocket features`;
            
    } catch (e) {
        result.message = `Error: ${e.message}`;
    }
    
    return result;
}
// Export for Monaco Editor
if (typeof window !== "undefined") {
  window.exerciseTest = {
    runTests: runSimpleTest,
    testConfig: {
      topic: "Basic Arithmetic Operations",
      language: "javascript",
    },
  };
}
console.log("✅ Test ready for: Websockets in PHP");