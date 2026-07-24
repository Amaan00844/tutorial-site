// python/hard/8/tests.js
// Test for Testing and Test-Driven Development
console.log("🧪 Testing: Testing and Test-Driven Development");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for unittest import
        const hasUnittestImport = userCode.match(/\bimport\s+unittest\b/);
        if (hasUnittestImport) {
            checks.push("✅ Has unittest import");
            score += 25;
        } else {
            checks.push("❌ Missing unittest import");
        }
        
        // Check for test class
        const hasTestClass = userCode.match(/\bclass\s+\w+Test\s*\(\s*unittest\.TestCase\s*\)\s*:/);
        if (hasTestClass) {
            checks.push("✅ Has test class");
            score += 25;
        } else {
            checks.push("❌ Missing test class");
        }
        
        // Check for test method
        const hasTestMethod = userCode.match(/\bdef\s+test_\w+\s*\(\s*self\s*\)\s*:/);
        if (hasTestMethod) {
            checks.push("✅ Has test method");
            score += 25;
        } else {
            checks.push("❌ Missing test method");
        }
        
        // Check for assert statement
        const hasAssert = userCode.match(/\bself\.assert\w+\s*\(\s*[^)]+\)/);
        if (hasAssert) {
            checks.push("✅ Has assert statement");
            score += 25;
        } else {
            checks.push("❌ Missing assert statement");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more testing features`;
            
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
console.log("✅ Test ready for: Testing and Test-Driven Development");