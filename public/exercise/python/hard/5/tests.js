// python/hard/5/tests.js
// Test for Machine Learning Basics
console.log("🧪 Testing: Machine Learning Basics");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for scikit-learn import
        const hasSklearnImport = userCode.match(/\bfrom\s+sklearn\s+import\s+\w+/);
        if (hasSklearnImport) {
            checks.push("✅ Has scikit-learn import");
            score += 25;
        } else {
            checks.push("❌ Missing scikit-learn import");
        }
        
        // Check for model creation
        const hasModel = userCode.match(/\b\w+\s*=\s*\w+\(\s*[^)]*\)/);
        if (hasModel) {
            checks.push("✅ Has model creation");
            score += 25;
        } else {
            checks.push("❌ Missing model creation");
        }
        
        // Check for fit method
        const hasFit = userCode.match(/\b\w+\.fit\s*\(\s*[^)]+\)/);
        if (hasFit) {
            checks.push("✅ Has fit method");
            score += 25;
        } else {
            checks.push("❌ Missing fit method");
        }
        
        // Check for predict method
        const hasPredict = userCode.match(/\b\w+\.predict\s*\(\s*[^)]+\)/);
        if (hasPredict) {
            checks.push("✅ Has predict method");
            score += 25;
        } else {
            checks.push("❌ Missing predict method");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more machine learning features`;
            
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
console.log("✅ Test ready for: Machine Learning Basics");