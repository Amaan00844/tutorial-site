
// python/intermediate/9/tests.js
// Test for Data Analysis with Pandas
console.log("🧪 Testing: Data Analysis with Pandas");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for pandas import
        const hasPandasImport = userCode.match(/\bimport\s+pandas\s+as\s+pd\b/);
        if (hasPandasImport) {
            checks.push("✅ Has pandas import");
            score += 25;
        } else {
            checks.push("❌ Missing pandas import");
        }
        
        // Check for DataFrame creation
        const hasDataFrame = userCode.match(/\bpd\.DataFrame\s*\(\s*[^)]+\)/);
        if (hasDataFrame) {
            checks.push("✅ Has DataFrame creation");
            score += 25;
        } else {
            checks.push("❌ Missing DataFrame creation");
        }
        
        // Check for DataFrame operation
        const hasDataFrameOp = userCode.match(/\b\w+\.(groupby|mean|sum|count)\s*\(\s*[^)]*\)/);
        if (hasDataFrameOp) {
            checks.push("✅ Has DataFrame operation");
            score += 25;
        } else {
            checks.push("❌ Missing DataFrame operation");
        }
        
        // Check for data filtering
        const hasDataFilter = userCode.match(/\b\w+\[\s*\w+\s*(==|!=|>|>=|<|<=)\s*[^]]+\]/);
        if (hasDataFilter) {
            checks.push("✅ Has data filtering");
            score += 25;
        } else {
            checks.push("❌ Missing data filtering");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more pandas data analysis features`;
            
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
console.log("✅ Test ready for: Data Analysis with Pandas");