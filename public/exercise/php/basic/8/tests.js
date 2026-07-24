// php/basic/8/tests.js
// Test for File Operations
console.log("🧪 Testing: File Operations");

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
        const hasFileOpen = userCode.match(/\b(fopen|file_get_contents)\s*\(\s*['"][^'"]+['"]\s*,/);
        if (hasFileOpen) {
            checks.push("✅ Has file open");
            score += 25;
        } else {
            checks.push("❌ Missing file open");
        }
        
        // Check for file write
        const hasFileWrite = userCode.match(/\b(fwrite|file_put_contents)\s*\(\s*[^)]+\)\s*;/);
        if (hasFileWrite) {
            checks.push("✅ Has file write");
            score += 25;
        } else {
            checks.push("❌ Missing file write");
        }
        
        // Check for file read
        const hasFileRead = userCode.match(/\b(fread|file_get_contents)\s*\(\s*[^)]+\)\s*;/);
        if (hasFileRead) {
            checks.push("✅ Has file read");
            score += 25;
        } else {
            checks.push("❌ Missing file read");
        }
        
        // Check for file close
        const hasFileClose = userCode.match(/\bfclose\s*\(\s*[^)]+\)\s*;/);
        if (hasFileClose) {
            checks.push("✅ Has file close");
            score += 25;
        } else {
            checks.push("❌ Missing file close");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more file operation features`;
            
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
console.log("✅ Test ready for: File Operations");