// python/hard/10/tests.js
// Test for Advanced Data Science
console.log("🧪 Testing: Advanced Data Science");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for NumPy import
        const hasNumpyImport = userCode.match(/\bimport\s+numpy\s+as\s+np\b/);
        if (hasNumpyImport) {
            checks.push("✅ Has NumPy import");
            score += 25;
        } else {
            checks.push("❌ Missing NumPy import");
        }
        
        // Check for Pandas import
        const hasPandasImport = userCode.match(/\bimport\s+pandas\s+as\s+pd\b/);
        if (hasPandasImport) {
            checks.push("✅ Has Pandas import");
            score += 25;
        } else {
            checks.push("❌ Missing Pandas import");
        }
        
        // Check for Matplotlib import
        const hasMatplotlibImport = userCode.match(/\bimport\s+matplotlib\.pyplot\s+as\s+plt\b/);
        if (hasMatplotlibImport) {
            checks.push("✅ Has Matplotlib import");
            score += 25;
        } else {
            checks.push("❌ Missing Matplotlib import");
        }
        
        // Check for data visualization
        const hasVisualization = userCode.match(/\bplt\.(plot|scatter|hist)\s*\(\s*[^)]+\)/);
        if (hasVisualization) {
            checks.push("✅ Has data visualization");
            score += 25;
        } else {
            checks.push("❌ Missing data visualization");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more data science features`;
            
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
console.log("✅ Test ready for: Advanced Data Science");