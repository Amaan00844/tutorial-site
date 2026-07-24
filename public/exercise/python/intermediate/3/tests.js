// python/intermediate/3/tests.js
// Test for Decorators and Generators
console.log("🧪 Testing: Decorators and Generators");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for decorator
        const hasDecorator = userCode.match(/@\w+\s*\n\s*def\s+\w+\s*\(/);
        if (hasDecorator) {
            checks.push("✅ Has decorator");
            score += 25;
        } else {
            checks.push("❌ Missing decorator");
        }
        
        // Check for generator function
        const hasGenerator = userCode.match(/\bdef\s+\w+\s*\(\s*[^)]*\)\s*:\s*\n\s*yield\s+/);
        if (hasGenerator) {
            checks.push("✅ Has generator function");
            score += 25;
        } else {
            checks.push("❌ Missing generator function");
        }
        
        // Check for yield statement
        const hasYield = userCode.match(/\byield\s+[^;]+/);
        if (hasYield) {
            checks.push("✅ Has yield statement");
            score += 25;
        } else {
            checks.push("❌ Missing yield statement");
        }
        
        // Check for decorator function definition
        const hasDecoratorDef = userCode.match(/\bdef\s+\w+\s*\(\s*[^)]+\)\s*:\s*\n\s*def\s+\w+\s*\(/);
        if (hasDecoratorDef) {
            checks.push("✅ Has decorator function definition");
            score += 25;
        } else {
            checks.push("❌ Missing decorator function definition");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more decorator and generator features`;
            
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
console.log("✅ Test ready for: Decorators and Generators");