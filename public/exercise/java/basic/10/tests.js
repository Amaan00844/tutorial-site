
// java/basic/10/tests.js
// Test for File I/O Operations
console.log("🧪 Testing: File I/O Operations");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for File or Path
        const hasFile = userCode.match(/\b(File|Path)\s+\w+\s*(=\s*new\s+\1\s*\(\s*["'][^"']+["']\s*\))?\s*;/);
        if (hasFile) {
            checks.push("✅ Has File or Path declaration");
            score += 25;
        } else {
            checks.push("❌ Missing File or Path declaration");
        }
        
        // Check for file read
        const hasFileRead = userCode.match(/\b(Files\.readAllLines|FileReader|BufferedReader)\s*\(\s*[^)]+\)\s*;/);
        if (hasFileRead) {
            checks.push("✅ Has file read operation");
            score += 25;
        } else {
            checks.push("❌ Missing file read operation");
        }
        
        // Check for file write
        const hasFileWrite = userCode.match(/\b(Files\.write|FileWriter|BufferedWriter)\s*\(\s*[^)]+\)\s*;/);
        if (hasFileWrite) {
            checks.push("✅ Has file write operation");
            score += 25;
        } else {
            checks.push("❌ Missing file write operation");
        }
        
        // Check for import java.io or java.nio
        const hasIOImport = userCode.match(/\bimport\s+java\.(io|nio\.file)\.\w+\s*;/);
        if (hasIOImport) {
            checks.push("✅ Has java.io or java.nio import");
            score += 25;
        } else {
            checks.push("❌ Missing java.io or java.nio import");
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

console.log("✅ Test ready for: File I/O Operations");