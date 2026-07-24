
// javascript/basic/2/tests.js
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
        
        // Check for arithmetic operators
        const hasArithmetic = userCode.match(/[-+*/%]\s*\w+\s*[-+*/%]\s*\w+/);
        if (hasArithmetic) {
            checks.push("✅ Has arithmetic operators");
            score += 25;
        } else {
            checks.push("❌ Missing arithmetic operators");
        }
        
        // Check for exponentiation
        const hasExponentiation = userCode.match(/\w+\s*\*\*\s*\w+/);
        if (hasExponentiation) {
            checks.push("✅ Has exponentiation");
            score += 25;
        } else {
            checks.push("❌ Missing exponentiation");
        }
        
        // Check for type coercion
        const hasTypeCoercion = userCode.match(/\w+\s*==\s*['"]\d+['"]|\w+\s*\+\s*['"][^'"]*['"]/);
        if (hasTypeCoercion) {
            checks.push("✅ Has type coercion");
            score += 25;
        } else {
            checks.push("❌ Missing type coercion");
        }
        
        // Check for operator precedence
        const hasPrecedence = userCode.match(/\(\s*\w+\s*[-+*/%]\s*\w+\s*\)\s*[-+*/%]\s*\w+/);
        if (hasPrecedence) {
            checks.push("✅ Has operator precedence");
            score += 25;
        } else {
            checks.push("❌ Missing operator precedence");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more arithmetic operation features`;
            
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