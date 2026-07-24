// java/intermediate/5/tests.js
// Test for Lambda Expressions
console.log("🧪 Testing: Lambda Expressions");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for lambda expression
        const hasLambda = userCode.match(/\(\s*\w*\s*(,\s*\w+\s*)*\)\s*->\s*{/);
        if (hasLambda) {
            checks.push("✅ Has lambda expression");
            score += 25;
        } else {
            checks.push("❌ Missing lambda expression");
        }
        
        // Check for functional interface
        const hasFunctionalInterface = userCode.match(/@FunctionalInterface\s*\n\s*interface\s+\w+\s*{/);
        if (hasFunctionalInterface) {
            checks.push("✅ Has functional interface");
            score += 25;
        } else {
            checks.push("❌ Missing functional interface");
        }
        
        // Check for lambda with collection
        const hasLambdaCollection = userCode.match(/\b\w+\.(forEach|stream)\s*\(\s*\(\s*\w*\s*(,\s*\w+\s*)*\)\s*->\s*{/);
        if (hasLambdaCollection) {
            checks.push("✅ Has lambda with collection");
            score += 25;
        } else {
            checks.push("❌ Missing lambda with collection");
        }
        
        // Check for import java.util.function
        const hasFunctionImport = userCode.match(/\bimport\s+java\.util\.function\.\w+\s*;/);
        if (hasFunctionImport) {
            checks.push("✅ Has java.util.function import");
            score += 25;
        } else {
            checks.push("❌ Missing java.util.function import");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more lambda expression features`;
            
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

console.log("✅ Test ready for: Lambda Expressions");