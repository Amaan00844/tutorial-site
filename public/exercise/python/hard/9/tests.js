// python/hard/9/tests.js
// Test for Package Development
console.log("🧪 Testing: Package Development");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for setup import
        const hasSetupImport = userCode.match(/\bfrom\s+setuptools\s+import\s+setup\b/);
        if (hasSetupImport) {
            checks.push("✅ Has setuptools import");
            score += 25;
        } else {
            checks.push("❌ Missing setuptools import");
        }
        
        // Check for setup function
        const hasSetupFunction = userCode.match(/\bsetup\s*\(\s*[^)]+\)/);
        if (hasSetupFunction) {
            checks.push("✅ Has setup function");
            score += 25;
        } else {
            checks.push("❌ Missing setup function");
        }
        
        // Check for package metadata
        const hasMetadata = userCode.match(/\bsetup\s*\(\s*.*name\s*=\s*['"][^'"]+['"]/s);
        if (hasMetadata) {
            checks.push("✅ Has package metadata");
            score += 25;
        } else {
            checks.push("❌ Missing package metadata");
        }
        
        // Check for package module
        const hasModule = userCode.match(/\b\w+\s*=\s*[^=]+/);
        if (hasModule) {
            checks.push("✅ Has module definition");
            score += 25;
        } else {
            checks.push("❌ Missing module definition");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more package development features`;
            
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
console.log("✅ Test ready for: Package Development");