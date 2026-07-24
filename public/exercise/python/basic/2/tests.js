
// python/basic/2/tests.js
// Test for Basic Arithmetic Operations
console.log("🧪 Testing: Basic Arithmetic Operations");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for addition
        const hasAddition = userCode.match(/\b\w+\s*=\s*[^=]+\s*\+\s*[^=]+/);
        if (hasAddition) {
            checks.push("✅ Has addition operation");
            score += 25;
        } else {
            checks.push("❌ Missing addition operation");
        }
        
        // Check for subtraction
        const hasSubtraction = userCode.match(/\b\w+\s*=\s*[^=]+\s*-\s*[^=]+/);
        if (hasSubtraction) {
            checks.push("✅ Has subtraction operation");
            score += 25;
        } else {
            checks.push("❌ Missing subtraction operation");
        }
        
        // Check for multiplication
        const hasMultiplication = userCode.match(/\b\w+\s*=\s*[^=]+\s*\*\s*[^=]+/);
        if (hasMultiplication) {
            checks.push("✅ Has multiplication operation");
            score += 25;
        } else {
            checks.push("❌ Missing multiplication operation");
        }
        
        // Check for division
        const hasDivision = userCode.match(/\b\w+\s*=\s*[^=]+\s*\/\s*[^=]+/);
        if (hasDivision) {
            checks.push("✅ Has division operation");
            score += 25;
        } else {
            checks.push("❌ Missing division operation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more arithmetic operations`;
            
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
console.log("✅ Test ready for: Basic Arithmetic Operations");