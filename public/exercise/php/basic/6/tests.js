// php/basic/6/tests.js
// Test for String Manipulation
console.log("🧪 Testing: String Manipulation");

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
        const hasString = userCode.match(/\$\w+\s*=\s*['"][^'"]+['"]\s*;/);
        if (hasString) {
            checks.push("✅ Has string variable");
            score += 25;
        } else {
            checks.push("❌ Missing string variable");
        }
        
        // Check for string concatenation
        const hasConcat = userCode.match(/\$\w+\s*=\s*\$\w+\s*\.\s*['"][^'"]+['"]\s*;/);
        if (hasConcat) {
            checks.push("✅ Has string concatenation");
            score += 25;
        } else {
            checks.push("❌ Missing string concatenation");
        }
        
        // Check for string function (e.g., strlen)
        const hasStringFunction = userCode.match(/\b(strlen|strtoupper|strtolower|substr)\s*\(\s*[^)]+\)\s*;/);
        if (hasStringFunction) {
            checks.push("✅ Has string function");
            score += 25;
        } else {
            checks.push("❌ Missing string function");
        }
        
        // Check for string interpolation
        const hasInterpolation = userCode.match(/echo\s+"[^"]*\$\w+[^"]*"\s*;/);
        if (hasInterpolation) {
            checks.push("✅ Has string interpolation");
            score += 25;
        } else {
            checks.push("❌ Missing string interpolation");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more string manipulation features`;
            
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
console.log("✅ Test ready for: String Manipulation");
