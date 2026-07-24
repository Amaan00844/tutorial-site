// nodejs/hard/4/tests.js
// Test for Real-time Applications
console.log("🧪 Testing: Real-time Applications");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for socket.io import
        const hasSocketIoImport = userCode.match(/const\s+\w+\s*=\s*require\s*\(\s*['"]socket\.io['"]\s*\)/);
        if (hasSocketIoImport) {
            checks.push("✅ Has socket.io import");
            score += 25;
        } else {
            checks.push("❌ Missing socket.io import");
        }
        
        // Check for io connection
        const hasIoConnection = userCode.match(/io\.on\s*\(\s*['"]connection['"]/);
        if (hasIoConnection) {
            checks.push("✅ Has io connection");
            score += 25;
        } else {
            checks.push("❌ Missing io connection");
        }
        
        // Check for socket emit
        const hasSocketEmit = userCode.match(/socket\.emit\s*\(\s*['"][^'"]+['"]/);
        if (hasSocketEmit) {
            checks.push("✅ Has socket emit");
            score += 25;
        } else {
            checks.push("❌ Missing socket emit");
        }
        
        // Check for socket on
        const hasSocketOn = userCode.match(/socket\.on\s*\(\s*['"][^'"]+['"]/);
        if (hasSocketOn) {
            checks.push("✅ Has socket on");
            score += 25;
        } else {
            checks.push("❌ Missing socket on");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more real-time application features`;
            
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
      topic: "Real-time Applications",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Real-time Applications");