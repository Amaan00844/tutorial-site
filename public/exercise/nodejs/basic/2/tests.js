
// nodejs/basic/2/tests.js
// Test for File System Operations
console.log("🧪 Testing: File System Operations");

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
        
        // Check for fs.readFile
        const hasReadFile = userCode.match(/fs\.readFile\s*\(\s*['"][^'"]+['"]/);
        if (hasReadFile) {
            checks.push("✅ Has fs.readFile");
            score += 25;
        } else {
            checks.push("❌ Missing fs.readFile");
        }
        
        // Check for fs.writeFile
        const hasWriteFile = userCode.match(/fs\.writeFile\s*\(\s*['"][^'"]+['"]/);
        if (hasWriteFile) {
            checks.push("✅ Has fs.writeFile");
            score += 25;
        } else {
            checks.push("❌ Missing fs.writeFile");
        }
        
        // Check for callback function
        const hasCallback = userCode.match(/function\s*\(\s*err\s*,[^)]*\)\s*{/);
        if (hasCallback) {
            checks.push("✅ Has callback function");
            score += 25;
        } else {
            checks.push("❌ Missing callback function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more file system operations`;
            
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
      topic: "File System Operations",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: File System Operations");
