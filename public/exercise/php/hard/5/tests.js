// php/hard/5/tests.js
// Test for Testing and Deployment
console.log("🧪 Testing: Testing and Deployment");

function runSimpleTest(userCode) {
    const result = { passed: false, score: 0, message: '', details: [] };
    
    try {
        if (!userCode || userCode.trim().length < 5) {
            result.message = 'Code is empty or too short';
            return result;
        }
        
        let score = 0;
        const checks = [];
        
        // Check for PHPUnit test class
        const hasTestClass = userCode.match(/\bclass\s+\w+Test\s*extends\s+\w+\s*{/);
        if (hasTestClass) {
            checks.push("✅ Has PHPUnit test class");
            score += 25;
        } else {
            checks.push("❌ Missing PHPUnit test class");
        }
        
        // Check for test method
        const hasTestMethod = userCode.match(/\bfunction\s+test\w+\s*\(\s*\)\s*{/);
        if (hasTestMethod) {
            checks.push("✅ Has test method");
            score += 25;
        } else {
            checks.push("❌ Missing test method");
        }
        
        // Check for assert
        const hasAssert = userCode.match(/\b\$this\s*->\s*assert\w+\s*\(\s*[^)]+\)\s*;/);
        if (hasAssert) {
            checks.push("✅ Has assert statement");
            score += 25;
        } else {
            checks.push("❌ Missing assert statement");
        }
        
        // Check for PHPUnit require
        const hasPHPUnitRequire = userCode.match(/\brequire\s+['"].*PHPUnit.*['"]\s*;/);
        if (hasPHPUnitRequire) {
            checks.push("✅ Has PHPUnit require");
            score += 25;
        } else {
            checks.push("❌ Missing PHPUnit require");
        }
        
        result.details = checks;
        result.score = Math.min(score, 100);
        result.passed = score >= 75;
        result.message = result.passed 
            ? `Great! Score: ${result.score}/100`
            : `Score: ${result.score}/100 - Add more testing and deployment features`;
            
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
console.log("✅ Test ready for: Testing and Deployment");