// php/basic/2/tests.js
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
        
        // Check for integer variable
        const hasInt = userCode.match(/\$\w+\s*=\s*\d+\s*;/);
        if (hasInt) {
            checks.push("✅ Has integer variable");
            score += 25;
        } else {
            checks.push("❌ Missing integer variable");
        }
        
        // Check for string variable
        const hasString = userCode.match(/\$\w+\s*=\s*['"][^'"]+['"]\s*;/);
        if (hasString) {
            checks.push("✅ Has string variable");
            score += 25;
        } else {
            checks.push("❌ Missing string variable");
        }
        
        // Check for array variable
        const hasArray = userCode.match(/\$\w+\s*=\s*\[\s*[^;]*\]\s*;/);
        if (hasArray) {
            checks.push("✅ Has array variable");
            score += 25;
        } else {
            checks.push("❌ Missing array variable");
        }
        
        // Check for variable type check
        const hasTypeCheck = userCode.match(/\b(is_int|is_string|is_array)\s*\(\s*\$\w+\s*\)\s*;/);
        if (hasTypeCheck) {
            checks.push("✅ Has variable type check");
            score += 25;
        } else {
            checks.push("❌ Missing variable type check");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more variable and data type features`;
            
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