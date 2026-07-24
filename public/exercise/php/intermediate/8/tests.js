// php/intermediate/8/tests.js
// Test for File Upload Security
console.log("🧪 Testing: File Upload Security");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for $_FILES access
        const hasFilesAccess = userCode.match(/\$_FILES\s*\[\s*['"][^'"]+['"]\s*\]\s*\[\s*['"][^'"]+['"]\s*\]/);
        if (hasFilesAccess) {
            checks.push("✅ Has $_FILES access");
            score += 25;
        } else {
            checks.push("❌ Missing $_FILES access");
        }
        
        // Check for file type validation
        const hasFileTypeValidation = userCode.match(/\b(in_array|preg_match)\s*\(\s*\$_FILES\s*\[\s*['"][^'"]+['"]\s*\]\s*\[\s*['"]type['"]\s*\]\s*,/);
        if (hasFileTypeValidation) {
            checks.push("✅ Has file type validation");
            score += 25;
        } else {
            checks.push("❌ Missing file type validation");
        }
        
        // Check for file size validation
        const hasFileSizeValidation = userCode.match(/\bif\s*\(\s*\$_FILES\s*\[\s*['"][^'"]+['"]\s*\]\s*\[\s*['"]size['"]\s*\]\s*[<>]=?\s*\d+\s*\)\s*{/);
        if (hasFileSizeValidation) {
            checks.push("✅ Has file size validation");
            score += 25;
        } else {
            checks.push("❌ Missing file size validation");
        }
        
        // Check for move_uploaded_file
        const hasMoveUploadedFile = userCode.match(/\bmove_uploaded_file\s*\(\s*[^)]+\)\s*;/);
        if (hasMoveUploadedFile) {
            checks.push("✅ Has move_uploaded_file");
            score += 25;
        } else {
            checks.push("❌ Missing move_uploaded_file");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more file upload security features`;
            
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
console.log("✅ Test ready for: File Upload Security");