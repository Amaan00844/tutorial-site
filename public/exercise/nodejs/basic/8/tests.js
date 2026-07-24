// nodejs/basic/8/tests.js
// Test for Path and URL Modules
console.log("🧪 Testing: Path and URL Modules");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for path module import
        const hasPathImport = userCode.match(/const\s+path\s*=\s*require\s*\(\s*['"]path['"]\s*\)/);
        if (hasPathImport) {
            checks.push("✅ Has path module import");
            score += 25;
        } else {
            checks.push("❌ Missing path module import");
        }
        
        // Check for path.join
        const hasPathJoin = userCode.match(/path\.join\s*\(\s*['"][^'"]+['"]/);
        if (hasPathJoin) {
            checks.push("✅ Has path.join");
            score += 25;
        } else {
            checks.push("❌ Missing path.join");
        }
        
        // Check for URL module import
        const hasUrlImport = userCode.match(/const\s+URL\s*=\s*require\s*\(\s*['"]url['"]\s*\)/);
        if (hasUrlImport) {
            checks.push("✅ Has URL module import");
            score += 25;
        } else {
            checks.push("❌ Missing URL module import");
        }
        
        // Check for URL parsing
        const hasUrlParse = userCode.match(/new\s+URL\s*\(\s*['"][^'"]+['"]/);
        if (hasUrlParse) {
            checks.push("✅ Has URL parsing");
            score += 25;
        } else {
            checks.push("❌ Missing URL parsing");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more path and URL module features`;
            
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
      topic: "Path and URL Modules",
      language: "javascript",
    },
  };
}

console.log("✅ Test ready for: Path and URL Modules");