// python/basic/9/tests.js
// Test for File Input/Output
console.log("🧪 Testing: File Input/Output");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for file open
        const hasFileOpen = userCode.match(/\bwith\s+open\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasFileOpen) {
            checks.push("✅ Has file open with context manager");
            score += 25;
        } else {
            checks.push("❌ Missing file open with context manager");
        }
        
        // Check for file read
        const hasFileRead = userCode.match(/\b\w+\.read\s*\(\s*\)/);
        if (hasFileRead) {
            checks.push("✅ Has file read");
            score += 25;
        } else {
            checks.push("❌ Missing file read");
        }
        
        // Check for file write
        const hasFileWrite = userCode.match(/\b\w+\.write\s*\(\s*[^)]+\)/);
        if (hasFileWrite) {
            checks.push("✅ Has file write");
            score += 25;
        } else {
            checks.push("❌ Missing file write");
        }
        
        // Check for file mode
        const hasFileMode = userCode.match(/\bopen\s*\(\s*['"][^'"]+['"]\s*,\s*['"](r|w|a)[^'"]*['"]\s*\)/);
        if (hasFileMode) {
            checks.push("✅ Has file mode specified");
            score += 25;
        } else {
            checks.push("❌ Missing file mode specification");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more file I/O features`;
            
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
console.log("✅ Test ready for: File Input/Output");