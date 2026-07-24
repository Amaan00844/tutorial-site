// java/basic/2/tests.js
// Test for Data Types and Variables
console.log("🧪 Testing: Data Types and Variables");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for primitive data type
        const hasPrimitive = userCode.match(/\b(int|double|float|boolean|char)\s+\w+\s*(=\s*[^;]+)?;/);
        if (hasPrimitive) {
            checks.push("✅ Has primitive data type");
            score += 25;
        } else {
            checks.push("❌ Missing primitive data type");
        }
        
        // Check for reference data type
        const hasReference = userCode.match(/\b(String|Object)\s+\w+\s*(=\s*[^;]+)?;/);
        if (hasReference) {
            checks.push("✅ Has reference data type");
            score += 25;
        } else {
            checks.push("❌ Missing reference data type");
        }
        
        // Check for variable initialization
        const hasInitialization = userCode.match(/\b(int|double|float|boolean|char|String)\s+\w+\s*=\s*[^;]+;/);
        if (hasInitialization) {
            checks.push("✅ Has variable initialization");
            score += 25;
        } else {
            checks.push("❌ Missing variable initialization");
        }
        
        // Check for multiple data types
        const hasMultipleTypes = userCode.match(/\b(int|double|float|boolean|char|String)\s+\w+\s*(=\s*[^;]+)?;/g)?.length >= 2;
        if (hasMultipleTypes) {
            checks.push("✅ Has multiple data types");
            score += 25;
        } else {
            checks.push("❌ Missing multiple data types");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more data type features`;
            
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

console.log("✅ Test ready for: Data Types and Variables");