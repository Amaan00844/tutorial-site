// java/intermediate/10/tests.js
// Test for Networking and Sockets
console.log("🧪 Testing: Networking and Sockets");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for Socket
        const hasSocket = userCode.match(/\bSocket\s+\w+\s*(=\s*new\s+Socket\s*\(\s*[^)]+\))?\s*;/);
        if (hasSocket) {
            checks.push("✅ Has Socket");
            score += 25;
        } else {
            checks.push("❌ Missing Socket");
        }
        
        // Check for ServerSocket
        const hasServerSocket = userCode.match(/\bServerSocket\s+\w+\s*(=\s*new\s+ServerSocket\s*\(\s*[^)]+\))?\s*;/);
        if (hasServerSocket) {
            checks.push("✅ Has ServerSocket");
            score += 25;
        } else {
            checks.push("❌ Missing ServerSocket");
        }
        
        // Check for input/output stream
        const hasIOStream = userCode.match(/\b\w+\.(getInputStream|getOutputStream)\s*\(\s*\)\s*;/);
        if (hasIOStream) {
            checks.push("✅ Has input/output stream");
            score += 25;
        } else {
            checks.push("❌ Missing input/output stream");
        }
        
        // Check for import java.net
        const hasNetImport = userCode.match(/\bimport\s+java\.net\.\w+\s*;/);
        if (hasNetImport) {
            checks.push("✅ Has java.net import");
            score += 25;
        } else {
            checks.push("❌ Missing java.net import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more networking features`;
            
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

console.log("✅ Test ready for: Networking and Sockets");