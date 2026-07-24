// python/basic/1/tests.js
// Test for Variables and Data Types
console.log("🧪 Testing: Variables and Data Types");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for string variable
        const hasString = userCode.match(/\b\w+\s*=\s*['"][^'"]+['"]/);
        if (hasString) {
            checks.push("✅ Has string variable");
            score += 25;
        } else {
            checks.push("❌ Missing string variable");
        }
        
        // Check for integer variable
        const hasInteger = userCode.match(/\b\w+\s*=\s*\d+/);
        if (hasInteger) {
            checks.push("✅ Has integer variable");
            score += 25;
        } else {
            checks.push("❌ Missing integer variable");
        }
        
        // Check for float variable
        const hasFloat = userCode.match(/\b\w+\s*=\s*\d+\.\d+/);
        if (hasFloat) {
            checks.push("✅ Has float variable");
            score += 25;
        } else {
            checks.push("❌ Missing float variable");
        }
        
        // Check for boolean variable
        const hasBoolean = userCode.match(/\b\w+\s*=\s*(True|False)/);
        if (hasBoolean) {
            checks.push("✅ Has boolean variable");
            score += 25;
        } else {
            checks.push("❌ Missing boolean variable");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more variable types`;
            
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
console.log("✅ Test ready for: Variables and Data Types");