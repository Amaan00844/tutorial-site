
// nodejs/basic/3/tests.js
// Test for HTTP Server Creation
console.log("🧪 Testing: HTTP Server Creation");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for http module import
        const hasHttpImport = userCode.match(/const\s+http\s*=\s*require\s*\(\s*['"]http['"]\s*\)/);
        if (hasHttpImport) {
            checks.push("✅ Has http module import");
            score += 25;
        } else {
            checks.push("❌ Missing http module import");
        }
        
        // Check for http.createServer
        const hasCreateServer = userCode.match(/http\.createServer\s*\(\s*function\s*\(\s*req\s*,\s*res\s*\)\s*{/);
        if (hasCreateServer) {
            checks.push("✅ Has http.createServer");
            score += 25;
        } else {
            checks.push("❌ Missing http.createServer");
        }
        
        // Check for res.write
        const hasResponseWrite = userCode.match(/res\.write\s*\(\s*['"][^'"]+['"]/);
        if (hasResponseWrite) {
            checks.push("✅ Has res.write");
            score += 25;
        } else {
            checks.push("❌ Missing res.write");
        }
        
        // Check for server.listen
        const hasServerListen = userCode.match(/\.listen\s*\(\s*\d+\s*[,)]/);
        if (hasServerListen) {
            checks.push("✅ Has server.listen");
            score += 25;
        } else {
            checks.push("❌ Missing server.listen");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more HTTP server features`;
            
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
      topic: "HTTP Server Creation",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: HTTP Server Creation");
