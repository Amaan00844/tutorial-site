// nodejs/basic/7/tests.js
// Test for Streams and Buffers
console.log("🧪 Testing: Streams and Buffers");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for fs module import
        const hasFsImport = userCode.match(/const\s+fs\s*=\s*require\s*\(\s*['"]fs['"]\s*\)/);
        if (hasFsImport) {
            checks.push("✅ Has fs module import");
            score += 25;
        } else {
            checks.push("❌ Missing fs module import");
        }
        
        // Check for createReadStream
        const hasReadStream = userCode.match(/fs\.createReadStream\s*\(\s*['"][^'"]+['"]/);
        if (hasReadStream) {
            checks.push("✅ Has createReadStream");
            score += 25;
        } else {
            checks.push("❌ Missing createReadStream");
        }
        
        // Check for createWriteStream
        const hasWriteStream = userCode.match(/fs\.createWriteStream\s*\(\s*['"][^'"]+['"]/);
        if (hasWriteStream) {
            checks.push("✅ Has createWriteStream");
            score += 25;
        } else {
            checks.push("❌ Missing createWriteStream");
        }
        
        // Check for Buffer usage
        const hasBuffer = userCode.match(/Buffer\.from\s*\(\s*['"][^'"]+['"]/);
        if (hasBuffer) {
            checks.push("✅ Has Buffer usage");
            score += 25;
        } else {
            checks.push("❌ Missing Buffer usage");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more stream and buffer features`;
            
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
      topic: "Streams and Buffers",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Streams and Buffers");