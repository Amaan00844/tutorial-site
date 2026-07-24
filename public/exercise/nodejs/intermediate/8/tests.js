
// nodejs/intermediate/8/tests.js
// Test for File Upload Handling
console.log("🧪 Testing: File Upload Handling");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for multer import
        const hasMulterImport = userCode.match(/const\s+multer\s*=\s*require\s*\(\s*['"]multer['"]\s*\)/);
        if (hasMulterImport) {
            checks.push("✅ Has multer import");
            score += 25;
        } else {
            checks.push("❌ Missing multer import");
        }
        
        // Check for multer configuration
        const hasMulterConfig = userCode.match(/const\s+upload\s*=\s*multer\s*\(\s*{/);
        if (hasMulterConfig) {
            checks.push("✅ Has multer configuration");
            score += 25;
        } else {
            checks.push("❌ Missing multer configuration");
        }
        
        // Check for file upload route
        const hasUploadRoute = userCode.match(/app\.post\s*\(\s*['"][^'"]+['"]\s*,\s*upload\.\w+\s*\(/);
        if (hasUploadRoute) {
            checks.push("✅ Has file upload route");
            score += 25;
        } else {
            checks.push("❌ Missing file upload route");
        }
        
        // Check for file handling
        const hasFileHandling = userCode.match(/req\.file\s*\./);
        if (hasFileHandling) {
            checks.push("✅ Has file handling");
            score += 25;
        } else {
            checks.push("❌ Missing file handling");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more file upload features`;
            
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
      topic: "File Upload Handling",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: File Upload Handling");