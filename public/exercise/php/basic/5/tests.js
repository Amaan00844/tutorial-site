// php/basic/5/tests.js
// Test for Arrays and Associative Arrays
console.log("🧪 Testing: Arrays and Associative Arrays");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for indexed array
        const hasIndexedArray = userCode.match(/\$\w+\s*=\s*\[\s*[^;]*\]\s*;/);
        if (hasIndexedArray) {
            checks.push("✅ Has indexed array");
            score += 25;
        } else {
            checks.push("❌ Missing indexed array");
        }
        
        // Check for associative array
        const hasAssocArray = userCode.match(/\$\w+\s*=\s*\[\s*['"]\w+['"]\s*=>\s*[^,]+,/);
        if (hasAssocArray) {
            checks.push("✅ Has associative array");
            score += 25;
        } else {
            checks.push("❌ Missing associative array");
        }
        
        // Check for array access
        const hasArrayAccess = userCode.match(/\$\w+\[\s*[^]]+\]\s*;/);
        if (hasArrayAccess) {
            checks.push("✅ Has array access");
            score += 25;
        } else {
            checks.push("❌ Missing array access");
        }
        
        // Check for array function (e.g., array_push)
        const hasArrayFunction = userCode.match(/\b(array_push|array_merge|array_keys)\s*\(\s*[^)]+\)\s*;/);
        if (hasArrayFunction) {
            checks.push("✅ Has array function");
            score += 25;
        } else {
            checks.push("❌ Missing array function");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more array features`;
            
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
console.log("✅ Test ready for: Arrays and Associative Arrays");
